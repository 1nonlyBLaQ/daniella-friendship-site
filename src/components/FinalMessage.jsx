import React, { useState } from 'react';
import { siteConfig } from '../data/contentData';
import { HeartHandshake, Sparkles, PartyPopper, Smile, Heart, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FinalMessage() {
  const [likes, setLikes] = useState(0);

  const triggerExtraConfetti = () => {
    setLikes(prev => prev + 1);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#fb7185', '#a855f7', '#3b82f6', '#f59e0b']
    });
  };

  return (
    <div className="cute-card p-8 sm:p-10 rounded-3xl max-w-xl mx-auto text-center page-transition space-y-6 relative overflow-hidden">
      
      {/* Floating Bouncing Emojis Background in the Card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <span className="absolute top-4 left-6 text-2xl animate-bounce" style={{ animationDuration: '3s' }}>😂</span>
        <span className="absolute top-12 right-8 text-2xl animate-bounce" style={{ animationDuration: '2.5s' }}>🤍</span>
        <span className="absolute bottom-12 left-10 text-2xl animate-bounce" style={{ animationDuration: '3.5s' }}>✨</span>
        <span className="absolute bottom-6 right-12 text-2xl animate-bounce" style={{ animationDuration: '2.8s' }}>🤝</span>
      </div>

      {/* Top Animated Icon */}
      <div className="relative z-10">
        <div className="inline-flex p-4 rounded-full bg-rose-100 text-rose-500 shadow-sm animate-pulse mb-2">
          <HeartHandshake className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900 flex items-center justify-center gap-2">
          Thank You, Daniella! <PartyPopper className="w-6 h-6 text-rose-500 animate-spin" style={{ animationDuration: '8s' }} />
        </h2>
      </div>

      {/* Appreciation Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 relative z-10 py-1">
        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full flex items-center gap-1 shadow-sm">
          <Smile className="w-3.5 h-3.5" /> Certified Vibe
        </span>
        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full flex items-center gap-1 shadow-sm">
          <Award className="w-3.5 h-3.5" /> Best COD Partner 😂
        </span>
        <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-semibold rounded-full flex items-center gap-1 shadow-sm">
          <Heart className="w-3.5 h-3.5" /> Forever Friend
        </span>
      </div>

      {/* Main Message */}
      <div className="space-y-4 text-stone-600 text-base leading-relaxed relative z-10 bg-white/60 p-6 rounded-2xl border border-rose-100/80 shadow-inner">
        <p className="font-medium text-stone-800">
          So… it's officially locked in. We're best friends now 😂🤍
        </p>
        <p>
          Honestly, I'm genuinely so glad I met you at Bowen. You make normal campus days way less stressful, and hanging out with you is always a solid vibe.
        </p>
        <p>
          Even when school is over and Bowen is just a memory we laugh about, I hope our friendship stays right where it is—talking, checking on each other, and making more memories.
        </p>
      </div>

      {/* Interactive Seal / Celebration Button */}
      <div className="pt-4 border-t border-rose-100 relative z-10 space-y-4">
        <p className="text-sm font-semibold text-stone-800">
          Here’s to everything we’ve experienced, and everything still to come ✨
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-2">
          <button
            onClick={triggerExtraConfetti}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition transform active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Seal the Friendship 🤝</span>
            {likes > 0 && <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">+{likes}</span>}
          </button>
          <p className="text-xs text-stone-400">Tap to throw more confetti! 🎉</p>
        </div>

        <p className="text-stone-400 text-xs pt-2">— {siteConfig.names.user}</p>
      </div>

    </div>
  );
}