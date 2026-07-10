const fs = require('fs');
const path = require('path');

const pages = {
  About: `import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import AboutSection from '../../components/About/AboutSection';
import Testimonials from '../../components/Testimonials/Testimonials';
import CTA from '../../components/CTA/CTA';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="About NEXORA" 
        subtitle="We are a global team of engineers, designers, and strategists building the future of enterprise software."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <AboutSection />
      <Testimonials />
      <CTA />
    </div>
  );
};
export default About;`,

  Services: `import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import ServicesSection from '../../components/Services/ServicesSection';
import Process from '../../components/Process/Process';
import CTA from '../../components/CTA/CTA';

const Services = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Our Services" 
        subtitle="End-to-end digital transformation and consulting services tailored for modern enterprises."
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <ServicesSection />
      <Process />
      <CTA />
    </div>
  );
};
export default Services;`,

  Solutions: `import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import LiveDashboardPreview from '../../components/Dashboard/LiveDashboardPreview';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import CTA from '../../components/CTA/CTA';

const Solutions = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Enterprise Solutions" 
        subtitle="Scalable, secure, and customizable solutions that solve your most complex business challenges."
        bgImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <LiveDashboardPreview />
      <WhyChooseUs />
      <CTA />
    </div>
  );
};
export default Solutions;`,

  Products: `import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import ProductsSection from '../../components/Products/ProductsSection';
import Statistics from '../../components/Statistics/Statistics';
import CTA from '../../components/CTA/CTA';

const Products = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Our Products" 
        subtitle="Discover our suite of powerful enterprise applications designed to streamline your operations."
        bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <ProductsSection />
      <Statistics />
      <CTA />
    </div>
  );
};
export default Products;`,

  Industries: `import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';

const industries = [
  { name: 'Financial Services', icon: '🏦', desc: 'Secure and compliant solutions for modern banking.' },
  { name: 'Healthcare', icon: '🏥', desc: 'Patient-centric platforms and data management.' },
  { name: 'Retail & E-commerce', icon: '🛍️', desc: 'Omnichannel experiences and supply chain optimization.' },
  { name: 'Manufacturing', icon: '🏭', desc: 'Industry 4.0 IoT integrations and ERP systems.' },
  { name: 'Technology', icon: '💻', desc: 'Scalable infrastructure for SaaS providers.' },
  { name: 'Logistics', icon: '🚢', desc: 'Real-time tracking and fleet management.' }
];

const Industries = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Industries We Serve" 
        subtitle="Domain expertise across major global sectors to deliver specialized solutions."
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <section className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-slate-50 dark:bg-[#1E293B] rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="text-4xl mb-6">{ind.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{ind.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};
export default Industries;`,

  Careers: `import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';

const positions = [
  { title: 'Senior Frontend Engineer', dept: 'Engineering', loc: 'Remote', type: 'Full-time' },
  { title: 'Product Manager', dept: 'Product', loc: 'New York', type: 'Full-time' },
  { title: 'UX/UI Designer', dept: 'Design', loc: 'London', type: 'Full-time' },
  { title: 'DevOps Engineer', dept: 'Engineering', loc: 'Remote', type: 'Full-time' }
];

const Careers = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Join Our Team" 
        subtitle="Help us build the next generation of digital enterprise solutions."
        bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <section className="py-24 bg-white dark:bg-[#0B1120]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Open Positions</h2>
            <p className="text-slate-600 dark:text-slate-400">We're always looking for talented individuals to join our team.</p>
          </div>
          <div className="space-y-4">
            {positions.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-indigo-500 transition-colors group cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{job.title}</h3>
                  <div className="flex space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>{job.dept}</span>
                    <span>•</span>
                    <span>{job.loc}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};
export default Careers;`,

  Contact: `import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with our team to discuss your next big project."
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <section className="py-24 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white dark:bg-[#1E293B] rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">How can we help?</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-colors">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;`,

  NotFound: `import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0B1120] px-4">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-9xl font-bold text-indigo-600 dark:text-indigo-500 mb-4 font-heading"
        >
          404
        </motion.h1>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Page not found</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link to="/" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
          Go back home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;`
};

for (const [pageName, content] of Object.entries(pages)) {
  const dirPath = path.join(__dirname, 'src', 'pages', pageName);
  const filePath = path.join(dirPath, pageName + '.jsx');
  fs.writeFileSync(filePath, content);
}

console.log('All pages generated successfully.');
