import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';

export default function MusicControl({ playMusic }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (playMusic && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Autoplay blocked or audio missing:", err);
      });
    }
  }, [playMusic]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/background-track.mp3" loop preload="auto" />
      <button
        onClick={toggleAudio}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white backdrop-blur-md shadow-lg transition cursor-pointer flex items-center justify-center"
        title={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? <Music className="w-5 h-5 text-indigo-400 animate-pulse" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
      </button>
    </>
  );
}