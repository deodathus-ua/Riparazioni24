import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const CTASection = () => {
  return (
      <section className="py-16 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
              Elettrodomestico guasto? Risolviamo subito!
            </h2>
            <p className="text-xl text-gray-100 mb-8 [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
              Contattaci ora per un intervento rapido e professionale.
              Operiamo a Milano e provincia, 7 giorni su 7.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/contatti" className="block">
                <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-6 rounded-lg border border-white/30 transition-all min-h-[240px] flex flex-col justify-between">
                  <div>
                    <Mail className="h-12 w-12 mx-auto mb-4 text-[#10b981]" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Invia Richiesta</h3>
                    <p className="text-gray-100 mb-4">Compila il modulo e ti richiameremo entro 1 ora.</p>
                  </div>
                  <Button className="w-full bg-[#10b981] hover:bg-[#059669] text-white transform hover:scale-105 transition-transform">
                    Richiedi Preventivo Gratuito
                  </Button>
                </div>
              </Link>

              <a href="tel:+39 320 550 9145" className="block">
                <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-6 rounded-lg border border-white/30 transition-all min-h-[240px] flex flex-col justify-between">
                  <div>
                    <Phone className="h-12 w-12 mx-auto mb-4 text-[#10b981]" />
                    <h3 className="text-xl font-semibold mb-2 text-white">Chiama Ora</h3>
                    <p className="text-gray-100 mb-4">Parla con noi per un intervento immediato.</p>
                  </div>
                  <Button className="w-full bg-[#10b981] hover:bg-[#059669] text-white transform hover:scale-105 transition-transform">
                    +39 320 550 9145
                  </Button>
                </div>
              </a>

              <a
                  href="https://wa.me/393205509145?text=Ciao,%20ho%20bisogno%20di%20assistenza%20per%20il%20mio%20elettrodomestico"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
              >
                <div className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-6 rounded-lg border border-white/30 transition-all min-h-[240px] flex flex-col justify-between">
                  <div>
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 text-[#25D366]" />
                    <h3 className="text-xl font-semibold mb-2 text-white">WhatsApp</h3>
                    <p className="text-gray-100 mb-4">Scrivici su WhatsApp per assistenza rapida.</p>
                  </div>
                  <Button className="w-full bg-[#25D366] hover:bg-[#20BF55] text-white transform hover:scale-105 transition-transform">
                    Scrivici su WhatsApp
                  </Button>
                </div>
              </a>
            </div>

            <div className="mt-10">
              <p className="text-gray-100 [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
                Ripariamo ogni tipo di elettrodomestico con professionalità e garanzia. Affidati a noi!
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CTASection;