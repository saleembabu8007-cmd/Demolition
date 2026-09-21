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
          <span className="text-xs font-bold text-amber-600 tracking-widest uppercase font-mono">
            ABOUT LTS
          </span>

          <h2 
            id="about-heading"
            className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-950 leading-[1.18] max-w-3xl"
          >
            One reliable crew from initial site inspection to a clean, leveled plot.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            We dismantle factory buildings, industrial sheds, and heavy machinery under a single clear agreement. The value of your scrap metal is credited directly against demolition labor, all masonry rubble is hauled away, and your land is delivered level and ready to use.
          </p>

          {/* Quiet Factual Annotations */}
          <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700 font-medium">
            <span>Zero inspection fee across Kerala</span>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">/</span>
            <span>Certified public weighbridge slips</span>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">/</span>
            <span>Complete rubble carting & ground leveling</span>
          </div>
        </div>

      </div>
    </section>
  );
};
