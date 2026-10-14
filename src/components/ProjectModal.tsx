'use client';

import { useEffect } from 'react';
import { Project } from '@/data/projects';
import { X, ExternalLink, Sparkles, MapPin, Calendar, Layers, ShieldCheck, Check } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0d0f15] p-6 sm:p-8 shadow-2xl z-10 transition-all text-white">
        {/* Header / Badges */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              {project.categoryLabel}
            </span>
            <span className="text-zinc-600">•</span>
            <span
              className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
            >
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Chiudi finestra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Coordinates */}
        <div className="mt-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-zinc-400 mt-1">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
          </div>
        </div>

        {/* Philosophy quote */}
        <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
            Tesi & Filosofia Fondante
          </span>
          <p className="text-sm sm:text-base italic text-zinc-200 leading-relaxed">
            {project.philosophy}
          </p>
        </div>

        {/* Description & Extended Notes */}
        <div className="mt-6 space-y-4 text-sm text-zinc-300 leading-relaxed">
          <p>{project.shortDesc}</p>
          <p className="text-zinc-400">{project.extendedNotes}</p>
        </div>

        {/* Key Highlights */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            Punti Chiave & Metodologia
          </h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-emerald-400 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack / Discipline Tags */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
            Discipline & Strumenti
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Chiudi
          </button>
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>Visita {project.title.toLowerCase()}.{project.title === 'CRAVED' ? 'ch' : 'it'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
