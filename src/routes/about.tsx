import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import aboutImg from "@/assets/about-meeting.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import { PageHero, Reveal, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { useSiteData } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";

const title = "من نحن — التجارة الإقليمية وتطوير الأعمال في رواندا | EHED";
const description =
  "إكسبيريانس هاوس (EHED) شركة تجارة وتطوير أعمال مقرها رواندا، بنموذج مرن قائم على الشراكة يربط شرق أفريقيا بأسواق الشرق الأوسط وشمال أفريقيا.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  const { L } = useI18n();
  const { VALUES } = useSiteData();
  const workModel = [
    { ar: "حضور محلي في رواندا مع شبكة شركاء إقليمية", en: "Local presence in Rwanda with a regional partner network" },
    { ar: "نماذج تعاقد بالمشروع أو بعقود شهرية", en: "Project-based or monthly retainer engagement models" },
    { ar: "تنسيق مباشر للتوريد واللوجستيات والتمثيل التجاري", en: "Direct coordination of sourcing, logistics, and trade representation" },
    { ar: "تقارير شفافة للشركاء الدوليين", en: "Transparent reporting for international partners" },
  ];
  return (
    <>
      <PageHero
        eyebrow={L("من نحن", "About Us")}
        title={L("تبسيط الأعمال العابرة للحدود في شرق أفريقيا", "Simplifying Cross-Border Business in East Africa")}
        intro={L(
          "شركة تجارة وتطوير أعمال إقليمية قائمة على الشراكات والمعرفة المحلية والمعايير الدولية.",
          "A regional trade and business development company built on partnerships, local knowledge, and international standards."
        )}
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow={L("نبذة عن الشركة", "About the Company")}
              title={L("إكسبيريانس هاوس (EHED)", "Experience House (EHED)")}
              intro={L(
                "إكسبيريانس هاوس (EHED) شركة تجارة وتطوير أعمال إقليمية مقرها رواندا، تركز على ربط أسواق شرق أفريقيا بشركاء في الشرق الأوسط وشمال أفريقيا.",
                "Experience House (EHED) is a regional trade and business development company based in Rwanda, focused on connecting East African markets with partners in the Middle East and North Africa."
              )}
            />
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {L(
                  "تقدّم الشركة خدمات تيسير التجارة والتوريد والمشتريات ودعم دخول الأسواق والتمثيل التجاري وتنسيق الخدمات اللوجستية للشركات الباحثة عن فرص توسع في شرق أفريقيا. كما تدعم EHED تصدير منتجات البن والشاي الفاخرة من شرق أفريقيا إلى مصر والسعودية والأسواق الإقليمية.",
                  "The company provides trade facilitation, sourcing and procurement, market-entry support, trade representation, and logistics coordination services for companies seeking expansion opportunities in East Africa. EHED also supports the export of premium East African coffee and tea to Egypt, Saudi Arabia, and other regional markets."
                )}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {L(
                  "من خلال نموذج أعمال مرن قائم على الشراكة، تهدف EHED إلى تبسيط العمليات التجارية العابرة للحدود وخلق فرص أعمال إقليمية مستدامة.",
                  "Through a flexible, partnership-based business model, EHED aims to simplify cross-border trade operations and create sustainable regional business opportunities."
                )}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img
              src={aboutImg}
              alt={L("اجتماع فريق EHED مع شركاء أعمال دوليين", "EHED team meeting with international business partners")}
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
              <p className="eyebrow">{L("رؤيتنا", "Our Vision")}</p>
              <p className="mt-4 text-xl leading-relaxed text-[var(--navy)]">
                {L(
                  "أن نصبح البوابة الإقليمية الموثوقة التي تربط شرق أفريقيا بأسواق الشرق الأوسط وشمال أفريقيا.",
                  "To become the trusted regional gateway connecting East Africa with Middle East and North Africa markets."
                )}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-elevated h-full p-8">
              <p className="eyebrow">{L("رسالتنا", "Our Mission")}</p>
              <p className="mt-4 text-xl leading-relaxed text-[var(--navy)]">
                {L(
                  "تقديم حلول تجارية وتطويرية فعّالة تدعم الشركات في دخول أسواق شرق أفريقيا والتوسع فيها.",
                  "To deliver effective trade and development solutions that support companies entering and expanding in East African markets."
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading eyebrow={L("قيمنا الأساسية", "Our Core Values")} title={L("ما نؤمن به", "What We Believe")} align="center" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={i} delay={i * 0.05}>
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
              alt={L("حاويات وشاحنات شحن في محطة بشرق أفريقيا", "Shipping containers and trucks at an East African terminal")}
              width={1400}
              height={900}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={L("نموذج العمل", "Business Model")}
              title={L("مرن، قائم على الشراكة، وحاضر إقليمياً", "Flexible, Partnership-Driven, and Regionally Present")}
              intro={L(
                "بدلاً من هيكل جامد، تعمل EHED كامتداد لفريقك — بحضور محلي في كيغالي وشبكة شركاء عبر شرق أفريقيا والشرق الأوسط وشمال أفريقيا.",
                "Rather than a rigid structure, EHED operates as an extension of your team — with a local presence in Kigali and a partner network across East Africa, the Middle East, and North Africa."
              )}
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {workModel.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--navy)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal)]" />
                    {L(item.ar, item.en)}
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
