import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import { SITE_URL, jsonLd } from "@/site/data";
import { Bestsellers, Edges, Faq, Finder, FloatingCta, Footer, Guides, Header, Intro, Marquee, ShaveFactory, Trust, WaxFamily } from "@/site/sections";
import siteCss from "@/site/site.css?url";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "stylesheet", href: siteCss },
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: "/assets/lifestyle/hero-lg.webp" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd()) }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <div className="brbr">
      <Header />
      <main id="top">
        <Intro />
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
        <Marquee />
        <Bestsellers />
        <Edges />
        <WaxFamily />
        <ShaveFactory />
        <Finder />
        <Guides />
        <Faq />
        <Trust />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
