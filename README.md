# Flynn James Q. Pontino — Senior SDR Portfolio

Production-ready Vite/React static portfolio for GitHub + Render. The existing visual system is preserved; content and functionality are focused on Senior SDR, B2B cold calling, appointment setting, lead generation, prospect qualification, objection handling, and SDR mentoring.

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Publish directory: `dist`

## Render Static Site

- Build Command: `npm run build`
- Publish Directory: `dist`
- Rewrite: `/*` → `/index.html`
- Environment variables: all `VITE_*` variables from `.env.example`

## EmailJS

The scheduler sends two EmailJS templates using the same submitted variables:

`fullName`, `email`, `company`, `role`, `inquiryType`, `employmentPreference`, `selectedDate`, `selectedTime`, `message`, `consent`, `timestamp`, `timezone`, `source`.

Template A (Flynn Notification) should send the complete inquiry to Flynn.
Template B (Prospect Confirmation) should send the submitted details, selected schedule, consent status, and next-step message to the prospect.

The public key, service ID, and template IDs are configured through Vite environment variables.

## Audio

The HTML5 audio player is wired to `VITE_AUDIO_CALL_1_URL` through `VITE_AUDIO_CALL_4_URL`. Use the four supplied recording URLs as the values. The player does not use YouTube, synthetic audio, or placeholder media.

## SEO

Included:
- canonical URL
- robots.txt
- sitemap.xml
- Open Graph metadata
- crawlable static HTML shell
- responsive mobile-first layout

## Notes

The intro animation displays “Flynn” for approximately 1.5–2.3 seconds on every page refresh, including hard refreshes, while preserving the existing visual design.

### Template A — Flynn Notification

Subject: `New {{inquiryType}} — {{employmentPreference}} — {{fullName}}`

Body:

`New portfolio inquiry received.\n\nName: {{fullName}}\nEmail: {{email}}\nCompany: {{company}}\nRole: {{role}}\nInquiry: {{inquiryType}}\nPreference: {{employmentPreference}}\nDate: {{selectedDate}}\nTime: {{selectedTime}}\nMessage: {{message}}\nConsent: {{consent}}\nTimestamp: {{timestamp}}\nTimezone: {{timezone}}\nSource: {{source}}`

### Template B — Prospect Confirmation

Subject: `Flynn — Inquiry Received for {{selectedDate}} at {{selectedTime}}`

Body:

`Hi {{fullName}},\n\nThanks for reaching out to Flynn. Your inquiry has been received.\n\nSelected date: {{selectedDate}}\nSelected time: {{selectedTime}}\nInquiry type: {{inquiryType}}\nPreference: {{employmentPreference}}\nCompany: {{company}}\nRole: {{role}}\n\nFlynn will review your request and follow up with the next steps.\n\nYou consented to receive email about this inquiry: {{consent}}.`

For Template B, set the EmailJS recipient/to-email field to `{{email}}`.
