import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Share2,
  TrendingUp,
  Search,
  PrinterCheck,
  Video,
  TvMinimalPlay,
  CalendarCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "social-media",
    title: "Social Media Management",
    description:
      "Manage and grow your brand's presence across social platforms with engaging content.",
    icon: Share2,
  },
  {
    id: "campaign-creative",
    title: "Campaign Ideation & Creative",
    description:
      "Develop innovative campaign ideas and creative concepts that capture attention.",
    icon: TrendingUp,
  },
  {
    id: "influencer",
    title: "Influencer Campaign Management",
    description:
      "Connect with influencers and manage collaborations to amplify your brand reach.",
    icon: Search,
  },
  {
    id: "event-management",
    title: "Event Management",
    description:
      "Plan and execute impactful events that leave lasting impressions.",
    icon: CalendarCheck,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Drive online visibility through targeted strategies and performance marketing.",
    icon: TvMinimalPlay,
  },
  {
    id: "prints-production",
    title: "Prints Production",
    description:
      "Create high-quality printed materials that reflect your brand identity.",
    icon: PrinterCheck,
  },
  {
    id: "video-production",
    title: "Video Production",
    description:
      "Produce compelling videos to tell your brand story and engage your audience.",
    icon: Video,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="section-padding pb-12 relative overflow-hidden">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-coral-light blur-3xl opacity-50" />
          <div className="absolute top-40 left-0 w-[400px] h-[400px] rounded-full bg-magenta-light blur-3xl opacity-40" />
          <div className="absolute top-3/4 -left-32 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute top-20 left-1/4 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-[260px] h-[260px] bg-fuchsia-500/10 rounded-full blur-2xl" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-purple/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5 inline mr-1.5" />
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Solutions for Your{" "}
                <span className="gradient-text">Brand Growth</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From strategy to execution, we offer comprehensive marketing
                solutions designed to grow your brand and deliver measurable
                results.
              </p>
            </div>
          </div>

          {/* SERVICES GRID – CONSISTENT 2 COLUMNS */}
          <section className="section-padding py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    id={service.id}
                    className="group"
                  >
                    <div className="relative h-full rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">


                      {/* Header */}
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <span className="font-display text-4xl font-bold text-primary/10">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Content */}
                      <h2 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-primary">
                        {service.title}
                      </h2>

                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      {/* CTA */}
                    <Link to="/contact">
                      <Button
                        size="sm"
                        className="
                          w-full
                          border border-border
                          bg-transparent
                          text-foreground
                          hover:text-primary-foreground
                          hover:border-transparent
                          hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-secondary
                          transition-all duration-300
                          group/btn
                        "
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center gradient-bg rounded-3xl p-12 md:p-16 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                    Ready to Grow Your Brand?
                  </h2>
                  <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                    Get a free consultation with our strategy team and start
                    scaling your brand today.
                  </p>
                  <Link to="/contact">
                    <Button
                      size="xl"
                      className="bg-background text-foreground hover:bg-background/90"
                    >
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
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

export default ServicesPage;
