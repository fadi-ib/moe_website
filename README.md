# Moe The Electrician

Modern hybrid electrical services and electrical products website built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Business Model

Moe The Electrician serves two connected customer needs:

- Electrical services: emergency repairs, residential electrical work, commercial electrical work, panels, lighting, generators, wiring, and smart-home electrical support.
- Solar electrical support: PV wiring, inverter connections, DC protection, solar accessories, and solar-ready installation help.
- Electrical products catalog: quote-based electrical supplies with WhatsApp-first pricing and availability requests.

The product catalog is not a full ecommerce checkout. Phase 1 is intentionally quote-based: customers browse products, add items to a quote basket, include quantities and notes, then send the request by WhatsApp.

## Pages

- `/`: homepage with service and product CTAs, services preview, featured products, product categories, quote form, reviews, gallery preview, contact CTAs, FAQs, and trust/process content.
- `/services`: electrical service overview.
- `/solar`: solar electrical support overview with PV wiring, inverter, DC protection, and solar accessory CTAs.
- `/solar-calculator`: MOE VOLT solar and battery sizing calculator with sanitized customer inputs, inverter, battery, and PV panel estimates.
- `/products`: searchable and filterable electrical products catalog.
- `/products/[slug]`: product detail pages with image, brand, category, specs, stock status, WhatsApp quote button, and related products.
- `/products/category/[slug]`: product category pages for circuit breakers, cables and wires, switches and sockets, LED lighting, electrical panels, contactors and relays, solar accessories, and tools and accessories.
- `/about`: about page.
- `/gallery`: project gallery.
- `/blog`: blog page.
- `/quote`: electrical service quote request page.
- `/contact`: contact page.
- `/admin`: local admin dashboard.
- `/admin/products`: local product, category, brand, and stock management.
- `/admin/quote-requests`: local quote request management.
- `/admin/gallery`: local gallery management.
- `/admin/reviews`: local reviews management.
- Service area pages for Beirut, Mount Lebanon, Jounieh, Baabda, and Aley.

## Product Catalog

Product data lives in `lib/products.ts`. Each product includes:

- Name
- Category and category slug
- Brand
- Image
- Optional price text
- Stock status
- Electrical specs
- Short description
- Featured-product flag

Product assets are stored in `public/images/products/` as lightweight SVG illustrations for category-based product visuals.

## Quote Basket

The quote basket is implemented in `components/products/QuoteBasket.tsx`.

- Customers can add products to a local quote basket.
- Quantities can be increased or decreased.
- Notes can be added per item.
- The basket builds a WhatsApp message with product names, brands, quantities, and notes.
- No payment gateway or checkout is connected in Phase 1.

## Solar Calculator

The solar calculator is implemented in `app/solar-calculator/SolarCalculatorClient.tsx`.

- Customer name accepts letters and spaces only.
- Phone number accepts digits only.
- Load, hours, voltage, panel, battery, peak-sun, and safety-margin fields accept positive decimal numbers only.
- Calculations remain blocked until all required numeric inputs are valid and greater than 0.
- The Request Quotation CTA passes the calculator summary to `/quote`.

## Admin

The admin panel uses browser localStorage for demo/local management, matching the existing quote request style.

- Password: `moe-admin`
- Product storage key: `moe_products`
- Category storage key: `moe_product_categories`
- Brand storage key: `moe_product_brands`
- Quote request storage key: `moe_quote_requests`
- Gallery storage key: `moe_gallery_projects`
- Reviews storage key: `moe_reviews`

Admin product management supports adding, editing, deleting, category management, brand management, stock status toggles, optional price text, specs, and descriptions.

## SEO

SEO metadata is implemented for:

- Site-wide layout metadata in `app/layout.tsx`
- `/products`
- `/products/[slug]`
- `/products/category/[slug]`
- Service pages and existing SEO pages
- Sitemap entries in `app/sitemap.ts`

Product SEO targets terms including:

- electrical supplies Lebanon
- electrical items Beirut
- electrician and electrical store
- circuit breakers Lebanon
- LED lighting Lebanon
- solar electrician Lebanon
- solar accessories Lebanon
- Solar Calculator Lebanon
- Battery Sizing Calculator
- MOE VOLT

## Documentation

- [Website overview](docs/website-overview.md)
- [Components and features](docs/components.md)
- [Branding and assets](docs/branding-logo.md)
- [Change log](docs/change-log.md)
- [Root changelog](CHANGELOG.md)

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`:

```bash
npm.cmd run dev
```

## Production Build

```bash
npm run lint
npm run build
npm run start
```

On Windows PowerShell:

```bash
npm.cmd run lint
npm.cmd run build
npm.cmd run start
```

## Release

Current prepared release:

- Version: `v1.1.0`
- Title: `Electrical Product Catalog, Solar Visibility & Quote Basket`

## Notes

- Update contact details in `lib/site.ts`.
- Update product data in `lib/products.ts` or through `/admin/products` for local demo management.
- Replace product SVG illustrations with real product photos when available.
- The quote and contact forms are presentation-ready and can be connected to an email/API handler later.
- Do not connect payment or a real inventory database until a future phase.
