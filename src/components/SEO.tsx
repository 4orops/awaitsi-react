import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Awaitsi (Pty) Ltd | Practical Digital Solutions for Growing Businesses",
  description = "Awaitsi (Pty) Ltd is a South African technology company building practical digital solutions, web applications, and websites for growing businesses and communities.",
  canonical = "https://www.awaitsi.co.za",
  keywords = "Awaitsi, South Africa tech company, web development SA, custom web applications, SME technology, website maintenance, technical support, digital transformation",
}) => {
  useEffect(() => {
    // Title
    const fullTitle = title.includes("Awaitsi") ? title : `${title} | Awaitsi (Pty) Ltd`;
    document.title = fullTitle;

    // Meta tags update
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name='${name}']`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateOgMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property='${property}']`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateOgMeta('og:title', fullTitle);
    updateOgMeta('og:description', description);
    updateOgMeta('og:url', canonical);
    updateOgMeta('og:site_name', 'Awaitsi (Pty) Ltd');
    updateOgMeta('og:locale', 'en_ZA');

    // Structured Data JSON-LD
    let script = document.querySelector('#awaitsi-jsonld') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'awaitsi-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Awaitsi (Pty) Ltd",
      "url": "https://www.awaitsi.co.za",
      "logo": "https://www.awaitsi.co.za/logo.png",
      "slogan": "Building Technology with Heart for Generations to Come.",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ZA"
      },
      "sameAs": [
        "https://www.linkedin.com/company/awaitsi"
      ]
    });
  }, [title, description, canonical, keywords]);

  return null;
};

export default SEO;
