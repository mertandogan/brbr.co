# brbr.co

Official UK website for **Gummy Professional** and **The Shave Factory**, operated by **Kotchak Ltd**, the authorised UK distributor.
Live preview: https://brbr-co.higgsfield.app (canonical target: https://brbr.co)

## Stack
- React 19 + TanStack Start, server-rendered (SSR), built with Vite and deployed as a single Cloudflare Worker.
- Scroll-driven hero film engine: `app/src/components/scroll-scrub/` (blob-backed seeking, desktop + mobile clips, reduced-motion support).
- Site design system in plain CSS: `app/src/site/site.css` (self-hosted fonts: Big Shoulders Display + Inter).
- Checkout is handled by the Shopify store (`SHOP_URL` in `app/src/site/data.ts`).

## Where things live
| What | File |
|---|---|
| Home page composition | `app/src/routes/index.tsx` |
| All page sections (header, hero, bestsellers stage, edges, wax family, The Shave Factory, finder, guides, FAQ, footer, floating Shop now) | `app/src/site/sections.tsx` |
| Product data, FAQ, how-to steps, JSON-LD, `SHOP_URL`, `SITE_URL` | `app/src/site/data.ts` |
| Hero film chapter copy | `app/src/scroll-scrub-scenes.ts` |
| Page title, description, OG image, favicon | `app/src/app-meta.json` |
| robots.txt / sitemap.xml / llms.txt | `app/src/routes/robots[.]txt.ts`, `sitemap[.]xml.ts`, `llms[.]txt.ts` |
| Security headers (CSP) | `app/src/lib/security-headers.server.ts` |
| Film chapters + posters (desktop and mobile) | `app/public/assets/world/` |
| Product cutouts (WebP) | `app/public/assets/products/` |
| Hero and lifestyle images | `app/public/assets/lifestyle/` |
| Social share image | `app/public/assets/og/` |
| Shopify motion header loop video | `app/public/assets/shopify/` |
| Shopify theme section | `shopify/brbr-motion-header.liquid` |

## Run locally
```bash
cd app
bun install
bun run dev        # local dev server
bun run build      # runs check:ui, typecheck and the production build
```
`check:ui` rejects raw colour literals in route files: keep colours in `app/src/site/site.css`.

## SEO / GEO
en-GB, one H1, canonical to https://brbr.co/, Open Graph card, JSON-LD (Organization, WebSite, ItemList of Products, two HowTo guides, FAQPage), robots.txt, sitemap.xml and llms.txt. No prices or reviews are hard-coded.

## Moving to brbr.co
The site currently builds through Higgsfield's pipeline, which supplies the Cloudflare Worker wrapper. To serve it from brbr.co either connect the domain in Higgsfield's website settings, or deploy the `app/` project to your own Cloudflare account (this needs a Wrangler configuration for TanStack Start). Then confirm `SITE_URL` and `SHOP_URL` in `app/src/site/data.ts`.

## Notes
- `app/packages/` holds vendored Higgsfield packages that the build depends on. Keep this repository **private**.
- Film, storyboard, lifestyle and cover images were generated with Higgsfield; product photos are the brands' own advertising images.
