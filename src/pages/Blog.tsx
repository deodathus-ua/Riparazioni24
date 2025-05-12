
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import BlogCard from '@/components/BlogCard';

const blogPosts = [
  {
    id: "1",
    title: "Frigorifero che non raffredda a Milano: cause e soluzioni",
    excerpt: "Scopri perché il tuo frigorifero potrebbe non raffreddare correttamente e cosa puoi fare prima di chiamare un tecnico a Milano.",
    imageUrl: "/images/blog/frigorifero-non-raffredda.jpg",
    date: "12 Maggio 2023",
    category: "Frigoriferi",
    slug: "frigorifero-non-raffredda-milano-cause-soluzioni"
  },
  {
    id: "2",
    title: "Come scegliere una lavatrice che duri nel tempo: consigli dal tecnico",
    excerpt: "Guida alla scelta di una lavatrice di qualità che non ti abbandonerà dopo pochi anni. Caratteristiche da cercare e marche consigliate.",
    imageUrl: "/images/blog/scegliere-lavatrice.jpg",
    date: "28 Aprile 2023",
    category: "Lavatrici",
    slug: "scegliere-lavatrice-duratura-consigli-tecnico"
  },
  {
    id: "3",
    title: "Lavastoviglie che perde acqua: cosa fare prima di chiamare l'assistenza",
    excerpt: "Guida pratica per identificare da dove proviene la perdita d'acqua della tua lavastoviglie e quando è necessario chiamare un tecnico a Milano.",
    imageUrl: "/images/blog/lavastoviglie-perde.jpg",
    date: "15 Aprile 2023",
    category: "Lavastoviglie",
    slug: "lavastoviglie-perde-acqua-milano-cosa-fare"
  },
  {
    id: "4",
    title: "Quanto dura un forno elettrico e quando conviene ripararlo",
    excerpt: "Analisi della vita media di un forno elettrico moderno e indicazioni su quando vale la pena ripararlo invece di sostituirlo.",
    imageUrl: "/images/blog/durata-forno.jpg",
    date: "2 Aprile 2023",
    category: "Forni",
    slug: "durata-forno-elettrico-quando-riparare"
  },
  {
    id: "5",
    title: "5 problemi comuni delle lavatrici a Milano: come risolverli",
    excerpt: "Guida pratica ai problemi più frequenti riscontrati nelle lavatrici a Milano, con consigli su come risolverli e quando chiamare un tecnico.",
    imageUrl: "/images/blog/problemi-lavatrici.jpg",
    date: "20 Marzo 2023",
    category: "Lavatrici",
    slug: "problemi-comuni-lavatrici-milano-soluzioni"
  },
  {
    id: "6",
    title: "Manutenzione del frigorifero: consigli per allungarne la vita",
    excerpt: "Scopri come prenderti cura del tuo frigorifero per evitare guasti e risparmiare sulla bolletta elettrica con questi semplici consigli.",
    imageUrl: "/images/blog/manutenzione-frigo.jpg",
    date: "8 Marzo 2023",
    category: "Frigoriferi",
    slug: "manutenzione-frigorifero-consigli-allungare-vita"
  }
];

const Blog = () => {
  return (
    <MainLayout
      title="Blog | Riparazione Elettrodomestici Milano"
      description="Consigli, guide e informazioni sulla manutenzione e riparazione dei tuoi elettrodomestici. Scopri i nostri articoli redatti da esperti del settore."
      keywords="blog riparazione elettrodomestici, consigli manutenzione elettrodomestici, problemi elettrodomestici milano"
    >
      <Helmet>
        <title>Blog | Riparazione Elettrodomestici Milano</title>
        <meta name="description" content="Consigli, guide e informazioni sulla manutenzione e riparazione dei tuoi elettrodomestici. Scopri i nostri articoli redatti da esperti del settore." />
        <meta name="keywords" content="blog riparazione elettrodomestici, consigli manutenzione elettrodomestici, problemi elettrodomestici milano" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-gray-100">
              Consigli, guide e informazioni sulla manutenzione e riparazione dei tuoi elettrodomestici.
              Articoli redatti dai nostri tecnici esperti.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          {/* Categories */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="bg-brand-blue text-white px-4 py-2 rounded-full">Tutti</a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors">Frigoriferi</a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors">Lavatrici</a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors">Lavastoviglie</a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors">Forni</a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors">Consigli</a>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                date={post.date}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex">
              <a href="#" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-l hover:bg-gray-200">
                &laquo; Precedente
              </a>
              <a href="#" className="px-4 py-2 bg-brand-blue text-white">
                1
              </a>
              <a href="#" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200">
                2
              </a>
              <a href="#" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200">
                3
              </a>
              <a href="#" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-r hover:bg-gray-200">
                Successivo &raquo;
              </a>
            </nav>
          </div>

        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Resta Aggiornato</h2>
            <p className="text-lg text-gray-600 mb-8">
              Iscriviti alla nostra newsletter per ricevere consigli utili sulla manutenzione
              dei tuoi elettrodomestici e offerte esclusive.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                required
              />
              <button 
                type="submit" 
                className="btn-primary whitespace-nowrap"
              >
                Iscriviti Ora
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Non invieremo spam. Puoi cancellare l'iscrizione in qualsiasi momento.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
