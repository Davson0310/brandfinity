import { TrendingUp, Users, Award, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: TrendingUp,
    value: 1000,
    label: "Successful Campaign",
    description: "Across all channels",
  },
  {
    icon: Target,
    value: 150,
    label: "Happy Clients",
    description: "And counting",
  },
  {
    icon: Users,
    value: 5000,
    label: "Talents/KOLs/Influencers",
    description: "Year over year",
  },
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

export const Stats = () => {
  return (
    <section className="relative py-16 md:py-20 
    bg-gradient-to-br 
    from-purple-500/10 
    via-indigo-500/10 
    to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="relative group">
                <div className="bg-card rounded-2xl p-6 md:p-8 text-center border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    <CountUp end={stat.value} />
                  </p>
                  <p className="font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};