import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";

const heroImage = "/images/profile.png";

const skills = ["Flutter", "React", "Astro", "Node.js", "Python"];

const roles = ["Full-Stack Developer", "Mobile Developer", "UI/UX Enthusiast"];

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 pt-24 pb-12 relative overflow-hidden"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <div className="space-y-4">
              <motion.h1 
                className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm{" "}
                <span className="animated-gradient-text">Mriya</span>
              </motion.h1>
              
              <motion.div 
                className="h-12 md:h-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
                  {displayText}
                  <span className="animate-pulse text-primary">|</span>
                </p>
              </motion.div>

              <motion.p 
                className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Crafting beautiful digital experiences with modern technologies. 
                From mobile apps to web platforms, I bring ideas to life with 
                clean code and stunning design.
              </motion.p>
            </div>


            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => scrollToSection("#projects")}
                className="btn-modern group"
                data-testid="button-view-projects"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-6 py-3 rounded-xl font-medium border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="order-1 md:order-2 relative max-w-[280px] sm:max-w-[320px] md:max-w-none mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-purple-500/40 to-pink-500/40 rounded-3xl blur-2xl opacity-50 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10">
                <img
                  src={heroImage}
                  alt="Professional portrait"
                  className="w-full object-cover aspect-[3/4]"
                  data-testid="img-hero"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex justify-center mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 animate-bounce"
            data-testid="button-scroll-down"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
