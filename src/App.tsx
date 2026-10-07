import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroQuote } from './components/IntroQuote';
import { FeaturedWorks } from './components/FeaturedWorks';
import { ProjectCatalog } from './components/ProjectCatalog';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { PhilosophyFAQ } from './components/PhilosophyFAQ';
import { ContactFooter } from './components/ContactFooter';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { ALL_PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const selectedProject = ALL_PROJECTS.find((p) => p.id === selectedProjectId) || null;

  const handleExploreClick = () => {
    const el = document.getElementById('featured') || document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141413] font-sans selection:bg-[#FFE600] selection:text-black flex flex-col">
      {/* Floating Top Navigation */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Full-screen 100vh Spline 3D Hero with Cinematic Zoom-Out Reveal */}
        <Hero
          onExploreClick={handleExploreClick}
          onContactClick={handleContactClick}
        />

        {/* Editorial Statement & Core Competencies */}
        <IntroQuote />

        {/* Featured Case Studies (Large Editorial Visual Cards) */}
        <FeaturedWorks
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* Complete Filterable Project Archive */}
        <ProjectCatalog
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* Experience & Education Journey */}
        <ExperienceTimeline />

        {/* Interactive Technology Matrix */}
        <SkillsMatrix />

        {/* Philosophy & Engineering Q&A */}
        <PhilosophyFAQ />
      </main>

      {/* High-Impact Brand Contact & Footer */}
      <ContactFooter />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
