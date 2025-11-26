import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Traveling Kuy",
    description: "Aplikasi mobile destinasi wisata Banyumas dengan fitur pemesanan tiket online. Dilengkapi dengan informasi lengkap tempat wisata, harga tiket, dan sistem booking terintegrasi.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    tags: ["Flutter", "Dart", "REST API", "Firebase"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Trading Bot Platform",
    description: "Platform trading bot marketplace dengan fitur jual-beli bot trading otomatis. Dilengkapi dashboard analytics, backtesting, dan integrasi dengan berbagai exchange cryptocurrency.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Python", "WebSocket"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Indonesia Travel Website",
    description: "Website traveling Indonesia dengan informasi destinasi wisata, paket tour, dan sistem reservasi. Menampilkan keindahan wisata nusantara dari Sabang sampai Merauke.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Moro Audio",
    description: "Landing page profesional untuk usaha sewa tenda hajatan dan sound system. Menampilkan katalog produk, paket layanan, dan form pemesanan untuk berbagai acara.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    tags: ["Astro", "Tailwind", "JavaScript"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Coffee Shop Landing Page",
    description: "Landing page modern untuk coffee shop dengan desain elegan. Menampilkan menu, lokasi, dan ambiance kafe yang mengundang pengunjung untuk datang.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    tags: ["React", "Tailwind", "Framer Motion"],
    category: "design",
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
