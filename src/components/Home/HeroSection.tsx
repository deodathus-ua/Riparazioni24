import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Clock, Shield, Tag, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/heroblock.webp"
          alt="Tecnico specializzato ripara elettrodomestico con strumenti professionali"
          className="w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a9a]/40 to-[#1e40af]/35"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Il tuo elettrodomestico si è rotto?
              </h1>
              <p className="text-2xl font-semibold text-white">
                Riparazione rapida e garantita a domicilio in tutta Milano.
              </p>
            </div>
            <p className="text-xl text-gray-100 max-w-lg">
              Ripariamo i tuoi elettrodomestici rapidamente, ovunque a Milano anche in giornata.
                Interventi su lavatrici, asciugatrici, lavastoviglie, frigoriferi, congelatori, piani cottura e forni
                con garanzia di 12 mesi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+39 320 550 9145">
                <Button size="lg" className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 shadow-md btn-hover-effect">
                  <Phone size={20} className="mr-2" />
                  Chiama Ora
                </Button>
              </a>
              <Link to="/contatti">
                <Button size="lg" variant="outline" className="bg-white text-[#1e3a8a] hover:bg-gray-100 font-semibold btn-hover-effect">
                  Preventivo Gratuito in 60 Secondi
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
              <h3 className="text-2xl font-semibold mb-4 text-white">Perché sceglierci</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 text-[#10b981]">
                    <Clock size={24} />
                  </div>
                  <span className="text-white">Interventi rapidi (anche in giornata) in tutta Milano e provincia</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#10b981]">
                    <Shield size={24} />
                  </div>
                  <span className="text-white">Tecnici certificati con esperienza pluriennale</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#10b981]">
                    <Tag size={24} />
                  </div>
                  <span className="text-white">Prezzi trasparenti e preventivi gratuiti senza sorprese</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-[#10b981]">
                    <MapPin size={24} />
                  </div>
                  <span className="text-white">Copertura totale Milano e provincia 7 giorni su 7</span>
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
