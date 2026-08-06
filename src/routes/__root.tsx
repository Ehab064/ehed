import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          تعذّر تحميل هذه الصفحة
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          حدث خطأ غير متوقع. يمكنك إعادة المحاولة أو العودة إلى الصفحة الرئيسية.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            إعادة المحاولة
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            العودة للرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EHED — بوابتك التجارية الإقليمية في شرق أفريقيا" },
      {
        name: "description",
        content:
          "إكسبيريانس هاوس (EHED): شركة تطوير أعمال وتجارة إقليمية مقرها رواندا تربط شرق أفريقيا بالشرق الأوسط وشمال أفريقيا.",
      },
      { name: "author", content: "إكسبيريانس هاوس (EHED)" },
      { property: "og:site_name", content: "إكسبيريانس هاوس (EHED)" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "EHED — بوابتك التجارية الإقليمية في شرق أفريقيا" },
      { name: "twitter:title", content: "EHED — بوابتك التجارية الإقليمية في شرق أفريقيا" },
      { property: "og:description", content: "إكسبيريانس هاوس (EHED): شركة تطوير أعمال وتجارة إقليمية مقرها رواندا تربط شرق أفريقيا بالشرق الأوسط وشمال أفريقيا." },
      { name: "twitter:description", content: "إكسبيريانس هاوس (EHED): شركة تطوير أعمال وتجارة إقليمية مقرها رواندا تربط شرق أفريقيا بالشرق الأوسط وشمال أفريقيا." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/10576243-380e-49ce-b39c-d6974feb9b14/id-preview-13049ca8--2324c393-c16a-4f5c-99a1-169c9e9eb2e4.lovable.app-1785873169811.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/10576243-380e-49ce-b39c-d6974feb9b14/id-preview-13049ca8--2324c393-c16a-4f5c-99a1-169c9e9eb2e4.lovable.app-1785873169811.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Tajawal:wght@300;400;500;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster position="top-left" />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

