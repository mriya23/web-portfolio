import { motion } from "framer-motion";
import { Code2, Users, Zap, Target, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "6+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive, performant web applications with modern frameworks like React, Next.js, and Astro.",
  },
  {
    icon: Zap,
    title: "Mobile Development", 
    description: "Creating cross-platform mobile apps with Flutter that deliver native-like experiences.",
  },
  {
    icon: Target,
    title: "Backend Systems",
    description: "Developing robust APIs and server-side solutions with Node.js, Python, and PostgreSQL.",
  },
  {
    icon: Users,
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that prioritize user experience and accessibility.",
  },
];

const expertise = [
  "React",
  "Next.js",
  "Astro",
  "Flutter",
  "Dart", 
  "Node.js",
  "Express",
  "Python",
  "Java",
  "C++",
  "TypeScript",
  "JavaScript",
  "PHP",
  "Laravel",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "Supabase",
  "REST API",
  "Arduino",
  "IoT & MQTT",
  "Git & GitHub",
  "Docker",
  "Penetration Testing",
  "Network Security",
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
                About Me
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                Turning Ideas Into<br />
                <span className="text-primary">Digital Reality</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              A passionate developer focused on creating impactful digital solutions 
              that combine clean code with exceptional user experiences.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-3 sm:gap-6 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group p-4 sm:p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Expertise List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl border border-border/50 bg-card/30"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/3">
              <h3 className="font-heading font-bold text-2xl mb-3">
                Technical Expertise
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Technologies and tools I work with to bring projects to life.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/50 border border-border/50 text-xs sm:text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
