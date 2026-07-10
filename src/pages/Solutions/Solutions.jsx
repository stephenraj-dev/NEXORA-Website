import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import LiveDashboardPreview from '../../components/Dashboard/LiveDashboardPreview';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import CTA from '../../components/CTA/CTA';

const Solutions = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Enterprise Solutions" 
        subtitle="Scalable, secure, and customizable solutions that solve your most complex business challenges."
        bgImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <LiveDashboardPreview />
      <WhyChooseUs />
      <CTA />
    </div>
  );
};
export default Solutions;
