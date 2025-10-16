import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const CPMChart = () => {
  const [data, setData] = useState([]);

  // Helper: format timestamp to "HH:MM"
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Fetch click data and aggregate per minute
  useEffect(() => {
    async function fetchClickData() {
      const { data: clicks, error } = await supabase
        .from("clicks")
        .select("timestamp, count")
        .order("timestamp", { ascending: true });

      if (error) {
        console.error("Error fetching click data:", error);
        return;
      }

      // Group clicks by minute
      const grouped: Record<string, number> = {};
      clicks.forEach((row) => {
        const minute = formatTime(row.timestamp);
        grouped[minute] = (grouped[minute] || 0) + (row.count || 0);
      });

      // Convert to array format for Recharts
      const chartData = Object.entries(grouped).map(([time, clicks]) => ({
        time,
        clicks,
      }));

      setData(chartData);
    }

    fetchClickData();

    // Optional: auto-refresh every 30s
    const interval = setInterval(fetchClickData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <h2 className="text-xl font-bold text-primary mb-6">CLICKS PER MINUTE</h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--border))"
            opacity={0.3}
          />
          <XAxis
            dataKey="time"
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
          <Area
            type="monotone"
            dataKey="clicks"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fill="url(#colorClicks)"
            animationDuration={1000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default CPMChart;
