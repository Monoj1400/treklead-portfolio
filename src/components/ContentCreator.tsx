import React from 'react';
import { Camera, Eye, Heart, Instagram, Play, QrCode, Sparkles, Share2 } from 'lucide-react';

export default function ContentCreator() {
  const engagementStats = [
    { label: 'Active Followers', value: '12.4K+', icon: Instagram, color: 'text-pink-500' },
    { label: 'Accounts Reached', value: '150K+', icon: Eye, color: 'text-emerald-400' },
    { label: 'Videography Engagement', value: '18%', icon: Heart, color: 'text-rose-500' },
  ];

  const contentThemes = [
    { title: "No-Trace Camping reels", desc: "Showcases standard camp pitching checklists and pristine biodegradable practices.", stat: "42K views" },
    { title: "High Western Ghats drone logs", desc: "Cinematic drone perspectives of early morning low mist patterns.", stat: "105K views" },
    { title: "Gear structural reviews", desc: "Scientific guidelines detailing footwear rubber grids and pack balances.", stat: "28K views" },
  ];

  return (
    <section id="content-creator" className="py-24 bg-[#111111]/90 border-b border-[#1b4332]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#6f4e37] uppercase tracking-[0.25em] font-extrabold block mb-2">
            The Digital Trailblazer
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight block">
            Content Creator Platform
          </h2>
          <div className="w-16 h-1 bg-[#6f4e37] mx-auto mt-4" />
          <p className="max-w-lg mx-auto text-xs sm:text-sm text-gray-400 mt-4 font-subdisplay">
            Monoj leads a thriving outdoor community, creating highly viral content preaching Green Trails stewardship.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Mock Instagram / Phone Feed Preview (Left - 5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm rounded-[32px] border-4 border-neutral-800 bg-black overflow-hidden shadow-2xl shadow-black/90">
              
              {/* Instagram Feed Header */}
              <div className="bg-neutral-900 border-b border-neutral-800 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-0.5">
                    <img
                      src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80"
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-full border-2 border-black"
                    />
                  </div>
                  <div>
                    <span className="block font-sans font-bold text-xs text-[#f8f5f0] leading-tight">myownsaga</span>
                    <span className="block font-mono text-[9px] text-[#2d6a4f] uppercase tracking-widest leading-none font-bold">Nethrvathi</span>
                  </div>
                </div>
                <Instagram className="w-5 h-5 text-gray-400" />
              </div>

              {/* Feed Image */}
              <div className="relative aspect-square overflow-hidden bg-neutral-950">
                <img
                  src="src/images/WhatsApp Image 2026-06-10 at 12.07.00 PM.jpeg"
                  alt="Epic Feed Post"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Reel Play Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white">
                  <Play className="w-4.5 h-4.5 fill-white" />
                </div>
              </div>

              {/* Engagement Controls */}
              <div className="p-4 bg-neutral-900/90 text-gray-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3.5">
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                    <Camera className="w-5 h-5 text-sky-400" />
                    <Share2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="font-mono text-[9px] text-gray-500 font-bold">REEL_OUTREACH</span>
                </div>
                
                {/* Caption Block */}
                <p className="font-sans text-[11px] leading-relaxed text-[#f8f5f0] mb-3">
                  <span className="font-bold mr-1.5">myownsaga</span>
                  Zero visibility fog didn't stop our Nethravathi team! Respecting trails is respecting raw soul of India. #indiahikes #greentrails #nature 🗻🌿
                </p>

                {/* Simulated Stats Bar */}
                <div className="pt-2 border-t border-neutral-800 flex justify-between text-[10px] font-mono text-gray-500 font-semibold">
                  <span>Likes: 75+</span>
                  <span>Shares: 6+</span>
                </div>
              </div>

            </div>
          </div>

          {/* Social metrics & QR Placeholder (Right - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Creator Intro */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-[#2d6a4f] uppercase tracking-widest font-extrabold block">
                  Media Footprint Analysis
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#f8f5f0] uppercase tracking-wide">
                  Building the Brand for Eco-Adventure
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed text-justify">
                  I utilize social media not for self-glory, but to broadcast visual proof of strict trekking hygiene. By demonstrating how we pocket random garbage, maintain hydration tempos, and secure streams, we inspire young climbers to embrace certified trail protocols.
                </p>
              </div>

              {/* Engagement Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {engagementStats.map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={idx} className="bg-neutral-900 border border-neutral-850 p-4 rounded-xl text-center flex flex-col items-center justify-center space-y-1">
                      <StatIcon className={`w-5 h-5 ${stat.color} mb-1`} />
                      <span className="block font-display font-black text-xl text-[#f8f5f0]">{stat.value}</span>
                      <span className="block font-mono text-[9px] text-gray-500 uppercase font-semibold">{stat.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Top Travel Reels theme cards */}
              <div className="space-y-2.5">
                <span className="block font-mono text-[9px] text-gray-500 uppercase tracking-widest font-extrabold">Active Instagram Reels Formats</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {contentThemes.map((theme, i) => (
                    <div key={i} className="bg-neutral-900/60 border border-neutral-850 p-3 rounded-lg flex flex-col justify-between h-28">
                      <div>
                        <h4 className="font-subdisplay font-bold text-[10.5px] uppercase tracking-wider text-[#f8f5f0] line-clamp-1">{theme.title}</h4>
                        <p className="font-sans text-[9px] text-gray-400 mt-1 line-clamp-2 leading-snug">{theme.desc}</p>
                      </div>
                      <span className="font-mono text-[9px] text-emerald-400 font-extrabold self-end mt-2">📈 {theme.stat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* QR Scanner Placeholder Block */}
            <div className="bg-[#1b4332]/10 border border-[#1b4332]/30 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 pointer-events-none select-none">
              <div className="space-y-1 md:max-w-md">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5 leading-none">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Scan and Follow Monoj</span>
                </h4>
                <p className="font-sans text-[11px] text-gray-300 leading-normal text-left">
                  Visual portfolio integration link. QR points directly to Monoj's validated Instagram content feed showcasing live high-altitude videos.
                </p>
              </div>

              <div className="border border-neutral-850 p-3.5 bg-neutral-900 rounded-xl flex items-center justify-center shrink-0">
                <QrCode className="w-16 h-16 text-emerald-400" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
