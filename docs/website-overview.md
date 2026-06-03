# Website Overview

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Current Release

- Version: `v1.1.0`
- Release title: `Electrical Product Catalog & Quote Basket`

## Business Model

The website now presents Moe The Electrician as a hybrid electrical business:

- Electrical services for homes, shops, offices, panels, lighting, generators, wiring, troubleshooting, and emergencies.
- Electrical products catalog for quote-based supply of breakers, cables, switches, sockets, LED lighting, panels, contactors, relays, solar accessories, tools, and accessories.

The product side is Phase 1 only. There is no payment gateway, no online checkout, and no live inventory database. Customers request prices and availability through WhatsApp.

## Main Folders

- `app`: routes, layout, global styles, metadata, sitemap, and robots configuration.
- `app/products`: product catalog, product detail pages, and product category pages.
- `app/admin`: local admin routes for dashboard, quotes, products, gallery, and reviews.
- `components`: reusable UI sections and controls.
- `components/products`: product cards, product catalog filters, category grid, quote basket, and WhatsApp quote controls.
- `lib`: shared website data, admin defaults, product catalog data, and helper modules.
- `public`: static assets served by the website.
- `public/images/products`: product/category SVG assets used by the catalog.
- `docs`: project documentation.

## Main Pages

- `/`: home page with service and product positioning.
- `/services`: service overview.
- `/products`: product catalog with search and filters.
- `/products/[slug]`: product detail pages.
- `/products/category/[slug]`: product category pages.
- `/about`: about page.
- `/gallery`: project gallery.
- `/blog`: blog page.
- `/quote`: quote request page for services.
- `/contact`: contact page.
- `/admin`: local admin dashboard.
- `/admin/products`: product manager.
- `/admin/quote-requests`: quote request manager.
- `/admin/gallery`: gallery manager.
- `/admin/reviews`: reviews manager.
- `/electrician-beirut`: Beirut service area page.
- `/electrician-mount-lebanon`: Mount Lebanon service area page.
- `/electrician-jounieh`: Jounieh service area page.
- `/electrician-baabda`: Baabda service area page.
- `/electrician-aley`: Aley service area page.

## Homepage Structure

The homepage includes:

- Hybrid hero: `Moe The Electrician & Electrical Supplies`.
- Primary CTAs: `Request Electrical Service` and `Shop Electrical Items`.
- WhatsApp/contact link for urgent service or product pricing.
- Electrical services preview.
- Featured products section.
- Product categories section.
- Quote request form.
- Why choose us section.
- Reviews.
- Gallery preview.
- Contact CTA.
- FAQs.
- Trust/process section.
- Final WhatsApp CTA.

## Product Catalog

Product catalog data is centralized in:

```text
lib/products.ts
```

Each product includes:

- `id`
- `slug`
- `name`
- `category`
- `categorySlug`
- `brand`
- `image`
- optional `price`
- `stockStatus`
- `specs`
- `description`
- optional `featured`

Product categories include:

- Circuit Breakers
- Cables & Wires
- Switches & Sockets
- LED Lighting
- Electrical Panels
- Contactors & Relays
- Solar Accessories
- Tools & Accessories

## Quote Basket Workflow

The quote basket is local to the browser and is designed for WhatsApp conversion.

1. Customer browses `/products`.
2. Customer searches or filters products.
3. Customer adds products to the quote basket.
4. Customer adjusts quantities and notes.
5. Customer sends the basket by WhatsApp.
6. Moe confirms price, availability, and installation needs.

There is no payment checkout in this phase.

## Admin Workflow

Admin routes use the existing localStorage pattern for demo/local management.

- Login password: `moe-admin`
- `/admin/products`: add, edit, delete products; manage categories and brands; toggle stock status; edit specs and descriptions.
- `/admin/quote-requests`: manage quote request status.
- `/admin/gallery`: manage local gallery display items.
- `/admin/reviews`: manage local reviews.

## Shared Site Data

Editable business content is centralized in:

```text
lib/site.ts
lib/products.ts
lib/adminData.ts
```

`lib/site.ts` includes:

- Business name
- Logo path
- Phone, WhatsApp, email, and address
- Navigation links
- Services
- Testimonials and reviews
- FAQs
- Trust badges
- Service area content

`lib/products.ts` includes product categories, default products, featured products, and product lookup helpers.

`lib/adminData.ts` maps default local admin data for quotes, gallery, reviews, products, categories, and brands.

## SEO and Sitemap

SEO metadata is implemented in:

- `app/layout.tsx`
- `app/products/page.tsx`
- `app/products/[slug]/page.tsx`
- `app/products/category/[slug]/page.tsx`
- Existing service and location pages

The sitemap in `app/sitemap.ts` includes:

- Core site routes
- SEO service area routes
- `/products`
- All product category routes
- All product detail routes

Target product SEO keywords include:

- electrical supplies Lebanon
- electrical items Beirut
- electrician and electrical store
- circuit breakers Lebanon
- LED lighting Lebanon

## Running the Website

Development:

```bash
npm run dev
```

Production build:

```bash
npm run lint
npm run build
npm run start
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`:

```bash
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
```
