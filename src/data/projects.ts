export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'maison' | 'studio' | 'quant' | 'ai' | 'ventures';
  categoryLabel: string;
  status: string;
  badgeColor: string;
  glowColor: string;
  externalUrl?: string;
  isExternal: boolean;
  year: string;
  location: string;
  shortDesc: string;
  philosophy: string;
  highlights: string[];
  stack: string[];
  extendedNotes: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'craved',
    title: 'CRAVED',
    subtitle: 'Independent Conceptual Horology',
    category: 'maison',
    categoryLabel: '01 / MAISON & DESIGN',
    status: 'In Sviluppo & Design',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/20',
    glowColor: 'from-amber-500/10 via-transparent to-transparent',
    externalUrl: 'https://craved.ch',
    isExternal: true,
    year: '2024 — Present',
    location: 'Modena [IT] | Ambizione CH',
    shortDesc: 'Progetto di orologeria concettuale indipendente con standard e ambizione costruttiva svizzera. Esplorazione del tempo vissuto attraverso estetica meccanica pura e architettura scultorea.',
    philosophy: '«Time doesn’t tick. It flows.» Il tempo non come scansione meccanica convenzionale, ma come continuum di esperienza e percezione materica.',
    highlights: [
      'Progettazione e direzione concettuale indipendente',
      'Filosofia di manifattura orologiera svizzera contemporanea',
      'Esplorazione di forme, texture e architetture temporali non convenzionali'
    ],
    stack: ['Conceptual Horology', 'Industrial Design', '3D Prototyping', 'Philosophy of Time'],
    extendedNotes: 'CRAVED è il pilastro dedicato alla materia e alla lentezza: contrappone all’accelerazione digitale un oggetto fisico che interroga la nostra relazione fondamentale con il tempo.'
  },
  {
    id: 'mirror-studio',
    title: 'MIRR/OR STUDIO',
    subtitle: 'Creative System Studio & AI Production Engine',
    category: 'studio',
    categoryLabel: '02 / CREATIVE STUDIO',
    status: 'Attivo | In Produzione',
    badgeColor: 'border-violet-500/40 text-violet-300 bg-violet-950/20',
    glowColor: 'from-violet-500/10 via-transparent to-transparent',
    externalUrl: 'https://mirrorstudio.it',
    isExternal: true,
    year: '2024 — Present',
    location: 'Modena [IT] & Remote',
    shortDesc: 'Studio creativo basato a Modena: direzione artistica e sistemi di produzione visiva generativi per brand ad alto impatto.',
    philosophy: 'Superare i pacchetti una-tantum attraverso sistemi visivi generativi e continui, capaci di scalare identità complesse senza compromessi sull’anima artistica.',
    highlights: [
      'Framework operativi a livelli (Reflect, Foundation, Operate)',
      'Engine di sintesi visiva per abbattere colli di bottiglia di shooting tradizionali',
      'Coerenza stilistica e preservazione rigorosa della brand identity'
    ],
    stack: ['Generative AI Pipelines', 'Art Direction', 'Visual Systems', 'Brand Strategy', 'Synthetic Media'],
    extendedNotes: 'Mirror Studio (mirrostudio.it) trasforma l’AI da mero strumento di rendering a vero motore operativo di scala per direzioni artistiche e maison contemporanee.'
  },
  {
    id: 'quant-lab',
    title: 'QUANT LAB',
    subtitle: 'Quantitative Research & Systematic Finance',
    category: 'quant',
    categoryLabel: '03 / QUANTITATIVE FINANCE',
    status: 'Active Research',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/20',
    glowColor: 'from-emerald-500/10 via-transparent to-transparent',
    isExternal: false,
    year: '2025 — Present',
    location: 'AI LAB / Quantitative Unit',
    shortDesc: 'Laboratorio sistematico di ricerca quantitativa: modellazione stocastica, microstruttura dei mercati finanziari e algoritmi di breakout/volatilità.',
    philosophy: 'Eliminare il rumore discrezionale. Estrarre segnali matematici robusti e ripetibili attraverso backtest rigorosi, analisi frattale e gestione asimmetrica del rischio.',
    highlights: [
      'Strategie Donchian Breakout, algoritmi su volatilità e sweep di parametri su indici (NAS100, ecc.)',
      'Analisi computazionale dei pattern a candele e dinamiche frattali di liquidità',
      'Infrastruttura di simulazione e telemetria automatizzata su dati storici ad alta risoluzione'
    ],
    stack: ['Quantitative Research', 'MQL5 / Python', 'Time Series Modeling', 'Risk Management', 'Algorithmic Execution'],
    extendedNotes: 'Il laboratorio quantitativo è una palestra logica e scientifica: test di robustezza Monte Carlo, gestione del drawdown e sviluppo di edge statistici sui mercati globali.'
  },
  {
    id: 'ai-lab',
    title: 'AI LAB & EXPERIMENTS',
    subtitle: 'Applied Intelligence, Autonomous Agents & Custom Tooling',
    category: 'ai',
    categoryLabel: '04 / ARTIFICIAL INTELLIGENCE',
    status: 'Experimental Lab',
    badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/20',
    glowColor: 'from-cyan-500/10 via-transparent to-transparent',
    isExternal: false,
    year: '2024 — In Progress',
    location: 'Digital Atelier',
    shortDesc: 'Spazio di sperimentazione continua su modelli fondazionali, agenti cognitivi autonomi, interfacce generative e micro-applicazioni ad hoc.',
    philosophy: 'L’intelligenza artificiale come partner di pensiero ed estensione dell’ingegno umano: prototipare velocemente, testare ai confini ed esplorare nuove forme di software.',
    highlights: [
      'Sviluppo di agenti autonomi multi-step e pipeline di reasoning contestuale',
      'Integrazioni MCP (Model Context Protocol) e automazione di task ad alta complessità',
      'Laboratorio per micro-app, utility di sintesi ed esplorazioni di prompt engineering avanzato'
    ],
    stack: ['LLMs & Cognitive Architectures', 'Next.js & TypeScript', 'Autonomous Agents', 'MCP Framework', 'Vector Embeddings'],
    extendedNotes: 'L’AI LAB è l’incubatore trasversale che alimenta e velocizza tutti gli altri rami di olmospace: dall’analisi quantitativa alla produzione creativa.'
  },
  {
    id: 'roblox-ventures',
    title: 'ROBLOX VENTURES',
    subtitle: 'Virtual Worlds, Metaverse Mechanics & Social Gaming',
    category: 'ventures',
    categoryLabel: '05 / VIRTUAL WORLDS',
    status: 'World Building',
    badgeColor: 'border-orange-500/40 text-orange-300 bg-orange-950/20',
    glowColor: 'from-orange-500/10 via-transparent to-transparent',
    isExternal: false,
    year: '2025 — In Progress',
    location: 'Metaverse Ecosystems',
    shortDesc: 'Esplorazione e sviluppo di mondi virtuali interattivi, economie digitali e meccaniche di gioco multiplayer su larga scala.',
    philosophy: 'Costruire esperienze immersive capaci di catturare l’attenzione attraverso loop di gameplay psicologicamente appaganti ed economie virtuali sostenibili.',
    highlights: [
      'Prototipazione di titoli proprietari (Mutagen Labs, Sled Mail, Tycoon series)',
      'Game design sistemico, retention loop e architetture client-server in Luau',
      'Marketing OS dedicato, telemetria di gioco e testing continuo della community'
    ],
    stack: ['Luau / Roblox Engine', 'Virtual Economies', 'Spatial Systems', 'Game Design', 'Growth & Analytics'],
    extendedNotes: 'Un laboratorio sulle nuove generazioni digitali e sulla convergenza tra gaming, identità virtuale e micro-transazioni di nuova generazione.'
  }
];

export const LAB_METRICS = [
  { label: 'Laboratori Attivi', value: '5', detail: 'Chamber di ricerca' },
  { label: 'Progetti Live', value: '2', detail: 'craved.ch & mirrorstudio.it' },
  { label: 'Campi d’Indagine', value: '3+', detail: 'Materia, Codice, Finanza' },
  { label: 'Stato Operativo', value: 'ONLINE', detail: 'Sperimentazione aperta' }
];
