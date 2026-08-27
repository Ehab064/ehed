import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const { L, lang } = useI18n();

  return (
    <form
      className="card-elevated grid gap-5 p-7 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        const form = e.currentTarget;
        setTimeout(() => {
          setSending(false);
          form.reset();
          toast.success(L("شكراً لك — تم استلام طلبك بنجاح.", "Thank you — your request has been received."), {
            description: L(
              "سيتواصل معك فريقنا في كيغالي في أقرب وقت.",
              "Our Kigali team will be in touch with you shortly.",
            ),
          });
        }, 600);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={L("الاسم الكامل", "Full name")} name="name" placeholder={L("اسمك", "Your name")} />
        <Field label={L("الشركة", "Company")} name="company" placeholder={L("اسم الشركة", "Company name")} />
        <Field label={L("المسمى الوظيفي", "Job title")} name="jobTitle" placeholder={L("مثال: مدير التطوير", "e.g. Business Development Manager")} required={false} />
        <Field label={L("الدولة", "Country")} name="country" placeholder={L("الدولة", "Country")} />
        <Field label={L("البريد الإلكتروني", "Email")} name="email" type="email" placeholder="you@company.com" />
        <Field label={L("رقم الهاتف", "Phone number")} name="phone" type="tel" placeholder="+250 ..." required={false} />
      </div>


      <label className="grid gap-2 text-sm font-medium text-[var(--navy)]">
        {L("مجال الاهتمام", "Area of interest")}
        <select
          name="interest"
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-[var(--teal)]"
        >
          <option>{L("تطوير الأعمال الإقليمي", "Regional business development")}</option>
          <option>{L("دعم دخول الأسواق", "Market entry support")}</option>
          <option>{L("التمثيل التجاري", "Business representation")}</option>
          <option>{L("الشراكات الاستراتيجية", "Strategic partnerships")}</option>
          <option>{L("تيسير التجارة", "Trade facilitation")}</option>
          <option>{L("التوريد والمشتريات", "Sourcing & procurement")}</option>
          <option>{L("الحلول الصناعية والتقنية", "Industrial & technology solutions")}</option>
          <option>{L("أخرى", "Other")}</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-[var(--navy)]">
        {L("الرسالة", "Message")}
        <textarea
          name="message"
          required
          rows={5}
          placeholder={L("أخبرنا عن احتياجات عملك...", "Tell us about your business needs...")}
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-[var(--teal)]"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--teal)]"
        />
        <span>
          {L(
            "أوافق على أن تستخدم EHED البيانات المُرسلة للرد على استفساري.",
            "I agree that EHED may use the information submitted to respond to my inquiry.",
          )}
        </span>
      </label>


      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--teal)] hover:text-[var(--navy-deep)] disabled:opacity-60"
      >
        {sending ? L("جارٍ الإرسال...", "Sending...") : L("إرسال الطلب", "Submit request")}{" "}
        <Send className={lang === "ar" ? "h-4 w-4 -scale-x-100" : "h-4 w-4"} />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const ltr = type === "email" || type === "tel";
  return (
    <label className="grid gap-2 text-sm font-medium text-[var(--navy)]">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        dir={ltr ? "ltr" : undefined}
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-[var(--teal)]"
      />
    </label>
  );
}
