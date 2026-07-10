
import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/mockData';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#1A1514]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Client Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
            Trusted by industry leaders.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 relative"
            >
              <Quote className="text-indigo-100 dark:text-indigo-900/50 absolute top-6 right-6" size={48} />
              <p className="text-slate-700 dark:text-slate-300 relative z-10 mb-8 italic">"{testimonial.feedback}"</p>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
