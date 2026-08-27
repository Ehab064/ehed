import { createFileRoute } from "@tanstack/react-router";
import { Check, Leaf, Coffee, Ship } from "lucide-react";
import coffeeImg from "@/assets/coffee-tea.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import { PageHero, Reveal, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { useI18n } from "@/lib/i18n";

const title = "Coffee & Tea Export — Premium East African Origin | EHED";
const description =
  "EHED supports the export of premium coffee and tea from Rwanda and East Africa to Egypt, Saudi Arabia and regional markets.";

export const Route = createFileRoute("/coffee-tea")({
  component: CoffeeTea,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: "https://ehed.lovable.app/coffee-tea" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "https://ehed.lovable.app/coffee-tea" }],
  }),
});

function CoffeeTea() {
  const { L } = useI18n();

  const PRODUCTS = [
    {
      icon: Coffee,
      name: L("بن أرابيكا", "Arabica coffee"),
      text: L(
        "أرابيكا من مرتفعات رواندا وشرق أفريقيا — حبوب خضراء مغسولة بالكامل، مصنّفة بالحجم ومقيّمة بالتذوّق.",
        "Arabica from the highlands of Rwanda and East Africa — fully washed green beans, screen-sized and cup-tested for quality.",
      ),
    },
    {
      icon: Leaf,
      name: L("الشاي الأسود والأخضر", "Black & green tea"),
      text: L(
        "شاي من مزارع وتعاونيات مرتفعات شرق أفريقيا، متوفر بدرجات سائبة وبأشكال معبّأة.",
        "Tea from East African highland estates and cooperatives, available in bulk grades and packaged formats.",
      ),
    },
    {
      icon: Ship,
      name: L("إجراءات التصدير", "Export procedures"),
      text: L(
        "المستندات وشهادات الجودة والتعبئة وتنسيق الشحن إلى مصر والسعودية وما بعدها.",
        "Documentation, quality certification, packing and shipping coordination to Egypt, Saudi Arabia and beyond.",
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={L("البن والشاي", "Coffee & Tea")}
        title={L("بن وشاي فاخر من شرق أفريقيا جاهز للتصدير", "Premium East African coffee and tea, export-ready")}
        intro={L(
          "من المزارع والتعاونيات في المرتفعات إلى المشترين في مصر والسعودية ومنطقة الشرق الأوسط وشمال أفريقيا.",
          "From highland farms and cooperatives to buyers in Egypt, Saudi Arabia and the wider MENA region.",
        )}
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={coffeeImg}
              alt={L("ثمار البن الرواندي الناضجة ومزرعة شاي عند الشروق", "Ripe Rwandan coffee cherries and a tea plantation at sunrise")}
              width={1600}
              height={1100}
              loading="lazy"
              className="w-full rounded-[var(--radius-3xl)] shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={L("المنشأ", "Origin")}
              title={L("من مزارع وتعاونيات موثوقة", "From trusted farms and cooperatives")}
              intro={L(
                "تنتج مرتفعات شرق أفريقيا وتربتها البركانية ومناخها بعضاً من أميز أنواع البن والشاي في العالم. تعمل EHED مباشرة مع المنتجين لضمان جودة ثابتة وسلسلة توريد قابلة للتتبع.",
                "East Africa's highlands, volcanic soil and climate produce some of the world's finest coffee and tea. EHED works directly with producers to ensure consistent quality and a traceable supply chain.",
              )}
            />
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3">
                {[
                  L("توريد قابل للتتبع من منتجين موثّقين", "Traceable sourcing from vetted producers"),
                  L("مراقبة الجودة والفحص قبل الشحن", "Quality control and pre-shipment inspection"),
                  L("كميات مرنة للمشترين الجدد والمتكررين", "Flexible volumes for new and repeat buyers"),
                  L("إدارة كاملة لمستندات التصدير", "Full management of export documentation"),
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
          <SectionHeading eyebrow={L("تشكيلة المنتجات", "Product range")} title={L("ماذا نصدّر", "What we export")} align="center" />
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
              eyebrow={L("عملية التصدير", "Export process")}
              title={L("من بوابة المزرعة إلى ميناء الوصول", "From the farm gate to the destination port")}
              intro={L(
                "عملية واحدة منسّقة تغطي التوريد والجودة والمستندات والشحن.",
                "One coordinated process covering sourcing, quality, documentation and shipping.",
              )}
            />
            <Reveal delay={0.1}>
              <ol className="mt-6 space-y-5">
                {[
                  [L("التوريد", "Sourcing"), L("اختيار المنتجين وأخذ العينات والتفاوض على الأسعار.", "Selecting producers, sampling and price negotiation.")],
                  [L("الجودة", "Quality"), L("التصنيف والتذوّق والفحص قبل الشحن.", "Grading, cupping and pre-shipment inspection.")],
                  [L("المستندات", "Documentation"), L("شهادات المنشأ والشهادات الصحية النباتية وتصاريح التصدير.", "Certificates of origin, phytosanitary certificates and export permits.")],
                  [L("الشحن", "Shipping"), L("التعبئة وحجز الشحن وتنسيق التسليم.", "Packing, freight booking and delivery coordination.")],
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
              alt={L("حاويات تصدير جاهزة للشحن", "Export containers ready for shipping")}
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
