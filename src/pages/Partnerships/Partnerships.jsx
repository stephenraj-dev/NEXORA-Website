import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';
import { CheckCircle, ArrowRight } from 'lucide-react';

const partners = [
  {
    name: 'Amazon Web Services',
    tier: 'Premier Consulting Partner',
    description: 'We help enterprises migrate, modernize, and scale their infrastructure on the world\'s most comprehensive cloud platform.',
    benefits: ['Well-Architected Reviews', 'Cloud Migration', 'Serverless Architecture'],
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Microsoft Azure',
    tier: 'Gold Solutions Partner',
    description: 'Leverage the power of the Microsoft ecosystem with our certified expertise in Azure cloud and enterprise infrastructure.',
    benefits: ['Hybrid Cloud Solutions', 'Enterprise Security', 'AI & Machine Learning'],
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Snowflake',
    tier: 'Elite Services Partner',
    description: 'Unlock the value of your data with modern cloud data warehousing, analytics, and sharing capabilities.',
    benefits: ['Data Lake Architecture', 'Real-time Analytics', 'Data Monetization'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const Partnerships = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Global Technology Ecosystem" 
        subtitle="We partner with the world's leading technology providers to deliver unparalleled enterprise solutions."
        bgImage="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">Our Strategic Partners</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Our alliances with tier-one technology platforms ensure that we can architect, build, and deploy the most robust systems for our clients, backed by certified expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#151A28] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col hover-shimmer group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply z-10"></div>
                  <img loading="lazy" decoding="async" src={partner.image} alt={partner.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm text-slate-900 dark:text-white font-bold text-xs shadow-sm">
                      {partner.tier}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">{partner.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                    {partner.description}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                    {partner.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white dark:bg-[#1E293B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 font-heading">Why Partner With Us?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            We don't just resell licenses. We are deeply embedded in our partners' ecosystems, co-innovating and shaping the future of enterprise software. Our engineering teams hold over 500+ combined certifications across AWS, Azure, and Google Cloud.
          </p>
          <button className="modern-btn inline-flex text-lg py-4">
            Become a Partner
            <div className="icon-circle ml-4">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Partnerships;
