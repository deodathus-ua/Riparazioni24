import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {Phone, Mail, MessageSquare, ArrowRight} from 'lucide-react';

const CTASection = () => {
  return (
      <section
          className="py-12 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden"
      >
          {/* Decorative background elements */}
          <div className="absolute inset-0">
              <div
                  className="absolute top-5 md:top-10 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-white/5 rounded-full blur-3xl"></div>
              <div
                  className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-56 md:w-80 h-56 md:h-80 bg-green-500/10 rounded-full blur-3xl"></div>
              <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

        <div className="container relative z-10 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <div
                    className="inline-flex items-center px-3 md:px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                    <Phone size={14} className="mr-2 md:hidden"/>
                    <Phone size={16} className="mr-2 hidden md:block"/>
                    Servizio attivo 24/7
          </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white px-4">
                Elettrodomestico guasto?
                <span className="text-green-400 block md:inline"> Risolviamo subito!</span>
            </h2>
            <p className="text-base md:text-xl text-blue-100 mb-8 md:mb-12 leading-relaxed px-4">
                Contattaci ora per un intervento rapido e professionale.
                Operiamo a Milano e provincia, 7 giorni su 7.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                <Link to="/contatti" className="block group">
                    <div
                        className="bg-white/10 hover:bg-white/15 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/20 transition-all duration-300 h-full flex flex-col justify-between group-hover:transform group-hover:scale-105 shadow-lg hover:shadow-xl min-h-[300px] md:min-h-[340px]"
                    >
                        <div className="text-center flex-grow">
                  <div
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-500 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                      <Mail className="h-8 w-8 md:h-10 md:w-10 text-white"/>
                  </div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">Invia Richiesta</h3>
                            <p className="text-base md:text-lg text-blue-100 mb-6 leading-relaxed">
                        Compila il modulo e ti richiameremo entro 1 ora.
                  </p>
                </div>
                  <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 md:py-5 px-8 md:px-12 rounded-lg text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg min-h-[56px]"
                  >
                      Preventivo Gratuito
                  </Button>
              </div>
            </Link>

              <a href="tel:+39 320 550 9145" className="block group">
                  <div
                      className="bg-white/10 hover:bg-white/15 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/20 transition-all duration-300 h-full flex flex-col justify-between group-hover:transform group-hover:scale-105 shadow-lg hover:shadow-xl min-h-[300px] md:min-h-[340px]"
                  >
                      <div className="text-center flex-grow">
                  <div
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                      <Phone className="h-8 w-8 md:h-10 md:w-10 text-white"/>
                  </div>
                          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">Chiama Ora</h3>
                          <p className="text-base md:text-lg text-blue-100 mb-6 leading-relaxed">
                        Parla con noi per un intervento immediato.
                    </p>
                </div>
                  <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 md:py-5 px-6 md:px-8 rounded-lg text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg min-h-[56px]"
                  >
                      +39 320 550 9145
                  </Button>
              </div>
            </a>

              <a
                  href="https://wa.me/393205509145?text=Ciao,%20ho%20bisogno%20di%20assistenza%20per%20il%20mio%20elettrodomestico"
                  target="_blank"
                  rel="noreferrer"
                  className="block group md:col-span-2 lg:col-span-1"
              >
                  <div
                      className="bg-white/10 hover:bg-white/15 backdrop-blur-sm p-6 md:p-8 rounded-xl md:rounded-2xl border border-white/20 transition-all duration-300 h-full flex flex-col justify-between group-hover:transform group-hover:scale-105 shadow-lg hover:shadow-xl min-h-[300px] md:min-h-[340px]"
              >
                  <div className="text-center flex-grow">
                  <div
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                      <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-white"/>
                  </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">WhatsApp</h3>
                      <p className="text-base md:text-lg text-blue-100 mb-6 leading-relaxed">
                        Scrivici su WhatsApp per assistenza rapida.
                    </p>
                </div>
                  <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 md:py-5 px-8 md:px-12 rounded-lg text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg min-h-[56px]"
                  >
                      Scrivici su WhatsApp
                  </Button>
              </div>
            </a>
          </div>

            <div
                className="mt-8 md:mt-12 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/20 mx-4"
            >
                <p className="text-sm md:text-lg text-blue-100 leading-relaxed text-center">
                    Ripariamo ogni tipo di elettrodomestico con professionalità e garanzia.
                    <span className="text-green-400 font-semibold"> Affidati a noi!</span>
                </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
