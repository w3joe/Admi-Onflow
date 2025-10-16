import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Your workspace for everything
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Write, plan, collaborate, and get organized. All in one place.
          </p>
          
          <Link to="/onboarding/welcome">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto mt-32 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Write & Organize",
              description: "Create beautiful docs and wikis with rich content"
            },
            {
              title: "Plan & Track",
              description: "Manage projects with powerful databases and views"
            },
            {
              title: "Collaborate & Share",
              description: "Work together in real-time with your team"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
