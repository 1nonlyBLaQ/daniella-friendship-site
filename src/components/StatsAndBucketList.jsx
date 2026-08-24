import React, { useState } from 'react';
import { Award, CheckCircle2, Circle, ArrowRight, Flame } from 'lucide-react';

export default function StatsAndBucketList({ onNext }) {
  const [checkedItems, setCheckedItems] = useState([true, true]);

  const bucketList = [
    "Graduate Bowen in absolute style 🎓",
    "Play a Call of Duty rematch 🎮",
    "Hang out outside school at least once a term 🚗",
    "Never become strangers who only view status updates 🤝",
    "Keep making random memory videos 😂"
  ];

  const toggleCheck = (index) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(i => i !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  return (
    <div className="cute-card p-6 sm:p-8 rounded-3xl page-transition max-w-lg mx-auto space-y-6">
      <div className="text-center">
        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full inline-flex items-center gap-1 mb-2">
          <Flame className="w-3.5 h-3.5 fill-amber-500" /> Friendship Analytics
        </span>
        <h2 className="text-2xl font-serif font-bold text-stone-900">The Vibe Report</h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/80 border border-rose-100 p-3.5 rounded-2xl text-center shadow-sm">
          <p className="text-2xl font-bold text-rose-500">100%</p>
          <p className="text-xs text-stone-500 mt-0.5">LAS Classes Survived</p>
        </div>
        <div className="bg-white/80 border border-rose-100 p-3.5 rounded-2xl text-center shadow-sm">
          <p className="text-2xl font-bold text-rose-500">1/1</p>
          <p className="text-xs text-stone-500 mt-0.5">Misunderstandings Cleared</p>
        </div>
        <div className="bg-white/80 border border-rose-100 p-3.5 rounded-2xl text-center shadow-sm">
          <p className="text-2xl font-bold text-rose-500">∞</p>
          <p className="text-xs text-stone-500 mt-0.5">Random Laughs</p>
        </div>
        <div className="bg-white/80 border border-rose-100 p-3.5 rounded-2xl text-center shadow-sm">
          <p className="text-2xl font-bold text-rose-500">10/10</p>
          <p className="text-xs text-stone-500 mt-0.5">Platonic Vibe Match</p>
        </div>
      </div>

      {/* Bucket List */}
      <div className="pt-2">
        <h3 className="text-sm font-bold text-stone-800 mb-3 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-rose-500" /> Post-Bowen Bucket List (Tap to check!):
        </h3>
        
        <div className="space-y-2">
          {bucketList.map((item, idx) => {
            const isChecked = checkedItems.includes(idx);
            return (
              <div 
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between text-xs sm:text-sm font-medium ${
                  isChecked ? 'bg-rose-50/80 border-rose-200 text-rose-900' : 'bg-white/60 border-stone-200 text-stone-600'
                }`}
              >
                <span>{item}</span>
                {isChecked ? <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" /> : <Circle className="w-4 h-4 text-stone-300 shrink-0" />}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-medium transition shadow-md flex items-center justify-center space-x-2 cursor-pointer text-sm"
      >
        <span>Take the Mini Quiz →</span>
      </button>
    </div>
  );
}