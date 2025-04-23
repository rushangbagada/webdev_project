import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SkillProps {
  name: string;
  icon: string;
  level: number;
}

const SkillItem = ({ name, icon, level }: SkillProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-lg font-medium">{name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className="skill-progress-bar" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

interface SkillIconProps {
  name: string;
  icon: string;
}

const SkillIcon = ({ name, icon }: SkillIconProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex flex-col items-center gap-2 p-3 bg-accent rounded-lg hover:bg-primary/10 transition-colors cursor-pointer">
            <div className="h-10 w-10 flex items-center justify-center text-2xl">{icon}</div>
            <span className="text-sm font-medium">{name}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const SkillsSection = () => {
  // Languages
  const languages = [
    { name: "C", icon: "🖥️", level: 90 },
    { name: "C++", icon: "🖥️", level: 85 },
    { name: "Python", icon: "🐍", level: 80 },
    { name: "JavaScript", icon: "📱", level: 85 },
  ];

  // Web Development
  const webDev = [
    { name: "HTML", icon: "🌐", level: 95 },
    { name: "CSS", icon: "🎨", level: 90 },
    { name: "React", icon: "⚛️", level: 85 },
    { name: "Node.js", icon: "🟢", level: 75 },
  ];

  // Tools & Tech
  const tools = [
    { name: "Git", icon: "📊" },
    { name: "GitHub", icon: "🐙" },
    { name: "VSCode", icon: "📝" },
    { name: "Figma", icon: "🎭" },
  ];

  // Other Skills
  const other = [
    { name: "Competitive Programming", icon: "🧩", level: 80 },
    { name: "Problem Solving", icon: "🧠", level: 90 },
    { name: "Data Structures", icon: "📚", level: 85 },
    { name: "Algorithms", icon: "📈", level: 85 },
  ];
  
  return (
    <section id="skills" className="py-16 md:py-24 bg-accent/30">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
              {languages.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Web Development</h3>
              {webDev.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <SkillIcon key={index} {...tool} />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Other Skills</h3>
              {other.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
