const techStack = [
  {
    category: "Geometry",
    tools: [
      { name: "FreeCAD", description: "3D CAD modeling & geometry processing" },
      { name: "Open Cascade", description: "CAD kernel for STEP/IGES import" },
      { name: "IfcOpenShell", description: "IFC parsing and element extraction" },
    ],
  },
  {
    category: "Meshing",
    tools: [
      { name: "Gmsh", description: "High-quality finite element mesh generation" },
      { name: "Netgen", description: "Automatic 3D tetrahedral meshing" },
    ],
  },
  {
    category: "Analysis",
    tools: [
      { name: "CalculiX", description: "Static FEM analysis and stress computation" },
      { name: "OpenSees", description: "Earthquake engineering simulation" },
      { name: "Code_Aster", description: "Thermo-mechanical analysis" },
    ],
  },
  {
    category: "Visualization",
    tools: [
      { name: "Three.js", description: "WebGL 3D visualization" },
      { name: "xeokit", description: "BIM/IFC web viewer" },
      { name: "ParaView", description: "Scientific visualization (export)" },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-4">
            100% Open Source
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by <span className="gradient-text">Industry Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No proprietary software. Our analysis engine is built entirely on battle-tested open-source tools used by engineers worldwide.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, index) => (
            <div key={index} className="card-engineering rounded-xl p-6">
              <h3 className="text-lg font-semibold gradient-text mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">{tool.name}</div>
                      <div className="text-xs text-muted-foreground">{tool.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Standards Compliance */}
        <div className="mt-16 card-engineering rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Design Standards Supported</h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "IS 456 (RCC)",
              "IS 800 (Steel)",
              "IS 1893 (Seismic)",
              "IS 875 (Loads)",
              "ACI 318",
              "Eurocode 2",
              "AISC 360",
            ].map((standard, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-mono"
              >
                {standard}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
