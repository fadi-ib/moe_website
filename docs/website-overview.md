# Website Overview

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Main Folders

- `app`: routes, layout, global styles, metadata, sitemap, and robots configuration.
- `components`: reusable UI sections and controls.
- `lib`: shared website data and helper modules.
- `public`: static assets served by the website.

## Main Pages

- `/`: home page.
- `/services`: service overview.
- `/about`: about page.
- `/gallery`: project gallery.
- `/blog`: blog page.
- `/quote`: quote request page.
- `/contact`: contact page.
- `/electrician-beirut`: Beirut service area page.
- `/electrician-mount-lebanon`: Mount Lebanon service area page.
- `/electrician-jounieh`: Jounieh service area page.
- `/electrician-baabda`: Baabda service area page.
- `/electrician-aley`: Aley service area page.

## Shared Site Data

Most editable business content is centralized in:

```text
lib/site.ts
```

This includes:

- Business name
- Logo path
- Phone, WhatsApp, email, and address
- Navigation links
- Services
- Testimonials and reviews
- FAQs
- Trust badges
- Service area content

## Running the Website

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`:

```bash
npm.cmd run dev
npm.cmd run build
```

