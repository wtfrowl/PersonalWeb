import { me } from "../data/content";
import { Arrow, Bolt, Burst, Emphasis, Heart, PuffText, Sparkle, SpeechBubble, Star, Swirl } from "./Doodles";
import { usePointerDrift, useViewport } from "../hooks/useMotion";

export default function Hero() {
  const drift = usePointerDrift();
  const { isMobile, isTablet } = useViewport();

  const outer = isMobile ? 10 : isTablet ? 16 : 22;
  const inner = isMobile ? 7 : isTablet ? 11 : 15;
  const px = (n) => ({ transform: `translate3d(${drift.x * n}px, ${drift.y * n}px, 0)` });

  return (
    <header id="top" className="relative overflow-hidden border-b-4 border-ink bg-cream pt-24 sm:pt-28">
      {/* background furniture */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="halftone-lg absolute -left-10 top-10 h-28 w-28 text-pink/40 sm:h-72 sm:w-72" />
        <div className="halftone-lg absolute -right-8 bottom-24 h-24 w-24 text-blue/30 sm:h-64 sm:w-64" />
        <div className="stripes absolute inset-x-0 bottom-0 h-24 text-sunny/50" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        {/* line 1 — the name as a logo */}
        <div className="relative">
          <div className="section-label mb-3 flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-blink rounded-full bg-cherry" />
            personal site · v3 · handmade
          </div>

          <h1 className="relative select-none leading-[0.8]">
            <span className="sr-only">Rahul Baloda — full-stack developer, Bengaluru</span>

            <span aria-hidden="true" className="block" style={px(-8)}>
              <PuffText
                fill="#FF2E88"
                outer={outer}
                inner={inner}
                className="text-[19vw] sm:text-[17vw] lg:text-[15rem]"
              >
                {me.name}
              </PuffText>
            </span>

            <span
              aria-hidden="true"
              className="block -mt-[2vw] sm:-mt-[1.5vw] sm:pl-[8vw]"
              style={px(6)}
            >
              <PuffText
                fill="#1E4FFF"
                outer={outer}
                inner={inner}
                className="text-[16vw] sm:text-[14vw] lg:text-[12rem]"
              >
                {me.last}
              </PuffText>
            </span>
          </h1>

          {/* stickers that overlap the type */}
          <Star
            size={isMobile ? 44 : 78}
            className="absolute -top-4 right-[6%] animate-wobble sm:right-[10%]"
            style={px(14)}
          />
          <Bolt size={isMobile ? 32 : 60} className="absolute right-[1%] top-[30%] rotate-12 animate-bob" style={px(-10)} />
          <Sparkle size={30} fill="#B4FF3A" className="absolute left-[42%] top-[-2%] hidden animate-bob sm:block" />
          <Emphasis size={34} className="absolute left-[6%] top-[-4%] hidden -rotate-12 sm:block" />
          <Heart size={40} className="absolute -bottom-[6%] left-[1%] hidden -rotate-12 animate-wobble sm:block" />

          <span
            className="absolute right-[4%] top-[52%] hidden rotate-6 font-hand text-xl text-ink sm:block"
            style={px(18)}
          >
            yes, that is my actual name
            <Arrow size={70} flip rotate={-8} className="mt-1" />
          </span>
        </div>

        {/* line 2 — who / what / where, kept genuinely readable */}
        <div className="relative mt-8 grid gap-5 sm:mt-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div className="relative max-w-xl">
            <p className="font-body text-lg leading-snug sm:text-2xl">
              <strong className="bg-lime px-1 text-ink">Full-stack developer</strong> in Bengaluru.
              I make dashboards behave, APIs talk, and side projects that nobody asked for.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn bg-pink text-white" data-cursor="look">
                SEE THE STUFF <span className="font-mono">↓</span>
              </a>
              <a href="#contact" className="btn bg-white" data-cursor="say hi">
                SAY HELLO
              </a>
              <span className="chip bg-lime">
                <span className="inline-block h-1.5 w-1.5 animate-blink rounded-full bg-ink" />
                open to interesting things
              </span>
            </div>
          </div>

          <div className="relative flex items-end justify-start gap-4 lg:justify-end">
            <SpeechBubble bg="#FFD400" className="mb-6 max-w-[220px] rotate-[-3deg] animate-wobble">
              currently building: mandi bhav — 1,508 mandis, in Hindi
            </SpeechBubble>
            <Burst size={isMobile ? 104 : 118} fill="#B4FF3A" className="shrink-0 animate-bob">
              <span className="text-[10px] sm:text-[11px]">
                SINCE
                <br />
                2021
              </span>
            </Burst>
          </div>

          <Swirl className="absolute -top-8 left-[45%] hidden lg:block" />
        </div>
      </div>

      {/* marquee foot */}
      <div className="relative border-y-4 border-ink bg-ink py-2.5 text-cream">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-slab text-sm uppercase sm:text-lg">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex gap-8">
              {[
                "REACT",
                "★",
                "NODE.JS",
                "✦",
                "MONGODB",
                "★",
                "BENGALURU",
                "✦",
                "SHIPS THINGS",
                "★",
                "@WTFROWL",
                "✦",
                "MAKES IT WORK",
                "★",
              ].map((t, i) => (
                <span key={i} className={t.length === 1 ? "text-lime" : ""}>
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

    </header>
  );
}
