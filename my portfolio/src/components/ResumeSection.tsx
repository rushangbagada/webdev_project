
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 md:py-24 bg-accent/30">
      <div className="container px-4 md:px-6">
        <h2 className="section-title">Resume</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle>Download Resume</CardTitle>
                <CardDescription>
                  Get a copy of my complete resume in PDF format
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="flex justify-center py-6">
                  <FileText className="h-24 w-24 text-primary" />
                </div>
                <Button className="w-full" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Resume Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">B.Tech in Computer Science</h4>
                        <span className="text-sm text-muted-foreground">2020 - 2024</span>
                      </div>
                      <p className="text-muted-foreground">SVNIT Surat</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Achievements</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Ranked in the top 10% in competitive programming contest</li>
                    <li>Recognized for outstanding project in AI/ML hackathon</li>
                    <li>Published a technical article on web development best practices</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Full Stack Web Development</h4>
                      <p className="text-muted-foreground">Certificate from Udemy</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Data Structures and Algorithms</h4>
                      <p className="text-muted-foreground">Certificate from Coursera</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
