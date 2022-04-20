import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Knowleadge from './components/pages/Knowledges';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

const app = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competences" element={<Knowleadge />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default app;