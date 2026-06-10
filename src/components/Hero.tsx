import React from 'react';
import { Mountain, ArrowDown, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
    >
      {/* Background Image with immersive dark gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105 select-none pointer-events-none"
        style={{
          backgroundImage: "url('src/images/IMG-20251130-WA0012.jpg')",
        }}
        alt="Epic Mountain Range"
      />
      
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1b4332]/10 to-[#6f4e37]/15" />

      {/* Floating Animated Clouds Effect */}
      <div className="absolute inset-x-0 bottom-0 top-1/4 select-none pointer-events-none overflow-hidden opacity-35">
        <div 
          className="absolute w-[200%] h-full bg-contain bg-bottom bg-repeat-x animate-cloud-slow"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1200&q=30&blur=10')",
            transform: 'translateY(15%)',
          }}
        />
        <div 
          className="absolute w-[200%] h-full bg-contain bg-bottom bg-repeat-x animate-cloud-fast"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1200&q=30&blur=20')",
            transform: 'translateY(30%) scaleY(0.7) scaleX(-1)',
          }}
        />
      </div>

      {/* Custom Styles for Cloud Movements */}
      <style>{`
        @keyframes driftMove {
          0% { transform: translateX(0) scale(1) translateY(15%); }
          50% { transform: translateX(-25%) scale(1.05) translateY(12%); }
          100% { transform: translateX(-50%) scale(1) translateY(15%); }
        }
        @keyframes driftMoveOpposite {
          0% { transform: translateX(-50%) scaleY(0.7) scaleX(-1) translateY(30%); }
          50% { transform: translateX(-25%) scaleY(0.72) scaleX(-1.03) translateY(28%); }
          100% { transform: translateX(0) scaleY(0.7) scaleX(-1) translateY(30%); }
        }
        .animate-cloud-slow {
          animation: driftMove 120s linear infinite;
        }
        .animate-cloud-fast {
          animation: driftMoveOpposite 80s linear infinite;
        }
      `}</style>

      {/* Main Content Card Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-24">
        {/* Decorative Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass text-[#f8f5f0] text-[10px] font-mono uppercase tracking-widest mb-6 animate-fade-in card-shadow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span className="text-emerald-300 font-bold">Active Expedition Leader</span>
          <span className="text-slate-500">|</span>
          <span>Bengaluru, KA</span>
        </div>

        {/* Display Typography Title */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-8xl tracking-tighter text-[#f8f5f0] uppercase mb-4 leading-none select-text drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">
            {PERSONAL_INFO.name}
          </span>
          <span className="block mt-3 text-transparent text-lg sm:text-2xl md:text-3xl font-extrabold tracking-widest" style={{ WebkitTextStroke: '1px rgba(248, 245, 240, 0.4)' }}>
            KARNATAKA TODAY • HIMALAYAN TOMORROW
          </span>
        </h1>

        {/* Vertical Separator Cross Line */}
        <div className="w-24 h-1 bg-[#6f4e37] mx-auto my-6 rounded" />

        {/* Dynamic Titles */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-8 font-subdisplay text-xs sm:text-[14px] text-gray-300 tracking-wider">
          <span className="font-bold text-[#fafafa] uppercase tracking-widest px-2.5 py-1 glass rounded">TREK LEADER</span>
          <span className="hidden sm:inline text-[#6f4e37] font-semibold">•</span>
          <span className="font-bold text-[#fafafa] uppercase tracking-widest px-2.5 py-1 glass rounded mt-2 sm:mt-0">OUTDOOR FACILITATOR</span>
          <span className="hidden sm:inline text-[#6f4e37] font-semibold">•</span>
          <span className="font-bold text-[#fafafa] uppercase tracking-widest px-2.5 py-1 glass rounded mt-2 sm:mt-0">ADVENTURE COORDINATOR</span>
        </div>

        {/* Inspirational Tagline */}
        <p className="max-w-2xl mx-auto font-subdisplay text-base sm:text-2xl text-white/90 font-light mb-12 italic leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          &ldquo;{PERSONAL_INFO.tagline}&rdquo;
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button
            onClick={() => scrollToSection('#about')}
            className="w-full sm:w-auto px-8 py-4 bg-[#f8f5f0] hover:bg-white text-[#111111] font-display text-xs uppercase tracking-widest font-black transition-all duration-300 shadow-lg hover:-translate-y-0.5 group flex items-center justify-center cursor-pointer"
          >
            Explore My Journey
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection('#treks')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-[#f8f5f0] font-display text-xs uppercase tracking-widest font-black transition-all duration-300 border border-white/35 backdrop-blur-sm shadow-lg flex items-center justify-center cursor-pointer"
          >
            View Trek Portfolio
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="inline-flex flex-col items-center justify-center space-y-2 text-[#495057] hover:text-[#f8f5f0] transition-colors focus:outline-none"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest">Descend Trail</span>
          <div className="w-8 h-12 rounded-full border border-gray-600/50 flex justify-center items-start p-1.5 shadow-inner">
            <div className="w-1.5 h-3 bg-[#6f4e37] rounded-full animate-bounce" />
          </div>
        </button>
      </div>

      {/* Premium vector mountain silhouette overlay at bottom */}
      <div 
        className="absolute bottom-0 inset-x-0 h-28 transform translate-y-1 select-none pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 100%)"
        }}
      />
    </section>
  );
}
