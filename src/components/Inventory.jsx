import { inventory, facts } from "../data/content";
import { HalftoneBlock, Sparkle, Star } from "./Doodles";

const tierStyle = {
  daily: "bg-lime",
  sometimes: "bg-white",
  learning: "bg-pink text-white",
};

const tierNote = {
  daily: "every day",
  sometimes: "when the job calls for it",
  learning: "actively learning",
};

export default function Inventory() {
  return (
    <section id="inventory" className="relative overflow-hidden border-b-4 border-ink bg-sunny py-16 sm:py-24">
      <HalftoneBlock className="absolute -left-8 bottom-0 h-28 w-28 sm:h-56 sm:w-56 text-ink/20" />
      <div className="grid-paper absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label">equipment screen</p>
            <h2 className="mt-2 font-puff text-5xl leading-[0.85] sm:text-7xl">
              IN MY
              <br />
              <span className="text-cherry">INVENTORY</span>
            </h2>
          </div>
          <p className="max-w-[240px] font-hand text-xl">
            no star ratings. either I use it or I am busy learning it.
          </p>
        </div>

        {/* inventory grid — collectible items */}
        <div className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {inventory.map((item, i) => (
            <div
              key={item.name}
              data-reveal
              style={{
                "--rv-delay": `${i * 25}ms`,
                "--rv-rest": `${(i % 3) - 1}deg`,
              }}
              className={`sticker group relative flex items-center justify-between gap-2 px-3 py-3 ${
                tierStyle[item.tier]
              } transition-transform duration-150 hover:!rotate-0 hover:-translate-y-1 hover:shadow-hard`}
              title={tierNote[item.tier]}
            >
              <span className="font-mono text-[12px] font-bold sm:text-sm">{item.name}</span>
              {item.tier === "daily" && <Star size={16} fill="#0B0B0B" className="shrink-0 opacity-70" />}
              {item.tier === "learning" && <Sparkle size={14} fill="#FFD400" className="shrink-0" />}

              <span className="pointer-events-none absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-ink bg-ink px-2 py-0.5 font-mono text-[9px] uppercase text-cream opacity-0 transition-opacity group-hover:opacity-100">
                {tierNote[item.tier]}
              </span>
            </div>
          ))}
        </div>

        {/* legend + one personal fact tucked in */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="chip bg-lime">★ daily driver</span>
          <span className="chip bg-white">standard issue</span>
          <span className="chip bg-pink text-white">✦ learning</span>
        </div>

        <div
          data-reveal
          style={{ "--rv-rest": "-1deg" }}
          className="sticker-lg mt-8 inline-block max-w-xl bg-ink px-5 py-4 text-cream"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-lime">{facts[5].k}</p>
          <p className="mt-1 font-hand text-2xl leading-tight">{facts[5].v}</p>
        </div>
      </div>
    </section>
  );
}
