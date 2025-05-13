import React from 'react';
import { Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Serhii Savchuk',
    location: 'Milano Centro',
    rating: 5,
    text: 'La lavatrice non funzionava più. Il tecnico arrivato puntuale, ha individuato il problema e risolto in un’ora. Prezzo ragionevole',
    service: 'Riparazione Lavatrice',
  },
  {
    id: 2,
    name: 'Laura',
    location: 'Sesto San Giovanni',
    rating: 3.5,
    text: 'Il frigorifero aveva problemi di raffreddamento. La riparazione è stata veloce, anche se ho dovuto aspettare due giorni per l’appuntamento. Nel complesso, soddisfatta',
    service: 'Riparazione Frigorifero',
  },
  {
    id: 3,
    name: 'Ivano Ferrari',
    location: 'Cinisello Balsamo',
    rating: 5,
    text: 'La lavastoviglie perdeva acqua. Il tecnico ci ha spiegato bene il problema e l’ha riparata subito. Costo in linea con il preventivo',
    service: 'Riparazione Lavastoviglie',
  },
  {
    id: 4,
    name: 'Shaiming Mai',
    location: 'Rho',
    rating: 4,
    text: 'Il forno non scaldare bene. La riparazione fatto in giornata, ma il costo alto. Comunque, il lavoro fatto bene',
    service: 'Riparazione Forno',
  },
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow hover-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <User size={24} className="text-[#1e3a8a]" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
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
                    <p className="text-sm text-[#1e3a8a] font-medium">{testimonial.service}</p>
                  </div>
                </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-6 py-3">
              <span className="text-lg font-semibold mr-2">Valutazione media:</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className={i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">4.6/5</span>
              <span className="ml-2 text-gray-500">(12 recensioni)</span>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#1e3a8a]/5 to-[#10b981]/5 rounded-lg p-8 border border-[#1e3a8a]/10 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-[#1e3a8a]">Unisciti ai nostri clienti soddisfatti!</h3>
              <p className="text-gray-700 mb-6">
                Anche il tuo elettrodomestico merita una riparazione professionale e garantita. Contattaci ora per un intervento rapido e risolutivo.
              </p>
              <Link to="/contatti">
                <Button size="lg" className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold py-3 px-8 pulse-highlight">
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