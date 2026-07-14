import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const offices = [
  { city: 'San Francisco', address: '100 Market St, Suite 300\nSan Francisco, CA 94105', phone: '+1 (415) 555-0198' },
  { city: 'London', address: '1 Canada Square, Canary Wharf\nLondon E14 5AB, UK', phone: '+44 20 7946 0958' },
  { city: 'Singapore', address: '8 Marina View, Asia Square\nSingapore 018960', phone: '+65 6777 9821' }
];

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with our team to discuss your next big project."
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info & Offices */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/3 space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 font-heading">Let's talk about the future.</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  Whether you have a question about our enterprise solutions, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">Email Us</div>
                      <div>hello@nexora.dev</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">Call Us</div>
                      <div>+1 (800) 555-0199</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-slate-200 dark:bg-slate-800"></div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-heading">Global Offices</h3>
                <div className="space-y-8">
                  {offices.map((office, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <MapPin className="text-indigo-600 dark:text-indigo-400 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">{office.city}</h4>
                        <p className="text-slate-600 dark:text-slate-400 whitespace-pre-line text-sm leading-relaxed mb-1">{office.address}</p>
                        <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">{office.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="lg:w-2/3"
            >
              <div className="bg-white dark:bg-[#151A28] rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0A0F1C] text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0A0F1C] text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0A0F1C] text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Company Size</label>
                    <select className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0A0F1C] text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
                      <option value="">Select an option</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">How can we help?</label>
                    <textarea rows="5" className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#0A0F1C] text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400" placeholder="Tell us about your project challenges..."></textarea>
                  </div>
                  <button type="button" className="modern-btn w-full justify-center py-4 text-lg">
                    Send Message
                    <div className="icon-circle ml-4">
                      <Send className="w-5 h-5" />
                    </div>
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
