import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/Web Video.mp4";

export const Hero = () => {
  return (
    <section id="hero" className="relative bg-background">
      <div className="relative min-h-[110vh] w-full overflow-hidden">
        {/* Local background video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src={heroVideo}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>

        {/* gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-blue/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-purple/10 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 min-h-[110vh] flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Where Brands
              <br />
              <span className="gradient-text">Meet Infinity</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-semibold max-w-2xl mx-auto mb-10">
              We help brands grow beyond limits through
              <span className="text-foreground font-bold">
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
    </section>
  );
};
