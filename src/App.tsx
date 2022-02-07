import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '@/components/login';
import { Counter } from '@/components/counter';

import { Header } from './layout';

export default () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>
    </>
  );
};
