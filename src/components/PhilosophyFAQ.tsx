import React, { useState } from 'react';
import { PHILOSOPHY_FAQS } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';

export const PhilosophyFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E8E4DC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#7A776F] uppercase mb-3">
            Q&A · Technical In-Depth
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141413]">
            Engineering FAQ & Practice
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5E5B55]">
            개발 과정에서 마주했던 기술적 고민과 문제 해결 전략, 협업 철학에 대한 이야기입니다.
          </p>
        </div>

        {/* Clean Accordion List matching the PNG reference */}
        <div className="divide-y divide-[#E8E4DC] border-y border-[#E8E4DC]">
          {PHILOSOPHY_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 sm:py-8 transition-colors">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#141413] group-hover:text-black pr-6">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full border border-[#DCD6C9] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#141413] text-white border-[#141413]' : 'bg-white text-[#141413]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm sm:text-base text-[#5E5B55] leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
