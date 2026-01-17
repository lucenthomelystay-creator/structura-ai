import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 engineering-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Analyze</span> Your Structure?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Start with a free analysis. No credit card required. 
            Upload your model and get results in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/upload">
              <Button variant="engineering" size="xl">
                Start Free Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="xl">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Free tier includes 5 analyses/month • No watermarks • Full PDF reports
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
