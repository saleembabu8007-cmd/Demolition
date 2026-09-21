import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceEntry {
  number: string;
  title: string;
  description: string;
}

const SERVICES: ServiceEntry[] = [
  {
    number: '01',
    title: 'Factory / Building Demolition',
    description: 'We safely dismantle factory buildings, industrial sheds, and steel structures using heavy machinery and trained cutting crews.'
  },
  {
    number: '02',
    title: 'Heavy Machinery Scrap',
    description: 'We dismantle, lift, and buy heavy machinery on site—including generators, chillers, boilers, transformers, and industrial tanks.'
  },
  {
    number: '03',
    title: 'Metal Scrap Removal',
    description: 'We buy iron beams, roofing sheets, copper cables, and scrap metal at fair market rates, weighed on certified public weighbridges.'
  },
  {
    number: '04',
    title: 'Site Clearance',
    description: 'We break concrete foundations, haul all rubble away in tipper trucks, and level the ground clean ready for new construction.'
  }
];

export const Services: React.FC = () => {
  return (
    <section 
      id="services" 
      aria-labelledby="services-heading"
      className="py-20 sm:py-28 lg:py-32 bg-slate-50/70 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split: Left Column (Heading + 1 Service Image) | Right Column (Clean Vertical List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Section Header & 1 Strong Service Image */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-xs font-bold text-amber-600 tracking-widest uppercase font-mono">
              OUR SERVICES
            </span>

            <h2 
              id="services-heading"
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-950 leading-[1.15]"
            >
              What we handle on site.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md font-normal">
              A single experienced crew for dismantling structures, buying heavy scrap metal, and clearing land ready for new use.
            </p>

            {/* 1 Strong Service Image */}
            <div className="pt-2">
              <div className="relative rounded-md overflow-hidden bg-slate-200 aspect-4/3 sm:aspect-16/11 border border-slate-200">
                <img
                  src="/images/services-cutting.jpg"
                  alt="LTS cutting crew dismantling heavy industrial steel beams on site"
                  loading="lazy"
                  decoding="async"
                  width="1400"
                  height="1050"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="block text-xs text-slate-500 mt-2 font-mono">
                Trained cutting crews dismantling structural steel on site
              </span>
            </div>
          </div>

          {/* Right: Clean Vertical Service List */}
          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
            {SERVICES.map((service) => (
              <article 
                key={service.number}
                className="py-8 sm:py-9 first:pt-3 last:pb-6 group transition-colors"
              >
                <span className="text-xs font-bold font-mono text-amber-600 block mb-2 tracking-wider">
                  {service.number}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-2.5">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                  {service.description}
                </p>
              </article>
            ))}

            {/* Quiet Footer Link */}
            <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
              <span>Have a specific facility or equipment to dismantle?</span>
              <a
                href="#contact"
                className="font-semibold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1.5 uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
              >
                <span>Request Site Inspection</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
