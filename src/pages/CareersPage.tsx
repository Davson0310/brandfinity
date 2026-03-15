import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Briefcase, Users, Heart, Zap, Coffee, GraduationCap, Plane } from "lucide-react";

const openPositions = [
  {
    title: "Social Media Marketing",
    department: "Marketing",
    type: "Full-time / Internship",
    description: "Manage social media platforms, create engaging content, and grow brand presence online.",
  },
  {
    title: "Video Editor",
    department: "Multimedia",
    location: "Remote",
    type: "Full-time / Internship",
    description: "Edit and produce high-quality videos for campaigns, social media, and events.",
  },
  {
    title: "Graphic Designer",
    department: "Design",
    location: "Los Angeles, CA",
    type: "Full-time / Internship",
    description: "Design creative visuals for digital and print media to enhance brand identity.",
  },
  {
    title: "Influencer Marketing",
    department: "Marketing",
    location: "Remote",
    type: "Full-time / Internship",
    description: "Build and manage relationships with influencers to promote our brand effectively",
  },
  {
    title: "Event Marketing",
    department: "Creative",
    location: "New York, NY",
    type: "Full-time / Internship",
    description: "Plan and execute marketing strategies for events to boost engagement and visibility.",
  },
  
];

/*const benefits = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage for you and your family" },
  { icon: Coffee, title: "Flexible Work", description: "Hybrid work options with flexible hours to maintain work-life balance" },
  { icon: GraduationCap, title: "Learning Budget", description: "$2,000 annual budget for courses, conferences, and professional development" },
  { icon: Plane, title: "Unlimited PTO", description: "Take the time you need to recharge and come back refreshed" },
  { icon: Zap, title: "Latest Tools", description: "Access to premium software and tools to do your best work" },
  { icon: Users, title: "Team Events", description: "Regular team outings, retreats, and social events" },
];*/

const values = [
  { title: "Innovative Enviroment", description: "Work with a team that values creativity and fresh ideas." },
  { title: "Career Growth", description: "Opportunities for learning, mentorship, and advancement." },
  { title: "Dynamic Projects", description: "Be part of exciting campaigns and events that make an impact." },
  { title: "Collaborative Culture", description: "We believe in teamwork and open communication." },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding pb-16 relative overflow-hidden">
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-blue/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4" />
                Join Our Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Join Our Team at 
                <br />
                <span className="gradient-text">Brandfinity</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Join a team of passionate marketers, creatives, and strategists who are shaping the future of digital marketing.
              </p>
              <Button variant="gradient" size="xl" asChild>
                <a href="#positions">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

        `  {/* Values Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {values.map((value, index) => (
                  <div 
                    key={value.title}
                    className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4 text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Open Positions Section */}
          <section id="positions" className="section-padding scroll-mt-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Find your next opportunity and join our growing team
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-4">
                {openPositions.map((position) => (
                  <div 
                    key={position.title}
                    className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{position.title}</h3>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {position.department}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{position.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=hellobrandfinity@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          className="shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center gradient-bg rounded-3xl p-12 md:p-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTItNC0yLTQtMi00IDItNCAyLTIgMi0yIDQgMiA0IDIgNCAyIDQgNCAyIDQgMiA0LTIgNC0yIDItMiAyLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                    Don't See a Perfect Fit?
                  </h2>
                  <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                    We're always looking for talented people. Send us your resume and we'll reach out when the right opportunity opens up.
                  </p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hellobrandfinity@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                    <Button size="xl" className="bg-background text-foreground hover:bg-background/90">
                      Send Your Resume
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            </section>`
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;