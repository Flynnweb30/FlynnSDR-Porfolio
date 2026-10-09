export interface IndustryItem {
  id: string;
  slug: string;
  route: string;
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  overview: string;
  image: string;
  metrics: { label: string; value: string }[];
  personas: string[];
  challengesSolved: { challenge: string; solution: string }[];
  caseStudy: { company: string; market: string; result: string; quote: string };
  featuredRecording?: {
    id: string;
    title: string;
    category: string;
    company: string;
    prospect: string;
    duration: string;
    durationSeconds: number;
    outcome: string;
    audioSrc: string;
    image: string;
    tacticalNote: string;
  };
}

export const industriesData: IndustryItem[] = [
  {
    id: 'saas-tech',
    slug: 'industry-saas-tech',
    route: 'industry-saas-tech',
    title: 'B2B Enterprise SaaS & Cloud Technology Outbound Prospecting',
    shortTitle: 'Enterprise SaaS & Tech',
    tagline: 'Navigating technical gatekeepers, long buying cycles, and multi-threaded buyer committees.',
    badge: '100% SQL Attainment · $1.2M Sourced',
    overview:
      'Selling B2B software requires understanding tech stacks, cloud migration, and workflow friction. Flynn achieved 100% of SQL targets with a 22% demo conversion rate at Averps Pte Ltd, sourcing over $1.2M in qualified pipeline for enterprise technology Account Executives.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Demo Conversion Rate', value: '22%' },
      { label: 'SaaS Pipeline Sourced', value: '$1.2M+' },
      { label: 'SQL Quota Attainment', value: '100%' },
      { label: 'Qualification Lift', value: '+15%' },
    ],
    personas: [
      'Chief Technology Officers (CTO)',
      'VPs of Engineering & IT Operations',
      'Directors of Enterprise Infrastructure',
      'Chief Information Security Officers (CISO)',
      'VP of Product & Digital Transformation',
    ],
    challengesSolved: [
      {
        challenge: 'Prospects already locked into legacy ERP / SaaS contracts',
        solution: 'Positioned low-risk integration screenshares and captured renewal expiration dates to build long-term pipeline.',
      },
      {
        challenge: 'High resistance to generic software demo pitches',
        solution: 'Focused discovery exclusively on immediate operational bottlenecks, uptime requirements, and compliance risks.',
      },
      {
        challenge: 'Multi-stakeholder consensus delays',
        solution: 'Mapped the buying committee early and secured secondary executive attendance prior to handoff.',
      },
    ],
    caseStudy: {
      company: 'Averps Pte Ltd',
      market: 'Singapore & Southeast Asia Enterprise Tech',
      result: 'Delivered $1.2M in qualified pipeline with a 22% demo conversion rate across cold outbound sequences.',
      quote:
        'Flynn blends relentless outbound execution with precision qualification. He delivered $1.2M in qualified pipeline for our AEs with a 22% demo conversion rate.',
    },
  },
  {
    id: 'marketing-agencies',
    slug: 'industry-marketing-agencies',
    route: 'industry-marketing-agencies',
    title: 'Digital Marketing & Growth Agencies Outbound Sales',
    shortTitle: 'Digital & Growth Agencies',
    tagline: 'Positioning high-ticket web design, performance marketing, and conversion architecture.',
    badge: '$1.8M Pipeline Sourced · 120% Quota',
    overview:
      'Agency owners and marketing leaders get bombarded with pitches daily. Flynn cuts through the noise with custom website previews, sub-second performance proof, and competitor leak analysis—sourcing $1.8M+ in pipeline at Seek Marketing Partners and exceeding quota by 120%.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Pipeline Contribution', value: '$1.8M+' },
      { label: 'Monthly Quota Exceeded', value: '120%' },
      { label: 'Script Response Lift', value: '+18%' },
      { label: 'Avg Monthly Bookings', value: '30+' },
    ],
    personas: [
      'Agency Owners & Managing Partners',
      'Chief Marketing Officers (CMO)',
      'VPs of Growth & Demand Generation',
      'Directors of E-Commerce & Performance',
      'Heads of Digital Strategy',
    ],
    challengesSolved: [
      {
        challenge: 'Extreme fatigue from generic digital agency cold emails',
        solution: 'Implemented value-first custom website previews built before the call to provide immediate visual proof.',
      },
      {
        challenge: '"We already have an in-house team or agency partner"',
        solution: 'Pivoted to complementary conversion rate optimization and performance audits rather than replacement pitches.',
      },
      {
        challenge: 'Busy agency founders dodging calendar commitments',
        solution: 'Structured 10-minute screenshare previews with early-week flexibility to maintain high booking rates.',
      },
    ],
    caseStudy: {
      company: 'Seek Marketing Partners / Regen Digital',
      market: 'US, UK & Scandinavian Markets',
      result: 'Sourced over $1.8M in pipeline, lifted response rates by 18%, and achieved Level 4 top-tier status in 3 weeks.',
      quote:
        'Flynn generated over $1.8M in pipeline for our team while crushing his quota by 120%. His objection handling scripts lifted response rates by 18%.',
    },
  },
  {
    id: 'b2b-events',
    slug: 'industry-b2b-events',
    route: 'industry-b2b-events',
    title: 'B2B Conferences, Summits & Delegate Acquisition',
    shortTitle: 'B2B Events & Summits',
    tagline: 'Securing senior government executives, enterprise sponsors, and VIP conference delegates.',
    badge: 'Top 5% Company-Wide · +15% YoY Lift',
    overview:
      'High-profile events require elite executive presence and consultative positioning. At Public Sector Network (Toronto, Canada), Flynn ranked in the top 5% company-wide, achieving a 20% lead-to-attendee conversion rate and exceeding acquisition targets by 15% year-over-year.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Acquisition YoY Target', value: '+15%' },
      { label: 'Company-Wide Rank', value: 'Top 5%' },
      { label: 'Lead-to-Attendee Conv.', value: '20%' },
      { label: 'LinkedIn Connect Rate', value: '+28%' },
    ],
    personas: [
      'Government Directors & Public Sector Executives',
      'Chief Information Officers (State/Provincial/Federal)',
      'Heads of Corporate Sponsorships',
      'VP of Enterprise Strategy',
      'Senior Procurement Directors',
    ],
    challengesSolved: [
      {
        challenge: 'Senior government officials screened by multiple executive assistants',
        solution: 'Crafted mission-driven conference value propositions focused on public sector policy and case studies.',
      },
      {
        challenge: 'Tight procurement policies for summit attendance',
        solution: 'Framed delegate passes as continuing education and benchmarking summits with peer case studies.',
      },
      {
        challenge: 'High drop-off between ticket reservation and event day',
        solution: 'Built pre-conference engagement touchpoints and personalized speaker session itineraries.',
      },
    ],
    caseStudy: {
      company: 'Public Sector Network',
      market: 'Canada, US & Australian Public Sector Summits',
      result: 'Ranked in the top 5% across the entire company with a 20% lead-to-attendee conversion rate.',
      quote:
        'Exceeded acquisition targets by 15% YoY with 28% higher connection-to-meeting rate using LinkedIn Sales Navigator.',
    },
  },
  {
    id: 'commercial-contracting',
    slug: 'industry-commercial-contracting',
    route: 'industry-commercial-contracting',
    title: 'Commercial Contracting, Construction & Home Remodeling',
    shortTitle: 'Commercial & Trade Services',
    tagline: 'Engaging active jobsite contractors, qualifying project scopes, and securing high-ticket consultations.',
    badge: 'Live Discovery Calls · Under 3 Min Bookings',
    overview:
      'Commercial contractors are rarely sitting at desks—they are on active jobsites or driving between projects. Flynn excels in disarming busy contractors, navigating noisy phone backgrounds, and qualifying $10k–$50k+ commercial scopes in under 3 minutes.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1000&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Booking Speed', value: '< 3 Min' },
      { label: 'Contractor Connect Rate', value: '38%' },
      { label: 'Attendance Lock Rate', value: '92%' },
      { label: 'Commercial Scopes Qualified', value: '100+' },
    ],
    personas: [
      'General Contractors & Commercial Builders',
      'Roofing & Exterior Remodeling Owners',
      'HVAC, Plumbing & Electrical Subcontractors',
      'Commercial Cleaning Services Directors',
      'Property Restoration & Facility Managers',
    ],
    challengesSolved: [
      {
        challenge: 'Business owners answering in loud jobsite environments',
        solution: 'Used ultra-concise pattern interrupts and immediate calendar options (early morning or end-of-day).',
      },
      {
        challenge: 'Heavy skepticism toward digital marketing vendors',
        solution: 'Transparently demonstrated completed website previews tailored specifically to commercial scopes.',
      },
      {
        challenge: 'Frequent appointment rescheduling due to project emergencies',
        solution: 'Maintained proactive show-up reminders and rapid same-day rescheduling protocols.',
      },
    ],
    caseStudy: {
      company: 'CIG Builders / Top Glaze / Aldis Clean',
      market: 'US Commercial Trade & Home Services',
      result: 'Consistently converted skeptical, busy jobsite contractors into confirmed Zoom consultations.',
      quote:
        'Quickly qualified commercial scope from ground-up construction to remodeling, captured decision-maker email, and booked confirmed appointments.',
    },
    featuredRecording: {
      id: 'call-3',
      title: 'Commercial Contractor Discovery & Appointment Setting',
      category: 'Commercial Contractor Discovery & Appointment Setting',
      company: 'CIG Builders',
      prospect: 'Moises K.',
      duration: '02:39',
      durationSeconds: 159,
      outcome: 'Monday 4:45 PM Consultation Booked',
      audioSrc:
        (typeof process !== 'undefined' && process.env?.VITE_AUDIO_CALL_3_URL) ||
        'https://www.image2url.com/r2/default/audio/1791216218851-06ad6ad2-41e4-4576-9a3d-db2e0f306959.opus',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1000&auto=format&fit=crop&q=80',
      tacticalNote:
        'Flynn engages a busy general contractor live on the jobsite, navigates noise friction with calm tonality, probes commercial scope from ground-up construction to rehab, captures direct decision-maker email, and locks down a Monday 4:45 PM consultation in 2 minutes and 39 seconds.',
    },
  },
];