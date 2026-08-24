import React, { useState } from 'react';
import { siteConfig } from '../data/contentData';
import { ArrowRight } from 'lucide-react';

export default function StorySection({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const chapters = siteConfig.storyChapters;

  const handleNext = () => {
    if (currentIndex < chapters.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  const chapter = chapters[currentIndex];

  return (
    <div className="relative w-full">
      {/* Raining floating background items & actual photo elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute animate-rain-1 top-0 left-[8%] text-2xl">🤍</div>
        <div className="absolute animate-rain-2 top-0 left-[85%] text-2xl">✨</div>
        <div className="absolute animate-rain-3 top-0 left-[48%] text-xl">😂</div>
        
        {/* Raining Daniella Photos */}
        <div className="absolute animate-rain-photo-1 top-0 left-[15%] w-14 h-18 rounded-xl overflow-hidden shadow-md border-2 border-white/80 bg-white">
          <img src="/images/daniela-01.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute animate-rain-photo-2 top-0 left-[75%] w-14 h-18 rounded-xl overflow-hidden shadow-md border-2 border-white/80 bg-white">
          <img src="/images/daniela-02.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="cute-card p-8 sm:p-10 rounded-3xl page-transition relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-rose-100">
          <div className="h-full bg-rose-500 transition-all duration-500" style={{ width: `${((currentIndex + 1) / chapters.length) * 100}%` }} />
        </div>

        <span className="text-xs uppercase tracking-widest text-rose-500 font-bold mb-3 block">
          Part {currentIndex + 1} of {chapters.length}
        </span>
        
        <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">
          {chapter.title}
        </h2>

        <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
          {chapter.text}
        </p>

        <button
          onClick={handleNext}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-stone-900 text-white font-medium hover:bg-stone-800 transition shadow-sm cursor-pointer"
        >
          <span>{currentIndex === chapters.length - 1 ? "The Question" : "Next"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}