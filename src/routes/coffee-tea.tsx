import { createFileRoute } from "@tanstack/react-router";
import { Check, Leaf, Coffee, Ship } from "lucide-react";
import coffeeImg from "@/assets/coffee-tea.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import { PageHero, Reveal, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";

const title = "تصدير البن والشاي — منشأ شرق أفريقي فاخر | EHED";
const description =
  "تدعم EHED تصدير البن والشاي الفاخر من رواندا وشرق أفريقيا إلى مصر والسعودية والأسواق الإقليمية، من التوريد وحتى الشحن.";

export const Route = createFileRoute("/coffee-tea")({
  component: CoffeeTea,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
      { property: "og:url", content: "/coffee-tea" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/coffee-tea" }],
  }),
});

const PRODUCTS = [
  {
    icon: Coffee,
    name: "بن أرابيكا",
    text: "أرابيكا من مرتفعات رواندا وشرق أفريقيا — حبوب خضراء مغسولة بالكامل، مصنّفة بالحجم ومقيّمة بالتذوّق.",
  },
  {
    icon: Leaf,
    name: "الشاي الأسود والأخضر",
    text: "شاي من مزارع وتعاونيات مرتفعات شرق أفريقيا، متوفر بدرجات سائبة وبأشكال معبّأة.",
  },
  {
    icon: Ship,
    name: "إجراءات التصدير",
    text: "المستندات وشهادات الجودة والتعبئة وتنسيق الشحن إلى مصر والسعودية وما بعدها.",
  },
];

function CoffeeTea() {
  return (
    <>
      <PageHero
        eyebrow="البن والشاي"
        title="بن وشاي فاخر من شرق أفريقيا جاهز للتصدير"
        intro="من المزارع والتعاونيات في المرتفعات إلى المشترين في مصر والسعودية ومنطقة الشرق الأوسط وشمال أفريقيا."
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={coffeeImg}
              alt="ثمار البن الرواندي الناضجة ومزرعة شاي عند الشروق"
              width={1600}
              height={1100}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="المنشأ"
              title="من مزارع وتعاونيات موثوقة"
              intro="تنتج مرتفعات شرق أفريقيا وتربتها البركانية ومناخها بعضاً من أميز أنواع البن والشاي في العالم. تعمل EHED مباشرة مع المنتجين لضمان جودة ثابتة وسلسلة توريد قابلة للتتبع."
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {[
                  "توريد قابل للتتبع من منتجين موثّقين",
                  "مراقبة الجودة والفحص قبل الشحن",
                  "كميات مرنة للمشترين الجدد والمتكررين",
                  "إدارة كاملة لمستندات التصدير",
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
          <SectionHeading eyebrow="تشكيلة المنتجات" title="ماذا نصدّر" align="center" />
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
              eyebrow="عملية التصدير"
              title="من بوابة المزرعة إلى ميناء الوصول"
              intro="عملية واحدة منسّقة تغطي التوريد والجودة والمستندات والشحن."
            />
            <Reveal delay={0.1}>
              <ol className="mt-6 space-y-5">
                {[
                  ["التوريد", "اختيار المنتجين وأخذ العينات والتفاوض على الأسعار."],
                  ["الجودة", "التصنيف والتذوّق والفحص قبل الشحن."],
                  ["المستندات", "شهادات المنشأ والشهادات الصحية النباتية وتصاريح التصدير."],
                  ["الشحن", "التعبئة وحجز الشحن وتنسيق التسليم."],
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
              alt="حاويات تصدير جاهزة للشحن"
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
