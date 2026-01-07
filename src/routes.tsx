import Portfolio from './pages/Portfolio';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Portfolio',
    path: '/',
    element: <Portfolio />
  }
];

export default routes;
