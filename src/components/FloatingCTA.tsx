
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
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
    ? "fixed bottom-20 left-4 right-4 z-50 animate-fade-in" 
    : "fixed bottom-24 right-4 z-50 animate-fade-in";

  return (
    <div className={positionClass}>
      <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 flex flex-col md:flex-row items-center md:space-x-4">
        <div className="mb-3 md:mb-0 text-center md:text-left">
          <h4 className="font-medium text-[#1e3a8a]">Hai un elettrodomestico guasto?</h4>
          <p className="text-sm text-gray-500">Riparazione garantita in tutta Milano</p>
        </div>
        <div className="flex items-center space-x-2">
          <a href="tel:+393331234567" className="block">
            <Button size="sm" className="bg-[#10b981] hover:bg-[#059669] text-white whitespace-nowrap">
              <Phone size={16} className="mr-1 hidden md:inline" />
              Chiama ora
            </Button>
          </a>
          <Link to="/contatti" className="block">
            <Button size="sm" className="bg-[#1e3a8a] hover:bg-[#2563eb] text-white whitespace-nowrap">
              Contattaci
            </Button>
          </Link>
          <button 
            onClick={handleDismiss} 
            className="text-gray-400 hover:text-gray-700 transition-colors focus:outline-none"
            aria-label="Chiudi"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
