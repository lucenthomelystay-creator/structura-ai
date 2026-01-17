import { Upload, Cog, BarChart3, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Design",
    description: "Import your building model in IFC, STEP, DXF, or PDF format. Our AI extracts structural elements automatically.",
    color: "primary",
  },
  {
    number: "02",
    icon: Cog,
    title: "Configure Parameters",
    description: "Set material grades, loads (dead, live, seismic), soil type, and design standards. Smart defaults are provided.",
    color: "accent",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Run Analysis",
    description: "Our engine meshes, solves, and computes structural responses. Track progress in real-time.",
    color: "success",
  },
  {
    number: "04",
    icon: FileText,
    title: "Get Results",
    description: "View 3D visualizations, data tables, and download your comprehensive PDF calculation report.",
    color: "warning",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 bg-card/50 border-y border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Upload to <span className="gradient-text">Design Review</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your architectural model into a fully analyzed structural design.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-success -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="card-engineering rounded-xl p-6 h-full relative z-10 hover:border-primary/50 transition-all duration-300">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-muted-foreground/20 font-mono">
                      {step.number}
                    </span>
                    <div className={`p-3 rounded-lg bg-${step.color}/10 border border-${step.color}/20`}>
                      <step.icon className={`h-6 w-6 text-${step.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 z-20 h-8 w-8 items-center justify-center rounded-full bg-background border border-border">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
