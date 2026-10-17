'use client';

import { useEffect, useState } from 'react';

interface CharacterModelViewerProps {
  src: string;
  alt: string;
  compact?: boolean;
}

export default function CharacterModelViewer({ src, alt, compact = false }: CharacterModelViewerProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    import('@google/model-viewer').then(() => {
      if (active) setReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className={compact
      ? 'profile-avatar-stage h-full w-full overflow-hidden rounded-full'
      : 'relative h-[min(68vh,680px)] min-h-[360px] w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--sand-1)_78%,transparent)] sm:min-h-[480px]'}>
      {!ready && !compact && (
        <div className="absolute inset-0 grid place-items-center text-sm text-[var(--muted)]" aria-live="polite">
          Loading 3D model…
        </div>
      )}
      {/** @ts-expect-error model-viewer is a custom element registered on the client. */}
      <model-viewer
        src={src}
        alt={alt}
        camera-controls
        auto-rotate
        rotation-per-second="12deg"
        auto-rotate-delay="0"
        camera-orbit="0deg 75deg 95%"
        shadow-intensity="1"
        shadow-softness="0.45"
        exposure="0.82"
        tone-mapping="aces"
        environment-image="neutral"
        loading={compact ? 'lazy' : 'eager'}
        reveal="auto"
        className={`h-full w-full transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}
        style={{ touchAction: 'pan-y' }}
      />
      {!compact && (
        <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--line)] bg-[var(--paper)]/85 px-3 py-1.5 text-[11px] text-[var(--muted)] shadow-sm backdrop-blur-sm sm:bottom-4 sm:text-xs">
          Drag to rotate <span className="mx-1.5 text-[var(--accent)]">·</span> Pinch or scroll to zoom
        </div>
      )}
    </div>
  );
}
