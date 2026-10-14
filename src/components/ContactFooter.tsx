import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Github, ArrowUpRight, Copy, Check, ArrowUp, Shield } from 'lucide-react';

interface ContactFooterProps {
  onOpenAdmin: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenAdmin }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#141413] text-[#FAF8F5] pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Call to Action Box */}
        <div className="max-w-4xl mx-auto text-center pb-20 border-b border-white/10">
          <p className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#004ab5] uppercase mb-4">
            Start a Conversation
          </p>
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Let's build reliable software together.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#A39E93] max-w-2xl mx-auto leading-relaxed">
            WPF 데스크톱 애플리케이션 개발, 프로세스 자동화 RPA 프로젝트, 또는 AI/컴퓨터 비전 개발 협업에 대해 편하게 연락주세요.
          </p>

          {/* Contact Action Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-full bg-[#004ab5] text-white font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#003c94] transition-all shadow-md shadow-[#004ab5]/30 active:scale-95 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '이메일 주소 복사됨!' : 'Copy Email Address'}</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-3.5 rounded-full bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="px-6 py-3.5 rounded-full bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Directory & Links Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-3">
            <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#004ab5]" />
              <span>YEJI KIM · 김예지</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed max-w-sm">
              끊임없이 배우고 성장하는 개발자. Windows 애플리케이션, RPA 자동화, 그리고 딥러닝 기술을 융합하여 실용적인 가치를 만듭니다.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2 text-xs text-[#A39E93]">
            <div className="font-mono text-white uppercase tracking-wider mb-2">Direct Contact</div>
            <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:underline">{PERSONAL_INFO.email}</a></div>
            <div>Tel: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white hover:underline">{PERSONAL_INFO.phone}</a></div>
            <div>Location: {PERSONAL_INFO.location}</div>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs text-[#A39E93]">
            <div className="font-mono text-white uppercase tracking-wider mb-2">Social & Code</div>
            <div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#004ab5] transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/attSmileHappy</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#A39E93] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      {/* Prominent Blue Signature Ribbon (Point Color #004ab5) */}
      <div className="bg-[#004ab5] text-white py-5 px-6 sm:px-8 border-t border-[#003c94]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-white" />
            <span className="tracking-tight font-extrabold text-sm">YEJI KIM PORTFOLIO</span>
            <span className="text-white/80 font-normal">| 2026 Interactive Edition</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4">
            <div className="text-center sm:text-right text-white/80 text-[11px]">
              Designed & Engineered with React, TypeScript, Tailwind CSS & Spline 3D
            </div>


            {/* 최하단 관리자 버튼 (Admin Access Button) */}
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#004ab5] text-[11px] font-bold tracking-wider uppercase transition-all border border-white/30 cursor-pointer shadow-xs active:scale-95"
              title="관리자 콘솔 (방문자 로그 모니터링)"
            >
              <Shield className="w-3 h-3" />
              <span>관리자 (Admin)</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
