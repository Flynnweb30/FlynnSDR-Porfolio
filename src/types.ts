export type PageRoute = 
  | 'home' 
  | 'hire-me' 
  | 'references' 
  | 'academy'
  | 'experience' 
  | 'calls' 
  | 'playbook' 
  | 'leadership' 
  | 'contact'
  | 'services'
  | 'service-cold-calling'
  | 'service-appointment-setting'
  | 'service-lead-qualification'
  | 'service-sdr-coaching'
  | 'industries'
  | 'industry-saas-tech'
  | 'industry-marketing-agencies'
  | 'industry-b2b-events'
  | 'industry-commercial-contracting';

export interface WorkExperience {
  role: string;
  company: string;
  industry: string;
  location: string;
  period: string;
  achievements: string[];
  kpis?: string[];
}

export interface CallRecording {
  id: string;
  title: string;
  prospect: string;
  company: string;
  industry: string;
  duration: string;
  durationSeconds: number;
  outcome: string;
  date: string;
  challenge: string;
  tacticalWin: string;
  keyMetric: string;
  skillTag?: string;
  dealSize?: string;
  transcript: {
    time: string;
    speaker: 'Flynn' | 'Prospect';
    text: string;
    technique?: string;
  }[];
}