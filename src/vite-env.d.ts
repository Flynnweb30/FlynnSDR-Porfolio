/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID?: string;
  readonly VITE_AUDIO_CALL_1_URL?: string;
  readonly VITE_AUDIO_CALL_2_URL?: string;
  readonly VITE_AUDIO_CALL_3_URL?: string;
  readonly VITE_AUDIO_CALL_4_URL?: string;
  readonly VITE_AUDIO_CALL_5_URL?: string;
  readonly VITE_AUDIO_CALL_6_URL?: string;
  readonly VITE_AUDIO_CALL_7_URL?: string;
  readonly VITE_INTRO_VIDEO_URL?: string;
  readonly VITE_PROFILE_VIDEO_URL?: string;
}
interface ImportMeta { readonly env: ImportMetaEnv }
