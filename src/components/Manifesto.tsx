import { Sparkles, Terminal, Compass, Layers } from 'lucide-react';

export default function Manifesto() {
  const pillars = [
    {
      num: '01',
      title: 'Materia & Tempo',
      desc: 'Con CRAVED esploro il valore dell’oggetto fisico e la filosofia del tempo vissuto. La lentezza come forma suprema di lusso e rigore.',
      tag: 'Swiss Horology'
    },
    {
      num: '02',
      title: 'Sistemi Visivi & AI',
      desc: 'Con MIRROR STUDIO trasformo l’AI in motore sistematico di produzione, unendo visione artistica ed efficienza scalabile per i brand.',
      tag: 'Synthetic Production'
    },
    {
      num: '03',
      title: 'Modellazione Quantitativa',
      desc: 'Nel QUANT LAB rimuovo l’emotività: modelli statistici, backtest estesi e gestione asimmetrica del rischio sui mercati finanziari.',
      tag: 'Systematic Finance'
    },
    {
      num: '04',
      title: 'Agenti & Nuove Frontiere',
      desc: 'Attraverso l’AI LAB e le ROBLOX VENTURES sperimento con software autonomo, economie virtuali e interfacce interattive di nuova generazione.',
      tag: 'Emergent Tech'
    }
  ];

  return (
    <section id="manifesto" className="py-20 md:py-28 border-b border-white/[0.06] bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
            Il Manifesto del Laboratorio
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Non una frammentazione. <br />
            <span className="text-zinc-400">Un ecosistema convergente.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Spesso il mondo impone di scegliere una sola etichetta. 
            <strong className="text-zinc-200 font-medium"> olmospace</strong> nasce come manifesto contrario: 
            un laboratorio di esplorazione dove la precisione di un calibro orologiero svizzero dialoga 
            con una funzione di probabilità quantitativa, e dove la direzione artistica convive con il codice sorgente.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-zinc-400">
                  {pillar.num}
                </span>
                <h3 className="text-lg font-medium text-white mt-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2.5">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  {pillar.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
