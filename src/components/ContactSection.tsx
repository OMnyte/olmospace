'use client';

import { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Globe, Code2 } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'marchiolmo06@gmail.com'; // Standard contact email format or fallback

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Subtle ambient light */}
          <div className="ambient-glow -top-24 -right-24 w-80 h-80 bg-emerald-500/10 blur-[130px]" />

          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-3">
              Dialogue & Collaborations
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Entra in contatto con il laboratorio.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Che si tratti di un confronto su orologeria concettuale, sistemi creativi AI, 
              modelli quantitativi o esplorazioni congiunte, il canale è aperto.
            </p>

            {/* Email quick action */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Invia un messaggio</span>
              </a>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/15 bg-white/[0.02] text-zinc-300 text-xs sm:text-sm hover:bg-white/[0.08] hover:text-white transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-mono">Email copiata!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span className="font-mono">{email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Channels */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
              <a
                href="https://github.com/OMnyte"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub (@OMnyte)</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href="https://craved.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>CRAVED (craved.ch)</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href="https://mirrorstudio.it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-violet-400" />
                <span>MIRROR STUDIO (mirrorstudio.it)</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
