import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import routes from '@/routes';

export default () => {
  const match = useLocation();
  console.log('headerrrrrrrrrr match', match);

  return (
    <header>
      <h1>logo</h1>
      <nav>
        {routes.map((route) => (
          <Link to={route.path} key={route.name}>
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
