import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CtaBand } from "@/components/site/CtaBand";

const title = "الخدمات — تيسير التجارة ودعم دخول الأسواق | EHED";
const description =
  "تيسير التجارة، دعم دخول الأسواق، توريد الموردين، التمثيل التجاري، التوسع الإقليمي، تنسيق الخدمات اللوجستية وتصدير البن والشاي من EHED.";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
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
        eyebrow="خدماتنا"
        title="سبع طرق تنقل بها EHED أعمالك عبر الحدود"
        intro="كل خدمة مصممة لتحقيق نتيجة واحدة: جعل التجارة والتوسع الإقليمي أبسط وأسرع وأكثر موثوقية."
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed">
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading
            eyebrow="كيف نعمل"
            title="مسار واضح من أول محادثة إلى بدء التشغيل"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "الاستكشاف", text: "نفهم أهدافك ومنتجاتك والأسواق المستهدفة." },
              { step: "02", title: "تقييم السوق", text: "نرسم خريطة الطلب والشركاء والتشريعات ومسارات الدخول الواقعية." },
              { step: "03", title: "التفعيل", text: "التوريد والتمثيل والتفاوض وتنسيق الخدمات اللوجستية." },
              { step: "04", title: "الدعم المستمر", text: "تنسيق وتقارير مستمرة مع نمو حضورك في السوق." },
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
