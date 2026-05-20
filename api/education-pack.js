const OPENAI_API_URL = "https://api.openai.com/v1/responses";

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 2_500_000) {
        reject(new Error("Request body too large."));
        req.destroy();
      }
    });
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

function extractResponseText(payload) {
  if (typeof payload.output_text === "string" && payload.output_text.trim()) return payload.output_text.trim();
  const chunks = [];
  for (const item of payload.output ?? []) {
    if (item.type !== "message") continue;
    for (const content of item.content ?? []) {
      if (content.type === "output_text" && content.text) chunks.push(content.text);
    }
  }
  return chunks.join("\n").trim();
}

function safeJsonParse(value) {
  const trimmed = String(value ?? "").trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const fenced = trimmed.match(/```json\s*([\s\S]*?)```/i)?.[1] ?? trimmed.match(/\{[\s\S]*\}$/)?.[0];
    if (!fenced) throw new Error("Model response was not valid JSON.");
    return JSON.parse(fenced);
  }
}

async function openAIRequest(apiKey, payload) {
  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  const json = await response.json();
  if (!response.ok) {
    const message = json?.error?.message || "OpenAI request failed.";
    throw new Error(message);
  }
  return json;
}

function plannerPrompt({ documentText, audience, goal, lane, packSize, fileName, contextKit }) {
  const laneInstructions = {
    commercial: [
      "- Treat this as a commercial and prompt-board planning task.",
      "- Prefer outputs like storyboard page, hook frame board, product hero sheet, end-frame or tagline board, texture or motion beat sheet, and campaign prompt pack.",
      "- Each output should help a creator make a short ad or social commercial from generated images.",
      "- Keep hooks concrete and production-ready: shot size, pack shot, splash particles, reaction beat, hero composition, CTA-safe frame, tabletop gloss.",
    ],
    film: [
      "- Treat this as a film or animation preproduction planning task.",
      "- Prefer outputs like character turnaround sheet, expression pack, species dossier, prop board, continuity sheet, storyboard beat page, or edit handoff board.",
      "- Each output should help a creator preserve identity, continuity, motion cues, and scene logic across a short film.",
      "- Keep hooks concrete and production-ready: silhouette anchors, prop nouns, beat turn, shot angle, continuity markers, costume cues, Seedance motion handoff, CapCut timing board.",
    ],
    education: [
      "- Treat this as an educational explainer planning task.",
      "- Prefer outputs like comparison chart, process diagram, anatomy plate, revision poster, labeled guide, and visual taxonomy.",
      "- Each output should be useful for search queries and classroom or training use.",
      "- Keep hooks concrete and searchable.",
    ],
    mixed: [
      "- Mix commercial boards, film-preproduction assets, and explainer-style references when the source material supports it.",
      "- Keep the pack reusable for prompt iteration, motion handoff, and search-driven retrieval.",
    ],
  }[lane] ?? [];

  return [
    "You are an agentic image-pack planner.",
    "Read the source material and design a pack of reusable image ideas for a niche image service.",
    "Output JSON only with this exact schema:",
    "{",
    '  "packTitle": string,',
    '  "audience": string,',
    '  "goal": string,',
    '  "summary": string,',
    '  "searchQueries": string[],',
    '  "explainers": [',
    "    {",
    '      "title": string,',
    '      "format": string,',
    '      "objective": string,',
    '      "searchQuery": string,',
    '      "mode": string,',
    '      "hooks": string[],',
    '      "prompt": string,',
    '      "rationale": string',
    "    }",
    "  ]",
    "}",
    "",
    "Rules:",
    `- Lane: ${lane}`,
    `- Audience: ${audience}`,
    `- Goal: ${goal}`,
    `- Return exactly ${packSize} explainers.`,
    ...laneInstructions,
    "- Make the outputs useful for search queries and reuse, not just for one-off art direction.",
    "- Keep prompts specific and ready for GPT Image generation.",
    "- Keep hooks short, concrete, and searchable.",
    fileName ? `- Source file name: ${fileName}` : "",
    contextKit?.length
      ? `- Continuity context to preserve: ${contextKit.map((item) => `${item.role}: ${item.title} (${(item.hooks ?? []).join(", ")})`).join(" | ")}`
      : "",
    "",
    "Source material:",
    documentText.slice(0, 20000),
  ]
    .filter(Boolean)
    .join("\n");
}

