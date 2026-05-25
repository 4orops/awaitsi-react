import React from 'react';
import { Target, Lightbulb, Zap, Search, PhoneCall, CheckCircle2, XCircle, Users, Shield, Smartphone, LayoutDashboard, Globe, Sparkles, Heart } from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  benefits: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  perfectFor: string[];
  beforeAfter: {
    before: string[];
    after: string[];
  };
  realExample: {
    icon: string;
    text: string;
  };
  cta: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'website',
    title: "Web Development",
    subtitle: "Build a Website That Actually Brings You Customers",
    intro: "Most South African businesses have websites that look okay — but don’t generate leads or sales. At Awaitsi, we build fast, mobile-first websites designed for real people — your customers.",
    benefits: [
      { icon: <Search className="w-5 h-5" />, title: "Get Found on Google", description: "Optimization for local customers searching for your services." },
      { icon: <Target className="w-5 h-5" />, title: "High Conversion", description: "Turn visitors into paying clients with strategic design." },
      { icon: <Zap className="w-5 h-5" />, title: "Lightning Fast", description: "Works smoothly even on slow South African internet connections." }
    ],
    perfectFor: [
      "Don’t have a website yet",
      "Have an outdated or slow website",
      "Want more calls, bookings, or sales"
    ],
    beforeAfter: {
      before: [
        "Customers can’t find you online",
        "Website looks outdated",
        "No inquiries or leads"
      ],
      after: [
        "Professional online presence",
        "More visibility in your area",
        "Consistent leads and enquiries"
      ]
    },
    realExample: {
      icon: "🇿🇦",
      text: "A local salon in Bloemfontein can go from relying only on walk-ins → to getting daily bookings through their website."
    },
    cta: "Request a Quote"
  },
  {
    slug: 'system',
    title: "Custom CRM Systems",
    subtitle: "Stop Losing Customers — Manage Your Business Smarter",
    intro: "Many SMEs in South Africa still use WhatsApp, notebooks, or spreadsheets to manage customers. That leads to missed messages, lost clients, and confusion.",
    benefits: [
      { icon: <Users className="w-5 h-5" />, title: "Track Everything", description: "Keep all customer interactions and history in one secure place." },
      { icon: <Shield className="w-5 h-5" />, title: "Never Miss a Lead", description: "Automated tracking ensures every enquiry is followed up." },
      { icon: <Zap className="w-5 h-5" />, title: "Save Time", description: "Automate repetitive daily operations and admin tasks." }
    ],
    perfectFor: [
      "Manage many clients daily",
      "Use WhatsApp for business",
      "Want better organization and growth"
    ],
    beforeAfter: {
      before: [
        "Missed bookings",
        "Disorganized customer info",
        "Time wasted searching messages"
      ],
      after: [
        "All customers in one system",
        "Automated reminders",
        "Smooth, professional workflow"
      ]
    },
    realExample: {
      icon: "🇿🇦",
      text: "A transport business can track bookings, drivers, and schedules in one system instead of juggling calls and messages."
    },
    cta: "Talk to Us About a CRM"
  },
  {
    slug: 'app',
    title: "Mobile Apps",
    subtitle: "Put Your Business in Your Customer’s Pocket",
    intro: "South Africans spend hours on their phones every day — your business should be there too. We build mobile apps that make it easy for customers to book, buy, or interact.",
    benefits: [
      { icon: <Smartphone className="w-5 h-5" />, title: "One-Tap Access", description: "Easier bookings and orders for your loyal customers." },
      { icon: <Heart className="w-5 h-5" />, title: "Better Experience", description: "A smoother, faster way for clients to interact with your brand." },
      { icon: <Zap className="w-5 h-5" />, title: "Stand Out", description: "A stronger presence that separates you from local competitors." }
    ],
    perfectFor: [
      "Want repeat customers",
      "Offer bookings or services",
      "Want to stand out from competitors"
    ],
    beforeAfter: {
      before: [
        "Customers must call/message manually",
        "Slow response times",
        "Lost opportunities"
      ],
      after: [
        "One-tap booking or ordering",
        "Faster service",
        "More loyal customers"
      ]
    },
    realExample: {
      icon: "🇿🇦",
      text: "A local shuttle or delivery business can let customers book rides or orders directly through an app."
    },
    cta: "Start Your App Project"
  },
  {
    slug: 'ai',
    title: "AI Integration",
    subtitle: "Work Smarter with Automation & AI",
    intro: "AI is no longer just for big companies — South African SMEs can use it to save time and grow faster. We help you integrate tools like chatbots and automation.",
    benefits: [
      { icon: <PhoneCall className="w-5 h-5" />, title: "24/7 Support", description: "Respond to customer inquiries instantly, even after hours." },
      { icon: <Lightbulb className="w-5 h-5" />, title: "Automate Tasks", description: "Let AI handle repetitive data entry and scheduling." },
      { icon: <Zap className="w-5 h-5" />, title: "Scale Faster", description: "Grow your business without necessarily hiring more staff." }
    ],
    perfectFor: [
      "Get many customer inquiries",
      "Want to save time",
      "Want to scale efficiently"
    ],
    beforeAfter: {
      before: [
        "Slow responses to customers",
        "Manual, repetitive work",
        "Missed opportunities"
      ],
      after: [
        "Instant replies (24/7)",
        "Automated workflows",
        "More efficient operations"
      ]
    },
    realExample: {
      icon: "🇿🇦",
      text: "A small business can use a WhatsApp chatbot to answer FAQs and take bookings automatically."
    },
    cta: "Explore AI Solutions"
  }
];
