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
      home: { title: 'Senior SDR | B2B Cold Caller & Lead Generation', description: 'Senior SDR portfolio for Flynn James Q. Pontino — 11+ years in B2B cold calling, prospecting, qualification, appointment setting, and outbound sales.' },
      calls: { title: 'B2B Cold Calling Examples | Flynn James Q. Pontino', description: 'Hear real outbound call examples demonstrating prospecting, objection handling, qualification, rescheduling, and appointment setting.' },
      experience: { title: 'Senior SDR Experience | Flynn James Q. Pontino', description: '11+ years of B2B outbound sales, cold calling, lead generation, qualification, appointment setting, and CRM-driven prospecting.' },
      references: { title: 'Senior SDR References & Results | Flynn James Q. Pontino', description: 'Professional references and documented SDR performance across digital marketing, SaaS, B2B events, and outbound sales.' },
      leadership: { title: 'SDR Leadership & Mentoring | Flynn James Q. Pontino', description: 'Senior SDR leadership experience including coaching, onboarding, KPI tracking, call feedback, and mentoring junior SDRs.' },
      'hire-me': { title: 'Hire a Senior SDR | Flynn James Q. Pontino', description: 'Hire Flynn for senior SDR, B2B cold calling, lead qualification, appointment setting, and outbound pipeline generation.' },
      contact: { title: 'Contact Flynn | Senior SDR & B2B Cold Caller', description: 'Contact Flynn James Q. Pontino or schedule a 15-minute introduction for Senior SDR and B2B outbound opportunities.' },
      academy: { title: 'B2B SDR Playbook | Flynn James Q. Pontino', description: 'Practical B2B prospecting, qualification, objection handling, appointment setting, and outbound sales frameworks.' },
      playbook: { title: 'B2B SDR Playbook | Flynn James Q. Pontino', description: 'Practical B2B prospecting, qualification, objection handling, appointment setting, and outbound sales frameworks.' },
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
    const titleMap: Record<string, string> = { home: 'Senior SDR | B2B Cold Caller & Lead Generation', calls: 'B2B Cold Calling Examples | Flynn James Q. Pontino', experience: 'Senior SDR Experience | Flynn James Q. Pontino', references: 'Senior SDR References & Results | Flynn James Q. Pontino', leadership: 'SDR Leadership & Mentoring | Flynn James Q. Pontino', 'hire-me': 'Hire a Senior SDR | Flynn James Q. Pontino', contact: 'Contact Flynn | Senior SDR & B2B Cold Caller', academy: 'B2B SDR Playbook | Flynn James Q. Pontino', playbook: 'B2B SDR Playbook | Flynn James Q. Pontino' };
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
