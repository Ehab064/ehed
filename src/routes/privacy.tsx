import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal } from "@/components/site/Section";
import { useI18n } from "@/lib/i18n";
import { useSiteData } from "@/lib/site-data";

const title = "Privacy Policy — EHED";
const description =
  "How Experience House (EHED) collects, uses and protects the information you share through this website and our contact form.";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ehed.lovable.app/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://ehed.lovable.app/privacy" }],
  }),
});

function Privacy() {
  const { L } = useI18n();
  const { COMPANY } = useSiteData();

  const sections: { h: string; p: string[] }[] = [
    {
      h: L("المعلومات التي نجمعها", "Information we collect"),
      p: [
        L(
          "نجمع فقط البيانات التي ترسلها طوعاً عبر نموذج التواصل: الاسم، الشركة، المسمى الوظيفي، الدولة، البريد الإلكتروني، رقم الهاتف، مجال الاهتمام، ونص الرسالة.",
          "We only collect the information you voluntarily submit through our contact form: name, company, job title, country, email address, phone number, area of interest and your message.",
        ),
      ],
    },
    {
      h: L("كيف نستخدم المعلومات", "How we use information"),
      p: [
        L(
          "تُستخدم بياناتك للرد على استفسارك، وتقييم فرص التعاون التجاري، والتواصل معك بخصوص الطلب المُرسل فقط. لا نستخدمها لأي أغراض تسويقية دون موافقتك.",
          "Your information is used to respond to your inquiry, assess potential business cooperation and communicate with you about your request only. We do not use it for marketing purposes without your consent.",
        ),
      ],
    },
    {
      h: L("المشاركة مع أطراف أخرى", "Sharing with third parties"),
      p: [
        L(
          "لا نبيع بياناتك ولا نشاركها مع أطراف ثالثة، باستثناء ما يلزم قانونياً أو مقدّمي الخدمات التقنية الذين يساعدوننا في تشغيل الموقع والبريد.",
          "We do not sell your data and do not share it with third parties, except where legally required or with technical service providers that help us operate this website and our email.",
        ),
      ],
    },
    {
      h: L("الاحتفاظ بالبيانات", "Data retention"),
      p: [
        L(
          "نحتفظ ببيانات التواصل للمدة اللازمة لمتابعة الاستفسار والعلاقة التجارية، ثم يتم حذفها عند انتفاء الحاجة.",
          "We retain contact data for as long as needed to follow up on the inquiry and any resulting business relationship, after which it is deleted.",
        ),
      ],
    },
    {
      h: L("حقوقك", "Your rights"),
      p: [
        L(
          `يمكنك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها في أي وقت عبر مراسلتنا على ${COMPANY.email}.`,
          `You may request access to, correction of, or deletion of your data at any time by writing to ${COMPANY.email}.`,
        ),
      ],
    },
    {
      h: L("ملفات تعريف الارتباط", "Cookies"),
      p: [
        L(
          "لا يستخدم هذا الموقع ملفات تتبّع إعلانية. نستخدم تخزيناً محلياً بسيطاً في المتصفح لحفظ تفضيل اللغة فقط.",
          "This website does not use advertising or tracking cookies. We use simple browser local storage only to remember your language preference.",
        ),
      ],
    },
    {
      h: L("التواصل", "Contact"),
      p: [
        L(
          `لأي استفسار يخص الخصوصية: ${COMPANY.email} — ${COMPANY.address}`,
          `For any privacy-related question: ${COMPANY.email} — ${COMPANY.address}`,
        ),
      ],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={L("سياسة الخصوصية", "Privacy Policy")}
        title={L("كيف نتعامل مع بياناتك", "How we handle your data")}
        intro={L(
          "نلتزم بحماية خصوصية زوّار الموقع وشركائنا التجاريين.",
          "We are committed to protecting the privacy of our website visitors and business partners.",
        )}
      />

      <section className="py-20 lg:py-28">
        <div className="container-ehed max-w-3xl">
          <Reveal>
            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.h}>
                  <h2 className="text-xl font-semibold text-[var(--navy)]">{s.h}</h2>
                  {s.p.map((t) => (
                    <p key={t} className="mt-3 leading-relaxed text-muted-foreground">
                      {t}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
