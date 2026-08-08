import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BackToTop from "@/components/ui/BackToTop";
import ZystraChatbot from "@/components/ui/ZystraChatbot";
import NetflixPreloader from "@/components/ui/NetflixPreloader";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ServicesPage from "@/pages/services";
import InnovationPage from "@/pages/innovation";
import AboutUsPage from "@/pages/about";
import PortfolioPage from "@/pages/portfolio";
import ContactPage from "@/pages/contact";

const queryClient = new QueryClient();

// Scroll to top automatically on every route transition
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/innovation" component={InnovationPage} />
      <Route path="/about" component={AboutUsPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <NetflixPreloader />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <ZystraChatbot />
        <BackToTop />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
