
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, MessageSquare } from 'lucide-react';
import { TikTok } from '@/components/icons/TikTok';

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
              Servizio professionale di riparazione elettrodomestici a Milano e provincia. Interventi rapidi, garanzia sui ricambi e prezzi trasparenti.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-[#10b981] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="text-gray-300 hover:text-[#10b981] transition-colors">
                <TikTok size={24} />
              </a>
              <a href="https://wa.me/393331234567" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-gray-300 hover:text-[#10b981] transition-colors">
                <MessageSquare size={24} />
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
                <Link to="/servizi/lavastoviglie" className="text-gray-300 hover:text-[#10b981] transition-colors">Riparazione Lavastoviglie</Link>
              </li>
              <li>
                <Link to="/servizi/frigorifero" className="text-gray-300 hover:text-[#10b981] transition-colors">Riparazione Frigoriferi</Link>
              </li>
              <li>
                <Link to="/servizi/forno" className="text-gray-300 hover:text-[#10b981] transition-colors">Riparazione Forni</Link>
              </li>
              <li>
                <Link to="/servizi/piccoli-elettrodomestici" className="text-gray-300 hover:text-[#10b981] transition-colors">Altri Elettrodomestici</Link>
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
                  <a href="tel:+393331234567" className="hover:text-[#10b981] transition-colors">333 123 4567</a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-[#10b981] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  <a href="mailto:info@elettroassistenza-milano.it" className="hover:text-[#10b981] transition-colors">info@elettroassistenza-milano.it</a>
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-[#10b981] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Via Esempio 123, 20100 Milano
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
          <p>© {currentYear} ElettroAssistenza Milano. Tutti i diritti riservati.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-[#10b981] transition-colors">Privacy Policy</Link>
            <Link to="/termini-servizio" className="hover:text-[#10b981] transition-colors">Termini di Servizio</Link>
            <Link to="/cookie-policy" className="hover:text-[#10b981] transition-colors">Cookie Policy</Link>
          </div>
        </div>

        {/* Structured data for SEO - hidden visually but available for search engines */}
        <div className="schema-org-markup" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="ElettroAssistenza Milano" />
          <meta itemProp="description" content="Servizio professionale di riparazione elettrodomestici a Milano e provincia. Interventi rapidi, assistenza qualificata e prezzi trasparenti." />
          <link itemProp="url" href="https://www.elettroassistenza-milano.it" />
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="streetAddress" content="Via Esempio 123" />
            <meta itemProp="addressLocality" content="Milano" />
            <meta itemProp="postalCode" content="20100" />
            <meta itemProp="addressRegion" content="MI" />
            <meta itemProp="addressCountry" content="IT" />
          </div>
          <meta itemProp="telephone" content="+393331234567" />
          <meta itemProp="email" content="info@elettroassistenza-milano.it" />
          <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
            <meta itemProp="latitude" content="45.4642" />
            <meta itemProp="longitude" content="9.1900" />
          </div>
          <meta itemProp="priceRange" content="€€" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
