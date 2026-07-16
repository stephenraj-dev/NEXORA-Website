
import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsData } from '../../data/mockData';
import RevealText from '../Common/RevealText';


const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#1A1514]">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealText as="h2" className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3" text="Why Choose Us" />
          <RevealText as="h3" className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading" text="The NEXORA Advantage" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border
                border-t-2 border-bs-amber-400 border-slate-100 dark:border-slate-800 group hover-shimmer"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <Icon className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
