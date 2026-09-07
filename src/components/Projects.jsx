/* eslint-disable react/prop-types */
import { useState } from "react";
import { projects } from "../data/content";
import { Arrow, Bolt, Burst, Emphasis, HalftoneBlock, Heart, Sparkle, SpeedLines, Star, Tape } from "./Doodles";
import { useTilt } from "../hooks/useMotion";

const skin = {
  lime: { bg: "bg-lime", ink: "text-ink", chip: "bg-white", accent: "#FF2E88", num: "text-ink/25" },
  pink: { bg: "bg-pink", ink: "text-white", chip: "bg-sunny", accent: "#FFD400", num: "text-white/30" },
  blue: { bg: "bg-blue", ink: "text-white", chip: "bg-lime", accent: "#B4FF3A", num: "text-white/25" },
  sunny: { bg: "bg-sunny", ink: "text-ink", chip: "bg-white", accent: "#1E4FFF", num: "text-ink/25" },
  cherry: { bg: "bg-cherry", ink: "text-white", chip: "bg-lime", accent: "#B4FF3A", num: "text-white/30" },
  grape: { bg: "bg-grape", ink: "text-white", chip: "bg-lime", accent: "#FFD400", num: "text-white/25" },
};

function Shot({ p, accent }) {
  const [broken, setBroken] = useState(!p.image);
  const tilt = useTilt(7);

  return (
    <div ref={tilt.ref} {...tilt.handlers} style={tilt.style} className="relative">
      <div className="sticker-lg overflow-hidden bg-white transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-[1.02]">
        {/* fake browser chrome — keeps every screenshot on-brand */}
        <div className="flex items-center gap-1.5 border-b-[3px] border-ink bg-cream px-3 py-2">
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-cherry" />
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-sunny" />
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-lime" />
          <span className="ml-2 truncate font-mono text-[10px] text-ink/60">
            {p.live ? p.link.replace(/^https?:\/\//, "") : "offline.for.now"}
          </span>
        </div>

        {broken ? (
          <div className="grid aspect-[16/10] place-items-center bg-cream p-6 text-center">
            <div>
              <p className="font-puff text-3xl leading-none sm:text-4xl">{p.title}</p>
              <p className="mx-auto mt-2 max-w-[240px] font-hand text-lg leading-tight text-ink/70">
                {p.live
                  ? "screenshot went walkabout — go look at the real thing"
                  : "deployment retired. the code and the lessons survived."}
              </p>
              <Sparkle size={22} className="mx-auto mt-3" fill={accent} />
            </div>
          </div>
        ) : (
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            loading="lazy"
            onError={() => setBroken(true)}
            className="aspect-[16/10] w-full bg-cream object-cover object-top"
          />
        )}
      </div>

      {/* handwritten annotations pinned around the shot */}
      {p.notes.map((n) => (
        <span
          key={n.t}
          className="pointer-events-none absolute z-20 max-w-[48%] rounded-[10px] border-2 border-ink bg-white/95 px-2 py-0.5 font-hand text-[14px] leading-tight text-ink shadow-hard-sm sm:text-lg"
          style={{ left: n.x, top: n.y, transform: `rotate(${n.r}deg)` }}
        >
          {n.t}
        </span>
      ))}
    </div>
  );
}

function Panel({ p, i }) {
  const s = skin[p.color];
  const flip = i % 2 === 1;

  return (
    <article
      data-reveal
      style={{ "--rv-rot": `${flip ? 2 : -2}deg` }}
      className={`group relative overflow-hidden border-b-4 border-ink ${s.bg} ${s.ink}`}
    >
      <HalftoneBlock
        className={`absolute ${flip ? "-left-10" : "-right-10"} -top-10 h-40 w-40 sm:h-52 sm:w-52 ${
          s.ink === "text-white" ? "text-white/30" : "text-ink/20"
        }`}
      />
      <SpeedLines
        className={`absolute ${flip ? "right-0 rotate-180" : "left-0"} top-1/3 hidden h-24 w-40 opacity-25 sm:block sm:w-64`}
        color={s.ink === "text-white" ? "#FFFFFF" : "#0B0B0B"}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
        {/* text half */}
        <div className={flip ? "lg:order-2" : ""}>
          <div className="flex flex-wrap items-baseline gap-3">
            <span className={`font-slab text-6xl leading-none sm:text-8xl ${s.num}`}>{p.n}</span>
            <span className={`chip ${p.live ? "bg-white text-ink" : "bg-ink text-cream"}`}>{p.status}</span>
          </div>

          <h3 className="mt-1 font-puff text-5xl leading-[0.85] sm:text-7xl">
            <span className="inline-block origin-left transition-transform duration-300 group-hover:scale-x-[1.05] group-hover:scale-y-[0.95]">
              {p.title}
            </span>
          </h3>

          <p className="mt-3 max-w-md font-hand text-xl leading-snug sm:text-2xl">“{p.hook}”</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span key={t} className={`chip ${s.chip} text-ink`}>
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wide opacity-80">
            {p.meta.map((m) => (
              <span key={m}>· {m}</span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {p.live ? (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="open it"
                className="btn bg-ink text-cream hover:bg-white hover:text-ink"
              >
                OPEN {p.title.toUpperCase()} <span className="font-mono">↗</span>
              </a>
            ) : (
              <span className="btn cursor-default bg-white/80 text-ink/70 shadow-hard-sm">
                DEPLOYMENT RETIRED
              </span>
            )}
            {p.code && (
              <a
                href={p.code}
                target="_blank"
                rel="noreferrer"
                data-cursor="read code"
                className="btn bg-white text-ink"
              >
                CODE <span className="font-mono">↗</span>
              </a>
            )}
          </div>
        </div>

        {/* visual half */}
        <div className={`relative ${flip ? "lg:order-1" : ""}`}>
          <Shot p={p} accent={s.accent} />

          <Burst
            size={78}
            fill="#FFFFFF"
            className="absolute -right-3 -top-7 z-20 hidden rotate-6 opacity-0 transition-all duration-300 group-hover:rotate-[14deg] group-hover:opacity-100 sm:grid"
          >
            <span className="text-[9px] text-ink">{p.live ? "CLICK!" : "RIP!"}</span>
          </Burst>

          {i % 3 === 0 && <Star size={44} className="absolute -bottom-6 -left-4 z-20 -rotate-12 animate-wobble" />}
          {i % 3 === 1 && <Bolt size={40} className="absolute -bottom-6 -left-3 z-20 rotate-12 animate-bob" />}
          {i % 3 === 2 && <Heart size={38} className="absolute -bottom-6 -left-3 z-20 -rotate-6 animate-wobble" />}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="relative overflow-hidden border-b-4 border-ink bg-cream py-12 sm:py-16">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-label">chapter two</p>
          <h2 className="mt-2 font-puff text-6xl leading-[0.82] sm:text-8xl">
            THINGS
            <br />
            <span className="text-pink">I BUILT</span>
            <Emphasis size={34} className="ml-3 inline-block -translate-y-8" />
          </h2>
          <p className="mt-4 max-w-md font-hand text-xl">
            five are live right now. one had a good run. click something — I will know.
          </p>
          <Arrow size={90} rotate={40} className="mt-2 opacity-70" />
          <Tape className="right-[8%] top-8 hidden rotate-3 sm:block" style={{ position: "absolute" }}>
            no dead links, promise
          </Tape>
        </div>
      </div>

      {projects.map((p, i) => (
        <Panel key={p.n} p={p} i={i} />
      ))}
    </section>
  );
}
