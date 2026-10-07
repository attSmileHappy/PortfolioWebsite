import React, { useState } from 'react';
import { Moon, Sun, Github, Mail, Menu, X, Download } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '핵심 역량', href: '#strengths' },
    { label: '경력 & 학력', href: '#career' },
    { label: '기술 스택', href: '#skills' },
    { label: '프로젝트', href: '#projects' },
    { label: '연락처', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b backdrop-blur-md ${
      isDark 
        ? 'bg-[#080b11]/90 border-[#1a2336] text-slate-100' 
        : 'bg-white/90 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand title, one single clean text element wordmark */}
        <a 
          href="#" 
          className="text-lg font-bold tracking-tight hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
        >
          <span className={`tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>YEJI KIM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0c4da2]" aria-hidden="true" />
        </a>

        {/* Zone 2: 4-6 nav links, 1-2 word labels, single line */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors whitespace-nowrap relative py-1 font-medium ${
                isDark ? 'text-slate-200 hover:text-white' : 'text-slate-700 hover:text-[#0c4da2]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions (Theme toggle & Contact CTA) */}
        <div className="flex items-center gap-2">
          {/* Direct ZIP Download button */}
          <a
            href="/yeji-kim-portfolio.zip"
            download="yeji-kim-portfolio.zip"
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              isDark 
                ? 'border-[#222f4c] bg-[#0c101c] text-blue-300 hover:text-white hover:border-[#3b82f6]' 
                : 'border-slate-200 bg-slate-50 text-slate-800 hover:text-[#0c4da2]'
            }`}
            title="GitHub / Vercel 배포용 전체 프로젝트 파일 다운로드"
          >
            <Download className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span>ZIP 다운로드</span>
          </a>

          {/* GitHub quick link */}
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub 프로필 보기"
            className={`p-2 rounded-lg transition-colors ${
              isDark 
                ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
            className={`p-2 rounded-lg transition-colors ${
              isDark 
                ? 'text-amber-400 hover:bg-slate-800' 
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Direct Contact Button */}
          <button
            onClick={onOpenContact}
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0c4da2] rounded-lg hover:bg-[#1260c8] active:scale-95 transition-all shadow-sm whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>연락하기</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg md:hidden transition-colors ${
              isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-2 pb-4 border-b ${
          isDark ? 'bg-[#0b0f17] border-[#1a2336]' : 'bg-white border-slate-200'
        }`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isDark 
                    ? 'text-slate-200 hover:bg-slate-800' 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/yeji-kim-portfolio.zip"
              download="yeji-kim-portfolio.zip"
              className="w-full mt-2 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-blue-300 bg-[#0c101c] border border-[#222f4c] rounded-lg"
            >
              <Download className="w-4 h-4 text-[#3b82f6]" />
              전체 프로젝트 ZIP 다운로드
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full mt-1 flex items-center justify-center gap-2 py-2 text-sm font-medium text-white bg-[#0c4da2] rounded-lg"
            >
              <Mail className="w-4 h-4" />
              연락하기 (이메일 / 전화)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
