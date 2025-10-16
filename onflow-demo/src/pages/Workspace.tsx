import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Settings } from "lucide-react";

const Workspace = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">My Workspace</h1>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button className="shadow-sm">
                <Plus className="h-4 w-4 mr-2" />
                New page
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Welcome back! 👋</h2>
            <p className="text-lg text-muted-foreground">
              Start writing, planning, or organizing your work.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Create a new page",
                description: "Start writing with a blank page",
                icon: FileText,
                action: "Create page"
              },
              {
                title: "Import content",
                description: "Bring your existing documents",
                icon: Plus,
                action: "Import"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-md group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="ghost" className="px-0 hover:bg-transparent">
                    {item.action} →
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workspace;
