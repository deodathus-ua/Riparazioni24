import React from 'react';
import {Helmet} from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';

const PrivacyPolicy = () => {
    return (
        <MainLayout
            title="Privacy Policy | Riparazioni 24 Milano"
            description="Informativa sulla privacy di Riparazioni 24. Scopri come trattiamo i tuoi dati personali in conformità al GDPR."
        >
            <Helmet>
                <title>Privacy Policy | Riparazioni 24 Milano</title>
                <meta name="description"
                      content="Informativa sulla privacy di Riparazioni 24. Scopri come trattiamo i tuoi dati personali in conformità al GDPR."/>
                <meta name="robots" content="index, follow"/>
            </Helmet>

            {/* Privacy Policy Content */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-[#1e3a8a] mb-8">Informativa sulla Privacy</h1>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-8">
                                <strong>Ultimo aggiornamento:</strong> 19 gennaio 2025
                            </p>

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">1. Titolare del
                                        Trattamento</h2>
                                    <p className="text-gray-700 mb-4">
                                        Il Titolare del trattamento dei dati personali è <strong>Riparazioni 24</strong>,
                                        con sede operativa a Milano, Italia.
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Contatti:</strong><br/>
                                        Email: info@riparazioni24.eu<br/>
                                        Telefono: +39 320 550 9145
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">2. Dati Personali
                                        Raccolti</h2>
                                    <p className="text-gray-700 mb-4">
                                        Raccogliamo i seguenti dati personali attraverso il nostro modulo di contatto:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Nome e cognome</li>
                                        <li>Numero di telefono</li>
                                        <li>Indirizzo email (facoltativo)</li>
                                        <li>Località di residenza</li>
                                        <li>Tipo di elettrodomestico e marca</li>
                                        <li>Descrizione del problema</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">3. Finalità del
                                        Trattamento</h2>
                                    <p className="text-gray-700 mb-4">
                                        I tuoi dati personali vengono trattati per le seguenti finalità:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Fornitura del servizio di riparazione elettrodomestici richiesto</li>
                                        <li>Contatto telefonico per fissare appuntamenti</li>
                                        <li>Invio di preventivi e comunicazioni relative al servizio</li>
                                        <li>Adempimento di obblighi contrattuali e legali</li>
                                        <li>Gestione di reclami e assistenza post-vendita</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">4. Base Giuridica del
                                        Trattamento</h2>
                                    <p className="text-gray-700 mb-4">
                                        Il trattamento dei tuoi dati personali si basa su:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li><strong>Consenso:</strong> Fornito al momento della compilazione del modulo
                                        </li>
                                        <li><strong>Esecuzione contrattuale:</strong> Per fornire il servizio richiesto
                                        </li>
                                        <li><strong>Interesse legittimo:</strong> Per comunicazioni commerciali
                                            pertinenti ai nostri servizi
                                        </li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">5. Conservazione dei
                                        Dati</h2>
                                    <p className="text-gray-700">
                                        I tuoi dati personali verranno conservati per il tempo necessario al
                                        raggiungimento delle finalità
                                        per cui sono stati raccolti e comunque non oltre:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                                        <li><strong>Dati di contatto:</strong> 2 anni dalla conclusione del servizio
                                        </li>
                                        <li><strong>Dati contrattuali:</strong> 10 anni per adempimenti fiscali</li>
                                        <li><strong>Consenso marketing:</strong> Fino alla revoca del consenso</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">6. Condivisione dei Dati</h2>
                                    <p className="text-gray-700 mb-4">
                                        I tuoi dati personali possono essere condivisi con:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Tecnici autorizzati per l'esecuzione degli interventi</li>
                                        <li>Fornitori di servizi IT per la gestione del sistema</li>
                                        <li>Consulenti legali e commercialisti per adempimenti normativi</li>
                                        <li>Autorità competenti quando richiesto dalla legge</li>
                                    </ul>
                                    <p className="text-gray-700 mt-4">
                                        <strong>Non vendiamo né cediamo i tuoi dati a terzi per scopi
                                            commerciali.</strong>
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">7. I Tuoi Diritti</h2>
                                    <p className="text-gray-700 mb-4">
                                        In conformità al GDPR (Regolamento UE 2016/679), hai il diritto di:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li><strong>Accesso:</strong> Ottenere informazioni sui dati che trattiamo</li>
                                        <li><strong>Rettifica:</strong> Correggere dati inesatti o incompleti</li>
                                        <li><strong>Cancellazione:</strong> Richiedere la cancellazione dei tuoi dati
                                        </li>
                                        <li><strong>Limitazione:</strong> Limitare il trattamento in determinate
                                            circostanze
                                        </li>
                                        <li><strong>Portabilità:</strong> Ricevere i dati in formato strutturato</li>
                                        <li><strong>Opposizione:</strong> Opporsi al trattamento per motivi legittimi
                                        </li>
                                        <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi
                                            momento
                                        </li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">8. Sicurezza dei Dati</h2>
                                    <p className="text-gray-700">
                                        Adottiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati
                                        personali
                                        da accesso non autorizzato, perdita, distruzione o divulgazione. Utilizziamo
                                        connessioni
                                        sicure (HTTPS) e sistemi di archiviazione protetti.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">9. Cookie</h2>
                                    <p className="text-gray-700">
                                        Il nostro sito web utilizza cookie tecnici necessari per il funzionamento del
                                        sito e
                                        cookie di analytics (Google Analytics) per migliorare l'esperienza utente.
                                        Continuando la navigazione, acconsenti all'uso dei cookie.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">10. Modifiche alla Privacy
                                        Policy</h2>
                                    <p className="text-gray-700">
                                        Ci riserviamo il diritto di modificare questa informativa privacy.
                                        Le modifiche saranno pubblicate su questa pagina con indicazione della data di
                                        ultimo aggiornamento.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">11. Contatti</h2>
                                    <p className="text-gray-700 mb-4">
                                        Per esercitare i tuoi diritti o per qualsiasi domanda riguardante il trattamento
                                        dei tuoi dati personali, puoi contattarci:
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <p className="text-gray-700">
                                            <strong>Email:</strong> info@riparazioni24.eu<br/>
                                            <strong>Telefono:</strong> +39 320 550 9145<br/>
                                            <strong>Oggetto:</strong> "Richiesta Privacy - [Tuo Nome]"
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

export default PrivacyPolicy;
