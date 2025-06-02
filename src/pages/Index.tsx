import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import MapSection from '@/components/Home/MapSection';
import CTASection from '@/components/Home/CTASection';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Riparazioni 24 Milano | Riparazione Elettrodomestici Rapida e Garantita</title>
          <meta name="description"
                content="Servizio di riparazione elettrodomestici a Milano e provincia. Interventi rapidi in giornata su lavatrici, asciugatrici, lavastoviglie, frigoriferi, congelatori, piani cottura e forni. Chiamaci ora!"/>
        <meta name="keywords" content="riparazione elettrodomestici Milano, assistenza lavatrice Milano, riparazione frigorifero Milano, tecnico elettrodomestici Milano, riparazioni 24" />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <MapSection />
      <CTASection />
      <FloatingCTA />

      {/* Schema.org LocalBusiness markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Riparazioni 24 Milano",
          "image": "/images/logo.png",
          "telephone": "+393205509145",
          "email": "info@riparazioni24.eu",
          "description": "Riparazione elettrodomestici rapida e garantita a domicilio in tutta Milano e provincia. Interventi su lavatrici, asciugatrici, lavastoviglie, frigoriferi, congelatori, piani cottura e forni.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Milano",
            "addressRegion": "Lombardia",
            "postalCode": "20100",
            "addressCountry": "IT"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.4642,
            "longitude": 9.1900
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "17:00"
            }
          ],
          "priceRange": "€€",
          "serviceType": "Riparazione Elettrodomestici",
          "areaServed": [
            {
              "@type": "City",
              "name": "Milano"
            },
            {
              "@type": "City", 
              "name": "Sesto San Giovanni"
            },
            {
              "@type": "City",
              "name": "Cinisello Balsamo"
            },
            {
              "@type": "City",
              "name": "Rho"
            },
            {
              "@type": "City",
              "name": "Rozzano"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servizi di Riparazione",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Riparazione Lavatrici",
                  "description": "Riparazione e manutenzione lavatrici di tutte le marche"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Riparazione Frigoriferi",
                  "description": "Riparazione e manutenzione frigoriferi e congelatori"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Riparazione Lavastoviglie",
                  "description": "Riparazione e manutenzione lavastoviglie"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Riparazione Forni",
                  "description": "Riparazione forni elettrici e a gas"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Riparazione Asciugatrici",
                  "description": "Riparazione e manutenzione asciugatrici di tutte le marche"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Riparazione Piani Cottura",
                  "description": "Riparazione e manutenzione piani cottura elettrici e a gas"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Riparazione Congelatori",
                  "description": "Riparazione e manutenzione congelatori di grandi e piccole dimensioni"
                }
              }
            ]
          }
        }
      `}} />
    </MainLayout>
  );
};

export default Index;
