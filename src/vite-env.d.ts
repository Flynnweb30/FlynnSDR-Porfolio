/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_NOTIFICATION_EMAIL?: string;
  readonly VITE_AUDIO_1_URL?: string;
  readonly VITE_AUDIO_2_URL?: string;
  readonly VITE_AUDIO_3_URL?: string;
}
interface ImportMeta { readonly env: ImportMetaEnv }
