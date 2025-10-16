import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navItems = ["Dashboard", "Reports", "AI Insights", "Settings"];
  const navigate = useNavigate();
  
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <span className="text-2xl font-bold text-primary-foreground">O</span>
            </div>
            <span className="text-xl font-bold">Onflow</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Button
                key={item}
                variant={index === 0 ? "default" : "ghost"}
                className={index === 0 ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
                onClick={() => {
                  const path = item === "Dashboard" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;
                  navigate(path);
                }}
              >
                {item}
              </Button>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-sm font-medium">Admi</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-primary-foreground">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
