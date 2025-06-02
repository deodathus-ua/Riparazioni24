import React from 'react';
import {Helmet} from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';

const TerminiServizio = () => {
    return (
        <MainLayout
            title="Termini di Servizio | Riparazioni 24 Milano"
            description="Termini e condizioni di servizio di Riparazioni 24. Leggi le condizioni generali per i nostri servizi di riparazione elettrodomestici."
        >
            <Helmet>
                <title>Termini di Servizio | Riparazioni 24 Milano</title>
                <meta name="description"
                      content="Termini e condizioni di servizio di Riparazioni 24. Leggi le condizioni generali per i nostri servizi di riparazione elettrodomestici."/>
                <meta name="robots" content="index, follow"/>
            </Helmet>

            {/* Terms of Service Content */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-[#1e3a8a] mb-8">Termini e Condizioni di Servizio</h1>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-8">
                                <strong>Ultimo aggiornamento:</strong> 19 gennaio 2025
                            </p>

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">1. Informazioni Generali</h2>
                                    <p className="text-gray-700 mb-4">
                                        I presenti Termini e Condizioni di Servizio regolano l'utilizzo dei servizi
                                        forniti da
                                        <strong> Riparazioni 24</strong>, con sede operativa a Milano, Italia.
                                    </p>
                                    <p className="text-gray-700">
                                        Utilizzando i nostri servizi, accetti integralmente questi termini e condizioni.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">2. Servizi Offerti</h2>
                                    <p className="text-gray-700 mb-4">
                                        Riparazioni 24 fornisce i seguenti servizi:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Riparazione di elettrodomestici (lavatrici, lavastoviglie, frigoriferi,
                                            forni, asciugatrici)
                                        </li>
                                        <li>Diagnosi e valutazione guasti</li>
                                        <li>Installazione di nuovi elettrodomestici</li>
                                        <li>Manutenzione preventiva</li>
                                        <li>Fornitura e installazione ricambi originali</li>
                                        <li>Assistenza post-vendita</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">3. Modalità di
                                        Prenotazione</h2>
                                    <p className="text-gray-700 mb-4">
                                        È possibile prenotare i nostri servizi attraverso:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Compilazione del modulo online sul nostro sito web</li>
                                        <li>Chiamata telefonica al numero +39 320 550 9145</li>
                                        <li>Messaggio WhatsApp</li>
                                        <li>Email a info@riparazioni24.eu</li>
                                    </ul>
                                    <p className="text-gray-700 mt-4">
                                        <strong>Orari di servizio:</strong> Lunedì-Venerdì 8:00-20:00, Sabato
                                        8:00-17:00, Domenica solo urgenze.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">4. Prezzi e Pagamenti</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Costo di
                                                Uscita</h3>
                                            <p className="text-gray-700">
                                                Il costo di uscita è di <strong>€30,00</strong> e viene applicato per
                                                ogni chiamata di servizio,
                                                anche se la riparazione non viene effettuata per scelta del cliente.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.2 Preventivi</h3>
                                            <p className="text-gray-700">
                                                Forniamo preventivi gratuiti e dettagliati prima di procedere con
                                                qualsiasi riparazione.
                                                I prezzi sono trasparenti e senza costi nascosti.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.3 Modalità di
                                                Pagamento</h3>
                                            <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                                <li>Contanti</li>
                                                <li>Carta di credito/debito</li>
                                                <li>Bonifico bancario (per importi elevati)</li>
                                            </ul>
                                            <p className="text-gray-700 mt-2">
                                                Il pagamento è dovuto al completamento del servizio.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">5. Garanzie</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 Garanzia sui
                                                Lavori</h3>
                                            <p className="text-gray-700">
                                                Tutti i nostri interventi di riparazione sono coperti da garanzia
                                                di <strong>12 mesi</strong>
                                                dalla data di completamento del lavoro.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">5.2 Garanzia sui
                                                Ricambi</h3>
                                            <p className="text-gray-700">
                                                I ricambi originali installati sono coperti da garanzia del produttore
                                                e/o
                                                garanzia di 12 mesi dalla data di installazione.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">5.3 Esclusioni
                                                dalla Garanzia</h3>
                                            <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                                <li>Danni causati da uso improprio dell'elettrodomestico</li>
                                                <li>Danni dovuti a cause esterne (sovratensioni, allagamenti, ecc.)</li>
                                                <li>Usura normale dei componenti</li>
                                                <li>Interventi effettuati da personale non autorizzato</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">6. Responsabilità e
                                        Limitazioni</h2>
                                    <div className="space-y-4">
                                        <p className="text-gray-700">
                                            Riparazioni 24 si impegna a fornire servizi professionali con la massima
                                            competenza e attenzione.
                                            Tuttavia, la nostra responsabilità è limitata al valore del servizio
                                            prestato.
                                        </p>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">6.1 Limitazioni di
                                                Responsabilità</h3>
                                            <ul className="list-disc pl-6 text-gray-700 space-y-1">
                                                <li>Non siamo responsabili per danni indiretti o conseguenti</li>
                                                <li>La responsabilità massima è limitata all'importo pagato per il
                                                    servizio
                                                </li>
                                                <li>Non garantiamo tempi specifici di riparazione per guasti complessi
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">7. Cancellazioni e
                                        Modifiche</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">7.1 Cancellazione
                                                da Parte del Cliente</h3>
                                            <p className="text-gray-700">
                                                È possibile cancellare l'appuntamento senza penali con almeno <strong>2
                                                ore di preavviso</strong>.
                                                Cancellazioni tardive possono comportare l'addebito del costo di uscita.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">7.2 Modifiche agli
                                                Appuntamenti</h3>
                                            <p className="text-gray-700">
                                                Le modifiche agli appuntamenti devono essere comunicate con almeno 1 ora
                                                di anticipo.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">8. Reclami e Assistenza</h2>
                                    <p className="text-gray-700 mb-4">
                                        Per eventuali reclami o richieste di assistenza, è possibile contattarci entro
                                        <strong> 7 giorni</strong> dal completamento del servizio:
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <p className="text-gray-700">
                                            <strong>Email:</strong> info@riparazioni24.eu<br/>
                                            <strong>Telefono:</strong> +39 320 550 9145<br/>
                                            <strong>Oggetto:</strong> "Reclamo - [Numero Fattura/Data Servizio]"
                                        </p>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">9. Protezione dei Dati</h2>
                                    <p className="text-gray-700">
                                        Il trattamento dei dati personali è disciplinato dalla nostra
                                        <a href="#/privacy-policy"
                                           className="text-[#1e3a8a] hover:text-[#10b981] underline" target="_blank"
                                           rel="noopener noreferrer">
                                            Privacy Policy
                                        </a>, in conformità al Regolamento UE 2016/679 (GDPR).
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">10. Legge Applicabile e Foro
                                        Competente</h2>
                                    <p className="text-gray-700">
                                        I presenti Termini e Condizioni sono disciplinati dalla legge italiana.
                                        Per qualsiasi controversia è competente il Foro di Milano.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">11. Risoluzione Alternativa
                                        delle Controversie</h2>
                                    <p className="text-gray-700 mb-4">
                                        Prima di ricorrere all'autorità giudiziaria, le parti si impegnano a tentare
                                        una risoluzione amichevole della controversia.
                                    </p>
                                    <p className="text-gray-700">
                                        È possibile utilizzare la piattaforma ODR (Online Dispute Resolution)
                                        dell'Unione Europea: <a href="https://ec.europa.eu/consumers/odr"
                                                                className="text-[#1e3a8a] hover:text-[#10b981] underline"
                                                                target="_blank"
                                                                rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">12. Modifiche ai Termini</h2>
                                    <p className="text-gray-700">
                                        Ci riserviamo il diritto di modificare questi Termini e Condizioni in qualsiasi
                                        momento.
                                        Le modifiche saranno pubblicate su questa pagina con indicazione della data di
                                        aggiornamento
                                        e entreranno in vigore immediatamente.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">13. Contatti</h2>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <p className="text-gray-700">
                                            <strong>Riparazioni 24</strong><br/>
                                            <strong>Email:</strong> info@riparazioni24.eu<br/>
                                            <strong>Telefono:</strong> +39 320 550 9145<br/>
                                            <strong>Sede operativa:</strong> Milano, Italia<br/>
                                            <strong>Orari:</strong> Lun-Ven 8:00-20:00, Sab 8:00-17:00
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default TerminiServizio;
