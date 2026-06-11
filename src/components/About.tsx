import React, { useState, useEffect } from 'react';
import { Award, ShieldCheck, Heart, GraduationCap, Compass, HelpCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const [counts, setCounts] = useState({
    treksLed: 0,
    participantsGuided: 0,
    yearsExp: 0,
    peaksExplored: 0,
    safetyRecord: 0
  });

  useEffect(() => {
    const duration = 2000; // ms
    const steps = 50;
    const stepDuration = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        treksLed: Math.min(Math.floor((PERSONAL_INFO.stats.treksLed / steps) * step), PERSONAL_INFO.stats.treksLed),
        participantsGuided: Math.min(Math.floor((PERSONAL_INFO.stats.participantsGuided / steps) * step), PERSONAL_INFO.stats.participantsGuided),
        yearsExp: Math.min(Math.floor((PERSONAL_INFO.stats.yearsExp / steps) * step), PERSONAL_INFO.stats.yearsExp),
        peaksExplored: Math.min(Math.floor((PERSONAL_INFO.stats.peaksExplored / steps) * step), PERSONAL_INFO.stats.peaksExplored),
        safetyRecord: Math.min(Math.floor((100 / steps) * step), 100)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 bg-[#111111] border-b border-[#1b4332]/20 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1b4332]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6f4e37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#2d6a4f] uppercase tracking-[0.25em] font-extrabold block mb-2">
            The Explorer Profile
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight block">
            Meet Manoj Kumar B K
          </h2>
          <div className="w-16 h-1 bg-[#1b4332] mx-auto mt-4" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Showcase (Left Side, 5 Cols) */}
          <div id="bio-photo" className="lg:col-span-5 relative group">
            {/* Background glowing frame */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#1b4332] to-[#6f4e37] rounded-2xl opacity-40 blur-lg group-hover:opacity-60 transition duration-500" />
            
            {/* The actual photo container */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden border-2 border-[#1b4332]/40 shadow-2xl">
              <img
                src="/images/IMG20251012072715.jpg"
                alt="Manoj Kumar B K leading a trek"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="font-mono text-[9px] text-[#2d6a4f] uppercase tracking-widest font-extrabold mb-1">
                  Field Photo • Kudremukha Valley
                </span>
                <p className="font-subdisplay text-sm text-[#f8f5f0] font-light italic">
                  &ldquo;A real leader does not conquer mountains, they coordinate with them.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Biography and Stats (Right Side, 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#6f4e37]/20 border border-[#6f4e37]/40 px-3 py-1 rounded-md text-[#f8f5f0] font-mono text-[10px] tracking-wider uppercase">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Expedition Veteran since 2023</span>
              </div>

              <h3 className="font-subdisplay font-semibold text-2xl text-[#f8f5f0] tracking-tight">
                Engineering precision meets uncompromising wilderness safety.
              </h3>

              <div className="space-y-4 font-sans text-sm text-gray-300 leading-relaxed text-justify">
                <p>{PERSONAL_INFO.bio}</p>
                <p>
                  As an aspiring **Computer Science student**, I bring technological structure and advanced logistics calculations to standard trail planning, allowing us to accurately predict pacing rates, hydration needs, and meteorological hazard buffers.
                </p>
              </div>

              {/* Qualities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start space-x-3 glass p-4 rounded-xl border border-white/10 card-shadow">
                  <div className="p-2 bg-[#1b4332]/30 rounded-lg text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-subdisplay font-semibold text-xs text-[#f8f5f0] uppercase tracking-wider">
                      Safety-First Core
                    </h4>
                    <p className="text-xs text-gray-300 mt-1">
                      100% incident-free safety protocol record in technical monsoon treks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 glass p-4 rounded-xl border border-white/10 card-shadow">
                  <div className="p-2 bg-[#6f4e37]/30 rounded-lg text-amber-500">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-subdisplay font-semibold text-xs text-[#f8f5f0] uppercase tracking-wider">
                      Academic Rigor
                    </h4>
                    <p className="text-xs text-gray-300 mt-1">
                      Integrating algorithmic route mapping and weather telemetry simulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Counters Section */}
            <div className="pt-6 border-t border-white/10">
              <span className="block font-mono text-[10px] text-[#2d6a4f] uppercase tracking-widest mb-6 font-extrabold">
                Expedition Track Record Stats
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="glass p-4 rounded-xl text-center card-shadow border border-white/10">
                  <span className="block font-display font-black text-3xl text-emerald-400">
                    {counts.treksLed}+
                  </span>
                  <span className="block font-mono text-[9px] text-[#fafafa]/80 uppercase mt-1 tracking-wider leading-tight">
                    Treks Led
                  </span>
                </div>

                <div className="glass p-4 rounded-xl text-center card-shadow border border-white/10">
                  <span className="block font-display font-black text-3xl text-amber-500">
                    {counts.participantsGuided}+
                  </span>
                  <span className="block font-mono text-[9px] text-[#fafafa]/80 uppercase mt-1 tracking-wider leading-tight">
                    Hikers Lead
                  </span>
                </div>

                <div className="glass p-4 rounded-xl text-center card-shadow border border-white/10">
                  <span className="block font-display font-black text-3xl text-sky-400">
                    {counts.yearsExp}
                  </span>
                  <span className="block font-mono text-[9px] text-[#fafafa]/80 uppercase mt-1 tracking-wider leading-tight">
                    Active Years
                  </span>
                </div>

                <div className="glass p-4 rounded-xl text-center card-shadow border border-white/10">
                  <span className="block font-display font-black text-3xl text-purple-400">
                    {counts.peaksExplored}+
                  </span>
                  <span className="block font-mono text-[9px] text-[#fafafa]/80 uppercase mt-1 tracking-wider leading-tight">
                    Peaks Handled
                  </span>
                </div>

                <div className="glass p-4 rounded-xl text-center card-shadow border border-white/10 col-span-2 sm:col-span-1">
                  <span className="block font-display font-black text-3xl text-rose-500">
                    {counts.safetyRecord}%
                  </span>
                  <span className="block font-mono text-[9px] text-[#fafafa]/80 uppercase mt-1 tracking-wider leading-tight">
                    Safety Log
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
