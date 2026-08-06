import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggleLang } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      className={`inline-flex items-center gap-2 rounded-full border border-white/25 px-3.5 py-2 text-sm font-semibold text-white/85 transition-colors hover:border-[var(--teal)] hover:text-[var(--teal)] ${className}`}
    >
      <Languages className="h-4 w-4" />
      <span>{lang === "ar" ? "EN" : "ع"}</span>
    </button>
  );
}
