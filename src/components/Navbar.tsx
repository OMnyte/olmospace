'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Terminal, ArrowUpRight, Clock } from 'lucide-react';

export default function Navbar() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Zurich/Milan (CET/CEST) with seconds
      const formatted = new Intl.DateTimeFormat('it-IT', {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#07080b]/80 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <a href="#" className="group flex items-center gap-2.5">
            <div className="relative flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-base font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
              olmospace
            </span>
          </a>
          <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded-full border border-white/10 text-zinc-400 bg-white/[0.02]">
            v1.0 • ATELIER
          </span>
        </div>

        {/* Live Lab Time & Coordinates */}
        <div className="hidden md:flex items-center gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-white/[0.06] bg-white/[0.02]">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-zinc-300 font-medium">{time || '--:--:--'}</span>
            <span className="text-zinc-400">CET / CH</span>
          </div>
          <span className="text-zinc-400">•</span>
          <span className="text-zinc-400">RESEARCH & SYSTEMS</span>
        </div>

        {/* Navigation actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden sm:flex items-center gap-1 text-xs font-medium text-zinc-400">
            <a
              href="#chambers"
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              Chambers
            </a>
            <a
              href="#manifesto"
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              Manifesto
            </a>
            <a
              href="#telemetry"
              className="px-3 py-1.5 rounded-md hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              Telemetry
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95"
          >
            <span>Contatto</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
