import React from 'react';
import {Helmet} from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';

const CookiePolicy = () => {
    return (
        <MainLayout
            title="Cookie Policy | Riparazioni 24 Milano"
            description="Informativa sui cookie di Riparazioni 24. Scopri come utilizziamo i cookie sul nostro sito web per migliorare la tua esperienza."
        >
            <Helmet>
                <title>Cookie Policy | Riparazioni 24 Milano</title>
                <meta name="description"
                      content="Informativa sui cookie di Riparazioni 24. Scopri come utilizziamo i cookie sul nostro sito web per migliorare la tua esperienza."/>
                <meta name="robots" content="index, follow"/>
            </Helmet>

            {/* Breadcrumb Navigation */}
            <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
                <div className="container">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
                        </li>
                        <li className="text-gray-500">/</li>
                        <li className="text-gray-700">Cookie Policy</li>
                    </ol>
                </div>
            </nav>

            {/* Cookie Policy Content */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-[#1e3a8a] mb-8">Informativa sui Cookie</h1>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-8">
                                <strong>Ultimo aggiornamento:</strong> 19 gennaio 2025
                            </p>

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">1. Cosa Sono i Cookie</h2>
                                    <p className="text-gray-700 mb-4">
                                        I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo
                                        (computer, tablet o smartphone) quando visiti il nostro sito web
                                        <strong> riparazioni24.eu</strong>.
                                    </p>
                                    <p className="text-gray-700">
                                        I cookie ci aiutano a rendere il nostro sito web più efficiente e a migliorare
                                        la tua esperienza di navigazione, ricordando le tue preferenze e visite
                                        precedenti.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">2. Tipi di Cookie che
                                        Utilizziamo</h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Cookie Tecnici
                                                (Necessari)</h3>
                                            <p className="text-gray-700 mb-3">
                                                Questi cookie sono essenziali per il corretto funzionamento del sito web
                                                e non possono essere disabilitati nei nostri sistemi.
                                            </p>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                    <tr className="border-b">
                                                        <th className="text-left py-2 font-semibold">Nome</th>
                                                        <th className="text-left py-2 font-semibold">Finalità</th>
                                                        <th className="text-left py-2 font-semibold">Durata</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="border-b">
                                                        <td className="py-2">session_id</td>
                                                        <td className="py-2">Mantenimento della sessione utente</td>
                                                        <td className="py-2">Sessione</td>
                                                    </tr>
                                                    <tr className="border-b">
                                                        <td className="py-2">csrf_token</td>
                                                        <td className="py-2">Protezione da attacchi CSRF</td>
                                                        <td className="py-2">Sessione</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2">cookie_consent</td>
                                                        <td className="py-2">Memorizzazione consenso cookie</td>
                                                        <td className="py-2">1 anno</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Cookie
                                                Analitici</h3>
                                            <p className="text-gray-700 mb-3">
                                                Utilizziamo Google Analytics per raccogliere informazioni anonime
                                                su come i visitatori utilizzano il nostro sito web.
                                            </p>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                    <tr className="border-b">
                                                        <th className="text-left py-2 font-semibold">Nome</th>
                                                        <th className="text-left py-2 font-semibold">Finalità</th>
                                                        <th className="text-left py-2 font-semibold">Durata</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="border-b">
                                                        <td className="py-2">_ga</td>
                                                        <td className="py-2">Identificazione utenti univoci</td>
                                                        <td className="py-2">2 anni</td>
                                                    </tr>
                                                    <tr className="border-b">
                                                        <td className="py-2">_ga_[ID]</td>
                                                        <td className="py-2">Stato della sessione</td>
                                                        <td className="py-2">2 anni</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2">_gid</td>
                                                        <td className="py-2">Identificazione utenti univoci</td>
                                                        <td className="py-2">24 ore</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p className="text-gray-700 mt-3 text-sm">
                                                <strong>Provider:</strong> Google LLC<br/>
                                                <strong>Privacy Policy:</strong> <a
                                                href="https://policies.google.com/privacy"
                                                className="text-[#1e3a8a] hover:text-[#10b981] underline"
                                                target="_blank"
                                                rel="noopener noreferrer">https://policies.google.com/privacy</a>
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Cookie di
                                                Funzionalità</h3>
                                            <p className="text-gray-700 mb-3">
                                                Questi cookie ci permettono di ricordare le tue preferenze e
                                                di personalizzare la tua esperienza sul sito.
                                            </p>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                    <tr className="border-b">
                                                        <th className="text-left py-2 font-semibold">Nome</th>
                                                        <th className="text-left py-2 font-semibold">Finalità</th>
                                                        <th className="text-left py-2 font-semibold">Durata</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="border-b">
                                                        <td className="py-2">language_pref</td>
                                                        <td className="py-2">Preferenza lingua</td>
                                                        <td className="py-2">1 anno</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2">form_data</td>
                                                        <td className="py-2">Salvataggio dati form</td>
                                                        <td className="py-2">7 giorni</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">3. Base Giuridica per
                                        l'Utilizzo dei Cookie</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cookie Tecnici</h3>
                                            <p className="text-gray-700">
                                                <strong>Base giuridica:</strong> Interesse legittimo (art. 6, par. 1,
                                                lett. f del GDPR)<br/>
                                                <strong>Consenso richiesto:</strong> No (sono essenziali per il
                                                funzionamento del sito)
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cookie Analitici e
                                                di Funzionalità</h3>
                                            <p className="text-gray-700">
                                                <strong>Base giuridica:</strong> Consenso (art. 6, par. 1, lett. a del
                                                GDPR)<br/>
                                                <strong>Consenso richiesto:</strong> Sì (tramite banner informativo)
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">4. Come Gestiamo il Tuo
                                        Consenso</h2>
                                    <p className="text-gray-700 mb-4">
                                        Quando visiti il nostro sito per la prima volta, ti viene mostrato un banner
                                        informativo
                                        sui cookie che ti permette di:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Accettare tutti i cookie</li>
                                        <li>Rifiutare i cookie non necessari</li>
                                        <li>Personalizzare le tue preferenze</li>
                                        <li>Ottenere maggiori informazioni</li>
                                    </ul>
                                    <p className="text-gray-700 mt-4">
                                        <strong>Importante:</strong> Puoi modificare le tue preferenze sui cookie in
                                        qualsiasi momento
                                        attraverso le impostazioni del tuo browser o contattandoci.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">5. Come Disabilitare i
                                        Cookie</h2>
                                    <p className="text-gray-700 mb-4">
                                        Puoi controllare e/o eliminare i cookie come desideri. Puoi eliminare tutti i
                                        cookie
                                        già presenti sul tuo computer e puoi impostare la maggior parte dei browser per
                                        impedire che vengano inseriti.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Istruzioni per
                                                Browser</h3>
                                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                                <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie
                                                    e altri dati dei siti
                                                </li>
                                                <li><strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie e
                                                    dati dei siti web
                                                </li>
                                                <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati siti
                                                    web
                                                </li>
                                                <li><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni sito
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Disabilitare Google
                                                Analytics</h3>
                                            <p className="text-gray-700">
                                                Puoi impedire a Google Analytics di raccogliere dati installando il
                                                <a href="https://tools.google.com/dlpage/gaoptout"
                                                   className="text-[#1e3a8a] hover:text-[#10b981] underline"
                                                   target="_blank" rel="noopener noreferrer">
                                                    componente aggiuntivo per la disattivazione di Google Analytics
                                                </a>.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-4">
                                        <p className="text-yellow-800 text-sm">
                                            <strong>Attenzione:</strong> La disabilitazione di alcuni cookie potrebbe
                                            compromettere
                                            il funzionamento di alcune parti del sito web.
                                        </p>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">6. Cookie di Terze Parti</h2>
                                    <p className="text-gray-700 mb-4">
                                        Il nostro sito web può contenere collegamenti ad altri siti web di terze parti.
                                        Non siamo responsabili per le pratiche di privacy o il contenuto di questi siti
                                        esterni.
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Servizi di Terze
                                                Parti Utilizzati</h3>
                                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                                <li><strong>Google Analytics</strong> - Analisi del traffico web</li>
                                                <li><strong>Google Maps</strong> - Mappe e localizzazione (se presente)
                                                </li>
                                                <li><strong>Social Media</strong> - Plugin per condivisione social</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">7. Aggiornamenti a Questa
                                        Policy</h2>
                                    <p className="text-gray-700">
                                        Potremmo aggiornare questa Cookie Policy di tanto in tanto per riflettere
                                        cambiamenti nei nostri servizi o nella legislazione applicabile.
                                        Ti consigliamo di rivedere periodicamente questa pagina.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">8. I Tuoi Diritti</h2>
                                    <p className="text-gray-700 mb-4">
                                        In relazione al trattamento dei tuoi dati personali attraverso i cookie, hai i
                                        seguenti diritti:
                                    </p>
                                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                        <li>Diritto di accesso ai dati raccolti tramite cookie</li>
                                        <li>Diritto di rettifica dei dati inesatti</li>
                                        <li>Diritto di cancellazione dei dati</li>
                                        <li>Diritto di limitazione del trattamento</li>
                                        <li>Diritto di opposizione al trattamento</li>
                                        <li>Diritto alla portabilità dei dati</li>
                                        <li>Diritto di revocare il consenso in qualsiasi momento</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">9. Contatti</h2>
                                    <p className="text-gray-700 mb-4">
                                        Per domande riguardanti questa Cookie Policy o per esercitare i tuoi diritti,
                                        puoi contattarci:
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <p className="text-gray-700">
                                            <strong>Titolare del Trattamento:</strong> Riparazioni 24<br/>
                                            <strong>Email:</strong> info@riparazioni24.eu<br/>
                                            <strong>Telefono:</strong> +39 320 550 9145<br/>
                                            <strong>Oggetto:</strong> "Cookie Policy - [Tua Richiesta]"
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

export default CookiePolicy;