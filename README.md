# Flynn James Q. Pontino — Senior SDR Portfolio

Production-ready Vite + React static portfolio for GitHub + Render.

## Local

```bash
npm install
npm run lint
npm run build
npm run preview
```

## Render

- Environment: Static Site
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Rewrite: `/*` → `/index.html`

### Required environment variables

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_OWNER_TEMPLATE_ID`
- `VITE_EMAILJS_PROSPECT_TEMPLATE_ID`
- `VITE_AUDIO_1_URL`
- `VITE_AUDIO_2_URL`
- `VITE_AUDIO_3_URL`

The scheduling workflow sends two EmailJS templates when configured: one to Flynn and one to the prospect. If EmailJS is not configured, the form validates locally and falls back to a prefilled email containing the complete inquiry data.

## EmailJS template variables

The frontend passes these variables to both templates:

`fullName`, `email`, `company`, `role`, `inquiryType`, `employmentPreference`, `selectedDate`, `selectedTime`, `message`, `consent`, `submissionTimestamp`, `timestamp`, `to_email`, `prospect_email`, `body`.

### Template A — Flynn receives

Use `{{body}}` as the email body or compose from the individual variables. Set the destination to Flynn's work email.

### Template B — Prospect receives

Use `{{body}}` or the individual variables. Set the destination to `{{prospect_email}}`.

## SEO

`public/robots.txt` and `public/sitemap.xml` are included and use the production Render URL.
