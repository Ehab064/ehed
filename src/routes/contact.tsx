import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Globe, Mail, Clock } from "lucide-react";
import { PageHero, Reveal, SectionHeading } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { COMPANY, useSiteData } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";

const title = "تواصل مع EHED — كيغالي، رواندا";
const description =
  "تواصل مع إكسبيريانس هاوس (EHED) في إيكازي هاوس، ريميرا، كيغالي، رواندا لطلبات تيسير التجارة والتوريد والتمثيل والتصدير.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: COMPANY.name,
          telephone: COMPANY.phone,
          url: `https://${COMPANY.website}`,
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

function Contact() {
  const { L } = useI18n();
  const { COMPANY } = useSiteData();

  return (
    <>
      <PageHero
        eyebrow={L("تواصل معنا", "Contact Us")}
        title={L("لنتحدث عن خططك التجارية في المنطقة", "Let's talk about your regional business plans")}
        intro={L(
          "يستجيب فريقنا في كيغالي لطلبات الشركاء والمشترين عبر شرق أفريقيا وشمال أفريقيا والخليج.",
          "Our Kigali team responds to partner and buyer inquiries across East Africa, North Africa and the Gulf.",
        )}
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={L("بيانات التواصل", "Contact details")} title={COMPANY.name} />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-6">
                <Item icon={MapPin} label={L("المكتب", "Office")}>
                  {COMPANY.address}
                </Item>
                <Item icon={Phone} label={L("الهاتف", "Phone")}>
                  <a href={`tel:${COMPANY.phoneHref}`} dir="ltr" className="inline-block hover:text-[var(--teal)]">
                    {COMPANY.phone}
                  </a>
                </Item>
                <Item icon={Mail} label={L("البريد الإلكتروني", "Email")}>
                  <a href={`mailto:${COMPANY.email}`} dir="ltr" className="inline-block hover:text-[var(--teal)]">
                    {COMPANY.email}
                  </a>
                </Item>
                <Item icon={Globe} label={L("الموقع الإلكتروني", "Website")}>
                  <a
                    href={`https://${COMPANY.website}`}
                    target="_blank"
                    rel="noreferrer"
                    dir="ltr"
                    className="inline-block hover:text-[var(--teal)]"
                  >
                    {COMPANY.website}
                  </a>
                </Item>
                <Item icon={Clock} label={L("ساعات العمل", "Working hours")}>
                  {L("الاثنين – الجمعة، 08:00 – 18:00 (بتوقيت وسط أفريقيا)", "Monday – Friday, 08:00 – 18:00 (CAT)")}
                </Item>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-ehed">
          <div className="overflow-hidden rounded-[var(--radius-3xl)] border border-border shadow-[var(--shadow-card)]">
            <iframe
              title={L("موقع مكتب EHED في ريميرا، كيغالي", "EHED office location in Remera, Kigali")}
              src="https://www.openstreetmap.org/export/embed.html?bbox=30.10%2C-1.97%2C30.15%2C-1.94&layer=mapnik"
              className="h-[380px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Item({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--teal)]/12 text-[var(--teal)]">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-[var(--navy)]">{children}</p>
      </div>
    </li>
  );
}
