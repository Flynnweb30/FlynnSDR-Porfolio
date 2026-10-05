import React from 'react';
import { X, Printer, Download } from 'lucide-react';
import { personalInfo, workExperience, coreSkills } from '../data/flynnData';
export default function ResumeModal({ isOpen, onClose }: { isOpen:boolean; onClose:()=>void }) {
  if (!isOpen) return null;
  const print = () => window.print();
  return <div className="modal-backdrop"><div className="modal resume-modal"><button className="modal-close" onClick={onClose} aria-label="Close"><X/></button><div className="resume-header"><div><p className="eyebrow">Professional Resume</p><h2>{personalInfo.fullName}</h2><p>{personalInfo.title}</p></div><div className="resume-actions"><button className="btn btn-secondary" onClick={print}><Printer size={15}/> Print / Save PDF</button><a className="btn btn-primary" href={`mailto:${personalInfo.email}`}><Download size={15}/> Request PDF</a></div></div><section><h3>Profile</h3><p>{personalInfo.executiveSummary}</p></section><section><h3>Core Skills</h3><div className="skill-list">{coreSkills.map(s=><span key={s}>{s}</span>)}</div></section><section><h3>Experience</h3>{workExperience.map(job=><article className="resume-job" key={`${job.company}-${job.role}`}><div><strong>{job.role}</strong><span>{job.company} · {job.period}</span></div><ul>{job.bullets.map(b=><li key={b}>{b}</li>)}</ul></article>)}</section></div></div>;
}
