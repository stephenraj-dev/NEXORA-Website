import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Link as LinkIcon, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../Common/Logo';
import RevealText from '../Common/RevealText';


const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#060B14] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Logo />
            <RevealText as="p" className="mt-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm" text="We build scalable enterprise solutions and modern digital products that empower businesses to thrive in a connected world." />
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-colors">
                <LinkIcon size={18} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <RevealText as="h3" className="font-bold text-slate-900 dark:text-white mb-6" text="Solutions" />
            <ul className="space-y-4">
              <li><Link to="/solutions" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Enterprise Software</Link></li>
              <li><Link to="/solutions" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Cloud Migration</Link></li>
              <li><Link to="/solutions" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">AI & Data Analytics</Link></li>
              <li><Link to="/solutions" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <RevealText as="h3" className="font-bold text-slate-900 dark:text-white mb-6" text="Company" />
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Careers</Link></li>
              <li><Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <RevealText as="h3" className="font-bold text-slate-900 dark:text-white mb-6" text="Contact Us" />
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin size={18} className="text-indigo-600 shrink-0 mt-0.5" />
                <span>123 Innovation Drive, Tech District, SF 94105</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Phone size={18} className="text-indigo-600 shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Mail size={18} className="text-indigo-600 shrink-0" />
                <span>hello@nexora.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} NEXORA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
