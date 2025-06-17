import React from 'react';
import { Link } from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';

const services = [
  {
    id: 'lavatrice',
    title: 'Riparazione Lavatrici',
    description: 'Ripariamo ogni tipologia di lavatrice con problemi di carico, scarico, centrifuga o pannello comandi.',
    image: '/images/lavatrice.webp',
      ctaText: 'Ripara la tua lavatrice oggi!',
      color: 'blue'
  },
  {
      id: 'asciugatrice',
      title: 'Riparazione Asciugatrici',
      description: 'Risolviamo problemi alle asciugatrici come mancato riscaldamento, rumori anomali o errori del sistema.',
      image: '/images/asciugatrice.webp',
      ctaText: 'Asciugatrice guasta? Risolviamo subito!',
      color: 'green'
  },
    {
    id: 'lavastoviglie',
    title: 'Riparazione Lavastoviglie',
    description: 'Risolviamo guasti come scarso lavaggio, perdite d\'acqua o problemi elettronici dei principali marchi.',
    image: '/images/lavastoviglie.webp',
      ctaText: 'Lavastoviglie che non lava? Chiama ora!',
      color: 'purple'
  },
  {
    id: 'frigorifero',
    title: 'Riparazione Frigoriferi',
    description: 'Interveniamo su problemi di temperatura, perdite di gas refrigerante o guasti al compressore.',
    image: '/images/frigo.webp',
      ctaText: 'Frigorifero che non raffredda? Contattaci!',
      color: 'orange'
  },
  {
      id: 'congelatore',
      title: 'Riparazione Congelatori',
      description: 'Ripariamo congelatori verticali e orizzontali con problemi di raffreddamento o malfunzionamenti.',
      image: '/images/frigo_2.webp',
      ctaText: 'Congelatore che non congela? Chiamaci!',
      color: 'cyan'
  },
  {
    id: 'piano-cottura',
    title: 'Riparazione Piani Cottura',
      description: 'Ripariamo piani cottura a gas, elettrici e a induzione con problemi di accensione o circuiti.',
    image: '/images/pianocottura.webp',
      ctaText: 'Piano cottura non funziona? Contattaci!',
      color: 'red'
  },
    {
        id: 'forno',
        title: 'Riparazione Forni',
        description: 'Ripariamo forni elettrici e a gas con problemi di temperatura, resistenze o centraline elettroniche.',
        image: '/images/forno.webp',
        ctaText: 'Problemi con il forno? Riparazione veloce!',
        color: 'amber'
  }
];

const getColorClasses = (color: string) => {
    const colorMap = {
        blue: {
            bg: 'bg-blue-100',
            text: 'text-blue-600',
            hover: 'hover:bg-blue-600 hover:text-white',
            border: 'border-blue-500',
            accent: 'bg-blue-500',
            button: 'bg-blue-600 hover:bg-blue-700'
        },
        green: {
            bg: 'bg-green-100',
            text: 'text-green-600',
            hover: 'hover:bg-green-600 hover:text-white',
            border: 'border-green-500',
            accent: 'bg-green-500',
            button: 'bg-green-600 hover:bg-green-700'
        },
        purple: {
            bg: 'bg-purple-100',
            text: 'text-purple-600',
            hover: 'hover:bg-purple-600 hover:text-white',
            border: 'border-purple-500',
            accent: 'bg-purple-500',
            button: 'bg-purple-600 hover:bg-purple-700'
        },
        orange: {
            bg: 'bg-orange-100',
            text: 'text-orange-600',
            hover: 'hover:bg-orange-600 hover:text-white',
            border: 'border-orange-500',
            accent: 'bg-orange-500',
            button: 'bg-orange-600 hover:bg-orange-700'
        },
        cyan: {
            bg: 'bg-cyan-100',
            text: 'text-cyan-600',
            hover: 'hover:bg-cyan-600 hover:text-white',
            border: 'border-cyan-500',
            accent: 'bg-cyan-500',
            button: 'bg-cyan-600 hover:bg-cyan-700'
        },
        red: {
            bg: 'bg-red-100',
            text: 'text-red-600',
            hover: 'hover:bg-red-600 hover:text-white',
            border: 'border-red-500',
            accent: 'bg-red-500',
            button: 'bg-red-600 hover:bg-red-700'
        },
        amber: {
            bg: 'bg-amber-100',
            text: 'text-amber-600',
            hover: 'hover:bg-amber-600 hover:text-white',
            border: 'border-amber-500',
            accent: 'bg-amber-500',
            button: 'bg-amber-600 hover:bg-amber-700'
        }
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
                         className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 relative flex flex-col">
                        <div className="h-48 overflow-hidden relative">
                            <OptimizedImage
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                width={400}
                                height={300}
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div
                                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
                                Servizio Professionale
                            </div>
                            <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.accent}`}></div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">{service.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-base">{service.description}</p>

                                <div className="space-y-4">
                                    <div
                                        className={`p-4 rounded-xl ${colors.bg} border-l-4 ${colors.border}`}>
                                        <p className={`${colors.text} font-semibold text-sm flex items-center`}>
                                            <span className="w-2 h-2 bg-current rounded-full mr-3"></span>
                                            {service.ctaText}
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-sm font-medium text-gray-500">Disponibilità</span>
                                            <span className="text-green-600 text-sm font-semibold">24/7</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-500">Intervento</span>
                                            <span className="text-blue-600 text-sm font-semibold">Entro 24h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-6 mt-auto">
                                <Link
                                    to={`/servizi/${service.id}`}
                                    className="inline-flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors group/link text-sm"
                                >
                                    Scopri di più
                                    <ArrowRight size={16}
                                                className="ml-1 group-hover/link:ml-2 transition-all"/>
                                </Link>

                                <Link to="/contatti" className="inline-block">
                                    <Button
                                        className={`${colors.button} text-white font-medium text-sm py-2 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg`}>
                                        Richiedi Intervento
                                    </Button>
                                </Link>
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
