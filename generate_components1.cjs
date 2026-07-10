const fs = require('fs');
const path = require('path');

const writeComponent = (folder, name, content) => {
  const dir = path.join(__dirname, 'src', 'components', folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, `${name}.jsx`), content);
};

// 1. Hero
writeComponent('Hero', 'Hero', `
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay dark:opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-50/50 dark:from-indigo-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8 border border-indigo-100 dark:border-indigo-500/20"
          >
            <Activity size={16} />
            <span>NEXORA Enterprise Solutions v2.0 is live</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 font-heading"
          >
            Building Tomorrow's <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Digital Solutions
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We partner with global enterprises to design, develop, and scale world-class software products, AI platforms, and cloud infrastructure.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group">
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#1E293B] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-medium transition-all shadow-sm">
              Explore Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
`);

// 2. TrustedCompanies
writeComponent('TrustedCompanies', 'TrustedCompanies', `
import React from 'react';
import { motion } from 'framer-motion';
import { trustedCompanies } from '../../data/mockData';

const TrustedCompanies = () => {
  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0B1120]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">Trusted by innovative teams worldwide</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
            <span key={index} className="text-xl md:text-2xl font-bold text-slate-300 dark:text-slate-700 font-heading">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustedCompanies;
`);

// 3. AboutSection
writeComponent('About', 'AboutSection', `
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">About NEXORA</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
              Transforming complex challenges into elegant digital solutions.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
              Founded on the principles of engineering excellence and design thinking, NEXORA operates at the intersection of technology and business strategy. We don't just write code; we build resilient, scalable platforms that drive real enterprise value.
            </p>
            <ul className="space-y-4">
              {['Award-winning engineering team', 'ISO 27001 Certified Security', 'Agile delivery methodology'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="text-indigo-600 dark:text-indigo-400 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-indigo-100 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
               {/* Abstract geometric illustration placeholder */}
               <div className="w-full h-full rounded-2xl bg-white dark:bg-[#1E293B] shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col p-6 overflow-hidden relative">
                  <div className="w-3/4 h-8 bg-slate-100 dark:bg-slate-800 rounded-md mb-4"></div>
                  <div className="w-1/2 h-8 bg-slate-100 dark:bg-slate-800 rounded-md mb-12"></div>
                  <div className="flex-grow grid grid-cols-2 gap-4">
                     <div className="bg-indigo-50 dark:bg-indigo-500/10 rounded-xl"></div>
                     <div className="bg-purple-50 dark:bg-purple-500/10 rounded-xl"></div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
`);

// 4. ServicesSection
writeComponent('Services', 'ServicesSection', `
import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/mockData';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#060B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-[#1E293B] p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg dark:hover:border-slate-700 transition-all group"
              >
                <div className={\`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors \${service.bg}\`}>
                  <Icon className={\`\${service.color}\`} size={28} />
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
`);

console.log('Components generated.');
