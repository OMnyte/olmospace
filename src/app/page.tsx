'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Clock,
  Check,
  Copy,
  Mail,
  MapPin,
  ExternalLink,
  Layers,
  Circle
} from 'lucide-react';

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
    bannerImage: '/craved-banner.png',
    bannerAspect: 'aspect-[3.6/1]',
    bannerBg: 'bg-black border-zinc-900',
    tagline: 'Time doesn’t tick. It flows.',
    category: 'Maison di Orologeria Concettuale',
    status: 'Live & Operating',
    location: 'Svizzera [CH]',
    thesis: '«La precisione è risolta. L’esperienza no.»',
    description:
      'Maison indipendente di orologeria concettuale fondata in Svizzera. CRAVED nasce da una frattura: un mondo che misura il tempo in modo ossessivo ma fatica a viverlo. Esplorazione del tempo vissuto attraverso forme scultoree, architettura a clessidra e rottura con l’orologeria convenzionale di status.',
    pillars: [
      'Inaugural Series & Sculpted Tonneau in sviluppo',
      'Architettura Flow: espressione fisica e tangibile della durata',
      'Fusione tra fisica classica, relatività e filosofia aristotelica del tempo'
    ],
    stack: ['Conceptual Horology', 'Industrial Design', 'Swiss Engineering', 'Temporal Sculpture']
  },
  {
    index: '02',
    id: 'mirror-studio',
    name: 'MIRR/OR STUDIO',
    domain: 'mirrorstudio.it',
    url: 'https://mirrorstudio.it',
    bannerImage: '/mirror-logo.png',
    bannerAspect: 'aspect-[3.6/1]',
    bannerBg: 'bg-white border-zinc-200',
    tagline: 'AI Production Engines & Structured Creative Systems',
    category: 'Creative System & Art Direction',
    status: 'Live & Operating',
    location: 'Milano [IT] | Remote',
    thesis: '«Scalare l’identità visiva senza compromessi sull’anima artistica.»',
    description:
      'Studio di sistemi visivi e motori di produzione sintetica per brand ad alto impatto. Supera i limiti dei set tradizionali trasformando l’AI in un motore operativo integrato (Reflect, Foundation, Operate), garantendo coerenza estetica e moltiplicazione dei formati visivi.',
    pillars: [
      'Pipeline generative proprietarie per campagne e lookbook ad alta definizione',
      'Sistemi di direzione artistica strutturati e ripetibili',
      'Abbattimento dei colli di bottiglia di produzione fisica'
    ],
    stack: ['Generative AI', 'Art Direction', 'Visual Architecture', 'Brand Positioning', 'Synthetic Media']
  },
  {
    index: '03',
    id: 'quant-lab',
    name: 'QUANT LAB',
    tagline: 'Systematic Trading & Market Microstructure',
    category: 'Finanza Quantitativa & Algoritmi',
    status: 'Active Research',
    location: 'Quantitative Research Unit',
    thesis: '«Rigore matematico per eliminare il rumore discrezionale.»',
    description:
      'Laboratorio di ricerca sistematica e modellazione quantitativa sui mercati finanziari. Studio computazionale della microstruttura, pattern a candele e dinamiche frattali di liquidità. Backtesting rigoroso, gestione asimmetrica del rischio e test di robustezza Monte Carlo.',
    pillars: [
      'Strategie Donchian Breakout e sweep parametrici di volatilità su indici globali',
      'Infrastruttura automatizzata per l’analisi di time series ad alta risoluzione',
      'Modellazione statistica dell’edge e contenimento del drawdown'
    ],
    stack: ['Python', 'MQL5 / MetaTrader', 'Time Series Modeling', 'Stochastic Systems', 'Risk Architecture']
  },
  {
    index: '04',
    id: 'ai-lab',
    name: 'AI LAB & APPS',
    tagline: 'Autonomous Cognitive Agents & Custom Tooling',
    category: 'Intelligenza Applicata & Software',
    status: 'Incubating Lab',
    location: 'Software Atelier',
    thesis: '«Il software come estensione cognitiva e compagno di pensiero.»',
    description:
      'Spazio di prototipazione per agenti autonomi multi-step, interfacce generative e micro-applicazioni software verticali. Integrazioni avanzate con protocollo MCP (Model Context Protocol) e sperimentazioni ai confini delle capacità dei modelli fondazionali.',
    pillars: [
      'Agenti autonomi per workflow complessi di ricerca e codifica',
      'Sviluppo di interfacce ultra-reattive con Next.js e TypeScript',
      'Tooling su misura per connettere modelli AI a dati e sistemi locali'
    ],
    stack: ['Autonomous Agents', 'MCP Protocol', 'Next.js / TypeScript', 'Cognitive Architectures']
  },
  {
    index: '05',
    id: 'roblox-ventures',
    name: 'ROBLOX VENTURES',
    tagline: 'Virtual Worlds & Metaverse Gameplay Economies',
    category: 'Mondi Virtuali & Spatial Gaming',
    status: 'Prototyping Lab',
    location: 'Interactive Environments',
    thesis: '«Economie digitali e loop sistemici capaci di catturare l’attenzione.»',
    description:
      'Esplorazione e sviluppo di esperienze interattive multiplayer, ambienti 3D ed economie virtuali su scala globale. Prototipazione di titoli proprietari (Mutagen Labs, Sled Mail, Tycoon series) con focus su retention psicologica e architetture client-server in Luau.',
    pillars: [
      'Game design sistemico e loop di gameplay orientati alla retention',
      'Architettura di rete e scripting ottimizzato su motore Luau',
      'Marketing OS dedicato e telemetria di gioco integrata'
    ],
    stack: ['Luau Engine', 'Game Design', 'Virtual Economies', 'Spatial Systems']
  }
];

