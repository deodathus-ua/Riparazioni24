import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Phone, X, MessageCircle, Zap} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling down a bit
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    // Keep it dismissed for this session only
    sessionStorage.setItem('floatingCTADismissed', 'true');
  };

  // Check if it was dismissed previously in this session
  useEffect(() => {
    if (sessionStorage.getItem('floatingCTADismissed') === 'true') {
      setDismissed(true);
    }
  }, []);

  if (dismissed || !visible) return null;

  // Adjust styling based on device
  const positionClass = isMobile
      ? "fixed bottom-32 left-8 right-4 z-50"
      : "fixed bottom-24 right-6 z-50";

  return (
      <div
          className={`${positionClass} transform transition-all duration-500 ease-out ${
              visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
              animation: visible ? 'slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : undefined
          }}
      >
          <div className="relative">
              {/* Glow effect */}
              <div
                  className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-200"></div>

              {/* Main container */}
              <div
                  className={`relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 ${
                      isHovered ? 'shadow-3xl scale-105' : ''
                  }`}>
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/20"></div>

                  <div className="relative p-4 md:p-5">
                      {/* Header with enhanced styling */}
                      <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                              <div
                                  className="p-2.5 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg">
                                  <Zap className="h-5 w-5 text-white"/>
                              </div>
                              <div className="flex-1">
                                  <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                                      Elettrodomestico guasto?
                                  </h4>
                                  <p className="text-xs text-gray-600 mt-0.5 flex items-center gap-1">
                                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                      Riparazione garantita • Milano
                                  </p>
                              </div>
                          </div>

                          <button
                              onClick={handleDismiss}
                              className="text-gray-400 hover:text-gray-700 p-1.5 rounded-lg hover:bg-gray-100/60 transition-all duration-200 group"
                              aria-label="Chiudi"
                          >
                              <X className="h-4 w-4 group-hover:rotate-90 transition-transform duration-200"/>
                          </button>
                      </div>

                      {/* Action buttons with enhanced design */}
                      <div className="flex flex-col sm:flex-row gap-2.5">
                          <a href="tel:+39 320 550 9145" className="flex-1">
                              <Button
                                  size="sm"
                                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] rounded-xl font-medium"
                              >
                                  <Phone className="h-4 w-4 mr-2"/>
                                  <span className="hidden sm:inline">Chiama ora</span>
                                  <span className="sm:hidden">Chiama</span>
                              </Button>
                          </a>

                          <Link to="/contatti" className="flex-1">
                              <Button
                                  size="sm"
                                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] rounded-xl font-medium"
                              >
                                  <MessageCircle className="h-4 w-4 mr-2"/>
                                  <span className="hidden sm:inline">Contattaci</span>
                                  <span className="sm:hidden">Scrivi</span>
                              </Button>
                          </Link>
                      </div>

                      {/* Trust indicators */}
                      <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                              <span className="text-yellow-500">★★★★★</span>
                              <span>4.6</span>
                          </div>
                          <div className="w-px h-3 bg-gray-300"></div>
                          <span>Tecnici qualificati</span>
                          <div className="w-px h-3 bg-gray-300"></div>
                          <span>Garanzia 12 mesi</span>
                      </div>
                  </div>

                  {/* Subtle animation border */}
                  <div
                      className="absolute inset-0 border border-gradient-to-r from-transparent via-emerald-500/20 to-transparent rounded-2xl pointer-events-none"></div>
        </div>
      </div>

          <style>{`
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px) scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }

            .shadow-3xl {
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            }
        `}</style>
    </div>
  );
};

export default FloatingCTA;
