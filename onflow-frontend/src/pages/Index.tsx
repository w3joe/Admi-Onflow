import DashboardHeader from "@/components/DashboardHeader";
import AIRecommendation from "@/components/AIRecommendation";
import MetricsCard from "@/components/MetricsCard";
import CPMChart from "@/components/CPMChart";
import EarlyExitChart from "@/components/EarlyExitChart";
import StepDurationHeatmap from "@/components/StepDurationHeatmap";
import ClicksPerStepChart from "@/components/ClicksPerStepChart";
import { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";

const Index = () => {
  const [cpmData, setCpmData] = useState([]);

  useEffect(() => {
    async function fetchClickData() {
      const { data: clicks, error } = await supabase
        .from("clicks")
        .select("timestamp, count")
        .order("timestamp", { ascending: true });

      if (error) {
        setCpmData([]);
        return;
      }

      // Group clicks by minute
      const grouped = {};
      clicks.forEach((row) => {
        const date = new Date(row.timestamp);
        const minute = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        grouped[minute] = (grouped[minute] || 0) + (row.count || 0);
      });
      const chartData = Object.entries(grouped).map(([time, clicks]) => ({ time, clicks }));
      setCpmData(chartData);
    }
    fetchClickData();
  }, []);

  // Calculate average clicks per minute
  const avgClicksPerMin = cpmData.length > 0
    ? Math.round(cpmData.reduce((sum, d) => sum + d.clicks, 0) / cpmData.length)
    : "-";

  // StepDurationHeatmap data (sync with chart)
  const heatmapData = [
    { step: "Welcome", durations: [120, 40, 20, 10, 5] },
    { step: "Personal Details", durations: [5, 15, 30, 70, 80] },
    { step: "Invite Others", durations: [20, 45, 60, 50, 25] },
    { step: "Terms & Conditions", durations: [16, 36, 64, 60, 24] },
    { step: "Payment", durations: [10, 30, 50, 70, 40] },
    { step: "Completion", durations: [160, 24, 10, 4, 2] },
  ];

  // Omit Welcome and Completion pages for average calculation
  const filteredSteps = heatmapData.filter(row => row.step !== "Welcome" && row.step !== "Completion");
  const totalDurations = filteredSteps.reduce((sum, row) => sum + row.durations.reduce((a, b) => a + b, 0), 0);
  const totalBins = filteredSteps.reduce((sum, row) => sum + row.durations.length, 0);
  const avgStepDuration = totalBins > 0 ? Math.round(totalDurations / totalBins) : 0;

  // Format as seconds/minutes
  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}min${sec > 0 ? ` ${sec}s` : ""}`;
  };

  const metrics = [
    { label: "Clicks/Min", value: avgClicksPerMin },
    { label: "Completion Ratio", value: "82%" },
    { label: "Hover/Click Ratio", value: "2.5" },
    { label: "Early Exit Step", value: "Step 2" },
    { label: "Step Duration", value: formatDuration(avgStepDuration) },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container px-6 py-8">
        <div className="grid gap-6 md:gap-8">
          {/* AI Recommendation - Full Width */}
          <div className="animate-fade-in">
            <AIRecommendation />
          </div>

          {/* Metrics, CPM Chart, and Early Exit Chart */}
          <div className="grid gap-6 lg:grid-cols-3 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <MetricsCard metrics={metrics} />
            <CPMChart />
            <EarlyExitChart />
          </div>

          {/* Heatmap and Clicks Per Step Chart */}
          <div className="grid gap-6 lg:grid-cols-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <StepDurationHeatmap />
            <ClicksPerStepChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
