import React from 'react';
import { Youtube, ExternalLink, Disc, ArrowRight } from 'lucide-react';
import { siteContent, MusicTrack } from '../data/content';
import { MusicCard } from '../components/MusicCard';
import { AudioPreviewPlayer } from '../components/AudioPreviewPlayer';

interface MusicPageProps {
  onNavigate: (route: string) => void;
  onPlayVideo: (track: MusicTrack) => void;
}

export const MusicPage: React.FC<MusicPageProps> = ({ onNavigate, onPlayVideo }) => {
  const { musicCatalog, socialLinks } = siteContent;

  return (
    <div>
      {/* Page Header */}
      <section
        style={{
          paddingTop: 'clamp(3rem, 5vw, 5rem)',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-primary)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <span className="gold-badge" style={{ marginBottom: '1rem' }}>
              Selected Gospel Catalog
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
                lineHeight: 1.15,
              }}
            >
              Music & Worship
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Christ-centered, soulful gospel music created to uplift believers, provide comfort in times of trial, and point listeners to the enduring hope of the Gospel.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Releases Section */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Disc size={20} color="var(--color-gold)" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-text-primary)' }}>
                Featured Recordings & Videos
              </h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
              Explore official releases, music videos, and streaming platform destinations.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginBottom: '4.5rem',
            }}
          >
            {musicCatalog.map((track) => (
              <MusicCard key={track.id} track={track} onPlayVideo={onPlayVideo} />
            ))}
          </div>

          {/* Interactive Sampler Player */}
          <div style={{ marginBottom: '4.5rem' }}>
            <AudioPreviewPlayer />
          </div>

          {/* Official YouTube Channel Spotlight Banner */}
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid var(--color-border-gold)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div style={{ maxWidth: '580px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Youtube size={22} color="#EF4444" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Official YouTube Channel
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                Watch More on @TheStanleyJMusic
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Subscribe to Stanley's official YouTube channel for official music videos, live worship excerpts, and future audio uploads.
              </p>
            </div>

            <div>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.85rem 1.65rem' }}
              >
                <Youtube size={18} />
                Visit YouTube Channel
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy of Worship */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="gold-badge" style={{ marginBottom: '1rem' }}>
              Ministry Conviction
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
              The Heart Behind the Music
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Music in worship is not simply performance—it is a sacred conduit for truth, spiritual restoration, and collective praise. Stanley's songwriting and vocal ministry focus on clear theological truth, musical sensitivity, and heartfelt reverence.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={() => onNavigate('contact')} className="btn-primary">
                Inquire for Worship or Concert Appearance
                <ArrowRight size={16} />
              </button>
              <button onClick={() => onNavigate('dadfirmations')} className="btn-secondary">
                Discover Dadfirmations Book
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
