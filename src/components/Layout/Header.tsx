import React from 'react';
import { Link } from 'react-router-dom';
import {Phone, Calendar, Menu, X, MapPin, Clock, ChevronDown} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const services = [
        {name: 'Riparazione Lavatrici', path: '/servizi/lavatrice'},
        {name: 'Riparazione Asciugatrici', path: '/servizi/asciugatrice'},
        {name: 'Riparazione Lavastoviglie', path: '/servizi/lavastoviglie'},
        {name: 'Riparazione Frigoriferi', path: '/servizi/frigorifero'},
        {name: 'Riparazione Congelatori', path: '/servizi/congelatore'},
        {name: 'Riparazione Piani Cottura', path: '/servizi/piano-cottura'},
        {name: 'Riparazione Forni', path: '/servizi/forno'}
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 hidden md:block">
                <div className="container px-4">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center">
                                <MapPin size={14} className="mr-1 text-blue-200"/>
                                <span>Milano e Provincia</span>
              </div>
                <div className="flex items-center">
                    <Clock size={14} className="mr-1 text-blue-200"/>
                    <span>Lun-Ven: 8:00-20:00 | Sab: 8:00-17:00</span>
                </div>
            </div>
              <div className="flex items-center space-x-4">
                  <a href="mailto:info@riparazioni24.eu" className="hover:text-blue-200 transition-colors">
                      info@riparazioni24.eu
                  </a>
                  <span className="text-blue-200">|</span>
                  <span className="text-blue-200 font-medium">Servizio 7 giorni su 7</span>
              </div>
          </div>
        </div>
      </div>

        {/* Main Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
            <div className="container px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Enhanced Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <img
                            src="/logo.png"
                            alt="Riparazioni 24 Milano - Logo"
                            className="h-10 w-auto object-contain"
                            width="120"
                            height="40"
                            loading="eager"
                            fetchpriority="high"
                        />
                  <div className="ml-3">
                      <div className="flex items-baseline">
                    <span className="lcp-text">
                      Riparazioni 24
                    </span>
                          <span className="text-green-500 font-semibold text-lg ml-2 hidden sm:inline">Milano</span>
                      </div>
                      <p className="text-xs text-gray-500 hidden sm:block">Assistenza Elettrodomestici</p>
                  </div>
            </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                  <Link
                      to="/"
                      className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                      Home
                      <span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>

                  <div className="relative group">
                      <button
                          className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                      >
                          Servizi
                          <ChevronDown size={16}
                                       className={`ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}/>
                      </button>

                      <div
                          className={`absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform ${isServicesOpen ? 'translate-y-0' : 'translate-y-2'}`}
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                      >
                          <div className="p-4">
                              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">I Nostri
                                  Servizi</h3>
                              <div className="grid grid-cols-1 gap-1">
                                  {services.map((service) => (
                                      <Link
                                          key={service.path}
                                          to={service.path}
                                          className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 group/item"
                                      >
                                          <span
                                              className="text-gray-700 group-hover/item:text-blue-600 transition-colors">
                            {service.name}
                          </span>
                                      </Link>
                                  ))}
                              </div>
                              <div className="mt-4 pt-3 border-t border-gray-100">
                                  <Link
                                      to="/contatti"
                                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                                  >
                                      → Richiedi preventivo gratuito
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>

                  <Link
                      to="/chi-siamo"
                      className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                      Chi Siamo
                      <span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>

                  <Link
                      to="/contatti"
                      className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                      Contatti
                      <span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
              </nav>

              {/* Enhanced Call to Action */}
              <div className="hidden md:flex items-center space-x-4">
                  <a
                      href="tel:+393205509145"
                      className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all duration-300 group border border-gray-200"
                  >
                      <div
                          className="bg-green-500 text-white p-1.5 rounded-full group-hover:bg-green-600 transition-colors">
                          <Phone size={14}/>
                      </div>
                      <div className="hidden lg:block">
                          <p className="text-xs text-gray-500">Chiamaci ora</p>
                          <p className="font-bold text-gray-900">+39 320 550 9145</p>
                      </div>
              </a>

                <Link to="/contatti">
                    <Button
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                  <Calendar size={18} className="mr-2" />
                    <span className="hidden lg:inline">Richiedi Assistenza</span>
                    <span className="lg:hidden">Assistenza</span>
                </Button>
              </Link>
            </div>

              {/* Enhanced Mobile Menu Button */}
              <button
                  className="md:hidden bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
                  onClick={toggleMenu}
              >
                  {isMenuOpen ? <X size={20} className="text-gray-700"/> : <Menu size={20} className="text-gray-700"/>}
                  <span className="text-gray-700 font-medium text-sm">Menu</span>
              </button>
          </div>

            {/* Enhanced Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden mt-6 pb-4 border-t border-gray-100 pt-4">
                    {/* Mobile Top Info */}
                    <div className="bg-blue-50 rounded-lg p-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-blue-700">
                                <MapPin size={14} className="mr-1"/>
                                <span>Milano e Provincia</span>
                            </div>
                            <div className="flex items-center text-blue-700">
                                <Clock size={14} className="mr-1"/>
                                <span>7 giorni su 7</span>
                            </div>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        <Link
                            to="/"
                            className="block font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>

                        <div className="space-y-1">
                            <button
                                className="w-full text-left font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                Servizi
                                <ChevronDown size={16}
                                             className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}/>
                            </button>

                            {isServicesOpen && (
                                <div className="bg-gray-50 rounded-lg p-2 ml-4 space-y-1">
                                    {services.map((service) => (
                                        <Link
                                            key={service.path}
                                            to={service.path}
                                            className="flex items-center text-sm py-2 px-3 rounded-md hover:bg-white transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/chi-siamo"
                            className="block font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={toggleMenu}
                        >
                            Chi Siamo
                        </Link>

                        <Link
                            to="/contatti"
                            className="block font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={toggleMenu}
                        >
                            Contatti
                        </Link>

                        {/* Mobile Contact Actions */}
                        <div className="pt-4 space-y-3">
                            <a
                                href="tel:+393205509145"
                                className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg border border-green-200"
                            >
                                <div className="bg-green-500 text-white p-2 rounded-full">
                                    <Phone size={18}/>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Chiamaci subito</p>
                                    <p className="font-bold text-gray-900">+39 320 550 9145</p>
                                </div>
                            </a>

                            <Link to="/contatti" onClick={toggleMenu}>
                                <Button
                                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-lg shadow-md">
                                    <Calendar size={18} className="mr-2"/>
                                    Richiedi Assistenza
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
      </header>
    </>
  );
};

export default Header;
