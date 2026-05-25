import { createBrowserRouter } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import React from 'react';

const AsyncSalon = React.lazy(() => import('../projects/salon/SalonLayout'));
const AsyncRealEstate = React.lazy(() => import('../projects/real-estate/RealEstateLayout'));
const AsyncAi = React.lazy(() => import('../projects/ai/AiLayout'));
const AsyncCrm = React.lazy(() => import('../projects/crm/CrmLayout'));
const AsyncMobile = React.lazy(() => import('../projects/mobile/MobileLayout'));
const AsyncAutomation = React.lazy(() => import('../projects/automation/AutomationLayout'));
const AsyncComingSoon = React.lazy(() => import('../pages/ComingSoonPage'));
const AsyncPrivacy = React.lazy(() => import('../pages/PrivacyPolicyPage'));
const AsyncTerms = React.lazy(() => import('../pages/TermsPage'));
const AsyncNotFound = React.lazy(() => import('../pages/NotFoundPage'));

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-awaitsi-gray-950 gap-6" role="status" aria-live="polite">
    <div className="flex gap-2">
      <span className="w-2 h-2 rounded-full bg-awaitsi-green animate-bounce [animation-delay:0ms]" />
      <span className="w-2 h-2 rounded-full bg-awaitsi-green animate-bounce [animation-delay:150ms]" />
      <span className="w-2 h-2 rounded-full bg-awaitsi-green animate-bounce [animation-delay:300ms]" />
    </div>
    <span className="text-white/30 font-black text-[10px] uppercase tracking-[0.25em]">Loading</span>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppContainer />,
  },
  {
    path: '/portfolio/salon',
    element: (
      <React.Suspense fallback={<LoadingFallback />}>
        <AsyncSalon />
      </React.Suspense>
    ),
  },
  {
    path: '/portfolio/real-estate',
    element: (
      <React.Suspense fallback={<LoadingFallback />}>
        <AsyncRealEstate />
      </React.Suspense>
    ),
  },
  {
    path: '/portfolio/ai',
    element: (
      <React.Suspense fallback={<LoadingFallback />}>
        <AsyncAi />
      </React.Suspense>
    ),
  },
  {
    path: '/portfolio/crm',
    element: (
      <React.Suspense fallback={<LoadingFallback />}>
        <AsyncCrm />
      </React.Suspense>
    ),
  },
  {
    path: '/portfolio/mobile',
    element: (
      <React.Suspense fallback={<LoadingFallback />}>
        <AsyncMobile />
      </React.Suspense>
    ),
  },
  {
    path: '/portfolio/automation',
    element: (
      <React.Suspense fallback={<LoadingFallback />}>
        <AsyncAutomation />
      </React.Suspense>
    ),
  },
  {
    path: '/blog/*',
    element: (
      <React.Suspense fallback={<LoadingFallback />}>
        <AsyncComingSoon title="Blog — Coming Soon" subtitle="Our content hub is under construction. Check back soon for industry insights and tech tips for SA businesses." />
      </React.Suspense>
    ),
  },
  {
    path: '/privacy',
    element: (
      <React.Suspense fallback={<LoadingFallback />}>
        <AsyncPrivacy />
      </React.Suspense>
    ),
  },
  {
    path: '/terms',
    element: (
      <React.Suspense fallback={<LoadingFallback />}>
        <AsyncTerms />
      </React.Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <React.Suspense fallback={<LoadingFallback />}>
        <AsyncNotFound />
      </React.Suspense>
    ),
  },
]);

export default router;
