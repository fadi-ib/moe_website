# Change Log

## v1.1.0 - Electrical Product Catalog & Quote Basket

### Added

- Added hybrid business model documentation for electrical services and electrical product supplies.
- Added homepage hero copy for `Moe The Electrician & Electrical Supplies`.
- Added homepage CTAs for `Request Electrical Service` and `Shop Electrical Items`.
- Added featured products section under services.
- Added product categories section.
- Added `/products` product catalog page.
- Added `/products/[slug]` product detail pages.
- Added `/products/category/[slug]` product category pages.
- Added product search by name, category, brand, description, and specs.
- Added product filters by category, brand, and stock status.
- Added product cards with stock status, optional price text, and WhatsApp quote actions.
- Added quote basket with quantities, notes, localStorage persistence, and WhatsApp message generation.
- Added product admin management at `/admin/products`.
- Added local admin controls for categories, brands, stock status, specs, descriptions, optional price, add, edit, and delete.
- Added product SEO metadata for catalog, category, and detail pages.
- Added product sitemap entries for catalog, categories, and product detail pages.
- Added product SVG assets in `public/images/products/`.

### Changed

- Updated navigation to include Products.
- Updated site-wide metadata and structured data for a hybrid electrician and electrical supplies business.
- Updated FAQ content to mention electrical product sales.
- Updated admin dashboard to include product management.
- Updated project documentation, setup instructions, admin documentation, SEO notes, component documentation, and asset documentation.

### Validation

- `npm.cmd run lint`
- `npm.cmd run build`

## 2026-06-02

### Added Logo Branding

- Added the supplied logo image to `public/images/moe-logo.png`.
- Added `logo` to the shared `site` object in `lib/site.ts`.
- Replaced the temporary navbar lightning mark with the new logo.
- Replaced the temporary footer lightning mark with the new logo.
- Added the logo to metadata as the favicon and Apple icon.
- Added the logo to Open Graph metadata.
- Added the logo to local business structured data.

### Verification

- Ran `npm.cmd run lint`.
- Ran `npm.cmd run build`.
- Verified the rendered logo in the navbar and footer.
- Checked desktop and mobile header layout.
