import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, Building, Award } from 'lucide-react';
import { CAREER_HISTORY, EDUCATION_HISTORY } from '../data/portfolioData';

interface CareerEducationProps {
  isDark: boolean;
}

export const CareerEducation: React.FC<CareerEducationProps> = ({ isDark }) => {
  return (
    <section id="career" className="py-16 border-t transition-colors duration-200 border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-widest text-[#3b82f6] dark:text-[#60a5fa] uppercase mb-2">
            CAREER & EDUCATION
          </div>
          <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            실무 경험과 지속적인 학업 성장
          </h2>
          <p className={`mt-3 text-sm sm:text-base ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            WPF 엔터프라이즈 솔루션과 RPA 개발 실무를 거치며, 멈추지 않고 컴퓨터 과학 이론을 심화 학습하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Career Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <Briefcase className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`} />
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                실무 경력 기술서 (Career)
              </h3>
            </div>

            <div className="space-y-6">
              {CAREER_HISTORY.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-[#0f1422] border-[#222f4c] hover:border-[#3b82f6]/60' 
                      : 'bg-white border-slate-200 hover:border-[#0c4da2]/40 shadow-sm'
                  }`}
                >
                  {/* Company & Period Header */}
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b ${
                    isDark ? 'border-[#1e273d]' : 'border-slate-100'
                  }`}>
                    <div>
                      <div className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {item.company}
                      </div>
                      <div className={`text-xs font-semibold ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`}>
                        {item.department} · {item.role}
                      </div>
                    </div>

                    <div className={`font-mono text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.period}
                    </div>
                  </div>

                  {/* Overview */}
                  <p className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                    {item.description}
                  </p>

                  {/* Bullet Achievements */}
                  <ul className="mt-4 space-y-2">
                    {item.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className={`flex items-start gap-2 text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-200' : 'text-slate-700'
                      }`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Unboxed Tech Stack */}
                  <div className={`mt-5 pt-4 border-t ${isDark ? 'border-[#1e273d]' : 'border-slate-100'}`}>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono">
                      <span className={`font-sans font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>주요 스택:</span>
                      {item.techStack.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{tech}</span>
                          {tIdx < item.techStack.length - 1 && (
                            <span className={isDark ? 'text-slate-600' : 'text-slate-300'} aria-hidden="true">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <GraduationCap className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`} />
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                학력 및 전문 교육 (Education)
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_HISTORY.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-[#0f1422] border-[#222f4c] hover:border-[#3b82f6]/60'
                      : 'bg-white border-slate-200 hover:border-[#0c4da2]/40 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {edu.school}
                      </h4>
                      <div className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`}>
                        {edu.major} ({edu.status})
                      </div>
                    </div>
                    <span className={`font-mono text-xs whitespace-nowrap ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {edu.period}
                    </span>
                  </div>

                  {edu.grade && (
                    <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500">
                      <Award className="w-3.5 h-3.5" />
                      <span>{edu.grade}</span>
                    </div>
                  )}

                  <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Academic & Growth Philosophy card */}
            <div className={`p-5 rounded-2xl border ${
              isDark 
                ? 'bg-[#0f1422] border-[#222f4c] text-slate-200' 
                : 'bg-blue-50/70 border-blue-200/80 text-slate-700'
            }`}>
              <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`}>
                GROWTH MINDSET
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                호텔경영학 전공 중 수석급 평점(4.29)과 교직이수를 마친 뒤, 소프트웨어의 논리성과 확장성에 매료되어 개발자로 전향했습니다. 
                현재 컴퓨터과학과 학사 과정을 병행하며 탄탄한 CS 이론과 실무 엔지니어링을 겸비하고 있습니다.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
