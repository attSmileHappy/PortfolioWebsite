import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Featured', href: '#featured' },
    { label: 'Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Philosophy', href: '#philosophy' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-cinematic ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DC] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-[#141413] hover:opacity-80 transition-opacity flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#141413] group-hover:bg-[#FFE600] transition-colors" />
          <span>YEJI KIM</span>
          <span className="text-xs text-[#7A776F] font-normal hidden sm:inline">· {PERSONAL_INFO.nameKo}</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5E5B55]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#141413] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#141413] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="text-xs font-semibold px-3.5 py-2 rounded-full border border-[#DCD6C9] hover:border-[#141413] text-[#141413] transition-colors whitespace-nowrap bg-white/50 hover:bg-white"
          >
            Resume Overview
          </button>
          <button
            onClick={onOpenContact}
            className="text-xs font-semibold px-4 py-2 rounded-full bg-[#141413] text-white hover:bg-[#2A2926] transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-xs"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#141413] text-white"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#141413] hover:bg-[#EFECE6] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b border-[#E8E4DC] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#141413] hover:text-[#7A776F] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#E8E4DC] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold rounded-full border border-[#DCD6C9] text-[#141413] bg-white"
            >
              Resume Overview
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold rounded-full bg-[#FFE600] text-[#141413] font-bold"
            >
              Get in Touch (Email / Call)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
