import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import BookingModal from './components/BookingModal';
import ResumeModal from './components/ResumeModal';
import HomePage from './pages/HomePage';
import CallsPage from './pages/CallsPage';
import ExperiencePage from './pages/ExperiencePage';
import ReferencesPage from './pages/ReferencesPage';
import ContactPage from './pages/ContactPage';
import { PageRoute } from './types';
import { siteConfig } from './data/flynnData';

const routes: PageRoute[] = ['home','calls','experience','references','contact'];
const getRoute = (): PageRoute => { const p=window.location.pathname.replace(/^\//,'').split('/')[0] as PageRoute; return routes.includes(p)?p:'home'; };

export default function App() {
 const [page,setPage]=useState<PageRoute>(getRoute()); const [booking,setBooking]=useState(false); const [preference,setPreference]=useState<'Part-Time'|'Full-Time'|undefined>(); const [resume,setResume]=useState(false); const [loading,setLoading]=useState(true);
 const navigate=useCallback((next:PageRoute)=>{setPage(next);window.history.pushState({},'',next==='home'?'/':`/${next}`);window.scrollTo({top:0,behavior:'smooth'});},[]);
 useEffect(()=>{const fn=()=>setPage(getRoute());window.addEventListener('popstate',fn);return()=>window.removeEventListener('popstate',fn)},[]);
 useEffect(()=>{document.title=siteConfig.title; const meta=document.querySelector('meta[name="description"]'); if(meta)meta.setAttribute('content',siteConfig.description);},[]);
 const openBooking=(p?:'Part-Time'|'Full-Time')=>{setPreference(p);setBooking(true)};
 return <><LoadingScreen onLoaded={()=>setLoading(false)}/><div className={loading?'site-shell is-loading':'site-shell'}><Navbar currentPage={page} onNavigate={navigate} onOpenBooking={openBooking}/><main>{page==='home'&&<HomePage onNavigate={navigate} onOpenBooking={openBooking} onOpenResume={()=>setResume(true)}/>} {page==='calls'&&<CallsPage onOpenBooking={()=>openBooking()}/>} {page==='experience'&&<ExperiencePage onOpenResume={()=>setResume(true)}/>} {page==='references'&&<ReferencesPage onOpenBooking={()=>openBooking()}/>} {page==='contact'&&<ContactPage onOpenBooking={()=>openBooking()} onOpenResume={()=>setResume(true)}/>}</main><Footer onOpenBooking={()=>openBooking()} onOpenResume={()=>setResume(true)}/></div><BookingModal isOpen={booking} onClose={()=>setBooking(false)} initialPreference={preference}/><ResumeModal isOpen={resume} onClose={()=>setResume(false)}/></>;
}
