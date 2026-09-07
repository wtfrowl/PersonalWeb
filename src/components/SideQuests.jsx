import { sideQuests, facts, playlists } from "../data/content";
import { Arrow, HalftoneBlock, Heart, Scribble, Sparkle, Tape } from "./Doodles";

const stateStyle = {
  done: { chip: "bg-lime", label: "CLEARED" },
  ongoing: { chip: "bg-sunny", label: "IN PROGRESS" },
  abandoned: { chip: "bg-white", label: "ABANDONED (respectfully)" },
};

export default function SideQuests() {
  return (
    <section id="quests" className="relative overflow-hidden border-b-4 border-ink bg-pink py-16 text-white sm:py-24">
      <HalftoneBlock className="absolute -right-10 -top-8 h-32 w-32 sm:h-64 sm:w-64 text-white/35" />
      <HalftoneBlock className="absolute -left-10 bottom-10 h-24 w-24 sm:h-44 sm:w-44 text-ink/25" />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="section-label text-white/80">optional content</p>
        <h2 className="mt-2 font-puff text-5xl leading-[0.85] text-white sm:text-7xl">
          SIDE
          <br />
          QUESTS
        </h2>
        <Scribble width={220} stroke="#FFD400" className="mt-1 block" />
        <p className="mt-4 max-w-lg font-hand text-xl text-white">
          things that will never make it onto a résumé, which is exactly why they belong here.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {sideQuests.map((q, i) => {
            const s = stateStyle[q.state];
            return (
              <li
                key={q.title}
                data-reveal
                style={{ "--rv-delay": `${i * 60}ms`, "--rv-rest": `${i % 2 ? 1 : -1}deg` }}
                className="sticker relative bg-cream px-5 py-4 text-ink transition-transform duration-200 hover:!rotate-0 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-slab text-base uppercase leading-tight sm:text-lg">
                    {q.link ? (
                      <a
                        href={q.link}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="open it"
                        className="scribble-link"
                      >
                        {q.title} <span className="font-mono text-sm">↗</span>
                      </a>
                    ) : (
                      q.title
                    )}
                  </h3>
                  <span className={`chip shrink-0 ${s.chip}`}>{s.label}</span>
                </div>
                <p className="mt-2 font-hand text-lg leading-snug text-ink/85">{q.note}</p>
                {q.state === "abandoned" && (
                  <span className="absolute -bottom-3 right-4 z-10 rounded-full border-2 border-ink bg-white px-2 font-hand text-sm text-ink/70">RIP</span>
                )}
              </li>
            );
          })}
        </ul>

        {/* currently listening — real, not a fake widget */}
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div data-reveal className="sticker-lg relative bg-ink p-5">
            <Tape className="left-8 top-[-14px] rotate-3 text-ink">on repeat</Tape>
            <p className="font-mono text-[10px] uppercase tracking-widest text-lime">{facts[0].k}</p>
            <h3 className="mt-1 font-puff text-3xl leading-none text-cream sm:text-4xl">
              THE SOUNDTRACK
              <Sparkle size={20} className="ml-2 inline-block" fill="#FFD400" />
            </h3>
            <div className="mt-4 space-y-2">
              {playlists.map((src, i) => (
                <iframe
                  key={src}
                  src={src}
                  title={`Playlist ${i + 1}`}
                  loading="lazy"
                  className="h-[80px] w-full rounded-xl border-[3px] border-cream"
                  allow="clipboard-write; encrypted-media; picture-in-picture"
                />
              ))}
            </div>
          </div>

          <div className="grid content-start gap-4">
            {facts.slice(1, 4).map((f, i) => (
              <div
                key={f.k}
                data-reveal
                style={{ "--rv-delay": `${i * 70}ms`, "--rv-rest": `${i % 2 ? -1 : 1}deg` }}
                className="sticker bg-white px-5 py-4 text-ink"
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue">{f.k}</p>
                <p className="mt-1 font-hand text-xl leading-tight">{f.v}</p>
              </div>
            ))}
            <div className="flex items-center gap-2 pl-2">
              <Heart size={26} fill="#FFD400" />
              <span className="font-hand text-lg">
                still here? impressive. contact info below <Arrow size={40} rotate={22} className="inline-block [&_path]:stroke-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
