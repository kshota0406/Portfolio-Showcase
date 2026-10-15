import type { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/components/PageIntro';

export const metadata: Metadata = {
  title: 'Cars I’ve Owned | Portfolio',
  description: 'A few cars that have been part of my journey.',
};

const cars = [
  { make: 'Lexus', model: 'NX 350h F SPORT', years: '2024–', number: '03', image: '/images/cars/lexus-nx.jpeg', alt: 'Black Lexus NX 350h F SPORT by the water under a blue sky', position: 'center bottom' },
  { make: 'Toyota', model: 'FJ Cruiser', years: '2017–2024', number: '02', image: '/images/cars/fj-cruiser.jpg', alt: 'Beige Toyota FJ Cruiser photographed from the front' },
  { make: 'Toyota', model: 'Celica', years: '2013–2017', number: '01', image: '/images/cars/celica.jpg', alt: 'White Toyota Celica parked outdoors' },
];

export default function CarsPage() {
  return (
    <main className="min-h-screen px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <PageIntro section="Cars" title="Cars I've Owned" description="A short history of the cars I've driven." />

        <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <li
              key={car.number}
              className="section-shell relative min-h-64 overflow-hidden"
            >
              <div className="relative flex h-full flex-col gap-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--sand-2)]">
                  <Image
                    src={car.image}
                    alt={car.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover"
                    style={{ objectPosition: car.position ?? 'center' }}
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold tracking-widest text-white backdrop-blur-sm">
                    {car.number}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">{car.make}</p>
                  <h2 className="mt-1 text-3xl font-bold text-[var(--ink)]">{car.model}</h2>
                  {car.years && <p className="mt-2 text-sm text-[var(--muted)]">{car.years}</p>}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
