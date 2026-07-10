import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import ServicesSection from '../../components/Services/ServicesSection';
import Process from '../../components/Process/Process';
import CTA from '../../components/CTA/CTA';

const Services = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Our Services" 
        subtitle="End-to-end digital transformation and consulting services tailored for modern enterprises."
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <ServicesSection />
      <Process />
      <CTA />
    </div>
  );
};
export default Services;
