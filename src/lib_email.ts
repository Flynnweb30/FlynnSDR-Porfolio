const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

export interface InquiryPayload {
  fullName: string;
  email: string;
  company: string;
  role: string;
  inquiryType: string;
  employmentPreference: string;
  selectedDate: string;
  selectedTime: string;
  message: string;
  consent: boolean;
  timestamp: string;
  timezone: string;
  source: string;
}

const config = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  notificationTemplateId: import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID as string | undefined,
  confirmationTemplateId: import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID as string | undefined,
};

export const emailJsConfig = config;

async function sendTemplate(templateId: string, templateParams: Record<string, string | boolean>) {
  if (!config.publicKey || !config.serviceId || !templateId) {
    throw new Error('EmailJS configuration is incomplete. Check the VITE_EMAILJS_* environment variables.');
  }

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: templateId,
      user_id: config.publicKey,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(detail || `EmailJS request failed with status ${response.status}`);
  }
}

export async function sendInquiryEmails(payload: InquiryPayload) {
  const templateParams = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, String(value)])
  );

  await sendTemplate(config.notificationTemplateId || '', templateParams);
  await sendTemplate(config.confirmationTemplateId || '', templateParams);
}
