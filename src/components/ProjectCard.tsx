import { Project } from '@/data/projects';
import { ArrowUpRight, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0e14]/80 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex flex-col justify-between">
      {/* Subtle top gradient glow on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${project.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div>
        {/* Top bar: Category + Status Badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
            {project.categoryLabel}
          </span>
          <span
            className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}
          >
            {project.status}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
              {project.title}
            </h3>
            {project.externalUrl && (
              <span className="text-xs font-mono text-zinc-400">
                ({project.externalUrl.replace('https://', '')})
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm font-medium text-zinc-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Short description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
          {project.shortDesc}
        </p>

        {/* Highlights / Features (2 quick bullet points) */}
        <div className="space-y-1.5 mb-6 text-xs text-zinc-300">
          {project.highlights.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-zinc-400 mt-0.5">•</span>
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Discipline / Tag chips */}
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
          {project.stack.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-400"
            >
              {tag}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 text-zinc-400">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Actions bar */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors py-1 group/btn"
          >
            <span>Dettagli Lab</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.05] text-xs font-medium text-white hover:bg-white hover:text-zinc-950 transition-all shadow-sm"
            >
              <span>Visita Live</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            >
              <span>Chamber Scheda</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
