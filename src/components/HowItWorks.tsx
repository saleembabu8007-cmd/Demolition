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
    description: 'Call our direct desk or share site photos and structural dimensions via WhatsApp for an immediate preliminary review.'
  },
  {
    number: '02',
    title: 'Review & quotation',
    description: 'Our site supervisor visits at zero charge, assesses access and metal tonnage, and provides a clear written proposal.'
  },
  {
    number: '03',
    title: 'Schedule the work',
    description: 'We systematically dismantle the building, weigh all salvaged metal on public weighbridges, and haul away all concrete rubble.'
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
          <span className="text-xs font-semibold text-amber-600 tracking-wider uppercase font-mono">
            (How It Works)
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
