import React from 'react';
import { Music, BookOpen, Mail, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../data/content';

interface AboutPageProps {
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { brand, biography } = siteContent;

  return (
    <div>
      {/* Page Hero Header */}
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
              Biography & Mission
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
              About Stanley E. Johnson, Jr.
            </h1>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--color-gold-light)',
                lineHeight: 1.6,
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
              }}
            >
              {biography.lead}
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography Content */}
      <section className="section-spacing">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: ' clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'flex-start',
            }}
          >
            {/* Left Column: Portrait & Highlights */}
            <div>
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border-gold)',
                  boxShadow: 'var(--shadow-lg)',
                  marginBottom: '2rem',
                  backgroundColor: 'var(--color-bg-deep)',
                }}
              >
                <img
                  src={brand.portraitAbout}
                  alt="Stanley E. Johnson, Jr."
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Core Anchors Box */}
              <div className="editorial-card" style={{ padding: '1.75rem' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                  Key Ministry & Creative Anchors
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-text-secondary)' }}>
                    <Music size={16} color="var(--color-gold)" />
                    <span>Gospel Recording Artist & Songwriter</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-text-secondary)' }}>
                    <BookOpen size={16} color="var(--color-gold)" />
                    <span>Author, <em>Dadfirmations</em></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-text-secondary)' }}>
                    <Heart size={16} color="var(--color-gold)" />
                    <span>Fatherhood & Youth Mentorship</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-text-secondary)' }}>
                    <Sparkles size={16} color="var(--color-gold)" />
                    <span>Worship & Church Leadership Consultation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Story */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                {biography.paragraphs.map((para, idx) => (
                  <p key={idx} style={{ color: idx === 0 ? 'var(--color-text-primary)' : undefined, fontSize: idx === 0 ? '1.12rem' : undefined }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Quote Breakout */}
              <div
                style={{
                  margin: '3rem 0',
                  padding: '2rem',
                  backgroundColor: 'rgba(16, 36, 43, 0.7)',
                  borderLeft: '4px solid var(--color-gold)',
                  borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontStyle: 'italic',
                    color: 'var(--color-gold-light)',
                    lineHeight: 1.6,
                    marginBottom: '0.75rem',
                  }}
                >
                  &ldquo;When we combine the truth of faith with sincere artistic expression and intentional words to our children, lives are transformed for generations.&rdquo;
                </p>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  &mdash; Stanley E. Johnson, Jr.
                </div>
              </div>

              {/* Background Overview */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-text-primary)', marginBottom: '1.25rem' }}>
                  Professional Background & Experience
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {biography.backgroundPillars.map((pillar, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '1.25rem 1.5rem',
                        backgroundColor: 'var(--color-bg-card)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-gold)', marginBottom: '0.35rem' }}>
                        {pillar.area}
                      </h4>
                      <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-primary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
            <span className="gold-badge" style={{ marginBottom: '0.75rem' }}>Guiding Principles</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--color-text-primary)' }}>
              Core Values & Convictions
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {biography.coreValues.map((val, idx) => (
              <div key={idx} className="editorial-card" style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(227, 183, 116, 0.15)',
                    border: '1px solid var(--color-border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto',
                    color: 'var(--color-gold)',
                  }}
                >
                  <CheckCircle2 size={20} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  {val.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Next Actions */}
      <section className="section-spacing">
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
            Explore Stanley's Work
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 2rem auto' }}>
            Discover the music releases, read about Dadfirmations, or connect regarding upcoming ministry opportunities.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={() => onNavigate('music')} className="btn-primary">
              <Music size={16} />
              Listen to the Music
            </button>
            <button onClick={() => onNavigate('dadfirmations')} className="btn-secondary">
              <BookOpen size={16} />
              Read Dadfirmations
            </button>
            <button onClick={() => onNavigate('contact')} className="btn-outline-gold">
              <Mail size={16} />
              Inquire / Connect
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
