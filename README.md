# Landing Starter Kit

Reusable React starter for building landing pages fast.

## Included

- React + Vite
- React Router (`/` and `/components` out of the box)
- Tailwind CSS v4 support
- Design tokens (`src/theme/tokens.css`)
- Reusable components (`primitives`, `composites`, `layout`, `blocks`)
- Loop carousel (autoplay + drag)
- Cloudflare SPA fallback (`public/_redirects`)

## Structure

```txt
src/
  app/
  components/
    primitives/
    composites/
    layout/
    blocks/
  data/
  pages/
  theme/
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Cloudflare Pages

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

This project includes:

```txt
public/_redirects
/* /index.html 200
```

for SPA route refresh support.
