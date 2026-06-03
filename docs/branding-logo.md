# Branding and Logo

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

## Replacement Notes

To replace the logo, overwrite `public/images/moe-logo.png` with the new image and keep the same file name. If the file name changes, update `site.logo` in `lib/site.ts`.

