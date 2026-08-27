import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { useI18n } from "@/lib/i18n";

const title = "Services — Market Entry, Representation & Trade Facilitation | EHED";
const description =
  "Regional business development, market entry support, business representation, strategic partnerships, trade facilitation, sourcing and procurement by EHED.";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: "https://ehed.lovable.app/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ehed.lovable.app/services" }],
  }),
});

function Services() {
  const { L } = useI18n();
  const steps = [
    { step: "01", title: L("الاستكشاف", "Discovery"), text: L("نفهم أهدافك ومنتجاتك والأسواق المستهدفة.", "We understand your goals, products, and target markets.") },
    { step: "02", title: L("تقييم السوق", "Market Assessment"), text: L("نرسم خريطة الطلب والشركاء والتشريعات ومسارات الدخول الواقعية.", "We map demand, partners, regulations, and realistic entry paths.") },
    { step: "03", title: L("التفعيل", "Activation"), text: L("التوريد والتمثيل والتفاوض وتنسيق الخدمات اللوجستية.", "Sourcing, representation, negotiation, and logistics coordination.") },
    { step: "04", title: L("الدعم المستمر", "Ongoing Support"), text: L("تنسيق وتقارير مستمرة مع نمو حضورك في السوق.", "Continuous coordination and reporting as your market presence grows.") },
  ];
  return (
    <>
      <PageHero
        eyebrow={L("خدماتنا", "Our Services")}
        title={L("سبع طرق تنقل بها EHED أعمالك عبر الحدود", "Seven Ways EHED Moves Your Business Across Borders")}
        intro={L(
          "كل خدمة مصممة لتحقيق نتيجة واحدة: جعل التجارة والتوسع الإقليمي أبسط وأسرع وأكثر موثوقية.",
          "Every service is designed to achieve one outcome: making regional trade and expansion simpler, faster, and more reliable."
        )}
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed">
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading
            eyebrow={L("كيف نعمل", "How We Work")}
            title={L("مسار واضح من أول محادثة إلى بدء التشغيل", "A Clear Path From First Conversation to Launch")}
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
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
