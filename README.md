# Skybeam Site — Production Starter

Multi-page marketing site built with **Vite + React + TypeScript + Tailwind**, ready for static hosting on **S3** (optionally behind **CloudFront**).

## Dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy via GitHub Actions
Add repo **secrets**: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET`, and optionally `CLOUDFRONT_DISTRIBUTION_ID`.

S3 static website should have `index.html` and `error document` both set to `index.html` for SPA routing.

## Customize
- Edit pages in `src/pages/*`
- Navbar/Footer in `src/ui/*`
- Colors in `tailwind.config.ts`
- Icons via `lucide-react`
- Hook the Contact form to a service or Lambda endpoint
