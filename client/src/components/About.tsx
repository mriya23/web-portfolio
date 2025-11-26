import { Card } from "@/components/ui/card";
import { Calendar, GraduationCap, Briefcase } from "lucide-react";
import aboutImage from "@assets/generated_images/casual_about_me_photo.png";

const timeline = [
  {
    icon: GraduationCap,
    year: "2020 - 2024",
    title: "Computer Science Degree",
    description: "Bachelor's degree in Computer Science with focus on web development and software engineering",
  },
  {
    icon: Briefcase,
    year: "2023 - Present",
    title: "Full-Stack Developer",
    description: "Building modern web applications with React, Node.js, and cloud technologies",
  },
  {
    icon: Calendar,
    year: "2021 - 2023",
    title: "Freelance Projects",
    description: "Delivered 20+ successful projects for clients worldwide, specializing in custom web solutions",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Get to know more about my journey, skills, and passion for creating
            impactful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-2xl" />
            <img
              src={aboutImage}
              alt="About me"
              className="relative rounded-2xl w-full object-cover shadow-xl aspect-[3/4]"
              data-testid="img-about"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-2xl md:text-3xl">
                Passionate About Building Great Products
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I'm a creative developer with a keen eye for design and a passion
                for building intuitive, user-friendly applications. With several
                years of experience in web development, I specialize in creating
                modern, responsive websites and applications.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                My approach combines technical expertise with creative thinking
                to deliver solutions that not only meet requirements but exceed
                expectations. I believe in writing clean, maintainable code and
                staying up-to-date with the latest technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-2xl md:text-3xl text-center mb-8">
            My Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all duration-300"
                  data-testid={`card-timeline-${index}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-heading font-semibold text-lg">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
