
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Marco Bianchi',
    location: 'Milano Centro',
    rating: 5,
    text: 'Servizio eccellente! Hanno riparato la mia lavatrice in giornata. Tecnico professionale e prezzi onesti. Consigliatissimo!',
    service: 'Riparazione Lavatrice'
  },
  {
    id: 2,
    name: 'Laura Rossi',
    location: 'Sesto San Giovanni',
    rating: 5,
    text: 'Il frigorifero ha smesso di raffreddare e temevo di dover comprarne uno nuovo. Invece il tecnico ha risolto il problema in meno di un\'ora. Ottimo servizio!',
    service: 'Riparazione Frigorifero'
  },
  {
    id: 3,
    name: 'Giorgio Verdi',
    location: 'Cinisello Balsamo',
    rating: 4,
    text: 'Molto soddisfatto della riparazione della lavastoviglie. Preventivo chiaro e nessun costo aggiuntivo. Li contatterò sicuramente per future necessità.',
    service: 'Riparazione Lavastoviglie'
  },
  {
    id: 4,
    name: 'Anna Neri',
    location: 'Rho',
    rating: 5,
    text: 'Tecnici disponibili e preparati. Hanno riparato il forno in modo rapido e professionale. Prezzo in linea con il preventivo. Grazie!',
    service: 'Riparazione Forno'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1e3a8a]">Cosa Dicono i Nostri Clienti</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La soddisfazione dei clienti è la nostra priorità. Ecco alcune recensioni di chi ha scelto i nostri servizi di riparazione elettrodomestici a Milano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-sm text-[#1e3a8a] mt-1">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-3">
            <span className="text-lg font-semibold mr-2">Valutazione media:</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-lg font-semibold">4.9/5</span>
            <span className="ml-2 text-gray-500">(98 recensioni)</span>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <div className="max-w-2xl mx-auto bg-[#1e3a8a]/5 rounded-lg p-6 border border-[#1e3a8a]/10">
            <h3 className="text-2xl font-bold mb-4 text-[#1e3a8a]">Unisciti ai nostri clienti soddisfatti!</h3>
            <p className="text-gray-700 mb-6">
              Anche il tuo elettrodomestico merita una riparazione professionale e garantita. Contattaci ora per un intervento rapido e risolutivo.
            </p>
            <Link to="/contatti">
              <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#2563eb] text-white font-semibold py-3 px-8">
                Richiedi il tuo intervento ora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
