import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Eye, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { campaigns } from "@/data/campagin";

/* ===================== SELECT 6 FEATURED ===================== */
const featuredCampaigns = campaigns.filter(c => c.featured).slice(0, 6);

export const Works = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section id="works" className="relative py-16 md:py-20 
    bg-gradient-to-br 
    from-purple-100/10 
    via-indigo-500/10 
    to-background">
      <div className="container mx-auto px-4">

        {/* ===================== HEADER ===================== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Zap className="w-3.5 h-3.5" />
              Our Works
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Campaigns That
              <span className="gradient-text"> Made an Impact</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <Link to="/works">
              <Button variant="outline" size="lg" className="hidden md:flex group">
                View All
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* ===================== SLIDER ===================== */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-6">
            {featuredCampaigns.map((campaign, index) => (
              <div
                key={campaign.id}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
              >
                <div
                  onClick={() => navigate(`/works/${campaign.id}`)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]"
                >
                  {/* Image (always visible) */}
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark overlay ONLY on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category (always visible) */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 bg-white/95 text-xs font-semibold rounded-full shadow">
                      {campaign.category}
                    </span>
                  </div>

                  {/* Hover content ONLY */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                    <p className="text-white/70 text-xs uppercase mb-1">
                      {campaign.client} • {campaign.year}
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {campaign.title}
                    </h3>

                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Eye className="w-4 h-4" />
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== MOBILE CTA ===================== */}
        <div className="mt-8 text-center md:hidden">
          <Link to="/works">
            <Button variant="outline" size="lg" className="group">
              View All Campaigns
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};
