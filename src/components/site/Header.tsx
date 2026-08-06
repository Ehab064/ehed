import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowLeft, ArrowRight } from "lucide-react";
import logo from "@/assets/ehed-logo.png";
import { useSiteData } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "@/components/site/LanguageToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const { NAV } = useSiteData();
  const { L, lang } = useI18n();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--navy-deep)]/95 backdrop-blur">
      <div className="container-ehed grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt={L("إكسبيريانس هاوس (EHED) — بوابتك التجارية الإقليمية", "Experience House (EHED) — Your Regional Business Gateway")}
            className="h-10 w-auto shrink-0 lg:h-12"
            width={470}
            height={250}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-white/75 transition-colors hover:text-[var(--teal-soft)] [&.active]:text-[var(--teal)]"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <LanguageToggle />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-5 py-2.5 text-sm font-semibold text-[var(--navy-deep)] transition-transform hover:-translate-y-0.5"
          >
            {L("تواصل معنا", "Contact us")} <Arrow className="h-4 w-4" />
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label={open ? L("إغلاق القائمة", "Close menu") : L("فتح القائمة", "Open menu")}
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-md p-2 text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-[var(--navy-deep)] lg:hidden">
          <div className="container-ehed flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-medium text-white/80 [&.active]:text-[var(--teal)]"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
