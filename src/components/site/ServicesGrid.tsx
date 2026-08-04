import {
  Handshake,
  Compass,
  PackageSearch,
  Building2,
  TrendingUp,
  Truck,
  Coffee,
} from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { Reveal } from "./Section";

const ICONS = [Handshake, Compass, PackageSearch, Building2, TrendingUp, Truck, Coffee];

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, i) => {
        const Icon = ICONS[i % ICONS.length]!;
        return (
          <Reveal key={service.slug} delay={i * 0.06}>
            <article className="card-elevated flex h-full flex-col p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--teal)]/12 text-[var(--teal)]">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 text-lg text-[var(--navy)]">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-5 border-t border-border pt-4 text-xs font-semibold tracking-wide text-[var(--teal)]">
                {service.benefit}
              </p>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
