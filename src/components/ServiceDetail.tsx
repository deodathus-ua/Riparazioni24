import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
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
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-800 text-white py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
              <p className="text-lg text-gray-100">{description}</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="tel:+39 320 550 91455">
                  <Button size="lg" className="btn-primary">
                    Chiama Ora
                  </Button>
                </a>
                <Link to="/contatti">
                  <Button size="lg" variant="outline" className="bg-white text-brand-blue hover:bg-gray-100">
                    Richiedi Preventivo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto overflow-hidden rounded-lg">
              <img 
                src={imageUrl || '/images/service-default.jpg'}
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-6">Servizio di {title}</h2>
                
                <div className="space-y-4 mb-8">
                  {bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="text-brand-blue mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">Problemi Comuni</h3>
                <div className="space-y-6">
                  {commonProblems.map((problem, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-semibold mb-2">{problem.title}</h4>
                      <p className="text-gray-600">{problem.description}</p>
                    </div>
                  ))}
                </div>

                {brands && brands.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Marche Trattate</h3>
                    <div className="flex flex-wrap gap-2">
                      {brands.map((brand, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {faqItems && faqItems.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Domande Frequenti</h3>
                    <div className="space-y-4">
                      {faqItems.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                          <h4 className="font-semibold mb-2">{item.question}</h4>
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Call to Action */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">Hai bisogno di aiuto con il tuo elettrodomestico?</h2>
                <p className="mb-6">
                  Non aspettare che il problema peggiori. I nostri tecnici sono pronti a intervenire a Milano e provincia.
                  Chiamaci ora o richiedi un preventivo gratuito.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+39 320 550 9145">
                    <Button className="btn-primary">
                      Chiama Ora
                    </Button>
                  </a>
                  <Link to="/contatti">
                    <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                      Richiedi Preventivo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              {/* Contact Box */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
                <h3 className="text-xl font-semibold mb-4">Contattaci</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <svg className="text-brand-blue w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+39 320 550 9145" className="hover:text-brand-blue">+39 320 550 9145</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="text-brand-blue w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@riparazioni24.eu
" className="hover:text-brand-blue">info@riparazioni24.eu
</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="text-brand-blue w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Milano e provincia</span>
                  </div>
                </div>
                <Link to="/contatti" className="btn-primary block text-center">
                  Modulo di Contatto
                </Link>
              </div>
              
              {/* Other Services Box */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Altri Servizi</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/servizi/lavatrice" className="flex items-center text-gray-700 hover:text-brand-blue">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Riparazione Lavatrici</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/servizi/lavastoviglie" className="flex items-center text-gray-700 hover:text-brand-blue">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Riparazione Lavastoviglie</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/servizi/frigorifero" className="flex items-center text-gray-700 hover:text-brand-blue">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Riparazione Frigoriferi</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/servizi/forno" className="flex items-center text-gray-700 hover:text-brand-blue">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Riparazione Forni</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/servizi/piccoli-elettrodomestici" className="flex items-center text-gray-700 hover:text-brand-blue">
                      <ArrowRight size={16} className="mr-2" />
                      <span>Altri Elettrodomestici</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
