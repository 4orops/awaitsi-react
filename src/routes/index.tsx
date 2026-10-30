import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ScrollToTop from '../components/ScrollToTop';

// Core Pages
const AsyncHome = React.lazy(() => import('../pages/HomePage'));
const AsyncAbout = React.lazy(() => import('../pages/AboutPage'));

// Pillar Pages
const AsyncDigitalSystems = React.lazy(() => import('../pages/DigitalSystemsPage'));
const AsyncBusinessSystems = React.lazy(() => import('../pages/BusinessSystemsPage'));
const AsyncDataIntelligence = React.lazy(() => import('../pages/DataIntelligencePage'));
const AsyncAIAutomation = React.lazy(() => import('../pages/AIAutomationPage'));
const AsyncDigitalTransformation = React.lazy(() => import('../pages/DigitalTransformationPage'));

// Solutions / Products
const AsyncBusinessCloud = React.lazy(() => import('../pages/BusinessCloudPage'));

// Work & Approach
const AsyncApproach = React.lazy(() => import('../pages/ApproachPage'));
const AsyncCaseStudies = React.lazy(() => import('../pages/CaseStudiesPage'));
const AsyncKingspath = React.lazy(() => import('../pages/case-studies/KingspathCaseStudy'));
const AsyncLE2 = React.lazy(() => import('../pages/case-studies/LE2CaseStudy'));

// Discovery & Contact
const AsyncDigitalAssessment = React.lazy(() => import('../pages/DigitalAssessmentPage'));
const AsyncContact = React.lazy(() => import('../pages/ContactPage'));

// Insights / Legacy (Keep Insights, privacy, terms)
const AsyncInsights = React.lazy(() => import('../pages/InsightsPage'));
const AsyncPrivacy = React.lazy(() => import('../pages/PrivacyPolicyPage'));
const AsyncTerms = React.lazy(() => import('../pages/TermsPage'));
const AsyncNotFound = React.lazy(() => import('../pages/NotFoundPage'));

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-awaitsi-gray-950 gap-6" role="status" aria-live="polite">
    <div className="flex gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-awaitsi-green animate-bounce [animation-delay:0ms]" />
      <span className="w-2.5 h-2.5 rounded-full bg-awaitsi-green animate-bounce [animation-delay:150ms]" />
      <span className="w-2.5 h-2.5 rounded-full bg-awaitsi-green animate-bounce [animation-delay:300ms]" />
    </div>
    <span className="text-white/30 font-black text-[10px] uppercase tracking-[0.25em]">Loading</span>
  </div>
);

const Suspense = ({ children }: { children: React.ReactNode }) => (
  <React.Suspense fallback={<LoadingFallback />}>
    <ScrollToTop />
    {children}
  </React.Suspense>
);

const router = createBrowserRouter([
  // ── Core Site Pages ──
  {
    path: '/',
    element: <Suspense><AsyncHome /></Suspense>,
  },
  {
    path: '/about',
    element: <Suspense><AsyncAbout /></Suspense>,
  },

  // ── Service Pillars ──
  {
    path: '/services/digital-systems',
    element: <Suspense><AsyncDigitalSystems /></Suspense>,
  },
  {
    path: '/services/business-systems',
    element: <Suspense><AsyncBusinessSystems /></Suspense>,
  },
  {
    path: '/services/data-intelligence',
    element: <Suspense><AsyncDataIntelligence /></Suspense>,
  },
  {
    path: '/services/ai-automation',
    element: <Suspense><AsyncAIAutomation /></Suspense>,
  },
  {
    path: '/services/digital-transformation',
    element: <Suspense><AsyncDigitalTransformation /></Suspense>,
  },

  // ── Products ──
  {
    path: '/business-cloud',
    element: <Suspense><AsyncBusinessCloud /></Suspense>,
  },

  // ── Approach & Work ──
  {
    path: '/approach',
    element: <Suspense><AsyncApproach /></Suspense>,
  },
  {
    path: '/work',
    element: <Suspense><AsyncCaseStudies /></Suspense>,
  },
  {
    path: '/work/kingspath-transport',
    element: <Suspense><AsyncKingspath /></Suspense>,
  },
  {
    path: '/work/le2-memorials',
    element: <Suspense><AsyncLE2 /></Suspense>,
  },

  // ── Lead Gen ──
  {
    path: '/digital-assessment',
    element: <Suspense><AsyncDigitalAssessment /></Suspense>,
  },
  {
    path: '/contact',
    element: <Suspense><AsyncContact /></Suspense>,
  },

  // ── Insights ──
  {
    path: '/insights',
    element: <Suspense><AsyncInsights /></Suspense>,
  },
  {
    path: '/insights/*',
    element: <Suspense><AsyncInsights /></Suspense>,
  },

  // ── Legal ──
  {
    path: '/privacy',
    element: <Suspense><AsyncPrivacy /></Suspense>,
  },
  {
    path: '/terms',
    element: <Suspense><AsyncTerms /></Suspense>,
  },

  // ── 404 ──
  {
    path: '*',
    element: <Suspense><AsyncNotFound /></Suspense>,
  },
]);

export default router;
