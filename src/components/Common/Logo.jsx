import React from 'react';
import logoImg from '../../assets/LOGO.png';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <img 
        src={logoImg} 
        alt="NEXORA Logo" 
        className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-all duration-300"
      />
      <div className="flex flex-col hidden sm:flex">
        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
          NEXORA
        </span>
        <span className="text-[10px] text-[var(--color-indigo-500)] font-semibold tracking-widest uppercase mt-0.5">
          Enterprise Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;
