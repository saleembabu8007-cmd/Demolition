import React from 'react';
import { SectionWrapper, SectionHeading } from './ui';

interface CredibilityPoint {
  num: string;
  title: string;
  description: string;
}

const CREDIBILITY_POINTS: CredibilityPoint[] = [
  {
    num: '01',
    title: 'Certified Public Weighbridges',
    description: 'Every truckload of salvaged steel and scrap metal is routed through computerized, licensed public weighbridges. You receive stamped digital weighment slips recording gross, tare, and net weights.',
  },
  {
    num: '02',
    title: 'Complete Rubble Clearance',
    description: 'We do not abandon broken concrete footings or masonry debris. Hydraulic breakers demolish foundations, tipper trucks haul all rubble away, and the plot is graded clean for immediate construction.',
  },
  {
    num: '03',
    title: 'Direct Scrap Value Offset',
    description: 'Recovered metal scrap value is credited directly against machinery rental and labor costs under a single agreement, reducing out-of-pocket project expense.',
  },
  {
    num: '04',
    title: 'Zero-Fee Site Inspection',
    description: 'Our engineer visits your property anywhere across Kerala at no cost to evaluate structural dimensions, safety access, and scrap tonnage before providing a firm written quotation.',
  },
];

export const Approach: React.FC = () => {
  return (
    <SectionWrapper id="why-azi" background="daylight" aria-labelledby="credibility-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
        
        {/* Left Column: Heading + Authentic Field Evidence Photograph */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <SectionHeading
            id="credibility-heading"
            eyebrow="Clearance Standard"
            title="How we work on your property."
            description="Direct contractor execution without middlemen, surprise deductions, or abandoned rubble."
            className="mb-0"
          />

          {/* Authentic Field Photographic Evidence */}
          <figure className="rounded-sm overflow-hidden bg-white border border-slate-300/80 shadow-xs">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
              <picture className="block w-full h-full">
                <source type="image/webp" srcSet="/images/rubble-clearance.webp" />
                <img
                  src="/images/rubble-clearance.jpg"
                  alt="Hydraulic excavator loading broken concrete rubble into a tipper truck for off-site disposal"
                  decoding="async"
                  width="1376"
                  height="768"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.98]"
                />
              </picture>
            </div>
            <figcaption className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium select-none">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shrink-0" aria-hidden="true" />
                <span>Foundation rubble removal & plot grading</span>
              </div>
              <span className="text-slate-500 font-mono text-[11px]">Field Operations</span>
            </figcaption>
          </figure>
        </div>

        {/* Right Column: 4 Factual Dependability Commitments with Crisp Numbered Hierarchy */}
        <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-sm px-6 sm:px-8 shadow-xs">
          {CREDIBILITY_POINTS.map((point) => (
            <div key={point.num} className="py-7 sm:py-8 first:pt-6 last:pb-6 flex items-start gap-4 sm:gap-6">
              <span className="font-mono text-xs sm:text-sm font-bold text-[#A37500] bg-amber-50/80 border border-amber-200/60 rounded-xs px-2 py-0.5 shrink-0 mt-0.5">
                {point.num}
              </span>
              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-[#112A3E] tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};
