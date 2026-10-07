import { useEffect, useRef, useState, type CSSProperties } from "react";

import { BESTSELLERS, EDGE_STEPS, FAQS, FINDER, SHOP_URL, TYPES, WAX_FAMILY, WAX_STEPS, pimg } from "./data";

const col = (p: string) => `${SHOP_URL}/collections/${p}`;

function useScrolled(threshold: () => number) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const f = () => setOn(window.scrollY > threshold());
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, [threshold]);
  return on;
}
const t40 = () => 40;
const tHero = () => window.innerHeight * 0.8;

function Logo() {
  return <a className="logo" href="#top" aria-label="brbr.co home">brbr<i aria-hidden="true" />co</a>;
}

export function Header() {
  const solid = useScrolled(t40);
  return (
    <header className={`hdr${solid ? " is-solid" : ""}`}>
      <div className="wrap hdr__in">
        <Logo />
        <nav className="nav" aria-label="Main">
          <a href="#bestsellers">Bestsellers</a><a href="#edges">Edges</a><a href="#wax">Wax</a>
          <a href="#shave-factory">The Shave Factory</a><a href="#finder">Finish finder</a>
          <a href="#guides">Guides</a><a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn--amber" href={SHOP_URL}>Shop now</a>
      </div>
    </header>
  );
}

export function Intro() {
  return (
    <section className="intro" aria-labelledby="hero-title">
      <div className="intro__bg">
        <picture>
          <source media="(max-width: 700px)" srcSet="/assets/lifestyle/hero-sm.webp" />
          <img src="/assets/lifestyle/hero-lg.webp" alt="Gummy Professional Styling Wax Ultra Hold jar with its lid lifted on a black plinth" width={1344} height={752} fetchPriority="high" decoding="async" />
        </picture>
      </div>
      <div className="wrap">
        <div className="intro__copy">
          <span className="eyebrow">Official UK stock · Gummy Professional &amp; The Shave Factory</span>
          <h1 id="hero-title" className="disp">Gummy hair wax &amp; barber essentials. <em>From UK stock.</em></h1>
          <p className="lede">Ultra-hold wax, edge control and The Shave Factory's barber bestsellers, sold by the authorised UK distributor and dispatched from our UK warehouse the next working day.</p>
          <div className="intro__acts">
            <a className="btn btn--amber" href={SHOP_URL}>Shop now</a>
            <a className="btn btn--ghost" href="#bestsellers">See bestsellers</a>
          </div>
          <ul className="assure"><li>Authorised UK distributor</li><li>Dispatched next working day</li><li>Secure Shopify checkout</li></ul>
        </div>
      </div>
      <span className="cue" aria-hidden="true">Scroll</span>
    </section>
  );
}

const WORDS = ["Gummy Professional", "Edge control", "The Shave Factory", "Ultra hold", "Matte clay", "UK stock", "Styling powder", "Next-day dispatch", "Shaving gel"];
export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return <div className="marq" aria-hidden="true"><div className="marq__track">{row.map((w, i) => <span key={i}>{w}</span>)}</div></div>;
}

const STAGE: Record<string, { word: string; chips: string[] }> = {
  ultra: { word: "Wax", chips: ["Ultra hold", "Keratin complex", "150 ml"] },
  clay: { word: "Clay", chips: ["Strong hold", "Matte", "Tea tree", "150 ml"] },
  powder: { word: "Powder", chips: ["Root lift", "Matte texture", "Light hold"] },
  shave: { word: "Shave", chips: ["Transparent", "Pump", "1250 ml"] },
  cologne: { word: "Cologne", chips: ["01 Pacific", "Spray"] },
  pomade: { word: "Pomade", chips: ["Medium hold", "High shine", "Water-based"] },
  gel: { word: "Gel", chips: ["Maximum hold", "Wet look"] },
  sheen: { word: "Sheen", chips: ["Shine", "Olive oil", "500 ml"] },
};

