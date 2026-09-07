import { episodes } from "../data/content";
import { Bolt, Emphasis, HalftoneBlock, SpeedLines, Star } from "./Doodles";

const tone = {
  lime: "bg-lime text-ink",
  pink: "bg-pink text-white",
  blue: "bg-blue text-white",
  sunny: "bg-sunny text-ink",
  cherry: "bg-cherry text-white",
};

export default function Episodes() {
  return (
    <section id="story" className="relative overflow-hidden border-b-4 border-ink bg-cream py-16 sm:py-24">
      <HalftoneBlock className="absolute -right-10 top-10 h-32 w-32 sm:h-64 sm:w-64 text-cherry/25" />
      <SpeedLines className="absolute left-0 top-24 h-32 w-1/3 opacity-20" />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="section-label">previously, on this career</p>
        <h2 className="mt-2 font-puff text-5xl leading-[0.85] sm:text-7xl">
          THE <span className="text-blue">EPISODE</span>
          <br />
          GUIDE
          <Emphasis size={30} className="ml-3 inline-block -translate-y-8 rotate-12" />
        </h2>
        <p className="mt-4 max-w-lg font-hand text-xl">
          same facts a résumé would give you, arranged like something you would actually watch.
        </p>

        <ol className="relative mt-12 max-w-3xl space-y-6 border-l-4 border-dashed border-ink pl-6 sm:pl-10">
          {episodes.map((e, i) => (
            <li
              key={e.ep}
              data-reveal
              style={{ "--rv-delay": `${i * 70}ms`, "--rv-rest": `${i % 2 ? 0.6 : -0.6}deg` }}
              className="relative"
            >
              {/* episode marker */}
              <span className="absolute -left-[42px] top-4 grid h-8 w-8 place-items-center rounded-full border-[3px] border-ink bg-white font-slab text-[10px] sm:-left-[58px] sm:h-10 sm:w-10 sm:text-xs">
                {i + 1}
              </span>

              <div className={`sticker-lg p-5 sm:p-6 ${tone[e.color]} transition-transform duration-200 hover:-translate-y-1`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-slab text-lg uppercase sm:text-2xl">
                    {e.ep} — {e.title}
                  </h3>
                  <span className="chip bg-white text-ink">{e.when}</span>
                </div>

                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide opacity-80">
                  {e.where}
                  {e.link && (
                    <>
                      {" · "}
                      <a href={e.link} target="_blank" rel="noreferrer" data-cursor="visit" className="scribble-link">
                        p360.com ↗
                      </a>
                    </>
                  )}
                </p>

                <ul className="mt-3 space-y-2">
                  {e.beats.map((b) => (
                    <li key={b} className="flex gap-2 font-body text-sm leading-snug sm:text-base">
                      <span className="mt-[2px] shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <span className="chip mt-4 rotate-[-2deg] bg-ink text-cream">{e.sticker}</span>
              </div>

              {i === 0 && <Star size={34} className="absolute -right-3 -top-4 rotate-12 animate-wobble" />}
              {i === episodes.length - 1 && (
                <Bolt size={38} className="absolute -right-3 bottom-2 rotate-6 animate-bob" />
              )}
            </li>
          ))}
        </ol>

        <p className="mt-6 pl-6 font-hand text-xl sm:pl-10">next episode: whatever I break this weekend.</p>
      </div>
    </section>
  );
}
