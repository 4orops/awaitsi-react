import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

import About from '../components/About';
import Services, { Service } from '../components/Services';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import BlogSection from '../components/BlogSection';
import JourneyModal from '../components/JourneyModal';
import LearnMoreModal from '../components/LearnMoreModal';

interface AppPageProps {
  services: Service[];

}

const AppPage: React.FC<AppPageProps> = ({ services }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white">
      <Navigation onQuote={() => setIsQuoteModalOpen(true)} />
      <Hero 
        onQuote={() => setIsQuoteModalOpen(true)} 
        onLearnMore={() => setIsLearnMoreOpen(true)} 
      />

      <About />
      <Services services={services} onQuote={() => setIsQuoteModalOpen(true)} />
      <Portfolio />
      <WhyChooseUs />
      <BlogSection />
      <CTA onQuote={() => setIsQuoteModalOpen(true)} />
      <Contact />
      <Footer />

      <JourneyModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <LearnMoreModal isOpen={isLearnMoreOpen} onClose={() => setIsLearnMoreOpen(false)} />
    </div>
  );
};

export default AppPage;