function imagePromptForExplainer(explainer, audience, goal, lane) {
  const laneLine = lane === "commercial"
    ? "Make it feel usable as a commercial-board frame or prompt-image ad asset."
    : lane === "film"
      ? "Make it feel usable as a film-preproduction or animation-asset board."
      : "Make it feel usable as a clear explanatory or training asset.";
  return [
    `Create a polished reusable image.`,
    `Audience: ${audience}.`,
    `Goal: ${goal}.`,
    `Title: ${explainer.title}.`,
    `Format: ${explainer.format}.`,
    `Primary search query: ${explainer.searchQuery}.`,
    `Objective: ${explainer.objective}.`,
    `Search hooks: ${(explainer.hooks ?? []).join(", ")}.`,
    `Prompt brief: ${explainer.prompt}.`,
    laneLine,
    "Make it highly legible, visually structured, and useful as a search landing image.",
    "Use short labels only. No logos. No watermark. No giant paragraphs.",
  ].join("\n");
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "Method not allowed." });
  }

  if (!process.env.OPENAI_API_KEY) {
    return sendJson(res, 500, { error: "OPENAI_API_KEY is not configured." });
  }

  try {
    const raw = await readBody(req);
    const body = raw ? JSON.parse(raw) : {};
    const documentText = String(body.documentText ?? "").trim();
    const lane = String(body.lane ?? "commercial").trim();
    const contextKit = Array.isArray(body.contextKit) ? body.contextKit : [];
    const audience = String(body.audience ?? "teachers and curriculum authors").trim();
    const goal = String(body.goal ?? "mixed explanatory pack").trim();
    const fileName = body.fileName ? String(body.fileName) : null;
    const packSize = Math.max(2, Math.min(Number(body.packSize ?? 6), 8));
    const previewCount = Math.max(0, Math.min(Number(body.previewCount ?? 2), 3));

    if (!documentText) {
      return sendJson(res, 400, { error: "documentText is required." });
    }

    const planPayload = {
      model: "gpt-5.5",
      input: plannerPrompt({ documentText, audience, goal, lane, packSize, fileName, contextKit }),
      max_output_tokens: 2400,
    };

    const planResponse = await openAIRequest(process.env.OPENAI_API_KEY, planPayload);
    const planText = extractResponseText(planResponse);
    const plan = safeJsonParse(planText);

    const explainers = Array.isArray(plan.explainers) ? plan.explainers.slice(0, packSize) : [];
    const previews = [];

    for (let index = 0; index < Math.min(previewCount, explainers.length); index += 1) {
      const explainer = explainers[index];
      const imageResponse = await openAIRequest(process.env.OPENAI_API_KEY, {
        model: "gpt-5.5",
        input: imagePromptForExplainer(explainer, audience, goal, lane),
        tools: [{ type: "image_generation" }],
      });

      const imageData = (imageResponse.output ?? [])
        .filter((item) => item.type === "image_generation_call")
        .map((item) => item.result)
        .find(Boolean);

      if (imageData) {
        previews.push({
          explainerIndex: index,
          title: explainer.title,
          note: "GPT Image preview render",
          imageDataUrl: `data:image/png;base64,${imageData}`,
        });
      }
    }

    return sendJson(res, 200, {
      packTitle: plan.packTitle || "Reusable Image Pack",
      lane,
      audience,
      goal,
      contextKit,
      summary: plan.summary || "",
      searchQueries: Array.isArray(plan.searchQueries) ? plan.searchQueries.slice(0, 12) : [],
      explainers,
      previews,
    });
  } catch (error) {
    return sendJson(res, 500, {
      error: error.message || "Image pack generation failed.",
    });
  }
};
