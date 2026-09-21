import React from 'react';

export const Approach: React.FC = () => {
  return (
    <section 
      id="approach" 
      aria-labelledby="approach-heading"
      className="py-20 sm:py-28 lg:py-32 bg-slate-950 text-white border-b border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-4">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase font-mono">
            OUR COMMITMENT
          </span>

          <h2 
            id="approach-heading"
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.16]"
          >
            We don't leave rubble behind.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            Many scrap buyers take only valuable copper and structural steel, leaving broken concrete and hazardous waste on your land. At LTS, we handle the complete job: dismantling the building, purchasing the scrap, carting away all rubble in trucks, and leveling the ground.
          </p>
        </div>

        {/* 1 LARGE IMAGE MOMENT - Authentic Foundation Excavation & Rubble Clearance */}
        <div className="relative rounded-md overflow-hidden bg-slate-900 border border-slate-800/90 aspect-16/9 sm:aspect-21/9 mb-10 sm:mb-14">
          <img
            src="/images/rubble-clearance.jpg"
            alt="Hydraulic excavator loading foundation concrete rubble into tipper truck with leveled ground in foreground"
            loading="lazy"
            decoding="async"
            width="2200"
            height="1240"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-6 text-xs text-slate-300 font-mono">
            Foundation rubble clearance & ground leveling in progress
          </div>
        </div>

        {/* 3 Semantic Subsections under H2 */}
        <div className="pt-8 border-t border-slate-800/90 grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-300">
          <div className="space-y-1.5">
            <h3 className="font-semibold text-white text-base">Certified Weighbridge</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Every kilogram of salvaged scrap is weighed on computerized public weighbridges with printed slips.
            </p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-semibold text-white text-base">Direct Cost Offset</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              The fair value of your salvaged metal is credited directly against machinery and teardown labor costs.
            </p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-semibold text-white text-base">Level, Clean Plot</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              All concrete, bricks, and debris are hauled away, leaving your land graded and ready to build.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
