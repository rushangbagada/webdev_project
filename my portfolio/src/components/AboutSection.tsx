
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-1">
            <div className="relative">
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
                {/* Replace with your actual profile image */}
                
                 <img src="https://media-hosting.imagekit.io/31e4de84471f4e05/WhatsApp%20Image%202025-04-18%20at%2011.31.42_761bf99e.jpg?Expires=1839564154&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cE7qz0aDP02A9E7q9uvm-6VEyKGJVT0kQhI6E5RA4JxVDEU1sXqJ16V5Bz-FrQN8FZfRlRDESQOHSV5BcUUAgagHIyc2DtlZW7yM-It4u02C6YonmXHbLTOxJ2blL6~kp8GDIK3R2hjkiURk4hW9qeYyCgG6jFdAS6FKwBeckYih6BAXzIjqKnOD-rNKj9woibB-I8DELYbxnw7JbfBZQQPJFEK0-t2Uw2ASfHeSAh5zbiQuouP1xx5qdmd3W3wUpVGnHnH8I1aQGXMGZaqqset4SFPJ4BniCteuvPMB7v96sdTnEt6WHzJGej2Ljiq~c7WJFa54xKKAKAKT-LdFPw__" alt="" />
                
              </div>
              
              <div className="mt-6 flex items-center justify-center md:justify-start space-x-4">
                <a 
                  href="https://github.com/rushangbagada"  
                  className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/your-linkedin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:rushang697@gmail.com" 
                  className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
                  aria-label="Email Me"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg">
              I'm a Computer Science student at SVNIT Surat, passionate about building impactful web applications and solving complex problems. My journey in tech started with competitive programming and has evolved into full-stack development and AI exploration.
            </p>
            <p className="text-lg">
              I enjoy creating responsive, user-friendly web applications that combine clean design with efficient functionality. Whether it's building a project from scratch or optimizing existing code, I'm always eager to learn new technologies and approaches.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <p>B.Tech in Computer Science</p>
                  <p className="text-muted-foreground">SVNIT Surat</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hobbies</h3>
                  <ul className="list-disc list-inside">
                    <li>Competitive Programming</li>
                    <li>Open Source Contributing</li>
                    <li>Learning New Technologies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Fun Fact</h3>
                  <p>
                    I once debugged a critical production issue while on a train with spotty internet, using only cached documentation and pure determination!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
