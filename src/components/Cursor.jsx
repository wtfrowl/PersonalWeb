import { useEffect, useRef } from "react";
import { isFinePointer, prefersReducedMotion } from "../hooks/useMotion";

/**
 * Custom cursor: a hard-outlined dot that snaps to the pointer, a lagging
 * ring that squashes on click, and a sparkle trail that only fires while
 * moving fast. Desktop only, and off entirely for reduced motion.
 */
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;

    document.body.classList.add("has-cursor");
    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const ringPos = { ...pos };
    let last = { ...pos, t: performance.now() };
    let scale = 1;
    let raf = 0;
    let sparkBudget = 0;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      const now = performance.now();
      const dt = Math.max(now - last.t, 1);
      const speed = Math.hypot(e.clientX - last.x, e.clientY - last.y) / dt;
      last = { x: e.clientX, y: e.clientY, t: now };

      // sparkles only when the pointer is actually flying around
      if (speed > 1.1 && sparkBudget <= 0) {
        spark(e.clientX, e.clientY);
        sparkBudget = 4;
      }
      sparkBudget -= 1;

      const hit = e.target.closest?.("[data-cursor]");
      if (label.current) {
        const text = hit?.dataset.cursor || "";
        label.current.textContent = text;
        label.current.style.opacity = text ? "1" : "0";
      }
      scale = hit ? 2.5 : 1;
    };

    const spark = (x, y) => {
      const s = document.createElement("span");
      s.className = "spark";
      const size = 8 + Math.random() * 8;
      s.style.cssText = `width:${size}px;height:${size}px;transform:translate(${x - size / 2}px,${
        y - size / 2
      }px) rotate(${Math.random() * 90}deg);opacity:1;transition:transform .6s ease-out,opacity .6s ease-out`;
      s.innerHTML =
        '<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 1.5 14 9l7.5 3-7.5 3-2 7.5L10 15l-7.5-3L10 9Z" fill="#FFD400" stroke="#0B0B0B" stroke-width="2.4" stroke-linejoin="round"/></svg>';
      document.body.appendChild(s);
      requestAnimationFrame(() => {
        s.style.transform = `translate(${x - size / 2 + (Math.random() * 40 - 20)}px,${
          y - size / 2 + 26
        }px) rotate(${Math.random() * 220 - 110}deg) scale(.3)`;
        s.style.opacity = "0";
      });
      setTimeout(() => s.remove(), 650);
    };

    const down = () => ring.current && (ring.current.dataset.down = "1");
    const up = () => ring.current && (ring.current.dataset.down = "");

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      const squash = ring.current?.dataset.down ? 0.72 : 1;
      if (dot.current) dot.current.style.transform = `translate(${pos.x - 5}px,${pos.y - 5}px)`;
      if (ring.current)
        ring.current.style.transform = `translate(${ringPos.x - 21}px,${ringPos.y - 21}px) scale(${
          (scale === 2.5 ? 1.5 : 1) * squash
        })`;
      if (label.current)
        label.current.style.transform = `translate(${ringPos.x + 22}px,${ringPos.y + 16}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="hidden md:block">
      <div ref={ring} className="cursor-ring h-[42px] w-[42px] rounded-full border-[3px] border-ink" />
      <div ref={dot} className="cursor-dot h-[10px] w-[10px] rounded-full bg-pink border-2 border-ink" />
      <div
        ref={label}
        className="cursor-dot rounded-full border-[3px] border-ink bg-sunny px-2 py-0.5 font-slab text-[10px] uppercase opacity-0 shadow-hard-sm transition-opacity"
      />
    </div>
  );
}
