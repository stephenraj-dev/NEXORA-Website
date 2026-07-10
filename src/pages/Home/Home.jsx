import React, { useEffect } from 'react';
import VideoIntro from '../../components/Hero/VideoIntro';
import Hero from '../../components/Hero/Hero';
import TrustedCompanies from '../../components/TrustedCompanies/TrustedCompanies';
import AboutSection from '../../components/About/AboutSection';
import ServicesSection from '../../components/Services/ServicesSection';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Process from '../../components/Process/Process';
import ProductsSection from '../../components/Products/ProductsSection';
import NetworkSection from '../../components/Network/NetworkSection';
import LiveDashboardPreview from '../../components/Dashboard/LiveDashboardPreview';
import Statistics from '../../components/Statistics/Statistics';
import Testimonials from '../../components/Testimonials/Testimonials';
import FAQ from '../../components/FAQ/FAQ';
import CTA from '../../components/CTA/CTA';

const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full relative bg-transparent">
      <VideoIntro />
      
      {/* Content wrapper that slides over the sticky video */}
      <div className="relative z-10 w-full bg-white dark:bg-[#0B1120] shadow-2xl">
        <Hero />
        <TrustedCompanies />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <Process />
        <ProductsSection />
        <NetworkSection />
        <LiveDashboardPreview />
        <Statistics />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </div>
  );
};

export default Home;
