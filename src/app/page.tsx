'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Clock,
  MapPin,
  ExternalLink,
  Layers,
  Circle,
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
  thesis: string;
  description: string;
  pillars: string[];
  stack: string[];
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
    status: 'In Sviluppo & Design',
    location: 'Modena [IT] | Ambizione CH',
    thesis: '«La precisione è risolta. L’esperienza no.»',
    description:
      'Progetto indipendente di orologeria concettuale nato da una frattura: un mondo che misura il tempo in modo ossessivo ma fatica a viverlo. Con standard e ambizione costruttiva svizzera, CRAVED esplora la percezione della durata attraverso forme scultoree, architettura fluida a clessidra e un superamento dell’orologeria tradizionale di status.',
    pillars: [
      'Studio e modellazione della cassa (Inaugural Series & Sculpted Tonneau)',
      'Architettura Flow: dare forma fisica e continua alla durata',
      'Fusione tra fisica classica, percezione del tempo e design industriale'
    ],
    stack: ['Conceptual Horology', 'Industrial Design', '3D Prototyping', 'Horological Architecture']
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
    tagline: 'AI Production Engines & Structured Creative Systems',
    category: 'Creative Systems & Art Direction',
    status: 'Attivo | In Produzione',
    location: 'Modena [IT] | Remote',
    thesis: '«Sistematizzare la produzione visiva senza compromessi sull’identità artistica.»',
    description:
      'Studio creativo basato a Modena dedicato alla progettazione di sistemi visivi e flussi di produzione basati su intelligenza artificiale. Aiutiamo brand e progetti a strutturare pipeline visive scalabili ed editoriali (fasi di ideazione, test di consistenza e produzione output), ottimizzando tempi e vincoli delle produzioni tradizionali.',
    pillars: [
      'Pipeline generative strutturate per visual editoriali ad alta definizione',
      'Direzione artistica coerente su cataloghi, lookbook e campagne',
      'Ottimizzazione dei flussi creativi digitali'
    ],
    stack: ['Generative AI', 'Art Direction', 'Visual Workflows', 'Brand Identity', 'Synthetic Media']
  },
  {
    index: '03',
    id: 'neverhalt',
    name: 'NEVERHALT',
    domain: 'neverhalt.app',
    url: 'https://neverhalt.app',
    bannerImage: '/neverhalt-banner.png',
    bannerAspect: 'aspect-[2.6/1]',
    bannerBg: 'bg-[#05080C] border-zinc-900',
    tagline: 'Your agents never sleep. So you can.',
    category: 'Cloud Runtime & AI Infrastructure',
    status: 'Ingegneria & Prototipazione',
    location: 'Cloudflare Edge & Dedicated Host',
    thesis: '«Your agents never sleep. So you can.»',
    description:
      'Piattaforma cloud specializzata nell’hosting e orchestrazione continua di agenti autonomi, bot Python 24/7 e server FastMCP. Risolve i limiti del serverless tradizionale integrando volumi persistenti per database locali (SQLite/Parquet), runtime Playwright e Chromium headless preconfigurati e protocollo prompt-to-deploy.',
    pillars: [
      'Control plane dual-mode (Docker orchestrator & micro-subprocesses)',
      'Supporto nativo a browser headless (Playwright/Chromium) e server FastMCP',
      'Persistenza automatica per database locali e daemon perenni'
    ],
    stack: ['Cloudflare D1 / Pages', 'FastAPI Control Plane', 'Docker Engine', 'FastMCP', 'Playwright', 'Python']
  },
  {
    index: '04',
    id: 'quant-lab',
    name: 'QUANT LAB',
    bannerImage: '/quant-banner.svg',
    bannerAspect: 'aspect-[3.2/1]',
    bannerBg: 'bg-[#090A0D] border-zinc-900',
    tagline: 'Systematic Trading & Market Microstructure',
    category: 'Finanza Quantitativa & Algoritmi',
    status: 'Ricerca Personale',
    location: 'Quantitative Research Unit',
    thesis: '«Rigore statistico per eliminare il bias discrezionale.»',
    description:
      'Spazio di studio e ricerca personale sulla modellazione quantitativa dei mercati finanziari. Focus sullo sviluppo di strategie sistematiche trend-following (come breakout di Donchian), analisi statistica della volatilità e backtesting rigoroso con parametri di rischio controllati.',
    pillars: [
      'Sviluppo e backtesting di strategie breakout su serie storiche ad alta risoluzione',
      'Analisi quantitativa dei drawdown e sizing controllato delle posizioni',
      'Scripting di automazione e modellazione dati in Python e MQL5'
    ],
    stack: ['Python', 'MQL5 / MetaTrader', 'Data Analysis', 'Time Series', 'Systematic Trading']
  },
  {
    index: '05',
    id: 'ai-lab',
    name: 'AI LAB & APPS',
    tagline: 'Autonomous Cognitive Agents & Custom Tooling',
    category: 'Sviluppo Software & Agenti AI',
    status: 'Sperimentazione Attiva',
    location: 'Software Lab',
    thesis: '«Software agile costruito su misura per risolvere problemi reali.»',
    description:
      'Laboratorio di sviluppo per esplorare l’integrazione pratica dell’intelligenza artificiale nei flussi quotidiani. Creazione di agenti autonomi mirati, implementazioni del Model Context Protocol (MCP) e interfacce web minimali costruite con Next.js e TypeScript.',
    pillars: [
      'Configurazione e testing di agenti autonomi con integrazione MCP',
      'Architetture web moderne, veloci e minimali (Next.js / Tailwind)',
      'Tooling interno per automatizzare workflow di ricerca e sviluppo'
    ],
    stack: ['Next.js / React', 'TypeScript', 'MCP Protocol', 'Agentic Workflows', 'Tailwind CSS']
  },
  {
    index: '06',
    id: 'roblox-ventures',
    name: 'ROBLOX VENTURES',
    tagline: 'Virtual Worlds & Gameplay Mechanics',
    category: 'Sviluppo Giochi & Ambienti 3D',
    status: 'Prototipazione',
    location: 'Interactive Dev',
    thesis: '«Meccaniche di gioco accessibili e sistemi di interazione immediati.»',
    description:
      'Progettazione e sperimentazione di titoli e meccaniche di gioco per la piattaforma Roblox. Focus sullo sviluppo client-server in Luau, level design 3D, sistemi di progressione e prototipazione rapida di esperienze multiplayer per testare engagement e dinamiche di gioco.',
    pillars: [
      'Scripting in Luau con architettura modulare client-server',
      'Prototipazione rapida di loop di gameplay e progressione utente',
      'Studio del feedback dei giocatori e ottimizzazione delle performance'
    ],
    stack: ['Luau Engine', 'Roblox Studio', '3D Level Design', 'Game Logic', 'Multiplayer Mechanics']
  }
];

