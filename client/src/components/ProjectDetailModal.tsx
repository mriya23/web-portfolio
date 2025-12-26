import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  icon: any;
  color: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const Icon = project.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-card border border-border/50 rounded-3xl shadow-2xl overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-all duration-200 group"
                  data-testid="button-close-modal"
                >
                  <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[90vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* Hero Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 space-y-6">
                    {/* Title */}
                    <div className="space-y-3">
                      <h2 className="font-heading font-bold text-3xl md:text-4xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {project.title}
                      </h2>
                      {project.featured && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>
                          <span className="text-sm font-medium text-primary">Featured Project</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                        <Code className="w-4 h-4" />
                        <span>Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="px-4 py-2 text-sm bg-secondary/80 border border-border/50 hover:bg-secondary transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>View Live Project</span>
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 border border-border/50"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Source Code</span>
                        </a>
                      )}
                    </div>
                    
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
