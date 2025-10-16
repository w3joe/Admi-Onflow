
import { Card } from "@/components/ui/card";

const heatmapData = [
  { step: "Welcome", durations: [120, 40, 20, 10, 5] },
  { step: "Personal Details", durations: [5, 15, 30, 70, 80] },
  { step: "Invite Others", durations: [20, 45, 60, 50, 25] },
  { step: "Terms & Conditions", durations: [16, 36, 64, 60, 24] },
  { step: "Payment", durations: [10, 30, 50, 70, 40] },
  { step: "Completion", durations: [160, 24, 10, 4, 2] },
];

const timeRanges = ["0-10s", "10-30s", "30-60s", "1-2min", "2min+"];

const getHeatColor = (value: number) => {
  if (value >= 100) return "bg-primary text-primary-foreground";
  if (value >= 70) return "bg-primary/80 text-primary-foreground";
  if (value >= 40) return "bg-primary/60 text-foreground";
  return "bg-secondary text-foreground";
};

const StepDurationHeatmap = () => {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <h2 className="text-xl font-bold text-primary mb-6">STEP DURATION HEATMAP</h2>
      <div className="overflow-x-auto">
        <div className="min-w-[500px]">
          <div className="grid grid-cols-6 gap-2 mb-2">
            <div></div>
            {timeRanges.map((range) => (
              <div key={range} className="text-center text-sm font-semibold text-foreground">
                {range}
              </div>
            ))}
          </div>
          {heatmapData.map((row, rowIndex) => (
            <div 
              key={row.step} 
              className="grid grid-cols-6 gap-2 mb-2 animate-fade-in"
              style={{ animationDelay: `${rowIndex * 100}ms` }}
            >
              <div className="flex items-center text-sm font-semibold text-foreground">
                {row.step}
              </div>
              {row.durations.slice(0, 5).map((value, colIndex) => (
                <div
                  key={colIndex}
                  className={`flex items-center justify-center rounded-lg p-4 text-lg font-bold transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer ${getHeatColor(value)}`}
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default StepDurationHeatmap;
