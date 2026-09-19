import React from 'react';

export const Intro: React.FC = () => {
  return (
    <section 
      id="about" 
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 lg:py-32 bg-white border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-6 sm:space-y-7">
          <span className="text-xs font-semibold text-amber-600 tracking-wider uppercase font-mono">
            (What We Do)
          </span>

          <h2 
            id="about-heading"
            className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-950 leading-[1.18] max-w-3xl"
          >
            One accountable crew from initial survey to a clean, level plot.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            We dismantle industrial structures, manufacturing plants, and heavy machinery under a single written agreement. Salvageable scrap metal value is credited directly against demolition labor, all concrete rubble is hauled away, and the land is handed over ready for immediate use.
          </p>

          {/* Quiet Factual Annotations */}
          <div className="pt-8 border-t border-slate-200/90 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700 font-normal">
            <span>Direct scrap offset valuation</span>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">/</span>
            <span>Certified public weighbridge slips</span>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">/</span>
            <span>Complete rubble haulage and ground leveling</span>
          </div>
        </div>

      </div>
    </section>
  );
};
