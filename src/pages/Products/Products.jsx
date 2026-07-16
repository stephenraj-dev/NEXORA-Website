import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'hrms',
    name: 'NEXORA HRMS',
    tagline: 'The future of workforce management.',
    desc: 'Empower your HR teams with an intelligent platform that handles the entire employee lifecycle. From automated onboarding and performance reviews to payroll integration and predictive attrition modeling.',
    features: ['AI-Driven Recruitment', 'Automated Payroll & Compliance', 'Real-time Analytics Dashboard', 'Employee Self-Service Portal'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'erp',
    name: 'NEXORA ERP',
    tagline: 'Unified enterprise operations.',
    desc: 'Break down silos and unify your financials, supply chain, manufacturing, and operations. NEXORA ERP provides a single source of truth, enabling real-time visibility and agile decision-making at scale.',
    features: ['Supply Chain Optimization', 'Advanced Financial Reporting', 'Inventory Management', 'IoT Sensor Integration'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'crm',
    name: 'NEXORA CRM',
    tagline: 'Build customer relationships that last.',
    desc: 'Transform how you engage with customers. Our AI-powered CRM predicts customer needs, automates marketing workflows, and provides your sales team with actionable insights to close deals faster.',
    features: ['360° Customer View', 'Predictive Lead Scoring', 'Omnichannel Marketing', 'Automated Sales Workflows'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    color: 'from-orange-500 to-red-600'
  }
];

const Products = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Our Products" 
        subtitle="Discover our suite of powerful enterprise applications designed to streamline your operations."
        bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={product.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className="flex-1"
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">{product.name}</h3>
                  <h4 className={`text-xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r ${product.color}`}>
                    {product.tagline}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    {product.desc}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
                        <CheckCircle2 className="text-indigo-600 dark:text-indigo-400 shrink-0" size={24} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="modern-btn group">
                    Explore {product.name}
                    <div className="icon-circle">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </motion.div>

                {/* Image Showcase */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 w-full"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group hover-shimmer">
                    <img loading="lazy" decoding="async" 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 border-[4px] border-white/20 dark:border-white/10 rounded-3xl pointer-events-none"></div>
                  </div>
                </motion.div>

              </div>
            );
          })}

        </div>
      </section>

      <CTA />
    </div>
  );
};
export default Products;
