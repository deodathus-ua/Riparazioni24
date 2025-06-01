import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'lavatrice',
    title: 'Riparazione Lavatrici',
    description: 'Ripariamo ogni tipologia di lavatrice con problemi di carico, scarico, centrifuga o pannello comandi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm3 3h8m-8 3h8m-4 5a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    image: '/images/lavatrice.webp',
    ctaText: 'Ripara la tua lavatrice oggi!'
  },
  {
    id: 'lavastoviglie',
    title: 'Riparazione Lavastoviglie',
    description: 'Risolviamo guasti come scarso lavaggio, perdite d\'acqua o problemi elettronici dei principali marchi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm0 4h14M8 10v7m8-7v7" />
      </svg>
    ),
    image: '/images/lavastoviglie.webp',
    ctaText: 'Lavastoviglie che non lava? Chiama ora!'
  },
  {
    id: 'frigorifero',
    title: 'Riparazione Frigoriferi',
    description: 'Interveniamo su problemi di temperatura, perdite di gas refrigerante o guasti al compressore.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm0 9h14M9 3v9m0 3v6" />
      </svg>
    ),
    image: '/images/frigo.webp',
    ctaText: 'Frigorifero che non raffredda? Contattaci!'
  },
  {
    id: 'forno',
    title: 'Riparazione Forni',
    description: 'Ripariamo forni elettrici e a gas con problemi di temperatura, resistenze o centraline elettroniche.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm3 14h8M8 10h8" />
      </svg>
    ),
    image: '/images/forno.webp',
    ctaText: 'Problemi con il forno? Riparazione veloce!'
  },
  {
    id: 'asciugatrice',
    title: 'Riparazione Asciugatrici',
    description: 'Risolviamo problemi alle asciugatrici come mancato riscaldamento, rumori anomali o errori del sistema.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm3 3h8m-8 3h8m-4 7a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    image: '/images/asciugatrice.webp',
    ctaText: 'Asciugatrice guasta? Risolviamo subito!'
  },
  {
    id: 'piano-cottura',
    title: 'Riparazione Piani Cottura',
    description: 'Ripariamo piani cottura a gas ed elettrici con problemi di accensione, bruciatori o circuiti elettronici.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm2 4h10M7 10h2m6 0h2m-5 4a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
    ),
    image: '/images/pianocottura.webp',
    ctaText: 'Piano cottura non funziona? Contattaci!'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e3a8a]">I Nostri Servizi di Riparazione</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offriamo servizi professionali di riparazione per tutti i tipi di grandi elettrodomestici a Milano e provincia.
            I nostri tecnici qualificati intervengono rapidamente a domicilio per risolvere ogni problema.
          </p>
          <p className="text-md text-gray-800 mt-4 font-medium px-4 py-2 bg-[#10b981]/10 inline-block rounded-full">
              Costo dell'uscita: €30 anche senza riparazione
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group hover-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#1e3a8a]">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex flex-col space-y-3">
                  <h4 className="text-[#10b981] font-semibold">{service.ctaText}</h4>
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/servizi/${service.id}`}
                      className="inline-flex items-center text-[#1e3a8a] hover:text-[#10b981] font-medium transition-colors underline-link"
                    >
                      Scopri di più
                      <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                    </Link>
                    
                    <Link to="/contatti" className="inline-block">
                      <Button className="bg-[#1e3a8a] hover:bg-[#2563eb] text-white font-medium text-sm py-2">
                        Richiedi Intervento
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/contatti" className="inline-block">
            <Button className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 shadow-md pulse-highlight">
              Richiedi un intervento ora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
