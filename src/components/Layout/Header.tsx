import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#1e3a8a]">Riparazioni 24</span>
            <span className="text-[#10b981] font-medium hidden sm:inline">Milano</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-[#1e3a8a] transition-colors">Home</Link>
            <div className="relative group">
              <span className="font-medium hover:text-[#1e3a8a] transition-colors cursor-pointer">Servizi</span>
              <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/servizi/lavatrice" className="block px-4 py-2 hover:bg-gray-100">Riparazione Lavatrici</Link>
                  <Link to="/servizi/asciugatrice" className="block px-4 py-2 hover:bg-gray-100">Riparazione
                      Asciugatrici</Link>
                <Link to="/servizi/lavastoviglie" className="block px-4 py-2 hover:bg-gray-100">Riparazione Lavastoviglie</Link>
                <Link to="/servizi/frigorifero" className="block px-4 py-2 hover:bg-gray-100">Riparazione Frigoriferi</Link>
                  <Link to="/servizi/congelatore" className="block px-4 py-2 hover:bg-gray-100">Riparazione
                      Congelatori</Link>
                  <Link to="/servizi/piano-cottura" className="block px-4 py-2 hover:bg-gray-100">Riparazione Piani
                      Cottura</Link>
                <Link to="/servizi/forno" className="block px-4 py-2 hover:bg-gray-100">Riparazione Forni</Link>
              </div>
            </div>
            <Link to="/chi-siamo" className="font-medium hover:text-[#1e3a8a] transition-colors">Chi Siamo</Link>
            <Link to="/contatti" className="font-medium hover:text-[#1e3a8a] transition-colors">Contatti</Link>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+39 320 550 9145" className="flex items-center space-x-2 text-[#1e3a8a] hover:text-[#10b981] transition-colors">
              <Phone size={18} />
              <span className="font-semibold">+39 320 550 9145</span>
            </a>
            <Link to="/contatti">
              <Button className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 shadow-md">
                <Calendar size={18} className="mr-2" />
                Richiedi Assistenza
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="font-medium py-2 hover:text-[#1e3a8a] transition-colors" onClick={toggleMenu}>Home</Link>
              <div className="space-y-1">
                <span className="font-medium block">Servizi</span>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/servizi/lavatrice" className="text-sm hover:text-[#1e3a8a] transition-colors" onClick={toggleMenu}>Riparazione Lavatrici</Link>
                  <Link to="/servizi/lavastoviglie" className="text-sm hover:text-[#1e3a8a] transition-colors" onClick={toggleMenu}>Riparazione Lavastoviglie</Link>
                  <Link to="/servizi/frigorifero" className="text-sm hover:text-[#1e3a8a] transition-colors" onClick={toggleMenu}>Riparazione Frigoriferi</Link>
                  <Link to="/servizi/asciugatrice" className="text-sm hover:text-[#1e3a8a] transition-colors" onClick={toggleMenu}>Riparazione Asciugatrici</Link>
                    <Link to="/servizi/congelatore" className="text-sm hover:text-[#1e3a8a] transition-colors"
                          onClick={toggleMenu}>Riparazione Congelatori</Link>
                    <Link to="/servizi/piano-cottura" className="text-sm hover:text-[#1e3a8a] transition-colors"
                          onClick={toggleMenu}>Riparazione Piani Cottura</Link>
                    <Link to="/servizi/forno" className="text-sm hover:text-[#1e3a8a] transition-colors"
                          onClick={toggleMenu}>Riparazione Forni</Link>
                </div>
              </div>
              <Link to="/chi-siamo" className="font-medium py-2 hover:text-[#1e3a8a] transition-colors" onClick={toggleMenu}>Chi Siamo</Link>
              <Link to="/contatti" className="font-medium py-2 hover:text-[#1e3a8a] transition-colors" onClick={toggleMenu}>Contatti</Link>
              <a href="tel:+39 320 550 9145" className="flex items-center space-x-2 text-[#1e3a8a] font-semibold py-2">
                <Phone size={18} />
                <span>+39 320 550 9145</span>
              </a>
              <Link to="/contatti" className="inline-block" onClick={toggleMenu}>
                <Button className="bg-[#10b981] hover:bg-[#059669] text-white w-full">
                  <Calendar size={18} className="mr-2" />
                  Richiedi Assistenza
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
