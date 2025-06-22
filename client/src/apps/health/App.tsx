import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Home from "./pages/home";
import ClinicLocator from "./pages/locator";
import VaccinationScheduler from "./pages/scheduler";
import AINurseAssistant from "./pages/chat";
import HealthDashboard from "./pages/dashboard";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/locator" component={ClinicLocator} />
        <Route path="/scheduler" component={VaccinationScheduler} />
        <Route path="/chat" component={AINurseAssistant} />
        <Route path="/dashboard" component={HealthDashboard} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
