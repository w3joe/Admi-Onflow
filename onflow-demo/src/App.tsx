import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Welcome from "./pages/onboarding/Welcome";
import Workspace from "./pages/onboarding/Workspace";
import Team from "./pages/onboarding/Team";
import Terms from "./pages/onboarding/Terms";
import Payment from "./pages/onboarding/Payment";
import Complete from "./pages/onboarding/Complete";
import WorkspacePage from "./pages/Workspace";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding/welcome" element={<Welcome />} />
          <Route path="/onboarding/workspace" element={<Workspace />} />
          <Route path="/onboarding/team" element={<Team />} />
          <Route path="/onboarding/terms" element={<Terms />} />
          <Route path="/onboarding/payment" element={<Payment />} />
          <Route path="/onboarding/complete" element={<Complete />} />
          <Route path="/workspace" element={<WorkspacePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
