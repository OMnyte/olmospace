import { ArrowDown, Compass, ExternalLink, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden border-b border-white/[0.06]">
      {/* Ambient background glows */}
      <div className="ambient-glow top-0 left-1/4 w-96 h-96 bg-amber-500/10 blur-[130px]" />
      <div className="ambient-glow top-12 right-1/4 w-96 h-96 bg-violet-500/10 blur-[140px]" />
      <div className="ambient-glow bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Personal Laboratory & Atelier
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]">
            Materia, Algoritmi <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500">
              & Nuovi Territori.
            </span>
          </h1>

          {/* Subtitle / Lab thesis */}
          <p className="mt-6 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Benvenuto in <strong className="text-zinc-200 font-medium">olmospace</strong>: 
            il mio laboratorio personale di ricerca e produzione. 
            Uno spazio che racchiude le mie sperimentazioni attive — dall’orologeria concettuale 
            svizzera con <strong className="text-zinc-200 font-medium">CRAVED</strong> alla direzione 
            artistica e sintesi visiva con <strong className="text-zinc-200 font-medium">MIRROR STUDIO</strong>, 
            fino ai modelli di finanza quantitativa, all’AI applicata e alle economie virtuali.
          </p>

          {/* Quick link chips */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#chambers"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md active:scale-95"
            >
              <span>Esplora i Laboratori</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="https://craved.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/[0.02] text-zinc-300 text-xs sm:text-sm hover:bg-white/[0.08] hover:text-white transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400/80"></span>
              <span>craved.ch</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href="https://mirrorstudio.it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/[0.02] text-zinc-300 text-xs sm:text-sm hover:bg-white/[0.08] hover:text-white transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-violet-400/80"></span>
              <span>mirrorstudio.it</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* Subtle metadata coordinates */}
          <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
            <div>
              <span className="text-zinc-400">FOUNDER / ARCHITECT:</span>{' '}
              <span className="text-zinc-400 font-medium">Olmo Marchi</span>
            </div>
            <div>
              <span className="text-zinc-400">DISCIPLINES:</span>{' '}
              <span className="text-zinc-400 font-medium">Horology • Generative Systems • Quant • Metaverse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
