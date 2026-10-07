import manifest from "./products-manifest.json";

export const SHOP_URL = "https://shop.brbr.co";
export const SITE_URL = "https://brbr.co";

type Dim = { w: number; h: number; kb: number };
const M = manifest as Record<string, { lg: Dim; sm: Dim }>;

export function pimg(key: string, size: "lg" | "sm" = "sm") {
  const m = M[key][size];
  return { src: `/assets/products/${key}-${size}.webp`, width: m.w, height: m.h };
}

export type Product = {
  key: string; brand: string; name: string; short: string;
  accent: string; cta: string; href: string; category: string;
};

const shop = (p: string) => `${SHOP_URL}/collections/${p}`;

export const BESTSELLERS: Product[] = [
  { key: "ultra", brand: "Gummy Professional", name: "Styling Wax Ultra Hold", short: "Gummy's best-known wax: high hold with keratin complex, 150 ml.", accent: "red", cta: "Shop hair wax", href: shop("hair-wax"), category: "Hair wax" },
  { key: "clay", brand: "The Shave Factory", name: "Matte Clay 44 Tea Tree", short: "Strong hold with zero shine for crops and quiffs, 150 ml.", accent: "lime", cta: "Shop matte clay", href: shop("matte-clay"), category: "Matte clay" },
  { key: "powder", brand: "The Shave Factory", name: "Styling Powder 12 Arctic", short: "Instant root lift and a dry, matte texture.", accent: "blue", cta: "Shop styling powder", href: shop("styling-powder"), category: "Styling powder" },
  { key: "shave", brand: "The Shave Factory", name: "Shaving Gel Crystal", short: "Transparent gel so you can see every line, 1250 ml pump.", accent: "steel", cta: "Shop shaving gel", href: shop("shaving-gel"), category: "Shaving gel" },
  { key: "cologne", brand: "The Shave Factory", name: "After Shave Cologne 01", short: "A fresh finish after a shave or a cut.", accent: "purple", cta: "Shop aftershave", href: shop("aftershave"), category: "Aftershave cologne" },
  { key: "pomade", brand: "The Shave Factory", name: "Premium Pomade 01", short: "Water-based shine with collagen, 150 ml.", accent: "red", cta: "Shop pomade", href: shop("pomade"), category: "Pomade" },
  { key: "gel", brand: "Gummy Professional", name: "Hair Gel Plus", short: "Maximum hold for an extreme, wet look.", accent: "orange", cta: "Shop hair gel", href: shop("hair-gel"), category: "Hair gel" },
  { key: "sheen", brand: "The Shave Factory", name: "Hair Sheen Spray Olive Oil", short: "Lightweight shine and softness, 500 ml.", accent: "olive", cta: "Shop hair sheen", href: shop("hair-sheen"), category: "Hair sheen" },
];

export const WAX_FAMILY = [
  { key: "ultra", name: "Ultra Hold", finish: "Maximum hold, natural sheen", accent: "red", hold: 5 },
  { key: "hard", name: "Hard Finish", finish: "Firm hold that locks shape", accent: "blue", hold: 5 },
  { key: "matte", name: "Matte Finish", finish: "Strong hold, no shine", accent: "lime", hold: 4 },
  { key: "bright", name: "Bright Finish", finish: "Strong hold, high shine", accent: "orange", hold: 4 },
  { key: "casual", name: "Casual Look", finish: "Flexible hold, natural look", accent: "grey", hold: 3 },
];

export const FINDER = [
  { key: "gel", label: "Hair gel", x: 84, y: 12, accent: "orange" },
  { key: "ultra", label: "Hair wax", x: 52, y: 24, accent: "red" },
  { key: "clay", label: "Matte clay", x: 14, y: 30, accent: "lime" },
  { key: "edge", label: "Edge control", x: 36, y: 44, accent: "amber" },
  { key: "pomade", label: "Pomade", x: 78, y: 52, accent: "red" },
  { key: "powder", label: "Styling powder", x: 16, y: 66, accent: "blue" },
  { key: "sheen", label: "Sheen spray", x: 82, y: 88, accent: "olive" },
];

