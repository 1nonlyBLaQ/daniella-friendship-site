import React, { useState } from 'react';
import { siteConfig } from '../data/contentData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoSection({ onNext }) {
  const videos = siteConfig.videosUs;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onNext();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const currentVid = videos[currentIndex];

  return (
    <div className="cute-card p-6 sm:p-8 rounded-3xl page-transition max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-serif font-bold text-stone-900">Us In Motion</h2>
          <p className="text-stone-400 text-xs">Slide {currentIndex + 1} of {videos.length}</p>
        </div>
        <span className="px-3 py-1 bg-rose-100 text-rose-600 text-xs font-bold rounded-full">Memories</span>
      </div>

      {/* PowerPoint Wipe Animation Container */}
      <div key={currentIndex} className="animate-wipe-next">
        <div className="w-full aspect-video bg-stone-950 rounded-2xl overflow-hidden shadow-lg relative flex items-center justify-center mb-4">
          <video 
            controls 
            preload="metadata"
            className="w-full h-full object-cover"
            src={currentVid.src}
          />
        </div>
        <p className="text-stone-700 text-center font-medium mb-6 text-sm">{currentVid.caption}</p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition flex items-center space-x-1 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed bg-stone-100 text-stone-400' : 'bg-rose-50 text-rose-600 hover:bg-rose-100 cursor-pointer'}`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Prev</span>
        </button>

        <div className="flex space-x-1.5">
          {videos.map((_, idx) => (
            <span key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-5 bg-rose-500' : 'w-1.5 bg-stone-200'}`} />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="px-5 py-2 rounded-xl bg-rose-500 text-white text-sm font-medium hover:bg-rose-600 transition flex items-center space-x-1 shadow-sm cursor-pointer"
        >
          <span>{currentIndex === videos.length - 1 ? "Her Section →" : "Next Slide"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}