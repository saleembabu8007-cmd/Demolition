import React, { useState } from 'react';
import { Plus, Minus, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { SectionWrapper, SectionHeading } from './ui';

interface FaqEntry {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: 'Can scrap metal value cover the cost of demolition?',
    answer: 'Yes. In many steel-framed industrial sheds and factories, the salvage value of structural steel and equipment offsets or exceeds demolition labor. When the scrap value is higher, we pay you the net difference directly.',
  },
  {
    question: 'How do you guarantee honest, accurate scrap weight?',
    answer: 'Every truck carrying salvaged metal is routed through an authorized, computerized public weighbridge near your site. You receive stamped digital weighment slips recording gross, tare, and net scrap weight.',
  },
  {
    question: 'Do you take care of concrete foundations and rubble removal?',
    answer: 'Yes. Complete rubble clearance is a standard part of our work. Hydraulic breakers demolish foundation footings, and tipper trucks haul all masonry debris away to authorized disposal sites.',
  },
  {
    question: 'How quickly can your engineer inspect our site?',
    answer: 'Our engineer visits your property anywhere across Kerala within 24 to 48 hours at zero charge. You can also share photos via WhatsApp for an initial assessment within hours.',
  },
  {
    question: 'What details do I need to share to get a quote?',
    answer: 'Share your site location, approximate building dimensions or equipment types, a few clear photos of the structure, and your timeline. We handle all measurements and safety checks during the site visit.',
  },
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <SectionWrapper id="faq" background="daylight" aria-labelledby="faq-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
        
        {/* Left Column: Context & Engineer Support Card */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <SectionHeading
            id="faq-heading"
            eyebrow="Direct Answers"
            title="Frequently asked questions."
            description="Practical answers on scrap valuation, public weighbridge slips, rubble clearance, and site handover."
            className="mb-0"
          />

          <div className="p-5 sm:p-6 rounded-sm bg-white border border-slate-200/90 shadow-xs space-y-3">
            <h4 className="text-sm font-bold text-[#112A3E] tracking-tight">
              Have specific structural questions?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Our site engineer evaluates structural dimensions, equipment salvage, and crane access at zero cost anywhere across Kerala.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#112A3E] hover:text-[#A37500] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFB800] rounded-xs"
                aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#A37500]" strokeWidth={2.5} aria-hidden="true" />
                <span>Call engineer: {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: WAI-ARIA Accessible Accordion */}
        <div className="lg:col-span-7 border-t border-b border-slate-200 divide-y divide-slate-200 bg-white rounded-sm px-6 sm:px-8 shadow-xs">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-trigger-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div key={idx} className="py-1">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleIndex(idx)}
                    className="w-full min-h-[52px] py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#112A3E] hover:text-[#0B1C2A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] focus-visible:ring-offset-1 rounded-sm"
                  >
                    <span>{item.question}</span>
                    <span 
                      aria-hidden="true" 
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-[#FFB800] text-[#112A3E]' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-balance animate-fadeIn"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
};
