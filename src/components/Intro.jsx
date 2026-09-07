import { me, facts } from "../data/content";
import { Arrow, Emphasis, HalftoneBlock, Scribble, Sparkle, Star, Tape } from "./Doodles";
import profile from "/profile.jpg";

const statColors = ["bg-lime", "bg-pink text-white", "bg-blue text-white", "bg-sunny"];

export default function Intro() {
  return (
    <section id="about" className="relative overflow-hidden border-b-4 border-ink bg-blue py-16 sm:py-24">
      <HalftoneBlock className="absolute -right-8 -top-8 h-28 w-28 text-white/40 sm:h-52 sm:w-52" />
      <HalftoneBlock className="absolute -bottom-8 left-8 h-20 w-20 sm:h-40 sm:w-40 text-ink/30" />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
        <p className="section-label mb-4 text-white/80">character introduction card · 001</p>

        {/* the card */}
        <div
          data-reveal
          style={{ "--rv-rot": "-3deg", "--rv-rest": "-1.2deg" }}
          className="diecut relative bg-cream p-5 sm:p-8"
        >
          <Tape className="left-1/2 top-[-14px] -translate-x-1/2 rotate-2">no filter, no template</Tape>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-[200px_1fr] md:items-start">
            {/* portrait */}
            <div className="relative mx-auto w-[170px] sm:w-[200px]">
              <div className="sticker overflow-hidden bg-lime p-1.5">
                <img
                  src={profile}
                  alt="Rahul Baloda"
                  loading="lazy"
                  className="h-[170px] w-full rounded-lg border-2 border-ink object-cover sm:h-[200px]"
                />
              </div>
              <span className="chip absolute -bottom-4 -right-4 z-10 rotate-6 bg-pink text-white">{me.handle}</span>
              <Star size={38} className="absolute -left-5 -top-5 -rotate-12 animate-wobble" />
              <Sparkle size={20} className="absolute -right-4 top-8" fill="#FF2E88" />
            </div>

            {/* copy */}
            <div>
              <h2 className="font-puff text-4xl leading-[0.9] sm:text-6xl">
                HELLO,
                <br />
                I&apos;M RAHUL
                <Emphasis size={26} className="ml-2 inline-block -translate-y-4 rotate-12" />
              </h2>
              <Scribble width={200} stroke="#FF2E88" className="-mt-1 block" />

              <p className="mt-4 max-w-xl font-body text-base leading-relaxed sm:text-lg">{me.statement}</p>

              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {me.card.map((row, i) => (
                  <div
                    key={row.label}
                    data-reveal
                    style={{ "--rv-delay": `${i * 70}ms` }}
                    className={`sticker px-4 py-3 ${statColors[i % statColors.length]}`}
                  >
                    <dt className="font-slab text-[10px] uppercase tracking-widest opacity-80">{row.label}</dt>
                    <dd className="mt-1 font-body text-sm font-medium leading-snug">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <span className="absolute -bottom-9 right-6 z-10 hidden rotate-[-8deg] rounded-full border-2 border-ink bg-white px-3 py-0.5 font-hand text-lg sm:block">
            collect all 1 <Arrow size={44} className="inline-block rotate-[150deg]" />
          </span>
        </div>

        {/* personal detail ticker — small, human, not a dashboard */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facts.slice(0, 4).map((f, i) => (
            <div
              key={f.k}
              data-reveal
              style={{ "--rv-delay": `${i * 60}ms`, "--rv-rest": `${(i % 2 ? 1 : -1) * 0.8}deg` }}
              className="sticker bg-white px-4 py-3"
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-pink">{f.k}</p>
              <p className="mt-1 font-hand text-lg leading-tight">{f.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
