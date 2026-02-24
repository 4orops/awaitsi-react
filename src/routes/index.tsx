import { createBrowserRouter } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import ComingSoonContainer from '../containers/ComingSoonContainer';
import React from 'react';

const AsyncSalon = React.lazy(() => import('../projects/salon/SalonLayout'));
const AsyncRealEstate = React.lazy(() => import('../projects/real-estate/RealEstateLayout'));
const AsyncAi = React.lazy(() => import('../projects/ai/AiLayout'));
const AsyncCrm = React.lazy(() => import('../projects/crm/CrmLayout'));
const AsyncMobile = React.lazy(() => import('../projects/mobile/MobileLayout'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen" role="status" aria-live="polite">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500" aria-hidden="true"></div>
    <span className="sr-only">Loading…</span>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoonContainer />,
  },
  {
    path: '/app',
    element: <AppContainer />,
  },
  {
    path: '/test-main',
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
]);

export default router;
