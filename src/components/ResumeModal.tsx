import React, { useEffect } from 'react';
import { PERSONAL_INFO, CAREER_HISTORY, EDUCATION_HISTORY, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Mail, Phone, Github, Printer, Download, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl border border-[#E8E4DC] shadow-2xl overflow-y-auto no-scrollbar flex flex-col animate-in zoom-in-95 duration-200 text-[#141413]"
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-white/95 backdrop-blur-md border-b border-[#E8E4DC]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#141413]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#7A776F] uppercase">
              Curriculum Vitae / Resume Sheet
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-full hover:bg-[#FAF8F5] text-[#5E5B55] transition-colors cursor-pointer text-xs flex items-center gap-1.5 px-3 border border-[#E8E4DC]"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#FAF8F5] text-[#141413] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-8 sm:p-12 space-y-10">
          
          {/* Header & Contact */}
          <div className="border-b border-[#E8E4DC] pb-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413]">
                  {PERSONAL_INFO.nameKo} <span className="text-xl font-normal text-[#5E5B55]">({PERSONAL_INFO.nameEn})</span>
                </h1>
                <p className="mt-1 text-sm font-semibold text-[#141413]">
                  {PERSONAL_INFO.tagline} · {PERSONAL_INFO.role}
                </p>
              </div>
              <div className="text-xs text-[#5E5B55] space-y-1 sm:text-right font-mono">
                <div>Email: {PERSONAL_INFO.email}</div>
                <div>Tel: {PERSONAL_INFO.phone}</div>
                <div>GitHub: github.com/attSmileHappy</div>
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-[#5E5B55] leading-relaxed max-w-3xl">
              {PERSONAL_INFO.subTagline}
            </p>
          </div>

          {/* Core Philosophy / Strengths */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A776F] mb-4">
              Core Competencies (핵심 역량)
            </h2>
            <div className="space-y-3">
              {PERSONAL_INFO.philosophy.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC]">
                  <h3 className="text-sm font-bold text-[#141413]">{item.title}</h3>
                  <p className="text-xs text-[#5E5B55] mt-1 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A776F] mb-4">
              Professional Experience (경력)
            </h2>
            <div className="space-y-6">
              {CAREER_HISTORY.map((item, idx) => (
                <div key={idx} className="border-l-2 border-[#141413] pl-4 space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-bold text-base text-[#141413]">{item.company}</span>
                    <span className="font-mono text-xs text-[#7A776F]">{item.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-[#5E5B55]">
                    {item.department} · {item.role}
                  </div>
                  <ul className="text-xs text-[#5E5B55] space-y-1.5 pt-1">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#141413] font-bold">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Training */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A776F] mb-4">
              Education & Honors (학력 및 교육)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDUCATION_HISTORY.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC]">
                  <div className="font-mono text-[11px] text-[#7A776F]">{edu.period}</div>
                  <div className="font-bold text-sm text-[#141413] mt-1">{edu.institution}</div>
                  <div className="text-xs text-[#5E5B55]">{edu.major}</div>
                  {edu.gpa && <div className="text-[11px] font-mono text-[#141413] mt-1">{edu.gpa}</div>}
                  <div className="text-[11px] text-[#7A776F] mt-1">{edu.details}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A776F] mb-4">
              Technical Summary (보유 기술)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC]">
                <div className="font-bold text-[#141413] mb-1">Languages & Core</div>
                <div className="text-[#5E5B55]">C#, Python, SQL, JavaScript, HTML5/CSS, Bash, R, Java, Swift</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC]">
                <div className="font-bold text-[#141413] mb-1">Frameworks & Libraries</div>
                <div className="text-[#5E5B55]">.NET Framework/Core, WPF, WinForm, DevExpress, Telerik, EF Core, PyTorch, TensorFlow, OpenCV, Flask</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#FAF8F5] border-t border-[#E8E4DC] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#141413] text-white text-xs font-semibold hover:bg-[#2A2926] transition-colors cursor-pointer"
          >
            닫기 (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
