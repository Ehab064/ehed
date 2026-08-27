import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-kigali.jpg";
import aboutImg from "@/assets/about-meeting.jpg";
import coffeeImg from "@/assets/coffee-tea.jpg";
import { Reveal, SectionHeading } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { MarketsInteractive } from "@/components/site/MarketsInteractive";
import { CtaBand } from "@/components/site/CtaBand";
import { COMPANY } from "@/lib/site-data";
import { useSiteData } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";

const title = "EHED — بوابتك التجارية الإقليمية في شرق أفريقيا";
const description =
  "تربط إكسبيريانس هاوس (EHED) أسواق شرق أفريقيا بشركاء في الشرق الأوسط وشمال أفريقيا عبر تيسير التجارة والتوريد والتمثيل التجاري والتصدير.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
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
          name: "إكسبيريانس هاوس (EHED)",
          url: `https://${COMPANY.website}`,
          telephone: COMPANY.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: "إيكازي هاوس، ريميرا",
            addressLocality: "كيغالي",
            addressCountry: "RW",
          },
        }),
      },
    ],
  }),
});


function Home() {
  const { L, lang } = useI18n();
  const { WHY_RWANDA } = useSiteData();
  const ArrowIcon = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[var(--navy-deep)]">
        <img
          src={heroImg}
          alt={L("أفق مدينة كيغالي عند الغروب", "Kigali skyline at sunset")}
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(260deg, oklch(0.19 0.04 252 / 0.96) 12%, oklch(0.19 0.04 252 / 0.62) 60%, oklch(0.19 0.04 252 / 0.35) 100%)",
          }}
        />
        <div className="container-ehed relative py-24 lg:py-36">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            {L("التجارة الإقليمية • تطوير الأعمال • التوسع في الأسواق", "Regional Trade • Business Development • Market Expansion")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-4xl text-4xl leading-[1.25] text-white sm:text-6xl lg:text-7xl"
          >
            {L("بوابتك التجارية الإقليمية", "Your regional trade gateway")}{" "}
            <span className="text-[var(--teal)]">{L("في شرق أفريقيا", "in East Africa")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            {L(
              "نربط أسواق شرق أفريقيا بشركاء الأعمال في الشرق الأوسط وشمال أفريقيا.",
              "Connecting East African markets with business partners across the Middle East and North Africa."
            )}
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
              {L("تواصل معنا", "Contact us")} <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition-colors hover:border-[var(--teal)] hover:text-[var(--teal)]"
            >
              {L("استكشف خدماتنا", "Explore our services")} <ArrowIcon className="h-4 w-4" />
            </Link>
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
              alt={L("اجتماع شركاء أعمال في مقر بكيغالي", "Business partners meeting at a Kigali office")}
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={L("عن EHED", "About EHED")}
              title={L(
                "بوابة مقرها رواندا بين شرق أفريقيا وأسواق الشرق الأوسط وشمال أفريقيا",
                "A Rwanda-based gateway between East Africa and MENA markets"
              )}
              intro={L(
                "إكسبيريانس هاوس (EHED) شركة تجارة وتطوير أعمال إقليمية تركز على ربط أسواق شرق أفريقيا بشركاء في الشرق الأوسط وشمال أفريقيا.",
                "Experience House (EHED) is a regional trade and business development company focused on connecting East African markets with partners across the Middle East and North Africa."
              )}
            />
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {L(
                  "نقدّم خدمات تيسير التجارة والتوريد والمشتريات ودعم دخول الأسواق والتمثيل التجاري وتنسيق الخدمات اللوجستية للشركات الساعية للتوسع في شرق أفريقيا — كما ندعم تصدير البن والشاي الفاخر من شرق أفريقيا إلى مصر والسعودية والأسواق الإقليمية.",
                  "We provide trade facilitation, sourcing and procurement, market-entry support, commercial representation, and logistics coordination for companies expanding into East Africa — while also supporting the export of premium East African coffee and tea to Egypt, Saudi Arabia, and regional markets."
                )}
              </p>
              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--teal)] hover:gap-3 transition-all"
              >
                {L("المزيد عنا", "More about us")} <ArrowIcon className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[var(--sand)] py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading
            eyebrow={L("خدماتنا", "Our services")}
            title={L("حلول أعمال مصمّمة للتجارة العابرة للحدود", "Business solutions built for cross-border trade")}
            intro={L(
              "خدمات عملية قائمة على الشراكة تبسّط العمل عبر أسواق شرق أفريقيا والشرق الأوسط.",
              "Practical, partnership-driven services that simplify doing business across East African and Middle Eastern markets."
            )}
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
                {L("عرض كل الخدمات", "View all services")} <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARKETS */}
      <section className="py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading
            eyebrow={L("الأسواق التي نربطها", "Markets we connect")}
            title={L("سبعة أسواق. ممر تجاري واحد منسّق.", "Seven markets. One coordinated trade corridor.")}
            intro={L(
              "اختر سوقاً لاستكشاف كيفية عمل EHED عبر شرق أفريقيا وشمال أفريقيا والخليج.",
              "Select a market to explore how EHED operates across East Africa, North Africa, and the Gulf."
            )}
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
            eyebrow={L("لماذا رواندا؟", "Why Rwanda?")}
            title={L("قاعدة مستقرة للأعمال الإقليمية", "A stable base for regional business")}
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
              eyebrow={L("تصدير البن والشاي", "Coffee & tea export")}
              title={L(
                "منشأ شرق أفريقي فاخر يصل إلى الشرق الأوسط وشمال أفريقيا",
                "Premium East African origin, delivered to the Middle East and North Africa"
              )}
              intro={L(
                "بن وشاي من رواندا وشرق أفريقيا يتم توريده من مزارع وتعاونيات موثوقة وتجهيزه للتصدير إلى مصر والسعودية والأسواق الإقليمية.",
                "Coffee and tea from Rwanda and East Africa sourced from trusted farms and cooperatives, and prepared for export to Egypt, Saudi Arabia, and regional markets."
              )}
            />
            <Reveal delay={0.1}>
              <Link
                to="/coffee-tea"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--teal)] hover:text-[var(--navy-deep)]"
              >
                {L("استكشف البن والشاي", "Explore coffee & tea")} <ArrowIcon className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img
              src={coffeeImg}
              alt={L("حبوب البن الرواندي بجوار مزرعة شاي", "Rwandan coffee beans beside a tea plantation")}
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
