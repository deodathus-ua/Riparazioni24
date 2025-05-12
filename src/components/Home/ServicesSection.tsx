
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'lavatrice',
    title: 'Riparazione Lavatrici',
    description: 'Ripariamo ogni tipologia di lavatrice con problemi di carico, scarico, centrifuga o pannello comandi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm3 3h8m-8 3h8m-4 5a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    image: '/images/lavatrice.jpg'
  },
  {
    id: 'lavastoviglie',
    title: 'Riparazione Lavastoviglie',
    description: 'Risolviamo guasti come scarso lavaggio, perdite d\'acqua o problemi elettronici dei principali marchi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm0 4h14M8 10v7m8-7v7" />
      </svg>
    ),
    image: '/images/lavastoviglie.jpg'
  },
  {
    id: 'frigorifero',
    title: 'Riparazione Frigoriferi',
    description: 'Interveniamo su problemi di temperatura, perdite di gas refrigerante o guasti al compressore.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm0 9h14M9 3v9m0 3v6" />
      </svg>
    ),
    image: '/images/frigorifero.jpg'
  },
  {
    id: 'forno',
    title: 'Riparazione Forni',
    description: 'Ripariamo forni elettrici e a gas con problemi di temperatura, resistenze o centraline elettroniche.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm3 14h8M8 10h8" />
      </svg>
    ),
    image: '/images/forno.jpg'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Servizi di Riparazione</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offriamo servizi professionali di riparazione per tutti i tipi di elettrodomestici a Milano e provincia.
            I nostri tecnici qualificati intervengono rapidamente per risolvere ogni problema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={`/servizi/${service.id}`}
                  className="inline-flex items-center text-brand-blue hover:text-brand-orange font-medium transition-colors"
                >
                  Scopri di più
                  <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/servizi/piccoli-elettrodomestici" 
            className="inline-flex items-center text-lg text-brand-blue hover:text-brand-orange font-medium transition-colors"
          >
            Scopri anche la riparazione di piccoli elettrodomestici
            <ArrowRight size={18} className="ml-1 group-hover:ml-2 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
