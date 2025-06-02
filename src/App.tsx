import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import {useEffect} from 'react';
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";
import ServizioDetail from "./pages/ServizioDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TerminiServizio from "./pages/TerminiServizio";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to scroll to top on route change
const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
            <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/servizi/:servizioId" element={<ServizioDetail />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
              <Route path="/termini-servizio" element={<TerminiServizio/>}/>
              <Route path="/cookie-policy" element={<CookiePolicy/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
