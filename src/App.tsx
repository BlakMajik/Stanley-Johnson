import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MusicPage } from './pages/MusicPage';
import { DadfirmationsPage } from './pages/DadfirmationsPage';
import { ContactPage } from './pages/ContactPage';
import { VideoModal } from './components/VideoModal';
import { MusicTrack } from './data/content';

export const App: React.FC = () => {
  // Read initial route from URL hash or path
  const getInitialRoute = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const validRoutes = ['home', 'about', 'music', 'dadfirmations', 'contact'];
    if (validRoutes.includes(hash)) return hash;

    const path = window.location.pathname.replace('/', '').toLowerCase();
    if (validRoutes.includes(path)) return path;

    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);
  const [activeVideoTrack, setActiveVideoTrack] = useState<MusicTrack | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleRouteChange = (route: string) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route === 'home' ? '' : route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayVideo = (track: MusicTrack) => {
    if (track.youtubeId) {
      setActiveVideoTrack(track);
    }
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'about':
        return <AboutPage onNavigate={handleRouteChange} />;
      case 'music':
        return <MusicPage onNavigate={handleRouteChange} onPlayVideo={handlePlayVideo} />;
      case 'dadfirmations':
        return <DadfirmationsPage onNavigate={handleRouteChange} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onNavigate={handleRouteChange} onPlayVideo={handlePlayVideo} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header currentRoute={currentRoute} onRouteChange={handleRouteChange} />

      <main style={{ flex: 1 }}>
        {renderCurrentPage()}
      </main>

      <Footer onRouteChange={handleRouteChange} />

      {/* Global Click-to-Load Video Modal */}
      {activeVideoTrack && activeVideoTrack.youtubeId && (
        <VideoModal
          isOpen={true}
          videoTitle={activeVideoTrack.title}
          youtubeId={activeVideoTrack.youtubeId}
          onClose={() => setActiveVideoTrack(null)}
        />
      )}
    </div>
  );
};
