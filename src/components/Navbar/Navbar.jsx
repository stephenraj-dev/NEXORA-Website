import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../Common/Logo';
import ThemeToggle from '../Common/ThemeToggle';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
      className={twMerge(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={twMerge(
                    "relative font-medium transition-colors py-1 group",
                    isActive 
                      ? "text-indigo-600 dark:text-indigo-400" 
                      : "text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                  )}
                >
                  {link.name}
                  <span 
                    className={twMerge(
                      "absolute bottom-0 left-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  ></span>
                </Link>
              );
            })}
            
            <div className="flex items-center space-x-4 border-l pl-4 border-slate-200 dark:border-slate-700">
              <ThemeToggle />
              <Link
                to="/contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 absolute top-full left-0 right-0 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 dark:text-indigo-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
