import { useEffect, useRef, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/**
 * Reveals every [data-reveal] element once, when it scrolls into view.
 * One observer for the whole page; re-scans when the DOM grows.
 */
export function useRevealAll() {
  useEffect(() => {
    const nodes = () => document.querySelectorAll("[data-reveal]:not(.is-in)");

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      nodes().forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const scan = () => nodes().forEach((n) => io.observe(n));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

/**
 * Returns a normalised pointer position (-1..1) for composition parallax.
 * Throttled to one rAF frame; disabled for touch + reduced motion.
 */
export function usePointerDrift() {
  const [drift, setDrift] = useState({ x: 0, y: 0 });
  const frame = useRef(0);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    const onMove = (e) => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        setDrift({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1,
        });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return drift;
}

/** Tilt-on-hover for a card. Returns props to spread + the live transform. */
export function useTilt(strength = 9) {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0, active: false });

  const onMove = (e) => {
    if (!ref.current || prefersReducedMotion() || !isFinePointer()) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ rx: -py * strength, ry: px * strength, active: true });
  };
  const onLeave = () => setT({ rx: 0, ry: 0, active: false });

  return {
    ref,
    handlers: { onPointerMove: onMove, onPointerLeave: onLeave },
    style: {
      transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
      transition: t.active ? "transform 80ms linear" : "transform 500ms cubic-bezier(.16,1.2,.3,1)",
    },
  };
}

/** Coarse viewport width bucket, for responsive stroke weights. */
export function useViewport() {
  const [w, setW] = useState(typeof window === "undefined" ? 1200 : window.innerWidth);
  useEffect(() => {
    let f = 0;
    const onResize = () => {
      if (f) return;
      f = requestAnimationFrame(() => {
        f = 0;
        setW(window.innerWidth);
      });
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      if (f) cancelAnimationFrame(f);
    };
  }, []);
  return { w, isMobile: w < 640, isTablet: w < 1024 };
}
