import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
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

export const Contact = () => {
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
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

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
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to launch your next campaign? Get in touch and let's discuss how we can help grow your brand.
            </p>
          </div>

          {/* Contact Info (LEFT) + Form (RIGHT) */}
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>

                <div className="space-y-5">
                  <a href="mailto:hellobrandfinity@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        Email Us
                      </p>
                      <p className="text-muted-foreground text-sm">
                        hellobrandfinity@gmail.com<br />
                        account@mybrandfinity.com
                      </p>
                    </div>
                  </a>

                  <a href="tel:0391340912" className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        Call Us
                      </p>
                      <p className="text-muted-foreground text-sm">
                        03-9134 0912
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Visit Us</p>
                      <p className="text-muted-foreground text-sm">
                        Menara Mutiara Central, 2, Jalan Desa Aman 1, Cheras Business Centre, 56100 Kuala Lumpur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Weekend: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="font-medium text-sm">Quick Response</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  We respond to all inquiries within 24 hours. For urgent matters, give us a call.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-6">
                  Start a Project
                </h3>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Contact No.
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Services
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {serviceOptions.map((service) => (
                        <label key={service} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      How did you find us?
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {referralOptions.map((option) => (
                        <label key={option} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="referral"
                            checked={formData.referral === option}
                            onChange={() =>
                              setFormData({ ...formData, referral: option })
                            }
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" variant="gradient" size="lg">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
