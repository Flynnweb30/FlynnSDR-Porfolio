export type PageRoute = 'home' | 'calls' | 'experience' | 'references' | 'playbook' | 'leadership' | 'contact';

export interface WorkExperience {
  role: string;
  company: string;
  industry: string;
  location: string;
  period: string;
  achievements: string[];
  kpis?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}
