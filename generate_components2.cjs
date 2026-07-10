const fs = require('fs');
const path = require('path');

const writeComponent = (folder, name, content) => {
  const dir = path.join(__dirname, 'src', 'components', folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, `${name}.jsx`), content);
};

// 5. WhyChooseUs
writeComponent('WhyChooseUs', 'WhyChooseUs', `
import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsData } from '../../data/mockData';

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
            The NEXORA Advantage
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
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
`);

// 6. Process
writeComponent('Process', 'Process', `
import React from 'react';
import { motion } from 'framer-motion';
import { processData } from '../../data/mockData';

const Process = () => {
  return (
    <section className="py-24 bg-slate-900 dark:bg-[#060B14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">How We Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Proven engineering methodology.
          </h3>
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {processData.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start lg:items-center text-left lg:text-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold mb-6 shadow-lg shadow-indigo-600/30 lg:mx-auto">
                  {step.id}
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
`);

// 7. Products
writeComponent('Products', 'ProductsSection', `
import React from 'react';
import { motion } from 'framer-motion';
import { productsData } from '../../data/mockData';
import { ArrowRight, Check } from 'lucide-react';

const ProductsSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Enterprise Products</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
            Ready-to-deploy enterprise platforms.
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1E293B] overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
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
`);

console.log('Components 2 generated.');
