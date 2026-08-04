import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = ""; // TODO: set once a domain is configured

const PATHS = ["/", "/about", "/services", "/markets", "/coffee-tea", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PATHS.map((p) => `  <url><loc>${BASE_URL}${p}</loc></url>`).join("\n")}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
