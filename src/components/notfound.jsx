import { Link } from "react-router-dom";
import { Bolt, Burst, PuffText, Star } from "./Doodles";
import { useViewport } from "../hooks/useMotion";

export default function NotFound() {
  const { isMobile } = useViewport();

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-cherry px-4 py-16 text-white">
      <div className="halftone-lg absolute -left-10 top-10 h-32 w-32 sm:h-64 sm:w-64 text-white/30" aria-hidden="true" />
      <div className="stripes absolute inset-x-0 bottom-0 h-24 text-ink/30" aria-hidden="true" />

      <div className="relative text-center">
        <span aria-hidden="true" className="block">
          <PuffText fill="#FFD400" outer={isMobile ? 11 : 22} inner={isMobile ? 7 : 15} className="text-[28vw] leading-none lg:text-[16rem]">
            404
          </PuffText>
        </span>
        <h1 className="sr-only">404 — page not found</h1>

        <p className="mt-6 font-puff text-4xl leading-none sm:text-6xl">GALAT LINK HEIN JI</p>
        <p className="mt-3 font-hand text-2xl">please check karlo… ya phir wapas chalein?</p>

        <Link to="/" className="btn mt-8 bg-lime text-ink" data-cursor="home">
          TAKE ME BACK ↩
        </Link>

        <Star size={54} className="absolute -left-6 top-4 -rotate-12 animate-wobble" />
        <Bolt size={44} className="absolute -right-4 top-10 rotate-12 animate-bob" />
        <Burst size={90} fill="#1E4FFF" className="absolute -bottom-6 -right-8 hidden sm:grid">
          <span className="text-[9px] text-white">OOPS!</span>
        </Burst>
      </div>
    </div>
  );
}
