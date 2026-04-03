import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/layout/Header';
import LandingScreen from './components/screens/LandingScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ChatScreen from './components/screens/ChatScreen';

export type AppScreen = 'landing' | 'welcome' | 'chat';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('landing');
  const [initialPrompt, setInitialPrompt] = useState<string>('');

  useEffect(() => {
    const handleGoHome = () => setCurrentScreen('welcome');
    document.addEventListener('navigate-home', handleGoHome);
    return () => document.removeEventListener('navigate-home', handleGoHome);
  }, []);

  const handleStartChat = (prompt?: string) => {
    if (typeof prompt === 'string') {
      setInitialPrompt(prompt);
    } else {
      setInitialPrompt('');
    }
    setCurrentScreen('chat');
  };

  return (
    <div className="h-[100dvh] w-full bg-background flex flex-col font-sans overflow-hidden">
      {currentScreen === 'chat' && <Header />}

      <main className="flex-1 w-full max-w-4xl mx-auto flex flex-col relative px-4 overflow-hidden">
        {currentScreen === 'landing' && <LandingScreen onNext={() => setCurrentScreen('welcome')} />}
        {currentScreen === 'welcome' && <WelcomeScreen onStartChat={handleStartChat} />}
        {currentScreen === 'chat' && <ChatScreen initialPrompt={initialPrompt} />}
      </main>
    </div>
  );
}

export default App;
