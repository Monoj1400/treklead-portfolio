import React from 'react';
import { Mountain, Compass } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-[#1b4332]/35 text-gray-500 py-16 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6f4e37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pb-12 border-b border-neutral-900">
          
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={scrollToTop}>
            <div className="w-9 h-9 rounded-lg bg-[#1b4332]/25 border border-[#2d6a4f]/50 flex items-center justify-center text-emerald-400 group-hover:bg-[#1b4332] transition-colors">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-display font-black text-xs tracking-wider text-[#f8f5f0] uppercase">
                MONOJ KUMAR B K
              </span>
              <span className="block font-mono text-[8px] text-[#2d6a4f] uppercase tracking-widest font-extrabold leading-none mt-0.5">
                Karnataka Trails Today • Himalayan Trails Tomorrow
              </span>
            </div>
          </div>

          {/* Quick links to scroll back up */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-mono text-[9px] uppercase tracking-wider text-gray-400">
            {['Home', 'About', 'Dashboard', 'Timeline', 'Treks', 'Gallery', 'Stories', 'Fitness', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-amber-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Credits row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-10 text-[10px] sm:text-xs text-gray-500 gap-4 text-center md:text-left">
          
          {/* Copyright description */}
          <div className="space-y-1">
            <p>
              &copy; {currentYear} MONOJ KUMAR B B. All rights reserved. Registered Outdoor Coordinator.
            </p>
            <p className="font-mono text-[9px] text-[#2d6a4f] uppercase tracking-widest leading-loose">
              🌱 Green Trails Compliance Certified • Minimum Footprint Advocate
            </p>
          </div>

          {/* Core framework specification details */}
          <div className="text-center md:text-right font-mono text-[9px] space-y-1 text-neutral-600">
            <p>Designed and Compiled with React & Tailwind</p>
            <p className="font-bold text-[#6f4e37]">COORDINATES // 12.9716° N, 77.5946° E</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
