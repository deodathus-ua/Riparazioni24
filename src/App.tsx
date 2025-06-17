import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {HashRouter, Routes, Route, useLocation} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import {useEffect, Suspense, lazy} from 'react';
import Index from "./pages/Index";

// Lazy load only the least critical pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TerminiServizio = lazy(() => import("./pages/TerminiServizio"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Keep main pages as regular imports for better UX
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";
import ServizioDetail from "./pages/ServizioDetail";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            },
  },
});

// Component to scroll to top on route change
const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    // Remove loading div when React has mounted with smooth fade out
    useEffect(() => {
        const loadingDiv = document.querySelector('.loading');
        if (loadingDiv) {
            // Add fade out class first
            loadingDiv.classList.add('fade-out');
            // Remove element after animation completes
            setTimeout(() => {
                loadingDiv.remove();
            }, 300);
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <TooltipProvider>
                    <Toaster/>
                    <Sonner/>
          <HashRouter>
            <ScrollToTop/>
              <Suspense fallback={null}>
                  <Routes>
                      <Route path="/" element={<Index/>}/>
                      <Route path="/chi-siamo" element={<ChiSiamo/>}/>
                      <Route path="/contatti" element={<Contatti/>}/>
                      <Route path="/servizi/:servizioId" element={<ServizioDetail/>}/>
                      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                      <Route path="/termini-servizio" element={<TerminiServizio/>}/>
                      <Route path="/cookie-policy" element={<CookiePolicy/>}/>
                      <Route path="*" element={<NotFound/>}/>
                  </Routes>
              </Suspense>
          </HashRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
