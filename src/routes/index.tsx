import { createBrowserRouter } from 'react-router-dom';
import AppContainer from '../containers/AppContainer';
import ComingSoonContainer from '../containers/ComingSoonContainer';

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
]);

export default router;
