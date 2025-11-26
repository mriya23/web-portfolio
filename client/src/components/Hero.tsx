import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/professional_hero_portrait_photo.png";

const skills = ["React", "TypeScript", "Node.js", "Design", "UI/UX"];

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm ";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20"
    >
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
              <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight">
                Creative
                <br />
                <span className="text-primary">Developer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Crafting beautiful digital experiences with modern web
                technologies. Passionate about design, code, and creating
                solutions that make a difference.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm font-medium px-3 py-1"
                  data-testid={`badge-skill-${skill.toLowerCase()}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-3xl" />
              <img
                src={heroImage}
                alt="Professional portrait"
                className="relative rounded-2xl w-full object-cover shadow-2xl aspect-[3/4]"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 md:mt-24 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="hover-elevate active-elevate-2 p-2 rounded-full"
            data-testid="button-scroll-down"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
