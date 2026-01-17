import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StructuralInputForm = () => {
  const [formData, setFormData] = useState({
    buildingType: "residential",
    floors: 5,
    floorHeight: 3.0,
    concreteGrade: "M25",
    steelGrade: "Fe500",
    deadLoad: 3.5,
    liveLoad: 2.0,
    windSpeed: 39,
    seismicZone: "III",
    soilType: "medium",
    supportType: "fixed",
    designStandard: "IS",
  });

  const updateField = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Configure Structural Parameters</h2>
      <p className="text-muted-foreground mb-8">
        Set material grades, loads, and design standards for your analysis.
      </p>

      <Tabs defaultValue="building" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="building">Building</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="loads">Loads</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="building" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="buildingType">Building Type</Label>
              <Select
                value={formData.buildingType}
                onValueChange={(v) => updateField("buildingType", v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                  <SelectItem value="institutional">Institutional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="floors">Number of Floors</Label>
              <Input
                type="number"
                id="floors"
                value={formData.floors}
                onChange={(e) => updateField("floors", parseInt(e.target.value))}
                min={1}
                max={50}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floorHeight">Floor Height (m)</Label>
              <Input
                type="number"
                id="floorHeight"
                value={formData.floorHeight}
                onChange={(e) => updateField("floorHeight", parseFloat(e.target.value))}
                step={0.1}
                min={2.5}
                max={6}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="soilType">Soil Type</Label>
              <Select
                value={formData.soilType}
                onValueChange={(v) => updateField("soilType", v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hard">Hard Rock</SelectItem>
                  <SelectItem value="medium">Medium Soil</SelectItem>
                  <SelectItem value="soft">Soft Soil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="materials" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="concreteGrade">Concrete Grade</Label>
              <Select
                value={formData.concreteGrade}
                onValueChange={(v) => updateField("concreteGrade", v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="M20">M20</SelectItem>
                  <SelectItem value="M25">M25</SelectItem>
                  <SelectItem value="M30">M30</SelectItem>
                  <SelectItem value="M35">M35</SelectItem>
                  <SelectItem value="M40">M40</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">fck = 25 N/mm²</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="steelGrade">Steel Grade</Label>
              <Select
                value={formData.steelGrade}
                onValueChange={(v) => updateField("steelGrade", v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fe415">Fe 415</SelectItem>
                  <SelectItem value="Fe500">Fe 500</SelectItem>
                  <SelectItem value="Fe550">Fe 550</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">fy = 500 N/mm²</p>
            </div>
          </div>

          {/* Material Properties Display */}
          <div className="card-engineering rounded-lg p-4 mt-6">
            <h4 className="font-semibold mb-3 text-sm">Material Properties</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Concrete Ec:</span>
                <span className="ml-2 font-mono">25000 N/mm²</span>
              </div>
              <div>
                <span className="text-muted-foreground">Steel Es:</span>
                <span className="ml-2 font-mono">200000 N/mm²</span>
              </div>
              <div>
                <span className="text-muted-foreground">Unit Weight:</span>
                <span className="ml-2 font-mono">25 kN/m³</span>
              </div>
              <div>
                <span className="text-muted-foreground">Poisson Ratio:</span>
                <span className="ml-2 font-mono">0.2</span>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="loads" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="deadLoad">Dead Load (kN/m²)</Label>
              <Input
                type="number"
                id="deadLoad"
                value={formData.deadLoad}
                onChange={(e) => updateField("deadLoad", parseFloat(e.target.value))}
                step={0.5}
                min={1}
                max={10}
              />
              <p className="text-xs text-muted-foreground">Floor finish + partitions</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="liveLoad">Live Load (kN/m²)</Label>
              <Input
                type="number"
                id="liveLoad"
                value={formData.liveLoad}
                onChange={(e) => updateField("liveLoad", parseFloat(e.target.value))}
                step={0.5}
                min={1}
                max={10}
              />
              <p className="text-xs text-muted-foreground">As per IS 875 Part 2</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="windSpeed">Basic Wind Speed (m/s)</Label>
              <Input
                type="number"
                id="windSpeed"
                value={formData.windSpeed}
                onChange={(e) => updateField("windSpeed", parseFloat(e.target.value))}
                min={30}
                max={55}
              />
              <p className="text-xs text-muted-foreground">As per IS 875 Part 3</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="seismicZone">Seismic Zone</Label>
              <Select
                value={formData.seismicZone}
                onValueChange={(v) => updateField("seismicZone", v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="II">Zone II (Low)</SelectItem>
                  <SelectItem value="III">Zone III (Moderate)</SelectItem>
                  <SelectItem value="IV">Zone IV (Severe)</SelectItem>
                  <SelectItem value="V">Zone V (Very Severe)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">As per IS 1893</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="supportType">Support Conditions</Label>
              <Select
                value={formData.supportType}
                onValueChange={(v) => updateField("supportType", v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fixed">Fixed</SelectItem>
                  <SelectItem value="pinned">Pinned</SelectItem>
                  <SelectItem value="isolated">Isolated Footing</SelectItem>
                  <SelectItem value="raft">Raft Foundation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="designStandard">Design Standard</Label>
              <Select
                value={formData.designStandard}
                onValueChange={(v) => updateField("designStandard", v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IS">Indian Standards (IS)</SelectItem>
                  <SelectItem value="ACI">ACI 318</SelectItem>
                  <SelectItem value="EC">Eurocode</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Analysis Settings */}
          <div className="card-engineering rounded-lg p-4 mt-6">
            <h4 className="font-semibold mb-3 text-sm">Analysis Settings</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Mesh Quality</span>
                <Select defaultValue="medium">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coarse">Coarse</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="fine">Fine</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Solver</span>
                <span className="text-sm font-mono">CalculiX</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Analysis Type</span>
                <span className="text-sm font-mono">Static + Seismic</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StructuralInputForm;
