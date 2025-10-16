import { useMemo, useState } from "react";
import GrokWindow from "./GrokWindow";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const SUGGESTIONS_LIST = [
  ["Increase interactive elements to boost Clicks/Min.", "Add tooltips or hover effects to encourage more clicks.", "Highlight clickable areas with color or animation."],
  ["Simplify form steps to improve Completion Ratio.", "Reduce required fields to lower abandonment.", "Add a progress bar to motivate users to finish."],
  ["Make call-to-action buttons more prominent to improve Hover/Click Ratio.", "Reduce distractions around key clickable elements.", "Add micro-interactions to clickable items."],
  ["Analyze Step 2 for confusing or lengthy fields.", "Move non-essential fields after Step 2 to reduce early exits.", "Add help text or examples to Step 2 fields."],
  ["Shorten instructions in steps with long durations.", "Break up lengthy steps into smaller, manageable parts.", "Provide time estimates for each step to set expectations."],
  ["Enable auto-save for partially completed forms.", "Display motivational messages after each step.", "Offer a skip option for non-essential fields."],
  ["Use visual cues to guide users through steps.", "Group related fields together for clarity.", "Add a progress bar with percentage complete."],
  ["Provide contextual help for each form section.", "Allow users to preview their input before submitting.", "Reduce cognitive load by limiting choices per step."],
  ["Show testimonials from users who completed the process.", "Offer incentives for completing all steps.", "Add a chatbot for real-time assistance."],
  ["Make error messages more actionable and friendly.", "Allow users to save and return later.", "Display estimated time to complete each step."],
  ["Add a checklist for required documents before starting.", "Provide a video walkthrough of the process.", "Enable keyboard navigation for accessibility."],
  ["Show a summary of changes before finalizing.", "Offer undo/redo for form edits.", "Add a FAQ section for common issues."],
  ["Use color coding to indicate completed steps.", "Provide instant validation for email and phone fields.", "Allow users to upload files via drag-and-drop."],
  ["Add a timer for each step to encourage faster completion.", "Show progress relative to other users.", "Offer a printable version of the completed form."],
  ["Provide a mobile-friendly version of the form.", "Enable dark mode for better accessibility.", "Add tooltips for ambiguous field labels."],
  ["Allow users to rate their experience after completion.", "Show a congratulatory message upon finishing.", "Offer a feedback form for improvement suggestions."],
  ["Add a summary page before final submission to improve Completion Ratio and reduce Step Duration.", "Enable auto-save for partially completed forms to boost Completion Ratio.", "Show estimated completion time upfront to help with Step Duration."],
  ["Provide instant feedback on field errors to reduce early exits and improve Completion Ratio.", "Group related fields together for clarity and faster completion.", "Offer a skip option for non-essential fields to reduce drop-off at Step 2."],
  ["Display motivational messages after each step to encourage completion.", "Show testimonials from users who completed the process.", "Add a chatbot for real-time assistance on confusing steps."],
  ["Add a checklist for required documents before starting.", "Provide a video walkthrough of the process.", "Enable keyboard navigation for accessibility."],
  ["Show a summary of changes before finalizing.", "Offer undo/redo for form edits.", "Add a FAQ section for common issues."],
  ["Use color coding to indicate completed steps.", "Provide instant validation for email and phone fields.", "Allow users to upload files via drag-and-drop."],
  ["Add a timer for each step to encourage faster completion.", "Show progress relative to other users.", "Offer a printable version of the completed form."],
  ["Provide a mobile-friendly version of the form.", "Enable dark mode for better accessibility.", "Add tooltips for ambiguous field labels."],
  ["Allow users to rate their experience after completion.", "Show a congratulatory message upon finishing.", "Offer a feedback form for improvement suggestions."],
  // Additional unique suggestions for more variety
  ["Add a live chat support option for stuck users.", "Show average completion time for motivation.", "Offer badges for milestone completions."],
  ["Integrate with calendar for scheduling follow-ups.", "Provide downloadable guides for each step.", "Show a checklist of completed actions."],
  ["Allow users to bookmark steps for later.", "Display trending tips from other users.", "Offer a quick start guide for new users."],
  ["Add a visual timeline of the process.", "Show a leaderboard for fastest completions.", "Provide a glossary for technical terms."],
  ["Enable voice input for form fields.", "Offer accessibility options for visually impaired.", "Show a map for location-based steps."],
  ["Provide a sandbox mode for testing before submission.", "Show a preview of the final result.", "Offer a restart option for the process."],
  ["Add a step-by-step video tutorial.", "Show a summary of user progress.", "Offer a reward for completing within a time limit."],
  ["Enable notifications for incomplete steps.", "Show a pop-up reminder for deadlines.", "Offer a checklist for required uploads."],
  ["Allow users to share progress with team members.", "Show a feedback score for each step.", "Offer a help center link for troubleshooting."],
  ["Provide a print-friendly version of the process.", "Show a QR code for mobile access.", "Offer a downloadable PDF summary."],
  ["Add a step completion animation.", "Show a confetti effect on final step.", "Offer a thank you message after submission."],
  ["Enable multi-language support for the form.", "Show a flag selector for language choice.", "Offer translated help guides."],
  ["Provide a dark mode toggle.", "Show a high-contrast mode for accessibility.", "Offer font size adjustment options."],
  ["Add a progress ring for visual feedback.", "Show a countdown timer for each step.", "Offer a pause/resume option for long forms."],
  ["Enable drag-and-drop reordering of steps.", "Show a step history log.", "Offer undo for accidental changes."],
  ["Provide a checklist for mobile users.", "Show a mobile preview of the form.", "Offer a tap-to-call support button."],
  ["Add a chatbot for onboarding questions.", "Show a tip of the day for new users.", "Offer a shortcut menu for frequent actions."],
  ["Enable biometric login for secure access.", "Show a security badge for verified users.", "Offer a privacy policy link on each step."],
  ["Provide a step-by-step checklist for admins.", "Show admin-only tips for process optimization.", "Offer a dashboard for admin analytics."],
  ["Add a gamification badge for completed steps.", "Show a leaderboard for top users.", "Offer a monthly challenge for engagement."],
  ["Enable offline mode for the form.", "Show a sync status indicator.", "Offer a cloud backup option."],
  ["Provide a step-by-step FAQ.", "Show a troubleshooting wizard.", "Offer a live webinar for walkthroughs."],
  ["Add a feedback poll after each step.", "Show a suggestion box for improvements.", "Offer a direct contact form for support."],
  ["Enable step skipping for advanced users.", "Show a summary of skipped steps.", "Offer a review option before finalizing."],
  ["Provide a checklist for required permissions.", "Show a permission request dialog.", "Offer a privacy settings menu."],
  ["Add a step-by-step onboarding guide.", "Show a welcome message for new users.", "Offer a quick tour of the interface."]
];

const AIRecommendation = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  // Pick a random set of suggestions on each refresh
  const grokSuggestions = useMemo(() => {
    const idx = Math.floor(Math.random() * SUGGESTIONS_LIST.length);
    return SUGGESTIONS_LIST[idx];
  }, []);

  // The most impactful suggestion is the first in the set
  const mostImpactful = grokSuggestions[0];

  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in">
      <div className="flex items-start gap-3 mb-4">
        <Sparkles className="h-6 w-6 text-primary mt-1" />
        <h2 className="text-xl font-bold text-primary">AI RECOMMENDATION</h2>
      </div>
      <div className="mb-6">
        <p className="text-foreground leading-relaxed bg-primary/10 border-l-4 border-primary font-bold rounded-md px-3 py-2" title="Most Impactful">
          {mostImpactful}
          <span className="ml-2 text-xs text-primary">Most Impactful</span>
        </p>
      </div>
      <Button
        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105"
        onClick={() => setShowSuggestions((prev) => !prev)}
      >
        View Other Suggestions
      </Button>
  {showSuggestions && <GrokWindow />}
    </Card>
  );
};

export default AIRecommendation;
