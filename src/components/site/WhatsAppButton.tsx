import { MessageCircle } from "lucide-react";
import { useSiteData } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";

export function WhatsAppButton() {
  const { COMPANY } = useSiteData();
  const { L } = useI18n();

  return (
    <a
      href={`https://wa.me/${COMPANY.phoneHref.replace(/\D/g, "")}`}
      target="_blank"
      rel="noreferrer"
      aria-label={L("تواصل مع EHED عبر واتساب", "Contact EHED via WhatsApp")}
      className="fixed bottom-5 end-5 z-50 inline-flex h-13 w-13 items-center justify-center rounded-full bg-[var(--teal)] p-3.5 text-[var(--navy-deep)] shadow-[var(--shadow-lift)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
