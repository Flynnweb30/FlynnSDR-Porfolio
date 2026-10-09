import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import CallsPage from './pages/CallsPage';
import PlaybookPage from './pages/PlaybookPage';
import LeadershipPage from './pages/LeadershipPage';
import ContactPage from './pages/ContactPage';
import ReferencesPage from './pages/ReferencesPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import BookingModal from './components/BookingModal';
import ResumeModal from './components/ResumeModal';
import LoadingScreen from './components/LoadingScreen';
import { PageRoute } from './types';
import { personalInfo } from './data/flynnData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPreference, setBookingPreference] = useState<'Part-Time' | 'Full-Time' | undefined>();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const supportedRoutes: PageRoute[] = [
    'hire-me',
    'references',
    'academy',
    'experience',
    'calls',
    'playbook',
    'leadership',
    'contact',
    'services',
    'service-cold-calling',
    'service-appointment-setting',
    'service-lead-qualification',
    'service-sdr-coaching',
    'industries',
    'industry-saas-tech',
    'industry-marketing-agencies',
    'industry-b2b-events',
    'industry-commercial-contracting',
  ];

  const parseCurrentRoute = (): PageRoute => {
    if (typeof window === 'undefined') return 'home';

    const rawPath = window.location.pathname.replace(/^\//, '').toLowerCase().split('/')[0] as PageRoute;
    if (supportedRoutes.includes(rawPath)) {
      return rawPath;
    }

    const rawHash = window.location.hash.replace('#', '').toLowerCase() as PageRoute;
    if (supportedRoutes.includes(rawHash)) {
      return rawHash;
    }

    return 'home';
  };

  const seoMap: Record<PageRoute, { title: string; description: string }> = {
    home: {
      title: 'Flynn James | Senior SDR & B2B Outbound Pipeline Specialist',
      description: 'Official Senior SDR portfolio for Flynn James Q. Pontino — 11+ years in B2B cold calling, high-volume prospecting, BANT qualification, appointment setting, and $1.8M+ pipeline generation.',
    },
    calls: {
      title: 'Hear My Opener: Real Cold Calling & Discovery Recordings | Flynn James',
      description: 'Listen to 7 unedited outbound call recordings of Flynn handling timing objections, recovering lost pipeline, navigating AI screeners, and locking in confirmed B2B discovery meetings.',
    },
    experience: {
      title: '11+ Years B2B Outbound Sales Track Record | Flynn James Senior SDR',
      description: '11+ years of verified outbound sales results across US, UK, Australia, and Singapore. 120–150% quota attainment and over $1.8M in sourced pipeline.',
    },
    references: {
      title: 'Client References & Executive Endorsements | Flynn James Senior SDR',
      description: 'Verified leadership references and documented SDR metrics from founders, sales directors, and account executives.',
    },
    leadership: {
      title: 'SDR Sales Floor Leadership & Mentoring Sprints | Flynn James',
      description: 'Hands-on outbound SDR leadership: running daily dial sprints, coaching junior reps through live call reviews, and shortening new hire ramp time.',
    },
    'hire-me': {
      title: 'Hire Flynn James | Senior SDR & Outbound Appointment Setter',
      description: 'Hire Flynn James for full-time or part-time Senior SDR execution. 150+ dials/day, rigorous BANT qualification, and 30+ qualified discovery meetings per month.',
    },
    contact: {
      title: 'Direct Contact & 15-Min Intro Scheduling | Flynn James Senior SDR',
      description: 'Schedule a 15-minute introductory sync with Flynn James to discuss Senior SDR opportunities, pipeline targets, and market coverage.',
    },
    academy: {
      title: 'The 150 Dials/Day Cadence & Qualification Playbook | Flynn James',
      description: 'Proven 4-stage outbound prospecting playbook: ICP targeting, 14-day multi-channel cadence, real-time objection reversal, and AE handoff protocol.',
    },
    playbook: {
      title: 'The 150 Dials/Day Cadence & Qualification Playbook | Flynn James',
      description: 'Proven 4-stage outbound prospecting playbook: ICP targeting, 14-day multi-channel cadence, real-time objection reversal, and AE handoff protocol.',
    },
    services: {
      title: 'B2B Outbound SDR Services & Solutions | Flynn James',
      description: 'Comprehensive outbound sales capabilities: high-volume B2B cold calling, appointment setting, BANT qualification, and SDR team leadership.',
    },
    'service-cold-calling': {
      title: 'B2B Cold Calling & Phone Prospecting Services | Flynn James',
      description: '150+ daily cold dials, pattern-interrupt phone openers, and active objection de-escalation that turns cold lists into discovery meetings.',
    },
    'service-appointment-setting': {
      title: 'High-Intent B2B Appointment Setting Services | Flynn James',
      description: 'Delivering 30+ qualified discovery appointments per month with an 88.4% show rate directly to Account Executive calendars.',
    },
    'service-lead-qualification': {
      title: 'BANT & MEDDIC Prospect Qualification Services | Flynn James',
      description: 'Protect closer time with strict BANT/MEDDIC qualification, 85% qualification accuracy, and 100% CRM hygiene in HubSpot and Salesforce.',
    },
    'service-sdr-coaching': {
      title: 'SDR Sales Floor Leadership & Mentoring Sprints | Flynn James',
      description: 'Lead-by-example SDR team coaching: live call shadowing, daily dial sprints, script discipline, and 25% faster rep ramp time.',
    },
    industries: {
      title: 'B2B Sales Industries & Track Record | Flynn James',
      description: '11+ years outbound experience across Enterprise SaaS, Digital Marketing Agencies, B2B Conference Summits, and Commercial Contracting.',
    },
    'industry-saas-tech': {
      title: 'Enterprise SaaS & Cloud Tech Outbound Sales | Flynn James',
      description: 'Enterprise software outbound prospecting: $1.2M pipeline sourced, 100% SQL quota attainment, and 22% demo conversion rate.',
    },
    'industry-marketing-agencies': {
      title: 'Digital Marketing & Growth Agencies Outbound Sales | Flynn James',
      description: 'Custom preview hooks and conversion-focused outreach for high-ticket agency services: $1.8M pipeline sourced, 120% quota attainment.',
    },
    'industry-b2b-events': {
      title: 'B2B Conferences, Summits & Delegate Acquisition | Flynn James',
      description: 'Executive summit delegate acquisition: top 5% company-wide, 20% lead-to-attendee conversion rate, and +15% YoY target lift.',
    },
    'industry-commercial-contracting': {
      title: 'Commercial Contracting & Construction Outbound Sales | Flynn James',
      description: 'Navigating jobsite contractors, qualifying $10k–$50k+ commercial scopes, and securing confirmed consultations in under 3 minutes.',
    },
  };

  useEffect(() => {
    const handleRouteChange = () => {
      const targetPage = parseCurrentRoute();
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const initialRoute = parseCurrentRoute();
    setCurrentPage(initialRoute);

    const meta = seoMap[initialRoute] || seoMap.home;
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', meta.description);
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    canonical?.setAttribute('href', `${personalInfo.portfolioUrl}${initialRoute === 'home' ? '/' : `/${initialRoute}`}`);

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    const meta = seoMap[page] || seoMap.home;
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', meta.description);
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    canonical?.setAttribute('href', `${personalInfo.portfolioUrl}${page === 'home' ? '/' : `/${page}`}`);

    if (page === 'home') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicesRoute =
    currentPage === 'services' ||
    currentPage === 'service-cold-calling' ||
    currentPage === 'service-appointment-setting' ||
    currentPage === 'service-lead-qualification' ||
    currentPage === 'service-sdr-coaching';

  const isIndustriesRoute =
    currentPage === 'industries' ||
    currentPage === 'industry-saas-tech' ||
    currentPage === 'industry-marketing-agencies' ||
    currentPage === 'industry-b2b-events' ||
    currentPage === 'industry-commercial-contracting';

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8] text-[#0d0e0c] selection:bg-[#0077b6] selection:text-white">
      <LoadingScreen />

      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={(preference) => {
          setBookingPreference(preference);
          setIsBookingOpen(true);
        }}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => {
              setBookingPreference(preference);
              setIsBookingOpen(true);
            }}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentPage === 'calls' && (
          <CallsPage
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => {
              setBookingPreference(preference);
              setIsBookingOpen(true);
            }}
          />
        )}

        {(currentPage === 'hire-me' || currentPage === 'contact') && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentPage === 'references' && (
          <ReferencesPage
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => {
              setBookingPreference(preference);
              setIsBookingOpen(true);
            }}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {(currentPage === 'academy' || currentPage === 'playbook') && (
          <PlaybookPage
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => {
              setBookingPreference(preference);
              setIsBookingOpen(true);
            }}
          />
        )}

        {currentPage === 'experience' && (
          <ExperiencePage
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenBooking={(preference) => {
              setBookingPreference(preference);
              setIsBookingOpen(true);
            }}
          />
        )}

        {currentPage === 'leadership' && (
          <LeadershipPage
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => {
              setBookingPreference(preference);
              setIsBookingOpen(true);
            }}
          />
        )}

        {isServicesRoute && (
          <ServicesPage
            currentRoute={currentPage}
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => {
              setBookingPreference(preference);
              setIsBookingOpen(true);
            }}
          />
        )}

        {isIndustriesRoute && (
          <IndustriesPage
            currentRoute={currentPage}
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => {
              setBookingPreference(preference);
              setIsBookingOpen(true);
            }}
          />
        )}
      </main>

      {currentPage !== 'home' && (
        <Footer
          onNavigate={handleNavigate}
          onOpenBooking={(preference) => {
            setBookingPreference(preference);
            setIsBookingOpen(true);
          }}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      )}

      <BookingModal
        isOpen={isBookingOpen}
        defaultPreference={bookingPreference}
        onClose={() => {
          setIsBookingOpen(false);
          setBookingPreference(undefined);
        }}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}