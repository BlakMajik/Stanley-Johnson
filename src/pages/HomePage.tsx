import React from 'react';
import { Music, BookOpen, Users, Sparkles, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { siteContent, MusicTrack } from '../data/content';
import { MusicCard } from '../components/MusicCard';
import { BookShowcase } from '../components/BookShowcase';
import { AudioPreviewPlayer } from '../components/AudioPreviewPlayer';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onPlayVideo: (track: MusicTrack) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onPlayVideo }) => {
  const { brand, pillars, musicCatalog } = siteContent;

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Music':
        return <Music size={24} color="var(--color-gold)" />;
      case 'BookOpen':
        return <BookOpen size={24} color="var(--color-gold)" />;
      case 'Sparkles':
        return <Sparkles size={24} color="var(--color-gold)" />;
      case 'Users':
        return <Users size={24} color="var(--color-gold)" />;
      default:
        return <Sparkles size={24} color="var(--color-gold)" />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: 'clamp(3rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center',
            }}
          >
            {/* Hero Left: Text & CTA */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1.25rem',
                }}
              >
                <span className="gold-badge">Official Artist & Author</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  Gospel &bull; Fatherhood &bull; Ministry
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 4.8vw, 4rem)',
                  fontWeight: 800,
                  lineHeight: 1.12,
                  color: 'var(--color-text-primary)',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Faith in the music. <br />
                <span className="gold-gradient-text">Purpose in the message.</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                  lineHeight: 1.65,
                  color: 'var(--color-text-secondary)',
                  marginBottom: '2rem',
                  maxWidth: '560px',
                }}
              >
                {brand.supportingCopy}
              </p>

              {/* Primary Actions */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '2.5rem',
                }}
              >
                <button
                  onClick={() => onNavigate('music')}
                  className="btn-primary"
                  style={{ padding: '0.95rem 1.85rem' }}
                >
                  <Music size={18} />
                  Explore the Music
                </button>
                <button
                  onClick={() => onNavigate('dadfirmations')}
                  className="btn-secondary"
                  style={{ padding: '0.95rem 1.85rem' }}
                >
                  <BookOpen size={18} />
                  Discover Dadfirmations
                </button>
              </div>

              {/* Audience Pathways Strip */}
              <div
                style={{
                  paddingTop: '1.75rem',
                  borderTop: '1px solid var(--color-border)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  fontSize: '0.86rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color="var(--color-gold)" />
                  <span>Music Listeners</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color="var(--color-gold)" />
                  <span>Fathers, Mentors & Gift Buyers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} color="var(--color-gold)" />
                  <span>Churches & Event Organizers</span>
                </div>
              </div>
            </div>

            {/* Hero Right: Authentic Portrait of Stanley */}
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '460px',
                  aspectRatio: '3 / 4',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border-gold)',
                  boxShadow: 'var(--shadow-lg), 0 0 50px rgba(227, 183, 116, 0.15)',
                  backgroundColor: 'var(--color-bg-deep)',
                }}
              >
                <img
                  src={brand.portraitHero}
                  alt="Stanley Johnson singing passionately"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                  }}
                />

                {/* Subtle bottom gradient overlay for name bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '2rem 1.5rem 1.25rem 1.5rem',
                    background: 'linear-gradient(to top, rgba(7, 17, 22, 0.95) 0%, rgba(7, 17, 22, 0.6) 60%, transparent 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {brand.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', letterSpacing: '0.04em' }}>
                      Gospel Artist &bull; Worship Leader &bull; Author
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate('about')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-primary)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      padding: '0.4rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <span>Full Bio</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Brand Pillars */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="gold-badge" style={{ marginBottom: '0.75rem' }}>
              Connected Calling
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
              }}
            >
              A Holistic Approach to Message & Ministry
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Stanley Johnson connects artistic worship, deliberate fatherhood affirmation, and leadership development into one cohesive mission of encouragement.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {pillars.map((p) => (
              <div key={p.id} className="editorial-card">
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(227, 183, 116, 0.12)',
                    border: '1px solid var(--color-border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {getPillarIcon(p.icon)}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {p.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-gold)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {p.subtitle}
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Music Section */}
      <section className="section-spacing" style={{ position: 'relative' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <div>
              <span className="gold-badge" style={{ marginBottom: '0.75rem' }}>
                Curated Releases
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Selected Gospel Music
              </h2>
            </div>
            <button
              onClick={() => onNavigate('music')}
              className="btn-outline-gold"
              style={{ padding: '0.65rem 1.25rem' }}
            >
              <span>View Full Catalog</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Music Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3.5rem',
            }}
          >
            {musicCatalog.map((track) => (
              <MusicCard key={track.id} track={track} onPlayVideo={onPlayVideo} />
            ))}
          </div>

          {/* Interactive Sampler Player */}
          <AudioPreviewPlayer />
        </div>
      </section>

      {/* Prominent Dadfirmations Feature */}
      <section
        className="section-spacing"
        style={{
          backgroundColor: 'var(--color-bg-primary)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <BookShowcase
            showFullDetails={false}
            onNavigateToBookPage={() => onNavigate('dadfirmations')}
          />
        </div>
      </section>

      {/* Invitation / Booking Banner */}
      <section className="section-spacing">
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              border: '1px solid var(--color-border-gold)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-gold)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
              }}
            />

            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <span className="gold-badge" style={{ marginBottom: '1rem' }}>
                Event Inquiries & Engagements
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
                  color: 'var(--color-text-primary)',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                Bring Purpose and Encouragement to Your Next Gathering
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                Whether you are planning a Sunday worship gathering, men's conference, author conversation, or worship clinic, we welcome the opportunity to connect.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-primary"
                  style={{ padding: '0.95rem 2rem' }}
                >
                  Submit an Event Inquiry
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-secondary"
                  style={{ padding: '0.95rem 1.75rem' }}
                >
                  Read Stanley's Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
