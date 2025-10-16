import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Sync with StepDurationHeatmap steps and use highest duration bin as exits
const heatmapData = [
  { step: "Welcome", durations: [30, 20, 10, 5, 5] },
  { step: "Workspace", durations: [5, 10, 15, 20, 20] },
  { step: "Team", durations: [10, 15, 20, 10, 8] },
  { step: "Terms & Conditions", durations: [5, 10, 15, 12, 6] },
  { step: "Payment", durations: [5, 10, 15, 10, 20] },
  { step: "Completion", durations: [10, 5, 5, 2, 2] },
];

const data = heatmapData.map((row, idx) => ({
  step: `${idx + 1}`,
  exits: row.durations[row.durations.length - 1], // Use the last bin (2min+)
}));

const EarlyExitChart = () => {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <h2 className="text-xl font-bold text-primary mb-6">EARLY STEP EXIT</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis
            dataKey="step"
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="exits"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))", r: 6 }}
            activeDot={{ r: 8 }}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default EarlyExitChart;
