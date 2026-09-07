import { board, facts } from "../data/content";
import { Arrow, HalftoneBlock, Sparkle, Star, Tape } from "./Doodles";

const tone = {
  lime: "bg-lime text-ink",
  pink: "bg-pink text-white",
  blue: "bg-blue text-white",
  sunny: "bg-sunny text-ink",
  cherry: "bg-cherry text-white",
};

const pinTilt = [-3, 2, -1.5, 3, -2];

export default function Board() {
  return (
    <section id="now" className="relative overflow-hidden border-b-4 border-ink bg-ink py-16 text-cream sm:py-24">
      <div className="grid-paper absolute inset-0 opacity-30" aria-hidden="true" />
      <HalftoneBlock className="absolute -left-10 top-1/3 h-28 w-28 sm:h-56 sm:w-56 text-lime/25" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-label text-cream/60">the desk, right now</p>
            <h2 className="mt-2 font-puff text-5xl leading-[0.85] text-cream sm:text-7xl">
              CURRENTLY
              <br />
              <span className="text-lime">BUILDING</span>
            </h2>
          </div>
          <p className="max-w-xs font-hand text-xl text-cream/90">
            a permanently messy work-in-progress board. it changes. that is the point.
            <Arrow size={60} className="mt-1 rotate-[130deg] [&_path]:stroke-lime" />
          </p>
        </div>

        {/* pinned notes */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((col, i) => (
            <div
              key={col.tag}
              data-reveal
              style={{
                "--rv-delay": `${i * 80}ms`,
                "--rv-rot": `${pinTilt[i % pinTilt.length] * 2}deg`,
                "--rv-rest": `${pinTilt[i % pinTilt.length]}deg`,
              }}
              className={`sticker-lg relative p-5 shadow-[7px_7px_0_0_rgba(255,241,214,.85)] ${tone[col.color]} transition-transform duration-200 hover:!rotate-0 hover:scale-[1.03]`}
            >
              <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-[3px] border-ink bg-white" />
              <h3 className="font-slab text-sm uppercase tracking-widest">{col.tag}</h3>
              <ul className="mt-3 space-y-2.5">
                {col.items.map((it) => (
                  <li key={it} className="flex gap-2 font-body text-sm leading-snug">
                    <span className="mt-[3px] shrink-0">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* one loose scrap, because real desks have those */}
          <div
            data-reveal
            style={{ "--rv-rest": "2deg" }}
            className="sticker-lg relative bg-cream p-5 text-ink shadow-[7px_7px_0_0_rgba(255,241,214,.85)]"
          >
            <Tape className="left-6 top-[-14px] -rotate-6">sticky note</Tape>
            <p className="font-hand text-2xl leading-tight">
              {facts[6].v}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Star size={26} />
              <Sparkle size={18} fill="#FF2E88" />
              <span className="font-mono text-[10px] uppercase tracking-wide text-ink/60">{facts[6].k}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
