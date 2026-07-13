import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Solutions from '../pages/Solutions/Solutions';
import Products from '../pages/Products/Products';
import Industries from '../pages/Industries/Industries';
import Careers from '../pages/Careers/Careers';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

import Insights from '../pages/Insights/Insights';
import CaseStudies from '../pages/CaseStudies/CaseStudies';
import Partnerships from '../pages/Partnerships/Partnerships';
import Sustainability from '../pages/Sustainability/Sustainability';
import TrustCenter from '../pages/TrustCenter/TrustCenter';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="products" element={<Products />} />
          <Route path="industries" element={<Industries />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          
          {/* New Enterprise MNC Pages */}
          <Route path="insights" element={<Insights />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="trust-center" element={<TrustCenter />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
