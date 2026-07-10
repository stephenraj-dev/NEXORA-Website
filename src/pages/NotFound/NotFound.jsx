import React from 'react';
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
export default NotFound;