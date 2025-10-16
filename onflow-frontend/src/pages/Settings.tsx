import React from "react";
import DashboardHeader from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SDK_SNIPPET = `<script type="module" src="https://onflowhacknight.netlify.app/tracking.js"></script>`;

const Settings = () => {
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SDK_SNIPPET);
      toast({
        title: "Copied",
        description: "SDK script tag copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container px-6 py-8">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>

        <section className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">SDK Installation</h2>
          <p className="text-sm text-muted-foreground mb-4">Copy the script tag below and paste it into your site's HTML to enable tracking.</p>

          <pre className="rounded-md bg-muted p-3 overflow-auto text-sm mb-4">
            <code>{SDK_SNIPPET}</code>
          </pre>

          <Button onClick={handleCopy}>Copy SDK link</Button>
        </section>
      </main>
    </div>
  );
};

export default Settings;
