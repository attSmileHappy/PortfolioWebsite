import React from 'react';
import { Layers, Bot, GitBranch, CheckCircle2 } from 'lucide-react';
import { CORE_STRENGTHS } from '../data/portfolioData';

interface CoreStrengthsProps {
  isDark: boolean;
}

export const CoreStrengths: React.FC<CoreStrengthsProps> = ({ isDark }) => {
  const icons = [
    <Bot className="w-5 h-5 text-[#0c4da2]" key="bot" />,
    <Layers className="w-5 h-5 text-[#0c4da2]" key="layers" />,
    <GitBranch className="w-5 h-5 text-[#0c4da2]" key="git" />
  ];

  return (
    <section id="strengths" className="py-16 border-t transition-colors duration-200 border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-widest text-[#3b82f6] dark:text-[#60a5fa] uppercase mb-2">
            CORE COMPETENCIES
          </div>
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            WPF, 자동화, 데이터 설계까지 아우르는 3가지 핵심 역량
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            실무 프로젝트에서 다져진 클라이언트 UI 구현과 데이터 아키텍처, 그리고 팀 협업을 이끄는 안정적인 소스 관리 능력입니다.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_STRENGTHS.map((strength, index) => (
            <div
              key={index}
              className={`group relative p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? 'bg-[#0f1422] border-[#222f4c] hover:border-[#3b82f6]/80 hover:shadow-[0_10px_30px_rgba(12,77,162,0.25)]'
                  : 'bg-white border-slate-200 hover:border-[#0c4da2]/50 hover:shadow-lg'
              }`}
            >
              {/* Top Accent Icon & Chapter Number */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-2.5 rounded-xl ${
                    isDark ? 'bg-[#0c4da2]/30 border border-[#3b82f6]/40' : 'bg-blue-50 border border-blue-100'
                  }`}>
                    {icons[index]}
                  </div>
                  <span className={`font-mono text-xs font-semibold ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    0{index + 1}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className={`text-lg font-bold leading-snug transition-colors ${
                  isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-900 group-hover:text-[#0c4da2]'
                }`}>
                  {strength.title}
                </h3>
                <div className={`text-xs font-semibold mt-1 mb-4 ${
                  isDark ? 'text-blue-400' : 'text-[#0c4da2]'
                }`}>
                  {strength.subtitle}
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-200' : 'text-slate-700'
                }`}>
                  {strength.description}
                </p>
              </div>

              {/* Unboxed Keywords Metadata (Zero-Pill discipline) */}
              <div className={`mt-6 pt-5 border-t ${
                isDark ? 'border-[#1e273d]' : 'border-slate-100'
              }`}>
                <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {strength.keywords.map((kw, kwIdx) => (
                    <React.Fragment key={kwIdx}>
                      <span className={isDark ? 'hover:text-white' : 'hover:text-[#0c4da2]'}>{kw}</span>
                      {kwIdx < strength.keywords.length - 1 && (
                        <span className={isDark ? 'text-slate-600' : 'text-slate-300'} aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
