// Everything the site says lives here. Edit this file, not the components.

export const me = {
  name: "RAHUL",
  last: "BALODA",
  handle: "@wtfrowl",
  city: "Bengaluru, India",
  email: "rahulbaloda0725@gmail.com",
  socials: {
    github: "https://github.com/wtfrowl",
    linkedin: "https://linkedin.com/in/rahulbaloda",
    x: "https://x.com/wtfrowl",
  },
  statement:
    "I build web things. Full-stack, mostly at night, usually because something annoyed me and nobody else was going to fix it.",
  card: [
    { label: "BUILDING", value: "Web apps, dashboards, small tools that scratch an itch" },
    { label: "INTO", value: "Design, backend plumbing, startups, deeply weird side ideas" },
    { label: "CURRENTLY", value: "Senior Software Engineer at P360 · building for Indian farmers after hours" },
    { label: "BASED IN", value: "Bengaluru, India · IST, permanently" },
  ],
};

export { projects } from "./projects";

export const board = [
  {
    tag: "BUILDING",
    color: "lime",
    items: [
      "Mandi Bhav — more crops, more mandis, faster pages",
      "Pharma engagement tooling at P360 that does not feel like 2011",
    ],
  },
  {
    tag: "EXPERIMENTING",
    color: "pink",
    items: ["LLMs wired into boring internal tools", "Postgres, after years of loving Mongo"],
  },
  {
    tag: "THINKING ABOUT",
    color: "blue",
    items: ["Why every internal tool looks the same", "Offline-first apps for bad networks"],
  },
  {
    tag: "MAYBE",
    color: "sunny",
    items: ["A Hindi-first price app for more than just crops", "A CLI nobody asked for"],
  },
  {
    tag: "SOMEDAY",
    color: "cherry",
    items: ["Ship something with paying users", "Learn to draw properly"],
  },
];

export const episodes = [
  {
    ep: "EP. 01",
    title: "THE BEGINNING",
    when: "before 2020",
    where: "a laptop, too many tabs",
    color: "sunny",
    beats: [
      "Learned JavaScript the hard way: by breaking things, repeatedly.",
      "Discovered that CSS is basically a personality test.",
    ],
    sticker: "origin story",
  },
  {
    ep: "EP. 02",
    title: "SLICK WALLET",
    when: "Mar 2020 — Feb 2021",
    where: "Intern",
    color: "pink",
    beats: [
      "Built React + Tailwind UI components that real web3 users touched.",
      "Worked with UI/UX designers on accessible, not-ugly interfaces.",
      "Integrated DeFi protocol APIs and third-party services.",
    ],
    sticker: "first real users",
  },
  {
    ep: "EP. 03",
    title: "TCS",
    when: "from Jul 2021",
    where: "Developer · Full-time",
    color: "blue",
    beats: [
      "MERN dashboards handling sales data for 10+ products, filterable in realtime.",
      "REST APIs in Node + Express for all the CRUD that keeps them fed.",
      "RBAC middleware, so the right people see the right things.",
      "Schema-validation middleware across product types — complex rules, readable errors.",
    ],
    sticker: "the long arc",
  },
  {
    ep: "EP. 04",
    title: "P360",
    when: "current",
    where: "Senior Software Engineer",
    link: "https://www.p360.com/",
    color: "lime",
    beats: [
      "Pharma engagement, AI automation and insights — at the scale where a bad query is somebody's afternoon.",
      "Building products end to end now, not just tickets.",
      "Nights belong to the side quests. Mandi Bhav is winning.",
    ],
    sticker: "you are here",
  },
];

export const inventory = [
  { name: "React", tier: "daily" },
  { name: "JavaScript", tier: "daily" },
  { name: "Node.js", tier: "daily" },
  { name: "Express.js", tier: "daily" },
  { name: "MongoDB", tier: "daily" },
  { name: "Mongoose", tier: "daily" },
  { name: "Redux", tier: "daily" },
  { name: "Tailwind", tier: "daily" },
  { name: "REST APIs", tier: "daily" },
  { name: "HTML/CSS", tier: "daily" },
  { name: "Git", tier: "daily" },
  { name: "Docker", tier: "sometimes" },
  { name: "Redis", tier: "sometimes" },
  { name: "Kafka", tier: "sometimes" },
  { name: "Linux", tier: "sometimes" },
  { name: "Webpack", tier: "sometimes" },
  { name: "BitBucket", tier: "sometimes" },
  { name: "JSON", tier: "sometimes" },
  { name: "PostgreSQL", tier: "learning" },
  { name: "AI / LLM APIs", tier: "learning" },
];

export const sideQuests = [
  { title: "This website", note: "rebuilt at 1am because the old one was polite and boring", state: "done" },
  { title: "Whack-a-mole", note: "a game engine, if you squint hard enough", state: "done" },
  { title: "Two Spotify playlists", note: "one to focus, one to absolutely not", state: "ongoing" },
  { title: "A 404 page in Hindi", note: "galat link hein ji — still the best thing I have written", state: "done" },
  { title: "mandi-bhav.com", note: "started as a scraper and one confused cron job. now it serves 1,508 mandis.", state: "ongoing", link: "https://www.mandi-bhav.com/" },
  { title: "Learning to draw", note: "the doodles on this page are evidence of progress. sort of.", state: "ongoing" },
];

export const facts = [
  { k: "CURRENTLY LISTENING", v: "whatever the playlist below decides" },
  { k: "CURRENT OBSESSION", v: "making internal tools look designed on purpose" },
  { k: "LAST THING I BUILT", v: "this page. the doodles took longer than the code." },
  { k: "FAVOURITE TOOL", v: "console.log. I am not sorry." },
  { k: "LEARNING", v: "Postgres, and how to stop over-engineering" },
  { k: "ASK ME ABOUT", v: "Agmarknet data, WebRTC, RBAC, or why Mongo is not always the answer" },
  { k: "RIDICULOUS STAT", v: "~4 in-progress side projects at any moment. Steady state." },
  { k: "RANDOM THOUGHT", v: "every good product starts as somebody's annoyance" },
];

export const playlists = [
  "https://open.spotify.com/embed/playlist/0ge8gNISSJC59PaW1LL3Bo?utm_source=generator",
  "https://open.spotify.com/embed/playlist/3ggsXYWiAZ1laxA4USqhaQ?utm_source=generator",
];
