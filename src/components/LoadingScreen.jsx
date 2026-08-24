import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 800);
    const t2 = setTimeout(() => setStage(2), 2200);
    const t3 = setTimeout(() => onFinish(), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center text-center page-transition py-20">
      <div className="p-4 rounded-full bg-rose-100 text-rose-500 shadow-sm animate-pulse mb-6">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="h-12">
        {stage === 0 && <p className="text-stone-500 text-lg">Preparing something special…</p>}
        {stage >= 1 && <p className="text-rose-600 font-serif text-2xl font-bold">Just for Daniella. 🤍</p>}
      </div>
    </div>
  );
}