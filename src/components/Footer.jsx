import { me } from "../data/content";
import { Bolt, Burst, Heart, PuffText, Sparkle, Star } from "./Doodles";
import { useViewport } from "../hooks/useMotion";

const links = [
  { label: "GITHUB", href: me.socials.github, color: "bg-lime" },
  { label: "LINKEDIN", href: me.socials.linkedin, color: "bg-blue text-white" },
  { label: "X / TWITTER", href: me.socials.x, color: "bg-white" },
  { label: "EMAIL", href: `mailto:${me.email}`, color: "bg-sunny" },
];

export default function Footer() {
  const { isMobile, isTablet } = useViewport();
  const outer = isMobile ? 9 : isTablet ? 15 : 20;
  const inner = isMobile ? 6 : isTablet ? 10 : 14;

  return (
    <footer id="contact" className="relative overflow-hidden bg-ink pt-16 text-cream sm:pt-24">
      <div className="stripes absolute inset-x-0 top-0 h-16 text-cherry/40" aria-hidden="true" />
      <div className="halftone-lg absolute -left-10 top-24 h-28 w-28 sm:h-56 sm:w-56 text-lime/20" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="section-label text-cream/60">end card</p>

        <h2 className="mt-3 select-none">
          <span className="sr-only">See you around</span>
          <span aria-hidden="true" className="block">
            <PuffText fill="#FFD400" outer={outer} inner={inner} className="text-[15vw] leading-[0.8] lg:text-[11rem]">
              SEE YOU
            </PuffText>
          </span>
          <span aria-hidden="true" className="block sm:pl-[10vw]">
            <PuffText fill="#FF2E88" outer={outer} inner={inner} className="text-[15vw] leading-[0.8] lg:text-[11rem]">
              AROUND
            </PuffText>
          </span>
        </h2>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              data-cursor="go"
              className={`btn ${l.color} text-ink`}
            >
              {l.label} ↗
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t-2 border-dashed border-cream/30 pt-6">
          <div className="font-mono text-[11px] uppercase leading-relaxed tracking-wide text-cream/70">
            <p>{me.city} · IST</p>
            <p>
              <a href={`mailto:${me.email}`} className="scribble-link text-lime">
                {me.email}
              </a>
            </p>
            <p className="mt-2">
              built by hand with react + tailwind · no template was harmed
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Star size={34} className="animate-wobble" />
            <Bolt size={30} className="animate-bob" />
            <Heart size={28} />
            <Sparkle size={20} fill="#B4FF3A" />
          </div>
        </div>

        <div className="relative flex items-center justify-between py-8">
          <p className="font-hand text-xl text-cream/80">
            thanks for scrolling all the way down. that means something.
          </p>
          <Burst size={92} fill="#B4FF3A" className="hidden shrink-0 animate-bob sm:grid">
            <a href="#top" className="text-[9px] text-ink" data-cursor="back up">
              TOP ↑
            </a>
          </Burst>
        </div>
      </div>

      <div className="border-t-4 border-cream/20 bg-ink py-3">
        <p className="text-center font-slab text-[10px] uppercase tracking-[0.3em] text-cream/50">
          END OF EPISODE · {me.handle} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
