import React from 'react';
import AppPage from '../pages/AppPage';

const AppContainer: React.FC = () => {
  const services = [
    {
      slug: 'website',
      title: "Web Development",
      description: "Custom, mobile-first websites designed to elevate your business online in weeks.",
      price: "R5,000"
    },
    {
      slug: 'system',
      title: "Custom CRM Systems",
      description: "Automate your workflows and lead management with a system built for your needs.",
      price: "R15,000"
    },
    {
      slug: 'app',
      title: "Mobile Apps",
      description: "Powerful cross-platform Android & iOS apps tailored for the South African market.",
      price: "R25,000"
    },
    {
      slug: 'ai',
      title: "AI Integration",
      description: "Smart automation, chatbots, and AI tools to give your SME a competitive edge.",
      price: "R10,000"
    }
  ];

  return (
    <AppPage
      services={services}
    />
  );
};

export default AppContainer;
