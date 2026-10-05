export const schedulingFields = [
  'name', 'email', 'company', 'role', 'inquiryType', 'workPreference', 'dateTime', 'message', 'consent', 'timestamp'
] as const;

export const emailTemplates = {
  notification: {
    name: 'Flynn Notification',
    subject: 'New Senior SDR Portfolio Inquiry — {{name}}',
    body: `New inquiry received from Flynn's portfolio.\n\nName: {{name}}\nEmail: {{email}}\nCompany: {{company}}\nRole: {{role}}\nInquiry type: {{inquiryType}}\nWork preference: {{workPreference}}\nRequested date/time: {{dateTime}}\nMessage: {{message}}\nConsent: {{consent}}\nSubmitted at: {{timestamp}}`,
  },
  confirmation: {
    name: 'Prospect Confirmation',
    subject: 'Your inquiry with Flynn is confirmed',
    body: `Hi {{name}},\n\nThanks for reaching out to Flynn. Your inquiry has been received.\n\nInquiry: {{inquiryType}}\nCompany: {{company}}\nRole: {{role}}\nWork preference: {{workPreference}}\nRequested date/time: {{dateTime}}\nMessage: {{message}}\n\nFlynn will review the details and follow up with the next step.\n\nThanks,\nFlynn`,
  },
};
