# Branding and Assets

## Logo Asset

The website logo is stored at:

```text
public/images/moe-logo.png
```

The public URL is:

```text
/images/moe-logo.png
```

## Shared Logo Setting

The logo path is defined in:

```text
lib/site.ts
```

```ts
logo: "/images/moe-logo.png"
```

Use this shared `site.logo` value whenever the logo is needed so the path can be changed in one place.

## Where the Logo Appears

- `components/Navbar.tsx`: primary header logo.
- `components/Footer.tsx`: footer brand logo.
- `app/layout.tsx`: favicon, Apple icon, Open Graph image, and structured data image.

## Product Assets

The Phase 1 product catalog uses lightweight SVG product/category illustrations stored in:

```text
public/images/products/
```

Current product assets:

- `circuit-breaker.svg`
- `cable-wire.svg`
- `switch-socket.svg`
- `led-lighting.svg`
- `electrical-panel.svg`
- `contactor-relay.svg`
- `solar-accessory.svg`
- `tools-accessories.svg`

These assets are referenced from `lib/products.ts` through each product's `image` value.

## Replacement Notes

To replace the logo, overwrite `public/images/moe-logo.png` with the new image and keep the same file name. If the file name changes, update `site.logo` in `lib/site.ts`.

To replace product visuals with real product photos, add the images under `public/images/products/` and update the relevant product records in `lib/products.ts` or through local admin management.
