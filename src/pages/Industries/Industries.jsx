import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';
import { Landmark, Stethoscope, ShoppingBag, Factory, Laptop, Truck } from 'lucide-react';

const industries = [
  {
    name: 'Financial Services',
    icon: Landmark,
    desc: 'Modernize core banking, implement real-time fraud detection, and ensure global compliance with our secure fintech solutions.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '40% reduction in processing time'
  },
  {
    name: 'Healthcare & Life Sciences',
    icon: Stethoscope,
    desc: 'HIPAA-compliant data architectures, telemedicine platforms, and AI-driven diagnostic tools designed to improve patient outcomes.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '100% HIPAA compliant infrastructure'
  },
  {
    name: 'Retail & E-commerce',
    icon: ShoppingBag,
    desc: 'Scalable omnichannel experiences, predictive inventory management, and hyper-personalized customer journey mapping.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '3x conversion rate increase'
  },
  {
    name: 'Manufacturing & IoT',
    icon: Factory,
    desc: 'Industry 4.0 implementations featuring real-time sensor integrations, predictive maintenance, and smart ERP systems.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: 'Zero unplanned downtime'
  },
  {
    name: 'Technology & SaaS',
    icon: Laptop,
    desc: 'Cloud-native infrastructure, automated CI/CD pipelines, and multi-tenant architectures tailored for high-growth SaaS providers.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: '99.999% SLA achievement'
  },
  {
    name: 'Logistics & Supply Chain',
    icon: Truck,
    desc: 'End-to-end visibility platforms, AI-optimized routing, and automated warehouse management systems.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stats: 'Global real-time tracking'
  }
];

const Industries = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Industries We Serve" 
        subtitle="Domain expertise across major global sectors to deliver highly specialized, compliant solutions."
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Domain Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
              Tailored for your sector.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We understand that generic software doesn't solve industry-specific problems. Our teams bring deep domain knowledge to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white dark:bg-[#151A28] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover-shimmer flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img loading="lazy" decoding="async" 
                      src={ind.image} 
                      alt={ind.name}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white font-heading">{ind.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {ind.desc}
                    </p>
                    <div className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 rounded-full w-max">
                      {ind.stats}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
};
export default Industries;
