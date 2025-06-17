import React from 'react';
import { Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Danilo Schevchuk',
    location: 'Milano Centro',
    rating: 5,
    text: 'La lavatrice non funzionava più. Il tecnico arrivato puntuale, ha individuato il problema e risolto in un’ora. Prezzo ragionevole',
    service: 'Riparazione Lavatrice',
  },
  {
    id: 2,
    name: 'Laura',
    location: 'Sesto San Giovanni',
    rating: 3.5,
    text: 'Il frigorifero aveva problemi di raffreddamento. La riparazione è stata veloce, anche se ho dovuto aspettare due giorni per l’appuntamento. Nel complesso, soddisfatta',
    service: 'Riparazione Frigorifero',
  },
  {
    id: 3,
    name: 'Ivano Ferrari',
    location: 'Cinisello Balsamo',
    rating: 5,
    text: 'La lavastoviglie perdeva acqua. Il tecnico ci ha spiegato bene il problema e l’ha riparata subito. Costo in linea con il preventivo',
    service: 'Riparazione Lavastoviglie',
  },
  {
    id: 4,
    name: 'Shaiming Mai',
    location: 'Rho',
    rating: 4,
    text: 'Il forno non scaldare bene. La riparazione fatto in giornata, ma il costo alto. Comunque, il lavoro fatto bene',
    service: 'Riparazione Forno',
  },
];

const TestimonialsSection = () => {
  return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
              <div
                  className="absolute top-10 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-yellow-100 rounded-full opacity-10 blur-3xl"></div>
              <div
                  className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-32 md:w-64 h-32 md:h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="container relative z-10 px-4">
              <div className="text-center mb-12 md:mb-16">
                  <div
                      className="inline-flex items-center px-3 md:px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                      <Star size={14} className="mr-2 fill-yellow-600 md:hidden"/>
                      <Star size={16} className="mr-2 fill-yellow-600 hidden md:block"/>
                      Recensioni verificate
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 px-4">
                      Cosa Dicono i Nostri
                      <span className="text-blue-600"> Clienti</span>
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                      La soddisfazione dei clienti è la nostra priorità. Ecco alcune recensioni di chi ha scelto i
                      nostri
                      servizi di riparazione elettrodomestici a Milano.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {testimonials.map((testimonial) => (
                      <div key={testimonial.id}
                           className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                          <div className="flex items-center gap-3 mb-4">
                              <div
                                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                  <User size={16} className="text-white md:hidden"/>
                                  <User size={20} className="text-white hidden md:block"/>
                              </div>
                              <div className="min-w-0 flex-1">
                                  <p className="font-semibold text-gray-900 text-sm md:text-base truncate">{testimonial.name}</p>
                                  <p className="text-xs md:text-sm text-gray-500 truncate">{testimonial.location}</p>
                              </div>
                          </div>
                          <div className="flex items-center mb-3 md:mb-4">
                              {[...Array(5)].map((_, i) => (
                                  <Star
                                      key={i}
                                      size={16}
                                      className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} md:w-[18px] md:h-[18px]`}
                                  />
                              ))}
                          </div>
                          <p className="text-gray-600 mb-3 md:mb-4 italic leading-relaxed text-sm md:text-base">"{testimonial.text}"</p>
                          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                              <p className="text-xs md:text-sm text-blue-600 font-medium truncate">{testimonial.service}</p>
                          </div>
                      </div>
                  ))}
              </div>

              <div className="mt-8 md:mt-12 text-center px-4">
                  <div
                      className="bg-white rounded-xl md:rounded-2xl px-4 py-4 md:px-8 md:py-4 shadow-lg border border-gray-100 max-w-sm sm:max-w-md md:max-w-none mx-auto">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                          <span className="text-sm md:text-lg font-semibold text-gray-900 whitespace-nowrap">Valutazione media:</span>
                          <div className="flex items-center gap-2">
                              <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                      <Star key={i} size={16}
                                            className={`${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} md:w-5 md:h-5`}/>
                                  ))}
                              </div>
                              <span
                                  className="text-sm md:text-lg font-semibold text-blue-600 whitespace-nowrap">4.6/5</span>
                          </div>
                      </div>
                      <div className="mt-1 sm:mt-0">
                          <span className="text-xs md:text-sm text-gray-500">(12 recensioni)</span>
                      </div>
                  </div>
              </div>

              <div className="mt-12 md:mt-16 text-center px-4">
                  <div
                      className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-green-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100 shadow-lg relative overflow-hidden">
                      {/* Decorative element */}
                      <div
                          className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-10 transform translate-x-6 md:translate-x-8 -translate-y-6 md:-translate-y-8"></div>

                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Unisciti ai nostri
                          clienti soddisfatti!</h3>
                      <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                          Anche il tuo elettrodomestico merita una riparazione professionale e garantita. Contattaci ora
                          per
                          un intervento rapido e risolutivo.
                      </p>
                      <Link to="/contatti">
                          <Button size="lg"
                                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base w-full sm:w-auto">
                              Richiedi il tuo intervento ora
                          </Button>
                      </Link>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default TestimonialsSection;
