import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./Section";
import { useI18n } from "@/lib/i18n";

export function CtaBand() {
  const { L, lang } = useI18n();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  return (
    <section className="surface-navy relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -start-20 bottom-0 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-teal)" }}
      />
      <div className="container-ehed relative grid gap-8 py-16 lg:grid-cols-[1.4fr_auto] lg:items-center lg:py-20">
        <Reveal>
          <p className="eyebrow">{L("لنبنِ معاً", "Let's Build Together")}</p>
          <h2 className="mt-3 max-w-2xl text-3xl leading-tight text-white sm:text-4xl">
            {L("هل أنت مستعد لدخول أسواق شرق أفريقيا أو التوسع فيها؟", "Ready to enter or expand in East African markets?")}
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            {L(
              "تحدّث مع فريقنا في كيغالي حول تيسير التجارة والتوريد والتمثيل التجاري وفرص التصدير.",
              "Talk to our Kigali team about trade facilitation, sourcing, trade representation, and export opportunities."
            )}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-7 py-4 font-semibold text-[var(--navy-deep)] transition-transform hover:-translate-y-0.5"
          >
            {L("تواصل معنا", "Contact Us")} <Arrow className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
