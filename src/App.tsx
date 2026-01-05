import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Layout } from "@/components/Layout";
import { Onboarding } from "@/components/Onboarding";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import InvestmentsPage from "./pages/InvestmentsPage";
import ToolsPage from "./pages/ToolsPage";
import GlossaryPage from "./pages/GlossaryPage";
import FAQPage from "./pages/FAQPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem('bluemarket-onboarding-complete');
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  if (showOnboarding) {
    return <Onboarding onComplete={() => setShowOnboarding(false)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
