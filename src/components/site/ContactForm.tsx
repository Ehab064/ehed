import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [sending, setSending] = useState(false);

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
          toast.success("شكراً لك — تم استلام طلبك بنجاح.", {
            description: "سيتواصل معك فريقنا في كيغالي في أقرب وقت.",
          });
        }, 600);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="الاسم الكامل" name="name" placeholder="اسمك" />
        <Field label="الشركة" name="company" placeholder="اسم الشركة" required={false} />
        <Field label="البريد الإلكتروني" name="email" type="email" placeholder="you@company.com" />
        <Field label="رقم الهاتف" name="phone" type="tel" placeholder="+250 ..." required={false} />
      </div>

      <label className="grid gap-2 text-sm font-medium text-[var(--navy)]">
        مجال الاهتمام
        <select
          name="interest"
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-[var(--teal)]"
        >
          <option>تيسير التجارة</option>
          <option>دعم دخول الأسواق</option>
          <option>توريد الموردين والمشتريات</option>
          <option>التمثيل التجاري</option>
          <option>دعم التوسع الإقليمي</option>
          <option>تنسيق الخدمات اللوجستية</option>
          <option>تصدير البن والشاي</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-[var(--navy)]">
        الرسالة
        <textarea
          name="message"
          required
          rows={5}
          placeholder="أخبرنا عن احتياجات عملك..."
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-[var(--teal)]"
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--teal)] hover:text-[var(--navy-deep)] disabled:opacity-60"
      >
        {sending ? "جارٍ الإرسال..." : "إرسال الطلب"} <Send className="h-4 w-4 -scale-x-100" />
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
