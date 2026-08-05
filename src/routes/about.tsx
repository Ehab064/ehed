import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import aboutImg from "@/assets/about-meeting.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import { PageHero, Reveal, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { VALUES } from "@/lib/site-data";

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
  return (
    <>
      <PageHero
        eyebrow="من نحن"
        title="تبسيط الأعمال العابرة للحدود في شرق أفريقيا"
        intro="شركة تجارة وتطوير أعمال إقليمية قائمة على الشراكات والمعرفة المحلية والمعايير الدولية."
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="نبذة عن الشركة"
              title="إكسبيريانس هاوس (EHED)"
              intro="إكسبيريانس هاوس (EHED) شركة تجارة وتطوير أعمال إقليمية مقرها رواندا، تركز على ربط أسواق شرق أفريقيا بشركاء في الشرق الأوسط وشمال أفريقيا."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                تقدّم الشركة خدمات تيسير التجارة والتوريد والمشتريات ودعم دخول الأسواق والتمثيل
                التجاري وتنسيق الخدمات اللوجستية للشركات الباحثة عن فرص توسع في شرق أفريقيا. كما تدعم
                EHED تصدير منتجات البن والشاي الفاخرة من شرق أفريقيا إلى مصر والسعودية والأسواق
                الإقليمية.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                من خلال نموذج أعمال مرن قائم على الشراكة، تهدف EHED إلى تبسيط العمليات التجارية
                العابرة للحدود وخلق فرص أعمال إقليمية مستدامة.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <img
              src={aboutImg}
              alt="اجتماع فريق EHED مع شركاء أعمال دوليين"
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
              <p className="eyebrow">رؤيتنا</p>
              <p className="mt-4 text-xl leading-relaxed text-[var(--navy)]">
                أن نصبح البوابة الإقليمية الموثوقة التي تربط شرق أفريقيا بأسواق الشرق الأوسط وشمال
                أفريقيا.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-elevated h-full p-8">
              <p className="eyebrow">رسالتنا</p>
              <p className="mt-4 text-xl leading-relaxed text-[var(--navy)]">
                تقديم حلول تجارية وتطويرية فعّالة تدعم الشركات في دخول أسواق شرق أفريقيا والتوسع
                فيها.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading eyebrow="قيمنا الأساسية" title="ما نؤمن به" align="center" />
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
              alt="حاويات وشاحنات شحن في محطة بشرق أفريقيا"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="نموذج العمل"
              title="مرن، قائم على الشراكة، وحاضر إقليمياً"
              intro="بدلاً من هيكل جامد، تعمل EHED كامتداد لفريقك — بحضور محلي في كيغالي وشبكة شركاء عبر شرق أفريقيا والشرق الأوسط وشمال أفريقيا."
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {[
                  "حضور محلي في رواندا مع شبكة شركاء إقليمية",
                  "نماذج تعاقد بالمشروع أو بعقود شهرية",
                  "تنسيق مباشر للتوريد واللوجستيات والتمثيل التجاري",
                  "تقارير شفافة للشركاء الدوليين",
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
