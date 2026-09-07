import { useRevealAll } from "./hooks/useMotion";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Board from "./components/Board";
import Episodes from "./components/Episodes";
import Inventory from "./components/Inventory";
import SideQuests from "./components/SideQuests";
import Footer from "./components/Footer";

export default function App() {
  useRevealAll();

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border-[3px] focus:border-ink focus:bg-lime focus:px-4 focus:py-2 focus:font-slab focus:text-xs"
      >
        skip to content
      </a>
      <Cursor />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Intro />
        <Projects />
        <Board />
        <Episodes />
        <Inventory />
        <SideQuests />
      </main>
      <Footer />
    </>
  );
}
