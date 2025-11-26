import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
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

  return (
    <footer className="border-t bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl">Portfolio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creative developer passionate about building beautiful and
              functional web experiences. Let's create something amazing
              together.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left hover-elevate active-elevate-2 px-2 py-1 rounded-md w-fit"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Connect</h3>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover-elevate"
                    data-testid={`footer-social-${social.label.toLowerCase()}`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
