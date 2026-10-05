# Flynn Senior SDR Portfolio

Production-ready Vite + React static portfolio for GitHub + Render.

## Local

```bash
npm install
npm run lint
npm run build
npm run preview
```

## Render Static Site

- Runtime: Static Site
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- SPA rewrite: `public/_redirects` → `/* /index.html 200`

### Required environment variables

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID`
- `VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID`

The notification template receives every inquiry variable. The confirmation template receives the same variables and should be configured to send to the submitted `email` field.

### Email template variables

`name`, `email`, `company`, `role`, `inquiryType`, `employmentPreference`, `date`, `time`, `message`, `consent`, `timestamp`, `timezone`

The consent checkbox is required before submission.

## Audio

The three supplied Google Drive files are wired to native HTML audio controls through their download endpoints. For browser playback, each Drive file must be shared so the public/target viewer can access it.

## SEO

- `public/sitemap.xml`
- `public/robots.txt`
- Canonical + Open Graph metadata in `index.html`
- Route-specific document titles
