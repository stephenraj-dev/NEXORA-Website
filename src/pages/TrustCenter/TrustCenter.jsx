import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';
import { Shield, Lock, Server, CheckCircle2 } from 'lucide-react';

const complianceCards = [
  {
    title: 'SOC 2 Type II',
    description: 'We undergo rigorous annual third-party audits to ensure our security, availability, processing integrity, and confidentiality controls meet the highest industry standards.',
    icon: <Shield size={40} className="text-indigo-600 dark:text-indigo-400" />
  },
  {
    title: 'GDPR & CCPA Compliant',
    description: 'Your data privacy is our priority. Our platforms are architected with privacy-by-design principles to ensure full compliance with global data protection regulations.',
    icon: <Lock size={40} className="text-indigo-600 dark:text-indigo-400" />
  },
  {
    title: 'ISO 27001 Certified',
    description: 'Our Information Security Management System (ISMS) is certified to ISO 27001 standards, proving our ongoing commitment to managing information security risks.',
    icon: <Server size={40} className="text-indigo-600 dark:text-indigo-400" />
  }
];

const securityFeatures = [
  'End-to-End Encryption (AES-256)',
  'Role-Based Access Control (RBAC)',
  'Multi-Factor Authentication (MFA)',
  'Continuous Threat Monitoring',
  'Automated Vulnerability Scanning',
  '99.99% Uptime SLA',
  'Disaster Recovery & Redundancy',
  'Zero-Trust Network Architecture'
];

const TrustCenter = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Trust & Security Center" 
        subtitle="Enterprise-grade security is built into our DNA, not bolted on as an afterthought."
        bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Compliance Section */}
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">Certified & Compliant</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We operate under the strictest regulatory frameworks to ensure your sensitive corporate data is protected at all times.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {complianceCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#151A28] rounded-3xl p-10 shadow-xl border border-slate-200 dark:border-slate-800 hover-shimmer relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  {card.icon}
                </div>
                <div className="mb-6 relative z-10">{card.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading relative z-10">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="py-24 bg-white dark:bg-[#1E293B]">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
                Defense in Depth
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our infrastructure is designed with multiple layers of security, ensuring there is no single point of failure. From the physical data centers to the application layer, we employ state-of-the-art protections.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {securityFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover-shimmer p-2 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                <img loading="lazy" decoding="async" 
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Security Operations Center" 
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Report a Vulnerability */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl p-12 border border-indigo-100 dark:border-indigo-500/20 shadow-lg">
            <Shield size={48} className="mx-auto text-indigo-600 dark:text-indigo-400 mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-heading">Security Bug Bounty Program</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              We believe in the power of the security research community. If you have discovered a potential security vulnerability in any NEXORA system, we want to hear from you.
            </p>
            <button className="modern-btn inline-flex text-lg py-4">
              Report an Issue
            </button>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default TrustCenter;
