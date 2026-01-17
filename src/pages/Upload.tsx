import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FileUpload from "@/components/upload/FileUpload";
import StructuralInputForm from "@/components/upload/StructuralInputForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const Upload = () => {
  const [step, setStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const steps = [
    { number: 1, title: "Upload Model" },
    { number: 2, title: "Configure Parameters" },
    { number: 3, title: "Review & Submit" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((s, index) => (
              <div key={s.number} className="flex items-center">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-all ${
                      step > s.number
                        ? "bg-success border-success text-success-foreground"
                        : step === s.number
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {step > s.number ? <Check className="h-5 w-5" /> : s.number}
                  </div>
                  <span
                    className={`hidden sm:block text-sm font-medium ${
                      step >= s.number ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 md:w-24 h-0.5 mx-4 ${
                      step > s.number ? "bg-success" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="card-engineering rounded-xl p-8">
            {step === 1 && (
              <FileUpload 
                onFileSelect={(file) => setUploadedFile(file)}
                selectedFile={uploadedFile}
              />
            )}
            
            {step === 2 && (
              <StructuralInputForm />
            )}
            
            {step === 3 && (
              <div className="text-center py-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 border border-success/20 mb-6">
                  <Check className="h-8 w-8 text-success" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Ready to Analyze</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Your model and parameters are configured. Click submit to start the structural analysis.
                </p>
                <div className="card-engineering rounded-lg p-6 max-w-md mx-auto text-left">
                  <h3 className="font-semibold mb-4">Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">File:</span>
                      <span className="font-mono">{uploadedFile?.name || "example.ifc"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Building Type:</span>
                      <span>Residential</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Floors:</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Design Standard:</span>
                      <span>IS 456:2000</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            {step < 3 ? (
              <Button
                variant="hero"
                onClick={() => setStep(Math.min(3, step + 1))}
                disabled={step === 1 && !uploadedFile}
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button variant="engineering">
                Submit for Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Upload;
