import { useRef, useState } from "react";
import { RotateCcw, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultsViewer3DProps {
  activeView: "displacement" | "stress" | "forces";
}

const ResultsViewer3D = ({ activeView }: ResultsViewer3DProps) => {
  const [rotation, setRotation] = useState({ x: -25, y: 35 });
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const colorScale = [
    { color: "#0D47A1", label: "0" },
    { color: "#1976D2", label: "2" },
    { color: "#42A5F5", label: "4" },
    { color: "#26A69A", label: "6" },
    { color: "#66BB6A", label: "8" },
    { color: "#FFEE58", label: "10" },
    { color: "#FFA726", label: "12" },
    { color: "#EF5350", label: "14" },
  ];

  const getViewLabel = () => {
    switch (activeView) {
      case "displacement":
        return "Displacement (mm)";
      case "stress":
        return "Von Mises Stress (MPa)";
      case "forces":
        return "Axial Force (kN)";
    }
  };

  return (
    <div className="relative bg-background/50" style={{ height: "500px" }}>
      {/* 3D Viewport Placeholder */}
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center relative overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {/* Simplified 3D Building Representation */}
        <div
          className="relative"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${zoom})`,
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* Building Frame */}
          <svg
            width="300"
            height="400"
            viewBox="0 0 300 400"
            className="drop-shadow-2xl"
          >
            {/* Grid Background */}
            <defs>
              <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(172, 66%, 50%)" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="stressGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#0D47A1" />
                <stop offset="25%" stopColor="#42A5F5" />
                <stop offset="50%" stopColor="#66BB6A" />
                <stop offset="75%" stopColor="#FFA726" />
                <stop offset="100%" stopColor="#EF5350" />
              </linearGradient>
            </defs>

            {/* Base */}
            <rect x="20" y="360" width="260" height="20" fill="hsl(217, 33%, 17%)" rx="2" />

            {/* Columns */}
            {[40, 100, 160, 220, 260].map((x, i) => (
              <rect
                key={`col-${i}`}
                x={x}
                y="60"
                width="20"
                height="300"
                fill={activeView === "stress" ? `url(#stressGradient)` : "hsl(199, 89%, 48%)"}
                opacity={0.8}
                rx="2"
              />
            ))}

            {/* Beams / Floor Slabs */}
            {[80, 140, 200, 260, 320].map((y, i) => (
              <rect
                key={`beam-${i}`}
                x="40"
                y={y}
                width="240"
                height="12"
                fill="url(#buildingGradient)"
                stroke="hsl(199, 89%, 48%)"
                strokeWidth="1"
                rx="2"
              />
            ))}

            {/* Displacement arrows (shown when displacement view is active) */}
            {activeView === "displacement" && (
              <g>
                {[{ x: 150, y: 60, dx: 15 }, { x: 150, y: 140, dx: 10 }, { x: 150, y: 200, dx: 6 }].map(
                  (arrow, i) => (
                    <g key={`arrow-${i}`}>
                      <line
                        x1={arrow.x}
                        y1={arrow.y}
                        x2={arrow.x + arrow.dx}
                        y2={arrow.y}
                        stroke="#EF5350"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                      />
                      <polygon
                        points={`${arrow.x + arrow.dx},${arrow.y - 4} ${arrow.x + arrow.dx + 8},${arrow.y} ${arrow.x + arrow.dx},${arrow.y + 4}`}
                        fill="#EF5350"
                      />
                    </g>
                  )
                )}
              </g>
            )}

            {/* Force arrows */}
            {activeView === "forces" && (
              <g>
                <line x1="150" y1="40" x2="150" y2="60" stroke="#FFA726" strokeWidth="3" />
                <polygon points="143,40 157,40 150,25" fill="#FFA726" />
                <text x="160" y="45" fill="#FFA726" fontSize="12" fontFamily="monospace">
                  P
                </text>
              </g>
            )}
          </svg>

          {/* Floor Labels */}
          <div className="absolute -left-8 top-0 h-full flex flex-col justify-around text-xs text-muted-foreground font-mono">
            <span>5F</span>
            <span>4F</span>
            <span>3F</span>
            <span>2F</span>
            <span>1F</span>
          </div>
        </div>

        {/* Axis Indicator */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-6 h-0.5 bg-destructive" />
            <span>X</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-0.5 bg-success" />
            <span>Y</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-6 h-0.5 bg-primary" />
            <span>Z</span>
          </div>
        </div>
      </div>

      {/* Color Scale Legend */}
      <div className="absolute right-4 top-4 bottom-4 w-6 flex flex-col">
        <div className="text-xs text-muted-foreground mb-2 text-center">{getViewLabel()}</div>
        <div className="flex-1 flex flex-col rounded overflow-hidden border border-border">
          {colorScale.map((item, index) => (
            <div
              key={index}
              className="flex-1"
              style={{ backgroundColor: item.color }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>0</span>
          <span>14</span>
        </div>
      </div>

      {/* Viewport Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setRotation({ x: -25, y: 35 })}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setZoom((z) => Math.min(2, z + 0.2))}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon">
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ResultsViewer3D;
