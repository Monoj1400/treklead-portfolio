import React, { useState } from 'react';
import { LEADERSHIP_STORIES } from '../data';
import { Compass, AlertTriangle, PlayCircle, ShieldCheck, Flame, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';

export default function LeadershipStories() {
  const [activeStoryId, setActiveStoryId] = useState<string>("story-1");

  const currentStory = LEADERSHIP_STORIES.find(s => s.id === activeStoryId) || LEADERSHIP_STORIES[0];

  return (
    <section id="stories" className="py-24 bg-[#111111]/95 border-b border-[#1b4332]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#2d6a4f] uppercase tracking-[0.25em] font-extrabold block mb-2">
            STAR CASE STUDIES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight block">
            Moments That Shaped Me
          </h2>
          <div className="w-16 h-1 bg-[#1b4332] mx-auto mt-4" />
          <p className="max-w-md mx-auto text-xs sm:text-sm text-gray-400 mt-4 font-subdisplay">
            Behind every peak is an operational emergency navigated with absolute maturity. Read Monoj's real-life leader incident logs.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Story Selector List (Left Side - 5 columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
            {LEADERSHIP_STORIES.map((story) => {
              const isActive = story.id === activeStoryId;
              return (
                <button
                  key={story.id}
                  onClick={() => setActiveStoryId(story.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                    isActive
                      ? 'bg-neutral-900 border-[#1b4332] text-white shadow-lg'
                      : 'bg-neutral-900/40 border-neutral-800 text-gray-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  <div className="space-y-1 pr-4">
                    <span className="font-mono text-[9px] text-[#2d6a4f] uppercase tracking-wider font-extrabold block">
                      EXPEDITION INCIDENT
                    </span>
                    <h4 className="font-display font-bold text-xs sm:text-[13px] uppercase tracking-wide leading-snug">
                      {story.title}
                    </h4>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-[#e9c46a] translate-x-1' : 'text-gray-600 group-hover:text-white'}`} />
                </button>
              );
            })}
          </div>

          {/* Immersive STAR Breakdown Details (Right Side - 7 columns) */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#1b4332]/35 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-black/85">
            
            {/* Corner Decorative Icon Watermark */}
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Compass className="w-40 h-40" />
            </div>

            <div className="space-y-6 relative z-10">
              {/* Header Title */}
              <div className="pb-4 border-b border-neutral-800">
                <span className="font-mono text-[9px] text-[#6f4e37] uppercase tracking-[0.2em] font-extrabold block mb-1">
                  Active Log: STAR + L Review Sheet
                </span>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#f8f5f0] uppercase tracking-wide">
                  {currentStory.title}
                </h3>
              </div>

              {/* STAR Layout Block */}
              <div className="space-y-5">
                {/* PROBLEM */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                  <span className="md:col-span-3 inline-flex items-center space-x-1.5 font-mono text-[9px] font-black uppercase tracking-widest text-rose-400 py-1 px-2.5 bg-rose-400/5 border border-rose-400/20 rounded-md max-w-fit">
                    <AlertTriangle className="w-3 h-3 shrink-0" />
                    <span>Problem</span>
                  </span>
                  <p className="md:col-span-9 font-sans text-xs text-slate-350 leading-relaxed text-left">
                    {currentStory.problem}
                  </p>
                </div>

                {/* ACTION */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                  <span className="md:col-span-3 inline-flex items-center space-x-1.5 font-mono text-[9px] font-black uppercase tracking-widest text-[#2d6a4f] py-1 px-2.5 bg-[#2d6a4f]/5 border border-[#2d6a4f]/20 rounded-md max-w-fit">
                    <PlayCircle className="w-3 h-3 shrink-0" />
                    <span>Action</span>
                  </span>
                  <p className="md:col-span-9 font-sans text-xs text-slate-350 leading-relaxed text-left">
                    {currentStory.action}
                  </p>
                </div>

                {/* RESULT */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                  <span className="md:col-span-3 inline-flex items-center space-x-1.5 font-mono text-[9px] font-black uppercase tracking-widest text-sky-400 py-1 px-2.5 bg-sky-400/5 border border-sky-400/20 rounded-md max-w-fit">
                    <ShieldCheck className="w-3 h-3 shrink-0" />
                    <span>Result</span>
                  </span>
                  <p className="md:col-span-9 font-sans text-xs text-slate-350 leading-relaxed text-left">
                    {currentStory.result}
                  </p>
                </div>

                {/* LESSON */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start pt-3 border-t border-dashed border-neutral-800">
                  <span className="md:col-span-3 inline-flex items-center space-x-1.5 font-mono text-[9px] font-black uppercase tracking-widest text-amber-500 py-1 px-2.5 bg-amber-500/5 border border-amber-500/20 rounded-md max-w-fit">
                    <BookOpen className="w-3 h-3 shrink-0" />
                    <span>Lesson</span>
                  </span>
                  <p className="md:col-span-9 font-sans text-xs text-amber-100 italic leading-relaxed text-left">
                    {currentStory.lesson}
                  </p>
                </div>
              </div>
            </div>

            {/* Verification Footer footer link */}
            <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between text-[9px] font-mono text-gray-500 relative z-10">
              <span>LEDGER ID // BENGALURU_WILD_LOGS</span>
              <span className="text-[#2d6a4f] font-bold uppercase">● APPROVED INCIDENT LOG</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
