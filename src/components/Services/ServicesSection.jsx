
import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/mockData';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#060B14]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
            Enterprise capabilities for modern demands.
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            End-to-end technology services designed to modernize your infrastructure, automate processes, and scale your product vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-[#1E293B] p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg dark:hover:border-slate-700 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${service.bg}`}>
                  <Icon className={`${service.color}`} size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
