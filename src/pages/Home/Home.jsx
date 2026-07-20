import React, { useEffect, Suspense } from 'react';
import VideoIntro from '../../components/Hero/VideoIntro';
import Hero from '../../components/Hero/Hero';

// Lazy load below-the-fold components
const TrustedCompanies = React.lazy(() => import('../../components/TrustedCompanies/TrustedCompanies'));
const AboutSection = React.lazy(() => import('../../components/About/AboutSection'));
const ServicesSection = React.lazy(() => import('../../components/Services/ServicesSection'));
const WhyChooseUs = React.lazy(() => import('../../components/WhyChooseUs/WhyChooseUs'));
const Process = React.lazy(() => import('../../components/Process/Process'));
const ProductsSection = React.lazy(() => import('../../components/Products/ProductsSection'));
const NetworkSection = React.lazy(() => import('../../components/Network/NetworkSection'));
const LiveDashboardPreview = React.lazy(() => import('../../components/Dashboard/LiveDashboardPreview'));
const Statistics = React.lazy(() => import('../../components/Statistics/Statistics'));
const CustomerStories = React.lazy(() => import('../../components/CustomerStories/CustomerStories'));
const FAQ = React.lazy(() => import('../../components/FAQ/FAQ'));
const CTA = React.lazy(() => import('../../components/CTA/CTA'));

const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full relative bg-transparent overflow-x-hidden">
      <VideoIntro />
      
      {/* Content wrapper that slides over the sticky video */}
      <div className="relative z-10 w-full bg-white dark:bg-[#1A1514] shadow-2xl will-change-transform transform-gpu">
        <Hero />
        
        {/* Suspense boundary for everything below the fold */}
        <Suspense fallback={<div className="h-32 w-full flex items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent"></div></div>}>
          <TrustedCompanies />
          <AboutSection />
          <ServicesSection />
          <WhyChooseUs />
          <Process />
          <ProductsSection />
          <NetworkSection />
          <LiveDashboardPreview />
          <Statistics />
          <CustomerStories />
          <FAQ />
          <CTA />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
