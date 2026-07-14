import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';
import { ArrowRight, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const cases = [
  {
    client: 'Global Retail Corp',
    industry: 'Retail & E-commerce',
    title: 'Scaling order processing during Black Friday',
    challenge: 'The client was experiencing severe latency and dropped transactions during peak holiday traffic, costing millions in lost revenue.',
    solution: 'Migrated their monolithic order management system to an event-driven microservices architecture using Apache Kafka and Kubernetes.',
    metrics: [
      { icon: <TrendingUp size={20} />, value: '+300%', label: 'Throughput' },
      { icon: <Clock size={20} />, value: '0.01s', label: 'Latency' }
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    client: 'Apex Financial',
    industry: 'Banking & Finance',
    title: 'Implementing Zero-Trust Architecture across 50 global branches',
    challenge: 'A sprawling legacy network made the bank vulnerable to lateral movement during security breaches.',
    solution: 'Deployed a comprehensive Zero-Trust framework, enforcing identity-aware proxies and micro-segmentation across all critical assets.',
    metrics: [
      { icon: <ShieldCheck size={20} />, value: '100%', label: 'Compliance' },
      { icon: <TrendingUp size={20} />, value: '-85%', label: 'Incident Rate' }
    ],
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    client: 'Nova Health Systems',
    industry: 'Healthcare',
    title: 'Modernizing electronic health records with AI data pipelines',
    challenge: 'Doctors were spending 40% of their time manually inputting and searching patient data across disparate legacy databases.',
    solution: 'Built a unified data lake on Snowflake and integrated an NLP-based search engine to instantly retrieve patient histories.',
    metrics: [
      { icon: <Clock size={20} />, value: '-40%', label: 'Admin Time' },
      { icon: <TrendingUp size={20} />, value: '1.2M+', label: 'Records Indexed' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];

const CaseStudies = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Client Success Stories" 
        subtitle="Discover how we help global enterprises solve their most complex technical challenges."
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-24">
            {cases.map((study, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl hover-shimmer aspect-[4/3]">
                      <img src={study.image} alt={study.client} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs mb-3 border border-white/30">
                          {study.industry}
                        </span>
                        <h3 className="text-3xl font-bold text-white font-heading">{study.client}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-heading leading-tight">
                      {study.title}
                    </h2>
                    
                    <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
                      <div>
                        <h4 className="text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider mb-2">The Challenge</h4>
                        <p>{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider mb-2">The Solution</h4>
                        <p>{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col">
                          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                            {metric.icon}
                            <span className="text-3xl font-bold font-heading">{metric.value}</span>
                          </div>
                          <span className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    <button className="flex items-center gap-2 text-slate-900 dark:text-white font-bold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors pt-4 group">
                      Read full case study <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
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

export default CaseStudies;
