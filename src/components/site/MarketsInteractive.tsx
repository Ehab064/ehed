import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { MARKETS, type Market } from "@/lib/site-data";

export function MarketsInteractive() {
  const [activeCode, setActiveCode] = useState<string>(MARKETS[0]!.code);
  const active = MARKETS.find((m) => m.code === activeCode) as Market;
  const hub = MARKETS.find((m) => m.hub) as Market;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="relative overflow-hidden rounded-[var(--radius-3xl)] border border-white/10 bg-[var(--navy-deep)] p-5 sm:p-8">
        <svg viewBox="0 0 100 100" className="h-auto w-full" role="img" aria-label="Map of EHED connected markets">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={hub.x} cy={hub.y} r="34" fill="url(#glow)" />

          {MARKETS.filter((m) => !m.hub).map((m) => {
            const isActive = m.code === activeCode;
            return (
              <path
                key={`line-${m.code}`}
                d={`M ${hub.x} ${hub.y} Q ${(hub.x + m.x) / 2 + 6} ${(hub.y + m.y) / 2 - 10} ${m.x} ${m.y}`}
                fill="none"
                stroke="var(--teal)"
                strokeWidth={isActive ? 0.7 : 0.35}
                strokeOpacity={isActive ? 0.95 : 0.35}
                strokeDasharray="2 2"
              />
            );
          })}

          {MARKETS.map((m) => {
            const isActive = m.code === activeCode;
            return (
              <g
                key={m.code}
                onClick={() => setActiveCode(m.code)}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={m.name}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveCode(m.code);
                }}
              >
                <circle cx={m.x} cy={m.y} r={isActive ? 4.5 : 3} fill="var(--teal)" fillOpacity={isActive ? 0.25 : 0.12} />
                <circle cx={m.x} cy={m.y} r={m.hub ? 1.7 : 1.2} fill="var(--teal)" />
                <text
                  x={m.x}
                  y={m.y - 5.5}
                  textAnchor="middle"
                  fontSize="3"
                  fill={isActive ? "#ffffff" : "rgba(255,255,255,0.6)"}
                  className="select-none"
                >
                  {m.name.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-6 flex flex-wrap gap-2">
          {MARKETS.map((m) => (
            <button
              key={m.code}
              type="button"
              onClick={() => setActiveCode(m.code)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                m.code === activeCode
                  ? "border-[var(--teal)] bg-[var(--teal)] text-[var(--navy-deep)]"
                  : "border-white/15 text-white/70 hover:border-[var(--teal)]/60 hover:text-white"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.code}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="card-elevated p-8"
        >
          <p className="eyebrow">{active.role}</p>
          <h3 className="mt-2 text-2xl text-[var(--navy)]">{active.name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.summary}</p>
          <ul className="mt-6 space-y-3">
            {active.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-[var(--navy)]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal)]" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[var(--teal)]">
            Trade corridor active <ArrowUpRight className="h-4 w-4" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
