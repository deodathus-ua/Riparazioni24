
import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '@/components/Layout/MainLayout';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import MapSection from '@/components/Home/MapSection';
import CTASection from '@/components/Home/CTASection';

const Index = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Riparazioni 24 Milano | Riparazione Elettrodomestici Rapida e Garantita</title>
        <meta name="description" content="Servizio di riparazione elettrodomestici a Milano e provincia. Interventi rapidi in giornata su lavatrici, frigoriferi, lavastoviglie e forni. Chiamaci ora!" />
        <meta name="keywords" content="riparazione elettrodomestici Milano, assistenza lavatrice Milano, riparazione frigorifero Milano, tecnico elettrodomestici Milano, riparazioni 24" />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <MapSection />
      <CTASection />

      {/* Schema.org LocalBusiness markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Riparazioni 24 Milano",
          "image": "/images/logo.png",
          "telephone": "+393331234567",
          "email": "info@riparazioni24.it",
          "description": "Riparazione elettrodomestici rapida e garantita a domicilio in tutta Milano. Costo uscita €40 anche senza riparazione.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Esempio 123",
            "addressLocality": "Milano",
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
          "servesCuisine": "Riparazione Elettrodomestici",
          "areaServed": ["Milano", "Sesto San Giovanni", "Cinisello Balsamo", "Rho", "Rozzano"]
        }
      `}} />
    </MainLayout>
  );
};

export default Index;
