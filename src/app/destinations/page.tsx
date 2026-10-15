import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = {
  title: 'Places I’ve Visited | Portfolio',
  description: 'Places visited around the world.',
};

const visits: { label: string; dateTime?: string; places: { name: string; cities?: string }[] }[] = [
  { label: 'As a child', places: [{ name: 'Guam' }, { name: 'Saipan' }] },
  { label: '2011', dateTime: '2011', places: [{ name: 'China', cities: 'Tianjin · Beijing' }] },
  { label: '2015', dateTime: '2015', places: [{ name: 'Thailand', cities: 'Bangkok · Phuket' }] },
  { label: '2017', dateTime: '2017', places: [{ name: 'Hawaii', cities: 'Oahu' }] },
  { label: '2018', dateTime: '2018', places: [{ name: 'Singapore' }, { name: 'South Korea', cities: 'Seoul' }] },
  { label: '2024', dateTime: '2024', places: [{ name: 'Vietnam', cities: 'Da Nang · Hoi An' }] },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <PageIntro section="Around the World" title="Places I've Visited" description="A timeline of the places I've traveled abroad." />
        <ol className="relative ml-2 max-w-4xl border-l border-[var(--line)]">
          {visits.map((visit) => (
            <li key={visit.label} className="relative grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 border-b border-[var(--line)]/70 py-6 pl-6 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-8 sm:py-8 sm:pl-10">
              <span className="absolute -left-[6px] top-8 h-3 w-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--sand-1)] sm:top-10" aria-hidden="true" />
              {visit.dateTime ? (
                <time className="pt-1 font-mono text-lg font-semibold tabular-nums text-[var(--accent)] sm:text-2xl" dateTime={visit.dateTime}>{visit.label}</time>
              ) : (
                <span className="pt-1 text-xs font-semibold text-[var(--accent)] sm:text-base">{visit.label}</span>
              )}
              <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
                {visit.places.map((place) => (
                  <div key={place.name}>
                    <h2 className="text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-2xl">{place.name}</h2>
                    {place.cities && <p className="mt-1 text-sm text-[var(--muted)]">{place.cities}</p>}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
