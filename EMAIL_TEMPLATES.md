# Scheduling Email Templates

The static frontend passes the same scheduling variables to both EmailJS templates.

Variables:

- `{{fullName}}`
- `{{email}}`
- `{{company}}`
- `{{role}}`
- `{{inquiryType}}`
- `{{employmentPreference}}`
- `{{selectedDate}}`
- `{{selectedTime}}`
- `{{message}}`
- `{{consent}}`
- `{{submissionTimestamp}}`
- `{{timestamp}}`
- `{{prospect_email}}`
- `{{to_email}}`
- `{{body}}`

## Template A — Flynn receives

**Subject:** New 15-Minute Intro Inquiry — `{{fullName}}`

```text
NEW FLYNN INTRO INQUIRY

Full name: {{fullName}}
Email: {{email}}
Company: {{company}}
Role: {{role}}
Inquiry type: {{inquiryType}}
Part-time/full-time preference: {{employmentPreference}}
Selected date: {{selectedDate}}
Selected time: {{selectedTime}}
Message: {{message}}
Consent status: {{consent}}
Submission timestamp: {{submissionTimestamp}}

Reply to the prospect at: {{email}}
```

Set the destination email to Flynn's work email.

## Template B — Prospect receives

**Subject:** Intro Request Received — Flynn James Q. Pontino

```text
Hi {{fullName}},

Thanks for reaching out to Flynn. Your 15-minute intro request has been received.

Submitted details:
• Company: {{company}}
• Role: {{role}}
• Inquiry: {{inquiryType}}
• Preference: {{employmentPreference}}
• Selected date: {{selectedDate}}
• Selected time: {{selectedTime}}
• Message: {{message}}

Next step: Flynn will review the request and confirm the meeting details directly.

Best,
Flynn James Q. Pontino
Senior SDR
va.flynnjames@gmail.com
```

Set the destination email to `{{prospect_email}}`.
