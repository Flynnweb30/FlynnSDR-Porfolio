const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

export interface InquiryPayload {
  fullName: string;
  email: string;
  company: string;
  role: string;
  inquiryType: 'Interview' | 'SDR Inquiry' | 'Partnership' | 'Other' | string;
  employmentPreference: 'Full-Time' | 'Part-Time' | string;
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
    return;
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
    throw new Error(detail || `Email dispatch failed with status ${response.status}`);
  }
}

export async function sendInquiryEmails(payload: InquiryPayload): Promise<void> {
  if (!config.publicKey || !config.serviceId || !config.notificationTemplateId || !config.confirmationTemplateId) {
    throw new Error('Scheduling email is not configured yet. Please contact Flynn directly or try again later.');
  }

  const templateParams = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, String(value)])
  );

  // Require both messages to succeed so the UI never reports a successful booking
  // when either the notification or prospect confirmation failed.
  await Promise.all([
    sendTemplate(config.notificationTemplateId, templateParams),
    sendTemplate(config.confirmationTemplateId, templateParams),
  ]);
}
