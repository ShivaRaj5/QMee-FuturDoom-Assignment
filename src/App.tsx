import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/layout/Header';
import LandingScreen from './components/screens/LandingScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import ChatScreen from './components/screens/ChatScreen';
import ShareScreen from './components/screens/ShareScreen';

export type AppScreen = 'landing' | 'welcome' | 'chat' | 'share';

const getScreenFromPath = (pathname: string): AppScreen => (pathname === '/share' ? 'share' : 'landing');

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(() => getScreenFromPath(window.location.pathname));
  const [initialPrompt, setInitialPrompt] = useState<string>('');

  const navigateTo = (screen: AppScreen, path?: string) => {
    setCurrentScreen(screen);
    if (path && window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  };

  useEffect(() => {
    const handleGoHome = () => {
      setCurrentScreen('landing');
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
    };
    document.addEventListener('navigate-home', handleGoHome);
    const handlePopState = () => setCurrentScreen(getScreenFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => {
      document.removeEventListener('navigate-home', handleGoHome);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleStartChat = (prompt?: string) => {
    if (typeof prompt === 'string') {
      setInitialPrompt(prompt);
    } else {
      setInitialPrompt('');
    }
    navigateTo('chat', '/');
  };

  return (
    <div className="h-[100dvh] w-full bg-background flex flex-col font-sans overflow-hidden">
      {currentScreen === 'chat' && <Header />}
      <main
        className={`flex-1 w-full mx-auto flex flex-col relative overflow-hidden ${
          currentScreen === 'landing' || currentScreen === 'share' ? 'max-w-none px-0' : 'max-w-5xl px-4'
        }`}
      >
        {currentScreen === 'landing' && (
          <LandingScreen onNext={() => navigateTo('welcome', '/')} onShare={() => navigateTo('share', '/share')} onHome={() => navigateTo('landing', '/')} />
        )}
        {currentScreen === 'welcome' && (
          <WelcomeScreen onStartChat={handleStartChat} onGoLanding={() => navigateTo('landing', '/')} />
        )}
        {currentScreen === 'chat' && <ChatScreen initialPrompt={initialPrompt} />}
        {currentScreen === 'share' && (
          <ShareScreen
            onOpenChat={() => navigateTo('welcome', '/')}
            onOpenShare={() => navigateTo('share', '/share')}
            onHome={() => navigateTo('landing', '/')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
