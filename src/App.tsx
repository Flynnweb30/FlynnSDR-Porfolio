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

  // Parse route from both pathname and hash for seamless SPA routing on Render & local dev
  const parseCurrentRoute = (): PageRoute => {
    if (typeof window === 'undefined') return 'home';

    // 1. Check the pathname for supported portfolio pages
    const rawPath = window.location.pathname.replace(/^\//, '').toLowerCase().split('/')[0];
    if (['hire-me', 'references', 'academy', 'experience', 'calls', 'playbook', 'leadership', 'contact'].includes(rawPath)) {
      return rawPath as PageRoute;
    }

    // 2. Check the hash as a fallback for supported portfolio pages
    const rawHash = window.location.hash.replace('#', '').toLowerCase();
    if (['hire-me', 'references', 'academy', 'experience', 'calls', 'playbook', 'leadership', 'contact'].includes(rawHash)) {
      return rawHash as PageRoute;
    }

    return 'home';
  };

  useEffect(() => {
    const handleRouteChange = () => {
      const targetPage = parseCurrentRoute();
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const initialRoute = parseCurrentRoute();
    setCurrentPage(initialRoute);

    const seo: Record<string, { title: string; description: string }> = {
      home: { title: 'Flynn James | Senior SDR & B2B Outbound Pipeline Specialist', description: 'Official Senior SDR portfolio for Flynn James Q. Pontino — 11+ years in B2B cold calling, high-volume prospecting, BANT qualification, appointment setting, and $1.8M+ pipeline generation.' },
      calls: { title: 'Hear My Opener: Real Cold Calling & Discovery Recordings | Flynn James', description: 'Listen to 4 unedited outbound call recordings of Flynn handling timing objections, recovering lost pipeline, and locking in confirmed B2B discovery meetings.' },
      experience: { title: '11+ Years B2B Outbound Sales Track Record | Flynn James Senior SDR', description: '11+ years of verified outbound sales results across US, UK, Australia, and Singapore. 120–150% quota attainment and over $1.8M in sourced pipeline.' },
      references: { title: 'Client References & Executive Endorsements | Flynn James Senior SDR', description: 'Verified leadership references and documented SDR metrics from founders, sales directors, and account executives.' },
      leadership: { title: 'SDR Sales Floor Leadership & Mentoring Sprints | Flynn James', description: 'Hands-on outbound SDR leadership: running daily dial sprints, coaching junior reps through live call reviews, and shortening new hire ramp time.' },
      'hire-me': { title: 'Hire Flynn James | Senior SDR & Outbound Appointment Setter', description: 'Hire Flynn James for full-time or part-time Senior SDR execution. 150+ dials/day, rigorous BANT qualification, and 30+ qualified discovery meetings per month.' },
      contact: { title: 'Direct Contact & 15-Min Intro Scheduling | Flynn James Senior SDR', description: 'Schedule a 15-minute introductory sync with Flynn James to discuss Senior SDR opportunities, pipeline targets, and market coverage.' },
      academy: { title: 'The 150 Dials/Day Cadence & Qualification Playbook | Flynn James', description: 'Proven 4-stage outbound prospecting playbook: ICP targeting, 14-day multi-channel cadence, real-time objection reversal, and AE handoff protocol.' },
      playbook: { title: 'The 150 Dials/Day Cadence & Qualification Playbook | Flynn James', description: 'Proven 4-stage outbound prospecting playbook: ICP targeting, 14-day multi-channel cadence, real-time objection reversal, and AE handoff protocol.' },
    };
    const meta = seo[initialRoute] || seo.home;
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
    const titleMap: Record<string, string> = { home: 'Flynn James | Senior SDR & B2B Outbound Pipeline Specialist', calls: 'Hear My Opener: Real Cold Calling & Discovery Recordings | Flynn James', experience: '11+ Years B2B Outbound Sales Track Record | Flynn James Senior SDR', references: 'Client References & Executive Endorsements | Flynn James Senior SDR', leadership: 'SDR Sales Floor Leadership & Mentoring Sprints | Flynn James', 'hire-me': 'Hire Flynn James | Senior SDR & Outbound Appointment Setter', contact: 'Direct Contact & 15-Min Intro Scheduling | Flynn James Senior SDR', academy: 'The 150 Dials/Day Cadence & Qualification Playbook | Flynn James', playbook: 'The 150 Dials/Day Cadence & Qualification Playbook | Flynn James' };
    document.title = titleMap[page] || titleMap.home;
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    canonical?.setAttribute('href', `${personalInfo.portfolioUrl}${page === 'home' ? '/' : `/${page}`}`);

    if (page === 'home') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8] text-[#0d0e0c] selection:bg-[#0077b6] selection:text-white">
      
      {/* Loading Animation before initial homepage reveal */}
      <LoadingScreen />

      {/* Sticky Universal Top Navigation (shown on subpages and sticky on scroll) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={(preference) => { setBookingPreference(preference); setIsBookingOpen(true); }}
      />

      {/* Main Multi-Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => { setBookingPreference(preference); setIsBookingOpen(true); }}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentPage === 'calls' && (
          <CallsPage
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => { setBookingPreference(preference); setIsBookingOpen(true); }}
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
            onOpenBooking={(preference) => { setBookingPreference(preference); setIsBookingOpen(true); }}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {(currentPage === 'academy' || currentPage === 'playbook') && (
          <PlaybookPage
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => { setBookingPreference(preference); setIsBookingOpen(true); }}
          />
        )}

        {currentPage === 'experience' && (
          <ExperiencePage
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenBooking={(preference) => { setBookingPreference(preference); setIsBookingOpen(true); }}
          />
        )}

        {currentPage === 'leadership' && (
          <LeadershipPage
            onNavigate={handleNavigate}
            onOpenBooking={(preference) => { setBookingPreference(preference); setIsBookingOpen(true); }}
          />
        )}
      </main>

      {/* Universal Footer matching the existing design on non-home pages or full branding */}
      {currentPage !== 'home' && (
        <Footer
          onNavigate={handleNavigate}
          onOpenBooking={(preference) => { setBookingPreference(preference); setIsBookingOpen(true); }}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      )}

      {/* Interactive 15-Minute Intro Scheduler Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        defaultPreference={bookingPreference}
        onClose={() => { setIsBookingOpen(false); setBookingPreference(undefined); }}
      />

      {/* Interactive Resume View/Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

