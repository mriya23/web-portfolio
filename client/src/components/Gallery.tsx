import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Camera, Award, Users, Code } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "Speaking at the annual developer conference about modern web technologies",
    category: "events",
    icon: Users,
  },
  {
    id: 2,
    title: "Hackathon Winner",
    description: "First place at the regional hackathon with an innovative AI solution",
    category: "achievements",
    icon: Award,
  },
  {
    id: 3,
    title: "Team Workshop",
    description: "Leading a React workshop for junior developers at the local tech community",
    category: "events",
    icon: Code,
  },
  {
    id: 4,
    title: "Best Developer Award",
    description: "Recognized as the top performer in annual company awards",
    category: "achievements",
    icon: Award,
  },
  {
    id: 5,
    title: "Open Source Contribution",
    description: "Major contribution to popular open source libraries",
    category: "achievements",
    icon: Code,
  },
  {
    id: 6,
    title: "Community Meetup",
    description: "Organizing monthly developer meetups in the local tech community",
    category: "events",
    icon: Users,
  },
];

const categories = ["All", "Events", "Achievements"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) =>
    activeCategory === "All"
      ? true
      : item.category === activeCategory.toLowerCase()
  );

  const handlePrev = () => {
    if (selectedItem === null) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setSelectedItem(filteredItems[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedItem === null) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem);
    const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setSelectedItem(filteredItems[nextIndex].id);
  };

  const selectedItemData = galleryItems.find((item) => item.id === selectedItem);

  return (
    <section id="gallery" className="py-20 md:py-32 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4">
            Gallery & Achievements
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Highlights from events, workshops, and achievements throughout my
            professional journey
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              data-testid={`button-gallery-filter-${category.toLowerCase()}`}
              className="font-medium"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className="overflow-hidden group hover-elevate cursor-pointer transition-all duration-300"
                onClick={() => setSelectedItem(item.id)}
                data-testid={`card-gallery-${item.id}`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-muted flex items-center justify-center">
                  <div className="p-6 rounded-full bg-background/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-heading font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {selectedItem !== null && selectedItemData && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => setSelectedItem(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            data-testid="button-lightbox-prev"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            data-testid="button-lightbox-next"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div
            className="max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-muted flex items-center justify-center">
                <div className="p-8 rounded-full bg-background/80 backdrop-blur-sm">
                  <selectedItemData.icon className="w-20 h-20 text-primary" />
                </div>
              </div>
              <div className="p-8 space-y-4 text-center">
                <h3 className="font-heading font-bold text-2xl">
                  {selectedItemData.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedItemData.description}
                </p>
              </div>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
}
