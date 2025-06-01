import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, Clock } from 'lucide-react';

const Contatti = () => {
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

          {/* Breadcrumb Navigation */}
          <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
              <div className="container">
                  <ol className="flex items-center space-x-2 text-sm">
                      <li>
                          <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
                      </li>
                      <li className="text-gray-500">/</li>
                      <li className="text-gray-700">Contatti</li>
                  </ol>
              </div>
          </nav>

          {/* Breadcrumb Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: `
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://riparazioni24.eu/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contatti",
                "item": "https://riparazioni24.eu/contatti"
              }
            ]
          }
        `
          }}/>

          {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-blue to-blue-800 text-white py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contatti</h1>
              <p className="text-xl text-gray-100">
                Hai un elettrodomestico guasto? Contattaci subito e ti aiuteremo a risolvere il problema rapidamente.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Come Contattarci</h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Telefono</h3>
                      <p className="text-gray-600 mb-1">Risposta immediata negli orari di servizio</p>
                      <a href="tel:+393205509145" className="text-brand-blue hover:text-brand-lightBlue font-semibold text-lg transition-colors">
                        +39 320 550 9145
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email</h3>
                      <p className="text-gray-600 mb-1">Ti risponderemo entro 2 ore</p>
                      <a href="mailto:info@elettroassistenza costes-milano.it" className="text-brand-blue hover:text-brand-lightBlue font-semibold transition-colors break-words">
                        info@riparazioni24.eu

                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Orari</h3>
                      <p className="text-gray-600 mb-2">Quando puoi trovarci</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <span className="font-medium">Lun - Ven:</span>
                        </div>
                        <div>8:00 - 20:00</div>

                        <div>
                          <span className="font-medium">Sabato:</span>
                        </div>
                        <div>8:00 - 17:00</div>

                        <div>
                          <span className="font-medium">Domenica:</span>
                        </div>
                        <div>Solo urgenze</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-4">Seguici sui Social</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/riparazioni24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                      </svg>
                    </a>
                    <a href="https://wa.me/393205509145" target="_blank" rel="noreferrer" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm
                    title="Richiedi Assistenza"
                    description="Compila il modulo e ti contatteremo entro 60 minuti per fissare un appuntamento."
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Domande Frequenti</h2>
              <p className="text-lg text-gray-600 mt-2">
                Ecco alcune risposte alle domande più comuni
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Quanto costa una riparazione?</h3>
                <p className="text-gray-600">
                  Il costo dipende dal tipo di guasto e dall'elettrodomestico. Forniamo sempre un preventivo gratuito e dettagliato prima di procedere con la riparazione. Non ci sono costi nascosti o sorprese.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Quanto tempo ci vuole per un intervento?</h3>
                <p className="text-gray-600">
                  Interveniamo entro 24 ore dalla richiesta in tutta Milano e provincia. Per le urgenze, quando possibile, offriamo anche servizio in giornata. La durata dell'intervento dipende dal tipo di riparazione.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Fate anche installazione di nuovi elettrodomestici?</h3>
                <p className="text-gray-600">
                  Sì, oltre alla riparazione, offriamo anche servizi di installazione professionale per tutti i tipi di elettrodomestici, garantendo la corretta messa in funzione e sicurezza.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Su quali marche intervenite?</h3>
                <p className="text-gray-600">
                  Interveniamo su tutte le principali marche: Bosch, Siemens, Samsung, LG, Whirlpool, Candy, Electrolux, AEG, Indesit, Ariston, Smeg e molte altre. I nostri tecnici sono formati per intervenire su qualsiasi modello.
                </p>
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
