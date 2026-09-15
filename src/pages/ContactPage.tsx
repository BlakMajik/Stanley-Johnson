import React from 'react';
import { Facebook, Clock, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/content';
import { InquiryForm } from '../components/InquiryForm';

export const ContactPage: React.FC = () => {
  const { socialLinks, inquiryCategories } = siteContent;

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
              Bookings & Inquiries
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
              Invitations & Professional Inquiries
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
              }}
            >
              Start a conversation regarding music ministry, speaking appearances, book conversations, or leadership consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form Grid */}
      <section className="section-spacing">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4rem)',
              alignItems: 'flex-start',
            }}
          >
            {/* Left Column: Direct Info & Guidelines */}
            <div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-text-primary)', marginBottom: '1rem' }}>
                  Inquiry Areas & Collaboration
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Every gathering is unique. The categories below help us understand your vision, date requirements, and setting.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {inquiryCategories.map((cat) => (
                    <div
                      key={cat.id}
                      style={{
                        padding: '1.1rem 1.25rem',
                        backgroundColor: 'var(--color-bg-card)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <div style={{ fontWeight: 600, color: 'var(--color-gold)', fontSize: '0.98rem', marginBottom: '0.25rem' }}>
                        {cat.label}
                      </div>
                      <div style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>
                        {cat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interim Direct Route Card */}
              <div
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  border: '1px solid var(--color-border-gold)',
                  marginBottom: '2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <Facebook size={20} color="#1877F2" />
                  <span style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '1rem' }}>
                    Interim Direct Contact Route
                  </span>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  For direct correspondence or quick messages, Stanley actively connects through his verified Facebook ministry page:
                </p>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold"
                  style={{ width: '100%', fontSize: '0.85rem' }}
                >
                  Visit Facebook @{socialLinks.facebookHandle}
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Expectations & Timeline Notice */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--color-text-muted)', fontSize: '0.84rem', lineHeight: 1.6 }}>
                <Clock size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  Please submit requests with as much lead time as possible to accommodate travel planning and scheduling coordination.
                </span>
              </div>
            </div>

            {/* Right Column: Accessible Interactive Inquiry Form */}
            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
