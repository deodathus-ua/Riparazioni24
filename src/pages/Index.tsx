
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
        <title>Riparazione Elettrodomestici Milano | Assistenza Rapida e Professionale</title>
        <meta name="description" content="Servizio di riparazione elettrodomestici a Milano e provincia. Interventi rapidi su lavatrici, frigoriferi, lavastoviglie e forni. Chiamaci ora!" />
        <meta name="keywords" content="riparazione elettrodomestici Milano, assistenza lavatrice Milano, riparazione frigorifero Milano, tecnico elettrodomestici Milano" />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <MapSection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
