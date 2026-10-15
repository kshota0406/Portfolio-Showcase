import type { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = {
  title: 'Running | Portfolio',
  description: 'Running distances and times.',
};

const results = [
  { distance: '10 km', time: '37:16', event: 'Toyota Marathon', date: 'November 15, 2015' },
  { distance: 'Full Marathon', time: '3:28:53', event: 'Kurobe Meisui Marathon', date: 'May 26, 2019' },
];

export default function RunningPage() {
  return (
    <main className="min-h-screen px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <PageIntro section="Running" title="Race Results" description="Personal bests and race history." />

        <figure className="section-shell">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-xl bg-[var(--sand-2)]">
            <Image
              src="/images/running/running-shoes.jpg"
              alt="White Puma running shoes"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </figure>

        <section aria-label="Running times" className="grid gap-5 md:grid-cols-2">
          {results.map((result) => (
            <article key={result.distance} className="section-shell relative overflow-hidden">
              <div className="relative space-y-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">{result.distance}</p>
                <p className="font-mono text-5xl font-bold tracking-tight text-[var(--ink)] sm:text-6xl" aria-label={`${result.distance}: ${result.time}`}>
                  {result.time}
                </p>
                <div className="space-y-3 border-t border-[var(--line)] pt-4">
                  <p className="font-semibold text-[var(--ink)]">{result.event}</p>
                  <div className="text-sm text-[var(--muted)]">
                    <span>{result.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
