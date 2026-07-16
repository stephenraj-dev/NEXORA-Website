import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';
import { motion } from 'framer-motion';
import { Code2, Cloud, Cpu, ShieldCheck, Database, Smartphone, CheckCircle2 } from 'lucide-react';

const serviceDetails = [
  {
    icon: Code2,
    title: "Enterprise Software Engineering",
    desc: "We build resilient, scalable, and secure custom applications tailored precisely to your complex business workflows.",
    features: ["Microservices Architecture", "API First Design", "Legacy System Modernization", "High-Availability Systems"]
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    desc: "Accelerate your delivery and reduce costs with our expert cloud migration, architecture, and DevOps automation services.",
    features: ["AWS/Azure/GCP Migration", "CI/CD Pipelines", "Containerization (Docker/K8s)", "Infrastructure as Code"]
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning Integration",
    desc: "Unlock the power of your data. We deploy predictive models, NLP, and intelligent automation into your existing platforms.",
    features: ["Predictive Analytics", "Generative AI Solutions", "Computer Vision", "Automated Decision Engines"]
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    desc: "Enterprise-grade security audits, penetration testing, and zero-trust architecture implementation to protect your assets.",
    features: ["Penetration Testing", "SOC2/GDPR Compliance", "Zero-Trust Networks", "24/7 Threat Monitoring"]
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    desc: "Transform raw, unstructured data into actionable business intelligence with robust data pipelines and modern data lakes.",
    features: ["Real-time Data Streaming", "Data Warehouse Design", "Business Intelligence Dashboards", "ETL/ELT Processes"]
  },
  {
    icon: Smartphone,
    title: "Digital Experience & Mobile",
    desc: "Engage your customers wherever they are with blazing fast, native, and cross-platform mobile applications.",
    features: ["iOS & Android Native", "React Native / Flutter", "UX/UI Prototyping", "Progressive Web Apps (PWA)"]
  }
];

const Services = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Our Services" 
        subtitle="End-to-end digital transformation and consulting services tailored for modern enterprises."
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Detailed Service Catalog */}
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
              Everything you need to scale digitally.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We provide a comprehensive suite of engineering services. Whether you need to migrate to the cloud, build an AI model, or secure your infrastructure, our expert teams deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-[#151A28] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none group hover-shimmer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={18} className="text-indigo-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 bg-indigo-600 dark:bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Deliver faster. Build better.</h2>
              <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                Our clients typically see a 40% reduction in time-to-market and a 60% decrease in critical infrastructure failures within the first year of our engagement. We don't just act as contractors; we act as your strategic engineering partner.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <div className="text-indigo-200 text-sm">Faster Time-to-Market</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99.99%</div>
                  <div className="text-indigo-200 text-sm">Uptime Guarantee</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group hover-shimmer">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Team collaborating" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};
export default Services;
