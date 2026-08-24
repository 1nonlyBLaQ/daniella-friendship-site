    import React from 'react';
import { siteConfig } from '../data/contentData';

export default function MemoryGallery() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Memory Lane</h2>
        <p className="text-slate-400 text-sm mt-2">A few snapshots along the way.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteConfig.memories.map((mem, index) => (
          <div 
            key={mem.id} 
            className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-xl transform transition hover:-translate-y-1 duration-300 group"
          >
            <div className="aspect-[4/5] bg-slate-950 rounded-xl overflow-hidden mb-4 relative">
              <img 
                src={mem.src} 
                alt={mem.caption} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                onError={(e)=>{
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80";
                }}
              />
            </div>
            <p className="text-sm text-slate-300 text-center font-medium">{mem.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}