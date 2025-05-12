
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-blue-800 text-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Riparazione Elettrodomestici a Milano
            </h1>
            <p className="text-xl text-gray-100 max-w-lg">
              Interventi rapidi su lavatrici, lavastoviglie, frigoriferi e forni. 
              Tecnici qualificati, prezzi trasparenti e garanzia sugli interventi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+393331234567">
                <Button size="lg" className="btn-primary">
                  <Phone size={20} className="mr-2" />
                  Chiama Ora
                </Button>
              </a>
              <Link to="/contatti">
                <Button size="lg" variant="outline" className="bg-white text-brand-blue hover:bg-gray-100 font-semibold">
                  Richiedi Assistenza
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="pt-4">
              <p className="text-gray-200">
                <span className="font-semibold">Servizio disponibile:</span> Milano e provincia, 7 giorni su 7
              </p>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">Perché sceglierci?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-orange mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Intervento entro 24h in tutta Milano e provincia</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-orange mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Tecnici specializzati con esperienza pluriennale</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-orange mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Preventivi gratuiti e prezzi senza sorprese</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-orange mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Garanzia di 12 mesi su ricambi e manodopera</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
