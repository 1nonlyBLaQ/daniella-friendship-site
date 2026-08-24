import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function Celebration({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(() => onNext(), 3000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="cute-card p-12 rounded-3xl max-w-lg mx-auto text-center page-transition space-y-4">
      <div className="inline-flex p-4 rounded-full bg-rose-100 text-rose-500 shadow-sm">
        <Sparkles className="w-10 h-10 animate-spin" style={{ animationDuration: '6s' }} />
      </div>
      <h2 className="text-3xl font-serif font-bold text-stone-900">Okay… so I guess we’re doing this. 🤍</h2>
      <p className="text-stone-500 text-lg">Now let’s look at the memories.</p>
    </div>
  );
}