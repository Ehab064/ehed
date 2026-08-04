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
          toast.success("Thank you — your enquiry has been received.", {
            description: "Our Kigali team will get back to you shortly.",
          });
        }, 600);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Your name" />
        <Field label="Company" name="company" placeholder="Company name" required={false} />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" />
        <Field label="Phone" name="phone" type="tel" placeholder="+250 ..." required={false} />
      </div>

      <label className="grid gap-2 text-sm font-medium text-[var(--navy)]">
        Area of interest
        <select
          name="interest"
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-[var(--teal)]"
        >
          <option>Trade Facilitation</option>
          <option>Market Entry Support</option>
          <option>Supplier Sourcing & Procurement</option>
          <option>Business Representation</option>
          <option>Regional Expansion Support</option>
          <option>Logistics Coordination</option>
          <option>Coffee & Tea Export</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-[var(--navy)]">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your business needs..."
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-[var(--teal)]"
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--teal)] hover:text-[var(--navy-deep)] disabled:opacity-60"
      >
        {sending ? "Sending..." : "Send enquiry"} <Send className="h-4 w-4" />
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
  return (
    <label className="grid gap-2 text-sm font-medium text-[var(--navy)]">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-[var(--teal)]"
      />
    </label>
  );
}