export function Bestsellers() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const steps = Array.from(root.querySelectorAll<HTMLElement>(".cstep"));
    const ticks = Array.from(root.querySelectorAll<HTMLElement>(".cticks a"));
    const set = (k: string) => {
      root.dataset.k = k;
      steps.forEach((s) => s.classList.toggle("is-on", s.dataset.k === k));
      ticks.forEach((t) => t.classList.toggle("is-on", t.dataset.k === k));
    };
    const io = new IntersectionObserver(
      (es) => {
        for (const e of es) if (e.isIntersecting) set((e.target as HTMLElement).dataset.k ?? "ultra");
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    steps.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return (
    <section id="bestsellers" className="cstage" data-k="ultra" ref={ref} aria-labelledby="best-h">
      <div className="wrap cstage__head">
        <span className="eyebrow">Bestsellers</span>
        <h2 id="best-h" className="disp">Barber favourites, in stock</h2>
        <p className="lede">Eight shelf staples, from Gummy's ultra-hold wax to The Shave Factory's crystal-clear shaving gel. Scroll through them one by one.</p>
      </div>
      <div className="wrap cstage__grid">
        <div className="cstage__stage">
          {BESTSELLERS.map((p) => (
            <span className="cstage__word" data-k={p.key} key={`w-${p.key}`} aria-hidden="true" style={{ "--len": STAGE[p.key].word.length } as CSSProperties}>{STAGE[p.key].word}</span>
          ))}
          {BESTSELLERS.map((p, i) => (
            <div className="cstage__prod" data-k={p.key} key={`p-${p.key}`}>
              <img {...pimg(p.key, "lg")} alt={`${p.brand} ${p.name}`} loading={i === 0 ? "eager" : "lazy"} decoding="async" />
            </div>
          ))}
          <nav className="cticks" aria-label="Bestsellers">
            {BESTSELLERS.map((p, i) => (
              <a href={`#best-${p.key}`} data-k={p.key} key={`t-${p.key}`} className={i === 0 ? "is-on" : undefined}>{STAGE[p.key].word}</a>
            ))}
          </nav>
        </div>
        <div className="cstage__steps">
          {BESTSELLERS.map((p, i) => (
            <article id={`best-${p.key}`} className={`cstep${i === 0 ? " is-on" : ""}`} data-k={p.key} key={p.key}>
              <div className="cstep__card">
                <span className="cstep__n">{String(i + 1).padStart(2, "0")} / {String(BESTSELLERS.length).padStart(2, "0")}</span>
                <span className="cstep__brand">{p.brand}</span>
                <h3>{p.name}</h3>
                <p>{p.short}</p>
                <ul className="cstep__chips">{STAGE[p.key].chips.map((c) => <li key={c}>{c}</li>)}</ul>
                <a className="btn btn--ink" href={p.href}>{p.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps({ s }: { s: { t: string; d: string }[] }) {
  return <ol className="steps">{s.map((x) => <li key={x.t}><div><b>{x.t}</b><span>{x.d}</span></div></li>)}</ol>;
}

export function Edges() {
  return (
    <section id="edges" className="sec" aria-labelledby="edges-h">
      <div className="wrap edges">
        <figure className="edges__fig rv">
          <img src="/assets/lifestyle/edges-lg.webp" srcSet="/assets/lifestyle/edges-sm.webp 600w, /assets/lifestyle/edges-lg.webp 1200w" sizes="(min-width: 900px) 50vw, 100vw" alt="Woman with sleek laid edges defining her hairline with an edge brush" width={1200} height={1600} loading="lazy" decoding="async" />
          <figcaption className="edges__chip"><img {...pimg("edge", "sm")} alt="" loading="lazy" />Gummy Edge Control</figcaption>
        </figure>
        <div className="rv">
          <span className="eyebrow">Edge control</span>
          <h2 id="edges-h" className="disp" style={{ fontSize: "clamp(2.6rem, 5.4vw, 4.8rem)", margin: "18px 0 20px" }}>Edges, laid. And they stay that way.</h2>
          <p className="lede">Sleek baby hair, slick buns and sharp ponytails need a grip that holds without the grease. Gummy Edge Control gives the firm, low-shine hold textured and afro hair needs, and Ultra Hold takes care of a full slick-back.</p>
          <Steps s={EDGE_STEPS} />
          <div className="intro__acts">
            <a className="btn btn--amber" href={col("edge-control")}>Shop edge control</a>
            <a className="btn btn--ghost" href="#guides">Read the guide</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WaxFamily() {
  return (
    <section id="wax" className="sec" aria-labelledby="wax-h">
      <div className="wrap">
        <div className="sec__head rv">
          <span className="eyebrow">Gummy Professional</span>
          <h2 id="wax-h" className="disp">Five finishes. One family.</h2>
          <p className="lede">The same black jar with a band colour for every look. Pick the hold and shine that suit your hair, from flexible and natural to rock-hard.</p>
        </div>
        <div className="family">
          {WAX_FAMILY.map((x) => (
            <a className="ftile rv" data-accent={x.accent} href={col("hair-wax")} key={x.key}>
              <img {...pimg(x.key, "sm")} alt={`Gummy Styling Wax ${x.name}, 150 ml jar`} loading="lazy" decoding="async" />
              <h3>{x.name}</h3>
              <p>{x.finish}</p>
              <div className="meter" role="img" aria-label={`Hold ${x.hold} out of 5`}>{[1, 2, 3, 4, 5].map((n) => <i key={n} className={n <= x.hold ? "on" : undefined} />)}</div>
            </a>
          ))}
        </div>
        <div className="setcard rv">
          <div>
            <span className="eyebrow">Gift idea</span>
            <h3 className="disp" style={{ margin: "16px 0 14px" }}>The Men's Grooming Set</h3>
            <p className="lede" style={{ marginBottom: 24 }}>A black gift tin with a line-up of Gummy styling waxes. An easy present for anyone who takes their hair seriously.</p>
            <a className="btn btn--amber" href={col("gift-sets")}>Shop gift sets</a>
          </div>
          <img {...pimg("set", "lg")} alt="Gummy Professional Men's Grooming Set gift tin with styling wax jars" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export function ShaveFactory() {
  return (
    <section id="shave-factory" className="sec sec--light" aria-labelledby="tsf-h">
      <div className="wrap">
        <div className="banner rv">
          <img src="/assets/lifestyle/barber-lg.webp" srcSet="/assets/lifestyle/barber-sm.webp 900w, /assets/lifestyle/barber-lg.webp 1800w" sizes="(min-width: 1240px) 1240px, 100vw" alt="Barber working matte clay through a red-haired man's textured crop" width={1800} height={1013} loading="lazy" decoding="async" />
          <div className="banner__copy">
            <span className="eyebrow">The Shave Factory</span>
            <h2 id="tsf-h" className="disp">Made for the chair. Ready for your shelf.</h2>
            <p>The Shave Factory makes the clays, powders, gels and colognes you'll find on working barbers' stations. These are the ones our customers come back for.</p>
          </div>
        </div>
        <div className="duo">
          <div className="duo__a rv">
            <img src="/assets/lifestyle/shave-lg.webp" srcSet="/assets/lifestyle/shave-sm.webp 900w, /assets/lifestyle/shave-lg.webp 1800w" sizes="(min-width: 900px) 60vw, 100vw" alt="Razor gliding through transparent shaving gel on a man's jawline" width={1800} height={1013} loading="lazy" decoding="async" />
            <div>
              <h3>See every stroke</h3>
              <p>Shaving Gel Crystal is fully transparent, so beard lines and edges stay sharp. A 1250 ml pump for the bathroom shelf.</p>
              <a className="btn btn--amber" href={col("shaving-gel")}>Shop shaving gel</a>
            </div>
          </div>
          <div className="minis">
            {BESTSELLERS.filter((b) => ["clay", "powder", "cologne", "pomade"].includes(b.key)).map((p) => (
              <a className="mini rv" href={p.href} key={p.key}>
                <img {...pimg(p.key, "sm")} alt={`${p.brand} ${p.name}`} loading="lazy" decoding="async" />
                <div><b>{p.name}</b><span>{p.short}</span></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Finder() {
  return (
    <section id="finder" className="sec" aria-labelledby="finder-h">
      <div className="wrap">
        <div className="sec__head rv">
          <span className="eyebrow">Find your finish</span>
          <h2 id="finder-h" className="disp">Wax, clay or pomade?</h2>
          <p className="lede">Every styler trades hold against shine. Find the look you're after, then pick the product.</p>
        </div>
        <div className="finder">
          <div className="map rv" aria-label="Styling products mapped by hold and shine">
            <span className="map__ax" style={{ left: 16, top: 16 }}>Max hold ↑</span>
            <span className="map__ax" style={{ left: 16, bottom: 16 }}>Matte</span>
            <span className="map__ax" style={{ right: 16, bottom: 16 }}>High shine →</span>
            {FINDER.map((f) => (
              <a className={`dot${f.x > 66 ? " dot--l" : ""}`} data-accent={f.accent} href="#guides" key={f.key} style={{ left: `${f.x}%`, top: `${f.y}%` }}>
                <span><img {...pimg(f.key, "sm")} alt="" loading="lazy" /></span><b>{f.label}</b>
              </a>
            ))}
          </div>
          <div className="types">{TYPES.map((t) => <div className="type rv" data-accent={t.accent} key={t.name}><h3>{t.name}</h3><p>{t.line}</p></div>)}</div>
        </div>
        <p className="fine">Typical hold and shine by product type. Individual products vary, so check the label.</p>
      </div>
    </section>
  );
}

export function Guides() {
  return (
    <section id="guides" className="sec sec--light" aria-labelledby="guides-h">
      <div className="wrap">
        <div className="sec__head rv"><span className="eyebrow">How-to</span><h2 id="guides-h" className="disp">Get it right first time</h2></div>
        <div className="guides">
          <article className="guide rv"><h3 className="disp">How to apply hair wax</h3><Steps s={WAX_STEPS} /></article>
          <article className="guide rv"><h3 className="disp">How to lay edges</h3><Steps s={EDGE_STEPS} /></article>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="sec" aria-labelledby="faq-h">
      <div className="wrap">
        <div className="sec__head rv"><span className="eyebrow">FAQ</span><h2 id="faq-h" className="disp">Good to know</h2></div>
        <div className="faq">{FAQS.map((f, i) => <details className="rv" key={f.q} open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
      </div>
    </section>
  );
}

const TRUST = [["UK warehouse", "Genuine stock, held in the UK"], ["Next working day", "Dispatch on orders placed on working days"], ["Authorised", "Official UK distribution for Gummy Professional"], ["Secure checkout", "Pay safely through Shopify"]];
export function Trust() {
  return <div className="trust">{TRUST.map(([b, s]) => <div key={b}><b>{b}</b><span>{s}</span></div>)}</div>;
}

export function Footer() {
  const shopLinks: [string, string][] = [["Hair wax", "hair-wax"], ["Edge control", "edge-control"], ["Matte clay", "matte-clay"], ["Styling powder", "styling-powder"], ["Shaving gel", "shaving-gel"], ["Aftershave", "aftershave"]];
  const help: [string, string][] = [["Delivery", "shipping-policy"], ["Returns", "refund-policy"], ["Privacy", "privacy-policy"], ["Terms", "terms-of-service"]];
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div><Logo /><p className="ftr__about">Barber-grade hair wax, edge control and grooming essentials from Gummy Professional and The Shave Factory, sold from UK stock.</p></div>
          <div><h4>Shop</h4><ul>{shopLinks.map(([l, p]) => <li key={p}><a href={col(p)}>{l}</a></li>)}</ul></div>
          <div><h4>Help</h4><ul>{help.map(([l, p]) => <li key={p}><a href={`${SHOP_URL}/policies/${p}`}>{l}</a></li>)}<li><a href="#faq">FAQ</a></li></ul></div>
        </div>
        <p className="ftr__legal">brbr.co is operated by Kotchak Ltd, the authorised UK distributor of Gummy Professional (under authorisation from Fonex Cosmetics) and an authorised distributor of The Shave Factory. Gummy Professional and The Shave Factory are trademarks of their respective owners. © 2026 Kotchak Ltd.</p>
      </div>
    </footer>
  );
}

export function FloatingCta() {
  const on = useScrolled(tHero);
  return (
    <div className={`fcta${on ? " is-on" : ""}`}>
      <a className="btn btn--amber" href={SHOP_URL}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>
        Shop now
      </a>
    </div>
  );
}
