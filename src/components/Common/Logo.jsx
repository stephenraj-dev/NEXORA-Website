import React from 'react';
import { Hexagon } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all duration-300">
        <Hexagon size={24} className="fill-white/20" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
          NEXORA
        </span>
        <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase mt-0.5">
          Digital Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;
