import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import routes from '@/routes';

export default () => {
  // const match = useLocation();
  // console.log('headerrrrrrrrrr match', match);

  return (
    <header>
      <Link to="/">
        <h1>logo</h1>
      </Link>
      <nav>
        {routes.map((route, index) => (
          <Link to={route.path!} key={index}>
            {route.path?.replace('/', '')}
          </Link>
        ))}
      </nav>
    </header>
  );
};
