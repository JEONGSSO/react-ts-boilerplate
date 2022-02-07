import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './layout';

import routes from '@/routes';

export default () => (
  <Router>
    <Header />
    <main>Hello World</main>
  </Router>
);
