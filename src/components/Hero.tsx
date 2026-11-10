import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Scale, Truck } from 'lucide-react';
import { SITE_CONFIG } from '../siteConfig';
import { Button } from './ui';

export const Hero: React.FC = () => {
  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center bg-[#07131D] text-white overflow-hidden border-b border-slate-900"
    >
      {/* 1. Full-Bleed High-Impact Demolition Photographic Background */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none block">
        <source type="image/webp" srcSet="/images/hero-demolition.webp" />
        <img
          src="/images/hero-demolition.jpg"
          alt="Heavy demolition excavator equipped with hydraulic shear dismantling industrial steel structure on site"
          fetchPriority="high"
          decoding="async"
          width="1376"
          height="768"
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.08]"
        />
      </picture>

      {/* 2. Controlled Industrial Contrast Overlay for Pristine Readability (WCAG AAA) */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#07131D]/96 via-[#07131D]/88 to-[#07131D]/55 sm:to-[#07131D]/45 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#07131D] via-[#07131D]/60 to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* 3. Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xs bg-[#FFB800]/15 border border-[#FFB800]/30 text-[#FFB800] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" aria-hidden="true" />
            <span>Industrial Demolition & Site Clearance • Kerala</span>
          </div>

          {/* H1 Headline */}
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.08] mb-5 sm:mb-6 text-balance"
          >
            Industrial demolition, plant dismantling, and site clearance.
          </h1>

          {/* Single-Sentence Concise Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 text-balance">
            Controlled dismantling of factory buildings, heavy machinery breakdown, certified weighbridge scrap purchasing, and complete site clearance across Kerala.
          </p>

          {/* Primary CTA + Verified Direct Contact Action */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-12 sm:mb-14">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 text-[#112A3E]" strokeWidth={2.5} aria-hidden="true" />}
              className="text-sm sm:text-base font-extrabold shadow-lg shadow-black/25 px-8 py-4"
            >
              Request a Quote
            </Button>

            <Button
              href={`tel:${SITE_CONFIG.phoneTel}`}
              variant="outline"
              size="lg"
              icon={<Phone className="w-4 h-4 text-[#FFB800]" strokeWidth={2.25} aria-hidden="true" />}
              iconPosition="left"
              aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
              className="text-sm sm:text-base font-bold bg-[#112A3E]/70 hover:bg-[#112A3E] text-white border-white/20 backdrop-blur-xs px-7 py-4"
            >
              Call {SITE_CONFIG.phoneDisplay}
            </Button>
          </div>

          {/* Factual Operational Baseline Strip */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#FFB800] shrink-0" aria-hidden="true" />
              <span>Zero-fee on-site inspection</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Scale className="w-4 h-4 text-[#FFB800] shrink-0" aria-hidden="true" />
              <span>Direct scrap value offset</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-[#FFB800] shrink-0" aria-hidden="true" />
              <span>Computerized weighbridge tickets</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
