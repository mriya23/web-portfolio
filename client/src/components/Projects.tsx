import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization, custom reports, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Chart.js", "Node.js"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern online shopping experience with product management, cart functionality, and secure payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Chat App",
    description: "Real-time messaging application with end-to-end encryption, media sharing, and group chat capabilities.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "WebSocket"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Creative Portfolio",
    description: "Stunning portfolio website featuring interactive animations, case studies, and a unique design approach.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop",
    tags: ["React", "Framer Motion", "GSAP"],
    category: "design",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management Tool",
    description: "Collaborative project management platform with kanban boards, time tracking, and team productivity analytics.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Platform",
    description: "Feature-rich social networking site with posts, stories, real-time notifications, and user engagement metrics.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "Web", "Mobile", "Design"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All"
      ? true
      : project.category === activeCategory.toLowerCase()
  );

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work and creative endeavors across web,
            mobile, and design projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              data-testid={`button-filter-${category.toLowerCase()}`}
              className="font-medium"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover-elevate transition-all duration-300"
              data-testid={`card-project-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-background/90 backdrop-blur-sm"
                    data-testid={`button-project-live-${index}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-background/90 backdrop-blur-sm"
                    data-testid={`button-project-github-${index}`}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold text-xl">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tag-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
