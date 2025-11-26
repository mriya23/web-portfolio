import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with this developer was an absolute pleasure. They delivered a stunning website that exceeded our expectations, on time and within budget.",
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    initials: "SJ",
  },
  {
    quote: "Exceptional attention to detail and a deep understanding of modern web technologies. Our e-commerce platform has never performed better.",
    name: "Michael Chen",
    position: "CTO, ShopWave",
    initials: "MC",
  },
  {
    quote: "The most professional developer I've worked with. They took our vision and turned it into a beautiful, functional reality.",
    name: "Emily Rodriguez",
    position: "Founder, DesignHub",
    initials: "ER",
  },
  {
    quote: "Outstanding communication throughout the project. They anticipated our needs and delivered solutions before we even asked.",
    name: "David Kim",
    position: "Product Manager, AppFlow",
    initials: "DK",
  },
  {
    quote: "Their expertise in React and modern frontend development is unmatched. Highly recommend for any web project.",
    name: "Lisa Thompson",
    position: "Director of Engineering, CloudTech",
    initials: "LT",
  },
  {
    quote: "A true professional who brings creativity and technical excellence to every project. Will definitely work with them again.",
    name: "James Wilson",
    position: "Startup Founder",
    initials: "JW",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Feedback and recommendations from clients and colleagues I've had
            the pleasure of working with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300 relative"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
