import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';

const industries = [
  { name: 'Financial Services', icon: '🏦', desc: 'Secure and compliant solutions for modern banking.' },
  { name: 'Healthcare', icon: '🏥', desc: 'Patient-centric platforms and data management.' },
  { name: 'Retail & E-commerce', icon: '🛍️', desc: 'Omnichannel experiences and supply chain optimization.' },
  { name: 'Manufacturing', icon: '🏭', desc: 'Industry 4.0 IoT integrations and ERP systems.' },
  { name: 'Technology', icon: '💻', desc: 'Scalable infrastructure for SaaS providers.' },
  { name: 'Logistics', icon: '🚢', desc: 'Real-time tracking and fleet management.' }
];

const Industries = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Industries We Serve" 
        subtitle="Domain expertise across major global sectors to deliver specialized solutions."
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <section className="py-24 bg-white dark:bg-[#1A1514]">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group electric-border bg-slate-50 dark:bg-[#1E293B] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-2xl z-10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-indigo-500)] to-[var(--color-purple-500)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-10"></div>
                <div className="text-4xl mb-6 relative z-10">{ind.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{ind.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};
export default Industries;
