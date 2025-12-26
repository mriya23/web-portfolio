import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Server, Database, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Astro", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "REST API Integration", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Node.js & Express", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Cyber Security",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    skills: [
      { name: "Penetration Testing", level: 75 },
      { name: "Network Security", level: 70 },
      { name: "Secure Coding", level: 80 },
      { name: "Vulnerability Assessment", level: 75 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
            <motion.div 
              className="text-center mb-10 sm:mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Expertise
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Skills & <span className="animated-gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                data-testid={`card-skill-category-${categoryIndex}`}
                className="group"
              >
                <div className="relative h-full p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 card-hover overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 relative">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-lg">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4 relative">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-bar-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                            data-testid={`progress-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
