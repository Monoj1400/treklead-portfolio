import React, { useState } from 'react';
import { MEMORY_BOOK } from '../data';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? MEMORY_BOOK.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === MEMORY_BOOK.length - 1 ? 0 : prev + 1
    );
  };

  if (!MEMORY_BOOK || MEMORY_BOOK.length === 0) {
    return null;
  }

  const current = MEMORY_BOOK[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#111111] border-b border-[#1b4332]/25 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#1b4332]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#6f4e37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#6f4e37] uppercase tracking-[0.25em] font-extrabold block mb-2">
            Collected Through Every Trek
          </span>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight">
            Trekker Memory Book
          </h2>

          <div className="w-16 h-1 bg-[#6f4e37] mx-auto mt-4" />

          <p className="max-w-2xl mx-auto text-sm text-gray-400 mt-6">
            Real handwritten feedback collected from trekkers throughout my
            journey as a Trek Leader. Every page carries memories, gratitude,
            and stories from unforgettable adventures.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
          {/* Decorative Icon */}
          <div className="flex justify-center mb-6">
            <BookOpen className="w-8 h-8 text-[#6f4e37]" />
          </div>

          {/* Memory Book Image */}
          <div className="flex justify-center">
            <img
              src={current.imageUrl}
              alt={`Memory Book Page ${current.id}`}
              className="w-full max-w-4xl rounded-2xl border border-neutral-800 shadow-2xl object-contain"
            />
          </div>

          {/* Page Number */}
          <div className="text-center mt-6">
            <span className="font-mono text-xs text-gray-500">
              Page {currentIndex + 1} of {MEMORY_BOOK.length}
            </span>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-[#1b4332] transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-[#1b4332] transition-all"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {MEMORY_BOOK.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-[#6f4e37] w-6'
                    : 'bg-neutral-700 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}