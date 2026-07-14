
import React from 'react';
import { motion } from 'framer-motion';
import { productsData } from '../../data/mockData';
import { ArrowRight, Check } from 'lucide-react';
import RevealText from '../Common/RevealText';


const ProductsSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#1A1514]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealText as="h2" className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3" text="Enterprise Products" />
          <RevealText as="h3" className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading" text="Ready-to-deploy enterprise platforms." />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E293B] overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover-shimmer"
            >
              <div className="p-8">
                <span className="text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full mb-4 inline-block">
                  {product.category}
                </span>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-heading">{product.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 h-12">{product.desc}</p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <Check size={16} className="text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsSection;
