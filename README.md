# wtfrowl.dev — personal site

An anime-pop / Y2K / graffiti scrapbook, not a portfolio template.
React + Vite + Tailwind. No animation libraries — motion is CSS
keyframes plus a couple of small hooks.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Where things live

- `src/data/content.js` — all the copy: intro card, WIP board, episode
  timeline, inventory, side quests, personal details. Edit this, not
  the components.
- `src/data/projects.js` — the project panels. `live: false` renders an
  honest "deployment retired" card instead of a broken link.
- `src/components/Doodles.jsx` — the graphic library: stars, bolts,
  hearts, arrows, bursts, speech bubbles, speed lines, tape, and
  `PuffText` (the layered sticker lettering).
- `src/hooks/useMotion.js` — scroll reveal, pointer drift, card tilt.
  Everything checks `prefers-reduced-motion` first.
- `src/index.css` — the design system: sticker/die-cut borders,
  halftone and stripe textures, hard shadows, cursor, reveal states.

## Adding a project

Drop a screenshot in `public/shots/`, add an entry to
`src/data/projects.js`. `notes` are the handwritten annotations —
`x`/`y` are CSS positions over the screenshot, `r` is rotation.

## Conventions

- Flat colours only, no gradients. Palette is in `tailwind.config.js`.
- Every section is its own saturated colour block with a 4px black rule.
- Decoration is allowed to be busy; the reading order never is.
