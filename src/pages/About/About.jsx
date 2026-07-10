import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import AboutSection from '../../components/About/AboutSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import CTA from '../../components/CTA/CTA';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="About NEXORA" 
        subtitle="We are a global team of engineers, designers, and strategists building the future of enterprise software."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <AboutSection />
      <Testimonials />
      <CTA />
    </div>
  );
};
export default About;