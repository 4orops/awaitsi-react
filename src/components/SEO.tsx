import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  /** When provided, also emitted as <link rel="canonical">. */
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  /** Page-specific JSON-LD (e.g. Article), emitted alongside the Organization schema. */
  structuredData?: Record<string, unknown>;
}

const DEFAULT_URL = "https://www.awaitsi.co.za";
const DEFAULT_OG_IMAGE = "https://awaitsi.co.za/Artboard1.png";

const SEO: React.FC<SEOProps> = ({
  title = "Awaitsi (Pty) Ltd | Practical Digital Solutions for Growing Businesses",
  description = "Awaitsi (Pty) Ltd is a South African technology company building practical digital solutions, web applications, and websites for growing businesses and communities.",
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  keywords = "Awaitsi, South Africa tech company, web development SA, custom web applications, SME technology, website maintenance, technical support, digital transformation",
  structuredData,
}) => {
  const structuredDataJson = structuredData ? JSON.stringify(structuredData) : '';

  useEffect(() => {
    const pageUrl = canonical ?? DEFAULT_URL;
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
    updateOgMeta('og:url', pageUrl);
    updateOgMeta('og:type', ogType);
    updateOgMeta('og:image', ogImage);
    updateOgMeta('og:site_name', 'Awaitsi (Pty) Ltd');
    updateOgMeta('og:locale', 'en_ZA');
    updateOgMeta('twitter:title', fullTitle);
    updateOgMeta('twitter:description', description);
    updateOgMeta('twitter:url', pageUrl);
    updateOgMeta('twitter:image', ogImage);

    // Canonical link — only for pages that declare one; cleared otherwise so
    // a previous page's canonical never leaks across client-side navigation.
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    } else if (canonicalLink) {
      canonicalLink.remove();
    }

    // Page-specific structured data (e.g. Article)
    let pageScript = document.querySelector('#awaitsi-page-jsonld') as HTMLScriptElement | null;
    if (structuredDataJson) {
      if (!pageScript) {
        pageScript = document.createElement('script');
        pageScript.id = 'awaitsi-page-jsonld';
        pageScript.type = 'application/ld+json';
        document.head.appendChild(pageScript);
      }
      pageScript.textContent = structuredDataJson;
    } else if (pageScript) {
      pageScript.remove();
    }

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
  }, [title, description, canonical, ogType, ogImage, keywords, structuredDataJson]);

  return null;
};

export default SEO;
