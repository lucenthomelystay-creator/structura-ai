import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Book, 
  Code, 
  FileText, 
  Github, 
  ExternalLink,
  ChevronRight,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

const docSections = [
  {
    title: "Getting Started",
    icon: Book,
    items: [
      { title: "Introduction", description: "Overview of StructurAI platform" },
      { title: "Uploading Models", description: "Supported file formats and upload process" },
      { title: "Configuring Analysis", description: "Setting up structural parameters" },
      { title: "Understanding Results", description: "Interpreting analysis outputs" },
    ],
  },
  {
    title: "Technical Reference",
    icon: Code,
    items: [
      { title: "Geometry Processing", description: "FreeCAD integration and element extraction" },
      { title: "Meshing Engine", description: "Gmsh configuration and mesh quality" },
      { title: "Analysis Solvers", description: "CalculiX and OpenSees setup" },
      { title: "Design Calculations", description: "IS code implementation details" },
    ],
  },
  {
    title: "Design Standards",
    icon: FileText,
    items: [
      { title: "IS 456:2000", description: "Plain and reinforced concrete code" },
      { title: "IS 800:2007", description: "Steel structure design code" },
      { title: "IS 1893:2016", description: "Seismic design criteria" },
      { title: "IS 875", description: "Design loads specification" },
    ],
  },
];

const Docs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Learn how to use StructurAI for your structural analysis projects. 
              From file upload to result interpretation.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                className="pl-12 h-12 text-base"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <a
              href="#"
              className="card-engineering rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">Quick Start Guide</h3>
                <p className="text-sm text-muted-foreground">Get up and running in 5 minutes</p>
              </div>
              <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a
              href="#"
              className="card-engineering rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all group"
            >
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">API Reference</h3>
                <p className="text-sm text-muted-foreground">Integrate with your workflow</p>
              </div>
              <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a
              href="#"
              className="card-engineering rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all group"
            >
              <div className="p-3 rounded-lg bg-success/10 group-hover:bg-success/20 transition-colors">
                <Github className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">GitHub Repo</h3>
                <p className="text-sm text-muted-foreground">View source and contribute</p>
              </div>
              <ExternalLink className="h-5 w-5 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Documentation Sections */}
          <div className="space-y-8">
            {docSections.map((section, index) => (
              <div key={index} className="card-engineering rounded-xl overflow-hidden">
                <div className="p-6 border-b border-border flex items-center gap-3">
                  <section.icon className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-lg">{section.title}</h2>
                </div>
                <div className="divide-y divide-border">
                  {section.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href="#"
                      className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors group"
                    >
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center card-engineering rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Reach out to our community or support team.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline">
                Join Discord
              </Button>
              <Button variant="hero">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Docs;
