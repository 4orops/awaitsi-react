import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services, { Service } from '../components/Services';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';
import BlogSection from '../components/BlogSection';
import JourneyModal from '../components/JourneyModal';
import WhoWeAreSection from '../components/WhoWeAreSection';
import WhyWeExistSection from '../components/WhyWeExistSection';
import ProblemsWeSolveSection from '../components/ProblemsWeSolveSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ConsultationModal from '../components/ConsultationModal';
import SEO from '../components/SEO';

interface AppPageProps {
  services: Service[];
}

const AppPage: React.FC<AppPageProps> = ({ services }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white selection:bg-awaitsi-green selection:text-awaitsi-gray-950 font-opensans">
      <SEO
        title="Awaitsi (Pty) Ltd | Building Technology with Heart for Generations to Come"
        description="South African technology company building practical digital solutions, websites, custom web applications, and maintenance services for growing businesses."
      />

      <Navigation onQuote={() => setIsConsultationOpen(true)} />

      <main id="main-content">
        <Hero onQuote={() => setIsConsultationOpen(true)} />
        <WhoWeAreSection />
        <WhyWeExistSection />
        <ProblemsWeSolveSection />
        <WhyChooseUsSection />
        <Services services={services} onQuote={() => setIsConsultationOpen(true)} />
        <CTA onQuote={() => setIsConsultationOpen(true)} />
        <Contact />
      </main>

      <Footer />

      <JourneyModal isOpen={false} onClose={() => {}} />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
};

export default AppPage;