export default function OlmospaceDashboard() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [time, setTime] = useState<string>('');

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
              <span className="text-zinc-800 font-medium">{time || '20:00:00'}</span>
              <span className="text-zinc-400 hidden xs:inline">| CET</span>
            </div>
          </div>
        </div>
      </header>

      {/* Expanded Widescreen Dashboard Body */}
      <main className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column | Profile & Dossier (Sticky on Desktop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
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
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block">
                  Fondatore | Ricercatore
                </span>
                <h1 className="text-2xl font-normal tracking-tight text-zinc-950">
                  Olmo Marchi
                </h1>
                <p className="text-xs text-zinc-500 font-mono">
                  Conceptual Design | Systems | Quantitative Research
                </p>
              </div>

              {/* Bio / Manifesto */}
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light mt-4">
                Classe 2006, frequento la facoltà di Fisica presso l’Università degli Studi di Modena e Reggio Emilia (UNIMORE). Sviluppo progetti all’intersezione tra materia (orologeria concettuale), intelligenza artificiale, finanza quantitativa ed ambienti virtuali.
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
                  <span>Location</span>
                  <span className="text-zinc-800 font-medium">Modena</span>
                </div>
              </div>

              {/* External Links */}
              <div className="mt-5 pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500">
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
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block">
                    Indice Ecosistema
                  </span>
                  <h2 className="text-lg font-normal tracking-tight text-zinc-900">
                    Le 6 Camere del Laboratorio
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
                          {currentChamber.index} / 06
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
                              className={`${currentChamber.id === 'craved' || currentChamber.id === 'neverhalt' || currentChamber.id === 'quant-lab' ? 'object-cover' : 'object-contain p-3 sm:p-4'} group-hover:scale-[1.015] transition-transform duration-300`}
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

                    {/* Thesis */}
                    <div className="p-4 rounded-xl border border-zinc-100 bg-[#fafafa] mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                        Tesi & Filosofia
                      </span>
                      <p className="text-sm font-medium text-zinc-800 italic leading-relaxed">
                        {currentChamber.thesis}
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
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                            Punti di Rilievo
                          </span>
                          <ul className="space-y-2 text-xs text-zinc-600">
                            {currentChamber.pillars.map((pillar, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-zinc-400 mt-0.5 font-bold">|</span>
                                <span>{pillar}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-zinc-100">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                            Stack & Metodologie
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
                      <span>Sfoglia Tutte le Camere</span>
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
                              className={`${chamber.id === 'craved' || chamber.id === 'neverhalt' || chamber.id === 'quant-lab' ? 'object-cover' : 'object-contain p-2.5'} group-hover:scale-[1.02] transition-transform duration-300`}
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

                      {/* Thesis callout */}
                      <p className="text-xs font-medium text-zinc-700 italic bg-[#fafafa] p-2.5 rounded-lg border border-zinc-100 mb-3 leading-snug">
                        {chamber.thesis}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-zinc-600 leading-relaxed font-light line-clamp-3 mb-4">
                        {chamber.description}
                      </p>
                    </div>

                    <div>
                      {/* Key Pillars */}
                      <div className="space-y-1 mb-4 pt-3 border-t border-zinc-100">
                        {chamber.pillars.slice(0, 2).map((pillar, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-zinc-600">
                            <span className="text-zinc-400 mt-0.5">|</span>
                            <span className="line-clamp-1">{pillar}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {chamber.stack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {chamber.stack.length > 4 && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded text-zinc-400">
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
                                  className={`${chamber.id === 'craved' || chamber.id === 'neverhalt' || chamber.id === 'quant-lab' ? 'object-cover' : 'object-contain p-2 sm:p-3'} group-hover:scale-[1.02] transition-transform duration-300`}
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
                            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                              Tesi & Filosofia
                            </span>
                            <p className="text-xs sm:text-sm font-medium text-zinc-800 italic leading-snug">
                              {chamber.thesis}
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
                          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                            {chamber.description}
                          </p>

                          <div className="mt-5">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                              Punti di Rilievo
                            </span>
                            <ul className="space-y-1.5 text-xs text-zinc-600">
                              {chamber.pillars.map((pillar, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-zinc-400 mt-0.5">|</span>
                                  <span>{pillar}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
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
          </section>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-zinc-200 py-6 bg-white mt-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span className="font-medium text-zinc-900">OLMOSPACE</span> | Personal Lab of Olmo Marchi | © 2026
          </div>

          <div className="flex items-center gap-5 text-zinc-600">
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
