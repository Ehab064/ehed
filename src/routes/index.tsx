import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Globe2, Handshake, TrendingUp, Boxes, Users } from "lucide-react";
import heroImg from "@/assets/hero-kigali.jpg";
import aboutImg from "@/assets/about-meeting.jpg";
import coffeeImg from "@/assets/coffee-tea.jpg";
import { Reveal, SectionHeading } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { MarketsInteractive } from "@/components/site/MarketsInteractive";
import { CtaBand } from "@/components/site/CtaBand";
import { STATS, WHY_RWANDA, COMPANY } from "@/lib/site-data";

const title = "EHED — Your Regional Business Gateway in East Africa";
const description =
  "Experience House (EHED) connects East African markets with partners across the Middle East and North Africa through trade facilitation, sourcing, representation and export.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Experience House (EHED)",
          url: `https://${COMPANY.website}`,
          telephone: COMPANY.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ikaze House, Remera",
            addressLocality: "Kigali",
            addressCountry: "RW",
          },
        }),
      },
    ],
  }),
});

const STAT_ICONS = [Globe2, Handshake, TrendingUp, Boxes, Users];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[var(--navy-deep)]">
        <img
          src={heroImg}
          alt="Kigali skyline at dusk"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, oklch(0.19 0.04 252 / 0.96) 12%, oklch(0.19 0.04 252 / 0.62) 60%, oklch(0.19 0.04 252 / 0.35) 100%)",
          }}
        />
        <div className="container-ehed relative py-24 lg:py-36">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Regional Trade • Business Development • Market Expansion
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-4xl text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Your Regional Business Gateway{" "}
            <span className="text-[var(--teal)]">in East Africa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            Connecting East African markets with business partners across the Middle East and North
            Africa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-7 py-4 font-semibold text-[var(--navy-deep)] transition-transform hover:-translate-y-0.5"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:border-[var(--teal)] hover:text-[var(--teal)]"
            >
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/8 backdrop-blur sm:grid-cols-3 lg:grid-cols-5"
          >
            {STATS.concat([{ value: "1M+", label: "Tons Handled" }]).map((s, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length]!;
              return (
                <div key={s.label} className="flex items-center gap-3 px-5 py-6">
                  <Icon className="h-7 w-7 shrink-0 text-[var(--teal)]" strokeWidth={1.4} />
                  <div className="min-w-0">
                    <p className="text-2xl font-semibold text-white">{s.value}</p>
                    <p className="truncate text-xs text-white/60">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <div className="mt-12 flex justify-center">
            <ChevronDown className="h-6 w-6 animate-bounce text-white/40" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={aboutImg}
              alt="Business partners meeting in a Kigali boardroom"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About EHED"
              title="A Rwanda-based gateway between East Africa and MENA markets"
              intro="Experience House (EHED) is a regional trade and business development company focused on connecting East African markets with partners across the Middle East and North Africa."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                We provide trade facilitation, sourcing & procurement, market entry support, business
                representation and logistics coordination for companies seeking expansion across East
                Africa — and we support the export of premium East African coffee and tea to Egypt,
                Saudi Arabia and regional markets.
              </p>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--teal)] hover:gap-3 transition-all"
              >
                More about us <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[var(--sand)] py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading
            eyebrow="Our Services"
            title="Business solutions built for cross-border trade"
            intro="Practical, partnership-driven services that simplify operating across East African and Middle Eastern markets."
            align="center"
          />
          <div className="mt-14">
            <ServicesGrid limit={6} />
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--navy)]/15 px-7 py-3.5 font-semibold text-[var(--navy)] transition-colors hover:border-[var(--teal)] hover:text-[var(--teal)]"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARKETS */}
      <section className="py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading
            eyebrow="Markets We Connect"
            title="Seven markets. One coordinated trade corridor."
            intro="Select a market to explore how EHED operates across East Africa, North Africa and the Gulf."
          />
          <div className="mt-14">
            <MarketsInteractive />
          </div>
        </div>
      </section>

      {/* WHY RWANDA */}
      <section className="bg-[var(--sand)] py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading
            eyebrow="Why Rwanda?"
            title="A stable base for regional business"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY_RWANDA.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="card-elevated h-full p-7">
                  <span className="text-sm font-semibold text-[var(--teal)]">0{i + 1}</span>
                  <h3 className="mt-3 text-lg text-[var(--navy)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COFFEE & TEA */}
      <section className="py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Coffee & Tea Export"
              title="Premium East African origin, delivered to MENA"
              intro="Rwandan and East African coffee and tea sourced from trusted estates and cooperatives, prepared for export to Egypt, Saudi Arabia and regional markets."
            />
            <Reveal delay={0.1}>
              <Link
                to="/coffee-tea"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--teal)] hover:text-[var(--navy-deep)]"
              >
                Explore Coffee & Tea <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img
              src={coffeeImg}
              alt="Rwandan coffee cherries beside a tea plantation"
              width={1600}
              height={1100}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
