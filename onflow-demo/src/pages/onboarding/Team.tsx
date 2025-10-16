import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, UserPlus, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

const Team = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [currentEmail, setCurrentEmail] = useState("");

  const addEmail = () => {
    if (currentEmail && currentEmail.includes("@")) {
      setEmails([...emails, currentEmail]);
      setCurrentEmail("");
    }
  };

  const removeEmail = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  return (
    <OnboardingLayout currentStep={3}>
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6">
            <UserPlus className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Invite your team
          </h1>
          <p className="text-lg text-muted-foreground">
            Collaborate better when your whole team is here
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-8">
          <div className="flex gap-3 mb-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="colleague@company.com"
                value={currentEmail}
                onChange={(e) => setCurrentEmail(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addEmail()}
                className="pl-10 h-12"
              />
            </div>
            <Button onClick={addEmail} size="lg" className="px-6">
              Add
            </Button>
          </div>

          {emails.length > 0 && (
            <div className="space-y-2 mt-6">
              {emails.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-secondary rounded-lg animate-scale-in"
                >
                  <span className="text-sm">{email}</span>
                  <button
                    onClick={() => removeEmail(index)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/onboarding/terms">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-6 py-6"
            >
              Skip for now
            </Button>
          </Link>
          <Link to="/onboarding/terms">
            <Button 
              size="lg" 
              className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Send invites <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Team;
