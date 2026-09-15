import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  videoTitle: string;
  youtubeId: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, videoTitle, youtubeId, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Watch ${videoTitle}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(5, 12, 16, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          backgroundColor: 'var(--color-bg-deep)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border-gold)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div
          style={{
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg-surface)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="gold-badge" style={{ fontSize: '0.75rem' }}>Now Playing</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-text-primary)' }}>
              {videoTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '0.4rem',
              color: 'var(--color-text-secondary)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s, background-color 0.2s',
            }}
            aria-label="Close Video Player"
          >
            <X size={22} />
          </button>
        </div>

        {/* 16:9 Video Container */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, backgroundColor: '#000' }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={videoTitle}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
