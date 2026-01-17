import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Box, Layers, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 engineering-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      
      {/* Floating 3D Elements */}
      <div className="absolute top-32 right-20 hidden lg:block animate-float">
        <div className="w-32 h-32 border border-primary/30 rounded-xl rotate-12 flex items-center justify-center bg-card/50 backdrop-blur-sm">
          <Box className="w-12 h-12 text-primary/50" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 hidden lg:block animate-float delay-1000">
        <div className="w-24 h-24 border border-accent/30 rounded-xl -rotate-12 flex items-center justify-center bg-card/50 backdrop-blur-sm">
          <Layers className="w-8 h-8 text-accent/50" />
        </div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
            Open-Source Structural Analysis Engine
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            Structural Analysis
            <span className="block gradient-text">Reimagined</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Upload your building design, configure structural parameters, and receive automated 
            analysis with design calculations — all powered by open-source engineering tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/upload">
              <Button variant="engineering" size="xl">
                Start Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {[
              { icon: Box, label: "IFC / STEP / DXF Support" },
              { icon: Layers, label: "Auto-Meshing" },
              { icon: Zap, label: "Real-time Analysis" },
              { icon: Shield, label: "IS Code Compliant" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                {feature.label}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: "100%", label: "Open Source" },
            { value: "FEM", label: "Based Analysis" },
            { value: "PDF", label: "Reports Generated" },
            { value: "3D", label: "Result Visualization" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
