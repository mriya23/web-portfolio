import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn best practices for structuring large React applications with TypeScript for better maintainability and developer experience.",
    date: "Nov 20, 2024",
    readTime: "8 min read",
    tags: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends for 2025",
    excerpt: "Exploring emerging technologies and frameworks that will shape the future of web development in the coming year.",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    tags: ["Web Dev", "Trends"],
  },
  {
    id: 3,
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    excerpt: "A comprehensive guide to creating responsive and flexible layouts using modern CSS techniques.",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    tags: ["CSS", "Layout"],
  },
  {
    id: 4,
    title: "State Management in 2024: Redux vs Zustand vs React Query",
    excerpt: "Comparing popular state management solutions and when to use each one in your React applications.",
    date: "Nov 5, 2024",
    readTime: "12 min read",
    tags: ["React", "State"],
  },
  {
    id: 5,
    title: "Performance Optimization Tips for React Apps",
    excerpt: "Practical techniques to improve the performance of your React applications and deliver faster user experiences.",
    date: "Oct 28, 2024",
    readTime: "7 min read",
    tags: ["Performance", "React"],
  },
  {
    id: 6,
    title: "Getting Started with Server Components",
    excerpt: "An introduction to React Server Components and how they can improve your application's performance.",
    date: "Oct 20, 2024",
    readTime: "9 min read",
    tags: ["React", "RSC"],
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4">
            Latest Articles
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Thoughts, tutorials, and insights on web development, design, and
            technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden group hover-elevate transition-all duration-300"
              data-testid={`card-blog-${post.id}`}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-muted to-primary/5 flex items-center justify-center">
                <div className="text-6xl font-heading font-bold text-primary/20">
                  {post.id}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="font-heading font-semibold text-lg leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn"
                  data-testid={`button-read-blog-${post.id}`}
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
