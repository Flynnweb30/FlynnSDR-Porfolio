import React, { useEffect } from 'react';
import {
  X,
  Download,
  FileText,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Linkedin,
} from 'lucide-react';
import {
  personalInfo,
  workExperience,
  coreSkills,
  toolsAndTech,
  education,
  keyAchievements,
} from '../data/flynnData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('resume-modal-open');
    } else {
      document.body.classList.remove('resume-modal-open');
    }
    return () => {
      document.body.classList.remove('resume-modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = "Flynn_James_Q_Pontino_Official_Senior_SDR_Resume";
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in text-[#0d0e0c] resume-print-backdrop">
      <div className="relative w-full max-w-4xl bg-white border border-[#dededb] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col resume-print-card">
        
        {/* Modal Top Control Bar (Hidden when printing/saving to PDF) */}
        <div className="p-4 sm:p-5 bg-[#f7f7f6] border-b border-[#dededb] flex items-center justify-between shrink-0 no-print">
          <div className="flex items-center gap-2 text-xs font-display uppercase text-[#0077b6] font-extrabold tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Flynn James Q. Pontino — Official Senior SDR Resume</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#0077b6] hover:bg-[#0284c7] text-white text-xs font-display font-extrabold uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs active:scale-95"
              title="Save directly as PDF or Print full resume"
            >
              <Download className="w-4 h-4" />
              <span>Save / Print PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-black rounded-lg hover:bg-zinc-200/60 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document: Fully captures all details without truncation */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 bg-white text-[#0d0e0c] text-left font-sans resume-print-body">
          
          {/* Header Block */}
          <div className="border-b border-[#dededb] pb-6 space-y-3 print-page-break-avoid">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-[#0d0e0c]">
                  {personalInfo.fullName}
                </h1>
                <p className="text-sm font-display uppercase tracking-wider text-[#0077b6] font-extrabold mt-0.5">
                  Senior SDR · B2B Cold Caller · Appointment Setter · Outbound Specialist
                </p>
              </div>

              <div className="text-xs font-sans text-zinc-600 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5 font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#0077b6]" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#0077b6]" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-zinc-500">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-[#0077b6] font-bold">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>{personalInfo.linkedinHandle}</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#f7f7f6] border border-[#dededb] rounded-xl text-xs font-sans text-zinc-700 leading-relaxed">
              ⚡ <strong>Core Focus:</strong> {personalInfo.tagline}
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed font-sans pt-1">
              {personalInfo.executiveSummary}
            </p>
          </div>

          {/* Key Outbound Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs print-page-break-avoid">
            {keyAchievements.map((item, i) => (
              <div key={i} className="p-2.5 bg-[#f7f7f6] border border-[#dededb] rounded-xl">
                <div className="text-base font-black font-display text-[#0077b6] leading-tight">{item.value}</div>
                <div className="text-[10px] font-display uppercase text-zinc-500 font-extrabold mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Professional Work Experience (7 Roles Captured) */}
          <div className="space-y-6">
            <h2 className="text-sm font-display uppercase tracking-widest text-[#0077b6] font-extrabold border-b border-[#dededb] pb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional Outbound Sales Experience (11+ Years)</span>
            </h2>

            {workExperience.map((exp, idx) => (
              <div key={idx} className="space-y-2 print-page-break-avoid border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <div>
                    <h3 className="font-black text-[#0d0e0c] uppercase font-display text-base">
                      {exp.role}
                    </h3>
                    <div className="text-[#0077b6] font-bold mt-0.5">
                      {exp.company} <span className="text-zinc-400 font-normal">· {exp.industry}</span>
                    </div>
                  </div>
                  <div className="text-zinc-500 font-sans text-[11px] sm:text-right">
                    <div className="font-display font-bold text-zinc-800 uppercase">{exp.period}</div>
                    <div className="text-zinc-400">{exp.location}</div>
                  </div>
                </div>

                <ul className="space-y-1 text-xs text-zinc-700 leading-relaxed font-sans">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0077b6] font-bold shrink-0">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.kpis && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.kpis.map((kpi, k) => (
                      <span
                        key={k}
                        className="px-2 py-0.5 bg-[#f7f7f6] border border-[#dededb] text-[#0077b6] rounded text-[10px] font-display uppercase font-bold"
                      >
                        ✓ {kpi}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Competencies & Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#dededb] print-page-break-avoid">
            <div className="space-y-2">
              <h3 className="text-xs font-display uppercase text-[#0077b6] font-extrabold tracking-wider">
                Core Sales Competencies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {coreSkills.map((skill, s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 bg-[#f7f7f6] border border-[#dededb] text-zinc-800 rounded text-[11px] font-sans"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-display uppercase text-[#0077b6] font-extrabold tracking-wider">
                Tools & Outbound Stack
              </h3>
              <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                {toolsAndTech.map((t) => `${t.name} (${t.level})`).join(' · ')}
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="pt-4 border-t border-[#dededb] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs print-page-break-avoid">
            <div>
              <div className="font-black text-[#0d0e0c] uppercase font-display text-sm">{education.degree}</div>
              <div className="text-[#0077b6] font-bold">{education.institution} ({education.period})</div>
            </div>
            <div className="text-zinc-600 font-sans sm:text-right">
              <strong>Certificates:</strong> {education.certifications.join(' · ')}
            </div>
          </div>

          {/* Verifiable References Note */}
          <div className="p-3 bg-[#f7f7f6] border border-[#dededb] rounded-xl text-center text-xs text-zinc-500 font-sans print-page-break-avoid">
            Verified leadership references available upon request: Brendon Gocaj (Regen Digital), Toby Whitaker (Seek Marketing Partners), TL Dee (Regen Digital US), Van Ng (Averps Pte Ltd).
          </div>

        </div>

      </div>
    </div>
  );
}
