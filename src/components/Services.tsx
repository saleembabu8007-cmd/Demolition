import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper, SectionHeading, Button } from './ui';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  scope: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'factory-demolition',
    number: '01',
    title: 'Factory & Building Demolition',
    description: 'Controlled dismantling of industrial sheds, warehouses, and commercial steel structures using hydraulic machinery and trained gas-cutting crews.',
    scope: ['Industrial sheds & mills', 'Steel warehouses', 'Commercial framing'],
  },
  {
    id: 'heavy-machinery',
    number: '02',
    title: 'Heavy Machinery Dismantling',
    description: 'On-site dismantling, heavy rigging, and buyout of industrial plant equipment, including generators, chillers, boilers, transformers, and storage tanks.',
    scope: ['Generators & transformers', 'Boilers & chillers', 'Industrial plant tanks'],
  },
  {
    id: 'metal-scrap',
    number: '03',
    title: 'Industrial Metal Scrap Removal',
    description: 'Bulk purchase and clearing of structural steel, copper, iron beams, and production scrap weighed transparently on certified public weighbridges.',
    scope: ['Structural I-beams & columns', 'Copper & heavy cable', 'Production metal waste'],
  },
  {
    id: 'site-clearance',
    number: '04',
    title: 'Site Clearance & Leveling',
    description: 'Complete foundation breaking, tipper truck hauling of all concrete rubble, and surface grading to deliver a clean, build-ready plot.',
    scope: ['Foundation breaking', 'Rubble haulage in tippers', 'Plot grading & handover'],
  },
];

export const Services: React.FC = () => {
  return (
    <SectionWrapper id="services" background="white" aria-labelledby="services-heading">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
        <SectionHeading
          id="services-heading"
          eyebrow="Core Capabilities"
          title="What we dismantle and clear."
          description="Four focused capabilities under a single contract. Direct contractor execution, transparent weighbridge scrap pricing, and clean handover."
          className="mb-0 max-w-2xl"
        />
        <div className="hidden md:block shrink-0">
          <Button
            href="#contact"
            variant="outline"
            size="sm"
            icon={<ArrowRight className="w-4 h-4 text-[#A37500]" strokeWidth={2.5} aria-hidden="true" />}
          >
            Request a Quote
          </Button>
        </div>
      </div>

      {/* 2x2 Architectural Grid with Hairline Dividers (No Generic Rounded Cards) */}
      <div className="border-t border-b border-slate-200 divide-y divide-slate-200 md:grid md:grid-cols-2 md:divide-y-0 md:divide-x">
        {SERVICES.map((service, index) => (
          <article
            key={service.id}
            className={`py-8 sm:py-10 ${
              index % 2 === 0 ? 'md:pr-10 lg:pr-12' : 'md:pl-10 lg:pl-12'
            } ${index >= 2 ? 'md:border-t md:border-slate-200' : ''} flex flex-col justify-between group hover:bg-slate-50/50 transition-colors`}
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#A37500] bg-amber-50 border border-amber-200/80 rounded-xs px-2 py-0.5 tracking-wider uppercase">
                  Service {service.number}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-[#112A3E] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFB800] rounded-xs"
                  aria-label={`Get quote for ${service.title}`}
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#112A3E] tracking-tight">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {service.description}
              </p>
            </div>

            {/* Glanceable Scope Tags */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-2">
              {service.scope.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-600 bg-white border border-slate-200 rounded-xs px-2.5 py-1 font-medium select-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Mobile Action */}
      <div className="mt-8 md:hidden">
        <Button
          href="#contact"
          variant="outline"
          size="md"
          fullWidth
          icon={<ArrowRight className="w-4 h-4 text-[#A37500]" strokeWidth={2.5} aria-hidden="true" />}
        >
          Request a Quote for Your Site
        </Button>
      </div>
    </SectionWrapper>
  );
};
