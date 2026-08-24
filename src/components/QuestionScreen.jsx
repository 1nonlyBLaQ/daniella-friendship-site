import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function QuestionScreen({ onYes, onNo }) {
  const [noClicks, setNoClicks] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const playfulMessages = [
    "Waittt 😭",
    "Think about it again.",
    "Wrong button 😂",
    "Are you sure?",
    "Okay last chance..."
  ];

  const handleYesClick = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#f472b6']
    });
    onYes();
  };

  const handleNoHoverOrClick = () => {
    if (noClicks < 4) {
      setNoClicks(noClicks + 1);
      setNoButtonStyle({
        transform: `translate(${(Math.random() - 0.5) * 180}px, ${(Math.random() - 0.5) * 100}px)`,
      });
    } else {
      onNo();
    }
  };

  return (
    <div className="cute-card p-8 sm:p-12 rounded-3xl max-w-xl mx-auto text-center page-transition space-y-6">
      <span className="text-rose-500 font-semibold text-sm block">Okay… I have one question.</span>
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
        I don’t know if you already have a best friend, but I want you to be mine.
      </h2>
      <p className="text-stone-500 text-base">Not just for Bowen. For the years after Bowen too.</p>
      
      <div className="pt-6">
        <p className="text-xl font-serif font-semibold text-stone-900 mb-8">Will you be my best friend? 🤍</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative min-h-[100px]">
          <button
            onClick={handleYesClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-lg shadow-lg shadow-rose-500/30 transition cursor-pointer"
          >
            YES 🥹
          </button>

          <button
            style={noButtonStyle}
            onMouseEnter={handleNoHoverOrClick}
            onClick={handleNoHoverOrClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-600 font-medium text-lg transition border border-stone-200 cursor-pointer relative"
          >
            {noClicks === 0 ? "NO 😭" : playfulMessages[noClicks - 1]}
          </button>
        </div>
      </div>
    </div>
  );
}