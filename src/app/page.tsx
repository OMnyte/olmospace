'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LabStats from '@/components/LabStats';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import Manifesto from '@/components/Manifesto';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { PROJECTS, Project } from '@/data/projects';
import { Layers, Sparkles, Filter, Grid, Compass } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Tutti i Progetti', count: PROJECTS.length },
    { id: 'flagships', label: 'Maison & Studio', count: 2 },
    { id: 'labs', label: 'Laboratori & Ricerca', count: 3 },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'flagships') return p.category === 'maison' || p.category === 'studio';
    if (selectedCategory === 'labs') return p.category === 'quant' || p.category === 'ai' || p.category === 'ventures';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#07080b] bg-grid-lab text-zinc-100 flex flex-col selection:bg-white/20 selection:text-white">
      {/* Top sticky navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Live Lab Stats */}
        <LabStats />

        {/* Chambers Section */}
        <section id="chambers" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                <Layers className="w-3.5 h-3.5 text-zinc-400" />
                <span>Archivio & Camere di Ricerca</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Progetti & Sperimentazioni
              </h2>
              <p className="mt-2 text-sm text-zinc-400 max-w-xl">
                Dalle realtà consolidate ad alto livello alle sperimentazioni in fase di incubazione e modellazione.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center p-1 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm self-start md:self-auto">
              {filterTabs.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-zinc-200 text-zinc-900'
                          : 'bg-white/10 text-zinc-400'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>

          {/* Incubation notice for generic labs */}
          <div className="mt-12 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] p-6 text-center">
            <p className="text-xs font-mono text-zinc-400">
              <span className="text-emerald-400 font-medium">[LAB PROTOCOL]</span> I laboratori sperimentali (Quant, AI, Roblox) evolvono ciclicamente. Nuovi branch e branding dedicati vengono formalizzati al raggiungimento della piena maturità operativa.
            </p>
          </div>
        </section>

        {/* Manifesto / Convergence */}
        <Manifesto />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Drawer Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
