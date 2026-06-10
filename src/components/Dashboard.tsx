import React, { useState } from 'react';
import { Compass, Users, Sunrise, Sunset, Moon, TrendingUp, Mountain, Activity, Award, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { DASHBOARD_METRICS, PERSONAL_INFO } from '../data';

// Maps string icons to actual components
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Compass,
  Users,
  SunDim: Sunrise,
  Moon,
  TrendingUp,
  Mountain
};

export default function Dashboard() {
  const [selectedTopic, setSelectedTopic] = useState<'safety' | 'logistics' | 'permit' | 'evac'>('safety');

  const recruiterNotes = {
    safety: {
      title: "Green Trails & Safety Clearance Model",
      body: "Uncompromising adherence to wilderness protocols. Enforces mandatory buddy systems, keeps continuous logs of climate alerts, and conducts physical and gear audits before mounting. Maintain a perfect 100% incident-free safety archive.",
      compliance: "Indiahikes Certified Protocol Compliant",
      checklist: ["Zero-trace waste tracking", "1:15 Guide-to-climber redundancy ratio", "Immediate satellite GPX fallback mapping"]
    },
    logistics: {
      title: "Climbing Logistics & Technical Calculations",
      body: "Integrates computer-science-based route optimization calculations. Calculates altitude metabolic rates and water depletion intervals based on trail steepness profiles, leading to highly consistent pacing patterns.",
      compliance: "Advanced Computational Navigation Model",
      checklist: ["Dehydrated high-calorie pack allocations", "Staggered sub-batching formulas", "Optimal weather ascent-windows matching"]
    },
    permit: {
      title: "Government Liaison & Legal Clearances",
      body: "Maintains pristine relationships with Karnataka state wildlife boards including Kudremukha National Wildlife and Chikkaballapur local forest ranges. Navigates complex entry clearance quotas.",
      compliance: "Preregistered Local Range Cleared",
      checklist: ["Online/Offline state permit logistics", "Preregistered group liability waivers", "Eco-tax clearance administration"]
    },
    evac: {
      title: "Nocturnal & Extreme Climatic Rescue Plans",
      body: "Specializes in complex night cave navigations and sudden monsoonal flash-flood evacuation patterns. Holds comprehensive wilderness medical diagnostic modules with redundant support items.",
      compliance: "Emergency Wilderness Rescue Drills Stable",
      checklist: ["Paced asthma-crisis stabilizers", "Monsoon high-river human-chain setups", "Direct liaison with range forest outposts"]
    },
  };

  return (
    <section id="dashboard" className="py-24 bg-[#111111]/95 border-b border-[#1b4332]/25 relative">
      {/* Visual background details */}
      <div className="absolute inset-0 bg-[radial-gradient(#1b4332_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs text-[#6f4e37] uppercase tracking-[0.25em] font-extrabold block mb-2">
              Recruiter Analytics Command
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight block">
              Trek Leader Dashboard
            </h2>
            <div className="w-16 h-1 bg-[#6f4e37] mt-4" />
          </div>
          <div className="md:max-w-md bg-neutral-900 border border-[#1b4332]/30 p-4 rounded-xl">
            <p className="font-mono text-[10px] text-gray-400 leading-normal">
              <span className="text-emerald-400 font-bold uppercase">● LIVE METRIC VAULT</span> | Real-time trail validation metrics for Indiahikes, Trek The Himalayas, and Bikat Adventures administrative vetting.
            </p>
          </div>
        </div>

        {/* Infographic Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {DASHBOARD_METRICS.map((metric) => {
            const IconComponent = IconMap[metric.icon] || Compass;
            return (
              <div
                key={metric.id}
                className="glass border border-white/10 hover:border-white/35 hover:bg-[#1b4332]/35 rounded-2xl p-5 sm:p-6 transition-all duration-300 transform hover:-translate-y-1 card-shadow group flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 ${metric.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[9px] text-gray-500 font-semibold">0{metric.id}</span>
                </div>
                <div>
                  <span className="block font-display font-black text-2xl sm:text-3xl text-[#f8f5f0] tracking-tight group-hover:text-emerald-300 transition-colors">
                    {metric.value}
                  </span>
                  <span className="block font-subdisplay text-[10px] text-gray-300 uppercase tracking-wider font-semibold mt-1">
                    {metric.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiter Vetting Section */}
        <div className="glass border border-white/10 rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch card-shadow">
          {/* Controls Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-3">
            <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest font-extrabold block mb-3">
              Operational Competencies
            </span>
            {[
              { id: 'safety', label: 'Safety & Green Trails', desc: '100% incident-free safety framework' },
              { id: 'logistics', label: 'Logistics Calculus', desc: 'Data-driven route & rationing templates' },
              { id: 'permit', label: 'Permit & Liaison', desc: 'Local forest office relationships' },
              { id: 'evac', label: 'Emergency Rescue', desc: 'Active flash evacuation skills' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedTopic(btn.id as any)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  selectedTopic === btn.id
                    ? 'bg-[#1b4332]/80 border-white/20 text-[#f8f5f0] card-shadow font-semibold'
                    : 'bg-[#111111]/30 border-white/5 text-gray-400 hover:text-white hover:bg-[#111111]/75'
                }`}
              >
                <div className="font-subdisplay text-xs uppercase tracking-wide">{btn.label}</div>
                <div className={`font-mono text-[9px] mt-0.5 ${selectedTopic === btn.id ? 'text-emerald-300' : 'text-gray-500'}`}>
                  {btn.desc}
                </div>
              </button>
            ))}
          </div>

          {/* Details Preview Panel (8 cols) */}
          <div className="lg:col-span-8 glass border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between card-shadow">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-800">
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#f8f5f0] uppercase tracking-tight">
                  {recruiterNotes[selectedTopic].title}
                </h3>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-mono text-[8px] uppercase tracking-wider font-extrabold self-start sm:self-center">
                  {recruiterNotes[selectedTopic].compliance}
                </span>
              </div>
              <p className="font-sans text-sm text-gray-300 leading-relaxed pt-2">
                {recruiterNotes[selectedTopic].body}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <span className="block font-mono text-[10px] text-[#6f4e37] uppercase tracking-widest font-extrabold mb-3">
                Key Protocol Verifications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {recruiterNotes[selectedTopic].checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 bg-neutral-900 border border-neutral-800/80 p-3 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#2d6a4f] shrink-0" />
                    <span className="font-subdisplay text-[10px] text-gray-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
