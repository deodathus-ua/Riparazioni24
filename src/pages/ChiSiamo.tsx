import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import { Users, Award, Clock, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FloatingCTA from '@/components/FloatingCTA';

const ChiSiamo = () => {
  return (
      <MainLayout
          title="Chi Siamo | Riparazione Elettrodomestici Milano"
          description="Scopri la nostra esperienza nella riparazione elettrodomestici a Milano. Tecnici qualificati, esperienza pluriennale e servizio rapido."
      >
        <Helmet>
          <title>Chi Siamo | Riparazione Elettrodomestici Milano</title>
          <meta name="description" content="Scopri la nostra esperienza nella riparazione elettrodomestici a Milano. Tecnici qualificati, esperienza pluriennale e servizio rapido." />
          <meta name="keywords" content="riparazione elettrodomestici Milano, chi siamo, tecnici elettrodomestici Milano, assistenza elettrodomestici" />
        </Helmet>

          {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1e3a8a] to-blue-800 text-white py-16 animate-fade-in">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Affidati a noi per la riparazione dei tuoi elettrodomestici</h1>
              <p className="text-xl text-gray-100">
                Esperienza, professionalità e interventi rapidi in tutta Milano e provincia.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container">
            {/* Introduzione */}
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Il tuo partner di fiducia per la riparazione di elettrodomestici</h2>
              <p className="text-lg text-gray-600">
                Riparazioni 24 è il tuo partner di fiducia per la riparazione di elettrodomestici grandi a Milano e dintorni.
                Con anni di esperienza nel settore e un team di tecnici altamente qualificati, garantiamo interventi rapidi,
                professionali e a prezzi trasparenti.
              </p>
            </div>

            {/* Statistiche */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-3xl font-bold text-[#10b981]">10,000+</h3>
                <p className="text-gray-600">Riparazioni effettuate</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-3xl font-bold text-[#10b981]">10+</h3>
                <p className="text-gray-600">Anni di esperienza</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-3xl font-bold text-[#10b981]">24h</h3>
                <p className="text-gray-600">Interventi rapidi</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 animate-fade-in">
              <div>
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <img
                          src="/images/tecnico.webp"
                          alt="Tecnico esperto di elettrodomestici al lavoro durante riparazione"
                          className="w-full h-auto"
                          loading="lazy"
                          width="600"
                          height="400"
                          decoding="async"
                      />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <p className="font-bold text-[#1e3a8a]">+10 anni di esperienza</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">La Nostra Storia</h2>
                <p className="text-lg text-gray-600">
                  Fondata nel 2015, Riparazioni 24 è nata dalla visione dei fratelli Yaroslav e Bohdan Stasyuk,
                  che hanno unito la loro passione per la tecnologia e il servizio clienti per creare un'azienda leader
                  nella riparazione di elettrodomestici a Milano. La nostra missione è garantire soluzioni rapide e affidabili
                  per ogni esigenza.
                </p>
                <p className="text-lg text-gray-600">
                  Grazie a un approccio incentrato sul cliente e a un team di tecnici qualificati,
                  siamo diventati un punto di riferimento per migliaia di famiglie e aziende in tutta la provincia di Milano.
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  <span className="font-semibold text-[#1e3a8a]">Visita:</span>
                  <a href="#team" className="text-[#10b981] hover:underline">Il nostro team</a>
                  <a href="#perche" className="text-[#10b981] hover:underline">Perché sceglierci</a>
                </div>
              </div>
            </div>

            {/* Il nostro team */}
            <div id="team" className="mb-16 animate-fade-in">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">I Nostri Tecnici</h2>
                <p className="text-lg text-gray-600 mt-2">
                  Un team di professionisti qualificati e appassionati
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4 h-48 w-48 mx-auto">
                    <div className="rounded-full overflow-hidden h-full w-full">
                        <img
                            src="/images/staff/yaroslav.webp"
                            alt="Yaroslav Stasyuk - Tecnico Senior e Co-Fondatore di Riparazioni 24"
                            className="h-full w-full object-cover"
                            loading="lazy"
                            width="192"
                            height="192"
                            decoding="async"
                        />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-center">Yaroslav Stasyuk</h3>
                  <p className="text-[#10b981] font-medium text-center mb-2">Tecnico Senior & Co-Founder</p>
                  <p className="text-gray-600 text-center">
                    Con oltre 10 anni di esperienza nella riparazione di grandi elettrodomestici, Yaroslav è un esperto in lavatrici, frigoriferi e forni.
                    Come co-fondatore, guida il team con passione, garantendo interventi precisi e un servizio clienti impeccabile.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4 h-48 w-48 mx-auto">
                    <div className="rounded-full overflow-hidden h-full w-full">
                        <img
                            src="/images/staff/serhii.webp"
                            alt="Serhii Savchuk - Responsabile Tecnico specializzato in diagnosi elettrodomestici"
                            className="h-full w-full object-cover"
                            loading="lazy"
                            width="192"
                            height="192"
                            decoding="async"
                        />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-center">Serhii Savchuk</h3>
                  <p className="text-[#10b981] font-medium text-center mb-2">Responsabile Tecnico</p>
                  <p className="text-gray-600 text-center">
                    Laureato in ingegneria meccanica, Serhii porta 5 anni di esperienza tecnica e una profonda conoscenza dei sistemi elettrodomestici.
                    Specializzato in diagnosi complesse, assicura soluzioni rapide e durature.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative mb-4 h-48 w-48 mx-auto">
                    <div className="rounded-full overflow-hidden h-full w-full">
                        <img
                            src="/images/staff/bohdan.webp"
                            alt="Bohdan Stasyuk - Co-Fondatore e Responsabile Strategia Aziendale"
                            className="h-full w-full object-cover"
                            loading="lazy"
                            width="192"
                            height="192"
                            decoding="async"
                        />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-center">Bohdan Stasyuk</h3>
                  <p className="text-[#10b981] font-medium text-center mb-2">Co-Founder</p>
                  <p className="text-gray-600 text-center">
                    Come co-fondatore, Bohdan supervisiona la strategia aziendale e il servizio clienti, garantendo un’esperienza fluida e soddisfacente per ogni cliente.
                    La sua visione ha reso Riparazioni 24 un nome di fiducia a Milano.
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link to="/contatti">
                  <Button size="lg" className="bg-[#10b981] hover:bg-[#059669] text-white">
                    Contatta il nostro team
                  </Button>
                </Link>
              </div>
            </div>

            {/* Perché Sceglierci */}
            <div id="perche" className="mb-16 animate-fade-in">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Perché Sceglierci</h2>
                <p className="text-lg text-gray-600 mt-2">
                  Ecco cosa ci distingue dalla concorrenza
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#10b981] mb-4">
                    <Clock className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Intervento Rapido</h3>
                  <p className="text-gray-600">
                    Interveniamo entro 24 ore dalla chiamata in tutta Milano e provincia.
                    Per le urgenze, quando possibile, anche in giornata.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#10b981] mb-4">
                    <Award className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Garanzia 12 Mesi</h3>
                  <p className="text-gray-600">
                    Tutti i nostri interventi e i ricambi installati sono coperti da una garanzia
                    di 12 mesi completa.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#10b981] mb-4">
                    <Users className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tecnici Certificati</h3>
                  <p className="text-gray-600">
                    Il nostro team è composto da tecnici specializzati con certificazioni
                    e formazione continua sui nuovi modelli.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#10b981] mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Prezzi Trasparenti</h3>
                  <p className="text-gray-600">
                      Preventivi gratuiti e dettagliati. Costo uscita €30. Nessun costo nascosto o sorprese
                    al momento del pagamento.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#10b981] mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ricambi Originali</h3>
                  <p className="text-gray-600">
                    Utilizziamo solo ricambi originali o di qualità equivalente
                    per garantire durata e affidabilità.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#10b981] mb-4">
                    <Briefcase className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Esperienza Pluriennale</h3>
                  <p className="text-gray-600">
                    Con oltre 10 anni di esperienza nel settore, abbiamo affrontato e risolto
                    ogni tipo di guasto sui principali elettrodomestici.
                  </p>
                </div>
              </div>
            </div>

            {/* I Marchi che Ripariamo */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">I Marchi che Ripariamo</h2>
                <p className="text-lg text-gray-600 mt-2">
                  Ripariamo elettrodomestici dei principali marchi con competenza e professionalità
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {/* Row 1 - 6 logos */}
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/samsung.svg"
                      alt="Samsung - Marchio elettrodomestici riparato da Riparazioni 24"
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/grundig.svg"
                      alt="Grundig - Riparazione elettrodomestici tedeschi di qualità"
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/whirlpool.svg"
                      alt="Whirlpool - Assistenza professionale elettrodomestici"
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/electrolux.svg"
                      alt="Electrolux - Riparazione lavatrici, frigoriferi e forni"
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/hisense.svg"
                      alt="Hisense - Assistenza elettrodomestici moderni"
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/siemens.svg"
                      alt="Siemens - Riparazione elettrodomestici con ricambi originali"
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>

                {/* Row 2 - 6 logos */}
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/indesit.svg"
                      alt="Indesit - Riparazione elettrodomestici marchio italiano"
                      className="max-h-18 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/candy.svg"
                      alt="Candy - Assistenza tecnica elettrodomestici italiani"
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/ariston.svg"
                      alt="Ariston - Riparazione elettrodomestici"
                      className="max-h-18 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/hoover.svg"
                      alt="Hoover - Assistenza elettrodomestici per la pulizia domestica"
                      className="max-h-18 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/beko.svg"
                      alt="Beko - Riparazione elettrodomestici moderni"
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/zanussi.svg"
                      alt="Zanussi - Assistenza professionale elettrodomestici"
                      className="max-h-18 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>

                {/* Row 3 - 6 logos */}
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/aeg.svg"
                      alt="AEG - Riparazione elettrodomestici premium tedeschi"
                      className="max-h-10 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/bauknecht.svg"
                      alt="Bauknecht - Assistenza tecnica elettrodomestici Whirlpool"
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/ignis.svg"
                      alt="Ignis - Riparazione elettrodomestici marchio italiano"
                      className="max-h-18 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/hotpoint.svg"
                      alt="Hotpoint - Servizio tecnico elettrodomestici affidabili"
                      className="max-h-18 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/smeg.svg"
                      alt="Smeg - Riparazione elettrodomestici design italiano"
                      className="max-h-18 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>
                <div
                    className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                      src="/images/brand%20logos/haier.svg"
                      alt="Haier - Assistenza elettrodomestici innovativi"
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                      width="120"
                      height="48"
                      decoding="async"
                  />
                </div>

                {/* Row 4 - 3 logos centered */}
                <div className="col-span-2 md:col-span-3 lg:col-span-6 flex justify-center">
                  <div className="grid grid-cols-3 gap-6 w-full">
                    <div
                        className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                      <img
                          src="/images/brand%20logos/bosch.svg"
                          alt="Bosch - Elettrodomestici riparati dai nostri tecnici specializzati"
                          className="max-h-18 max-w-full object-contain"
                          loading="lazy"
                          width="120"
                          height="48"
                          decoding="async"
                      />
                    </div>
                    <div
                        className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                      <img
                          src="/images/brand%20logos/miele.svg"
                          alt="Miele - Servizio tecnico qualificato elettrodomestici premium"
                          className="max-h-18 max-w-full object-contain"
                          loading="lazy"
                          width="120"
                          height="48"
                          decoding="async"
                      />
                    </div>
                    <div
                        className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 overflow-hidden">
                      <img
                          src="/images/brand%20logos/lg.svg"
                          alt="LG - Servizio tecnico elettrodomestici di qualità"
                          className="max-h-18 max-w-full object-contain"
                          loading="lazy"
                          width="120"
                          height="48"
                          decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">Il nostro team ha esperienza con i migliori marchi di elettrodomestici, garantendo riparazioni affidabili</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-10 md:p-16 rounded-lg shadow-lg text-center text-white animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                Hai bisogno di un'assistenza professionale?
              </h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-100">
                Il nostro team è pronto ad aiutarti con qualsiasi problema relativo ai tuoi elettrodomestici.
                Contattaci oggi stesso per una consulenza gratuita o per fissare un intervento.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+393205509145">
                  <Button size="lg" className="bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 shadow-md">
                    Chiama Ora:+39 320 550 9145
                  </Button>
                </a>
                <Link to="/contatti">
                  <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors duration-300 shadow-md">
                    Richiedi Assistenza
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FloatingCTA />
      </MainLayout>
  );
};

export default ChiSiamo;
