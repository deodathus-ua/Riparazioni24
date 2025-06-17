import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {CheckCircle, ArrowRight, Wind, Phone, Mail, MapPin, Clock, Star, ChevronDown, ChevronUp} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceDetailProps {
  title: string;
  description: string;
  imageUrl: string;
  bulletPoints: string[];
  commonProblems: {
    title: string;
    description: string;
  }[];
  brands?: string[];
  faqItems?: {
    question: string;
    answer: string;
  }[];
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ 
  title, 
  description, 
  imageUrl, 
  bulletPoints, 
  commonProblems,
  brands,
  faqItems
}) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
      <div className="min-h-screen bg-gray-50">
          {/* Enhanced Hero Section */}
          <section
              className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 md:py-24 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
              </div>

              <div className="container relative z-10 px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="space-y-8">
                          {/* Badge */}
                          <div
                              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                              <Star size={16} className="mr-2 text-yellow-400"/>
                              Servizio Professionale Certificato
                          </div>

                          <div>
                              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{title}</h1>
                              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">{description}</p>
                          </div>

                          {/* Key features */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex items-center text-blue-100">
                                  <Clock size={20} className="mr-3 text-green-400 flex-shrink-0"/>
                                  <span>Intervento entro 24h</span>
                              </div>
                              <div className="flex items-center text-blue-100">
                                  <CheckCircle size={20} className="mr-3 text-green-400 flex-shrink-0"/>
                                  <span>Garanzia 12 mesi</span>
                              </div>
                              <div className="flex items-center text-blue-100">
                                  <MapPin size={20} className="mr-3 text-green-400 flex-shrink-0"/>
                                  <span>Milano e Provincia</span>
                              </div>
                              <div className="flex items-center text-blue-100">
                                  <Star size={20} className="mr-3 text-yellow-400 flex-shrink-0"/>
                                  <span>Tecnici Certificati</span>
                              </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4 pt-4">
                              <a href="tel:+393205509145">
                                  <Button size="lg"
                                          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                                      <Phone size={20} className="mr-2"/>
                    Chiama Ora
                  </Button>
                </a>
                <Link to="/contatti">
                    <Button size="lg" variant="outline"
                            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-700 py-4 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto">
                        Richiedi Preventivo Gratuito
                        <ArrowRight size={20} className="ml-2"/>
                  </Button>
                </Link>
              </div>
            </div>

              <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                          src={imageUrl || '/images/service-default.jpg'}
                          alt={title}
                          className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  {/* Floating elements */}
                  <div
                      className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                      <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">4.9</div>
                          <div className="flex text-yellow-400 mb-1">
                              {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={14} className="fill-current"/>
                              ))}
                          </div>
                          <div className="text-xs text-gray-600">Rating clienti</div>
                      </div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
        <section className="py-16">
            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">

                  {/* Service Features */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                      <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                          <CheckCircle className="mr-3 text-green-500" size={32}/>
                          Perché Scegliere Il Nostro Servizio
                      </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bulletPoints.map((point, index) => (
                      <div key={index} className="flex items-start group">
                          <div
                              className="bg-green-100 p-2 rounded-lg mr-4 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                              <CheckCircle size={20} className="text-green-600 group-hover:text-white"/>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

                {/* Common Problems */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h3 className="text-3xl font-bold mb-8 text-gray-900">Problemi Più Comuni</h3>
                <div className="space-y-6">
                  {commonProblems.map((problem, index) => (
                      <div key={index}
                           className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50/50 rounded-r-lg hover:bg-blue-50 transition-colors duration-300">
                          <h4 className="font-bold text-lg mb-3 text-gray-900">{problem.title}</h4>
                          <p className="text-gray-700 leading-relaxed">{problem.description}</p>
                    </div>
                  ))}
                </div>
              </div>

                {/* Brands */}
                {brands && brands.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h3 className="text-3xl font-bold mb-8 text-gray-900">Marche che Ripariamo</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {brands.map((brand, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 px-4 py-3 rounded-xl text-center font-medium text-gray-700 hover:text-blue-700 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-md"
                                >
                                    {brand}
                                </div>
                            ))}
                  </div>
                </div>
              )}

                {/* FAQ */}
                {faqItems && faqItems.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h3 className="text-3xl font-bold mb-8 text-gray-900">Domande Frequenti</h3>
                        <div className="space-y-4">
                            {faqItems.map((item, index) => (
                                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center"
                                    >
                                        <h4 className="font-semibold text-lg text-gray-900 pr-4">{item.question}</h4>
                                        {openFaq === index ? (
                                            <ChevronUp size={24} className="text-blue-600 flex-shrink-0"/>
                                        ) : (
                                            <ChevronDown size={24} className="text-gray-400 flex-shrink-0"/>
                                        )}
                                    </button>
                                    {openFaq === index && (
                                        <div className="p-6 pt-0 border-t border-gray-100">
                                            <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                  </div>
                </div>
              )}

                {/* Bottom CTA */}
                <div
                    className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Hai Bisogno di Assistenza
                            Immediata?</h2>
                        <p className="text-xl text-blue-100 mb-6">
                            Non aspettare che il problema peggiori. I nostri tecnici sono pronti a intervenire a Milano
                            e provincia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:+393205509145">
                                <Button
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                                    <Phone size={20} className="mr-2"/>
                                    Chiama Subito
                                </Button>
                            </a>
                            <Link to="/contatti">
                                <Button variant="outline"
                                        className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-700 py-4 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto">
                                    <Mail size={20} className="mr-2"/>
                                    Preventivo Online
                                </Button>
                            </Link>
                        </div>
                </div>
              </div>
            </div>

              {/* Right Column - Enhanced Sidebar */}
              <div className="space-y-8">

                  {/* Contact Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 sticky top-8">
                      <h3 className="text-2xl font-bold mb-6 text-gray-900">Contatti Rapidi</h3>

                      <div className="space-y-6 mb-8">
                          <a href="tel:+393205509145"
                             className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 group">
                              <div
                                  className="bg-green-500 text-white p-3 rounded-full mr-4 group-hover:bg-green-600 transition-colors">
                                  <Phone size={20}/>
                              </div>
                              <div>
                                  <div className="font-semibold text-gray-900">Chiamaci Ora</div>
                                  <div className="text-green-600 font-bold">+39 320 550 9145</div>
                              </div>
                          </a>

                          <a href="mailto:info@riparazioni24.eu"
                             className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 group">
                              <div
                                  className="bg-blue-500 text-white p-3 rounded-full mr-4 group-hover:bg-blue-600 transition-colors">
                                  <Mail size={20}/>
                              </div>
                              <div>
                                  <div className="font-semibold text-gray-900">Email</div>
                                  <div className="text-blue-600">info@riparazioni24.eu</div>
                              </div>
                          </a>

                          <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                              <div className="bg-gray-500 text-white p-3 rounded-full mr-4">
                                  <MapPin size={20}/>
                              </div>
                              <div>
                                  <div className="font-semibold text-gray-900">Zona di Servizio</div>
                                  <div className="text-gray-600">Milano e Provincia</div>
                              </div>
                  </div>
                </div>

                  <Link to="/contatti" className="block">
                      <Button
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                          Richiedi Preventivo Dettagliato
                      </Button>
                </Link>
              </div>

                {/* Other Services */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Altri Nostri Servizi</h3>
                    <ul className="space-y-3">
                        {[
                            {name: 'Riparazione Lavatrici', path: '/servizi/lavatrice'},
                            {name: 'Riparazione Asciugatrici', path: '/servizi/asciugatrice'},
                            {name: 'Riparazione Lavastoviglie', path: '/servizi/lavastoviglie'},
                            {name: 'Riparazione Frigoriferi', path: '/servizi/frigorifero'},
                            {name: 'Riparazione Congelatori', path: '/servizi/congelatore'},
                            {name: 'Riparazione Piani Cottura', path: '/servizi/piano-cottura'},
                            {name: 'Riparazione Forni', path: '/servizi/forno'}
                        ].map((service, index) => (
                            <li key={index}>
                                <Link
                                    to={service.path}
                                    className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
                                >
                                    <ArrowRight size={16}
                                                className="mr-3 text-blue-600 group-hover:text-blue-700 transition-colors"/>
                                    <span
                                        className="text-gray-700 group-hover:text-blue-600 transition-colors font-medium">
                                        {service.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Trust Badges */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
                    <h4 className="font-bold text-lg mb-4 text-gray-900">Garanzie di Qualità</h4>
                    <div className="space-y-3">
                        <div className="flex items-center text-sm">
                            <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0"/>
                            <span className="text-gray-700">Tecnici Certificati</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0"/>
                            <span className="text-gray-700">Ricambi Originali</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0"/>
                            <span className="text-gray-700">Garanzia 12 Mesi</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0"/>
                            <span className="text-gray-700">Preventivo Gratuito</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
