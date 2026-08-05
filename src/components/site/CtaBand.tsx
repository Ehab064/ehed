import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "./Section";

export function CtaBand() {
  return (
    <section className="surface-navy relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -start-20 bottom-0 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-teal)" }}
      />
      <div className="container-ehed relative grid gap-8 py-16 lg:grid-cols-[1.4fr_auto] lg:items-center lg:py-20">
        <Reveal>
          <p className="eyebrow">لنبنِ معاً</p>
          <h2 className="mt-3 max-w-2xl text-3xl leading-tight text-white sm:text-4xl">
            هل أنت مستعد لدخول أسواق شرق أفريقيا أو التوسع فيها؟
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            تحدّث مع فريقنا في كيغالي حول تيسير التجارة والتوريد والتمثيل التجاري وفرص التصدير.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-7 py-4 font-semibold text-[var(--navy-deep)] transition-transform hover:-translate-y-0.5"
          >
            تواصل معنا <ArrowLeft className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
