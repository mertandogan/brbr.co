import { createElement as h } from "react";

import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";
import { SHOP_URL } from "@/site/data";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#e8a15a",
  background: "#0b0b0c",
  ink: "#f4efe7",
  muted: "#a59f96",
};

const w = (n: string) => ({
  clip: `/assets/world/scene-${n}.mp4`,
  poster: `/assets/world/scene-${n}-poster.webp`,
  mobileClip: `/assets/world/scene-${n}-mobile.mp4`,
  mobilePoster: `/assets/world/scene-${n}-mobile-poster.webp`,
});

export const scrollScrubScenes: ScrollScrubScene[] = [
  { id: "hold", label: "Hold", kicker: "Gummy Professional · Ultra Hold", title: "Hold that outlasts the day", body: "The black jar with the red band: high-hold styling wax for sharp shapes that stay put from the morning commute to the last train home.", tags: ["Ultra hold", "150 ml"], align: "left", ...w("01") },
  { id: "texture", label: "Texture", kicker: "Inside the jar", title: "Firm in the tin. Smooth in your hands.", body: "Warm a fingertip's worth between your palms and it spreads evenly through dry or towel-dried hair, then sets where you put it.", tags: ["Easy to spread", "Restyle through the day"], align: "right", ...w("02") },
  { id: "keratin", label: "Formula", kicker: "Keratin complex", title: "Built for barbers, priced for every day", body: "A keratin complex formula with the firm, lasting hold Gummy is known for, at a price that works for a daily routine.", tags: ["Keratin complex", "Genuine UK stock"], align: "left", ...w("03") },
  { id: "edges", label: "Edges", kicker: "Edge Control · Five finishes", title: "From laid edges to matte crops", body: "Edge Control for sleek baby hair and slick buns, plus Ultra Hold, Hard, Matte, Bright Finish and Casual Look for every other shape.", tags: ["Edge control", "5 finishes"], align: "right", ...w("04") },
  { id: "range", label: "Range", kicker: "Gummy Professional × The Shave Factory", title: "The whole barber shelf", body: "Wax, clay, powder, shaving gel and cologne from the brands UK barbers stock, dispatched from our UK warehouse.", tags: ["UK stock", "Next-day dispatch"], align: "left", actions: h("a", { className: "btn btn--amber", href: SHOP_URL }, "Shop now"), ...w("05") },
];
