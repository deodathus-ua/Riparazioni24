import React, {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import ContactForm from '@/components/ContactForm';
import {Phone, Mail, Clock, MapPin, MessageSquare, Star, ChevronDown, ChevronUp, CheckCircle} from 'lucide-react';

const Contatti = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqItems = [
        {
            question: "Quanto costa una riparazione?",
            answer: "Il costo dipende dal tipo di guasto e dall'elettrodomestico. Forniamo sempre un preventivo gratuito e dettagliato prima di procedere con la riparazione. Non ci sono costi nascosti o sorprese."
        },
        {
            question: "Quanto tempo ci vuole per un intervento?",
            answer: "Interveniamo entro 24 ore dalla richiesta in tutta Milano e provincia. Per le urgenze, quando possibile, offriamo anche servizio in giornata. La durata dell'intervento dipende dal tipo di riparazione."
        },
        {
            question: "Fate anche installazione di nuovi elettrodomestici?",
            answer: "Sì, oltre alla riparazione, offriamo anche servizi di installazione professionale per tutti i tipi di elettrodomestici, garantendo la corretta messa in funzione e sicurezza."
        },
        {
            question: "Su quali marche intervenite?",
            answer: "Interveniamo su tutte le principali marche: Bosch, Siemens, Samsung, LG, Whirlpool, Candy, Electrolux, AEG, Indesit, Ariston, Smeg e molte altre. I nostri tecnici sono formati per intervenire su qualsiasi modello."
        }
    ];

    return (
      <MainLayout
          title="Contatti | Riparazione Elettrodomestici Milano"
          description="Contatta il nostro servizio di riparazione elettrodomestici a Milano. Assistenza rapida per lavatrici, frigoriferi, lavastoviglie e forni."
      >
        <Helmet>
          <title>Contatti | Riparazione Elettrodomestici Milano</title>
          <meta name="description" content="Contatta il nostro servizio di riparazione elettrodomestici a Milano. Assistenza rapida per lavatrici, frigoriferi, lavastoviglie e forni." />
          <meta name="keywords" content="contatti riparazione elettrodomestici Milano, telefono assistenza elettrodomestici, riparatore elettrodomestici Milano" />
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
                          <Phone size={16} className="mr-2 text-green-400"/>
                          Assistenza 7 giorni su 7
                      </div>

                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                          Contattaci per una
                          <span className="text-green-400 block"> Riparazione Rapida</span>
                      </h1>
                      <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Hai un elettrodomestico guasto? Contattaci subito e ti aiuteremo a risolvere il problema rapidamente.
              </p>

                {/* Quick contact buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <a href="tel:+393205509145">
                        <div
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center">
                            <Phone size={20} className="mr-2"/>
                            Chiama: +39 320 550 9145
                        </div>
                    </a>
                    <a href="https://wa.me/393205509145" target="_blank" rel="noopener noreferrer">
                        <div
                            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center">
                            <MessageSquare size={20} className="mr-2"/>
                            WhatsApp
                        </div>
                    </a>
                </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
          <section className="py-16 bg-gray-50">
              <div className="container px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                  {/* Contact Information */}
                <div className="space-y-8">
                    <div>
                        <div
                            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                            <CheckCircle size={16} className="mr-2"/>
                            Come contattarci
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Siamo Sempre Disponibili</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Scegli il modo più comodo per contattarci. Il nostro team di esperti è pronto ad aiutarti.
                        </p>
                    </div>

                  <div className="space-y-6">
                      {/* Phone */}
                      <div
                          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                          <div className="flex items-start">
                              <div
                                  className="bg-green-100 p-4 rounded-xl mr-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                  <Phone className="h-6 w-6 text-green-600 group-hover:text-white"/>
                              </div>
                              <div className="flex-1">
                                  <h3 className="text-xl font-bold mb-2 text-gray-900">Telefono</h3>
                                  <p className="text-gray-600 mb-3">Risposta immediata negli orari di servizio</p>
                                  <a href="tel:+393205509145"
                                     className="text-green-600 hover:text-green-700 font-bold text-lg transition-colors">
                                      +39 320 550 9145
                                  </a>
                              </div>
                    </div>
                  </div>

                    {/* Email */}
                    <div
                        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-start">
                            <div
                                className="bg-blue-100 p-4 rounded-xl mr-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                <Mail className="h-6 w-6 text-blue-600 group-hover:text-white"/>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
                                <p className="text-gray-600 mb-3">Ti risponderemo entro 2 ore</p>
                                <a href="mailto:info@riparazioni24.eu"
                                   className="text-blue-600 hover:text-blue-700 font-bold transition-colors break-words">
                                    info@riparazioni24.eu
                                </a>
                            </div>
                    </div>
                  </div>

                    {/* Hours */}
                    <div
                        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-start">
                            <div
                                className="bg-purple-100 p-4 rounded-xl mr-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                <Clock className="h-6 w-6 text-purple-600 group-hover:text-white"/>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">Orari di Servizio</h3>
                                <p className="text-gray-600 mb-4">Quando puoi trovarci</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-900">Lun - Ven:</span>
                                        <span className="text-gray-700">8:00 - 20:00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-900">Sabato:</span>
                                        <span className="text-gray-700">8:00 - 17:00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-900">Domenica:</span>
                                        <span className="text-orange-600 font-medium">Solo urgenze</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                  </div>

                    {/* Location */}
                    <div
                        className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-start">
                            <div
                                className="bg-orange-100 p-4 rounded-xl mr-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                <MapPin className="h-6 w-6 text-orange-600 group-hover:text-white"/>
                      </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Area di Servizio</h3>
                            <p className="text-gray-600 mb-3">Dove interveniamo</p>
                            <p className="text-gray-700 font-medium">Milano e tutta la Provincia</p>
                            <p className="text-sm text-gray-500 mt-1">Interventi a domicilio garantiti</p>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Seguici sui Social</h3>
                  <div className="flex space-x-4">
                      <a href="https://www.instagram.com/riparazioni24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                         target="_blank" rel="noreferrer"
                         className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                               fill="currentColor">
                              <path
                                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                      <a href="https://wa.me/393205509145" target="_blank" rel="noreferrer"
                         className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 hover:scale-110 transition-all duration-300 shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                               fill="currentColor">
                              <path
                                  d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </a>
                  </div>
                    <p className="text-sm text-gray-500 mt-3">Seguici per aggiornamenti e consigli utili</p>
                </div>
              </div>

                {/* Enhanced Contact Form */}
              <div>
                <ContactForm
                    title="Richiedi Assistenza Rapida"
                    description="Compila il modulo e ti contatteremo entro 60 minuti per fissare un appuntamento."
                />
              </div>
            </div>
          </div>
        </section>

          {/* Enhanced FAQ Section */}
          <section className="py-16 bg-white">
              <div className="container px-4">
                  <div className="text-center mb-12">
                      <div
                          className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
                          <Star size={16} className="mr-2"/>
                          Domande frequenti
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Domande Frequenti</h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                          Ecco alcune risposte alle domande più comuni sui nostri servizi
              </p>
            </div>

              <div className="max-w-4xl mx-auto">
                  <div className="space-y-4">
                      {faqItems.map((item, index) => (
                          <div key={index}
                               className="bg-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                              <button
                                  onClick={() => toggleFaq(index)}
                                  className="w-full text-left p-6 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center"
                              >
                                  <h3 className="font-bold text-lg text-gray-900 pr-4">{item.question}</h3>
                                  {openFaq === index ? (
                                      <ChevronUp size={24} className="text-blue-600 flex-shrink-0"/>
                                  ) : (
                                      <ChevronDown size={24} className="text-gray-400 flex-shrink-0"/>
                                  )}
                              </button>
                              {openFaq === index && (
                                  <div className="px-6 pb-6 border-t border-gray-200">
                                      <p className="text-gray-700 leading-relaxed pt-4">{item.answer}</p>
                                  </div>
                              )}
                          </div>
                      ))}
              </div>
            </div>

              {/* FAQ Schema */}
              <script type="application/ld+json" dangerouslySetInnerHTML={{
                  __html: `
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Quanto costa una riparazione?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Il costo dipende dal tipo di guasto e dall'elettrodomestico. Forniamo sempre un preventivo gratuito e dettagliato prima di procedere con la riparazione. Non ci sono costi nascosti o sorprese."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quanto tempo ci vuole per un intervento?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Interveniamo entro 24 ore dalla richiesta in tutta Milano e provincia. Per le urgenze, quando possibile, offriamo anche servizio in giornata. La durata dell'intervento dipende dal tipo di riparazione."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Fate anche installazione di nuovi elettrodomestici?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sì, oltre alla riparazione, offriamo anche servizi di installazione professionale per tutti i tipi di elettrodomestici, garantendo la corretta messa in funzione e sicurezza."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Su quali marche intervenite?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Interveniamo su tutte le principali marche: Bosch, Siemens, Samsung, LG, Whirlpool, Candy, Electrolux, AEG, Indesit, Ariston, Smeg e molte altre. I nostri tecnici sono formati per intervenire su qualsiasi modello."
                    }
                  }
                ]
              }
            `
            }}/>
          </div>
        </section>
      </MainLayout>
  );
};

export default Contatti;
