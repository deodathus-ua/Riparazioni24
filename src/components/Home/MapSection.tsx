import React from 'react';
import {MapPin, Clock, Phone} from 'lucide-react';
import {Button} from '@/components/ui/button';

const MapSection = () => {
  return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
              <div
                  className="absolute top-10 md:top-20 left-5 md:left-20 w-32 md:w-64 h-32 md:h-64 bg-green-100 rounded-full opacity-10 blur-3xl"></div>
              <div
                  className="absolute bottom-5 md:bottom-10 right-5 md:right-10 w-48 md:w-80 h-48 md:h-80 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="container relative z-10 px-4">
              <div className="text-center mb-12 md:mb-16">
                  <div
                      className="inline-flex items-center px-3 md:px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                      <MapPin size={14} className="mr-2 md:hidden"/>
                      <MapPin size={16} className="mr-2 hidden md:block"/>
                      Copertura territoriale completa
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 px-4">
                      La Nostra Area di
                      <span className="text-blue-600"> Servizio</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Offriamo servizi di riparazione elettrodomestici a Milano e in tutti i comuni limitrofi.
            Ecco le principali zone che copriamo con il nostro servizio.
          </p>
        </div>

              {/* Full width map with floating information block */}
              <div className="relative">
                  <div className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89547.71469631314!2d9.107185542285159!3d45.46995957107543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilano%20MI!5e0!3m2!1sit!2sit!4v1649751234567!5m2!1sit!2sit"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Milano and surrounding areas"
              className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
            ></iframe>
          </div>

                  {/* Floating information block - Hidden on mobile */}
                  <div
                      className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-6 max-w-xs md:max-w-sm lg:max-w-md z-20 hidden md:block">
                {/* Decorative element */}
                <div
                    className="absolute top-0 right-0 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-10 transform translate-x-2 md:translate-x-4 -translate-y-2 md:-translate-y-4"></div>

                <h3 className="text-sm md:text-base lg:text-lg font-bold mb-3 md:mb-4 text-gray-900 flex items-center">
                    <MapPin size={16} className="mr-2 text-blue-600 md:hidden"/>
                    <MapPin size={18} className="mr-2 text-blue-600 hidden md:block"/>
                    Zone Servite
                </h3>

                {/* Multi-column zone list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 md:gap-x-4 gap-y-1 md:gap-y-1.5 mb-4 md:mb-6">
                    {[
                        'Milano (tutti i quartieri)',
                        'Sesto San Giovanni',
                        'Cinisello Balsamo',
                        'Rho',
                        'Rozzano',
                        'Cologno Monzese',
                        'Corsico',
                        'Novate Milanese',
                        'Segrate',
                        'Buccinasco',
                        'Assago',
                        'Opera'
                    ].map((zona, index) => (
                        <div key={index} className="flex items-center group">
                            <span
                                className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                            <span className="text-xs md:text-sm text-gray-700 leading-tight">{zona}</span>
                        </div>
                    ))}
                </div>

                {/* Compact info sections */}
                <div className="space-y-3 md:space-y-4">
                    <div className="p-2 md:p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-semibold mb-1 text-gray-900 flex items-center text-xs md:text-sm">
                            <Clock size={14} className="mr-1.5 text-blue-600"/>
                            Tempistica di intervento
                        </h4>
                        <p className="text-gray-600 text-xs leading-relaxed">
                            Interveniamo entro 24h. Urgenze anche in giornata.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 flex items-center text-xs md:text-sm mb-2">
                            <Phone size={14} className="mr-1.5 text-green-600"/>
                            Hai bisogno di assistenza?
                        </h4>
                        <a href="tel:+39 320 550 9145" className="block">
                            <Button
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 md:py-2.5 px-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-xs md:text-sm">
                                <Phone size={12} className="mr-1.5 md:hidden"/>
                                <span className="hidden sm:inline">Chiamaci al </span>+39 320 550 9145
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

              {/* Mobile layout - zones below map, visible only on mobile */}
              <div className="mt-6 md:hidden">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                      <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                          <MapPin size={20} className="mr-2 text-blue-600"/>
                          Zone Servite
                      </h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                          {[
                              'Milano (tutti i quartieri)',
                              'Sesto San Giovanni',
                              'Cinisello Balsamo',
                              'Rho',
                              'Rozzano',
                              'Cologno Monzese',
                              'Corsico',
                              'Novate Milanese',
                              'Segrate',
                              'Buccinasco',
                              'Assago',
                              'Opera'
                          ].map((zona, index) => (
                              <div key={index} className="flex items-center">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                                  <span className="text-sm text-gray-700 leading-tight">{zona}</span>
                              </div>
                          ))}
                      </div>

                      <div className="space-y-4">
                          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                              <h4 className="font-semibold mb-2 text-gray-900 flex items-center text-base">
                                  <Clock size={18} className="mr-2 text-blue-600"/>
                                  Tempistica di intervento
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  Interveniamo entro 24 ore dalla richiesta. Per le urgenze, quando possibile, anche in
                                  giornata.
                              </p>
                          </div>

                          <div>
                              <h4 className="font-semibold text-gray-900 flex items-center text-base mb-3">
                                  <Phone size={18} className="mr-2 text-green-600"/>
                                  Hai bisogno di assistenza?
                              </h4>
                              <a href="tel:+39 320 550 9145" className="block">
                                  <Button
                                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-base">
                                      <Phone size={20} className="mr-2"/>
                                      Chiamaci al +39 320 550 9145
                                  </Button>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default MapSection;
