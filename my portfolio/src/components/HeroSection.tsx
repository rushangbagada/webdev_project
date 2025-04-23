
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-20 pb-10 bg-[#0A192F]"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-sm md:text-base font-mono text-[#64FFDA]">
            Hi, my name is
          </h1>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#CCD6F6] animate-fade-in" style={{animationDelay: '0.2s'}}>
              Rushang.
            </h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#8892B0] animate-fade-in" style={{animationDelay: '0.4s'}}>
              Computer Science Student | Web Developer | Tech Enthusiast
            </h3>
          </div>
          
          <p className="text-lg md:text-xl text-[#8892B0] max-w-xl animate-fade-in" style={{animationDelay: '0.6s'}}>
            Crafting ideas into interactive code — welcome to my digital playground!
          </p>
          
          <div className="flex flex-wrap gap-4 pt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <Button asChild size="lg" className="bg-transparent border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10">
              <a href="/resume.pdf" download>Download Resume</a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-[#64FFDA] hover:bg-[#64FFDA]/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 text-[#64FFDA]" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
