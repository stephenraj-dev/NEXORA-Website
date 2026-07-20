import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Lazy loading all route components to heavily reduce initial bundle size
const Home = React.lazy(() => import('../pages/Home/Home'));
const About = React.lazy(() => import('../pages/About/About'));
const Services = React.lazy(() => import('../pages/Services/Services'));
const Solutions = React.lazy(() => import('../pages/Solutions/Solutions'));
const Products = React.lazy(() => import('../pages/Products/Products'));
const Industries = React.lazy(() => import('../pages/Industries/Industries'));
const Careers = React.lazy(() => import('../pages/Careers/Careers'));
const Contact = React.lazy(() => import('../pages/Contact/Contact'));
const NotFound = React.lazy(() => import('../pages/NotFound/NotFound'));

const Insights = React.lazy(() => import('../pages/Insights/Insights'));
const CaseStudies = React.lazy(() => import('../pages/CaseStudies/CaseStudies'));
const Partnerships = React.lazy(() => import('../pages/Partnerships/Partnerships'));
const Sustainability = React.lazy(() => import('../pages/Sustainability/Sustainability'));
const TrustCenter = React.lazy(() => import('../pages/TrustCenter/TrustCenter'));

const PageLoader = () => (
  <div className="flex h-[70vh] w-full items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600 dark:border-slate-800 dark:border-t-indigo-500"></div>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 animate-pulse">Loading...</p>
    </div>
  </div>
);

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
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
            
            <Route path="insights" element={<Insights />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="partnerships" element={<Partnerships />} />
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="trust-center" element={<TrustCenter />} />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoute;
