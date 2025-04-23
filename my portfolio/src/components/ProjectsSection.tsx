
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
}

const ProjectCard = ({ title, description, image, technologies, github, liveDemo }: ProjectProps) => {
  return (
    <Card className="overflow-hidden group h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden h-48">
        <div 
          className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-lg"
          style={{
            backgroundImage: image ? `url(${image})` : 'none',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {!image && 'Project Image'}
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              aria-label="View GitHub Repository"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
          )}
          {liveDemo && (
            <a 
              href={liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLink className="h-5 w-5 text-white" />
            </a>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        {github && (
          <Button variant="outline" size="sm" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {liveDemo && (
          <Button size="sm" asChild>
            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "CodeSphereHub",
      description: "A collaborative platform for developers to share and discuss code snippets, enhancing learning and collaboration.",
      image: "https://ibb.co/fdZv0cpY",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/rushangbagada/WPP_CodeSphere",
      liveDemo: "#"
    },
    
  ];
  
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
          Here are some of my recent projects. Each demonstrates different skills and technologies I've worked with.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
