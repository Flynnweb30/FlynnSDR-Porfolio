# Flynn James Q. Pontino — Senior SDR Portfolio

Production-ready React/Vite static portfolio for GitHub + Render. Positioning is strictly Senior SDR / B2B Cold Caller / Appointment Setter.

## Local development

```bash
npm install
npm run dev
```

## Build / QA

```bash
npm run build
npm run lint
```

## Render Static Site

- **Environment:** Static Site
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Rewrite:** `/*` → `/index.html` (already included in `render.yaml`)

### Required Render environment variables

```text
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID=...
VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
VITE_NOTIFICATION_EMAIL=va.flynnjames@gmail.com
```

Optional audio overrides:

```text
VITE_AUDIO_1_URL=...
VITE_AUDIO_2_URL=...
VITE_AUDIO_3_URL=...
```

If audio overrides are blank, the site uses the three supplied Google Drive file IDs as fallback sources. For the most reliable browser playback, use direct HTTPS audio-file URLs in the three `VITE_AUDIO_*_URL` variables.

## EmailJS setup

Create two EmailJS templates using the centralized definitions in `src/data/emailTemplates.ts`:

1. **Flynn Notification** — sends every submitted field to Flynn.
2. **Prospect Confirmation** — confirms the inquiry and requested schedule to the prospect.

Template variables:

`{{name}}`, `{{email}}`, `{{company}}`, `{{role}}`, `{{inquiryType}}`, `{{workPreference}}`, `{{dateTime}}`, `{{message}}`, `{{consent}}`, `{{timestamp}}`, `{{to_email}}`

Set the notification template's recipient to `{{to_email}}` or to Flynn's fixed notification address. The confirmation template's recipient should be `{{email}}`.

The scheduling form requires the consent checkbox:

> I'm okay with Flynn emailing me about my inquiry. No spam, ever.

## SEO

- `robots.txt` and `sitemap.xml` are in `public/`.
- Canonical URL and Open Graph metadata are in `index.html`.
- Render SPA rewrite keeps direct page routes working.

## Architecture

Reusable navigation, footer, scheduling, resume, audio, testimonials, data, email-template definitions, and SEO/deployment configuration are centralized. Pages are route-based while remaining a single static Vite build suitable for Render.
