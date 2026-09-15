import React from 'react';
import { Play, ExternalLink, Music, Youtube, Award } from 'lucide-react';
import { MusicTrack } from '../data/content';

interface MusicCardProps {
  track: MusicTrack;
  onPlayVideo: (track: MusicTrack) => void;
}

export const MusicCard: React.FC<MusicCardProps> = ({ track, onPlayVideo }) => {
  return (
    <article
      className="editorial-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <div>
        {/* Cover / Media Thumbnail with Play Overlay */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            aspectRatio: '16 / 10',
            marginBottom: '1.5rem',
            backgroundColor: 'var(--color-bg-deep)',
            border: '1px solid var(--color-border)',
          }}
        >
          <img
            src={track.coverImage}
            alt={`${track.title} by Stanley Johnson`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
          />

          {/* Badges */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              zIndex: 2,
            }}
          >
            <span
              className="gold-badge"
              style={{
                backgroundColor: 'rgba(7, 17, 22, 0.85)',
                backdropFilter: 'blur(8px)',
                fontSize: '0.72rem',
              }}
            >
              {track.category}
            </span>
          </div>

          {/* Click to Watch Overlay Button if video is present */}
          {track.youtubeId && (
            <button
              onClick={() => onPlayVideo(track)}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(7, 17, 22, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.9,
                transition: 'all 0.3s ease',
              }}
              className="video-play-overlay"
              aria-label={`Play video for ${track.title}`}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#071116',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
                  transform: 'scale(1)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <Play size={24} fill="#071116" style={{ marginLeft: '3px' }} />
              </div>
            </button>
          )}
        </div>

        {/* Content Details */}
        <div style={{ marginBottom: '1.25rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.45rem',
              color: 'var(--color-text-primary)',
              marginBottom: '0.35rem',
            }}
          >
            {track.title}
          </h3>
          <div style={{ color: 'var(--color-gold)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.85rem' }}>
            {track.subtitle}
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            {track.description}
          </p>

          {track.historicalNote && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--color-gold-light)',
                backgroundColor: 'rgba(227, 183, 116, 0.08)',
                padding: '0.5rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(227, 183, 116, 0.2)',
                marginBottom: '1rem',
              }}
            >
              <Award size={16} color="var(--color-gold)" style={{ flexShrink: 0 }} />
              <span>{track.historicalNote}</span>
            </div>
          )}

          {track.featuredQuote && (
            <div
              style={{
                fontStyle: 'italic',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                borderLeft: '2px solid var(--color-gold)',
                paddingLeft: '0.75rem',
                marginTop: '0.75rem',
              }}
            >
              &ldquo;{track.featuredQuote}&rdquo;
            </div>
          )}
        </div>
      </div>

      {/* Action Links */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        {track.distrokidUrl && (
          <a
            href={track.distrokidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem', flex: 1, textAlign: 'center' }}
          >
            <Music size={15} />
            Stream on Platforms
            <ExternalLink size={13} />
          </a>
        )}

        {track.youtubeId && (
          <button
            onClick={() => onPlayVideo(track)}
            className="btn-secondary"
            style={{ fontSize: '0.85rem', padding: '0.6rem 1.1rem', flex: 1 }}
          >
            <Youtube size={16} color="var(--color-gold)" />
            Watch Video
          </button>
        )}
      </div>
    </article>
  );
};
