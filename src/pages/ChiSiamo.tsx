
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Chi Siamo</h1>
            <p className="text-xl text-gray-100">
              Dal 2005 offriamo servizi di riparazione elettrodomestici a Milano e provincia con professionalità, 
              competenza e prezzi trasparenti.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="/images/technician.jpg" alt="Tecnico elettrodomestici al lavoro" className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-brand-blue">+15 anni di esperienza</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">La Nostra Storia</h2>
              <p className="text-lg text-gray-600">
                ElettroAssistenza Milano nasce nel 2005 dalla passione e dall'esperienza di tecnici specializzati
                nel settore della riparazione di elettrodomestici. Nel corso degli anni, abbiamo costruito una solida
                reputazione per l'affidabilità, la professionalità e la rapidità dei nostri servizi.
              </p>
              <p className="text-lg text-gray-600">
                Oggi contiamo su un team di tecnici qualificati e certificati, in grado di intervenire
                su tutte le principali marche di elettrodomestici. La nostra missione è semplice:
                offrire un servizio di riparazione rapido ed efficiente, risparmiando ai nostri clienti
                il costo e l'impatto ambientale dell'acquisto di un nuovo elettrodomestico.
              </p>
            </div>
          </div>

          {/* Perché Sceglierci */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Perché Sceglierci</h2>
              <p className="text-lg text-gray-600 mt-2">
                Ecco cosa ci distingue dalla concorrenza
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-brand-blue mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Intervento Rapido</h3>
                <p className="text-gray-600">
                  Interveniamo entro 24 ore dalla chiamata in tutta Milano e provincia.
                  Per le urgenze, quando possibile, anche in giornata.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-brand-blue mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Garanzia 12 Mesi</h3>
                <p className="text-gray-600">
                  Tutti i nostri interventi e i ricambi installati sono coperti da una garanzia
                  di 12 mesi completa.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-brand-blue mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Tecnici Certificati</h3>
                <p className="text-gray-600">
                  Il nostro team è composto da tecnici specializzati con certificazioni
                  e formazione continua sui nuovi modelli.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-brand-blue mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Prezzi Trasparenti</h3>
                <p className="text-gray-600">
                  Preventivi gratuiti e dettagliati. Nessun costo nascosto o sorprese
                  al momento del pagamento.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-brand-blue mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Ricambi Originali</h3>
                <p className="text-gray-600">
                  Utilizziamo solo ricambi originali o di qualità equivalente 
                  per garantire durata e affidabilità.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-brand-blue mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Assistenza a Domicilio</h3>
                <p className="text-gray-600">
                  Interveniamo direttamente a casa tua, evitandoti lo stress di
                  spostare l'elettrodomestico.
                </p>
              </div>
            </div>
          </div>

          {/* Certificazioni */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Le Nostre Certificazioni</h2>
              <p className="text-lg text-gray-600 mt-2">
                Competenza professionale garantita
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded border border-gray-200 text-center">
                <div className="text-brand-blue mb-2">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-semibold">Certificazione F-GAS</h4>
              </div>
              
              <div className="bg-white p-4 rounded border border-gray-200 text-center">
                <div className="text-brand-blue mb-2">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-semibold">Sicurezza Elettrica</h4>
              </div>
              
              <div className="bg-white p-4 rounded border border-gray-200 text-center">
                <div className="text-brand-blue mb-2">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-semibold">Tecnico PES-PAV</h4>
              </div>
              
              <div className="bg-white p-4 rounded border border-gray-200 text-center">
                <div className="text-brand-blue mb-2">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-semibold">ISO 9001:2015</h4>
              </div>
            </div>
          </div>

          {/* I Nostri Numeri */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">I Nostri Numeri</h2>
              <p className="text-lg text-gray-600 mt-2">
                Esperienza e qualità in cifre
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">+15</div>
                <div className="text-gray-600">Anni di Esperienza</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">+5000</div>
                <div className="text-gray-600">Elettrodomestici Riparati</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">98%</div>
                <div className="text-gray-600">Clienti Soddisfatti</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">8</div>
                <div className="text-gray-600">Tecnici Qualificati</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Hai bisogno di un'assistenza professionale?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Il nostro team è pronto ad aiutarti con qualsiasi problema relativo ai tuoi elettrodomestici.
              Contattaci oggi stesso per una consulenza gratuita o per fissare un intervento.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+393331234567">
                <Button size="lg" className="btn-primary">
                  Chiama Ora: 333 123 4567
                </Button>
              </a>
              <Link to="/contatti">
                <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                  Richiedi Assistenza
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ChiSiamo;
