# Components and Features

## Layout Components

- `components/Navbar.tsx`: fixed top navigation, mobile menu, brand logo, Products link, and call button.
- `components/Footer.tsx`: footer brand area, page links, service links, contact details, and social links.
- `components/FloatingActions.tsx`: floating quick actions for contact and page navigation.

## Page Sections

- `components/PageHero.tsx`: reusable hero section for internal pages.
- `components/SectionHeading.tsx`: consistent section headings.
- `components/ReviewsSection.tsx`: customer review display.
- `components/FAQSection.tsx`: FAQ content section, including hybrid service/product messaging.
- `components/TrustProcessSection.tsx`: trust/process messaging.
- `components/ContactCTA.tsx`: call-to-action section for contact and quote requests.

## Cards and Controls

- `components/ServiceCard.tsx`: service summary card.
- `components/GalleryCard.tsx`: gallery project card.
- `components/ButtonLink.tsx`: styled link button with optional icon.
- `components/MotionReveal.tsx`: animation wrapper for reveal effects.

## Product Components

- `components/products/ProductCard.tsx`: product card with image, category, brand, stock status, optional price, add-to-quote action, and WhatsApp quote button.
- `components/products/ProductCatalog.tsx`: client-side product search and filters for category, brand, and stock status.
- `components/products/ProductCategoryGrid.tsx`: category cards linking to product category pages.
- `components/products/QuoteBasket.tsx`: quote basket, add-to-quote button, product WhatsApp quote button, quantity controls, notes, and WhatsApp basket message generation.

## Forms and Admin

- `components/QuoteRequestForm.tsx`: quote request form UI for electrical service requests.
- `components/ContactForm.tsx`: contact form UI.
- `components/AdminPanel.tsx`: admin panel surface for managing local quote requests, products, categories, brands, gallery projects, and reviews.

## Product Feature Flow

1. Product data is loaded from `lib/products.ts`.
2. `/products` renders `ProductCatalog`.
3. Search and filters run client-side for fast catalog browsing.
4. `ProductCard` offers `Add to Quote` and `Request Price`.
5. `QuoteBasketPanel` stores selected items in localStorage.
6. The basket creates a WhatsApp message with product names, brands, quantities, and notes.
7. Product detail pages show specs, description, stock status, related products, and WhatsApp quote actions.

## Admin Feature Flow

`/admin/products` supports:

- Add product
- Edit product
- Delete product
- Manage categories
- Manage brands
- Toggle stock status
- Edit specs
- Edit short descriptions
- Edit optional price text

Admin data is local-only in Phase 1 and is not connected to a database.

## Branding

The navbar and footer use the shared logo path from `lib/site.ts`:

```ts
site.logo
```

Details are documented in `docs/branding-logo.md`.
