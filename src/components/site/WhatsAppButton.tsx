import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY.phoneHref.replace(/\D/g, "")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل مع EHED عبر واتساب"
      className="fixed bottom-5 end-5 z-50 inline-flex h-13 w-13 items-center justify-center rounded-full bg-[var(--teal)] p-3.5 text-[var(--navy-deep)] shadow-[var(--shadow-lift)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
