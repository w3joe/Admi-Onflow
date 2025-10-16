import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

const Welcome = () => {
  return (
    <OnboardingLayout currentStep={1}>
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to your workspace
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Let's get you set up in just a few steps. This will only take a minute.
        </p>
        
        <Link to="/onboarding/workspace">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Continue <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </OnboardingLayout>
  );
};

export default Welcome;
