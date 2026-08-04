import { createFileRoute } from "@tanstack/react-router";
import { Check, Leaf, Coffee, Ship } from "lucide-react";
import coffeeImg from "@/assets/coffee-tea.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import { PageHero, Reveal, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Coffee & Tea Export — Premium East African Origin | EHED";
const description =
  "EHED supports the export of premium Rwandan and East African coffee and tea to Egypt, Saudi Arabia and regional markets, from sourcing to shipment.";

export const Route = createFileRoute("/coffee-tea")({
  component: CoffeeTea,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/coffee-tea" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/coffee-tea" }],
  }),
});

const PRODUCTS = [
  {
    icon: Coffee,
    name: "Arabica Coffee",
    text: "High-altitude Rwandan and East African Arabica — fully washed green beans, screen-graded and cupping-scored.",
  },
  {
    icon: Leaf,
    name: "Black & Green Tea",
    text: "Estate and cooperative teas from East African highlands, available in bulk grades and packaged formats.",
  },
  {
    icon: Ship,
    name: "Export Handling",
    text: "Documentation, quality certificates, packaging and shipment coordination to Egypt, Saudi Arabia and beyond.",
  },
];

function CoffeeTea() {
  return (
    <>
      <PageHero
        eyebrow="Coffee & Tea"
        title="Premium East African coffee and tea, export-ready"
        intro="From high-altitude estates and cooperatives to buyers across Egypt, Saudi Arabia and the wider MENA region."
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={coffeeImg}
              alt="Ripe Rwandan coffee cherries and a tea plantation at sunrise"
              width={1600}
              height={1100}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Origin"
              title="Sourced from trusted estates and cooperatives"
              intro="East Africa's altitude, volcanic soils and climate produce some of the world's most distinctive coffee and tea. EHED works directly with producers to secure consistent quality and traceable supply."
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {[
                  "Traceable sourcing from verified producers",
                  "Quality control and pre-shipment inspection",
                  "Flexible volumes for first-time and repeat buyers",
                  "Export documentation handled end to end",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--navy)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading eyebrow="Product Range" title="What we export" align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <article className="card-elevated h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--teal)]/12 text-[var(--teal)]">
                    <p.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-lg text-[var(--navy)]">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Export Process"
              title="From farm gate to destination port"
              intro="A single coordinated process covering sourcing, quality, documentation and shipment."
            />
            <Reveal delay={0.1}>
              <ol className="mt-6 space-y-5">
                {[
                  ["Sourcing", "Producer selection, sampling and price negotiation."],
                  ["Quality", "Grading, cupping and pre-shipment inspection."],
                  ["Documentation", "Certificates of origin, phytosanitary and export permits."],
                  ["Shipment", "Packaging, freight booking and delivery coordination."],
                ].map(([step, text], i) => (
                  <li key={step} className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--navy)]">{step}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img
              src={logisticsImg}
              alt="Export containers ready for shipment"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
