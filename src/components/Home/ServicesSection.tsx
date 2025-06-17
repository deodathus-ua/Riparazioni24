import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';

const services = [
  {
    id: 'lavatrice',
    title: 'Riparazione Lavatrici',
    description: 'Ripariamo ogni tipologia di lavatrice con problemi di carico, scarico, centrifuga o pannello comandi.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm3 3h8m-8 3h8m-4 5a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    image: '/images/lavatrice.webp',
      ctaText: 'Ripara la tua lavatrice oggi!',
      color: 'blue'
  },
  {
      id: 'asciugatrice',
      title: 'Riparazione Asciugatrici',
      description: 'Risolviamo problemi alle asciugatrici come mancato riscaldamento, rumori anomali o errori del sistema.',
      icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M5 3v18h14V3H5zm3 3h8m-8 3h8m-4 7a4 4 0 100-8 4 4 0 000 8z"/>
          </svg>
      ),
      image: '/images/asciugatrice.webp',
      ctaText: 'Asciugatrice guasta? Risolviamo subito!',
      color: 'green'
  },
    {
    id: 'lavastoviglie',
    title: 'Riparazione Lavastoviglie',
    description: 'Risolviamo guasti come scarso lavaggio, perdite d\'acqua o problemi elettronici dei principali marchi.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm0 4h14M8 10v7m8-7v7" />
      </svg>
    ),
    image: '/images/lavastoviglie.webp',
        ctaText: 'Lavastoviglie che non lava? Chiama ora!',
        color: 'purple'
  },
  {
    id: 'frigorifero',
    title: 'Riparazione Frigoriferi',
    description: 'Interveniamo su problemi di temperatura, perdite di gas refrigerante o guasti al compressore.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-600" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm0 9h14M9 3v9m0 3v6" />
      </svg>
    ),
    image: '/images/frigo.webp',
      ctaText: 'Frigorifero che non raffredda? Contattaci!',
      color: 'orange'
  },
  {
      id: 'congelatore',
      title: 'Riparazione Congelatori',
      description: 'Ripariamo congelatori verticali e orizzontali con problemi di raffreddamento o malfunzionamenti.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-600" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm0 6h14m0 6H5M9 3v18"/>
      </svg>
    ),
      image: '/images/frigo_2.webp',
      ctaText: 'Congelatore che non congela? Chiamaci!',
      color: 'cyan'
  },
  {
    id: 'piano-cottura',
    title: 'Riparazione Piani Cottura',
      description: 'Ripariamo piani cottura a gas, elettrici e a induzione con problemi di accensione o circuiti.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm2 4h10M7 10h2m6 0h2m-5 4a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
    ),
    image: '/images/pianocottura.webp',
      ctaText: 'Piano cottura non funziona? Contattaci!',
      color: 'red'
  },
    {
        id: 'forno',
        title: 'Riparazione Forni',
        description: 'Ripariamo forni elettrici e a gas con problemi di temperatura, resistenze o centraline elettroniche.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-600" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18h14V3H5zm3 14h8M8 10h8"/>
            </svg>
        ),
        image: '/images/forno.webp',
        ctaText: 'Problemi con il forno? Riparazione veloce!',
        color: 'amber'
  }
];

const getColorClasses = (color: string) => {
    const colorMap = {
        blue: {bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-600 hover:text-white'},
        green: {bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-600 hover:text-white'},
        purple: {bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-600 hover:text-white'},
        orange: {bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-600 hover:text-white'},
        cyan: {bg: 'bg-cyan-100', text: 'text-cyan-600', hover: 'hover:bg-cyan-600 hover:text-white'},
        red: {bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-600 hover:text-white'},
        amber: {bg: 'bg-amber-100', text: 'text-amber-600', hover: 'hover:bg-amber-600 hover:text-white'}
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

const ServicesSection = () => {
  return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
              <div
                  className="absolute bottom-20 right-10 w-80 h-80 bg-green-100 rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="container relative z-10">
              <div className="text-center mb-16">
                  <div
                      className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Servizi professionali certificati
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                      I Nostri Servizi di
                      <span className="text-blue-600"> Riparazione</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Offriamo servizi professionali di riparazione per tutti i tipi di grandi elettrodomestici a Milano e provincia.
            I nostri tecnici qualificati intervengono rapidamente a domicilio per risolvere ogni problema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
                const colors = getColorClasses(service.color);
                return (
                    <div key={service.id}
                         className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                        <div className="h-48 overflow-hidden relative">
                            <OptimizedImage
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                                decoding="async"
                                width="400"
                                height="300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-8">
                            <div
                                className={`mb-6 p-3 rounded-xl w-fit ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                  </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-4">
                        <div className={`p-3 rounded-lg ${colors.bg} ${colors.text} font-medium text-sm`}>
                            {service.ctaText}
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <Link
                                to={`/servizi/${service.id}`}
                                className="inline-flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors group/link"
                            >
                                Scopri di più
                                <ArrowRight size={16} className="ml-1 group-hover/link:ml-2 transition-all"/>
                            </Link>

                            <Link to="/contatti" className="inline-block">
                                <Button
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                                    Richiedi Intervento
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>

          <div className="mt-16 text-center">
          <Link to="/contatti" className="inline-block">
              <Button
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Richiedi un intervento ora
                <ArrowRight size={20} className="ml-2"/>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
