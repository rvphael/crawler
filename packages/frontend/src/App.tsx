import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ProductNotFoundPage from './pages/ProductNotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="/*" element={<ProductNotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
