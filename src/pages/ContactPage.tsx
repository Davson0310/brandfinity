import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const serviceOptions = [
  "Social Media",
  "Influencers",
  "Ads",
  "SEO",
  "Website",
  "Branding",
  "Customise Project",
];

const referralOptions = ["Search", "Word of mouth", "Social Media"];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
    referral: "",
  });

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, company, email, phone, services, message, referral } = formData;

    // Construct WhatsApp message
    let text = `*New Project Inquiry*\n`;
    text += `Name: ${fullName}\n`;
    if (company) text += `Company: ${company}\n`;
    text += `Email: ${email}\n`;
    if (phone) text += `Phone: ${phone}\n`;
    if (services.length) text += `Services: ${services.join(", ")}\n`;
    text += `Message: ${message}\n`;
    if (referral) text += `Referral: ${referral}\n`;

    const whatsappNumber = "601116739323"; 
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank"); // open WhatsApp in new tab

    // Optional: Reset form after sending
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      services: [],
      message: "",
      referral: "",
    });
};


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding pb-16 relative overflow-hidden">
           {/* Existing bubbles */}
          <div className="absolute top-3/4 -left-32 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
            
          {/* New bubbles */}
          <div className="absolute top-20 left-1/4 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-[260px] h-[260px] bg-fuchsia-500/10 rounded-full blur-2xl" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-purple/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's
                <span className="gradient-text"> Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your brand? Our team is here to help you create campaigns that drive real results.
              </p>
            </div>
          </div>

          {/* Quick Contact Info */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold">03-9134 0912</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <a href="mailto:hellobrandfinity@gmail.com" className="block font-semibold text-sm hover:text-primary transition-colors">hellobrandfinity@gmail.com</a>
                    <a href="mailto:account@mybrandfinity.com" className="block font-semibold text-sm hover:text-primary transition-colors">account@mybrandfinity.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold">Menara Mutiara Central, 2, Jalan Desa Aman 1, Cheras Business Centre, 56100 Kuala Lumpur</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Business Hours</p>
                    <p className="font-semibold">Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form & Info Section */}
          <section className="section-padding pt-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex justify-center">
                  {/* Form */}
                  <div className="w-full max-w-3xl">
                    <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <h2 className="text-2xl font-bold">Start a Project</h2>
                      </div>
                      <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name *</label>
                            <Input
                              id="fullName"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="Full Name"
                              required
                              className="h-12"
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Company"
                              className="h-12"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email"
                            required
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">Contact No.</label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Contact No."
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-3">Services</label>
                          <div className="flex flex-wrap gap-3">
                            {serviceOptions.map((service) => (
                              <label
                                key={service}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.services.includes(service)}
                                  onChange={() => handleServiceToggle(service)}
                                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                                />
                                <span className="text-sm">{service}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your project..."
                            required
                            className="min-h-[120px] resize-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-3">How did you find us?</label>
                          <div className="flex flex-wrap gap-4">
                            {referralOptions.map((option) => (
                              <label
                                key={option}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="referral"
                                  checked={formData.referral === option}
                                  onChange={() => setFormData({ ...formData, referral: option })}
                                  className="w-4 h-4 border-border text-primary focus:ring-primary"
                                />
                                <span className="text-sm">{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <Button type="submit" variant="gradient" size="xl" className="w-full sm:w-auto">
                          Send Message
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </form>
                    </div>
                  </div>
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

export default ContactPage;