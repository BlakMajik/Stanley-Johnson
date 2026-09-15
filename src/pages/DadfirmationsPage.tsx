import React from 'react';
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';
import { BookShowcase } from '../components/BookShowcase';

interface DadfirmationsPageProps {
  onNavigate: (route: string) => void;
}

export const DadfirmationsPage: React.FC<DadfirmationsPageProps> = ({ onNavigate }) => {
  const { book, brand } = siteContent;

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
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span className="gold-badge">Published Work</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                Publisher: {book.publisher}
              </span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
                lineHeight: 1.15,
              }}
            >
              Dadfirmations
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                color: 'var(--color-gold-light)',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                lineHeight: 1.5,
              }}
            >
              {book.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Showcase & Audience Breakdown */}
      <section className="section-spacing">
        <div className="container">
          <BookShowcase showFullDetails={true} />
        </div>
      </section>

      {/* From the Author's Heart Section */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="gold-badge" style={{ marginBottom: '1rem' }}>
                Author's Perspective
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  color: 'var(--color-text-primary)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.2,
                }}
              >
                Why Words of Affirmation Matter
              </h2>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '1.02rem', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  As fathers and mentors, the words we speak to young men leave an indelible mark on their understanding of self-worth, character, and spiritual identity. In a world full of conflicting voices, clear and loving affirmations grounded in faith act as an anchor.
                </p>
                <p>
                  <em>Dadfirmations</em> was written to serve as a bridge—giving fathers the vocabulary to express pride, spiritual counsel, and unconditional love, while giving sons a tangible reminder that they are valued, supported, and called to purpose.
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a
                  href={book.amazonKindleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <BookOpen size={18} />
                  View Kindle Edition on Amazon
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Author Portrait Card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                className="editorial-card"
                style={{
                  padding: '1.5rem',
                  maxWidth: '420px',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    marginBottom: '1.25rem',
                    aspectRatio: '1 / 1',
                    backgroundColor: 'var(--color-bg-deep)',
                  }}
                >
                  <img
                    src={brand.portraitCasual}
                    alt="Stanley Johnson, author of Dadfirmations"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {brand.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Author & Fatherhood Advocate
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                    Published by {book.publisher}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking & Book Talks CTA */}
      <section className="section-spacing">
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2.5rem, 5vw, 3.5rem)',
              border: '1px solid var(--color-border-gold)',
              textAlign: 'center',
              maxWidth: '840px',
              margin: '0 auto',
            }}
          >
            <span className="gold-badge" style={{ marginBottom: '1rem' }}>
              Author Conversations & Men's Gatherings
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
              Invite Stanley for a Dadfirmations Conversation
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '640px', margin: '0 auto 2rem auto' }}>
              Stanley is available for keynote conversations, men's ministry breakfasts, parenting seminars, and youth mentorship workshops centered on faith and intentional fatherhood.
            </p>
            <button onClick={() => onNavigate('contact')} className="btn-primary" style={{ padding: '0.9rem 2rem' }}>
              Inquire About a Book Talk or Workshop
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
