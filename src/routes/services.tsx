import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CtaBand } from "@/components/site/CtaBand";

const title = "Services — Trade Facilitation & Market Entry | EHED";
const description =
  "Trade facilitation, market entry support, supplier sourcing, business representation, regional expansion, logistics coordination and coffee & tea export from EHED.";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Seven ways EHED moves your business across borders"
        intro="Each service is designed around a single outcome: making regional trade and expansion simpler, faster and more reliable."
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed">
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading
            eyebrow="How We Work"
            title="A clear path from first conversation to operations"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discovery", text: "We understand your objectives, products and target markets." },
              { step: "02", title: "Market Assessment", text: "We map demand, partners, regulation and realistic entry routes." },
              { step: "03", title: "Activation", text: "Sourcing, representation, negotiation and logistics coordination." },
              { step: "04", title: "Ongoing Support", text: "Continuous coordination and reporting as your presence grows." },
            ].map((s) => (
              <div key={s.step} className="card-elevated p-7">
                <span className="text-sm font-semibold text-[var(--teal)]">{s.step}</span>
                <h3 className="mt-3 text-lg text-[var(--navy)]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
