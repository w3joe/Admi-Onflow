import { Card } from "@/components/ui/card";

interface Metric {
  label: string;
  value: string | number;
}

interface MetricsCardProps {
  metrics: Metric[];
}

const MetricsCard = ({ metrics }: MetricsCardProps) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <h2 className="text-xl font-bold text-primary mb-6">KEY METRICS</h2>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 transition-all duration-200 hover:translate-x-1"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {metric.label}
            </span>
            <span className="text-2xl font-bold text-foreground">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MetricsCard;
