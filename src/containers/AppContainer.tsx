import React from 'react';
import AppPage from '../pages/AppPage';
import { Code, Smartphone, Database, Sparkles } from 'lucide-react';

const AppContainer: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom, mobile-first websites designed to elevate your business online.",
      price: "From R12,000"
    },
    
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Cross-platform Android & iOS apps tailored for African markets.",
      price: "From R50,000"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "CRM Solutions",
      description: "Custom systems that simplify workflows and grow your business.",
      price: "From R40,000"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Integration",
      description: "Smart automation, chatbots, and analytics to optimize operations.",
      price: "From R25,000"
    }
  ];

  const stats = [
    { number: "2.6M", label: "SMEs in South Africa" },
    { number: "R182B", label: "IT Market by 2028" },
    { number: "5 Years", label: "Growth Roadmap" }
  ];

  return (
    <AppPage
      services={services}
      stats={stats}
    />
  );
};

export default AppContainer;
