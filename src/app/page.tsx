'use client';

import { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Clock,
  Check,
  Copy,
  Mail,
  Compass,
  Layers,
  ChevronRight,
  Circle
} from 'lucide-react';

interface Chamber {
  index: string;
  id: string;
  name: string;
  domain?: string;
  url?: string;
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
    name: 'MIRROR STUDIO',
    domain: 'mirrorstudio.it',
    url: 'https://mirrorstudio.it',
    tagline: 'AI Production Engines & Structured Creative Systems',
    category: 'Creative System & Art Direction',
    status: 'Live & Operating',
    location: 'Milano [IT] · Remote',
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

export default function OlmospacePage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [time, setTime] = useState<string>('');

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

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(label);
    setTimeout(() => setCopiedEmail(null), 2200);
  };

  const displayedChambers =
    activeTab === 'all'
      ? CHAMBERS
      : CHAMBERS.filter((c) => c.id === activeTab);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white flex flex-col justify-between">
      {/* Top Header / Navigation (Swiss Minimal) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              OLMOSPACE
            </a>
            <span className="text-zinc-300">/</span>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
              Personal Atelier
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-zinc-700 font-medium">{time || '18:40:00'}</span>
              <span className="text-zinc-400 hidden xs:inline">CET (CH/IT)</span>
            </div>
            <span className="text-zinc-300 hidden sm:inline">|</span>
            <a
              href="#contact"
              className="hidden sm:inline text-zinc-900 font-medium hover:underline underline-offset-4"
            >
              Contatto →
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20 w-full flex-1">
        {/* Profile & Manifesto Header (CRAVED aesthetic: clean, stark, generous typography) */}
        <section className="mb-14 sm:mb-20 pb-12 sm:pb-16 border-b border-zinc-200">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-3">
              Olmo Marchi · Portfolio & Laboratorio
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950 leading-[1.15]">
              Materia, Codice & Sistemi. <br />
              <span className="font-normal text-zinc-600">
                L’archivio delle sperimentazioni.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed font-light">
              Ho vent’anni, studio fisica e costruisco progetti all’intersezione 
              tra design concettuale, intelligenza sintetica, finanza quantitativa 
              ed economie virtuali. 
              <strong className="font-medium text-zinc-900"> olmospace</strong> è la sintesi 
              del mio percorso: non progetti sconnessi, ma camere di uno stesso laboratorio.
            </p>

            {/* Quick action strip */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
              <a
                href="#chambers"
                className="px-4 py-2 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors inline-flex items-center gap-2"
              >
                <span>Esplora i Progetti</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://craved.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full border border-zinc-300 text-zinc-800 hover:border-zinc-900 transition-all inline-flex items-center gap-1.5"
              >
                <span>craved.ch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href="https://mirrorstudio.it"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full border border-zinc-300 text-zinc-800 hover:border-zinc-900 transition-all inline-flex items-center gap-1.5"
              >
                <span>mirrorstudio.it</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/olmomarchi/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full border border-zinc-300 text-zinc-800 hover:border-zinc-900 transition-all inline-flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </section>

        {/* Chamber Selector Tabs (Mobile Touch Friendly & Interactive) */}
        <section id="chambers" className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                Indice Laboratori
              </span>
              <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-zinc-900">
                Le 5 Camere di Ricerca
              </h2>
            </div>

            <span className="text-xs font-mono text-zinc-400">
              {displayedChambers.length} di {CHAMBERS.length} {displayedChambers.length === 1 ? 'progetto selezionato' : 'progetti attivi'}
            </span>
          </div>

          {/* Interactive Horizontal Switcher Bar (Mobile Scrollable) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-zinc-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                activeTab === 'all'
                  ? 'bg-zinc-900 text-white font-medium'
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
                  className={`px-3 py-2 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-zinc-900 text-white font-medium shadow-sm'
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
        </section>

        {/* Project Slates / Separate Chambers */}
        <section className="space-y-12 sm:space-y-16">
          {displayedChambers.map((chamber) => (
            <article
              key={chamber.id}
              className="p-6 sm:p-8 md:p-10 rounded-2xl border border-zinc-200/90 bg-[#fafafa] hover:border-zinc-400 transition-all duration-300"
            >
              {/* Slate Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-zinc-200">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-700 font-medium">
                    {chamber.index}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    {chamber.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                  <span>{chamber.location}</span>
                  <span>·</span>
                  <span className="px-2 py-0.5 rounded-full border border-zinc-300 text-zinc-700 bg-white">
                    {chamber.status}
                  </span>
                </div>
              </div>

              {/* Slate Body */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pt-6 sm:pt-8">
                {/* Left: Name, Thesis & External Link */}
                <div className="md:col-span-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-950">
                      {chamber.name}
                    </h3>
                    {chamber.domain && (
                      <span className="text-xs font-mono text-zinc-400 block mt-0.5">
                        {chamber.domain}
                      </span>
                    )}

                    <div className="mt-4 p-3.5 rounded-xl border border-zinc-200 bg-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                        Tesi & Filosofia
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-zinc-800 italic leading-snug">
                        {chamber.thesis}
                      </p>
                    </div>
                  </div>

                  {chamber.url && (
                    <div className="mt-6 pt-4">
                      <a
                        href={chamber.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors w-full sm:w-auto justify-center"
                      >
                        <span>Visita {chamber.domain}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right: Narrative, Pillars & Stack */}
                <div className="md:col-span-7 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-200 pt-6 md:pt-0 md:pl-8">
                  <div>
                    <p className="text-sm text-zinc-700 leading-relaxed font-light">
                      {chamber.description}
                    </p>

                    <div className="mt-5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                        Punti di Rilievo
                      </span>
                      <ul className="space-y-2 text-xs text-zinc-600">
                        {chamber.pillars.map((pillar, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-zinc-400 mt-0.5">—</span>
                            <span>{pillar}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-wrap gap-1.5">
                    {chamber.stack.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded border border-zinc-200 bg-white text-zinc-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Contact & Dialogue Section (Minimal Swiss Footer Block) */}
        <section id="contact" className="mt-20 pt-16 border-t border-zinc-200">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-2">
              Contatto Diretto
            </span>
            <h3 className="text-2xl font-light text-zinc-950 tracking-tight">
              Dialogo & Collaborazioni
            </h3>
            <p className="mt-3 text-sm text-zinc-600 font-light leading-relaxed">
              Il laboratorio è aperto a scambi intellettuali, progetti di ricerca, 
              consulenza e nuove iniziative congiunte.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:olmo@craved.ch"
                className="px-4 py-2.5 rounded-lg bg-zinc-900 text-white text-xs font-mono font-medium hover:bg-zinc-800 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>olmo@craved.ch</span>
              </a>

              <button
                onClick={() => copyToClipboard('olmo@craved.ch', 'craved')}
                className="px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-700 text-xs font-mono hover:border-zinc-900 transition-colors inline-flex items-center gap-1.5"
              >
                {copiedEmail === 'craved' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copiata</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copia Email</span>
                  </>
                )}
              </button>

              <button
                onClick={() => copyToClipboard('marchiolmo06@gmail.com', 'gmail')}
                className="px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-700 text-xs font-mono hover:border-zinc-900 transition-colors inline-flex items-center gap-1.5"
              >
                {copiedEmail === 'gmail' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copiata</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>marchiolmo06@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="border-t border-zinc-200 py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span className="font-medium text-zinc-900">OLMOSPACE</span> · Personal Atelier of Olmo Marchi · © 2026
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
