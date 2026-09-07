import { useEffect, useState } from "react";
import { Sparkle } from "./Doodles";

const sections = [
  { id: "about", label: "WHO" },
  { id: "projects", label: "BUILT" },
  { id: "now", label: "NOW" },
  { id: "story", label: "STORY" },
  { id: "inventory", label: "TOOLS" },
  { id: "quests", label: "QUESTS" },
  { id: "contact", label: "HI" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });

    let f = 0;
    const onScroll = () => {
      if (f) return;
      f = requestAnimationFrame(() => {
        f = 0;
        const max = document.body.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (f) cancelAnimationFrame(f);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* scroll progress — reads like a marker line */}
      <div className="h-1.5 w-full bg-cream">
        <div
          className="h-full border-r-2 border-ink bg-cherry transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="mx-auto mt-2 w-full max-w-6xl px-3 sm:px-6">
        <div className="sticker mx-auto flex w-fit max-w-full items-center gap-2 bg-cream/95 px-3 py-2 backdrop-blur-sm">
          <a
            href="#top"
            data-cursor="home"
            className="shrink-0 font-slab text-xs uppercase tracking-tight sm:text-sm"
          >
            <span className="bg-ink px-1.5 py-0.5 text-cream">wtf</span>
            <span className="text-pink">rowl</span>
          </a>

          <Sparkle size={16} className="hidden shrink-0 sm:block" fill="#FFD400" />

          <ul className="no-scrollbar -mr-1 flex flex-1 items-center gap-1 overflow-x-auto">
            {sections.map((s) => (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  data-cursor="jump"
                  className={`block rounded-full border-2 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide transition-colors sm:text-[11px] ${
                    active === s.id
                      ? "border-ink bg-ink text-cream"
                      : "border-transparent text-ink/70 hover:border-ink hover:bg-lime hover:text-ink"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
