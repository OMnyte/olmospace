'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Clock,
  LayoutGrid,
  BookOpen,
  List,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type ViewMode = 'grid' | 'carousel' | 'dossier';

interface Chamber {
  index: string;
  id: string;
  name: string;
  domain?: string;
  url?: string;
  bannerImage?: string;
  bannerAspect?: string;
  bannerBg?: string;
  tagline: string;
  category: string;
  status: string;
  location: string;
  proof: string;
  description: string;
  stack: string[];
}

interface Milestone {
  period: string;
  title: string;
  detail?: string;
}

const CHAMBERS: Chamber[] = [
  {
    index: '01',
    id: 'craved',
    name: 'CRAVED',
    domain: 'craved.ch',
    url: 'https://craved.ch',
    bannerImage: '/craved-preview.jpg',
    bannerAspect: 'aspect-[2.02/1]',
    bannerBg: 'bg-black border-zinc-900',
    tagline: 'Time doesn’t tick. It flows.',
    category: 'Orologeria Concettuale',
    status: 'In sviluppo',
    location: 'Modena [IT] | Dal 2025',
    proof: 'Marchio registrato EUIPO · Design registrato WIPO',
    description:
      'Progetto indipendente di orologeria concettuale. Un orologio che fa sentire il tempo che scorre invece di scandirlo: cassa scultorea, architettura a clessidra e standard costruttivi svizzeri.',
    stack: ['Industrial Design', '3D Prototyping', 'Brand Identity', 'Proprietà Intellettuale']
  },
  {
    index: '02',
    id: 'mirror-studio',
    name: 'MIRR/OR STUDIO',
    domain: 'mirrorstudio.it',
    url: 'https://mirrorstudio.it',
    bannerImage: '/mirror-logo.png',
    bannerAspect: 'aspect-[3.2/1]',
    bannerBg: 'bg-white border-zinc-200',
    tagline: 'Creative systems & AI production',
    category: 'Studio Creativo',
    status: 'Attivo',
    location: 'Modena [IT] | Dal 2026',
    proof: 'Studio attivo dal 2026 · Sito live mirrorstudio.it',
    description:
      'Studio creativo che progetta identità visive, contenuti e produzione con strumenti di AI generativa, per brand e progetti imprenditoriali.',
    stack: ['Generative AI', 'Art Direction', 'Brand Identity', 'Content Production']
  },
  {
    index: '03',
    id: 'neverhalt',
    name: 'NEVERHALT',
    domain: 'neverhalt.app',
    url: 'https://neverhalt.app',
    bannerImage: '/neverhalt-banner.svg',
    bannerAspect: 'aspect-[3.2/1]',
    bannerBg: 'bg-[#08090C] border-zinc-900',
    tagline: 'Your agent never sleep. So you can.',
    category: 'Cloud per Agenti AI',
    status: 'In sviluppo',
    location: 'Cloud | Dal 2026',
    proof: 'Piattaforma online su neverhalt.app · In sviluppo attivo',
    description:
      'Hosting 24/7 per agenti AI, bot Python e server MCP: processi sempre accesi, storage persistente e browser headless pronti all’uso, senza dover gestire un server.',
    stack: ['Cloudflare', 'FastAPI', 'Docker', 'FastMCP', 'Playwright', 'Python']
  },
  {
    index: '04',
    id: 'quant-lab',
    name: 'QUANT LAB',
    bannerImage: '/quant-banner.svg',
    bannerAspect: 'aspect-[3.2/1]',
    bannerBg: 'bg-[#090A0D] border-zinc-900',
    tagline: 'Systematic Trading Research',
    category: 'Finanza Quantitativa',
    status: 'Ricerca personale',
    location: 'Ricerca personale',
    proof: 'Backtest e forward test con costi misurati sui tick reali',
    description:
      'Ricerca personale sui mercati: strategie sistematiche trend-following, analisi della volatilità e gestione del rischio, con un journaling strutturato di ogni test.',
    stack: ['Python', 'MQL5 / MetaTrader', 'Time Series', 'Backtesting']
  },
  {
    index: '05',
    id: 'ai-lab',
    name: 'AI LAB & APPS',
    tagline: 'Agents & Custom Tooling',
    category: 'Software & Agenti AI',
    status: 'Uso interno',
    location: 'Software Lab',
    proof: 'Strumenti che uso ogni giorno per lavorare su tutti i progetti',
    description:
      'Agenti, server MCP e piccole app costruite su misura per automatizzare ricerca, sviluppo e produzione.',
    stack: ['Next.js / React', 'TypeScript', 'MCP', 'Python']
  },
  {
    index: '06',
    id: 'roblox-ventures',
    name: 'ROBLOX VENTURES',
    tagline: 'Virtual Worlds & Gameplay',
    category: 'Sviluppo Giochi',
    status: 'Prototipi',
    location: 'Interactive Dev',
    proof: 'Prototipi in sviluppo, non ancora pubblicati',
    description:
      'Giochi e meccaniche multiplayer per Roblox: scripting Luau client-server, loop di gameplay e sistemi di progressione.',
    stack: ['Luau', 'Roblox Studio', 'Level Design', 'Multiplayer']
  }
];

