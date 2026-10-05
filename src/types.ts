export type PageRoute = 'home' | 'calls' | 'experience' | 'references' | 'contact';

export interface ScheduleFormData {
  fullName: string;
  email: string;
  company: string;
  role: string;
  inquiryType: string;
  employmentPreference: 'Part-Time' | 'Full-Time';
  selectedDate: string;
  selectedTime: string;
  message: string;
  consent: boolean;
  submissionTimestamp: string;
}
