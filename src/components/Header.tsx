import React, { useState, useEffect } from 'react';
import { Menu, X, Music, BookOpen, User, Mail, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentRoute: string;
  onRouteChange: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onRouteChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'About', icon: User },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'dadfirmations', label: 'Dadfirmations', icon: BookOpen },
    { id: 'contact', label: 'Invitations & Inquiries', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    onRouteChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(7, 17, 22, 0.92)' : 'rgba(11, 25, 30, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(227, 183, 116, 0.2)' : 'var(--color-border)'}`,
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Brand Logo / Monogram */}
        <button
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textAlign: 'left',
            color: 'inherit',
          }}
          aria-label="Stanley Johnson Home"
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #10242B 0%, #071116 100%)',
              border: '1px solid var(--color-border-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '1.2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            SJ
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.02em', color: 'var(--color-text-primary)' }}>
              Stanley Johnson
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
              Gospel Artist &bull; Author
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = currentRoute === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--color-gold)' : 'var(--color-text-secondary)',
                  position: 'relative',
                  padding: '0.4rem 0.1rem',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--color-gold)',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px rgba(227, 183, 116, 0.6)',
                    }}
                  />
                )}
              </button>
            );
          })}

          <button
            onClick={() => handleNavClick('contact')}
            className="btn-outline-gold"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.85rem',
            }}
          >
            Inquire &bull; Connect
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem',
            color: 'var(--color-text-primary)',
            background: 'rgba(16, 36, 43, 0.6)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border)',
          }}
          className="mobile-menu-btn"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-bg-deep)',
            borderBottom: '1px solid var(--color-border-gold)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentRoute === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isActive ? 'rgba(227, 183, 116, 0.12)' : 'transparent',
                  color: isActive ? 'var(--color-gold)' : 'var(--color-text-primary)',
                  fontSize: '1rem',
                  fontWeight: isActive ? 600 : 500,
                  textAlign: 'left',
                }}
              >
                <Icon size={18} color={isActive ? 'var(--color-gold)' : 'var(--color-text-secondary)'} />
                {link.label}
              </button>
            );
          })}
          <div style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--color-border)' }}>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              Start an Inquiry
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
