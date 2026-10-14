import { LAB_METRICS } from '@/data/projects';
import { Activity, ShieldCheck, Cpu, Layers } from 'lucide-react';

export default function LabStats() {
  return (
    <div id="telemetry" className="border-b border-white/[0.06] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {LAB_METRICS.map((metric, i) => (
            <div key={i} className="flex flex-col border-l border-white/10 pl-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                {metric.label}
              </span>
              <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mt-1">
                {metric.value}
              </span>
              <span className="text-xs text-zinc-400 mt-1 font-mono">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
