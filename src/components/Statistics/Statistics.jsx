import React from 'react';
import { motion } from 'framer-motion';
import AnimatedWaves from './AnimatedWaves';

const stats = [
  { id: 1, label: 'API requests per day', value: '500m+' },
  { id: 2, label: 'API requests per second', value: '10k+' },
  { id: 3, label: 'transactions per minute', value: '150k+' },
];

const Statistics = () => {
  return (
    <section className="relative py-24 bg-[#0a0f1c] text-white overflow-hidden">
      {/* Background Animated Waves */}
      <AnimatedWaves />
      
      {/* Dark overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-[#0a0f1c]/80 z-0"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center px-4 pt-8 md:pt-0"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Statistics;
