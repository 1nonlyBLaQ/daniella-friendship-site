import React, { useState } from 'react';
import { siteConfig } from '../data/contentData';
import { Lock } from 'lucide-react';

export default function LoginScreen({ onLoginSuccess }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [shake, setShake] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      name.trim().toLowerCase() === siteConfig.loginCredentials.name.toLowerCase() &&
      password.trim() === siteConfig.loginCredentials.password
    ) {
      onLoginSuccess();
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setErrorMsg(name.trim().toLowerCase() !== 'daniella' ? "Hmmm… I don’t think you’re Daniella 👀" : "Nice try 😭 Check the password hint.");
    }
  };

  return (
    <div className={`cute-card p-8 sm:p-12 rounded-3xl max-w-md mx-auto page-transition ${shake ? 'animate-shake' : ''}`}>
      <div className="text-center mb-8">
        <div className="inline-flex p-3 rounded-2xl bg-rose-100 text-rose-500 mb-4 shadow-sm">
          <Lock className="w-6 h-6" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-800">Daniella’s Private Space 🤍</h1>
        <p className="text-sm text-stone-500 mt-2">Only you have the right to enter.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-4 rounded-2xl bg-white border border-rose-200 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-400 transition shadow-inner"
          required
        />
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-4 rounded-2xl bg-white border border-rose-200 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-400 transition shadow-inner"
            required
          />
          <p className="text-xs text-rose-400/80 mt-2 pl-1 font-medium">
            P.S. The password is the first name of the person who sent you this 👀
          </p>
        </div>

        {errorMsg && <p className="text-rose-500 text-sm text-center bg-rose-50 bg-rose-500/10 py-2.5 rounded-xl border border-rose-200">{errorMsg}</p>}

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-lg shadow-rose-500/30 transition flex items-center justify-center space-x-2 group cursor-pointer text-lg"
        >
          <span>Enter</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </form>
    </div>
  );
}