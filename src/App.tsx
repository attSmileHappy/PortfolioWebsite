/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoreStrengths } from './components/CoreStrengths';
import { CareerEducation } from './components/CareerEducation';
import { SkillMatrix } from './components/SkillMatrix';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Default to dark mode for a luxurious aesthetic as requested
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved === 'dark';
    return true;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#080b11';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafd';
      document.body.style.color = '#0f172a';
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      isDark ? 'bg-[#080b11] text-slate-100 dark' : 'bg-[#f8fafd] text-slate-900'
    }`}>
      {/* Navigation Header */}
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Hero Section with Embedded Spline 3D Robot */}
        <HeroSection
          isDark={isDark}
          onOpenContact={handleOpenContact}
        />

        {/* Core Strengths (Page 2 of PDF) */}
        <CoreStrengths isDark={isDark} />

        {/* Projects Section with Bento & Detail Modals (Page 4-21 of PDF) */}
        <ProjectsSection
          isDark={isDark}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Technical Skills Matrix (Page 3 of PDF) */}
        <SkillMatrix isDark={isDark} />

        {/* Career & Education History (Page 3 of PDF) */}
        <CareerEducation isDark={isDark} />

        {/* Contact Section */}
        <ContactSection isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Project Detail Deep-Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </div>
  );
}
