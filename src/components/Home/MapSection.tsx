
import React from 'react';

const MapSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">La Nostra Area di Servizio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Offriamo servizi di riparazione elettrodomestici a Milano e in tutti i comuni limitrofi.
            Ecco le principali zone che copriamo con il nostro servizio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden h-[400px]">
            {/* Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89547.71469631314!2d9.107185542285159!3d45.46995957107543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilano%20MI!5e0!3m2!1sit!2sit!4v1649751234567!5m2!1sit!2sit"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Milano and surrounding areas"
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Zone Servite</h3>
            <div className="grid grid-cols-2 gap-y-2">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Milano (tutti i quartieri)</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Sesto San Giovanni</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Cinisello Balsamo</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Rho</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Rozzano</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Cologno Monzese</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Corsico</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Novate Milanese</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Segrate</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Buccinasco</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Assago</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-brand-blue rounded-full mr-2"></span>
                <span>Opera</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold mb-2">Tempistica di intervento:</h4>
              <p className="text-gray-600">
                Interveniamo entro 24 ore dalla richiesta in tutte le zone indicate.
                Per le urgenze, quando possibile, offriamo anche servizio in giornata.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Hai bisogno di assistenza?</h4>
              <a 
                href="tel:+393331234567" 
                className="btn-primary inline-block w-full text-center"
              >
                Chiamaci al 333 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
