import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ResultsTables = () => {
  const nodeDisplacements = [
    { node: 1, ux: 0.0, uy: 0.0, uz: 0.0, rx: 0.0, ry: 0.0, rz: 0.0 },
    { node: 5, ux: 2.4, uy: 0.1, uz: 4.5, rx: 0.002, ry: 0.001, rz: 0.0 },
    { node: 10, ux: 5.8, uy: 0.3, uz: 7.2, rx: 0.004, ry: 0.002, rz: 0.001 },
    { node: 15, ux: 8.6, uy: 0.4, uz: 9.8, rx: 0.005, ry: 0.003, rz: 0.001 },
    { node: 20, ux: 12.4, uy: 0.6, uz: 11.2, rx: 0.006, ry: 0.004, rz: 0.002 },
  ];

  const elementForces = [
    { element: "C1", type: "Column", axial: -245.6, shearY: 18.4, shearZ: 12.2, momentY: 45.8, momentZ: 38.2, torsion: 2.4 },
    { element: "C2", type: "Column", axial: -312.4, shearY: 22.6, shearZ: 15.8, momentY: 52.4, momentZ: 44.6, torsion: 3.1 },
    { element: "B1", type: "Beam", axial: -8.2, shearY: 85.4, shearZ: 2.4, momentY: 4.2, momentZ: 128.6, torsion: 1.2 },
    { element: "B2", type: "Beam", axial: -6.8, shearY: 72.8, shearZ: 1.8, momentY: 3.6, momentZ: 112.4, torsion: 0.8 },
    { element: "S1", type: "Slab", axial: 0.0, shearY: 12.4, shearZ: 14.2, momentY: 8.6, momentZ: 9.2, torsion: 0.0 },
  ];

  const reactions = [
    { support: "A", fx: 124.5, fy: 856.2, fz: 98.4, mx: 12.4, my: 8.6, mz: 245.8 },
    { support: "B", fx: 118.2, fy: 912.4, fz: 102.6, mx: 14.2, my: 9.2, mz: 268.4 },
    { support: "C", fx: 132.8, fy: 884.6, fz: 95.8, mx: 11.8, my: 8.2, mz: 252.6 },
    { support: "D", fx: 128.4, fy: 902.8, fz: 104.2, mx: 13.6, my: 9.8, mz: 262.2 },
  ];

  return (
    <div className="space-y-8">
      {/* Node Displacements */}
      <div className="card-engineering rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold">Node Displacements</h3>
          <p className="text-sm text-muted-foreground">Maximum displacement at top floor nodes</p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Node</TableHead>
                <TableHead className="text-right">Ux (mm)</TableHead>
                <TableHead className="text-right">Uy (mm)</TableHead>
                <TableHead className="text-right">Uz (mm)</TableHead>
                <TableHead className="text-right">Rx (rad)</TableHead>
                <TableHead className="text-right">Ry (rad)</TableHead>
                <TableHead className="text-right">Rz (rad)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nodeDisplacements.map((row) => (
                <TableRow key={row.node}>
                  <TableCell className="font-mono">{row.node}</TableCell>
                  <TableCell className="text-right font-mono">{row.ux.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.uy.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.uz.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.rx.toFixed(3)}</TableCell>
                  <TableCell className="text-right font-mono">{row.ry.toFixed(3)}</TableCell>
                  <TableCell className="text-right font-mono">{row.rz.toFixed(3)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Element Forces */}
      <div className="card-engineering rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold">Element Forces</h3>
          <p className="text-sm text-muted-foreground">Critical load case: 1.5DL + 1.5LL + 1.5EQx</p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Element</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Axial (kN)</TableHead>
                <TableHead className="text-right">Vy (kN)</TableHead>
                <TableHead className="text-right">Vz (kN)</TableHead>
                <TableHead className="text-right">My (kNm)</TableHead>
                <TableHead className="text-right">Mz (kNm)</TableHead>
                <TableHead className="text-right">T (kNm)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {elementForces.map((row) => (
                <TableRow key={row.element}>
                  <TableCell className="font-mono font-semibold">{row.element}</TableCell>
                  <TableCell className="text-muted-foreground">{row.type}</TableCell>
                  <TableCell className="text-right font-mono">{row.axial.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.shearY.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.shearZ.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.momentY.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.momentZ.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.torsion.toFixed(1)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Support Reactions */}
      <div className="card-engineering rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold">Support Reactions</h3>
          <p className="text-sm text-muted-foreground">Foundation loads for design</p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Support</TableHead>
                <TableHead className="text-right">Fx (kN)</TableHead>
                <TableHead className="text-right">Fy (kN)</TableHead>
                <TableHead className="text-right">Fz (kN)</TableHead>
                <TableHead className="text-right">Mx (kNm)</TableHead>
                <TableHead className="text-right">My (kNm)</TableHead>
                <TableHead className="text-right">Mz (kNm)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reactions.map((row) => (
                <TableRow key={row.support}>
                  <TableCell className="font-mono font-semibold">{row.support}</TableCell>
                  <TableCell className="text-right font-mono">{row.fx.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.fy.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.fz.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.mx.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.my.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-mono">{row.mz.toFixed(1)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ResultsTables;
