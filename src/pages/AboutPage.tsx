import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Target, Award, Heart, Rocket, Globe, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000, label: "Successful Campaigns" },
  { value: 150, label: "Clients" },
  { value: 5000, label: "Talents/KOLs/Influencers" },
];

const CountUp = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let started = false;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;

        let start = 0;
        const duration = 1500;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-36">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          {/* Existing bubbles */}
          <div className="absolute top-3/4 -left-32 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-float z-[1]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-blue/20 rounded-full blur-3xl animate-float z-[1]" style={{ animationDelay: '-2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-purple/10 rounded-full blur-3xl z-[1]" />

          {/* New bubbles */}
          <div className="absolute top-20 left-1/4 w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-1/3 w-[260px] h-[260px] bg-fuchsia-500/10 rounded-full blur-2xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                About Our Agency
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Integrated Marketing Solutions for<span className="gradient-text"> Forward-Thinking Brands</span>
              </h1>
            </div>
          </div>


          {/* Stats Section */}
          <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10 max-w-4xl mx-auto">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center min-w-0 px-2 sm:px-1"
                  >
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2 tabular-nums">
                      <CountUp end={stat.value} />
                    </p>
                    <p className="text-muted-foreground font-medium text-sm sm:text-base leading-snug break-words hyphens-auto">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    Our Story
                  </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Where Brands Meet Infinity
                    <br/><br/>
                    <span className="gradient-text">Brandfinity</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      is a full-service advertising and marketing agency delivering integrated solutions for 
                      brands seeking sustainable growth and long-term impact. Our capabilities span <b>creative 
                      advertising, video production, KOL & influencer marketing, event management, and high-quality 
                      print production</b> — all seamlessly executed under one roof.
                    </p>
                    <p>
                      We partner closely with brands to develop strategic, results-driven campaigns 
                      that enhance visibility, strengthen credibility, and create meaningful engagement across platforms.
                    </p>
                    <p>
                      With a commitment to excellence and precision in execution, Brandfinity transforms brand objectives 
                      into impactful experiences.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                      alt="Our team at work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-background">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&auto=format&fit=crop&q=80" 
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To help brands grow beyond limits through strategy-led creativity and meaningful connections. Turning ideas into impact and influence into long-term growth.
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <Rocket className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a trusted growth partner where brands meet infinite possibilities, shaping future-ready brands that connect authentically and lead with purpose.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;