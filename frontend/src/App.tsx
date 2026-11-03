import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Index from "./pages/Index";
import Command from "./pages/Command";
import HowItWorks from "./pages/HowItWorks";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { initAnalytics, trackPageView } from "./lib/analytics";

const queryClient = new QueryClient();

initAnalytics();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SmoothScroll>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/command" element={<Command />} />
              <Route path="/whizunik-command" element={<Command />} />
              <Route path="/hub" element={<Navigate to="/command" replace />} />
              <Route path="/whizunik-hub" element={<Navigate to="/command" replace />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/strategic-advisory" element={<Services />} />
              <Route
                path="/strategic-capital-advisory"
                element={<Navigate to="/strategic-advisory" replace />}
              />
              <Route path="/services" element={<Navigate to="/strategic-advisory" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SmoothScroll>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
