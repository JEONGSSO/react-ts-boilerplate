import { Login } from '@/components/login';
import { Counter } from '@/components/counter';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: Login,
    index: true,
  },
  {
    path: '/counter',
    element: Counter,
  },
];

export default routes;
