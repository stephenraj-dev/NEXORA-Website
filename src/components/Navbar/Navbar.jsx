import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Logo from '../Common/Logo';
import ThemeToggle from '../Common/ThemeToggle';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMobileGroup(null);
  }, [location]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navGroups = [
    {
      name: 'Offerings',
      columns: [
        {
          title: 'Services',
          items: [
            { name: 'Cloud Migration', path: '/services' },
            { name: 'AI & Machine Learning', path: '/services' },
            { name: 'DevOps Automation', path: '/services' },
            { name: 'Cybersecurity', path: '/services' },
          ]
        },
        {
          title: 'Solutions',
          items: [
            { name: 'Zero-Trust Security', path: '/solutions' },
            { name: 'Data Monetization', path: '/solutions' },
            { name: 'Event-Driven Microservices', path: '/solutions' },
          ]
        },
        {
          title: 'Industries',
          items: [
            { name: 'Retail & E-commerce', path: '/industries' },
            { name: 'Banking & Finance', path: '/industries' },
            { name: 'Healthcare', path: '/industries' },
          ]
        },
        {
          title: 'Products',
          items: [
            { name: 'NEXORA Core', path: '/products' },
            { name: 'Data Lake Engine', path: '/products' },
          ]
        }
      ]
    },
    {
      name: 'Company',
      columns: [
        {
          title: 'About',
          items: [
            { name: 'Our Story', path: '/about' },
            { name: 'Leadership Team', path: '/about' },
            { name: 'Careers', path: '/careers' },
          ]
        },
        {
          title: 'Responsibility',
          items: [
            { name: 'Sustainability (ESG)', path: '/sustainability' },
            { name: 'Diversity & Inclusion', path: '/sustainability' },
          ]
        },
        {
          title: 'Ecosystem',
          items: [
            { name: 'Partnerships', path: '/partnerships' },
            { name: 'Trust Center', path: '/trust-center' },
          ]
        }
      ]
    },
    {
      name: 'Resources',
      columns: [
        {
          title: 'Insights',
          items: [
            { name: 'Research Reports', path: '/insights' },
            { name: 'Engineering Blog', path: '/insights' },
            { name: 'Whitepapers', path: '/insights' },
          ]
        },
        {
          title: 'Success Stories',
          items: [
            { name: 'Case Studies', path: '/case-studies' },
            { name: 'Client Testimonials', path: '/case-studies' },
          ]
        }
      ]
    }
  ];

  const isActiveGroup = (columns) => {
    return columns.some(col => col.items.some(item => location.pathname === item.path));
  };

  return (
    <nav
      className={twMerge(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        (isScrolled || mobileMenuOpen)
          ? 'bg-white/90 dark:bg-[#0A0F1C]/90 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[3px] bg-slate-900 dark:bg-white z-50 origin-center"
        style={{ scaleX }}
      />
      {/* relative is here, so absolute dropdowns are relative to this max-w container */}
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 h-full">
            <Link
              to="/"
              className={twMerge(
                "relative font-medium transition-colors group flex items-center h-full",
                location.pathname === '/' 
                  ? "text-indigo-600 dark:text-indigo-400" 
                  : "text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
              )}
            >
              <span>Home</span>
              <span className={twMerge("absolute bottom-0 left-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300", location.pathname === '/' ? "w-full" : "w-0 group-hover:w-full")}></span>
            </Link>

            {navGroups.map((group) => (
              <div key={group.name} className="group h-full flex items-center">
                {/* Notice NO relative class here. This is crucial for the dropdown to span the entire navbar width. */}
                <button className={twMerge(
                  "flex items-center gap-1 font-medium transition-colors h-full",
                  isActiveGroup(group.columns) 
                    ? "text-indigo-600 dark:text-indigo-400" 
                    : "text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                )}>
                  {group.name}
                  <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                
                {/* Stripe-style Mega Menu */}
                <div className="absolute left-0 right-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pb-4">
                  <div className="bg-white dark:bg-[#111827] rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-slate-200/60 dark:border-slate-800 flex overflow-hidden">
                    {group.columns.map((col, idx) => (
                      <div key={col.title} className="flex-1 p-10 border-r border-slate-100 dark:border-slate-800/60 last:border-0 relative">
                        {/* Column Title */}
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">
                          {col.title}
                        </h4>
                        
                        {/* Column Items */}
                        <div className="flex flex-col gap-4">
                          {col.items.map((item) => (
                            <Link 
                              key={item.name} 
                              to={item.path}
                              className="group/link w-max text-[15px] font-medium transition-colors text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                              <span className="relative">
                                {item.name}
                                <span className={twMerge(
                                  "absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 origin-left transition-transform duration-300",
                                  location.pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100"
                                )}></span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center space-x-4 border-l pl-4 border-slate-200 dark:border-slate-700 h-8">
              <ThemeToggle />
              <Link
                to="/contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#151A28] border-b border-slate-200 dark:border-slate-800 absolute top-full left-0 right-0 shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              to="/"
              className="block px-4 py-3 rounded-xl text-base font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              Home
            </Link>
            
            {navGroups.map((group) => (
              <div key={group.name} className="space-y-1">
                <button
                  onClick={() => setOpenMobileGroup(openMobileGroup === group.name ? null : group.name)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  {group.name}
                  <ChevronDown size={20} className={twMerge("transition-transform", openMobileGroup === group.name ? "rotate-180 text-indigo-600" : "")} />
                </button>
                {openMobileGroup === group.name && (
                  <div className="pl-4 pr-2 py-4 space-y-6 bg-slate-50 dark:bg-slate-800/30 rounded-xl mt-1">
                    {group.columns.map((col) => (
                      <div key={col.title}>
                        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-4">
                          {col.title}
                        </h4>
                        <div className="space-y-1">
                          {col.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className={twMerge(
                                "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                location.pathname === item.path
                                  ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                                  : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800"
                              )}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800">
              <Link
                to="/contact"
                className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-bold text-base transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