export const TYPES = [
  { name: "Styling powder", line: "Light to medium hold, matte. Root lift for fine or flat hair.", accent: "blue" },
  { name: "Matte clay", line: "Strong hold, no shine. Texture for crops and quiffs.", accent: "lime" },
  { name: "Hair wax", line: "Medium to max hold, natural sheen. The all-rounder.", accent: "red" },
  { name: "Edge control", line: "Strong grip, low shine. Sleek baby hair, buns and ponytails.", accent: "amber" },
  { name: "Pomade", line: "Medium hold, high shine. Side partings and slick backs.", accent: "red" },
  { name: "Hair gel", line: "Maximum hold, wet look. Sharp, defined styles.", accent: "orange" },
];

export const WAX_STEPS = [
  { t: "Start with dry or towel-dried hair", d: "Wax grips best on hair that isn't dripping wet." },
  { t: "Warm a fingertip's worth", d: "Rub it between your palms until it softens and spreads evenly." },
  { t: "Work it from the roots up", d: "Push through the back and sides first, then shape the front. Add more only if you need it." },
];

export const EDGE_STEPS = [
  { t: "Start on dry, detangled hair", d: "Brush the hairline smooth so the product sits evenly." },
  { t: "Apply a little, then swoop", d: "Work a small amount along the edges with an edge brush, then shape the baby hair into swirls or waves." },
  { t: "Set it with a scarf", d: "Tie a silk or satin scarf over your edges for ten minutes so the shape sets cleanly." },
];

export const FAQS = [
  { q: "Is brbr.co an official stockist?", a: "Yes. brbr.co is run by Kotchak Ltd, the authorised UK distributor of Gummy Professional (under authorisation from Fonex Cosmetics) and an authorised distributor of The Shave Factory. Everything we sell is genuine stock held in our UK warehouse." },
  { q: "How quickly do orders ship?", a: "Orders placed on a working day are dispatched from our UK warehouse the next working day. Delivery options and times are shown at checkout." },
  { q: "Wax, clay or pomade: what's the difference?", a: "Clay gives strong hold with no shine, wax sits in the middle with a natural sheen, and pomade gives a smooth, high-shine finish. Powder adds lift and texture, and gel gives the firmest, wet-look hold." },
  { q: "Which Gummy product is best for laying edges?", a: "Gummy Edge Control is made for sleek baby hair, slick buns and ponytails. For a fuller slick-back with maximum hold, many people pair it with Gummy Styling Wax Ultra Hold." },
  { q: "How do I wash out hair wax?", a: "Apply shampoo to dry hair first, massage it in, then rinse. Strong-hold waxes may need a second wash." },
  { q: "Where do I check out?", a: "Shop now takes you to our secure Shopify store, where you'll see current prices, stock levels and delivery options before you pay." },
];

export function jsonLd() {
  const org = { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: "brbr.co", legalName: "Kotchak Ltd", url: SITE_URL, logo: `${SITE_URL}/favicon.svg`, description: "UK online shop for Gummy Professional and The Shave Factory barber products, operated by Kotchak Ltd, the authorised UK distributor." };
  return {
    "@context": "https://schema.org",
    "@graph": [
      org,
      { "@type": "WebSite", "@id": `${SITE_URL}/#site`, name: "brbr.co", url: SITE_URL, inLanguage: "en-GB", publisher: { "@id": `${SITE_URL}/#org` } },
      { "@type": "ItemList", name: "Bestselling barber products at brbr.co", itemListElement: BESTSELLERS.map((p, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Product", name: `${p.brand} ${p.name}`, brand: { "@type": "Brand", name: p.brand }, category: p.category, description: p.short, image: `${SITE_URL}/assets/products/${p.key}-lg.webp`, url: p.href } })) },
      { "@type": "HowTo", name: "How to apply hair wax", step: WAX_STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })) },
      { "@type": "HowTo", name: "How to lay edges with edge control", step: EDGE_STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })) },
      { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
}