export default function OlmospaceDashboard() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [copied, setCopied] = useState<boolean>(false);
  const [time, setTime] = useState<string>('');
  const [activeFavicon, setActiveFavicon] = useState<'pipe' | 'slash' | 'ocut'>('pipe');
  const email = 'OMnyte@users.noreply.github.com';

  const switchFavicon = (type: 'pipe' | 'slash' | 'ocut') => {
    setActiveFavicon(type);
    const hrefMap = {
      pipe: '/favicon-pipe.svg',
      slash: '/favicon-slash.svg',
      ocut: '/favicon-ocut.svg',
    };
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = hrefMap[type];
  };

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

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

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

            <a
              href={`mailto:${email}`}
              className="text-zinc-900 font-medium hover:underline underline-offset-4 hidden sm:inline"
            >
              {email}
            </a>
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
                Ho vent’anni, studio fisica e costruisco progetti all’intersezione 
                tra materia (orologeria concettuale svizzera), intelligenza sintetica, 
                finanza quantitativa ed economie virtuali.
              </p>

              {/* Location */}
              <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Location</span>
                <span className="text-zinc-800 font-medium">Modena</span>
              </div>

              {/* Email Contact Actions */}
              <div className="mt-6 pt-5 border-t border-zinc-100 space-y-2">
                <a
                  href={`mailto:${email}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-zinc-950 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Invia Mail</span>
                </a>

                <button
                  onClick={handleCopy}
                  className="w-full py-2 px-3 rounded-lg border border-zinc-200 text-zinc-700 text-xs font-mono hover:border-zinc-900 transition-colors flex items-center justify-center gap-2 bg-zinc-50"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Email Copiata</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{email}</span>
                    </>
                  )}
                </button>
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
            {/* Filter Bar */}
            <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block">
                  Indice Ecosistema
                </span>
                <h2 className="text-lg font-normal tracking-tight text-zinc-900">
                  Le 5 Camere del Laboratorio
                </h2>
              </div>

              {/* Tabs Switcher */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                    activeTab === 'all'
                      ? 'bg-zinc-950 text-white font-medium'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                  }`}
                >
                  [ TUTTI ]
                </button>

                {CHAMBERS.map((chamber) => {
                  const isActive = activeTab === chamber.id;
                  return (
                    <button
                      key={chamber.id}
                      onClick={() => setActiveTab(chamber.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-zinc-950 text-white font-medium shadow-sm'
                          : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                      }`}
                    >
                      <span className={isActive ? 'text-zinc-400' : 'text-zinc-400'}>
                        {chamber.index}
                      </span>
                      <span>{chamber.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chambers Slates (Expansive & Distinct) */}
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
                              className="object-contain p-3 group-hover:scale-[1.02] transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2 text-zinc-400 group-hover:text-zinc-900 transition-colors bg-white/80 backdrop-blur-xs rounded p-1 shadow-xs">
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </div>
                          </a>
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
          </section>
        </div>

        {/* Favicon Testing Lab · Pure Black #000000 & Pure White #FFFFFF */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                Favicon Testing Lab | Pure #000000 &amp; #FFFFFF
              </span>
              <p className="text-xs text-zinc-600 font-mono">
                Clicca su una variante per provarla in tempo reale nella scheda del tuo browser:
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => switchFavicon('pipe')}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg border text-xs font-mono transition-all ${
                  activeFavicon === 'pipe'
                    ? 'border-zinc-950 bg-zinc-950 text-white font-semibold shadow-xs'
                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-400'
                }`}
              >
                <img src="/favicon-pipe.svg" alt="O|M" className="w-4 h-4 rounded-xs" />
                <span>O|M</span>
              </button>

              <button
                onClick={() => switchFavicon('slash')}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg border text-xs font-mono transition-all ${
                  activeFavicon === 'slash'
                    ? 'border-zinc-950 bg-zinc-950 text-white font-semibold shadow-xs'
                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-400'
                }`}
              >
                <img src="/favicon-slash.svg" alt="O/M" className="w-4 h-4 rounded-xs" />
                <span>O/M</span>
              </button>

              <button
                onClick={() => switchFavicon('ocut')}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg border text-xs font-mono transition-all ${
                  activeFavicon === 'ocut'
                    ? 'border-zinc-950 bg-zinc-950 text-white font-semibold shadow-xs'
                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-400'
                }`}
              >
                <img src="/favicon-ocut.svg" alt="O/" className="w-4 h-4 rounded-xs" />
                <span>O/</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-zinc-200 py-6 bg-white mt-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span className="font-medium text-zinc-900">OLMOSPACE</span> | Personal Atelier of Olmo Marchi | © 2026
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
