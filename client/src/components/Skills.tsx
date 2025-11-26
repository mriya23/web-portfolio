import { Card } from "@/components/ui/card";
import { Code2, Palette, Smartphone, Server, Database, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code2,
    skills: [
      { name: "React & Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js & Express", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "Authentication", level: 80 },
    ],
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Design Tools",
    icon: Palette,
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 75 },
      { name: "Tailwind CSS", level: 95 },
      { name: "UI/UX Design", level: 80 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 75 },
      { name: "Responsive Design", level: 95 },
      { name: "PWA Development", level: 80 },
      { name: "Mobile-First", level: 90 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layout,
    skills: [
      { name: "Vite & Webpack", level: 85 },
      { name: "Redux & Zustand", level: 80 },
      { name: "React Query", level: 85 },
      { name: "Framer Motion", level: 75 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency
            levels across various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card
                key={categoryIndex}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-skill-category-${categoryIndex}`}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                            data-testid={`progress-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
