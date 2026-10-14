import React, { useState, useEffect } from 'react';
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
import { AdminModal } from './components/AdminModal';
import { ALL_PROJECTS } from './data/portfolioData';
import { initializeVisitorSession, recordVisitorAction } from './utils/visitorTracker';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Initialize client visitor logging upon page mount
  useEffect(() => {
    initializeVisitorSession();
  }, []);

  const selectedProject = ALL_PROJECTS.find((p) => p.id === selectedProjectId) || null;

  const handleExploreClick = () => {
    recordVisitorAction('Explore Projects 클릭');
    const el = document.getElementById('featured') || document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResume = () => {
    recordVisitorAction('Resume Overview 열람');
    setIsResumeOpen(true);
  };

  const handleSelectProject = (id: string) => {
    const proj = ALL_PROJECTS.find((p) => p.id === id);
    if (proj) {
      recordVisitorAction(`프로젝트 열람: ${proj.title}`);
    }
    setSelectedProjectId(id);
  };

  return (
    <div className="min-h-screen bg-white text-[#141413] font-sans selection:bg-[#004ab5] selection:text-white flex flex-col">
      {/* Floating Top Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Full-screen 100vh Spline 3D Hero with Cinematic Zoom-Out Reveal */}
        <Hero
          onExploreClick={handleExploreClick}
          onResumeClick={handleOpenResume}
        />

        {/* Editorial Statement & Core Competencies */}
        <IntroQuote />

        {/* Featured Case Studies (Large Editorial Visual Cards) */}
        <FeaturedWorks onSelectProject={handleSelectProject} />

        {/* Complete Filterable Project Archive */}
        <ProjectCatalog onSelectProject={handleSelectProject} />

        {/* Experience & Education Journey */}
        <ExperienceTimeline />

        {/* Interactive Technology Matrix */}
        <SkillsMatrix />

        {/* Philosophy & Engineering Q&A */}
        <PhilosophyFAQ />
      </main>

      {/* High-Impact Brand Contact & Footer with Admin Button at the bottom */}
      <ContactFooter onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Administrator Visitor Log Modal (Protected by Secure SHA-256 Hash Authentication) */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}
