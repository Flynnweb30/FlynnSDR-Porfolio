# Centralized Email Templates

Create two EmailJS templates using these exact variable names.

## 1. Flynn Notification

**To:** Flynn
**Subject:** New Senior SDR inquiry — {{name}} / {{company}}

New inquiry received from the portfolio.

Name: {{name}}
Email: {{email}}
Company: {{company}}
Role: {{role}}
Inquiry type: {{inquiryType}}
Part-Time/Full-Time preference: {{employmentPreference}}
Requested date: {{date}}
Requested time: {{time}}
Timezone: {{timezone}}
Message: {{message}}
Consent: {{consent}}
Timestamp: {{timestamp}}

## 2. Prospect Confirmation

**To:** {{email}}
**Subject:** Flynn — inquiry received and schedule request confirmed

Hi {{name}},

Thanks for reaching out about a Senior SDR opportunity. I received your inquiry and schedule request.

Company: {{company}}
Role: {{role}}
Inquiry type: {{inquiryType}}
Preference: {{employmentPreference}}
Requested date: {{date}}
Requested time: {{time}}
Timezone: {{timezone}}
Message: {{message}}

Next step: Flynn will review the details and follow up by email with the next step.

Thanks,
Flynn James Q. Pontino
Senior SDR | B2B Cold Caller | Appointment Setter
