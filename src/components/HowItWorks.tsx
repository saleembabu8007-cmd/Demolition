import React from 'react';
import { SectionWrapper, SectionHeading } from './ui';

interface ProcessStep {
  number: string;
  stage: string;
  title: string;
  description: string;
  detail: string;
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    stage: 'Inquiry',
    title: 'Share Your Project',
    description: 'Provide your site location, structure type, and approximate dimensions by phone or WhatsApp.',
    detail: 'Photos & site location via WhatsApp or direct call',
  },
  {
    number: '02',
    stage: 'Evaluation',
    title: 'Inspection & Quote',
    description: 'Our engineer visits your site anywhere in Kerala at zero charge and provides a firm written quotation.',
    detail: 'Complimentary site visit & estimated scrap credit',
  },
  {
    number: '03',
    stage: 'Execution',
    title: 'Work & Clearance',
    description: 'Our crew safely dismantles the structure, weighs salvaged scrap on public weighbridges, and clears all rubble.',
    detail: 'Certified weighbridge tickets & build-ready plot',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <SectionWrapper id="how-it-works" background="white" aria-labelledby="process-heading">
      {/* Section Header */}
      <SectionHeading
        id="process-heading"
        eyebrow="Process"
        title="Three simple stages."
        description="A straightforward engagement from initial inquiry to final build-ready site handover."
      />

      {/* 3-Stage Hairline Architectural Sequence (No Complex Diagrams or Floating Cards) */}
      <ol 
        aria-label="Three step project workflow"
        className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 list-none p-0 m-0"
      >
        {STEPS.map((step, index) => (
          <li 
            key={step.number} 
            className={`py-8 sm:py-10 ${
              index === 0 ? 'md:pr-8 lg:pr-10' : index === 1 ? 'md:px-8 lg:px-10' : 'md:pl-8 lg:pl-10'
            } flex flex-col justify-between space-y-6`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#A37500] tracking-widest uppercase">
                  Stage {step.number}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {step.stage}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#112A3E] tracking-tight">
                {step.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>

            {/* Glanceable Technical Detail */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] shrink-0" aria-hidden="true" />
              <span>{step.detail}</span>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
};
