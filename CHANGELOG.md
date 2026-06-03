# Changelog

## v1.1.0 - Electrical Product Catalog & Quote Basket

### Added

- Added hybrid business positioning for electrical services and electrical product supplies.
- Added homepage hero copy for `Moe The Electrician & Electrical Supplies`.
- Added homepage CTAs for service requests and electrical item shopping.
- Added featured products section under services on the homepage.
- Added product category section on the homepage.
- Added `/products` product catalog page.
- Added product category pages at `/products/category/[slug]`.
- Added product detail pages at `/products/[slug]`.
- Added product search by name, brand, category, description, and specs.
- Added filters for product category, brand, and stock status.
- Added quote basket with product quantities, item notes, and WhatsApp message generation.
- Added product WhatsApp quote buttons using `Request Price` language.
- Added admin product management at `/admin/products`.
- Added local admin management for products, categories, brands, stock status, optional price, specs, and descriptions.
- Added product SEO metadata for catalog, category, and product detail pages.
- Added product and category sitemap entries.
- Added product assets under `public/images/products/`.

### Changed

- Updated navigation to include Products.
- Updated site-wide metadata and structured service types to reflect the hybrid service and product model.
- Updated FAQ content to mention electrical product sales.
- Updated admin dashboard to include product counts and product management navigation.
- Updated documentation for architecture, setup, admin, SEO, product catalog, quote basket, and release notes.

### Validation

- `npm.cmd run lint`
- `npm.cmd run build`

## v1.0.0 - Initial Website

### Added

- Added service-first Moe The Electrician website.
- Added homepage, services, about, gallery, blog, quote, contact, admin, SEO pages, sitemap, and local admin data.
- Added logo branding and shared site data.
