import React from 'react';
import { Link } from 'react-router-dom';
import {Phone, Mail, Clock, MapPin, Award, Shield} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
              {/* Main footer content */}
              <div className="container px-4 pt-16 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                      {/* Company Info */}
                      <div className="lg:col-span-1">
                          <div className="mb-6">
                              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                                  Riparazioni 24
                              </h3>
                              <span className="text-green-400 font-semibold text-lg">Milano</span>
                          </div>
                          <p className="text-gray-300 mb-6 leading-relaxed">
                              Il tuo partner di fiducia per riparazioni elettrodomestici a Milano e provincia.
                              Servizio professionale 7 giorni su 7 con tecnici specializzati e garanzia estesa.
                              Rapidità, qualità e prezzi trasparenti dal 2020.
                          </p>

                          {/* Key features */}
                          <div className="space-y-2 mb-6">
                              <div className="flex items-center text-sm">
                                  <Shield size={16} className="mr-2 text-green-400 flex-shrink-0"/>
                                  <span className="text-gray-300">Garanzia 12 mesi sui ricambi</span>
                              </div>
                              <div className="flex items-center text-sm">
                                  <Award size={16} className="mr-2 text-blue-400 flex-shrink-0"/>
                                  <span className="text-gray-300">Tecnici certificati esperti</span>
                              </div>
                              <div className="flex items-center text-sm">
                                  <Clock size={16} className="mr-2 text-yellow-400 flex-shrink-0"/>
                                  <span className="text-gray-300">Interventi anche in giornata</span>
                              </div>
                          </div>

                          {/* Social links */}
                          <div className="flex space-x-4">
                              <a href="https://www.instagram.com/riparazioni24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                 target="_blank" rel="noreferrer" aria-label="Instagram"
                                 className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                       fill="currentColor">
                                      <path
                                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                  </svg>
                              </a>
                              <a href="https://wa.me/393205509145" target="_blank" rel="noreferrer"
                                 aria-label="WhatsApp"
                                 className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 hover:scale-110 transition-all duration-300 shadow-lg">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                       fill="currentColor">
                                      <path
                                          d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                  </svg>
                              </a>
                          </div>
                      </div>

                      {/* Services */}
                      <div>
                          <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                              <Award size={20} className="mr-2 text-blue-400"/>
                              I Nostri Servizi
                          </h3>
                          <ul className="space-y-3">
                              <li>
                                  <Link to="/servizi/lavatrice"
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                      <span
                                          className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                                      Riparazione Lavatrici
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/servizi/asciugatrice"
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                      <span
                                          className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                                      Riparazione Asciugatrici
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/servizi/lavastoviglie"
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                      <span
                                          className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                                      Riparazione Lavastoviglie
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/servizi/frigorifero"
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                      <span
                                          className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                                      Riparazione Frigoriferi
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/servizi/congelatore"
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                      <span
                                          className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                                      Riparazione Congelatori
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/servizi/piano-cottura"
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                      <span
                                          className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                                      Riparazione Piani Cottura
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/servizi/forno"
                                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                      <span
                                          className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                                      Riparazione Forni
                                  </Link>
                              </li>
                          </ul>
                      </div>

                      {/* Contact Info */}
                      <div>
                          <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                              <Phone size={20} className="mr-2 text-green-400"/>
                              Contatti
                          </h3>
                          <ul className="space-y-4">
                              <li className="flex items-start group">
                                  <Phone size={20}
                                         className="mr-3 text-green-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"/>
                                  <div>
                                      <a href="tel:+393205509145"
                                         className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium">
                                          +39 320 550 9145
                                      </a>
                                      <p className="text-gray-400 text-sm">Chiamaci ora</p>
                                  </div>
                              </li>
                              <li className="flex items-start group">
                                  <Mail size={20}
                                        className="mr-3 text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"/>
                                  <div>
                                      <a href="mailto:info@riparazioni24.eu"
                                         className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                                          info@riparazioni24.eu
                                      </a>
                                      <p className="text-gray-400 text-sm">Email ufficiale</p>
                                  </div>
                              </li>
                              <li className="flex items-start group">
                                  <Clock size={20}
                                         className="mr-3 text-yellow-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"/>
                                  <div className="text-gray-300">
                                      <p className="font-medium">Orari di servizio:</p>
                                      <p className="text-sm text-gray-400">Lun-Ven: 8:00-20:00</p>
                                      <p className="text-sm text-gray-400">Sab: 8:00-17:00</p>
                                      <p className="text-sm text-yellow-400">Dom: Emergenze</p>
                                  </div>
                              </li>
                          </ul>
                      </div>

                      {/* Zone Servite */}
                      <div>
                          <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                              <MapPin size={20} className="mr-2 text-blue-400"/>
                              Zone di Intervento
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                              {[
                                  'Milano (tutti i quartieri)',
                                  'Sesto San Giovanni',
                                  'Cinisello Balsamo',
                                  'Rho', 'Rozzano',
                                  'Cologno Monzese',
                                  'Corsico',
                                  'Novate Milanese',
                                  'Segrate',
                                  'Buccinasco',
                                  'Assago',
                                  'Opera'
                              ].map((zona, index) => (
                                  <div key={index} className="flex items-center text-gray-300 text-sm group">
                                      <span
                                          className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                                      {zona}
                                  </div>
                              ))}
                          </div>
                          <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-800/30">
                              <p className="text-blue-300 text-sm font-medium">
                                  ✓ Copertura totale Milano e provincia
                              </p>
                              <p className="text-gray-400 text-xs mt-1">
                                  Interventi rapidi 7 giorni su 7
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Bottom section */}
              <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
                  <div className="container px-4 py-6">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                          <div className="text-center md:text-left">
                              <p className="text-gray-400 text-sm">
                                  © {currentYear} <span
                                  className="text-white font-semibold">Riparazioni 24 Milano</span>. Tutti i diritti
                                  riservati.
                              </p>
                              <p className="text-gray-500 text-xs mt-1">
                                  Servizio professionale di riparazione elettrodomestici dal 2020
                              </p>
                          </div>

                          <div className="flex flex-wrap justify-center gap-4 text-sm">
                              <Link to="/privacy-policy"
                                    className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                                  Privacy Policy
                              </Link>
                              <Link to="/termini-servizio"
                                    className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                                  Termini di Servizio
                              </Link>
                              <Link to="/cookie-policy"
                                    className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                                  Cookie Policy
                              </Link>
                          </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-800/50 text-center">
                          <p className="text-gray-500 text-xs">
                              Powered by{' '}
                              <a href="https://limecodesoftwares.com" target="_blank" rel="noreferrer"
                                 className="text-green-400 hover:text-green-300 transition-colors duration-300 font-medium">
                                  Lime Code Softwares
                              </a>
                          </p>
                      </div>
                  </div>
              </div>

              {/* Structured data for SEO */}
              <div className="schema-org-markup" itemScope itemType="https://schema.org/LocalBusiness">
                  <meta itemProp="name" content="Riparazioni 24 Milano"/>
                  <meta itemProp="description"
                        content="Servizio professionale di riparazione elettrodomestici a Milano e provincia dal 2020. Tecnici specializzati, garanzia 12 mesi, interventi rapidi 7 giorni su 7. Specializzati in lavatrici, asciugatrici, lavastoviglie, frigoriferi, congelatori, piani cottura e forni."/>
                  <link itemProp="url" href="https://www.riparazioni24.eu"/>
                  <meta itemProp="telephone" content="+393205509145"/>
                  <meta itemProp="email" content="info@riparazioni24.eu"/>
                  <meta itemProp="priceRange" content="€€"/>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
