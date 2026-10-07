import React from 'react';
import { ArrowUp, Github, Mail } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-10 border-t transition-colors ${
      isDark ? 'bg-[#080b11] border-[#1e273d] text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3 text-xs">
          <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {DEVELOPER_INFO.name} ({DEVELOPER_INFO.englishName})
          </span>
          <span className={isDark ? 'text-slate-600' : 'text-slate-300'} aria-hidden="true">·</span>
          <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>© {new Date().getFullYear()} All Rights Reserved.</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-xs font-semibold">
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors flex items-center gap-1.5 ${
              isDark ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-[#0c4da2]'
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${DEVELOPER_INFO.email}`}
            className={`transition-colors flex items-center gap-1.5 ${
              isDark ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-[#0c4da2]'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-200 text-slate-700'
            }`}
            title="맨 위로 스크롤"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
