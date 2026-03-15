import { LayoutGrid, TrendingUp, Wand, PrinterCheck, Video,TvMinimalPlay, Zap,CalendarCheck, } from "lucide-react";

import { Link } from "react-router-dom";

const services = [
  {
    id: "social-media",
    title: "Social Media Management",
    shortDesc:"Manage and grow your brand’s presence across social platforms with engaging content.",
    description: "Manage and grow your brand’s presence across social platforms with engaging content.",
    icon: LayoutGrid,
  },
  {
    id: "campaign-creative",
    title: "Campaign Ideation & Creative",
    shortDesc: "Develop innovative campaign ideas and creative concepts that capture attention.",
    description: "Develop innovative campaign ideas and creative concepts that capture attention.",
    icon: Wand,
  },
  {
    id: "influncer",
    title: "Influencer Campaign Management",
    shortDesc: "Connect with influencers and manage collaborations to amplify your brand reach.",
    description: "Connect with influencers and manage collaborations to amplify your brand reach.",
    icon: TrendingUp,
  },
  {
    id: "event-management",
    title: "Event Management",
    shortDesc: "Plan and execute impactful events that leave lasting impressions.",
    description: "Plan and execute impactful events that leave lasting impressions.",
    icon: CalendarCheck,
  },
  {
    id: "digital-marketintg",
    title: "Digital Marketing",
    shortDesc: "Drive online visibility through targeted strategies and performance marketing.",
    description: "Drive online visibility through targeted strategies and performance marketing.",
    icon: TvMinimalPlay,
  },
  {
    id: "prints-production",
    title: "Prints Production",
    shortDesc: "Create high-quality printed materials that reflect your brand identity.",
    description: "Create high-quality printed materials that reflect your brand identity.",
    icon: PrinterCheck,
  },
  {
    id: "video-production",
    title: "Video Production",
    shortDesc: "Produce compelling videos to tell your brand story and engage your audience.",
    description: "Produce compelling videos to tell your brand story and engage your audience.",
    icon: Video,
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Zap className="w-3.5 h-3.5" />
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>

          <p className="text-muted-foreground">
            End-to-end digital solutions to help your brand grow.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                to={`/services`}
                className="group cursor-pointer"
              >
                <div
                  className="
                    border border-dashed border-border
                    rounded-2xl
                    p-10
                    text-center
                    transition-all duration-300
                    hover:bg-primary/5
                    hover:-translate-y-1
                  "
                >
                  {/* Icon */}
                  <Icon className="w-12 h-12 mx-auto text-primary mb-6 transition-transform duration-300 group-hover:-translate-y-1" />

                  {/* Title */}
                  <h3 className="text-sm font-semibold uppercase tracking-wide">
                    {service.title}
                  </h3>

                  {/* Hover underline */}
                  <div
                    className="
                      h-1
                      w-0
                      bg-primary
                      mx-auto
                      mt-4
                      transition-all duration-300
                      group-hover:w-10
                    "
                  />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
