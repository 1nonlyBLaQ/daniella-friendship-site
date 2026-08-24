import React from 'react';

export default function FloatingBackground() {
  const elements = [
    { content: "🤍", left: "6%", delay: "0s", speed: "11s", size: "22px" },
    { content: "🫶", left: "15%", delay: "3s", speed: "13s", size: "26px" },
    { content: "💖", left: "28%", delay: "1s", speed: "10s", size: "20px" },
    { content: "✨", left: "50%", delay: "5s", speed: "12s", size: "24px" },
    { content: "💕", left: "70%", delay: "2s", speed: "9s", size: "22px" },
    { content: "🫶", left: "84%", delay: "4s", speed: "14s", size: "28px" },
    { content: "🤍", left: "94%", delay: "1.5s", speed: "10.5s", size: "24px" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Emojis */}
      {elements.map((item, idx) => (
        <div
          key={idx}
          className="floating-heart"
          style={{
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.speed,
            fontSize: item.size,
          }}
        >
          {item.content}
        </div>
      ))}

      {/* Floating Polaroid Photo 1 - Pushed to Far Left Edge */}
      <div 
        className="floating-heart fixed left-2 sm:left-6 w-20 sm:w-28 bg-white p-1.5 rounded-xl shadow-xl border border-rose-200 z-0"
        style={{ animationDelay: "1s", animationDuration: "14s" }}
      >
        <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
          <img src="/images/daniela-01.jpg" alt="Daniella" className="w-full h-full object-cover" />
        </div>
        <p className="text-[10px] text-center text-stone-500 font-medium mt-1">Daniella ✨</p>
      </div>

      {/* Floating Polaroid Photo 2 - Pushed to Far Right Edge */}
      <div 
        className="floating-heart fixed right-2 sm:right-6 w-20 sm:w-28 bg-white p-1.5 rounded-xl shadow-xl border border-rose-200 z-0"
        style={{ animationDelay: "6s", animationDuration: "16s" }}
      >
        <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
          <img src="/images/daniela-02.jpg" alt="Daniella" className="w-full h-full object-cover" />
        </div>
        <p className="text-[10px] text-center text-stone-500 font-medium mt-1">Main character 🤍</p>
      </div>
    </div>
  );
}