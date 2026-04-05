import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const words = ["STRATEGY", "CREATIVE", "PERFORMANCE", "GROWTH"];

export const Hero = () => {
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [started, setStarted] = useState(false); // controls hole activation

  /* lock scroll during intro */
  useEffect(() => {
    document.body.style.overflow = revealed ? "auto" : "hidden";
  }, [revealed]);

  /* scroll, touch, or ↓ / Page Down drives intro */
  useEffect(() => {
    if (revealed) return;

    const step = () => {
      setStarted(true);
      setProgress((prev) => Math.min(prev + 40, 400));
    };

    const handleWheel = () => step();
    const handleTouch = () => step();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        step();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouch);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [revealed]);

  /* finish intro */
  useEffect(() => {
    if (progress >= 400 && !revealed) {
      setRevealed(true);
    }
  }, [progress, revealed]);

  const activeWord = Math.min(Math.floor(progress / 100), words.length - 1);
  const holeRadius = 80 + progress * 3;
  const scale = 1 + progress / 280;

  return (
    <section id="hero" className="relative bg-background">

      {/* ================= INTRO EFFECT ================= */}
      {!revealed && (
        <div className="fixed inset-0 z-50 pointer-events-none">

          {/* BLACK BACKGROUND (NO HOLE INITIALLY) */}
          <div
            className="absolute inset-0 bg-black"
            style={
              started
                ? {
                    WebkitMaskImage: `radial-gradient(
                      circle ${holeRadius}px at center,
                      transparent 0%,
                      transparent 97%,
                      black 100%
                    )`,
                    maskImage: `radial-gradient(
                      circle ${holeRadius}px at center,
                      transparent 0%,
                      transparent 97%,
                      black 100%
                    )`,
                    transition: "mask-image 0.15s linear",
                  }
                : undefined
            }
          />

          {/* TEXT CIRCLE (VISIBLE IMMEDIATELY) */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.18s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="relative w-72 h-72 md:w-[480px] md:h-[480px] flex items-center justify-center">

              {/* ROTATING TEXT */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  {/* Circle path */}
                  <path
                    id="circlePath"
                    d="M 100,100
                      m -75,0
                      a 75,75 0 1,1 150,0
                      a 75,75 0 1,1 -150,0"
                  />

                  {/* Gradient matching your button */}
                  <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#EC4899" />   {/* pink */}
                    <stop offset="50%" stopColor="#8B5CF6" />  {/* purple */}
                    <stop offset="100%" stopColor="#3B82F6" /> {/* blue */}
                  </linearGradient>
                </defs>

                {/* ROTATING GROUP */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="18s"
                    repeatCount="indefinite"
                  />

                  <text
                    fill="url(#textGradient)"
                    fontSize="11"
                    letterSpacing="3.7"
                    fontFamily="Sora, sans-serif"
                    fontWeight="600"
                  >
                    <textPath href="#circlePath">
                      360 MARKETING • 360 MARKETING • 360 MARKETING •
                    </textPath>
                  </text>
                </g>
              </svg>


              {/* CENTER WORD */}
              <p className="text-xl md:text-3xl font-semibold tracking-[0.35em] text-white">
                {words[activeWord]}
              </p>
            </div>
          </div>

          {/* SCROLL HINT */}
          {!started && (
            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-400 animate-pulse text-center px-4">
              Scroll or press <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-sans text-xs">↓</kbd> to explore
            </p>
          )}
        </div>
      )}

      {/* ================= HERO CONTENT ================= */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Grey overlay while intro not finished */}
        {!revealed && (
          <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm transition-opacity duration-500" />
        )}


        {/* gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-blue/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-purple/10 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Where Brands
              <br />
              <span className="gradient-text">Meet Infinity</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              We help brands grow beyond limits through
              <span className="text-foreground font-medium">
                {" "}
                thoughtful strategy, powerful creativity, and meaningful connections
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#contact">
                <Button variant="gradient" size="xl">
                  Start Your Campaign
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/works">
                <Button variant="outline" size="xl">
                  <Play className="w-4 h-4 mr-1" />
                  View Our Work
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* SCROLL SPACER (absorbs intro scroll) */}
      {!revealed && (
        <div
          aria-hidden
          style={{
            height: "100vh",
            pointerEvents: "none",
          }}
        />
      )}
    </section>
  );
};
