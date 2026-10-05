import { Testimonial, WorkExperience } from '../types';

export const personalInfo = {
  fullName: 'Flynn James Q. Pontino',
  shortName: 'Flynn',
  title: 'Senior SDR | B2B Cold Caller | Appointment Setter',
  tagline: 'I turn cold conversations into qualified opportunities.',
  executiveSummary:
    'Senior SDR with 11+ years of B2B outbound sales, cold calling, appointment setting, qualification, and lead generation across US, UK, Australian, and Singapore markets. Known for disciplined prospecting, practical objection handling, clean CRM execution, and consistently booking qualified meetings for sales teams.',
  phone: '+63 930 635 9306',
  email: 'va.flynnjames@gmail.com',
  location: 'Toledo, Cebu, Philippines',
  linkedin: 'https://linkedin.com/in/fjpontino',
  discord: 'flynn30',
  portfolioUrl: 'https://flynn-james-pontino-resume.onrender.com',
  availability: 'Available — Remote · Part-Time or Full-Time',
  yearsExperience: '11+ years',
  pipelineSourced: '$1.8M+',
  meetingsPerMonth: '30+',
  callsPerDay: '150+',
  quotaAttainment: '120–150%',
  heroImage: '/assets/flynn-in-office-2.avif',
  teamImage: '/assets/team-flynn-1.avif',
};

export const keyAchievements = [
  { label: 'B2B Outbound Experience', value: '11+ Years', detail: 'Cold calling, prospecting & appointment setting' },
  { label: 'Pipeline Sourced', value: '$1.8M+', detail: 'Qualified opportunities generated' },
  { label: 'Meetings / Month', value: '30+', detail: 'Qualified meetings across international markets' },
  { label: 'Daily Call Volume', value: '150+', detail: 'High-volume outbound execution' },
  { label: 'Quota Attainment', value: '120–150%', detail: 'Consistent target performance' },
  { label: 'LinkedIn Meetings', value: '5–10 / Week', detail: 'Targeted social prospecting' },
];

export const coreSkills = [
  'B2B Lead Generation', 'Cold Calling', 'Outbound Prospecting', 'BANT Qualification',
  'Appointment Setting', 'Objection Handling', 'ICP Prospecting', 'Multi-Channel Outreach',
  'Lead Qualification', 'CRM Management', 'Pipeline Handoff', 'SDR Mentoring',
];

export const toolsAndTech = [
  { name: 'Apollo.io', category: 'Prospecting', level: 'Advanced', note: 'TAM research, direct dials and sequences' },
  { name: 'LinkedIn Sales Navigator', category: 'Prospecting', level: 'Advanced', note: 'Persona, account and ICP targeting' },
  { name: 'ZoomInfo', category: 'Data', level: 'Advanced', note: 'Contact enrichment and account research' },
  { name: 'Lusha', category: 'Enrichment', level: 'Advanced', note: 'B2B contact and email enrichment' },
  { name: 'HubSpot', category: 'CRM', level: 'Advanced', note: 'Lead activity, pipeline and reporting' },
  { name: 'Pipedrive', category: 'CRM', level: 'Advanced', note: 'Pipeline and activity tracking' },
  { name: 'Close.io', category: 'CRM', level: 'Advanced', note: 'Calling, lead management and activity' },
  { name: 'Google Workspace', category: 'Productivity', level: 'Advanced', note: 'Docs, Sheets, Drive and collaboration' },
];

