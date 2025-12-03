import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

interface Stat {
  number: string;
  label: string;
}

interface AppPageProps {
  services: Service[];
  stats: Stat[];
}

const AppPage: React.FC<AppPageProps> = ({ services, stats }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <Hero />
      <Stats stats={stats} />
      <About />
      <Services services={services} />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppPage;
