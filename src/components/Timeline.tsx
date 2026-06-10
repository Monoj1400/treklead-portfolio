import React, { useState } from 'react';
import { Compass, Footprints, Flame, Shield, Award, Calendar } from 'lucide-react';
import { TIMELINE_DATA } from '../data';

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-24 bg-[#111111] border-b border-[#1b4332]/25 relative overflow-hidden">
      {/* Curved background path line */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#1b4332]/15 via-[#6f4e37]/40 to-[#1b4332]/10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs text-[#2d6a4f] uppercase tracking-[0.25em] font-extrabold block mb-2">
            The Historical Ascent
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight block">
            Trekking Timeline
          </h2>
          <div className="w-16 h-1 bg-[#1b4332] mx-auto mt-4" />
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-400 mt-4 font-subdisplay">
            A vertical retrospective of Monoj's journey from local boulder hills coordinator to master Western Ghats expedition lead.
          </p>
        </div>

        {/* Timeline Vector Tree */}
        <div className="relative space-y-12 lg:space-y-0">
          {TIMELINE_DATA.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`flex flex-col lg:flex-row items-stretch lg:justify-between relative ${
                  isLeft ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Desktop Central Node Indicator */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 z-20 hidden lg:flex items-center justify-center">
                  <div
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer ${
                      isActive
                        ? 'bg-[#1b4332] border-[#e9c46a] scale-110 shadow-lg shadow-[#1b4332]'
                        : 'bg-neutral-950 border-[#6f4e37]/60 text-gray-500'
                    }`}
                  >
                    <Footprints className={`w-5 h-5 ${isActive ? 'text-[#f8f5f0] animate-pulse' : 'text-[#6f4e37]'}`} />
                  </div>
                </div>

                {/* Content Block (Left or Right, 5 cols equivalent) */}
                <div className="w-full lg:w-[45%] group cursor-pointer">
                  <div
                    className={`bg-neutral-900 border transition-all duration-300 rounded-3xl p-6 relative overflow-hidden shadow-xl ${
                      isActive
                        ? 'border-[#1b4332] bg-neutral-900/90 -translate-y-1 shadow-emerald-950/20'
                        : 'border-neutral-800 bg-neutral-900/60'
                    }`}
                  >
                    {/* Corner category tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded bg-[#111111]/90 border border-neutral-800 text-gray-400">
                        {event.category}
                      </span>
                      <span className="font-display font-black text-sm text-[#6f4e37]">
                        {event.year}
                      </span>
                    </div>

                    <h3
                      className={`font-display font-bold text-lg sm:text-xl uppercase tracking-tight transition-colors ${
                        isActive ? 'text-emerald-400' : 'text-[#f8f5f0]'
                      }`}
                    >
                      {event.title}
                    </h3>
                    <h4 className="font-subdisplay text-xs text-gray-400 font-semibold mt-1 italic">
                      Associated Trails: {event.trekName}
                    </h4>

                    <p className="font-sans text-xs text-gray-300 leading-relaxed mt-4">
                      {event.description}
                    </p>

                    {/* Timeline sub-indicators on mobile */}
                    <div className="mt-6 flex lg:hidden items-center space-x-2 text-[#4d3324] font-mono text-[10px]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Year Registry: {event.year}</span>
                    </div>
                  </div>
                </div>

                {/* Spacer (Central Gap) */}
                <div className="hidden lg:block w-[8%]" />

                {/* Event Photo Column (Left or Right, 45% cols) */}
                <div className="w-full lg:w-[45%] flex items-center justify-center">
                  <div
                    className={`w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] rounded-2xl overflow-hidden border border-neutral-800 relative shadow-lg group transition-all duration-500 ${
                      isActive ? 'scale-[1.02] border-[#2d6a4f]/40' : 'opacity-85'
                    }`}
                  >
                    <img
                      src={event.imageUrl}
                      alt={event.trekName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                      <span className="font-mono text-[8px] text-[#2d6a4f] uppercase tracking-widest font-extrabold block">
                        Historic Capture
                      </span>
                      <span className="font-subdisplay text-xs text-[#f8f5f0] font-semibold">
                        {event.trekName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
