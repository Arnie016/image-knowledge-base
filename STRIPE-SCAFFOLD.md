# Stripe Scaffold

This static gallery currently does not collect payments. The pricing cards in `site/index.html` are product scaffolding only.

When paid downloads, watermark-free exports, or course packs are ready, use Stripe-hosted Checkout Sessions. Do not put Stripe secret keys in the static site.

## Recommended Products

- Free Browse: public gallery access.
- Study Packs: downloadable AP, A-level, IB, and course-specific image sets.
- Creator License: watermark-free PNG downloads, prompt reuse, and batch exports.

## Minimal Implementation Shape

1. Create Stripe Products and Prices in the Stripe Dashboard.
2. Add a serverless endpoint, for example `/api/create-checkout-session`.
3. The endpoint should call `stripe.checkout.sessions.create`.
4. The static pricing buttons should POST a selected `priceId` to that endpoint.
5. Stripe redirects the user to hosted Checkout.
6. Use webhooks to unlock paid downloads or mark a license as active.

## Environment Variables

```text
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
PUBLIC_SITE_URL=https://image-knowledge-base.vercel.app
```

## Notes

- Use the latest Stripe API version available to the SDK.
- Prefer Checkout Sessions over raw PaymentIntents for this product.
- Add watermarking only when the licensing model is decided.
- Keep prompt-card browsing public unless paid access becomes a product decision.
