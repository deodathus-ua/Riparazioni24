
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import { MessageSquare } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title = 'Riparazione Elettrodomestici Milano | Assistenza Rapida e Professionale',
  description = 'Servizio di riparazione elettrodomestici a Milano e provincia. Interventi rapidi su lavatrici, frigoriferi, lavastoviglie e forni. Chiamaci ora!',
  keywords = 'riparazione elettrodomestici Milano, assistenza lavatrice Milano, riparazione frigorifero Milano, tecnico elettrodomestici Milano'
}) => {
  const canonicalUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/images/og-image.jpg" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* WhatsApp Button - Fixed positioning adjusted to avoid overlap */}
        <a 
          href="https://wa.me/393331234567?text=Ciao,%20ho%20bisogno%20di%20assistenza%20per%20il%20mio%20elettrodomestico" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors z-50"
          aria-label="Contattaci su WhatsApp"
        >
          <MessageSquare size={28} />
        </a>
      </div>
    </>
  );
};

export default MainLayout;
