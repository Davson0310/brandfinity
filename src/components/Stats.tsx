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
        <div className="container mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="relative group min-w-0">
                <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 text-center border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 tabular-nums">
                    <CountUp end={stat.value} />
                  </p>
                  <p className="font-semibold text-foreground mb-1 text-sm sm:text-base leading-snug break-words px-0.5">
                    {stat.label}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{stat.description}</p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
    </section>
  );
};