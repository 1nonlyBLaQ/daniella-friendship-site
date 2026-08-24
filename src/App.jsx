import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import StorySection from './components/StorySection';
import QuestionScreen from './components/QuestionScreen';
import Celebration from './components/Celebration';
import VideoSection from './components/VideoSection';
import DanielaSection from './components/DanielaSection';
import StatsAndBucketList from './components/StatsAndBucketList';
import QuizSection from './components/QuizSection';
import FinalMessage from './components/FinalMessage';
import MusicControl from './components/MusicControl';
import FloatingBackground from './components/FloatingBackground';

export default function App() {
  const [currentStep, setCurrentStep] = useState('loading');
  const [hasStartedMusic, setHasStartedMusic] = useState(false);

  return (
    <div 
      onClick={() => !hasStartedMusic && setHasStartedMusic(true)}
      className="min-h-screen relative overflow-x-hidden flex items-center justify-center p-4 selection:bg-rose-100 selection:text-rose-900"
    >
      <FloatingBackground />
      <MusicControl playMusic={hasStartedMusic} />

      <div className="w-full max-w-xl mx-auto py-10 z-10 relative">
        {currentStep === 'loading' && <LoadingScreen onFinish={() => setCurrentStep('login')} />}
        {currentStep === 'login' && <LoginScreen onLoginSuccess={() => setCurrentStep('story')} />}
        {currentStep === 'story' && <StorySection onComplete={() => setCurrentStep('question')} />}
        {currentStep === 'question' && <QuestionScreen onYes={() => setCurrentStep('celebration')} onNo={() => setCurrentStep('memories-anyway')} />}
        {(currentStep === 'celebration' || currentStep === 'memories-anyway') && <Celebration onNext={() => setCurrentStep('us-videos')} />}
        {currentStep === 'us-videos' && <VideoSection onNext={() => setCurrentStep('daniela-videos')} />}
        {currentStep === 'daniela-videos' && <DanielaSection onNext={() => setCurrentStep('stats')} />}
        {currentStep === 'stats' && <StatsAndBucketList onNext={() => setCurrentStep('quiz')} />}
        {currentStep === 'quiz' && <QuizSection onNext={() => setCurrentStep('final')} />}
        {currentStep === 'final' && <FinalMessage />}
      </div>
    </div>
  );
}