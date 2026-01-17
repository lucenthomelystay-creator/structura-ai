import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  Box, 
  BarChart3, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  XCircle,
  Eye
} from "lucide-react";
import ResultsViewer3D from "@/components/results/ResultsViewer3D";
import ResultsTables from "@/components/results/ResultsTables";
import ResultsCharts from "@/components/results/ResultsCharts";

const Results = () => {
  const [activeView, setActiveView] = useState<"displacement" | "stress" | "forces">("displacement");

  const summaryStats = [
    { label: "Max Displacement", value: "12.4 mm", status: "ok" },
    { label: "Max Stress", value: "18.2 MPa", status: "ok" },
    { label: "Base Shear", value: "2450 kN", status: "warning" },
    { label: "Drift Ratio", value: "0.28%", status: "ok" },
  ];

  const designChecks = [
    { name: "Displacement Limit (H/500)", status: "pass", value: "12.4 < 30 mm" },
    { name: "Story Drift (0.4%)", status: "pass", value: "0.28 < 0.40%" },
    { name: "Column Stress Ratio", status: "pass", value: "0.72 < 1.00" },
    { name: "Beam Stress Ratio", status: "warning", value: "0.89 < 1.00" },
    { name: "Foundation Bearing", status: "pass", value: "180 < 200 kN/m²" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
      case "ok":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case "fail":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Analysis Results</h1>
              <p className="text-muted-foreground">
                Project: Building_A_v2.ifc • Completed 2 minutes ago
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                Full Report
              </Button>
              <Button variant="hero">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {summaryStats.map((stat, index) => (
              <div key={index} className="card-engineering rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  {getStatusIcon(stat.status)}
                </div>
                <div className="text-2xl font-bold font-mono">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* 3D Viewer */}
            <div className="lg:col-span-2">
              <div className="card-engineering rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h2 className="font-semibold flex items-center gap-2">
                    <Box className="h-5 w-5 text-primary" />
                    3D Visualization
                  </h2>
                  <div className="flex gap-2">
                    <Button
                      variant={activeView === "displacement" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveView("displacement")}
                    >
                      Displacement
                    </Button>
                    <Button
                      variant={activeView === "stress" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveView("stress")}
                    >
                      Stress
                    </Button>
                    <Button
                      variant={activeView === "forces" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveView("forces")}
                    >
                      Forces
                    </Button>
                  </div>
                </div>
                <ResultsViewer3D activeView={activeView} />
              </div>
            </div>

            {/* Design Checks Sidebar */}
            <div className="card-engineering rounded-xl p-6">
              <h2 className="font-semibold flex items-center gap-2 mb-6">
                <FileText className="h-5 w-5 text-primary" />
                Design Checks
              </h2>
              <div className="space-y-4">
                {designChecks.map((check, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30"
                  >
                    {getStatusIcon(check.status)}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{check.name}</div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {check.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Overall Status</span>
                  <span className="text-success font-semibold">4/5 Passed</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-success to-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Data Tabs */}
          <div className="mt-8">
            <Tabs defaultValue="tables" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="tables" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Data Tables
                </TabsTrigger>
                <TabsTrigger value="charts" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Charts
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tables">
                <ResultsTables />
              </TabsContent>

              <TabsContent value="charts">
                <ResultsCharts />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
