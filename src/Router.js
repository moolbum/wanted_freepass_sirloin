import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductList from './pages/AddProduct/AddProduct';
import ContentLayout from './utils/ContentLayout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
