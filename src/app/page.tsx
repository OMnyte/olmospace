'use client';

import { useState, useEffect } from 'react';
import {
  ExternalLink,
  Mail,
  Copy,
  Check,
  Clock,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Layers,
  Gamepad2,
  Watch,
  Terminal,
  MapPin,
  Briefcase,
  Code2
} from 'lucide-react';

export default function DashboardCV() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>('');
  const email = 'marchiolmo06@gmail.com';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat('it-IT', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now)
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 antialiased p-3 sm:p-6 md:p-8 flex flex-col justify-between selection:bg-white/20 selection:text-white">
      {/* Top Console Bar */}
      <div className="max-w-6xl w-full mx-auto mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold tracking-tight text-white text-sm">
              olmospace
            </span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-zinc-400">
            DASHBOARD / CV
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-zinc-200">{time || '18:30:00'}</span>
            <span className="text-zinc-500">CET (CH/IT)</span>
          </div>

          <a
            href="https://github.com/OMnyte"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </div>

      {/* Main Bento Dashboard Grid */}
      <main className="max-w-6xl w-full mx-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Profile Card / Executive CV Summary (Cols 1-8) */}
        <div className="md:col-span-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 sm:p-7 backdrop-blur-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Profilo & Visione
              </span>
              <span className="text-xs font-mono text-zinc-500">
                Milano • Zurigo • Remoto
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Olmo Marchi
            </h1>
            <p className="text-sm font-medium text-zinc-400 mt-1">
              Founder • Creative Systems & Conceptual Design • Quantitative Research
            </p>

            <p className="mt-4 text-sm text-zinc-300 leading-relaxed max-w-2xl">
              Costruisco all’intersezione tra materia, algoritmi e sistemi digitali. 
              Questo spazio raccoglie le mie realtà attive e i miei laboratori di sperimentazione: 
              dall’orologeria concettuale svizzera con <strong className="text-white font-medium">CRAVED</strong> alla 
              direzione artistica ed engine AI con <strong className="text-white font-medium">MIRROR STUDIO</strong>, 
              fino alla finanza sistematica e ai mondi virtuali.
            </p>
          </div>

          {/* Quick Actions & Contact */}
          <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap items-center gap-2.5">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contattami</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 text-xs hover:bg-white/[0.08] hover:text-white transition-all font-mono"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copiata!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Numbers / Status Matrix (Cols 9-12) */}
        <div className="md:col-span-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7 flex flex-col justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-4">
            Stato Ecosistema
          </span>

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
              <span className="text-xs text-zinc-400 font-mono">Realtà Live</span>
              <span className="text-sm font-semibold text-white">2 Flagship</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
              <span className="text-xs text-zinc-400 font-mono">Chambers di Ricerca</span>
              <span className="text-sm font-semibold text-white">3 Laboratori</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
              <span className="text-xs text-zinc-400 font-mono">Disponibilità</span>
              <span className="text-xs font-mono text-emerald-400">Consulenza / Progetti</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">Location Base</span>
              <span className="text-xs font-mono text-zinc-300">Milano & Svizzera</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
            Console aggiornata in tempo reale
          </div>
        </div>

        {/* --- PROJECTS / LABS BENTO SECTION --- */}

        {/* 01. CRAVED (Cols 1-6) */}
        <div className="md:col-span-6 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-950/20 to-black/30 p-5 sm:p-6 transition-all hover:border-amber-500/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-amber-500/10 text-amber-300">
                  <Watch className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90 font-medium">
                  01 / MAISON
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-amber-500/30 text-amber-300 bg-amber-950/40">
                Live & Operating
              </span>
            </div>

            <div className="flex items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold text-white tracking-tight">
                CRAVED
              </h2>
              <span className="text-xs font-mono text-zinc-400">craved.ch</span>
            </div>

            <p className="text-xs text-amber-200/70 font-mono italic mt-1">
              «Time doesn’t tick. It flows.»
            </p>

            <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Maison di orologeria concettuale indipendente fondata in Svizzera. 
              Esplorazione del tempo vissuto attraverso architetture meccaniche pure, 
              filosofia tangibile e design scultoreo non convenzionale.
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                Horology
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                Swiss Craft
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                Design
              </span>
            </div>

            <a
              href="https://craved.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-400 text-zinc-950 text-xs font-semibold hover:bg-amber-300 transition-all shadow-sm"
            >
              <span>craved.ch</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 02. MIRROR STUDIO (Cols 7-12) */}
        <div className="md:col-span-6 rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-950/20 to-black/30 p-5 sm:p-6 transition-all hover:border-violet-500/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-violet-500/10 text-violet-300">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400/90 font-medium">
                  02 / CREATIVE STUDIO
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-violet-500/30 text-violet-300 bg-violet-950/40">
                Live & Operating
              </span>
            </div>

            <div className="flex items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold text-white tracking-tight">
                MIRROR STUDIO
              </h2>
              <span className="text-xs font-mono text-zinc-400">mirrorstudio.it</span>
            </div>

            <p className="text-xs text-violet-200/70 font-mono italic mt-1">
              AI Production Engines & Brand Systems
            </p>

            <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Studio di sistemi visivi, direzione artistica ed engine di produzione 
              sintetica per brand ad alto impatto. Framework operativi (Reflect, Foundation, Operate) 
              per scalare l’identità senza colli di bottiglia tradizionali.
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                Generative AI
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                Art Direction
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                Visual Systems
              </span>
            </div>

            <a
              href="https://mirrorstudio.it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-violet-400 text-zinc-950 text-xs font-semibold hover:bg-violet-300 transition-all shadow-sm"
            >
              <span>mirrorstudio.it</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 03. QUANT LAB (Cols 1-4) */}
        <div className="md:col-span-4 rounded-2xl border border-emerald-500/20 bg-[#0c0e14] p-5 transition-all hover:border-emerald-500/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-emerald-500/10 text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                  03 / FINANCE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/30 text-emerald-300 bg-emerald-950/20">
                Active Research
              </span>
            </div>

            <h3 className="text-base font-semibold text-white">QUANT LAB</h3>
            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              Systematic Trading & Microstructure
            </p>

            <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
              Ricerca sistematica sui mercati finanziari: algoritmi di breakout Donchian, 
              analisi frattale della liquidità, sweep di volatilità e pipeline di backtest su indici globali.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400">
              MQL5
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400">
              Python
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400">
              Time Series
            </span>
          </div>
        </div>

        {/* 04. AI LAB & EXPERIMENTS (Cols 5-8) */}
        <div className="md:col-span-4 rounded-2xl border border-cyan-500/20 bg-[#0c0e14] p-5 transition-all hover:border-cyan-500/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-cyan-500/10 text-cyan-400">
                  <Cpu className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                  04 / INTELLIGENCE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-cyan-500/30 text-cyan-300 bg-cyan-950/20">
                Incubating
              </span>
            </div>

            <h3 className="text-base font-semibold text-white">AI LAB & APPS</h3>
            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              Autonomous Agents & Custom Tooling
            </p>

            <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
              Sperimentazioni su modelli fondazionali, agenti cognitivi multi-step, 
              integrazioni con protocollo MCP e prototipazione rapida di micro-applicazioni software.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400">
              LLMs
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400">
              MCP
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400">
              Next.js
            </span>
          </div>
        </div>

        {/* 05. ROBLOX VENTURES (Cols 9-12) */}
        <div className="md:col-span-4 rounded-2xl border border-orange-500/20 bg-[#0c0e14] p-5 transition-all hover:border-orange-500/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-orange-500/10 text-orange-400">
                  <Gamepad2 className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400">
                  05 / METAVERSE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-orange-500/30 text-orange-300 bg-orange-950/20">
                Prototyping
              </span>
            </div>

            <h3 className="text-base font-semibold text-white">ROBLOX VENTURES</h3>
            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              Virtual Worlds & Game Economies
            </p>

            <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
              Esplorazione e sviluppo di esperienze interattive 3D, retention loops, 
              meccaniche multiplayer in Luau ed economie virtuali su scala globale.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400">
              Luau
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400">
              Game Design
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400">
              Economies
            </span>
          </div>
        </div>

        {/* Skills & Disciplines Matrix (CV Matrix - Cols 1-12) */}
        <div className="md:col-span-12 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
              <span>Competenze Chiave & Ambiti d’Azione</span>
            </span>
            <span className="text-xs font-mono text-zinc-500">
              Curriculum & Toolkit
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.01]">
              <span className="font-semibold text-white block mb-1">
                Design Concettuale & Brand
              </span>
              <p className="text-zinc-400 leading-relaxed">
                Conceptual Horology, Industrial Design, Luxury Brand Positioning, Visual Production Systems, Creative Direction.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.01]">
              <span className="font-semibold text-white block mb-1">
                Software & Intelligenza Sintetica
              </span>
              <p className="text-zinc-400 leading-relaxed">
                Autonomous LLM Agents, MCP (Model Context Protocol), Next.js / React, Python, Luau 3D Architecture, Prompt Engineering.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.01]">
              <span className="font-semibold text-white block mb-1">
                Finanza Quantitativa & Mercati
              </span>
              <p className="text-zinc-400 leading-relaxed">
                Systematic Trading, Donchian Breakout Models, Volatility Sweeps, Risk/Drawdown Architecture, High-Resolution Backtesting.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl w-full mx-auto mt-6 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
        <div>
          <span>olmospace</span> • <span>© 2026 Olmo Marchi</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="https://craved.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            craved.ch ↗
          </a>
          <a
            href="https://mirrorstudio.it"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            mirrorstudio.it ↗
          </a>
          <a
            href="https://github.com/OMnyte"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            github.com/OMnyte ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
