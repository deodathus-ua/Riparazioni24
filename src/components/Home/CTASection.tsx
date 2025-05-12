
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Il tuo elettrodomestico si è rotto?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Non aspettare! Contattaci subito per un intervento rapido e professionale. 
            Siamo a tua disposizione 7 giorni su 7 a Milano e provincia.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/contatti" className="block">
              <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 transition-all h-full">
                <Mail className="h-12 w-12 mx-auto mb-4 text-[#10b981]" />
                <h3 className="text-xl font-semibold mb-2">Invia Richiesta</h3>
                <p className="text-gray-200 mb-4">Compila il modulo di contatto e ti richiameremo entro 60 minuti</p>
                <Button className="w-full bg-[#10b981] hover:bg-[#059669] text-white">
                  Richiedi Preventivo Gratuito
                </Button>
              </div>
            </Link>
            
            <a href="tel:+393331234567" className="block">
              <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 transition-all h-full">
                <Phone className="h-12 w-12 mx-auto mb-4 text-[#10b981]" />
                <h3 className="text-xl font-semibold mb-2">Chiama Ora</h3>
                <p className="text-gray-200 mb-4">Contattaci telefonicamente per un intervento immediato</p>
                <Button className="w-full bg-[#10b981] hover:bg-[#059669] text-white">
                  333 123 4567
                </Button>
              </div>
            </a>
            
            <a 
              href="https://wa.me/393331234567?text=Ciao,%20ho%20bisogno%20di%20assistenza%20per%20il%20mio%20elettrodomestico" 
              target="_blank" 
              rel="noreferrer"
              className="block"
            >
              <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-6 rounded-lg border border-white/20 transition-all h-full">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-[#10b981]" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-200 mb-4">Scrivici su WhatsApp e ricevi assistenza immediata</p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Scrivici su WhatsApp
                </Button>
              </div>
            </a>
          </div>
          
          <div className="mt-10">
            <p className="text-gray-200">
              Interveniamo su tutte le marche: Bosch, Siemens, Samsung, LG, Whirlpool, Candy, Electrolux, AEG, Indesit, Ariston, Smeg e molte altre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
