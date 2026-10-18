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
  // If EmailJS env vars are not yet configured in local environment, log gracefully
  if (!config.publicKey || !config.serviceId) {
    console.info('EmailJS credentials not configured. Logging inquiry payload locally:', payload);
    return;
  }

  const templateParams = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, String(value)])
  );

  if (config.notificationTemplateId) {
    await sendTemplate(config.notificationTemplateId, templateParams);
  }
  if (config.confirmationTemplateId) {
    await sendTemplate(config.confirmationTemplateId, templateParams);
  }
}
