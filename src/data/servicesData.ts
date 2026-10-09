export interface ServiceItem {
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
  deliverables: { title: string; desc: string }[];
  cadenceSummary: string[];
  targetOutcome: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'cold-calling',
    slug: 'service-cold-calling',
    route: 'service-cold-calling',
    title: 'B2B Cold Calling & High-Volume Outbound Phone Prospecting',
    shortTitle: 'Cold Calling & Prospecting',
    tagline: 'Pattern-interrupt openers, active objection handling, and steady 150+ dials/day execution.',
    badge: '150+ Daily Dials · 45,000+ Lifetime Calls',
    overview:
      'Flynn delivers relentless outbound phone execution that turns cold lists into qualified discovery calls. Combining rapid gatekeeper navigation, calm consultative tonality, and battle-tested objection reversal, he ensures your sales pipeline never starves from lack of top-of-funnel activity.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Daily Outbound Dials', value: '150+' },
      { label: 'Objection Overturn Rate', value: '64%' },
      { label: 'Quota Attainment', value: '120–150%' },
      { label: 'Lifetime Sales Calls', value: '45,000+' },
    ],
    deliverables: [
      {
        title: 'Pattern-Interrupt Phone Openers',
        desc: 'Low-friction hooks tailored to buyer seniority that disarm initial skepticism within the first 15 seconds.',
      },
      {
        title: 'Direct Dial & Mobile Sourcing',
        desc: 'Leverages Apollo, ZoomInfo, and Sales Nav to minimize receptionist delays and speak directly to economic buyers.',
      },
      {
        title: 'Live Objection De-Escalation',
        desc: 'Mastery in pivoting past "send an email", "we are all set", and "call next quarter" without high-pressure friction.',
      },
      {
        title: 'Multi-Touch Phone Cadence',
        desc: 'Structured double-touch dial windows calibrated to target time zones across US, UK, AU, and SG markets.',
      },
    ],
    cadenceSummary: [
      'Day 1: Cold Call Touch #1 + Immediate Context-Setting Email',
      'Day 3: Second Time-Shifted Call Attempt',
      'Day 5: Executive Voice Note + Social LinkedIn Profile Touch',
      'Day 8: Follow-up Call #3 + Case Study Proof Drop',
      'Day 12: Low-Pressure Permission-to-Close Touchpoint',
    ],
    targetOutcome: 'Predictable daily conversation volume, high connect-to-meeting ratios, and zero top-of-funnel pipeline friction.',
  },
  {
    id: 'appointment-setting',
    slug: 'service-appointment-setting',
    route: 'service-appointment-setting',
    title: 'High-Intent B2B Appointment Setting & Calendar Density',
    shortTitle: 'B2B Appointment Setting',
    tagline: 'Filling Account Executive calendars with 30+ verified, high-intent discovery meetings every month.',
    badge: '30+ SQLs / Month · 88.4% Show Rate',
    overview:
      'An outbound meeting is worthless if the prospect ghosts or lacks budget. Flynn focuses on qualified appointment setting that converts—pairing pre-meeting interest locks, clean calendar invites, and automated SMS reminders to maintain an 88.4% average show-up rate.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'Qualified Meetings / Mo', value: '30+' },
      { label: 'Average Show-Up Rate', value: '88.4%' },
      { label: 'Pipeline Generated', value: '$1.8M+' },
      { label: 'Demo Conversion Rate', value: '22%' },
    ],
    deliverables: [
      {
        title: 'Calendar Commitment Protocol',
        desc: 'Secures verbal and calendar agreement live on the phone, preventing tentative bookings and ghosting.',
      },
      {
        title: 'Custom Meeting Agendas',
        desc: 'Every booking invite includes a transparent 3-bullet agenda outlining why the prospect accepted the call.',
      },
      {
        title: 'Show-Up Rate Safeguards',
        desc: 'Pre-meeting email reminder and courtesy SMS touchpoints deployed 24 hours and 2 hours before the session.',
      },
      {
        title: 'Fast Reschedule Recovery',
        desc: 'Immediate same-day follow-up on canceled meetings to reschedule into the earliest available calendar slot.',
      },
    ],
    cadenceSummary: [
      'Immediate Calendar Invitation dispatched with tailored 3-bullet meeting brief',
      'T-24 Hours: Personalized confirmation email with screenshare Zoom link',
      'T-2 Hours: Quick courtesy SMS / LinkedIn reminder to confirm readiness',
      'Post-Call: Immediate CRM update and Account Executive briefing sync',
    ],
    targetOutcome: 'Full AE calendars with qualified prospects who show up prepared and motivated to explore your product.',
  },
  {
    id: 'lead-qualification',
    slug: 'service-lead-qualification',
    route: 'service-lead-qualification',
    title: 'BANT & MEDDIC Prospect Qualification & Pipeline Hygiene',
    shortTitle: 'Lead Qualification & Hygiene',
    tagline: 'Protecting closer time by rigorously qualifying Budget, Authority, Need, and Timeline.',
    badge: '85% Qualification Rate · 100% CRM Hygiene',
    overview:
      'Closers should never spend time pitching unqualified leads. Flynn implements strict BANT and MEDDIC discovery frameworks during outbound dials, ensuring Account Executives only step into meetings where genuine pain, buying authority, and project timelines exist.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'BANT Qualified Rate', value: '85%' },
      { label: 'CRM Data Accuracy', value: '100%' },
      { label: 'Forecast Accuracy Lift', value: '+30%' },
      { label: 'Pipeline Attainment', value: '120–150%' },
    ],
    deliverables: [
      {
        title: 'Authority & Buying Committee Mapping',
        desc: 'Verifies decision-maker roles, internal champions, and economic buyers before passing the account forward.',
      },
      {
        title: 'Acute Pain Point Probing',
        desc: 'Discovers active bottlenecks in technology, customer acquisition, or legacy workflows.',
      },
      {
        title: 'Timeline & Project Urgency Calibration',
        desc: 'Confirms prospective rollout dates to separate immediate active buyers from long-term researchers.',
      },
      {
        title: 'HubSpot & Salesforce CRM Hygiene',
        desc: 'Maintains 100% data integrity with detailed conversation notes, custom tags, and clear deal stage attribution.',
      },
    ],
    cadenceSummary: [
      'Step 1: Technographic and headcount signal verification prior to dial',
      'Step 2: Live qualification questioning embedded naturally into cold call flow',
      'Step 3: Verification of current provider, contract renewal, and dissatisfaction',
      'Step 4: Standardized CRM handoff notes structured for Account Executives',
    ],
    targetOutcome: 'Zero wasted Account Executive demos, higher pipeline velocity, and accurate revenue forecasting.',
  },
  {
    id: 'sdr-coaching',
    slug: 'service-sdr-coaching',
    route: 'service-sdr-coaching',
    title: 'Outbound SDR Sales Floor Leadership, Mentoring & Dial Sprints',
    shortTitle: 'SDR Team Leadership & Coaching',
    tagline: 'Leading from the front to build high-accountability outbound pods and accelerate rep ramp.',
    badge: '20+ Reps Mentored · -25% Ramp Time',
    overview:
      'A great outbound leader picks up the phone beside their team. Flynn combines 11+ years of individual contributor dominance with proven team lead experience at Regen Digital and Pacific Outsource—coaching junior SDRs, breaking down live call recordings, and running high-energy dial sprints.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&auto=format&fit=crop&q=80',
    metrics: [
      { label: 'SDRs Mentored', value: '20+' },
      { label: 'Team Monthly KPI Lift', value: '+15%' },
      { label: 'Onboarding Ramp Lift', value: '-25%' },
      { label: 'Reporting Error Reduction', value: '40%' },
    ],
    deliverables: [
      {
        title: 'Live Call Review & Shadowing',
        desc: 'Weekly 1-on-1 call breakdowns to teach newer reps exact conversational pivots and vocal tonality.',
      },
      {
        title: 'High-Energy Dial Sprints',
        desc: 'Organizes daily structured call blocks and team incentives to build resilience and eradicate call reluctance.',
      },
      {
        title: 'Battle-Tested Script Sharing',
        desc: 'Equips junior reps with proven pattern interrupts and objection-handling scripts tested over 45,000+ dials.',
      },
      {
        title: 'Performance Metric Tracking',
        desc: 'Establishes clear daily benchmarks for dials, connects, and qualified meeting handoffs.',
      },
    ],
    cadenceSummary: [
      'Daily 9:00 AM Outbound Dial Sprint & Mindset Calibration',
      'Midday Live Shadowing: Real-time whisper coaching on prospect objections',
      'Weekly 1-on-1 Call Breakdown: Pinpoint exact moments prospects lost interest',
      'Friday Team Win Celebration: Analyze top booked meetings of the week',
    ],
    targetOutcome: 'A high-energy, self-sufficient outbound team that consistently exceeds monthly meeting quotas.',
  },
];