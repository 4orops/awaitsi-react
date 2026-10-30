import React from 'react';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ApproachPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Our Approach | Awaitsi" 
        description="Discover how we understand, diagnose, design, build, launch, and grow technology solutions for your business."
      />
      <Navigation />
      <main className="pt-24 min-h-screen">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Approach</h1>
          <p className="text-xl text-white/70 max-w-2xl">How we build digital systems that actually work for you.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ApproachPage;