export const workExperience: WorkExperience[] = [
  {
    role: 'Junior Sales Team Lead', company: 'Regen Digital', industry: 'Web Design & Marketing', location: 'Remote', period: 'Jul 2026 – Oct 2026',
    achievements: [
      'Mentored SDRs on cold-call structure, qualification, objection handling, and appointment-setting conversations.',
      'Supported onboarding through call shadowing, interview participation, coaching, and KPI reviews.',
      'Tracked team activity and helped maintain a high-accountability outbound culture.',
    ], kpis: ['SDR Mentoring', 'Call Coaching', 'KPI Tracking'],
  },
  {
    role: 'Senior Sales Development Representative', company: 'Regen Digital', industry: 'Web Design & Marketing', location: 'Remote', period: 'May 2026 – Oct 2026',
    achievements: [
      'Generated qualified opportunities through strategic cold calling and outbound prospecting.',
      'Engaged decision-makers, qualified business needs, and booked high-intent appointments for the sales team.',
      'Reached Level 4, the highest company tier, within 3 weeks.',
      'Maintained accurate CRM activity and appointment handoff notes.',
    ], kpis: ['Level 4 in 3 Weeks', 'Cold Calling', 'Qualified Appointments'],
  },
  {
    role: 'Outbound Sales Representative', company: 'Seek Marketing Partners', industry: 'Marketing & Advertising', location: 'Remote', period: 'Nov 2025 – Apr 2026',
    achievements: [
      'Exceeded quota by 120% using 150+ daily calls and LinkedIn outreach.',
      'Generated over $1.8M in qualified pipeline and 30+ qualified meetings per month.',
      'Improved response rates by 18% through customized objection-handling scripts and multi-channel outreach.',
      'Managed appointment confirmation and clean handoff into the next sales stage.',
    ], kpis: ['120% Quota', '$1.8M+ Pipeline', '+18% Response Rate', '150+ Calls/Day'],
  },
  {
    role: 'Sales Development Representative', company: 'Averps Pte Ltd', industry: 'Enterprise SaaS & IT', location: 'Remote', period: 'Feb 2025 – Nov 2025',
    achievements: [
      'Achieved 100% SQL target with a 22% demo conversion rate from outbound sequences.',
      'Generated $1.2M in qualified opportunities through email, LinkedIn, and phone prospecting.',
      'Applied BANT qualification to improve lead quality and sales-team efficiency.',
    ], kpis: ['100% SQL Target', '22% Demo Conversion', '$1.2M Qualified Pipeline'],
  },
  {
    role: 'Delegate Sales Acquisition Representative', company: 'Public Sector Network', industry: 'B2B Events & Conferences', location: 'Remote', period: 'Nov 2022 – Jan 2025',
    achievements: [
      'Exceeded acquisition targets by 15% year over year through targeted B2B outreach.',
      'Used LinkedIn Sales Navigator to improve connection-to-meeting performance and mentor junior SDRs.',
      'Delivered weekly client reporting and maintained structured prospect activity.',
    ], kpis: ['+15% YoY Target', 'Top 5% Company-Wide', 'SDR Mentoring'],
  },
  {
    role: 'Telemarketing | Senior SDR | Client Acquisition', company: 'Pacific Outsource Teleservices', industry: 'BPO / Lead Generation', location: 'Philippines', period: 'Mar 2015 – Jan 2022',
    achievements: [
      'Generated 100+ leads per week and 30–40+ appointments per month across 30+ client campaigns.',
      'Consistently exceeded quota by 120–150% through disciplined outbound calling and qualification.',
      'Mentored SDRs and helped improve team productivity and onboarding.',
      'Worked across US, UK, Australian, and Singapore campaigns.',
    ], kpis: ['120–150% Quota', '30–40+ Appts/Month', 'US/UK/AU/SG Markets'],
  },
  {
    role: 'Sales Specialist', company: 'Global Empire Corporation', industry: 'Retail / BPO', location: 'Cebu, Philippines', period: 'Sep 2014 – Sep 2015',
    achievements: [
      'Achieved 150% of sales quota within the first 6 months.',
      'Earned Employee of the Month recognition twice.',
      'Cross-trained new hires and maintained strong customer satisfaction performance.',
    ], kpis: ['150% Quota', '2x Employee of the Month', '95%+ CSAT'],
  },
];

export const education = {
  degree: 'Bachelor of Science in Electrical Engineering (BSEE)',
  institution: 'University of Cebu',
  period: '2009 – 2014',
  certifications: ['Six Sigma White Belt (SSWB)', 'Lean Six Sigma White Belt (LSSWB)', 'Top Performer Award'],
};

export const testimonials: Testimonial[] = [
  {
    name: 'TL Dee', role: 'Sr. Operations Sales Lead', company: 'Regen Digital US',
    quote: 'Flynn ramped to Level 4 top-tier in under 3 weeks. His cold call discipline, objection handling, and ability to mentor junior SDRs made him an invaluable asset to our sales floor.',
    image: 'https://user29984.na.imgto.link/public/20261005/tl-dee.avif',
  },
  {
    name: 'Toby Whitaker', role: 'Head of Sales', company: 'Seek Marketing Partners (UK)',
    quote: 'Flynn generated over $1.8M in pipeline for our team while crushing his quota by 120%. His customized objection-handling scripts and LinkedIn touchpoints lifted response rates by 18%.',
    image: 'https://user29984.na.imgto.link/public/20261005/toby-whitaker.avif',
  },
  {
    name: 'Van Ng', role: 'Account Manager', company: 'Averps Pte Ltd (Singapore)',
    quote: 'A top-performing SDR who blends relentless outbound execution with precision qualification. Flynn achieved a 22% demo conversion rate and delivered $1.2M in qualified pipeline for our AEs.',
    image: 'https://user29984.na.imgto.link/public/20261005/vanessa-ng.avif',
  },
];

const driveAudio = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

export const audioRecordings = [
  { id: 'call-1', title: 'Value-First Opener & Calendar Booking', label: 'Outbound Call 01', url: import.meta.env.VITE_AUDIO_1_URL || driveAudio('1sFTLEaQD7YCQdgkR2Pr98Po3aN8_vm0Y'), duration: '01:17', outcome: 'Confirmed follow-up appointment', skill: 'Re-engagement + timing pivot' },
  { id: 'call-2', title: 'Reschedule Recovery Under Time Pressure', label: 'Outbound Call 02', url: import.meta.env.VITE_AUDIO_2_URL || driveAudio('1LNd0Mgw9AEoOSsU3q7ph--M07Pv6EQnW'), duration: '00:56', outcome: 'Next-day appointment retained', skill: 'Frictionless reschedule' },
  { id: 'call-3', title: 'Objection De-escalation & Qualification', label: 'Outbound Call 03', url: import.meta.env.VITE_AUDIO_3_URL || driveAudio('1a4CF9a68v_EU2PBfyCRKyScwMQqvI3Uq'), duration: '06:54', outcome: 'Qualified Zoom meeting booked', skill: 'Objection handling + discovery' },
];
