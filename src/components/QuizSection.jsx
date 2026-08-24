import React, { useState } from 'react';
import { HelpCircle, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function QuizSection({ onNext }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      q: "Where did we first talk about Call of Duty?",
      options: ["On WhatsApp", "At LAS during class", "At the cafeteria", "Over Instagram"],
      correct: 1,
      response: "Yep! You were so lowkey shy about it at LAS 😂"
    },
    {
      q: "What was our biggest plot twist?",
      options: ["That random misunderstanding phase", "Failing a test together", "Losing a COD match", "Never talking again"],
      correct: 0,
      response: "Facts! We both thought we weren't on good terms, but look at us now 💀"
    },
    {
      q: "What is the ultimate goal of this website?",
      options: ["To ask you out on a date", "To flex coding skills", "To lock down a genuine best friendship for life", "Just for fun"],
      correct: 2,
      response: "100%! Best friends for life, beyond Bowen 🤝🤍"
    }
  ];

  const handleSelect = (idx) => {
    setSelectedOption(idx);
  };

  const handleNextQ = () => {
    setSelectedOption(null);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      onNext();
    }
  };

  const q = questions[currentQ];

  return (
    <div className="cute-card p-6 sm:p-8 rounded-3xl page-transition max-w-lg mx-auto space-y-6">
      <div className="text-center">
        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full inline-flex items-center gap-1 mb-2">
          <HelpCircle className="w-3.5 h-3.5" /> Trivia Time
        </span>
        <h2 className="text-2xl font-serif font-bold text-stone-900">Friendship Quiz</h2>
        <p className="text-xs text-stone-400 mt-1">Question {currentQ + 1} of {questions.length}</p>
      </div>

      <div className="bg-white/80 p-5 rounded-2xl border border-rose-100 shadow-sm space-y-4">
        <p className="font-semibold text-stone-800 text-base text-center">{q.q}</p>

        <div className="space-y-2">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-medium transition text-left flex items-center justify-between cursor-pointer ${
                selectedOption === idx
                  ? idx === q.correct
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                    : 'bg-rose-50 border-rose-300 text-rose-800'
                  : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span>{opt}</span>
              {selectedOption === idx && <Check className="w-4 h-4 shrink-0" />}
            </button>
          ))}
        </div>

        {selectedOption !== null && (
          <div className="p-3 bg-purple-50 border border-purple-100 rounded-xl text-xs text-purple-800 font-medium animate-popOut text-center">
            {q.response}
          </div>
        )}
      </div>

      <button
        onClick={handleNextQ}
        disabled={selectedOption === null}
        className={`w-full py-3.5 rounded-2xl font-medium transition flex items-center justify-center space-x-2 text-sm ${
          selectedOption === null
            ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
            : 'bg-rose-500 hover:bg-rose-600 text-white shadow-md cursor-pointer'
        }`}
      >
        <span>{currentQ === questions.length - 1 ? "Final Note →" : "Next Question"}</span>
      </button>
    </div>
  );
}