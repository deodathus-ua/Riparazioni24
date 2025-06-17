import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import {Users, Award, Clock, Briefcase, Star, Phone, Mail, CheckCircle, MapPin, ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FloatingCTA from '@/components/FloatingCTA';

const ChiSiamo = () => {
  return (
      <MainLayout
          title="Chi Siamo | Riparazione Elettrodomestici Milano"
          description="Scopri la nostra esperienza nella riparazione elettrodomestici a Milano. Tecnici qualificati, esperienza pluriennale e servizio rapido."
      >
        <Helmet>
          <title>Chi Siamo | Riparazione Elettrodomestici Milano</title>
          <meta name="description" content="Scopri la nostra esperienza nella riparazione elettrodomestici a Milano. Tecnici qualificati, esperienza pluriennale e servizio rapido." />
          <meta name="keywords" content="riparazione elettrodomestici Milano, chi siamo, tecnici elettrodomestici Milano, assistenza elettrodomestici" />
        </Helmet>

          {/* Enhanced Hero Section */}
          <section
              className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 md:py-24 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
                  <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              </div>

              <div className="container relative z-10 px-4">
                  <div className="max-w-4xl mx-auto text-center">
                      {/* Badge */}
                      <div
                          className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                          <Star size={16} className="mr-2 text-yellow-400"/>
                          Dal 2015 al vostro servizio
                      </div>

                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                          Il Tuo Partner di Fiducia per
                          <span className="text-green-400 block"> Elettrodomestici</span>
                      </h1>
                      <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                          Esperienza, professionalità e interventi rapidi in tutta Milano e provincia dal 2015.
                      </p>

                      {/* Key stats */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                              <div className="text-blue-200">Riparazioni effettuate</div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                              <div className="text-3xl font-bold text-white mb-2">10+</div>
                              <div className="text-blue-200">Anni di esperienza</div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                              <div className="text-3xl font-bold text-white mb-2">24h</div>
                              <div className="text-blue-200">Interventi rapidi</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Main Content */}
          <section className="py-16 bg-gray-50">
              <div className="container px-4">

              {/* Our Story Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                  <div className="relative">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <img
                              src="/images/tecnico.webp"
                              alt="Tecnico esperto di elettrodomestici al lavoro durante riparazione"
                              className="w-full h-80 lg:h-96 object-cover"
                              loading="lazy"
                              width="600"
                              height="400"
                              decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      {/* Floating element */}
                      <div
                          className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
                          <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600 mb-1">+10 anni</div>
                              <div className="text-sm text-gray-600">di esperienza</div>
                          </div>
                      </div>
              </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">La Nostra Storia</h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Fondata nel 2015, <strong>Riparazioni 24</strong> è nata dalla visione dei fratelli
                                Yaroslav e Bohdan Stasyuk,
                                che hanno unito la loro passione per la tecnologia e il servizio clienti per creare
                                un'azienda leader
                                nella riparazione di elettrodomestici a Milano.
                            </p>
                            <p>
                                La nostra missione è garantire soluzioni rapide e affidabili per ogni esigenza,
                                diventando
                                un punto di riferimento per migliaia di famiglie e aziende in tutta la provincia di
                                Milano.
                            </p>
                  </div>
                </div>

                  {/* Quick facts */}
                  <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-700">
                          <CheckCircle size={20} className="mr-3 text-green-500 flex-shrink-0"/>
                          <span>Interventi garantiti</span>
                  </div>
                    <div className="flex items-center text-gray-700">
                        <CheckCircle size={20} className="mr-3 text-green-500 flex-shrink-0"/>
                        <span>Tecnici certificati</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <CheckCircle size={20} className="mr-3 text-green-500 flex-shrink-0"/>
                        <span>Servizio 7/7 giorni</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <CheckCircle size={20} className="mr-3 text-green-500 flex-shrink-0"/>
                        <span>Preventivi gratuiti</span>
                    </div>
                </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contatti">
                          <Button
                              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                              Contatta il Team
                              <ArrowRight size={18} className="ml-2"/>
                          </Button>
                      </Link>
                </div>
              </div>
            </div>

              {/* Team Section */}
              <div className="mb-20">
                  <div className="text-center mb-12">
                      <div
                          className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                          <Users size={16} className="mr-2"/>
                          Il nostro team
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">I Nostri Tecnici Esperti</h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                          Un team di professionisti qualificati e appassionati, sempre aggiornati sulle ultime
                          tecnologie
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div
                      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                      <div className="relative mb-6">
                          <div
                              className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <img
                            src="/images/staff/yaroslav.webp"
                            alt="Yaroslav Stasyuk - Tecnico Senior e Co-Fondatore di Riparazioni 24"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            width="128"
                            height="128"
                            decoding="async"
                        />
                    </div>
                  </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Yaroslav Stasyuk</h3>
                        <div
                            className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                            Tecnico Senior & Co-Founder
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Con oltre 10 anni di esperienza nella riparazione di grandi elettrodomestici, guida il team
                            con passione,
                            garantendo interventi precisi e un servizio clienti impeccabile.
                        </p>
                    </div>
                </div>

                  <div
                      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                      <div className="relative mb-6">
                          <div
                              className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <img
                            src="/images/staff/serhii.webp"
                            alt="Serhii Savchuk - Responsabile Tecnico specializzato in diagnosi elettrodomestici"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            width="128"
                            height="128"
                            decoding="async"
                        />
                    </div>
                  </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Serhii Savchuk</h3>
                        <div
                            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                            Responsabile Tecnico
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Laureato in ingegneria meccanica, porta 5 anni di esperienza tecnica e una profonda
                            conoscenza
                            dei sistemi elettrodomestici. Specializzato in diagnosi complesse.
                        </p>
                    </div>
                </div>

                  <div
                      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                      <div className="relative mb-6">
                          <div
                              className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <img
                            src="/images/staff/bohdan.webp"
                            alt="Bohdan Stasyuk - Co-Fondatore e Responsabile Strategia Aziendale"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            width="128"
                            height="128"
                            decoding="async"
                        />
                    </div>
                  </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Bohdan Stasyuk</h3>
                        <div
                            className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                            Co-Founder
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Supervisiona la strategia aziendale e il servizio clienti, garantendo un'esperienza fluida
                            e soddisfacente per ogni cliente. La sua visione ha reso Riparazioni 24 un nome di fiducia.
                        </p>
                    </div>
                </div>
              </div>
            </div>

              {/* Why Choose Us Section */}
              <div className="mb-20">
                  <div className="text-center mb-12">
                      <div
                          className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                          <Award size={16} className="mr-2"/>
                          I nostri vantaggi
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Perché Scegliere Riparazioni
                          24</h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                          Ecco cosa ci distingue dalla concorrenza e rende i nostri clienti soddisfatti
                </p>
              </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                        <div
                            className="bg-green-100 p-4 rounded-xl w-fit mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                            <Clock className="w-8 h-8 text-green-600 group-hover:text-white"/>
                  </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Intervento Rapido</h3>
                    <p className="text-gray-600 leading-relaxed">
                    Interveniamo entro 24 ore dalla chiamata in tutta Milano e provincia.
                    Per le urgenze, quando possibile, anche in giornata.
                  </p>
                </div>

                  <div
                      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      <div
                          className="bg-blue-100 p-4 rounded-xl w-fit mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                          <Award className="w-8 h-8 text-blue-600 group-hover:text-white"/>
                  </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Garanzia 12 Mesi</h3>
                    <p className="text-gray-600 leading-relaxed">
                    Tutti i nostri interventi e i ricambi installati sono coperti da una garanzia
                      di 12 mesi completa per la tua tranquillità.
                  </p>
                </div>

                  <div
                      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      <div
                          className="bg-purple-100 p-4 rounded-xl w-fit mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                          <Users className="w-8 h-8 text-purple-600 group-hover:text-white"/>
                  </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Tecnici Certificati</h3>
                    <p className="text-gray-600 leading-relaxed">
                    Il nostro team è composto da tecnici specializzati con certificazioni
                      e formazione continua sui nuovi modelli e tecnologie.
                  </p>
                </div>

                  <div
                      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      <div
                          className="bg-orange-100 p-4 rounded-xl w-fit mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                          <svg className="w-8 h-8 text-orange-600 group-hover:text-white" fill="none"
                               stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Prezzi Trasparenti</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Preventivi gratuiti e dettagliati. Costo uscita €30. Nessun costo nascosto o sorprese
                    al momento del pagamento.
                  </p>
                </div>

                  <div
                      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      <div
                          className="bg-teal-100 p-4 rounded-xl w-fit mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                          <svg className="w-8 h-8 text-teal-600 group-hover:text-white" fill="none"
                               stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Ricambi Originali</h3>
                    <p className="text-gray-600 leading-relaxed">
                    Utilizziamo solo ricambi originali o di qualità equivalente
                      per garantire durata e affidabilità della riparazione.
                  </p>
                </div>

                  <div
                      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      <div
                          className="bg-indigo-100 p-4 rounded-xl w-fit mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                          <Briefcase className="w-8 h-8 text-indigo-600 group-hover:text-white"/>
                  </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Esperienza Pluriennale</h3>
                    <p className="text-gray-600 leading-relaxed">
                    Con oltre 10 anni di esperienza nel settore, abbiamo affrontato e risolto
                    ogni tipo di guasto sui principali elettrodomestici.
                  </p>
                </div>
              </div>
            </div>

              {/* Brands Section */}
              <div className="mb-20">
                  <div className="text-center mb-12">
                      <div
                          className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-6">
                          <Star size={16} className="mr-2"/>
                          Marchi supportati
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">I Marchi che Ripariamo</h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Ripariamo elettrodomestici dei principali marchi con competenza e professionalità
                </p>
              </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {/* Brands grid - keeping the existing brand images but with improved styling */}
                        <div
                            className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                            <img
                                src="/images/brand%20logos/samsung.svg"
                                alt="Samsung - Marchio elettrodomestici riparato da Riparazioni 24"
                                className="max-h-10 max-w-full object-contain"
                                loading="lazy"
                                width="120"
                                height="40"
                                decoding="async"
                            />
                        </div>
                        <div
                            className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                            <img
                                src="/images/brand%20logos/grundig.svg"
                                alt="Grundig - Riparazione elettrodomestici tedeschi di qualità"
                                className="max-h-10 max-w-full object-contain"
                                loading="lazy"
                                width="120"
                                height="40"
                                decoding="async"
                            />
                        </div>
                        <div
                            className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                            <img
                                src="/images/brand%20logos/whirlpool.svg"
                                alt="Whirlpool - Assistenza professionale elettrodomestici"
                                className="max-h-10 max-w-full object-contain"
                                loading="lazy"
                                width="120"
                                height="40"
                                decoding="async"
                            />
                        </div>
                        <div
                            className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                            <img
                                src="/images/brand%20logos/electrolux.svg"
                                alt="Electrolux - Riparazione lavatrici, frigoriferi e forni"
                                className="max-h-10 max-w-full object-contain"
                                loading="lazy"
                                width="120"
                                height="40"
                                decoding="async"
                            />
                        </div>
                        <div
                            className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                            <img
                                src="/images/brand%20logos/hisense.svg"
                                alt="Hisense - Assistenza elettrodomestici moderni"
                                className="max-h-10 max-w-full object-contain"
                                loading="lazy"
                                width="120"
                                height="40"
                                decoding="async"
                            />
                        </div>
                        <div
                            className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                            <img
                                src="/images/brand%20logos/siemens.svg"
                                alt="Siemens - Riparazione elettrodomestici con ricambi originali"
                                className="max-h-10 max-w-full object-contain"
                                loading="lazy"
                                width="120"
                                height="40"
                                decoding="async"
                            />
                        </div>

                    {/* Second row */}
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/indesit.svg"
                            alt="Indesit - Riparazione elettrodomestici marchio italiano"
                            className="max-h-14 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/candy.svg"
                            alt="Candy - Assistenza tecnica elettrodomestici italiani"
                            className="max-h-10 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/ariston.svg"
                            alt="Ariston - Riparazione elettrodomestici"
                            className="max-h-12 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/hoover.svg"
                            alt="Hoover - Assistenza elettrodomestici per la pulizia domestica"
                            className="max-h-14 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/beko.svg"
                            alt="Beko - Riparazione elettrodomestici moderni"
                            className="max-h-10 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/zanussi.svg"
                            alt="Zanussi - Assistenza professionale elettrodomestici"
                            className="max-h-10 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>

                    {/* Third row - showing only first 6 for better mobile experience */}
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/aeg.svg"
                            alt="AEG - Riparazione elettrodomestici premium tedeschi"
                            className="max-h-8 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/bosch.svg"
                            alt="Bosch - Elettrodomestici riparati dai nostri tecnici specializzati"
                            className="max-h-10 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/miele.svg"
                            alt="Miele - Servizio tecnico qualificato elettrodomestici premium"
                            className="max-h-10 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/lg.svg"
                            alt="LG - Servizio tecnico elettrodomestici di qualità"
                            className="max-h-14 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/smeg.svg"
                            alt="Smeg - Riparazione elettrodomestici design italiano"
                            className="max-h-14 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                    <div
                        className="bg-gray-50 hover:bg-blue-50 p-4 rounded-xl flex items-center justify-center h-20 hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300">
                        <img
                            src="/images/brand%20logos/haier.svg"
                            alt="Haier - Assistenza elettrodomestici innovativi"
                            className="max-h-10 max-w-full object-contain"
                            loading="lazy"
                            width="120"
                            height="40"
                            decoding="async"
                        />
                    </div>
                </div>

                  <div className="text-center mt-8">
                      <p className="text-gray-600">Il nostro team ha esperienza con i migliori marchi di
                          elettrodomestici, garantendo riparazioni affidabili</p>
                </div>
              </div>
            </div>

              {/* Enhanced CTA Section */}
              <div
                  className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl"></div>

                  <div className="relative z-10 text-center">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                          Hai Bisogno di Assistenza Professionale?
                      </h2>
                      <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                          Il nostro team è pronto ad aiutarti con qualsiasi problema relativo ai tuoi elettrodomestici.
                          Contattaci oggi stesso per una consulenza gratuita o per fissare un intervento.
                      </p>

                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                          <a href="tel:+393205509145">
                              <Button size="lg"
                                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                                  <Phone size={20} className="mr-2"/>
                                  Chiama: +39 320 550 9145
                              </Button>
                          </a>
                          <Link to="/contatti">
                              <Button size="lg" variant="outline"
                                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-700 py-4 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto">
                                  <Mail size={20} className="mr-2"/>
                                  Richiedi Assistenza
                              </Button>
                          </Link>
                      </div>
              </div>
            </div>
          </div>
        </section>

        <FloatingCTA />
      </MainLayout>
  );
};

export default ChiSiamo;
