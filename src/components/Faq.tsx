import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqEntry {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: 'Can scrap metal value cover the full cost of demolition?',
    answer: 'Yes. In many manufacturing plants, warehouses, and industrial sheds, the salvage value of heavy steel beams, copper cabling, and machinery balances or exceeds demolition labor. In those cases, we pay the property owner the net difference directly.'
  },
  {
    question: 'How do you guarantee fair scrap weight?',
    answer: 'All scrap metal is weighed on computerized, government-authorized public weighbridges before leaving the site. You receive stamped digital weighment slips showing exact tare, gross, and net weight.'
  },
  {
    question: 'Do you take care of concrete rubble and debris?',
    answer: 'Yes. We deploy hydraulic breaker excavators and tipper trucks to break foundations and haul away all concrete, brickwork, and masonry rubble to authorized disposal sites, leaving a clean, level plot.'
  },
  {
    question: 'How quickly can you inspect our site?',
    answer: 'Our supervisor can visit your site within 24 to 48 hours anywhere across Kerala. You can also call us directly at +91 96457 77401 or send site photos via WhatsApp for an immediate initial assessment.'
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      aria-labelledby="faq-heading"
      className="py-20 sm:py-28 lg:py-32 bg-slate-50/70 border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14 space-y-3">
          <span className="text-xs font-bold text-amber-600 tracking-widest uppercase font-mono">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-950"
          >
            Common questions.
          </h2>
        </div>

        {/* WAI-ARIA Accordion Pattern with fine dividers */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-trigger-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div key={idx} className="py-6 sm:py-7">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full text-left flex items-start justify-between gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-sm group cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-semibold text-slate-950 tracking-tight group-hover:text-amber-700 transition-colors">
                      {item.question}
                    </span>
                    <span className="text-slate-400 mt-1 shrink-0 group-hover:text-slate-700 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-amber-600" strokeWidth={2} aria-hidden="true" />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div 
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pt-3 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-3xl"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
