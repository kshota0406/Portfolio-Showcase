'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { prefectureScores, prefectureNames, scoreColors } from '@/data/visitedPrefectures';

export default function VisitedPlacesMap() {
  const [mapSvg, setMapSvg] = useState('');

  useEffect(() => {
    let active = true;
    fetch('/japan-prefectures.svg')
      .then((response) => {
        if (!response.ok) throw new Error('Could not load Japan map');
        return response.text();
      })
      .then((svg) => { if (active) setMapSvg(svg); })
      .catch(() => { if (active) setMapSvg(''); });
    return () => { active = false; };
  }, []);

  const scoredPrefectures = Object.entries(prefectureScores)
    .filter(([code, score]) => prefectureNames[code] && score > 0);
  const scoreRules = Object.entries(prefectureScores)
    .filter(([code, score]) => /^\d{2}$/.test(code) && prefectureNames[code] && scoreColors[score])
    .map(([code, score]) => `.japan-travel-map [data-code="${code}"] { fill: ${scoreColors[score]} !important; }`)
    .join('\n');

  return (
    <motion.section
      className="section-shell"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <style>{`
        .japan-travel-map .prefecture {
          fill: ${scoreColors[0]};
          stroke: #50483f;
          stroke-width: 1.35;
          transition: fill 250ms ease;
        }
        ${scoreRules}
      `}</style>
      {mapSvg ? (
        <div
          className="japan-travel-map mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-[#d9cdb5] bg-[#f8f1e3] p-3 sm:p-6 [&>svg]:block [&>svg]:h-auto [&>svg]:w-full"
          role="img"
          aria-label={`Map of Japan with scored prefectures: ${scoredPrefectures.map(([code, score]) => `${prefectureNames[code]} ${score}`).join(', ') || 'none yet'}.`}
          dangerouslySetInnerHTML={{ __html: mapSvg }}
        />
      ) : (
        <div className="flex min-h-80 items-center justify-center rounded-2xl border border-[var(--line)] text-sm text-[var(--muted)]">
          Japan map loading…
        </div>
      )}
      <p className="mt-3 text-right text-xs text-[var(--muted)]">
        Map: <a className="underline underline-offset-2" href="https://github.com/geolonia/japanese-prefectures" target="_blank" rel="noreferrer">Geolonia</a>
        {' · '}
        <a className="underline underline-offset-2" href="https://www.gnu.org/licenses/fdl-1.3.html" target="_blank" rel="noreferrer">GFDL</a>
      </p>
    </motion.section>
  );
}
