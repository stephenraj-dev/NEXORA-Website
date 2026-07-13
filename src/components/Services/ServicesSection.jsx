
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

        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:mx-auto md:pl-0 max-w-4xl">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="mb-12 relative pl-8 md:pl-0 md:flex md:items-center md:justify-between group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5.5px] md:left-[50%] md:-translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-500 group-hover:scale-150 transition-all duration-300 ring-4 ring-slate-50 dark:ring-[#1A1514] z-10" />

                {/* Mobile Line extension */}
                <div className="md:hidden absolute left-0 top-6 bottom-[-4rem] w-px bg-slate-200 dark:bg-slate-800" />
                
                <div className={`md:w-5/12 transition-all ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:order-2 md:pl-10'}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${service.bg} ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <Icon className={`${service.color}`} size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Spacer for the other side */}
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
              </motion.div>
            );
          })}
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent dark:from-slate-800 dark:via-slate-800 dark:to-transparent" />
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
