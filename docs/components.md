# Components

## Layout Components

- `components/Navbar.tsx`: fixed top navigation, mobile menu, brand logo, and call button.
- `components/Footer.tsx`: footer brand area, page links, service links, contact details, and social links.
- `components/FloatingActions.tsx`: floating quick actions for contact and page navigation.

## Page Sections

- `components/PageHero.tsx`: reusable hero section for internal pages.
- `components/SectionHeading.tsx`: consistent section headings.
- `components/ReviewsSection.tsx`: customer review display.
- `components/FAQSection.tsx`: FAQ content section.
- `components/TrustProcessSection.tsx`: trust/process messaging.
- `components/ContactCTA.tsx`: call-to-action section for contact and quote requests.

## Cards and Controls

- `components/ServiceCard.tsx`: service summary card.
- `components/GalleryCard.tsx`: gallery project card.
- `components/ButtonLink.tsx`: styled link button with optional icon.
- `components/MotionReveal.tsx`: animation wrapper for reveal effects.

## Forms and Admin

- `components/QuoteRequestForm.tsx`: quote request form UI.
- `components/ContactForm.tsx`: contact form UI.
- `components/AdminPanel.tsx`: admin panel surface for managing display data.

## Branding

The navbar and footer use the shared logo path from `lib/site.ts`:

```ts
site.logo
```

Details are documented in `docs/branding-logo.md`.

