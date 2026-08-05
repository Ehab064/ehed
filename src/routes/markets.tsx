import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, SectionHeading } from "@/components/site/Section";
import { MarketsInteractive } from "@/components/site/MarketsInteractive";
import { CtaBand } from "@/components/site/CtaBand";
import { MARKETS } from "@/lib/site-data";

const title = "الأسواق — شرق أفريقيا ومصر والسعودية | EHED";
const description =
  "تربط EHED رواندا وأوغندا وتنزانيا وكينيا والكونغو الديمقراطية بمصر والسعودية عبر ممر تجاري إقليمي منسّق.";

export const Route = createFileRoute("/markets")({
  component: Markets,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
      { property: "og:url", content: "/markets" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/markets" }],
  }),
});

function Markets() {
  return (
    <>
      <PageHero
        eyebrow="الأسواق التي نربطها"
        title="ممر واحد من شرق أفريقيا إلى الخليج"
        intro="استكشف الأسواق السبعة التي تعمل فيها EHED وتوردّ منها وتمثّل فيها شركاءها الدوليين."
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed">
          <MarketsInteractive />
        </div>
      </section>

      <section className="bg-[var(--sand)] py-20 lg:py-28">
        <div className="container-ehed">
          <SectionHeading eyebrow="دول التركيز" title="أين نعمل" align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETS.map((m, i) => (
              <Reveal key={m.code} delay={i * 0.05}>
                <article className="card-elevated h-full p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg text-[var(--navy)]">{m.name}</h3>
                    <span className="shrink-0 rounded-full bg-[var(--teal)]/12 px-3 py-1 text-xs font-semibold text-[var(--teal)]">
                      {m.role}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
