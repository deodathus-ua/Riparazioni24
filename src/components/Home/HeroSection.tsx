import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Clock, Shield, Tag, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute top-1/2 -left-20 w-80 h-80 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
              <div
                  className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-15 blur-2xl"></div>
      </div>
      
      <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
            <div className="mb-8">
                <div
                    className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Servizio attivo 7 giorni su 7
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    Il tuo elettrodomestico
                    <span className="text-blue-600"> si è rotto?</span>
              </h1>
                <p className="text-xl md:text-2xl font-medium text-gray-700">
                Riparazione rapida e garantita a domicilio in tutta Milano.
              </p>
            </div>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Ripariamo i tuoi elettrodomestici rapidamente, ovunque a Milano anche in giornata.
                Interventi su lavatrici, asciugatrici, lavastoviglie, frigoriferi, congelatori, piani cottura e forni
                con garanzia di 12 mesi.
            </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+39 320 550 9145">
                  <Button size="lg"
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl btn-hover-effect w-full sm:w-auto">
                  <Phone size={20} className="mr-2" />
                  Chiama Ora
                </Button>
              </a>
              <Link to="/contatti">
                  <Button size="lg" variant="outline"
                          className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg btn-hover-effect w-full sm:w-auto">
                  Preventivo Gratuito in 60 Secondi
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="pt-4">
                <p className="text-gray-600 font-medium">
                    <span className="text-gray-800 font-semibold">Servizio disponibile:</span> Milano e provincia, 7
                    giorni su 7
              </p>
            </div>
          </div>

            <div className="relative animate-slide-up">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
                  {/* Decorative element */}
                  <div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-10 transform translate-x-8 -translate-y-8"></div>

                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Perché sceglierci</h3>
                  <ul className="space-y-5">
                      <li className="flex items-start group">
                          <div
                              className="mr-4 p-2 rounded-lg bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                              <Clock size={20}/>
                  </div>
                    <span className="text-gray-700 font-medium leading-relaxed">Interventi rapidi (anche in giornata) in tutta Milano e provincia</span>
                </li>
                  <li className="flex items-start group">
                      <div
                          className="mr-4 p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <Shield size={20}/>
                  </div>
                    <span className="text-gray-700 font-medium leading-relaxed">Tecnici certificati con esperienza pluriennale</span>
                </li>
                  <li className="flex items-start group">
                      <div
                          className="mr-4 p-2 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                          <Tag size={20}/>
                  </div>
                    <span className="text-gray-700 font-medium leading-relaxed">Prezzi trasparenti e preventivi gratuiti senza sorprese</span>
                </li>
                  <li className="flex items-start group">
                      <div
                          className="mr-4 p-2 rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                          <MapPin size={20}/>
                  </div>
                    <span className="text-gray-700 font-medium leading-relaxed">Copertura totale Milano e provincia 7 giorni su 7</span>
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
