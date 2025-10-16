import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

const Complete = () => {
  return (
    <OnboardingLayout currentStep={6}>
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 animate-scale-in">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          You're all set!
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Your workspace is ready. Let's start building something amazing together.
        </p>
        
        <Link to="/workspace">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Open workspace 
            <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </Link>
      </div>
    </OnboardingLayout>
  );
};

export default Complete;
