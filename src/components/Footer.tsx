import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Works", to: "/works" },
    { name: "Careers", to: "/careers" },
  ],
  support: [
    { name: "Contact", to: "/contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/brandfinity-sdn-bhd/posts/?feedView=all", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/hello.brandfinity", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/brandfinity_my?igsh=MWNnZ2p0d3J0ZWM5bw==", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-foreground to-[#0b0f1b] text-background">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-10 items-start">
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-6">
              <div className="inline-flex flex-col items-center">
                <Link to="/" className="inline-flex items-center justify-center rounded-2xl bg-white/95 p-0 shadow-lg shadow-black/20">
                  <img
                    src={logo}
                    alt="Brandfinity logo"
                    className="h-40 md:h-44 w-auto"
                  />
                </Link>
              </div>
              <div>
                <p className="text-background/75 max-w-sm text-lg leading-relaxed md:pt-1">
                  Transforming brands through innovative marketing solutions.
                  We're committed to delivering excellence in every campaign.
                </p>
                <div className="flex gap-3 mt-7">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/15 hover:border-white/20 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Brandfinity. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Crafted with passion for marketing
          </p>
        </div>
      </div>
    </footer>
  );
};
