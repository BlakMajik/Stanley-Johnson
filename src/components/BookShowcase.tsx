import React from 'react';
import { ExternalLink, BookOpen, HeartHandshake, Compass, Gift, Building2, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/content';

interface BookShowcaseProps {
  showFullDetails?: boolean;
  onNavigateToBookPage?: () => void;
}

export const BookShowcase: React.FC<BookShowcaseProps> = ({ showFullDetails = false, onNavigateToBookPage }) => {
  const { book } = siteContent;

  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake size={24} color="var(--color-gold)" />;
      case 'Compass':
        return <Compass size={24} color="var(--color-gold)" />;
      case 'Gift':
        return <Gift size={24} color="var(--color-gold)" />;
      case 'Building2':
        return <Building2 size={24} color="var(--color-gold)" />;
      default:
        return <BookOpen size={24} color="var(--color-gold)" />;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
        }}
      >
        {/* Left Col: Intentional Editorial Hardcover Book Object */}
        <div style={{ display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
          <div className="hardcover-book-mockup">
            <div className="book-embossed-border" />

            {/* Top Book Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-gold)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                  Official Work
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
                  Faith &bull; Family
                </span>
              </div>
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  backgroundColor: 'var(--color-gold)',
                  marginBottom: '1.5rem',
                }}
              />
            </div>

            {/* Book Title & Subtitle Center */}
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.1rem',
                  fontWeight: 800,
                  color: '#FFF',
                  letterSpacing: '0.04em',
                  lineHeight: 1.15,
                  marginBottom: '0.75rem',
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                }}
              >
                DADFIRMATIONS
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: 'var(--color-gold)',
                  lineHeight: 1.4,
                  maxWidth: '240px',
                  margin: '0 auto',
                }}
              >
                Affirmations From a Father to a Son
              </div>
            </div>

            {/* Book Footer / Author & Publisher */}
            <div style={{ textAlign: 'center', borderTop: '1px solid rgba(227, 183, 116, 0.25)', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-primary)', letterSpacing: '0.05em' }}>
                STANLEY JOHNSON
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                Published by {book.publisher}
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Book Narrative & Audience Reach */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="gold-badge">Featured Book</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Kindle Edition Available
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            {book.fullTitle}
          </h2>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {book.synopsis}
          </p>

          {/* Editorial Callout */}
          <div
            style={{
              backgroundColor: 'rgba(16, 36, 43, 0.8)',
              borderLeft: '3px solid var(--color-gold)',
              padding: '1.25rem 1.5rem',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              marginBottom: '2rem',
            }}
          >
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-gold-light)', fontSize: '0.98rem', lineHeight: 1.6 }}>
              &ldquo;{book.editorialExcerpt}&rdquo;
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a
              href={book.amazonKindleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.85rem 1.75rem' }}
            >
              <BookOpen size={18} />
              View Kindle Edition on Amazon
              <ExternalLink size={15} />
            </a>

            {onNavigateToBookPage && (
              <button
                onClick={onNavigateToBookPage}
                className="btn-secondary"
                style={{ padding: '0.85rem 1.5rem' }}
              >
                Explore Book Themes & Guide
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Details / Audience Pillars */}
      {showFullDetails && (
        <div style={{ marginTop: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            <span className="gold-badge" style={{ marginBottom: '0.75rem' }}>
              Who This Book Is For
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
              }}
            >
              Words of Purpose for Every Generation
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
              Dadfirmations addresses readers, mentors, and organizations seeking intentional ways to encourage and guide young men.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
              marginBottom: '4.5rem',
            }}
          >
            {book.audiences.map((aud, index) => (
              <div key={index} className="editorial-card">
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(227, 183, 116, 0.1)',
                    border: '1px solid var(--color-border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {getAudienceIcon(aud.iconName)}
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                  {aud.title}
                </h4>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {aud.subtitle}
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {aud.description}
                </p>
              </div>
            ))}
          </div>

          {/* Book Themes Grid */}
          <div className="glass-panel" style={{ padding: '3rem 2.5rem' }}>
            <div style={{ maxWidth: '640px', marginBottom: '2.5rem' }}>
              <span className="gold-badge" style={{ marginBottom: '0.75rem' }}>Core Pillars</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
                Key Themes Addressed in Dadfirmations
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                Each chapter offers practical wisdom, spiritual grounding, and affirmations that fathers and sons can revisit throughout life.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
              {book.themes.map((theme, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ marginTop: '0.2rem', color: 'var(--color-gold)', flexShrink: 0 }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.35rem' }}>
                      {theme.title}
                    </h5>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                      {theme.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
