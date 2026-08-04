import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import aboutImg from "@/assets/about-meeting.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import { PageHero, Reveal, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { VALUES } from "@/lib/site-data";

const title = "About EHED — Regional Trade & Business Development in Rwanda";
const description =
  "Experience House (EHED) is a Rwanda-based trade and business development company with a flexible, partnership-driven model connecting East Africa with MENA markets.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Simplifying cross-border business across East Africa"
        intro="A regional trade and business development company built on partnerships, local knowledge and international standards."
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Company Introduction"
              title="Experience House (EHED)"
              intro="Experience House (EHED) is a Rwanda-based regional trade and business development company focused on connecting East African markets with partners across the Middle East and North Africa."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                The company provides trade facilitation, sourcing & procurement, market entry
                support, business representation, and logistics coordination services for businesses
                seeking expansion opportunities across East Africa. EHED also supports the export of
                premium East African coffee and tea products to Egypt, Saudi Arabia, and regional
                markets.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Through a flexible and partnership-driven business model, EHED aims to simplify
                cross-border business operations and create sustainable regional business
                opportunities.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img
              src={aboutImg}
              alt="EHED team meeting with international business partners"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20 lg:py-28">
        <div className="container-ehed grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-elevated h-full p-8">
              <p className="eyebrow">Vision</p>
              <p className="mt-4 text-xl leading-relaxed text-[var(--navy)]">
                To become a trusted regional gateway connecting East Africa with Middle East and
                North African business markets.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-elevated h-full p-8">
              <p className="eyebrow">Mission</p>
              <p className="mt-4 text-xl leading-relaxed text-[var(--navy)]">
                To provide efficient trade and business development solutions that support companies
                entering and expanding across East African markets.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading eyebrow="Core Values" title="What we stand for" align="center" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-5">
                  <Check className="h-5 w-5 shrink-0 text-[var(--teal)]" />
                  <span className="font-medium text-[var(--navy)]">{value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={logisticsImg}
              alt="Cargo containers and trucks at an East African terminal"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Business Model"
              title="Flexible, partnership-driven, regionally present"
              intro="Rather than a rigid structure, EHED operates as an extension of your team — combining local presence in Kigali with a network of partners across East Africa and MENA."
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {[
                  "Local presence in Rwanda with regional partner network",
                  "Project-based and retainer engagement models",
                  "Direct coordination across sourcing, logistics and representation",
                  "Transparent reporting to international partners",
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

      <CtaBand />
    </>
  );
}
