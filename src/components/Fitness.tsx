import React from 'react';
import { FITNESS_ROUTINES } from '../data';
import { Dumbbell, ShieldAlert, Footprints, Wind, CheckSquare } from 'lucide-react';

export default function Fitness() {
  
  const prepSteps = [
    { title: "Metabolic Load check", desc: "Monitored calorie-burn curves using simulated high-intensity heart monitors.", icon: Wind },
    { title: "Rucksack Weight check", desc: "Rigorous loading check: strictly carrying 22 kg packs during stadium step drills.", icon: Dumbbell },
    { title: "Balance Reflex drills", desc: "Weekly martial arts balance drills to maximize sudden recovery on slippery slopes.", icon: Footprints },
    { title: "Hydration loading protocol", desc: "Systematic 3-day pre-hydration regimen ensuring peak electrolyte balances.", icon: CheckSquare },
  ];

  return (
    <section id="fitness" className="py-24 bg-[#111111]/95 border-b border-[#1b4332]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#2d6a4f] uppercase tracking-[0.25em] font-extrabold block mb-2">
            The Athletic Engine
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight block">
            Fitness & Preparation
          </h2>
          <div className="w-16 h-1 bg-[#1b4332] mx-auto mt-4" />
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-400 mt-4 font-subdisplay">
            A professional trek leader must keep clinical physical conditioning. See how Monoj maintains peak metabolic capability.
          </p>
        </div>

        {/* 2-Column Split: Active Routines Card & Custom Prep Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Active Fitness routines Grid (Left - 7 cols) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            <span className="font-mono text-[10px] text-[#6f4e37] uppercase tracking-widest font-extrabold block mb-1">
              Rigorous Conditioning Routine
            </span>
            <div className="grid grid-cols-1 gap-4">
              {FITNESS_ROUTINES.map((routine) => (
                <div
                  key={routine.id}
                  className="bg-neutral-900 border border-neutral-800 hover:border-[#2d6a4f]/50 p-6 rounded-2xl transition-all duration-300 shadow-md group hover:bg-[#111111]/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="space-y-2 max-w-lg">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 rounded-lg bg-[#111111] text-[#2d6a4f] border border-neutral-800 group-hover:scale-105 transition-transform">
                        <Dumbbell className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-[#f8f5f0] uppercase tracking-wider">
                        {routine.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs text-gray-400 leading-relaxed text-left">
                      {routine.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex sm:flex-col items-start sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-neutral-800 pt-3 sm:pt-0 sm:pl-6 gap-2">
                    <div>
                      <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-widest">Intensity Status</span>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-wider font-extrabold mt-1 ${
                        routine.intensity === 'Extreme'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-400/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-400/20'
                      }`}>
                        {routine.intensity}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-widest">Duration</span>
                      <span className="block font-sans text-xs text-gray-300 font-semibold mt-0.5">{routine.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Pre-Trek Preparation (Right - 5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-black/80 relative overflow-hidden">
            <div className="space-y-6">
              <div className="pb-4 border-b border-neutral-800">
                <span className="font-mono text-[9px] text-[#2d6a4f] uppercase tracking-widest font-extrabold block mb-1">
                  Systematic Operations Checklist
                </span>
                <h3 className="font-display font-extrabold text-lg text-[#f8f5f0] uppercase tracking-tight">
                  Trek Prep Process
                </h3>
              </div>

              {/* Progress Stepper list */}
              <div className="space-y-6">
                {prepSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={index} className="flex space-x-4 items-start">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#1b4332] text-[#f8f5f0] flex items-center justify-center font-mono text-xs font-black border border-[#2d6a4f]">
                          0{index + 1}
                        </div>
                        {index < prepSteps.length - 1 && (
                          <div className="w-0.5 h-10 bg-neutral-800 mt-2" />
                        )}
                      </div>
                      <div className="space-y-1 pt-0.5">
                        <h4 className="font-subdisplay font-bold text-xs uppercase tracking-wider text-[#f8f5f0] flex items-center space-x-1.5">
                          <StepIcon className="w-3.5 h-3.5 text-amber-500" />
                          <span>{step.title}</span>
                        </h4>
                        <p className="font-sans text-[11px] text-gray-400 leading-normal text-left">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recruiter Vetting Callout */}
            <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center space-x-3 text-xs text-[#2d6a4f] font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-gray-400 text-[10px]">VERIFIED ATHLETIC RECORD CLEARED</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
