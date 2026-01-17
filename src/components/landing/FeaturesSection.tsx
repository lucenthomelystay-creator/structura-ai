import { 
  Upload, 
  Cpu, 
  BarChart3, 
  FileText, 
  Box, 
  Settings2,
  Layers,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Multi-Format Upload",
    description: "Import IFC, STEP, DXF, STL, or PDF drawings. Our system auto-detects structural elements.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Box,
    title: "Geometry Processing",
    description: "Automated geometry cleanup, simplification, and structural element extraction using FreeCAD.",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Layers,
    title: "Intelligent Meshing",
    description: "Auto-generate FEM meshes with Gmsh. Choose between coarse, medium, or fine resolution.",
    gradient: "from-success to-success/50",
  },
  {
    icon: Cpu,
    title: "Structural Analysis",
    description: "Run static and seismic analysis using CalculiX and OpenSees — fully automated.",
    gradient: "from-warning to-warning/50",
  },
  {
    icon: Settings2,
    title: "Design Calculations",
    description: "Compute axial forces, bending moments, shear forces, and capacity checks per IS codes.",
    gradient: "from-primary to-accent",
  },
  {
    icon: BarChart3,
    title: "3D Visualization",
    description: "Interactive 3D viewer showing displacement, stress distribution, and force diagrams.",
    gradient: "from-accent to-primary",
  },
  {
    icon: FileText,
    title: "PDF Reports",
    description: "Auto-generated calculation reports with assumptions, inputs, and detailed outputs.",
    gradient: "from-success to-accent",
  },
  {
    icon: Zap,
    title: "Cloud Processing",
    description: "Heavy computations run in Docker containers. No local installation required.",
    gradient: "from-primary to-success",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 engineering-grid opacity-10" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-4">
            Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            End-to-End <span className="gradient-text">Structural Analysis</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From file upload to final report — everything automated with open-source engineering tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card-engineering rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}>
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
