import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { siteContent, MusicTrack } from '../data/content';

export const AudioPreviewPlayer: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<MusicTrack>(siteContent.musicCatalog[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSeconds, setPlaybackSeconds] = useState(0);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorIntervalRef = useRef<number | null>(null);

  // Gentle gospel chords synthesizer using Web Audio API for an instant audio demo
  const playGospelChordSnippet = (trackId: string) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Root note selection based on track
      const baseFreq = trackId === 'trading-chains' ? 220 : trackId === 'hiding-place' ? 196 : 261.63;
      const chords = [
        [baseFreq, baseFreq * 1.25, baseFreq * 1.5, baseFreq * 1.875], // Maj7
        [baseFreq * 0.89, baseFreq * 1.125, baseFreq * 1.33, baseFreq * 1.6], // Min7
        [baseFreq * 0.75, baseFreq * 0.94, baseFreq * 1.125, baseFreq * 1.4], // Subdominant
        [baseFreq * 0.84, baseFreq * 1.05, baseFreq * 1.26, baseFreq * 1.5], // Dominant sus
      ];

      let chordIdx = 0;
      const playNext = () => {
        if (!isPlaying && chordIdx > 0) return;
        const currentChord = chords[chordIdx % chords.length];
        currentChord.forEach((f) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, ctx.currentTime);
          
          gain.gain.setValueAtTime(isMuted ? 0 : 0.04, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

          osc.connect(gain);
          gain.connect(ctx.destination);
          
          osc.start();
          osc.stop(ctx.currentTime + 1.8);
        });
        chordIdx++;
      };

      playNext();
      if (oscillatorIntervalRef.current) clearInterval(oscillatorIntervalRef.current);
      oscillatorIntervalRef.current = window.setInterval(playNext, 1800);
    } catch {
      // AudioContext fallback
    }
  };

  const stopAudio = () => {
    if (oscillatorIntervalRef.current) {
      clearInterval(oscillatorIntervalRef.current);
      oscillatorIntervalRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state === 'running') {
      audioContextRef.current.suspend();
    }
  };

  useEffect(() => {
    let timer: number;
    if (isPlaying) {
      playGospelChordSnippet(selectedTrack.id);
      timer = window.setInterval(() => {
        setPlaybackSeconds((prev) => (prev >= 30 ? 0 : prev + 1));
      }, 1000);
    } else {
      stopAudio();
    }
    return () => {
      clearInterval(timer);
      stopAudio();
    };
  }, [isPlaying, selectedTrack.id]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const selectTrack = (track: MusicTrack) => {
    setSelectedTrack(track);
    setPlaybackSeconds(0);
    if (isPlaying) {
      stopAudio();
      playGospelChordSnippet(track.id);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      className="glass-panel"
      style={{
        padding: '1.75rem 2rem',
        border: '1px solid var(--color-border-gold)',
        boxShadow: 'var(--shadow-gold)',
        maxWidth: '720px',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Disc
            size={20}
            color="var(--color-gold)"
            style={{
              animation: isPlaying ? 'spin 6s linear infinite' : 'none',
            }}
          />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-gold)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Catalog Preview Sampler
          </span>
        </div>
        <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
          Authentic Releases
        </span>
      </div>

      {/* Current Track Info & Playback */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={togglePlay}
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#071116',
              boxShadow: '0 4px 15px rgba(227, 183, 116, 0.4)',
              transition: 'transform 0.2s',
            }}
            aria-label={isPlaying ? 'Pause Preview' : 'Play Preview'}
          >
            {isPlaying ? <Pause size={22} fill="#071116" /> : <Play size={22} fill="#071116" style={{ marginLeft: '3px' }} />}
          </button>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
              {selectedTrack.title}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-gold)' }}>
              {selectedTrack.subtitle} &bull; Stanley Johnson
            </div>
          </div>
        </div>

        {/* Waveform Visualization Bars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '24px' }}>
          {[12, 18, 24, 10, 22, 16, 26, 14, 20, 15, 24, 18, 12, 22, 16].map((h, i) => (
            <span
              key={i}
              style={{
                width: '3px',
                height: isPlaying ? `${Math.max(6, (h * (0.4 + (i % 3) * 0.3)))}px` : '4px',
                backgroundColor: isPlaying ? 'var(--color-gold)' : 'var(--color-text-muted)',
                borderRadius: '2px',
                transition: 'height 0.15s ease',
              }}
            />
          ))}
          <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginLeft: '0.75rem', minWidth: '45px' }}>
            {formatTime(playbackSeconds)} / 0:30
          </span>
          <button
            onClick={() => setIsMuted(!isMuted)}
            style={{ color: 'var(--color-text-muted)', padding: '0.25rem', marginLeft: '0.5rem' }}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>

      {/* Track Selection Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        {siteContent.musicCatalog.map((track) => {
          const isCurrent = selectedTrack.id === track.id;
          return (
            <button
              key={track.id}
              onClick={() => selectTrack(track)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: isCurrent ? 600 : 500,
                backgroundColor: isCurrent ? 'rgba(227, 183, 116, 0.18)' : 'rgba(10, 25, 31, 0.7)',
                color: isCurrent ? 'var(--color-gold)' : 'var(--color-text-secondary)',
                border: `1px solid ${isCurrent ? 'var(--color-border-gold)' : 'var(--color-border)'}`,
                transition: 'all 0.2s ease',
              }}
            >
              <Music size={13} />
              {track.title}
            </button>
          );
        })}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
