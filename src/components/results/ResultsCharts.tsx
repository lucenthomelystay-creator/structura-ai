import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ResultsCharts = () => {
  const displacementData = [
    { floor: "Base", x: 0, y: 0, z: 0 },
    { floor: "1F", x: 2.4, y: 0.1, z: 4.5 },
    { floor: "2F", x: 5.8, y: 0.3, z: 7.2 },
    { floor: "3F", x: 8.6, y: 0.4, z: 9.8 },
    { floor: "4F", x: 10.8, y: 0.5, z: 10.6 },
    { floor: "5F", x: 12.4, y: 0.6, z: 11.2 },
  ];

  const storyShearData = [
    { floor: "5F", shear: 245 },
    { floor: "4F", shear: 486 },
    { floor: "3F", shear: 712 },
    { floor: "2F", shear: 924 },
    { floor: "1F", shear: 1124 },
    { floor: "Base", shear: 1250 },
  ];

  const driftData = [
    { floor: "1F", drift: 0.18, limit: 0.4 },
    { floor: "2F", drift: 0.24, limit: 0.4 },
    { floor: "3F", drift: 0.28, limit: 0.4 },
    { floor: "4F", drift: 0.22, limit: 0.4 },
    { floor: "5F", drift: 0.16, limit: 0.4 },
  ];

  const modalData = [
    { mode: 1, period: 0.82, massX: 78.4, massY: 0.2 },
    { mode: 2, period: 0.76, massX: 0.3, massY: 76.8 },
    { mode: 3, period: 0.68, massX: 12.4, massY: 14.2 },
    { mode: 4, period: 0.42, massX: 5.8, massY: 4.2 },
    { mode: 5, period: 0.38, massX: 2.1, massY: 3.6 },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Displacement Profile */}
      <div className="card-engineering rounded-xl p-6">
        <h3 className="font-semibold mb-4">Displacement Profile</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={displacementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="floor" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit=" mm" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="x"
              name="Ux"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))" }}
            />
            <Line
              type="monotone"
              dataKey="z"
              name="Uz"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--accent))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Story Shear */}
      <div className="card-engineering rounded-xl p-6">
        <h3 className="font-semibold mb-4">Story Shear Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={storyShearData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} unit=" kN" />
            <YAxis dataKey="floor" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="shear" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Story Drift */}
      <div className="card-engineering rounded-xl p-6">
        <h3 className="font-semibold mb-4">Story Drift Ratio (%)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={driftData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="floor" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 0.5]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="drift" name="Actual Drift" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="limit" name="Limit (0.4%)" fill="hsl(var(--destructive))" opacity={0.3} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Modal Analysis */}
      <div className="card-engineering rounded-xl p-6">
        <h3 className="font-semibold mb-4">Modal Analysis Results</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 font-medium text-muted-foreground">Mode</th>
                <th className="text-right py-2 font-medium text-muted-foreground">Period (s)</th>
                <th className="text-right py-2 font-medium text-muted-foreground">Mass X (%)</th>
                <th className="text-right py-2 font-medium text-muted-foreground">Mass Y (%)</th>
              </tr>
            </thead>
            <tbody>
              {modalData.map((row) => (
                <tr key={row.mode} className="border-b border-border/50">
                  <td className="py-3 font-mono">{row.mode}</td>
                  <td className="text-right py-3 font-mono">{row.period.toFixed(2)}</td>
                  <td className="text-right py-3 font-mono">{row.massX.toFixed(1)}</td>
                  <td className="text-right py-3 font-mono">{row.massY.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-secondary/50 text-sm">
          <span className="text-muted-foreground">Cumulative Mass Participation:</span>
          <span className="ml-2 font-mono text-success">99.0% (X)</span>
          <span className="ml-2 font-mono text-success">99.0% (Y)</span>
        </div>
      </div>
    </div>
  );
};

export default ResultsCharts;
