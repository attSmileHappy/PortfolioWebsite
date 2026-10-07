import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CheckCircle2, Award, Users, Cpu } from 'lucide-react';

export const IntroQuote: React.FC = () => {
  return (
    <section id="intro" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Sub-banner / Philosophy Kicker */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#7A776F] uppercase mb-4">
            Engineering Philosophy & Core Competencies
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#141413] leading-[1.15] text-balance">
            Complexity made seamless
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#5E5B55] leading-relaxed max-w-3xl mx-auto">
            WPF 클라이언트 설계부터 엔터프라이즈 RPA 자동화, 그리고 딥러닝 컴퓨터 비전까지 —
            안정적인 아키텍처와 명확한 사용자 경험을 추구하며 실질적인 비즈니스 가치를 창출합니다.
          </p>
        </div>

        {/* 3 Core Strengths (from PDF Page 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {PERSONAL_INFO.philosophy.map((item, index) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-white border border-[#E8E4DC] hover:border-[#141413] transition-colors shadow-2xs group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-[#7A776F] mb-4 block">
                  0{index + 1}. CAPABILITY
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#141413] leading-snug group-hover:text-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-[#5E5B55] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F2EFE9] flex items-center justify-between text-xs text-[#7A776F]">
                <span>Proven Experience</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Quantified Track Record */}
        <div className="mt-16 pt-12 border-t border-[#E8E4DC] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">100%</div>
            <div className="text-xs sm:text-sm text-[#5E5B55] mt-1 font-medium">프로젝트 일정 준수율</div>
          </div>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">30인</div>
            <div className="text-xs sm:text-sm text-[#5E5B55] mt-1 font-medium">대형 ERP 차세대 모듈 PL</div>
          </div>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">2회</div>
            <div className="text-xs sm:text-sm text-[#5E5B55] mt-1 font-medium">AI 프로젝트 경진대회 대상/우수상</div>
          </div>
          <div className="p-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">20+</div>
            <div className="text-xs sm:text-sm text-[#5E5B55] mt-1 font-medium">엔터프라이즈 자동화 파이프라인</div>
          </div>
        </div>

      </div>
    </section>
  );
};
