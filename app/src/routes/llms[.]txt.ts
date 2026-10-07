import { createFileRoute } from "@tanstack/react-router";

import { BESTSELLERS, FAQS, SHOP_URL, WAX_FAMILY } from "@/site/data";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const o = new URL(request.url).origin;
        const lines = [
          "# brbr.co",
          "",
          "> UK online shop for Gummy Professional and The Shave Factory barber products. Operated by Kotchak Ltd, the authorised UK distributor of Gummy Professional (under authorisation from Fonex Cosmetics) and an authorised distributor of The Shave Factory. Genuine stock, held in a UK warehouse, dispatched the next working day.",
          "",
          "## Key pages",
          `- [Home](${o}/): bestsellers, edge control, the Gummy wax family, The Shave Factory range, finish finder, how-to guides and FAQ`,
          `- [Shop](${SHOP_URL}): Shopify store with current prices, stock and delivery options`,
          "",
          "## Bestsellers",
          ...BESTSELLERS.map((p) => `- ${p.brand} ${p.name} (${p.category}): ${p.short}`),
          "",
          "## Gummy Professional styling wax finishes",
          ...WAX_FAMILY.map((x) => `- ${x.name}: ${x.finish}`),
          "- Edge Control: firm, low-shine hold for sleek baby hair, slick buns and ponytails, popular for textured and afro hair",
          "",
          "## FAQ",
          ...FAQS.flatMap((f) => [`### ${f.q}`, f.a, ""]),
        ];
        return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" } });
      },
    },
  },
});
