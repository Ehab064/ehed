import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Globe, Mail, Linkedin } from "lucide-react";
import logo from "@/assets/ehed-logo-white.png.asset.json";
import { useSiteData } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { L } = useI18n();
  const { COMPANY, NAV, SERVICES } = useSiteData();

  return (
    <footer className="surface-navy">
      <div className="container-ehed grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo.url}
            alt={L("إكسبيريانس هاوس (EHED)", "Experience House (EHED)")}
            className="h-12 w-auto"
            width={470}
            height={250}
            loading="lazy"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            {L(
              "شركة تجارة وتطوير أعمال إقليمية مقرها رواندا، تربط أسواق شرق أفريقيا بشركاء في الشرق الأوسط وشمال أفريقيا.",
              "A Rwanda-based regional trade and business development company connecting East African markets with partners across the Middle East and North Africa."
            )}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white">{L("تصفّح", "Navigate")}</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-white/65 transition-colors hover:text-[var(--teal-soft)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white">{L("الخدمات", "Services")}</h3>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug} className="text-sm text-white/65">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white">{L("تواصل معنا", "Contact us")}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal)]" />
              <span>{COMPANY.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal)]" />
              <span className="flex flex-col gap-1">
                <a href={`tel:${COMPANY.phoneHref}`} dir="ltr" className="hover:text-[var(--teal-soft)]">
                  {COMPANY.phone}
                </a>
                <a href={`tel:${COMPANY.phoneSaHref}`} dir="ltr" className="hover:text-[var(--teal-soft)]">
                  {COMPANY.phoneSa}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal)]" />
              <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--teal-soft)]">
                LinkedIn
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal)]" />
              <a href={`mailto:${COMPANY.email}`} dir="ltr" className="hover:text-[var(--teal-soft)]">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-[var(--teal)]" />
              <a
                href={`https://${COMPANY.website}`}
                target="_blank"
                rel="noreferrer"
                dir="ltr"
                className="hover:text-[var(--teal-soft)]"
              >
                {COMPANY.website}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-ehed flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {L("إكسبيريانس هاوس (EHED). جميع الحقوق محفوظة.", "Experience House (EHED). All rights reserved.")}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/coffee-tea" className="transition-colors hover:text-[var(--teal-soft)]">
              {L("البن والشاي", "Coffee & Tea")}
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-[var(--teal-soft)]">
              {L("سياسة الخصوصية", "Privacy Policy")}
            </Link>
            <span>{L("التجارة الإقليمية • تطوير الأعمال", "Regional Trade • Business Development")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
