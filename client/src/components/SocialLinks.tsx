import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";

const socialProfiles = [
  {
    name: "GitHub",
    username: "@developer",
    description: "Open source contributions, personal projects, and code samples",
    icon: SiGithub,
    stats: "50+ Repos",
    url: "https://github.com",
    color: "hover:border-[#333] dark:hover:border-white",
  },
  {
    name: "LinkedIn",
    username: "in/developer",
    description: "Professional network, career updates, and industry connections",
    icon: SiLinkedin,
    stats: "500+ Connections",
    url: "https://linkedin.com",
    color: "hover:border-[#0077B5]",
  },
  {
    name: "Instagram",
    username: "@developer.life",
    description: "Behind the scenes, tech lifestyle, and creative moments",
    icon: SiInstagram,
    stats: "1K+ Followers",
    url: "https://instagram.com",
    color: "hover:border-[#E4405F]",
  },
  {
    name: "Twitter",
    username: "@dev_tweets",
    description: "Tech thoughts, industry news, and developer community engagement",
    icon: SiX,
    stats: "2K+ Followers",
    url: "https://twitter.com",
    color: "hover:border-[#1DA1F2]",
  },
];

export function SocialLinks() {
  return (
    <section id="social" className="py-20 md:py-32 px-6 md:px-12 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl mb-4">
            Connect With Me
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Follow my journey across social platforms and stay updated with my
            latest work and thoughts
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {socialProfiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <Card
                key={index}
                className={`p-6 hover-elevate transition-all duration-300 border-2 ${profile.color}`}
                data-testid={`card-social-${profile.name.toLowerCase()}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div>
                        <h3 className="font-heading font-semibold text-lg">
                          {profile.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {profile.username}
                        </p>
                      </div>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {profile.stats}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {profile.description}
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      asChild
                      data-testid={`button-visit-${profile.name.toLowerCase()}`}
                    >
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Profile
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                    </Button>
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
