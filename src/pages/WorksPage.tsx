import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SmartImage from "@/components/SmartImage";
import { campaigns } from "@/data/campagin";


// Category filter (commented out)
// const categories = [
//   "All",
//   "Digital Marketing",
//   "Social Media Management",
//   "Panasonic",
// ];

const WorksPage = () => {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  // const filteredCampaigns =
  //   selectedCategory === "All"
  //     ? campaigns
  //     : campaigns.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        <section className="section-padding pb-12 relative overflow-hidden">
           {/* Existing bubbles */}
          <div className="absolute top-3/4 -right-32 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-pink/20 rounded-full blur-3xl animate-float z-[1]" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-blue/20 rounded-full blur-3xl animate-float z-[1]" style={{ animationDelay: '-2s' }} />
          <div className="absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-purple/10 rounded-full blur-3xl z-[1]" />
          {/* New bubbles */}
          <div className="absolute top-20 right-1/4 w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-1/3 w-[260px] h-[260px] bg-fuchsia-500/10 rounded-full blur-2xl" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-blue/10 rounded-full blur-3xl" />
          

          <div className="container mx-auto px-4 relative z-10">
            {/* Hero */}
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5 inline mr-1.5" />
                Our Portfolio
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Works</span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Explore our collection of successful marketing campaigns.
              </p>
            </div>

            {/* Category filter (commented out)
            <div className="flex flex-wrap justify-center gap-2 mt-8 mb-16">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "gradient-bg text-primary-foreground shadow-lg"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            */}

            {/* Grid */}
            <div className="columns-1 md:columns-2 gap-8 space-y-8 mt-8 mb-16">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  onClick={() => navigate(`/works/${campaign.id}`)}
                  className="group break-inside-avoid rounded-3xl overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <div className="relative overflow-hidden">

                    {/* Image only (always visible) */}
                    <SmartImage
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category badge (hover only) */}
                    <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="px-4 py-2 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold rounded-full">
                        {campaign.client}
                      </span>
                    </div>

                    {/* Eye icon (hover only) */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                        <Eye className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Title + client + year (hover only) */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                      <p className="text-white/60 text-sm uppercase mb-2">
                        {campaign.client} • {campaign.year}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {campaign.title}
                      </h3>
                    </div>

                  </div>
                </div>
              ))}
            </div>


            {/* CTA */}
            <div className="mt-20 text-center">
              <div className="inline-flex flex-col items-center gap-4 p-8 md:p-12 rounded-3xl bg-muted/50 border">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Ready to Create Your Success Story?
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Let’s discuss how we can help your brand achieve similar results.
                </p>
                <Button variant="gradient" size="xl">
                  Start Your Campaign
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorksPage;
