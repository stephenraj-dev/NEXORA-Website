import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import ProductsSection from '../../components/Products/ProductsSection';
import Statistics from '../../components/Statistics/Statistics';
import CTA from '../../components/CTA/CTA';

const Products = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Our Products" 
        subtitle="Discover our suite of powerful enterprise applications designed to streamline your operations."
        bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <ProductsSection />
      <Statistics />
      <CTA />
    </div>
  );
};
export default Products;