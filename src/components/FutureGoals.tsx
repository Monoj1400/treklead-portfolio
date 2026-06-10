import React, { useState } from 'react';
import { FUTURE_ROADMAP } from '../data';
import { Target, CircleCheck } from 'lucide-react';

export default function FutureGoals() {
  const [activeYear, setActiveYear] = useState<string>('Late 2026');

  const currentGoal =
    FUTURE_ROADMAP.find((g) => g.year === activeYear) ||
    FUTURE_ROADMAP[0];

  return (
    <section
      id="future"
      className="py-24 bg-[#111111] border-b border-[#1b4332]/25 relative overflow-hidden"
    >
      {/* Background radial overlays */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#1b4332]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#6f4e37] uppercase tracking-[0.25em] font-extrabold block mb-2">
            The Long-Term Ascent
          </span>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight block">
            Future Goals Roadmap
          </h2>

          <div className="w-16 h-1 bg-[#6f4e37] mx-auto mt-4" />

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-400 mt-4 font-subdisplay">
            Monoj's operational progression plan: systematically preparing to
            scale from certified Himalayan guides to premier national expedition
            commanders.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Roadmap Navigation */}
          <div className="lg:col-span-6 relative flex flex-col justify-center py-6">
            <div className="absolute left-[39px] sm:left-[47px] top-6 bottom-6 w-1 bg-gradient-to-b from-[#1b4332] via-[#6f4e37] to-neutral-800" />

            <div className="space-y-8 relative z-10">
              {FUTURE_ROADMAP.map((goal) => {
                const isActive = goal.year === activeYear;

                return (
                  <div
                    key={goal.year}
                    onClick={() => setActiveYear(goal.year)}
                    className="flex items-center space-x-6 cursor-pointer group"
                  >
                    {/* Node */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center shrink-0 ${
                        isActive
                          ? 'bg-[#1b4332] border-[#e9c46a] scale-110 shadow-lg shadow-[#1b4332]'
                          : 'bg-neutral-900 border-neutral-800 text-gray-500 hover:border-gray-600'
                      }`}
                    >
                      <Target
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          isActive
                            ? 'text-[#f8f5f0] animate-spin'
                            : 'text-gray-500'
                        }`}
                      />
                    </div>

                    {/* Label */}
                    <div className="flex-1">
                      <span
                        className={`block font-display font-black text-sm uppercase tracking-wider ${
                          isActive
                            ? 'text-emerald-400'
                            : 'text-gray-500 group-hover:text-gray-300'
                        }`}
                      >
                        {goal.year} Milestones
                      </span>

                      <h4
                        className={`font-subdisplay font-bold text-xs sm:text-sm uppercase tracking-tight mt-0.5 ${
                          isActive
                            ? 'text-[#f8f5f0] font-semibold'
                            : 'text-[#495057]'
                        }`}
                      >
                        {goal.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[400px]">
            <div className="space-y-6">
              {/* Header */}
              <div className="pb-4 border-b border-neutral-800">
                <span className="font-mono text-[9px] text-[#2d6a4f] uppercase tracking-widest font-extrabold block mb-1">
                  Active Roadmap Node Analysis
                </span>

                <div className="flex items-center space-x-2">
                  <span className="font-display font-black text-2xl text-emerald-400">
                    {currentGoal.year}
                  </span>

                  <span className="text-gray-600 font-bold">|</span>

                  <span className="font-subdisplay font-bold text-sm uppercase tracking-wide text-gray-300">
                    {currentGoal.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed text-left">
                {currentGoal.description}
              </p>

              {/* Milestones */}
              <div className="space-y-4 pt-4 border-t border-neutral-800">
                <span className="block font-mono text-[9px] text-[#6f4e37] uppercase tracking-widest font-extrabold mb-1">
                  Certification & Skills Agenda
                </span>

                <div className="grid grid-cols-1 gap-2.5">
                  {currentGoal.milestones?.map((ms, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2.5 bg-[#111111] border border-neutral-800 p-3.5 rounded-xl"
                    >
                      <CircleCheck className="w-4 h-4 text-emerald-400 shrink-0" />

                      <span className="font-subdisplay text-xs text-gray-300 font-semibold">
                        {ms}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between font-mono text-[9px] text-gray-500">
              <span>TARGET REGISTRY // ROADMAP_2026_2030</span>

              <span className="text-amber-500 font-bold uppercase">
                ● ROADMAP LOADED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}