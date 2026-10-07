import React, { useState } from 'react';
import { ArrowDown, Copy, Check, ExternalLink, Mail, Award, Terminal, Sparkles, Download } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { SplineRobotViewer } from './SplineRobotViewer';

interface HeroSectionProps {
  isDark: boolean;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDark, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #0c4da2 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typographic Impact & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Developer Avatar & Micro-kicker */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0c4da2] shadow-md shrink-0">
                <img
                  src={DEVELOPER_INFO.avatarImage}
                  alt={DEVELOPER_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#3b82f6] dark:text-[#60a5fa]">
                  <span>{DEVELOPER_INFO.role}</span>
                  <span className={isDark ? 'text-slate-500' : 'text-slate-400'} aria-hidden="true">/</span>
                  <span className={isDark ? 'text-slate-300 font-medium' : 'text-slate-600'}>Desktop & RPA & AI</span>
                </div>
                <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {DEVELOPER_INFO.name} <span className={isDark ? 'text-slate-300 text-xs font-normal' : 'text-slate-500 text-xs font-normal'}>({DEVELOPER_INFO.englishName})</span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-balance ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                WPF, 자동화부터 인공지능까지
                <span className={`block mt-1 ${isDark ? 'text-[#60a5fa]' : 'text-[#0c4da2]'}`}>
                  끊임없이 배우고 성장하는 개발자
                </span>
              </h1>
              
              <p className={`text-base sm:text-lg leading-relaxed max-w-2xl text-balance font-normal ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}>
                C# .NET 데스크톱 엔터프라이즈(WPF / WinForm) 시스템 개발과 자사 RPA 엔진 구축, 
                그리고 컴퓨터 비전(YOLOv5) 및 자연어 처리(KorBERT) 인공지능 모델까지 
                실제 비즈니스 현장에 가치를 더하는 소프트웨어를 만듭니다.
              </p>
            </div>

            {/* Quick Metrics Strip */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border ${
              isDark 
                ? 'bg-[#0f1422] border-[#222f4c] shadow-lg shadow-black/40' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              {DEVELOPER_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col px-2 py-1">
                  <span className={`text-xs font-medium truncate ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {stat.label}
                  </span>
                  <span className={`text-lg sm:text-xl font-bold font-mono tracking-tight ${
                    isDark ? 'text-blue-400' : 'text-[#0c4da2]'
                  }`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0c4da2] hover:bg-[#1260c8] shadow-md shadow-[#0c4da2]/20 active:scale-95 transition-all"
              >
                <span>프로젝트 경험 보기</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Direct ZIP download button */}
              <a
                href="/yeji-kim-portfolio.zip"
                download="yeji-kim-portfolio.zip"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all active:scale-95 ${
                  isDark
                    ? 'border-blue-500/40 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-white hover:border-blue-400'
                    : 'border-blue-200 bg-blue-50 text-[#0c4da2] hover:bg-blue-100 hover:border-blue-300'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>프로젝트 ZIP 다운로드</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border transition-all active:scale-95 ${
                  isDark
                    ? 'border-[#1e273d] bg-[#0f1422] text-slate-200 hover:border-[#0c4da2]/60 hover:text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-[#0c4da2] hover:text-[#0c4da2]'
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500">이메일 복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>이메일 복사 ({DEVELOPER_INFO.email})</span>
                  </>
                )}
              </button>

              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Micro editorial highlight notice */}
            <div className={`flex items-center gap-2 text-xs pt-1 font-medium ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <Award className={`w-4 h-4 ${isDark ? 'text-amber-400' : 'text-[#0c4da2]'}`} />
              <span>중앙정보처리학원 AI 응용 솔루션 대상(1위) 및 우수상 수상</span>
              <span className={isDark ? 'text-slate-500' : 'text-slate-400'} aria-hidden="true">·</span>
              <span>100% 프로젝트 기한 준수</span>
            </div>

          </div>

          {/* Right Column: Embedded Spline 3D Robot Interactive Experience */}
          <div className="lg:col-span-5 relative">
            <SplineRobotViewer isDark={isDark} />
          </div>

        </div>
      </div>
    </section>
  );
};
