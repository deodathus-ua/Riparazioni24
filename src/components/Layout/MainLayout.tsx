import React from 'react';
import {Helmet} from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from '@/components/CookieBanner';

interface MainLayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogType?: string;
    structuredData?: object;
}

const MainLayout = ({
                        children,
                        title = "Riparazione Elettrodomestici Milano | Assistenza Rapida e Professionale",
                        description = "Servizio di riparazione elettrodomestici a Milano e provincia. Interventi rapidi su lavatrici, asciugatrici, lavastoviglie, frigoriferi, congelatori, piani cottura e forni. Chiamaci ora!",
                        keywords = "riparazione elettrodomestici Milano, assistenza lavatrice Milano, riparazione frigorifero Milano, tecnico elettrodomestici Milano",
                        canonical,
                        ogType = "website",
                        structuredData
                    }: MainLayoutProps) => {
    const currentUrl = canonical || window.location.href;

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <link rel="canonical" href={currentUrl}/>

                {/* DNS prefetching */}
                <link rel="dns-prefetch" href="//www.googletagmanager.com"/>
                <link rel="preconnect" href="//www.googletagmanager.com"/>

                {/* Open Graph / Facebook */}
                <meta property="og:type" content={ogType}/>
                <meta property="og:url" content={currentUrl}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:image" content="/images/og-image.jpg"/>
                <meta property="og:locale" content="it_IT"/>
                <meta property="og:site_name" content="Riparazioni 24 Milano"/>

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={currentUrl}/>
                <meta property="twitter:title" content={title}/>
                <meta property="twitter:description" content={description}/>
                <meta property="twitter:image" content="/images/og-image.jpg"/>

                {/* Additional SEO meta tags */}
                <meta name="author" content="Riparazioni 24 Milano"/>
                <meta name="theme-color" content="#1e3a8a"/>
                <meta name="msapplication-TileColor" content="#1e3a8a"/>

                {/* Structured Data */}
                {structuredData && (
                    <script type="application/ld+json">
                        {JSON.stringify(structuredData)}
                    </script>
                )}
            </Helmet>

            <div className="flex flex-col min-h-screen">
                <Header/>
                <main className="flex-grow">{children}</main>
                <Footer/>
                <CookieBanner/>

          {/* WhatsApp Button - Fixed positioning adjusted to avoid overlap */}
          <a
              href="https://wa.me/393205509145?text=Ciao,%20ho%20bisogno%20di%20assistenza%20per%20il%20mio%20elettrodomestico"
              target="_blank"
              rel="noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors z-50"
              aria-label="Contattaci su WhatsApp"
          >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                   className="w-8 h-8">
                  <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
              </svg>
          </a>
      </div>
    </>
  );
};

export default MainLayout;
