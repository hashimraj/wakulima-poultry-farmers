import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChicksPage from "./pages/ChicksPage";
import EggsPage from "./pages/EggsPage";
import FeedsPage from "./pages/FeedsPage";
import EquipmentPage from "./pages/EquipmentPage";
import PigsPage from "./pages/PigsPage";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="route-fade">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chicks" element={<ChicksPage />} />
        <Route path="/eggs" element={<EggsPage />} />
        <Route path="/feeds" element={<FeedsPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/pigs" element={<PigsPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />   {/* 👈 Add this here */}
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
