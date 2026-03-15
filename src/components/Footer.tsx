import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook } from "lucide-react";

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
  { icon: Facebook, href: "https://www.facebook.com/hello.brandfinity", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/brandfinity_my?igsh=MWNnZ2p0d3J0ZWM5bw==", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold gradient-text">
              Brandfinity
            </Link>
            <p className="mt-4 text-background/70 max-w-md">
              Transforming brands through innovative marketing solutions. 
              We're committed to delivering excellence in every campaign.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
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
            <h4 className="font-semibold mb-4">Support</h4>
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

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