const MILESTONES: Milestone[] = [
  { period: '2026', title: 'Fondo MIRR/OR STUDIO e avvio NEVERHALT', detail: 'Studio creativo e piattaforma cloud per agenti AI.' },
  { period: '2025 – oggi', title: 'Fisica | UNIMORE', detail: 'Laurea triennale in corso.' },
  { period: '2025', title: 'Fondo CRAVED', detail: 'Marchio registrato EUIPO, design registrato WIPO.' },
  { period: '2025', title: 'Real Estate Associate | Coldwell Banker Modena' },
  { period: '2022 – 2025', title: 'Lavoro in cantiere e come cameriere' },
  { period: '2021 – 2023', title: 'Web copywriter & marketing', detail: 'Siti, contenuti e campagne advertising per piccole attività locali.' }
];

const OFF_WORK: Milestone[] = [
  { period: 'Scacchi', title: 'Tornei regionali e nazionali' },
  { period: 'Basket', title: 'Ex giocatore agonista' }
];

export default function OlmospaceDashboard() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [time, setTime] = useState<string>('');
  const [zone, setZone] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'carousel') return;
      if (e.key === 'ArrowRight') {
        setCarouselIndex((prev) => (prev + 1) % CHAMBERS.length);
      } else if (e.key === 'ArrowLeft') {
        setCarouselIndex((prev) => (prev - 1 + CHAMBERS.length) % CHAMBERS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  const goToNext = () => setCarouselIndex((prev) => (prev + 1) % CHAMBERS.length);
  const goToPrev = () => setCarouselIndex((prev) => (prev - 1 + CHAMBERS.length) % CHAMBERS.length);

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
      // CET in winter, CEST in summer
      setZone(
        new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Zurich', timeZoneName: 'short' })
          .formatToParts(now)
          .find((p) => p.type === 'timeZoneName')?.value ?? ''
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const displayedChambers =
    activeTab === 'all'
      ? CHAMBERS
      : CHAMBERS.filter((c) => c.id === activeTab);

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white flex flex-col justify-between">
      {/* Top Bar (Swiss Minimal) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-tight text-zinc-900">
              OLMOSPACE
            </span>
            <span className="text-zinc-300">|</span>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
              Dashboard & Labs
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-100 border border-zinc-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-800 font-medium tabular-nums">{time || '--:--:--'}</span>
              <span className="text-zinc-500 hidden sm:inline">| Modena {zone}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Expanded Widescreen Dashboard Body */}
      <main className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column | Profile & Contact (not sticky: taller than most viewports) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Identity Card */}
            <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm">
              {/* Photo */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 border border-zinc-200 bg-zinc-100">
                <Image
                  src="/olmo.jpg"
                  alt="Olmo Marchi"
                  fill
                  priority
                  className="object-cover grayscale contrast-110"
                />
              </div>

              {/* Name & Title */}
              <div className="space-y-1 pb-4 border-b border-zinc-100">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 block">
                  Studente | Founder
                </span>
                <h1 className="text-2xl font-normal tracking-tight text-zinc-950">
                  Olmo Marchi
                </h1>
                <p className="text-sm text-zinc-700 italic">
                  Curioso per natura, concreto per scelta.
                </p>
              </div>

              {/* Bio */}
              <p className="text-sm text-zinc-600 leading-relaxed mt-4">
                Studio Fisica a UNIMORE e costruisco progetti tra design, intelligenza artificiale e finanza quantitativa. Lavoro dal 2021: prima siti e campagne per piccole attività, poi cantiere, sala e immobiliare, oggi i miei progetti.
              </p>

              {/* Dossier Structured Metadata */}
              <div className="mt-5 pt-4 border-t border-zinc-100 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-500">
                  <span>Anno</span>
                  <span className="text-zinc-800 font-medium">2006</span>
                </div>
                <div className="flex items-center justify-between text-zinc-500">
                  <span>Università</span>
                  <span className="text-zinc-800 font-medium">Fisica | UNIMORE</span>
                </div>
                <div className="flex items-center justify-between text-zinc-500">
                  <span>Base</span>
                  <span className="text-zinc-800 font-medium">Modena | Emilia</span>
                </div>
                <div className="flex items-center justify-between text-zinc-500">
                  <span>Lingue</span>
                  <span className="text-zinc-800 font-medium">Italiano | Inglese</span>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-5 pt-4 border-t border-zinc-100">
                <a
                  href="https://www.linkedin.com/in/olmomarchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-950 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors"
                >
                  <span>Contattami su LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="mt-2 text-[11px] text-zinc-500 leading-snug">
                  Per CRAVED, MIRR/OR o NEVERHALT scrivi dal sito del progetto.
                </p>
              </div>

              {/* External Links */}
              <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500">
                <a
                  href="https://craved.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 transition-colors"
                >
                  craved.ch ↗
                </a>
                <a
                  href="https://mirrorstudio.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 transition-colors"
                >
                  mirrorstudio.it ↗
                </a>
                <a
                  href="https://neverhalt.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 transition-colors"
                >
                  neverhalt.app ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/olmomarchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/OMnyte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column | Widescreen Chambers & Labs Workspace */}
          <section className="lg:col-span-8 space-y-6">
            {/* Filter & View Mode Bar */}
            <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white shadow-sm space-y-4">
              {/* Top Row: Title & View Segmented Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 block">
                    Cosa sto costruendo
                  </span>
                  <h2 className="text-lg font-normal tracking-tight text-zinc-900">
                    Progetti
                  </h2>
                </div>

                {/* View Mode Segmented Controls */}
                <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-xl border border-zinc-200 self-start sm:self-auto">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      viewMode === 'grid'
                        ? 'bg-zinc-950 text-white font-medium shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
                    }`}
                    title="Vista Griglia (Bento Grid)"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Griglia</span>
                  </button>

                  <button
                    onClick={() => setViewMode('carousel')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      viewMode === 'carousel'
                        ? 'bg-zinc-950 text-white font-medium shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
                    }`}
                    title="Vista Sfoglia (Focus / Magazine)"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Sfoglia</span>
                  </button>

                  <button
                    onClick={() => setViewMode('dossier')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      viewMode === 'dossier'
                        ? 'bg-zinc-950 text-white font-medium shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60'
                    }`}
                    title="Vista Dossier (Lista Completa)"
                  >
                    <List className="w-3.5 h-3.5" />
                    <span>Dossier</span>
                  </button>
                </div>
              </div>

              {/* Bottom Row: Tab Filters */}
              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                      activeTab === 'all'
                        ? 'bg-zinc-950 text-white font-medium'
                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                    }`}
                  >
                    [ TUTTI ]
                  </button>

                  {CHAMBERS.map((chamber, idx) => {
                    const isActive = viewMode === 'carousel' ? carouselIndex === idx : activeTab === chamber.id;
                    return (
                      <button
                        key={chamber.id}
                        onClick={() => {
                          if (viewMode === 'carousel') {
                            setCarouselIndex(idx);
                          } else {
                            setActiveTab(chamber.id);
                          }
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-zinc-950 text-white font-medium shadow-xs'
                            : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                        }`}
                      >
                        <span className="text-zinc-400">{chamber.index}</span>
                        <span>{chamber.name}</span>
                      </button>
                    );
                  })}
                </div>

                {viewMode === 'carousel' && (
                  <span className="hidden md:inline text-[11px] font-mono text-zinc-400 whitespace-nowrap">
                    Tasti ← →
                  </span>
                )}
              </div>
            </div>

            {/* VIEW MODE 1: SFOGLIA / FOCUS CAROUSEL */}
            {viewMode === 'carousel' && (() => {
              const currentChamber = CHAMBERS[carouselIndex];
              return (
                <div className="space-y-4">
                  {/* Active Slide Card */}
                  <article className="p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300">
                    {/* Carousel Header Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-100">
                      <div className="flex items-center gap-2.5 text-xs font-mono">
                        <span className="px-2.5 py-1 rounded bg-zinc-950 text-white font-semibold">
                          {currentChamber.index} / {String(CHAMBERS.length).padStart(2, '0')}
                        </span>
                        <span className="text-zinc-300">|</span>
                        <span className="uppercase tracking-wider text-zinc-700 font-medium">
                          {currentChamber.category}
                        </span>
                        <span className="text-zinc-300">|</span>
                        <span className="px-2.5 py-0.5 rounded-full border border-zinc-200 text-zinc-700 bg-zinc-50 font-medium">
                          {currentChamber.status}
                        </span>
                      </div>

                      {/* Previous / Next buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={goToPrev}
                          className="px-3 py-1.5 rounded-lg border border-zinc-200 text-zinc-700 hover:border-zinc-950 hover:text-zinc-950 transition-colors flex items-center gap-1 text-xs font-mono bg-zinc-50"
                          title="Precedente (Freccia Sinistra)"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <span>Precedente</span>
                        </button>

                        <button
                          onClick={goToNext}
                          className="px-3 py-1.5 rounded-lg bg-zinc-950 text-white hover:bg-zinc-800 transition-colors flex items-center gap-1 text-xs font-mono font-medium shadow-xs"
                          title="Successivo (Freccia Destra)"
                        >
                          <span>Successivo</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Banner Hero */}
                    {currentChamber.bannerImage && (
                      <div className="mt-6 mb-6">
                        {currentChamber.url ? (
                          <a
                            href={currentChamber.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative block w-full aspect-[2.8/1] sm:aspect-[3.2/1] rounded-xl overflow-hidden border ${currentChamber.bannerBg || 'bg-white border-zinc-200'} hover:border-zinc-500 transition-all shadow-xs`}
                            title={`Visita ${currentChamber.domain}`}
                          >
                            <Image
                              src={currentChamber.bannerImage}
                              alt={currentChamber.name}
                              fill
                              className={`${currentChamber.id === 'craved' ? 'object-cover' : 'object-contain p-3 sm:p-4'} group-hover:scale-[1.015] transition-transform duration-300`}
                            />
                            {currentChamber.domain && (
                              <div className="absolute top-3 right-3 text-zinc-900 bg-white/95 backdrop-blur-xs rounded-md px-2.5 py-1 text-xs font-mono shadow-xs flex items-center gap-1">
                                <span>{currentChamber.domain}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                              </div>
                            )}
                          </a>
                        ) : (
                          <div
                            className={`relative block w-full aspect-[2.8/1] sm:aspect-[3.2/1] rounded-xl overflow-hidden border ${currentChamber.bannerBg || 'bg-white border-zinc-200'} shadow-xs`}
                          >
                            <Image
                              src={currentChamber.bannerImage}
                              alt={currentChamber.name}
                              fill
                              className="object-contain p-3 sm:p-4"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Title & Tagline */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-3xl font-normal tracking-tight text-zinc-950">
                          {currentChamber.name}
                        </h3>
                        <p className="text-xs text-zinc-500 font-mono mt-0.5">
                          {currentChamber.tagline}
                        </p>
                      </div>

                      {currentChamber.domain && (
                        <a
                          href={currentChamber.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center gap-1"
                        >
                          <span>{currentChamber.domain}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Proof */}
                    <div className="p-4 rounded-xl border border-zinc-100 bg-[#fafafa] mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                        Fatti
                      </span>
                      <p className="text-sm font-medium text-zinc-800 leading-relaxed">
                        {currentChamber.proof}
                      </p>
                    </div>

                    {/* Split Details */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-zinc-100">
                      <div className="md:col-span-7">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                          Descrizione
                        </span>
                        <p className="text-sm text-zinc-600 leading-relaxed font-light">
                          {currentChamber.description}
                        </p>

                        {currentChamber.url && (
                          <div className="mt-6">
                            <a
                              href={currentChamber.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors shadow-xs"
                            >
                              <span>Visita {currentChamber.domain}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="md:col-span-5 space-y-5 md:border-l md:border-zinc-100 md:pl-6">
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                            Strumenti
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {currentChamber.stack.map((item, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-600"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Thumbnail Jump Strip */}
                  <div className="p-3 rounded-2xl border border-zinc-200 bg-white shadow-xs">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-2 pb-2">
                      <span>Tutti i progetti</span>
                      <span>Seleziona un progetto</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                      {CHAMBERS.map((c, idx) => {
                        const isCurrent = carouselIndex === idx;
                        return (
                          <button
                            key={c.id}
                            onClick={() => setCarouselIndex(idx)}
                            className={`p-2.5 rounded-xl border text-left transition-all ${
                              isCurrent
                                ? 'border-zinc-950 bg-zinc-950 text-white shadow-xs'
                                : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-400 hover:bg-white'
                            }`}
                          >
                            <span className="text-[10px] font-mono block text-zinc-400">
                              {c.index}
                            </span>
                            <span className="text-xs font-medium block truncate mt-0.5">
                              {c.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* VIEW MODE 2: BENTO GRIGLIA */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {displayedChambers.map((chamber) => (
                  <article
                    key={chamber.id}
                    className="p-5 sm:p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs hover:border-zinc-400 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top meta strip */}
                      <div className="flex items-center justify-between text-xs font-mono pb-3 mb-4 border-b border-zinc-100">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-semibold border border-zinc-200">
                            {chamber.index}
                          </span>
                          <span className="text-zinc-300">|</span>
                          <span className="text-[11px] uppercase tracking-wider text-zinc-600 font-medium truncate max-w-[130px]">
                            {chamber.category}
                          </span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-200 text-zinc-700 bg-zinc-50 font-medium whitespace-nowrap">
                          {chamber.status}
                        </span>
                      </div>

                      {/* Visual Banner */}
                      {chamber.bannerImage && (
                        chamber.url ? (
                          <a
                            href={chamber.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative block w-full aspect-[2.6/1] rounded-xl overflow-hidden mb-4 border ${chamber.bannerBg || 'bg-white border-zinc-200'} hover:border-zinc-500 transition-all shadow-xs`}
                            title={`Visita ${chamber.domain}`}
                          >
                            <Image
                              src={chamber.bannerImage}
                              alt={chamber.name}
                              fill
                              className={`${chamber.id === 'craved' ? 'object-cover' : 'object-contain p-2.5'} group-hover:scale-[1.02] transition-transform duration-300`}
                            />
                            {chamber.domain && (
                              <div className="absolute top-2 right-2 text-zinc-900 bg-white/95 backdrop-blur-xs rounded px-1.5 py-0.5 text-[9px] font-mono shadow-xs flex items-center gap-0.5">
                                <span>{chamber.domain}</span>
                                <ArrowUpRight className="w-2.5 h-2.5 text-zinc-500" />
                              </div>
                            )}
                          </a>
                        ) : (
                          <div
                            className={`relative block w-full aspect-[2.6/1] rounded-xl overflow-hidden mb-4 border ${chamber.bannerBg || 'bg-white border-zinc-200'} shadow-xs`}
                          >
                            <Image
                              src={chamber.bannerImage}
                              alt={chamber.name}
                              fill
                              className="object-contain p-2.5"
                            />
                          </div>
                        )
                      )}

                      {/* Title & Domain */}
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-xl font-normal tracking-tight text-zinc-950">
                          {chamber.name}
                        </h3>
                        {chamber.domain && (
                          <a
                            href={chamber.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-zinc-500 hover:text-zinc-950 transition-colors inline-flex items-center gap-0.5"
                          >
                            <span>{chamber.domain}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {/* Proof callout */}
                      <p className="text-xs font-medium text-zinc-800 bg-[#fafafa] p-2.5 rounded-lg border border-zinc-100 mb-3 leading-snug">
                        {chamber.proof}
                      </p>

                      {/* Description */}
                      <p className="text-[13px] text-zinc-600 leading-relaxed line-clamp-4 mb-4">
                        {chamber.description}
                      </p>
                    </div>

                    <div>
                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-zinc-100">
                        {chamber.stack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {chamber.stack.length > 4 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-zinc-500">
                            +{chamber.stack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Bottom Action */}
                      <div className="flex items-center gap-2">
                        {chamber.url && (
                          <a
                            href={chamber.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 px-3 rounded-lg bg-zinc-900 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1.5"
                          >
                            <span>Visita {chamber.domain}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                        <button
                          onClick={() => {
                            const idx = CHAMBERS.findIndex((c) => c.id === chamber.id);
                            if (idx !== -1) {
                              setCarouselIndex(idx);
                              setViewMode('carousel');
                            }
                          }}
                          className={`${chamber.url ? 'px-3' : 'w-full'} py-2 rounded-lg border border-zinc-200 text-zinc-700 text-xs font-mono font-medium hover:border-zinc-950 transition-colors flex items-center justify-center gap-1.5 bg-zinc-50`}
                          title="Sfoglia a schermo intero"
                        >
                          <span>Sfoglia</span>
                          <BookOpen className="w-3 h-3 text-zinc-400" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* VIEW MODE 3: DOSSIER COMPLETO (SLATES VERTICALI) */}
            {viewMode === 'dossier' && (
              <div className="space-y-6">
                {displayedChambers.map((chamber) => (
                  <article
                    key={chamber.id}
                    className="p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:border-zinc-400 transition-all duration-200"
                  >
                    {/* Header Strip with pipe separators */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-zinc-100">
                      <div className="flex items-center gap-2.5 text-xs font-mono">
                        <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-medium border border-zinc-200">
                          {chamber.index}
                        </span>
                        <span className="text-zinc-300">|</span>
                        <span className="uppercase tracking-wider text-zinc-600 font-medium">
                          {chamber.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                        <span>{chamber.location}</span>
                        <span className="text-zinc-300">|</span>
                        <span className="px-2.5 py-0.5 rounded-full border border-zinc-200 text-zinc-800 bg-zinc-50 font-medium">
                          {chamber.status}
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
                      {/* Left Sub-column */}
                      <div className="md:col-span-5 flex flex-col justify-between">
                        <div>
                          {chamber.bannerImage && (
                            chamber.url ? (
                              <a
                                href={chamber.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative block w-full ${chamber.bannerAspect || 'aspect-[3.6/1]'} rounded-xl overflow-hidden mb-4 border ${chamber.bannerBg || 'bg-white border-zinc-200'} hover:border-zinc-500 transition-all shadow-xs`}
                                title={`Visita ${chamber.domain}`}
                              >
                                <Image
                                  src={chamber.bannerImage}
                                  alt={chamber.name}
                                  fill
                                  className={`${chamber.id === 'craved' ? 'object-cover' : 'object-contain p-2 sm:p-3'} group-hover:scale-[1.02] transition-transform duration-300`}
                                />
                                {chamber.domain && (
                                  <div className="absolute top-2.5 right-2.5 text-zinc-900 bg-white/95 backdrop-blur-xs rounded-md px-2 py-0.5 text-[10px] font-mono shadow-xs flex items-center gap-1">
                                    <span>{chamber.domain}</span>
                                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                                  </div>
                                )}
                              </a>
                            ) : (
                              <div
                                className={`relative block w-full ${chamber.bannerAspect || 'aspect-[3.6/1]'} rounded-xl overflow-hidden mb-4 border ${chamber.bannerBg || 'bg-white border-zinc-200'} shadow-xs`}
                              >
                                <Image
                                  src={chamber.bannerImage}
                                  alt={chamber.name}
                                  fill
                                  className="object-contain p-2 sm:p-3"
                                />
                              </div>
                            )
                          )}

                          <div className="flex items-baseline justify-between gap-2">
                            <h3 className="text-2xl font-normal tracking-tight text-zinc-950">
                              {chamber.name}
                            </h3>
                            {chamber.domain && (
                              <a
                                href={chamber.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-1"
                              >
                                <span>{chamber.domain}</span>
                                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                              </a>
                            )}
                          </div>

                          <div className="mt-4 p-3.5 rounded-xl border border-zinc-100 bg-[#fafafa]">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                              Fatti
                            </span>
                            <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">
                              {chamber.proof}
                            </p>
                          </div>
                        </div>

                        {chamber.url && (
                          <div className="mt-6">
                            <a
                              href={chamber.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors w-full sm:w-auto justify-center shadow-xs"
                            >
                              <span>Visita {chamber.domain}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Right Sub-column */}
                      <div className="md:col-span-7 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-100 pt-5 md:pt-0 md:pl-6">
                        <div>
                          <p className="text-sm text-zinc-600 leading-relaxed">
                            {chamber.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
                          {chamber.stack.map((item, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-600"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Percorso */}
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 block">
                Da dove arrivo
              </span>
              <h2 className="text-lg font-normal tracking-tight text-zinc-900">
                Percorso
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-5">
                <ol className="md:col-span-8 border-l border-zinc-200 space-y-4">
                  {MILESTONES.map((m, idx) => (
                    <li key={idx} className="relative pl-5">
                      <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-zinc-950" />
                      <span className="text-[11px] font-mono text-zinc-500 block">{m.period}</span>
                      <p className="text-sm text-zinc-900">{m.title}</p>
                      {m.detail && <p className="text-xs text-zinc-500 mt-0.5">{m.detail}</p>}
                    </li>
                  ))}
                </ol>

                <div className="md:col-span-4 pt-5 md:pt-0 border-t md:border-t-0 md:border-l border-zinc-100 md:pl-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                    Fuori dal lavoro
                  </span>
                  <ul className="space-y-3">
                    {OFF_WORK.map((o) => (
                      <li key={o.period}>
                        <p className="text-sm text-zinc-900">{o.period}</p>
                        <p className="text-xs text-zinc-500">{o.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-zinc-200 py-6 bg-white mt-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span className="font-medium text-zinc-900">OLMOSPACE</span> | Personal Atelier of Olmo Marchi | © 2026
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-zinc-600">
            <a
              href="https://craved.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              craved.ch ↗
            </a>
            <a
              href="https://mirrorstudio.it"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              mirrorstudio.it ↗
            </a>
            <a
              href="https://neverhalt.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              neverhalt.app ↗
            </a>
            <a
              href="https://www.linkedin.com/in/olmomarchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/OMnyte"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
