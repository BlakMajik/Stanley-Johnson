import React from 'react';
import { Youtube, Facebook, ArrowUpRight, BookOpen, Music, ShieldCheck } from 'lucide-react';
import { siteContent } from '../data/content';

interface FooterProps {
  onRouteChange: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (route: string) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-bg-deep)',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '4.5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #10242B 0%, #071116 100%)',
                  border: '1px solid var(--color-border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                }}
              >
                SJ
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {siteContent.brand.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {siteContent.brand.fullName}
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {siteContent.brand.shortBio}
            </p>
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <a
                href={siteContent.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 36, 43, 0.8)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-primary)',
                  transition: 'all 0.2s ease',
                }}
                aria-label="Stanley Johnson on YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href={siteContent.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 36, 43, 0.8)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-primary)',
                  transition: 'all 0.2s ease',
                }}
                aria-label="Stanley Johnson on Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                color: 'var(--color-text-primary)',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em',
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => handleNav('home')} style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>
                  About Stanley E. Johnson, Jr.
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('music')} style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>
                  Music & Worship
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('dadfirmations')} style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>
                  Dadfirmations Book
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>
                  Invitations & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Selected Work */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                color: 'var(--color-text-primary)',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em',
              }}
            >
              Featured Works
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <a
                  href="https://distrokid.com/hyperfollow/stanleyjohnson/trading-chains"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Music size={15} color="var(--color-gold)" />
                  Trading Chains (Single)
                  <ArrowUpRight size={13} color="var(--color-text-muted)" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=GLhcAwstDTg"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Youtube size={15} color="var(--color-gold)" />
                  Hiding Place (Official Video)
                  <ArrowUpRight size={13} color="var(--color-text-muted)" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=2YN4WEJrFgs"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Youtube size={15} color="var(--color-gold)" />
                  Beyond Me (Official Audio)
                  <ArrowUpRight size={13} color="var(--color-text-muted)" />
                </a>
              </li>
              <li>
                <a
                  href={siteContent.book.amazonKindleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <BookOpen size={15} color="var(--color-gold)" />
                  Dadfirmations (Kindle Edition)
                  <ArrowUpRight size={13} color="var(--color-text-muted)" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Inquiries */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                color: 'var(--color-text-primary)',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em',
              }}
            >
              Direct Inquiries
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              For ministry appearances, speaking engagements, book discussions, or consultations:
            </p>
            <button
              onClick={() => handleNav('contact')}
              className="btn-outline-gold"
              style={{ width: '100%', marginBottom: '1rem' }}
            >
              Submit an Inquiry
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              <ShieldCheck size={16} color="var(--color-gold)" />
              <span>Verified Official Channel</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div>
            &copy; {currentYear} Stanley Johnson. All rights reserved. Publisher: {siteContent.book.publisher}.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Preview & Review Build</span>
            <span>&bull;</span>
            <span style={{ color: 'var(--color-gold)' }}>Faith &bull; Music &bull; Fatherhood</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
