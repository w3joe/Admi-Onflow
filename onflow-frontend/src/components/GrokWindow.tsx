import { Card } from "@/components/ui/card";

interface GrokWindowProps {
  suggestions: string[];
}

import { useMemo } from "react";

const SUGGESTIONS_LIST = [
  // Clicks/Min
  [
    "Increase interactive elements to boost Clicks/Min.",
    "Add tooltips or hover effects to encourage more clicks.",
    "Highlight clickable areas with color or animation.",
  ],
  // Completion Ratio
  [
    "Simplify form steps to improve Completion Ratio.",
    "Reduce required fields to lower abandonment.",
    "Add a progress bar to motivate users to finish.",
  ],
  // Hover/Click Ratio
  [
    "Make call-to-action buttons more prominent to improve Hover/Click Ratio.",
    "Reduce distractions around key clickable elements.",
    "Add micro-interactions to clickable items.",
  ],
  // Early Exit Step
  [
    "Analyze Step 2 for confusing or lengthy fields.",
    "Move non-essential fields after Step 2 to reduce early exits.",
    "Add help text or examples to Step 2 fields.",
  ],
  // Step Duration
  [
    "Shorten instructions in steps with long durations.",
    "Break up lengthy steps into smaller, manageable parts.",
    "Provide time estimates for each step to set expectations.",
  ],
  // Combined suggestions
  [
    "Add a summary page before final submission to improve Completion Ratio and reduce Step Duration.",
    "Enable auto-save for partially completed forms to boost Completion Ratio.",
    "Show estimated completion time upfront to help with Step Duration.",
  ],
  [
    "Provide instant feedback on field errors to reduce early exits and improve Completion Ratio.",
    "Group related fields together for clarity and faster completion.",
    "Offer a skip option for non-essential fields to reduce drop-off at Step 2.",
  ],
  [
    "Display motivational messages after each step to encourage completion.",
    "Show testimonials from users who completed the process.",
    "Add a chatbot for real-time assistance on confusing steps.",
  ],
];

const GrokWindow = () => {
  // Pick a random set of suggestions on each refresh
  const suggestions = useMemo(() => {
    const idx = Math.floor(Math.random() * SUGGESTIONS_LIST.length);
    return SUGGESTIONS_LIST[idx];
  }, []);

  return (
    <Card className="mt-4 p-4 bg-muted border border-primary/20">
      <h3 className="text-lg font-semibold mb-2 text-primary">Grok Suggestions</h3>
      <ul className="list-disc pl-5 text-foreground mb-4">
        {suggestions.length === 0 ? (
          <li>No suggestions available.</li>
        ) : (
          suggestions.map((s, i) => <li key={i}>{s}</li>)
        )}
      </ul>
    </Card>
  );
};

export default GrokWindow;
