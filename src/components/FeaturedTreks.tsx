import React, { useState } from 'react';
import { TREKS_DATA } from '../data';
import { Trek } from '../types';
import { Calendar, Compass, ShieldAlert, BookOpen, AlertCircle, Mountain, Clock, ChevronRight, X, Heart, Eye } from 'lucide-react';

export default function FeaturedTreks() {
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');

  const filteredTreks = filterDifficulty === 'All'
    ? TREKS_DATA
    : TREKS_DATA.filter(t => t.difficulty === filterDifficulty);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20';
      case 'Moderate': return 'bg-amber-500/10 text-amber-400 border-amber-400/20';
      case 'Difficult': return 'bg-rose-500/10 text-rose-400 border-rose-400/20';
      default: return 'bg-neutral-500/10 text-neutral-400 border-neutral-500/20';
    }
  };

  return (
    <section id="treks" className="py-24 bg-[#111111]/95 border-b border-[#1b4332]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs text-[#2d6a4f] uppercase tracking-[0.25em] font-extrabold block mb-2">
              The Expedition Dossier
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight block">
              Featured Trek Portfolio
            </h2>
            <div className="w-16 h-1 bg-[#1b4332] mt-4" />
          </div>

          {/* Difficulty Filter Bar */}
          <div className="flex items-center space-x-2 bg-[#111111] p-1.5 rounded-xl border border-neutral-800 self-start md:self-end">
            {['All', 'Moderate', 'Difficult'].map((diff) => (
              <button
                key={diff}
                onClick={() => setFilterDifficulty(diff)}
                className={`px-4 py-2 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  filterDifficulty === diff
                    ? 'bg-[#1b4332] text-[#f8f5f0] font-bold border border-[#2d6a4f]'
                    : 'text-gray-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {diff} Treks
              </button>
            ))}
          </div>
        </div>

        {/* 11 Treks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreks.map((trek) => (
            <div
              key={trek.id}
              onClick={() => setSelectedTrek(trek)}
              className="glass border border-white/10 hover:border-white/30 rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between card-shadow hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Banner Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={trek.imageUrl}
                  alt={trek.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Difficulty overlay badge */}
                <span className={`absolute top-4 right-4 px-3 py-1 text-[8px] font-mono font-black uppercase tracking-wider rounded-full border ${getDifficultyColor(trek.difficulty)}`}>
                  {trek.difficulty}
                </span>

                {/* Altitude Quick badge bottom left */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-800/60 font-mono text-[10px] text-gray-300">
                  🗻 {trek.altitude}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#f8f5f0] uppercase tracking-wide group-hover:text-emerald-300 transition-colors">
                    {trek.name}
                  </h3>
                  <p className="font-sans text-xs text-gray-300 line-clamp-3 leading-relaxed">
                    {trek.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 text-[10px] font-mono text-gray-400">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#6f4e37]" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#2d6a4f]" />
                    <span>{trek.distance}</span>
                  </div>
                </div>

                <button className="mt-5 w-full py-2.5 glass text-[#f8f5f0] hover:bg-[#f8f5f0] hover:text-[#111111] hover:border-transparent border border-white/10 rounded-xl font-mono text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center space-x-1.5 card-shadow cursor-pointer">
                  <span>Analyze Log Book</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Immersive Modal Overlay Drawer */}
        {selectedTrek && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="glass border border-white/20 rounded-3xl w-full max-w-5xl h-[90vh] overflow-y-auto card-shadow relative scrollbar-none">
              
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedTrek(null)}
                className="absolute top-6 right-6 z-30 p-2.5 rounded-full glass hover:bg-white hover:text-black text-[#f8f5f0] transition-colors card-shadow"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner Cover aspect-video style */}
              <div className="relative h-64 sm:h-96 w-full overflow-hidden">
                <img
                  src={selectedTrek.imageUrl}
                  alt={selectedTrek.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className={`px-3 py-1 text-[8px] font-mono font-black uppercase tracking-wider rounded-full border ${getDifficultyColor(selectedTrek.difficulty)} inline-block mb-3`}>
                    {selectedTrek.difficulty} Profile
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-[#f8f5f0] uppercase tracking-tight">
                    {selectedTrek.name} Log
                  </h3>
                </div>
              </div>

              {/* Informative Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 border-b border-white/10 bg-black/60">
                <div className="glass border border-white/10 p-4 rounded-2xl card-shadow">
                  <span className="block font-mono text-[9px] text-[#2d6a4f] uppercase tracking-widest leading-none mb-1">Peak Altitude</span>
                  <span className="font-display font-extrabold text-sm text-[#f8f5f0]">{selectedTrek.altitude}</span>
                </div>
                <div className="glass border border-white/10 p-4 rounded-2xl card-shadow">
                  <span className="block font-mono text-[9px] text-[#6f4e37] uppercase tracking-widest leading-none mb-1">Trail Distance</span>
                  <span className="font-display font-extrabold text-sm text-[#f8f5f0]">{selectedTrek.distance}</span>
                </div>
                <div className="glass border border-white/10 p-4 rounded-2xl card-shadow">
                  <span className="block font-mono text-[9px] text-sky-400 uppercase tracking-widest leading-none mb-1">Trek Duration</span>
                  <span className="font-display font-extrabold text-sm text-[#f8f5f0]">{selectedTrek.duration}</span>
                </div>
                <div className="glass border border-white/10 p-4 rounded-2xl card-shadow">
                  <span className="block font-mono text-[9px] text-amber-500 uppercase tracking-widest leading-none mb-1">Best Season</span>
                  <span className="font-display font-extrabold text-xs text-[#f8f5f0]">{selectedTrek.bestSeason}</span>
                </div>
                <div className="glass border border-white/10 p-4 rounded-2xl card-shadow col-span-2 md:col-span-1">
                  <span className="block font-mono text-[9px] text-rose-500 uppercase tracking-widest leading-none mb-1">Elevation Gain</span>
                  <span className="font-display font-extrabold text-sm text-[#f8f5f0]">+{selectedTrek.elevationGain}</span>
                </div>
              </div>

              {/* Deep Content Layout Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
                
                {/* Left Story Column (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Detailed Description */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-[#2d6a4f] uppercase tracking-widest font-extrabold">About The Mountain</span>
                    <p className="font-sans text-sm text-gray-300 leading-relaxed text-justify">{selectedTrek.description}</p>
                  </div>

                  {/* Leader Role Statement */}
                  <div className="bg-neutral-900 border border-neutral-800/80 p-5 rounded-2xl space-y-2">
                    <span className="font-mono text-[10px] text-amber-500 uppercase tracking-widest font-extrabold">My Assignment Role</span>
                    <p className="font-sans text-sm text-gray-300 font-semibold">{selectedTrek.myRole}</p>
                  </div>

                  {/* The Experience Narrative */}
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-[#6f4e37] uppercase tracking-widest font-extrabold block">Expedition Storybook</span>
                    <blockquote className="font-subdisplay text-sm text-gray-200 border-l-2 border-[#1b4332] pl-4 italic leading-relaxed text-justify">
                      &ldquo;{selectedTrek.experienceStory}&rdquo;
                    </blockquote>
                  </div>

                  {/* High Quality Gallery (Unsplash Images in detailed view) */}
                  <div className="space-y-3 pt-4">
                    <span className="font-mono text-[10px] text-[#2d6a4f] uppercase tracking-widest font-extrabold block">Topological Survey Gallery</span>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedTrek.gallery.map((imgUrl, idx) => (
                        <div key={idx} className="aspect-video rounded-lg overflow-hidden border border-neutral-800">
                          <img
                            src={imgUrl}
                            alt="Survey"
                            className="w-full h-full object-cover select-none"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Leadership Operations Case studies (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Challenges faced card */}
                  <div className="bg-rose-500/5 border border-rose-500/20 p-5 rounded-2xl space-y-3">
                    <div className="flex items-center space-x-2.5 text-rose-400">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span className="font-display font-extrabold text-xs uppercase tracking-wider">Unanticipated Failures</span>
                    </div>
                    <p className="font-sans text-xs text-gray-300 leading-relaxed text-left">
                      {selectedTrek.challengesFaced}
                    </p>
                  </div>

                  {/* Leadership Responsibilities */}
                  <div className="bg-[#1b4332]/10 border border-[#1b4332]/30 p-5 rounded-2xl space-y-4">
                    <div className="flex items-center space-x-2.5 text-emerald-400">
                      <Compass className="w-5 h-5 shrink-0" />
                      <span className="font-display font-extrabold text-xs uppercase tracking-wider">Active Leadership Actions</span>
                    </div>
                    <ul className="space-y-2.5">
                      {selectedTrek.leadershipResponsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-[#6f4e37] font-bold text-xs">✔️</span>
                          <span className="font-sans text-xs text-gray-300 leading-relaxed text-left">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lessons learned */}
                  <div className="bg-[#6f4e37]/10 border border-[#6f4e37]/30 p-5 rounded-2xl space-y-3">
                    <div className="flex items-center space-x-2.5 text-amber-500">
                      <BookOpen className="w-5 h-5 shrink-0" />
                      <span className="font-display font-extrabold text-xs uppercase tracking-wider">Operational Lessons Loaded</span>
                    </div>
                    <p className="font-sans text-xs text-gray-300 italic leading-relaxed text-left">
                      {selectedTrek.lessonsLearned}
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom Quick Bar actions */}
              <div className="p-6 border-t border-neutral-800 bg-neutral-900/40 flex items-center justify-between">
                <div className="font-mono text-[9px] text-gray-500">
                  REF_REGISTRY // MONOJ_KUMAR_{selectedTrek.id.toUpperCase()}
                </div>
                <button
                  onClick={() => setSelectedTrek(null)}
                  className="px-5 py-2.5 bg-[#6f4e37] hover:bg-[#5c3e29] rounded-xl text-neutral-100 font-mono text-[10px] uppercase tracking-wider transition-all"
                >
                  Close Document Logs
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
