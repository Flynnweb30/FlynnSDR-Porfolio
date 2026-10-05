import React, { useEffect, useState } from 'react';
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

const routes: PageRoute[] = ['home','calls','experience','references','playbook','leadership','contact'];
const routeFromLocation = (): PageRoute => { const raw=(window.location.pathname.replace(/^\//,'').split('/')[0]||'home').toLowerCase() as PageRoute; return routes.includes(raw)?raw:'home'; };

export default function App(){
 const [page,setPage]=useState<PageRoute>('home'); const [booking,setBooking]=useState(false); const [resume,setResume]=useState(false); const [loading,setLoading]=useState(true);
 useEffect(()=>{const fn=()=>{setPage(routeFromLocation());scrollTo({top:0,behavior:'smooth'})}; setPage(routeFromLocation()); addEventListener('popstate',fn); return()=>removeEventListener('popstate',fn)},[]);
 const navigate=(next:PageRoute)=>{history.pushState({},'',next==='home'?'/':`/${next}`);setPage(next);scrollTo({top:0,behavior:'smooth'})};
 return <div className="min-h-screen bg-page text-slate-950"><LoadingScreen onLoaded={()=>setLoading(false)}/><Navbar currentPage={page} onNavigate={navigate} onOpenBooking={()=>setBooking(true)}/><main>{page==='home'&&<HomePage onNavigate={navigate} onOpenBooking={()=>setBooking(true)} onOpenResume={()=>setResume(true)}/>} {page==='calls'&&<CallsPage onNavigate={navigate} onOpenBooking={()=>setBooking(true)}/>} {page==='experience'&&<ExperiencePage onNavigate={navigate} onOpenBooking={()=>setBooking(true)} onOpenResume={()=>setResume(true)}/>} {page==='references'&&<ReferencesPage onNavigate={navigate} onOpenBooking={()=>setBooking(true)} onOpenResume={()=>setResume(true)}/>} {page==='playbook'&&<PlaybookPage onNavigate={navigate}/>} {page==='leadership'&&<LeadershipPage onOpenBooking={()=>setBooking(true)}/>} {page==='contact'&&<ContactPage onOpenBooking={()=>setBooking(true)} onOpenResume={()=>setResume(true)}/>}</main><Footer onNavigate={navigate} onOpenBooking={()=>setBooking(true)} onOpenResume={()=>setResume(true)}/><BookingModal isOpen={booking} onClose={()=>setBooking(false)}/><ResumeModal isOpen={resume} onClose={()=>setResume(false)}/></div>;
}
