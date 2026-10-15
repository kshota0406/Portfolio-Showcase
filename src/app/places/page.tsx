import type { Metadata } from 'next';
import VisitedPlacesMap from '@/components/VisitedPlacesMap';
import PageIntro from '@/components/PageIntro';
import { prefectureScores, scoreColors, scoreDescriptions } from '@/data/visitedPrefectures';

export const metadata: Metadata = {
  title: 'Places I’ve Been | Portfolio',
  description: 'A map of the places I have explored across Japan.',
};

export default function PlacesPage() {
  const scoredCount = Object.values(prefectureScores).filter((score) => score > 0).length;

  return (
    <main className="min-h-screen px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <PageIntro section="Japan" title="Places I've Visited" description="A record of the prefectures I've explored." />

        <div className="mx-auto w-full max-w-4xl">
          <VisitedPlacesMap />
        </div>
        <section className="section-shell space-y-5" aria-labelledby="score-legend-title">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 id="score-legend-title" className="text-2xl font-semibold text-[var(--ink)]">Travel scale</h2>
            </div>
            <span className="text-sm text-[var(--muted)]">{scoredCount} / 47</span>
          </div>
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {scoreDescriptions.map(({ score, title, detail }) => (
                <li key={score} className="flex min-h-24 items-center gap-4 rounded-xl border border-[var(--line)] bg-[var(--paper)] p-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-black/10 text-lg font-bold text-[#201d19] shadow-sm"
                    style={{ backgroundColor: scoreColors[score] }}
                    aria-label={`Score ${score}`}
                  >
                    {score}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-[var(--ink)]">{title}</span>
                    <span className="mt-1 block text-sm leading-snug text-[var(--muted)]">{detail}</span>
                  </span>
                </li>
              ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
