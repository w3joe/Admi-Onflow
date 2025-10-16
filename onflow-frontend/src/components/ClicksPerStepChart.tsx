import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";

interface StepData {
  step: string;
  totalClicks: number;
}

const ClicksPerStepChart = () => {
  const [data, setData] = useState<StepData[]>([]);

  useEffect(() => {
    const fetchClicksPerStep = async () => {
      const { data: clicksData, error } = await supabase
        .from("clicks")
        .select("step, count");

      if (error) {
        console.error("Error fetching clicks per step:", error);
        setData([]);
        return;
      }

      // Aggregate clicks by step
      const stepMap = new Map<string, number>();
      clicksData?.forEach((item: { step: string; count: number }) => {
        const current = stepMap.get(item.step) || 0;
        stepMap.set(item.step, current + item.count);
      });

      // Map step keys to readable labels
      const stepLabelMap: Record<string, string> = {
        "/": "Landing Page",
        // onboarding paths mapped per request
        "/onboarding/welcome": "Welcome",
        "/onboarding/workspace": "Personal Details",
        "/onboarding/terms": "T&C",
        "/onboarding/team": "Invite Others",
        "/onboarding/payment": "Payment",
        "/onboarding/teams": "Invite Others",
        // fallback and legacy keys
        "Landing Page": "Landing Page",
        "/welcome": "Welcome",
        "/workspace": "Personal Details",
        "/team": "Invite Others",
        "/terms": "T&C",
        "/payment": "Payment",
        "/checkout": "Completion",
      };

      // Map raw steps to labels and aggregate by label
      const labelMap = new Map<string, number>();
      stepMap.forEach((totalClicks, step) => {
        const label = stepLabelMap[step] || step;
        const cur = labelMap.get(label) || 0;
        labelMap.set(label, cur + totalClicks);
      });

      let aggregated = Array.from(labelMap.entries()).map(([step, totalClicks]) => ({ step, totalClicks }));

      // Desired order: Landing Page, Welcome, Personal Details, Invite Others, T&C, Payment
      const desiredOrder = [
        "Landing Page",
        "Welcome",
        "Personal Details",
        "Invite Others",
        "T&C",
        "Payment",
      ];

      const ordered: { step: string; totalClicks: number }[] = [];
      // push in desired order if present
      desiredOrder.forEach((label) => {
        const idx = aggregated.findIndex((a) => a.step === label);
        if (idx > -1) {
          ordered.push(aggregated[idx]);
          aggregated.splice(idx, 1);
        }
      });

      // append any remaining labels after the desired ones
      aggregated.sort((a, b) => b.totalClicks - a.totalClicks); // optional: sort remaining by clicks desc
      const finalData = [...ordered, ...aggregated];

      setData(finalData);
    };
    fetchClicksPerStep();
  }, []);

  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <h2 className="text-xl font-bold text-primary mb-6">CLICKS PER STEP</h2>
  <ResponsiveContainer width="100%" height={360}>
        <BarChart data={data}>
          <defs>
            <linearGradient id="colorClicksStep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis
            dataKey="step"
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))", fontWeight: 500, fontSize: 16 }}
            axisLine={true}
            tickLine={true}
            interval={0}
            height={80}
            angle={-25}
            dy={28}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))", fontWeight: 500, fontSize: 14 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              color: "hsl(var(--foreground))",
              fontWeight: 600,
              fontSize: 16,
            }}
          />
          <Bar
            dataKey="totalClicks"
            fill="url(#colorClicksStep)"
            radius={[8, 8, 0, 0]}
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ClicksPerStepChart;
