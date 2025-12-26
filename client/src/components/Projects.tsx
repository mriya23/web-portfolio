import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Palette, Cpu } from "lucide-react";
import { ProjectDetailModal } from "./ProjectDetailModal";

const projects = [
  {
    title: "NICI-POS",
    description: "Modern Point of Sale (POS) application designed for retail businesses, cafes, restaurants, and SMEs. Features fast transactions, analytics dashboard, multi-user support, Bluetooth receipt printing, and cloud sync with Supabase.",
    image: "/images/nici_pos.png",
    tags: ["Flutter", "Dart", "Supabase", "SQLite"],
    category: "mobile",
    icon: Smartphone,
    color: "from-violet-500 to-purple-500",
    liveUrl: "#",
    githubUrl: "https://github.com/mriya23/NICI-POS",
    featured: true,
  },
  {
    title: "Traveling Kuy",
    description: "Mobile app for Banyumas tourist destinations with online ticket booking features. Complete with comprehensive tourist information, ticket pricing, and integrated booking system.",
    image: "/images/traveling_kuy.png",
    tags: ["Flutter", "Dart", "REST API", "Firebase"],
    category: "mobile",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Trading Bot Platform",
    description: "Trading bot marketplace platform with automated trading bot buying and selling features. Equipped with analytics dashboard, backtesting, and integration with various cryptocurrency exchanges.",
    image: "/images/trading_bot.png",
    tags: ["React", "Node.js", "Python", "WebSocket"],
    category: "web",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "TempeFlow",
    description: "Modern e-commerce platform for Tempe Jaya Mandiri. Enables customers to order various tempe variants online with a seamless shopping experience, integrated with Midtrans payment gateway.",
    image: "/images/tempe.png",
    tags: ["Laravel", "TailwindCSS", "MySQL", "Midtrans"],
    category: "web",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    liveUrl: "#",
    githubUrl: "https://github.com/mriya23/tempeflow",
    featured: true,
  },
  {
    title: "Indonesia Travel Website",
    description: "Indonesian travel website with tourist destination information, tour packages, and reservation system. Showcasing the beauty of Indonesian tourism from Sabang to Merauke.",
    image: "/images/indonesia_travel.png",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    category: "web",
    icon: Globe,
    color: "from-emerald-500 to-teal-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Moro Audio",
    description: "Professional landing page for event tent and sound system rental business. Features product catalog, service packages, and booking form for various events.",
    image: "/images/moroaudio.png",
    tags: ["Astro", "Tailwind", "JavaScript"],
    category: "web",
    icon: Globe,
    color: "from-orange-500 to-red-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Coffee Shop Landing Page",
    description: "Modern landing page for coffee shop with elegant design. Showcasing menu, location, and cafe ambiance that invites visitors to come.",
    image: "/images/Kapur.png",
    tags: ["React", "Tailwind", "Framer Motion"],
    category: "web",
    icon: Globe,
    color: "from-amber-500 to-yellow-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "IoT Monitoring Susu Kambing",
    description: "IoT-based goat milk quality monitoring system. Uses sensors to measure milk quality in real-time with monitoring dashboard and automatic notifications.",
    image: "/images/iot.png",
    tags: ["IoT", "Arduino", "Python", "MQTT"],
    category: "iot",
    icon: Cpu,
    color: "from-cyan-500 to-blue-500",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const categories = [
  { name: "All", icon: null },
  { name: "Web", icon: Globe },
  { name: "Mobile", icon: Smartphone },
  { name: "IoT", icon: Cpu },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All"
      ? true
      : project.category === activeCategory.toLowerCase()
  );

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      
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
            Portfolio
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Featured <span className="animated-gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work across mobile apps, web platforms, and creative designs
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary/50 hover:bg-secondary text-foreground border border-border/50"
                }`}
                data-testid={`button-filter-${category.name.toLowerCase()}`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const isFeatured = project.featured && index < 2;
            
            return (
              <motion.div
                key={project.title}
                className={`group relative ${isFeatured ? "md:col-span-1 lg:row-span-1" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-project-${index}`}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-card border border-border/50 cursor-pointer hover:border-primary/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-project-${index}`}
                    />
                    
                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <button
                        className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
                        data-testid={`button-project-live-${index}`}
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </button>
                      <button
                        className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
                        data-testid={`button-project-github-${index}`}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-lg sm:text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2.5 py-1 bg-secondary/50 border border-border/50"
                          data-testid={`badge-tag-${tag.toLowerCase()}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
