
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import { ArrowLeft, Calendar, User, Tag, ArrowRight, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const BlogArticle = () => {
  const { slug } = useParams<{slug: string}>();
  
  // In a real application, you would fetch the article based on the slug
  // This is just a mock article for demonstration
  const article = {
    title: "Frigorifero che non raffredda a Milano: cause e soluzioni",
    date: "12 Maggio 2023",
    author: "Marco Rossi, Tecnico Specializzato",
    category: "Frigoriferi",
    image: "/images/blog/frigorifero-non-raffredda.jpg",
    content: `
      <p class="mb-4">Hai aperto il frigorifero e hai notato che non raffredda come dovrebbe? Questo è uno dei problemi più comuni che riscontriamo nei nostri interventi di riparazione frigoriferi a Milano e provincia.</p>
      
      <p class="mb-4">In questo articolo, analizzeremo le cause più frequenti di un frigorifero che non raffredda adeguatamente e ti daremo alcuni consigli su cosa puoi fare prima di chiamare un tecnico.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Cause principali di un frigorifero che non raffredda</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Problemi al compressore</h3>
      <p class="mb-4">Il compressore è il "cuore" del frigorifero, responsabile della circolazione del refrigerante che mantiene bassa la temperatura. Se noti che il frigorifero è completamente silenzioso e non senti il classico ronzio del compressore, potrebbe esserci un problema elettrico o il compressore stesso potrebbe essere guasto.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Perdita di gas refrigerante</h3>
      <p class="mb-4">Il gas refrigerante è essenziale per il funzionamento del frigorifero. Se c'è una perdita nel sistema di raffreddamento, il frigorifero non sarà in grado di mantenere la temperatura desiderata. Questo problema richiede l'intervento di un tecnico specializzato con certificazione F-GAS come quelli del nostro team di Milano.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">3. Problemi alle ventole</h3>
      <p class="mb-4">Nei frigoriferi moderni con sistema no-frost, le ventole sono essenziali per distribuire l'aria fredda. Se una ventola è bloccata o non funziona, alcune zone del frigorifero potrebbero non raffreddarsi correttamente.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">4. Termostato difettoso</h3>
      <p class="mb-4">Il termostato regola la temperatura del frigorifero. Se è guasto, potrebbe non attivare il sistema di raffreddamento quando necessario o non spegnerlo quando la temperatura è sufficientemente bassa.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">5. Guarnizioni della porta usurate</h3>
      <p class="mb-4">Se le guarnizioni della porta non sigillano correttamente, l'aria fredda può fuoriuscire e l'aria calda può entrare, compromettendo l'efficienza del frigorifero.</p>
      
      <div class="bg-blue-50 border-l-4 border-brand-blue p-4 my-8">
        <p class="font-semibold">Consiglio del tecnico:</p>
        <p>Controlla le guarnizioni inserendo un foglio di carta tra la porta e il frigorifero chiuso. Se riesci a estrarlo facilmente senza resistenza, le guarnizioni potrebbero essere da sostituire.</p>
      </div>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Cosa puoi fare prima di chiamare un tecnico a Milano</h2>
      
      <ol class="list-decimal pl-6 space-y-4 mb-6">
        <li>
          <span class="font-semibold">Controlla l'alimentazione:</span> Assicurati che il frigorifero sia correttamente collegato alla presa elettrica e che non ci siano problemi con l'impianto elettrico.
        </li>
        <li>
          <span class="font-semibold">Verifica le impostazioni:</span> Controlla che il termostato sia impostato su una temperatura adeguata. A volte il problema potrebbe essere semplicemente un'impostazione errata.
        </li>
        <li>
          <span class="font-semibold">Pulisci il condensatore:</span> La polvere accumulata sul condensatore (la griglia nera sul retro o sotto il frigorifero) può causare problemi di raffreddamento. Scollegare il frigorifero e pulire il condensatore con un aspirapolvere.
        </li>
        <li>
          <span class="font-semibold">Controlla la disposizione degli alimenti:</span> Un frigorifero troppo pieno o con alimenti che bloccano le bocchette dell'aria può avere difficoltà a raffreddare uniformemente.
        </li>
        <li>
          <span class="font-semibold">Verifica le guarnizioni:</span> Come menzionato prima, controlla che le guarnizioni della porta sigillino correttamente.
        </li>
      </ol>
      
      <p class="mb-4">Se dopo questi controlli il frigorifero continua a non raffreddare adeguatamente, è il momento di chiamare un tecnico specializzato.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Quando è necessario chiamare un tecnico a Milano</h2>
      
      <p class="mb-4">È consigliabile contattare un tecnico specializzato quando:</p>
      
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Il frigorifero non produce assolutamente freddo</li>
        <li>Si sentono rumori insoliti</li>
        <li>C'è presenza di acqua sotto il frigorifero</li>
        <li>Il compressore si accende e spegne frequentemente</li>
        <li>Hai notato un incremento significativo nel consumo elettrico</li>
      </ul>
      
      <p class="mb-4">I nostri tecnici a Milano sono disponibili per interventi rapidi e offrono un servizio di diagnosi accurata per individuare e risolvere qualsiasi problema al tuo frigorifero.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusione</h2>
      
      <p class="mb-4">Un frigorifero che non raffredda è un problema che richiede attenzione immediata per evitare il deterioramento degli alimenti e possibili danni maggiori all'elettrodomestico. Se vivi a Milano o provincia e hai bisogno di assistenza per il tuo frigorifero, non esitare a contattarci per un intervento rapido e professionale.</p>
      
      <p class="mb-4">Il nostro team di tecnici certificati è pronto ad aiutarti con qualsiasi problema relativo al tuo frigorifero o ad altri elettrodomestici.</p>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8 border border-gray-200">
        <h3 class="text-xl font-semibold mb-3">Hai bisogno di aiuto con il tuo frigorifero?</h3>
        <p class="mb-4">Siamo specialisti nella riparazione di frigoriferi di tutte le marche a Milano e provincia. Contattaci per un preventivo gratuito.</p>
        <div class="flex flex-wrap gap-4">
          <a href="tel:+393331234567" class="btn-primary">Chiama ora: 333 123 4567</a>
          <a href="/contatti" class="bg-white border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 shadow-md">Richiedi assistenza</a>
        </div>
      </div>
    `,
    tags: ["frigorifero", "riparazione", "elettrodomestici", "Milano", "assistenza tecnica"],
    relatedArticles: [
      {
        title: "Manutenzione del frigorifero: consigli per allungarne la vita",
        slug: "manutenzione-frigorifero-consigli-allungare-vita",
        image: "/images/blog/manutenzione-frigo.jpg"
      },
      {
        title: "5 problemi comuni delle lavatrici a Milano: come risolverli",
        slug: "problemi-comuni-lavatrici-milano-soluzioni",
        image: "/images/blog/problemi-lavatrici.jpg"
      },
      {
        title: "Quanto dura un forno elettrico e quando conviene ripararlo",
        slug: "durata-forno-elettrico-quando-riparare",
        image: "/images/blog/durata-forno.jpg"
      }
    ]
  };

  return (
    <MainLayout
      title={`${article.title} | Riparazione Elettrodomestici Milano`}
      description="Scopri perché il tuo frigorifero potrebbe non raffreddare correttamente e cosa puoi fare prima di chiamare un tecnico a Milano."
      keywords="frigorifero non raffredda, problemi frigorifero Milano, riparazione frigorifero, assistenza tecnica elettrodomestici"
    >
      <Helmet>
        <title>{article.title} | Riparazione Elettrodomestici Milano</title>
        <meta name="description" content="Scopri perché il tuo frigorifero potrebbe non raffreddare correttamente e cosa puoi fare prima di chiamare un tecnico a Milano." />
        <meta name="keywords" content="frigorifero non raffredda, problemi frigorifero Milano, riparazione frigorifero, assistenza tecnica elettrodomestici" />
      </Helmet>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-brand-blue">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-brand-blue">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{article.title}</span>
          </div>

          {/* Back to blog */}
          <Link to="/blog" className="inline-flex items-center text-brand-blue hover:text-brand-lightBlue mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Torna al blog
          </Link>

          {/* Article Header */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 gap-4">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              {article.date}
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-1" />
              {article.category}
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-lg overflow-hidden mb-8">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <Link 
                  key={index}
                  to={`/blog/tag/${tag}`}
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Share */}
          <div className="border-t border-b border-gray-200 py-6 my-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold">Condividi:</span>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`} 
                target="_blank"
                rel="noreferrer"
                className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`} 
                target="_blank"
                rel="noreferrer"
                className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(window.location.href)}`} 
                className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Articoli Correlati</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {article.relatedArticles.map((related, index) => (
                <Link key={index} to={`/blog/${related.slug}`} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold group-hover:text-brand-blue transition-colors">{related.title}</h4>
                      <div className="flex items-center text-brand-blue mt-3">
                        <span className="text-sm">Leggi l'articolo</span>
                        <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogArticle;
