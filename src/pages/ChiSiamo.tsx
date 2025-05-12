
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import { CheckCircle, Users, Award, Clock, Briefcase, ThumbsUp } from 'lucide-react';
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
              Costo uscita €40 anche senza riparazione.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 animate-fade-in">
            <div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img src="/images/technician.jpg" alt="Tecnico elettrodomestici al lavoro" className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-[#1e3a8a]">+15 anni di esperienza</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">La Nostra Storia</h2>
              <p className="text-lg text-gray-600">
                Riparazioni 24 nasce nel 2005 dalla passione e dall'esperienza di tecnici specializzati
                nel settore della riparazione di elettrodomestici. Nel corso degli anni, abbiamo costruito una solida
                reputazione per l'affidabilità, la professionalità e la rapidità dei nostri servizi.
              </p>
              <p className="text-lg text-gray-600">
                Nata con l'obiettivo di offrire un servizio di assistenza rapida e di qualità, 
                Riparazioni 24 è cresciuta grazie alla fiducia dei nostri clienti e al nostro impegno costante 
                per garantire interventi precisi e tempestivi.
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
                <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                  <img src="/images/technician-1.jpg" alt="Mario Rossi" className="h-full w-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-center">Mario Rossi</h3>
                <p className="text-[#10b981] font-medium text-center mb-2">Tecnico Senior</p>
                <p className="text-gray-600 text-center">
                  10 anni di esperienza nella riparazione di frigoriferi e lavatrici.
                  Specializzato in elettronica avanzata.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                  <img src="/images/technician-2.jpg" alt="Luigi Bianchi" className="h-full w-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-center">Luigi Bianchi</h3>
                <p className="text-[#10b981] font-medium text-center mb-2">Responsabile Tecnico</p>
                <p className="text-gray-600 text-center">
                  15 anni nel settore, specializzato in sistemi di refrigerazione
                  e interventi complessi su elettrodomestici di ultima generazione.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 rounded-full overflow-hidden h-48 w-48 mx-auto">
                  <img src="/images/technician-3.jpg" alt="Paolo Verdi" className="h-full w-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-center">Paolo Verdi</h3>
                <p className="text-[#10b981] font-medium text-center mb-2">Tecnico Specializzato</p>
                <p className="text-gray-600 text-center">
                  Esperto in forni e piani cottura, con certificazioni specifiche
                  per la riparazione di elettrodomestici ad alta efficienza energetica.
                </p>
              </div>
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
                  Preventivi gratuiti e dettagliati. Costo uscita €40. Nessun costo nascosto o sorprese
                  al momento del pagamento.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-[#10b981] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
                  Con oltre 15 anni di esperienza nel settore, abbiamo affrontato e risolto
                  ogni tipo di guasto sui principali elettrodomestici.
                </p>
              </div>
            </div>
          </div>

          {/* Certificazioni e Partner */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Certificazioni e Partner</h2>
              <p className="text-lg text-gray-600 mt-2">
                Collaboriamo con i migliori marchi del settore
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24">
                <img src="/images/brand-1.png" alt="Samsung" className="max-h-12" />
              </div>
              <div className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24">
                <img src="/images/brand-2.png" alt="Bosch" className="max-h-12" />
              </div>
              <div className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24">
                <img src="/images/brand-3.png" alt="Whirlpool" className="max-h-12" />
              </div>
              <div className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24">
                <img src="/images/brand-4.png" alt="Electrolux" className="max-h-12" />
              </div>
              <div className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24">
                <img src="/images/brand-5.png" alt="Miele" className="max-h-12" />
              </div>
              <div className="bg-white p-4 rounded border border-gray-200 flex items-center justify-center h-24">
                <img src="/images/brand-6.png" alt="Siemens" className="max-h-12" />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">Tecnici certificati per l'assistenza sui principali marchi di elettrodomestici</p>
            </div>
          </div>

          {/* Testimonianze */}
          <div className="mb-16 animate-fade-in">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Dicono di Noi</h2>
              <p className="text-lg text-gray-600 mt-2">
                Le testimonianze dei nostri clienti soddisfatti
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img src="/images/client-1.jpg" alt="Cliente" className="w-12 h-12 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Laura Bianchi</h4>
                    <div className="flex text-yellow-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Servizio eccezionale! La mia lavatrice è stata riparata in meno di 24 ore. Tecnici professionali e puntuali. Consigliatissimi!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img src="/images/client-2.jpg" alt="Cliente" className="w-12 h-12 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Marco Rossi</h4>
                    <div className="flex text-yellow-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Frigorifero riparato in giornata e a un prezzo onesto. Il tecnico è stato molto competente e ha spiegato chiaramente qual era il problema. Ottimo servizio!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img src="/images/client-3.jpg" alt="Cliente" className="w-12 h-12 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Giulia Verdi</h4>
                    <div className="flex text-yellow-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" strokeWidth="1"></path></svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Ho chiamato per un problema alla lavastoviglie, sono arrivati puntuali e hanno risolto rapidamente. Prezzi chiari sin da subito e ottima professionalità."
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/contatti">
                <Button size="lg" className="bg-[#10b981] hover:bg-[#059669] text-white">
                  <ThumbsUp className="mr-2 h-5 w-5" />
                  Unisciti ai nostri clienti soddisfatti
                </Button>
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-[#1e3a8a] to-blue-800 p-8 md:p-12 rounded-lg shadow-md text-center text-white animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Hai bisogno di un'assistenza professionale?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Il nostro team è pronto ad aiutarti con qualsiasi problema relativo ai tuoi elettrodomestici.
              Contattaci oggi stesso per una consulenza gratuita o per fissare un intervento.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+393331234567">
                <Button size="lg" className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 shadow-md">
                  Chiama Ora: 333 123 4567
                </Button>
              </a>
              <Link to="/contatti">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1e3a8a] font-semibold py-3 px-6 rounded-md transition-colors duration-300 shadow-md">
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
