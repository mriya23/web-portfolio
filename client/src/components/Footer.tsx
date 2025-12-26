import { Github, Linkedin, Mail, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/mriya23" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mochamad-rizqy-jayakarta/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mochrizqy.j" },
  { icon: Mail, label: "Email", href: "mailto:riskijayakarta2310@gmail.com" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Brand & Description */}
            <div className="md:col-span-5 space-y-4">
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-2xl">
                  Mochamad Rizqy Jayakarta
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                  Full-stack developer specializing in building exceptional digital experiences. 
                  Turning ideas into elegant, functional solutions.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2.5 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground border border-border/50 hover:border-primary transition-all duration-200"
                      data-testid={`footer-social-${social.label.toLowerCase()}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

              {/* Navigation */}
              <div className="md:col-span-3 space-y-4">
                <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground/80">
                  Navigation
                </h4>
                <nav className="flex flex-col gap-3">
                  {quickLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left w-fit"
                      data-testid={`footer-link-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

            {/* Contact Info */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground/80">
                Get in Touch
              </h4>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">
                  riskijayakarta2310@gmail.com
                </p>
                <p className="text-muted-foreground">
                  Purwokerto, Central Java, Indonesia
                </p>
                <p className="text-muted-foreground">
                  Available for freelance opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-6">
          <div className="flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
