import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">ElettroAssistenza Milano</h3>
              <p className="text-gray-300 mb-4">
                  Servizio professionale di riparazione elettrodomestici a Milano e provincia. Specializzati in
                  lavatrici, asciugatrici, lavastoviglie, frigoriferi, congelatori, piani cottura e forni. Interventi
                  rapidi, garanzia sui ricambi e prezzi trasparenti.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/riparazioni24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Instagram" className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                  </svg>
                </a>
                <a href="https://wa.me/393205509145" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">I Nostri Servizi</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/servizi/lavatrice" className="text-gray-300 hover:text-[#10b981] transition-colors">Riparazione Lavatrici</Link>
                </li>
                <li>
                    <Link to="/servizi/asciugatrice" className="text-gray-300 hover:text-[#10b981] transition-colors">Riparazione
                        Asciugatrici</Link>
                </li>
                  <li>
                  <Link to="/servizi/lavastoviglie" className="text-gray-300 hover:text-[#10b981] transition-colors">Riparazione Lavastoviglie</Link>
                </li>
                <li>
                  <Link to="/servizi/frigorifero" className="text-gray-300 hover:text-[#10b981] transition-colors">Riparazione Frigoriferi</Link>
                </li>
                <li>
                    <Link to="/servizi/congelatore" className="text-gray-300 hover:text-[#10b981] transition-colors">Riparazione
                        Congelatori</Link>
                </li>
                <li>
                    <Link to="/servizi/piano-cottura" className="text-gray-300 hover:text-[#10b981] transition-colors">Riparazione
                        Piani Cottura</Link>
                </li>
                  <li>
                      <Link to="/servizi/forno" className="text-gray-300 hover:text-[#10b981] transition-colors">Riparazione
                          Forni</Link>
                  </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contatti</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone size={20} className="mr-2 text-[#10b981] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                  <a href="tel:+393205509145" className="hover:text-[#10b981] transition-colors">+39 320 550 9145</a>
                </span>
                </li>
                <li className="flex items-start">
                  <Mail size={20} className="mr-2 text-[#10b981] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                  <a href="mailto:info@riparazioni24.eu" className="hover:text-[#10b981] transition-colors">info@riparazioni24.eu</a>
                </span>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="mr-2 text-[#10b981] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                  Lun-Ven: 8:00-20:00<br />
                  Sab: 8:00-17:00
                </span>
                </li>
              </ul>
            </div>

            {/* Zone Servite */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Zone Servite</h3>
              <ul className="grid grid-cols-2 gap-1">
                <li className="text-gray-300">Milano</li>
                <li className="text-gray-300">Sesto San Giovanni</li>
                <li className="text-gray-300">Cinisello Balsamo</li>
                <li className="text-gray-300">Rho</li>
                <li className="text-gray-300">Rozzano</li>
                <li className="text-gray-300">Cologno Monzese</li>
                <li className="text-gray-300">Corsico</li>
                <li className="text-gray-300">Novate Milanese</li>
                <li className="text-gray-300">Segrate</li>
                <li className="text-gray-300">Buccinasco</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>© {currentYear} Riparazioni24 Milano. Tutti i diritti riservati.</p>
            <div className="mt-2 space-x-4">
              <Link to="/privacy-policy" className="hover:text-[#10b981] transition-colors">Privacy Policy</Link>
              <Link to="/termini-servizio" className="hover:text-[#10b981] transition-colors">Termini di Servizio</Link>
              <Link to="/cookie-policy" className="hover:text-[#10b981] transition-colors">Cookie Policy</Link>
            </div>

            <p className="mt-2">
              Powered by{' '}
              <a href="https://limecodesoftwares.com" target="_blank" rel="noreferrer" className="text-[#a3e635] hover:underline transition-colors">
                Lime Code Softwares
              </a>
            </p>
          </div>

          {/* Structured data for SEO - hidden visually but available for search engines */}
          <div className="schema-org-markup" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Riparazioni24 Milano" />
              <meta itemProp="description"
                    content="Servizio professionale di riparazione elettrodomestici a Milano e provincia. Specializzati in lavatrici, asciugatrici, lavastoviglie, frigoriferi, congelatori, piani cottura e forni. Interventi rapidi, garanzia sui ricambi e prezzi trasparenti."/>
            <link itemProp="url" href="https://www.elettroassistenza-milano.it" />
            <meta itemProp="telephone" content="+393205509145" />
            <meta itemProp="email" content="info@riparazioni24.eu
" />
            <meta itemProp="priceRange" content="€€" />
          </div>
        </div>
      </footer>
  );
};

export default Footer;
