import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Sunrise', 'Mountain Peaks', 'Group Photos', 'Camping', 'Leadership Moments', 'Nature Photography'];

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIdx = lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1;
      setLightboxIndex(prevIdx);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIdx = lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1;
      setLightboxIndex(nextIdx);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#111111] border-b border-[#1b4332]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Block */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#6f4e37] uppercase tracking-[0.25em] font-extrabold block mb-2">
            The Visual Archive
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight block">
            TREK GALLERY
          </h2>
          <div className="w-16 h-1 bg-[#6f4e37] mx-auto mt-4 mb-6" />
          
          {/* Scrollable Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-[10px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1b4332] text-white font-extrabold border border-white/20 card-shadow'
                    : 'glass border border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest Style Column Grid / Columns layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden border border-white/10 group cursor-pointer glass hover:-translate-y-1 transition-all duration-300 card-shadow"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 p-6 flex flex-col justify-end">
                <span className="font-mono text-[8px] text-[#2d6a4f] uppercase tracking-widest font-extrabold block mb-1">
                  {image.category}
                </span>
                <h4 className="font-display font-black text-sm text-[#f8f5f0] uppercase tracking-wider">
                  {image.title}
                </h4>
                <p className="font-sans text-[10.5px] text-gray-300 mt-1">
                  {image.desc}
                </p>
                <div className="mt-3 flex items-center space-x-1 font-mono text-[9px] text-[#e9c46a]">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge Lens</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal Carousel */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Close indicator */}
            <div className="absolute top-6 right-6 flex items-center space-x-4">
              <span className="font-mono text-xs text-slate-400">
                Image {lightboxIndex + 1} of {filteredImages.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-[#1b4332] text-white hover:bg-[#6f4e37] border border-[#2d6a4f]/40 relative z-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Handles */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-10 z-50 p-3 rounded-full bg-neutral-900 hover:bg-[#1b4332] text-white border border-neutral-800"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-10 z-50 p-3 rounded-full bg-neutral-900 hover:bg-[#1b4332] text-white border border-neutral-800"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Image Container */}
            <div className="max-w-4xl max-h-[70vh] relative z-40 select-none">
              <img
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].title}
                className="max-h-[70vh] rounded-2xl mx-auto border border-neutral-800 object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Details Footer under Lightbox */}
            <div className="mt-6 text-center max-w-xl px-4">
              <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-extrabold mb-1 block">
                {filteredImages[lightboxIndex].category} Survey
              </span>
              <h3 className="font-display font-bold text-xl text-[#f8f5f0] uppercase tracking-wide">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="font-sans text-xs text-gray-400 mt-2">
                {filteredImages[lightboxIndex].desc}
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
