import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductList from './pages/AddProduct/AddProduct';
import Card from './utils/Card';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
