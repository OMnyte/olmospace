import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12 bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400 font-mono">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="font-semibold text-zinc-300">olmospace</span>
          <span className="hidden sm:inline text-zinc-400">•</span>
          <span>Personal Atelier & Research Chambers</span>
          <span className="hidden sm:inline text-zinc-400">•</span>
          <span>© 2026 Olmo Marchi</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/OMnyte"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://craved.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            craved.ch
          </a>
          <a
            href="https://mirrorstudio.it"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            mirrorstudio.it
          </a>
          <a
            href="#"
            className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            title="Torna in cima"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
