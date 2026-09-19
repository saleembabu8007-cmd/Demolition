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
          <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase font-mono">
            (Our Approach)
          </span>

          <h2 
            id="approach-heading"
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.16]"
          >
            We don't leave rubble behind.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            Many scrap buyers extract only valuable copper and structural steel, abandoning broken concrete foundations and hazardous debris. We operate as a complete demolition crew: dismantling the building, purchasing the scrap, carting away all rubble, and leveling the ground.
          </p>
        </div>

        {/* 1 LARGE IMAGE MOMENT */}
        <div className="relative rounded-md overflow-hidden bg-slate-900 border border-slate-800/90 aspect-16/9 sm:aspect-21/9 mb-10 sm:mb-14">
          <img
            src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=2200&q=85"
            alt="Heavy hydraulic excavator removing foundation concrete rubble for complete site clearance"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            width="2200"
            height="940"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-6 text-xs text-slate-300 font-mono">
            Site clearance & foundation excavation in progress
          </div>
        </div>

        {/* 3 Semantic Subsections under H2 */}
        <div className="pt-8 border-t border-slate-800/90 grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-300">
          <div className="space-y-1.5">
            <h3 className="font-semibold text-white text-base">Fair Weighment</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Every kilogram of salvaged scrap is weighed on computerized public weighbridges before leaving the site.
            </p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-semibold text-white text-base">Cost Offset</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Salvageable metal credit is applied directly against teardown machinery and labor costs.
            </p>
          </div>
          <div className="space-y-1.5">
            <h3 className="font-semibold text-white text-base">Clean Plot</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Masonry rubble is carted to authorized disposal facilities, leaving a level, ready-to-build site.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
