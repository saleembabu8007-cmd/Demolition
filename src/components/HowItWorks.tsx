import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'Call +91 96457 77401 or message us on WhatsApp with structural photos and location details of the building or scrap machinery.'
  },
  {
    number: '02',
    title: 'Review & quotation',
    description: 'Our site supervisor visits your location anywhere in Kerala at zero cost, calculates salvageable scrap tonnage, and provides a clear written quotation.'
  },
  {
    number: '03',
    title: 'Schedule the work',
    description: 'We safely dismantle the structure, weigh all scrap metal on certified public weighbridges, haul away all rubble, and hand over a clean, level plot.'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section 
      id="how-it-works" 
      aria-labelledby="process-heading"
      className="py-20 sm:py-28 lg:py-32 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-600 tracking-widest uppercase font-mono">
            HOW WE WORK
          </span>
          <h2 
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-950"
          >
            Three simple steps.
          </h2>
        </div>

        {/* Semantic Ordered Process Sequence */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-8 sm:pt-10 border-t border-slate-200 list-none p-0 m-0">
          {STEPS.map((step) => (
            <li key={step.number} className="space-y-3">
              <span className="text-xs font-bold font-mono text-amber-600 tracking-wider block" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
};
