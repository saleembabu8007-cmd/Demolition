import React from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';

export const Hero: React.FC = () => {
  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative min-h-[540px] sm:min-h-[620px] lg:min-h-[680px] flex items-center bg-slate-950 text-white overflow-hidden"
    >
      {/* 1. Full-Bleed Photographic Canvas - ONE authentic industrial image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=2400&q=85"
          alt="Industrial structural steel demolition and site clearance with heavy machinery"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          width="2400"
          height="1600"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.03]"
        />
        {/* Directional scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-mono">
              DEMOLITION & SCRAP SERVICES
            </span>
          </div>

          {/* Single H1 on Page */}
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5 max-w-xl"
          >
            Industrial demolition and scrap removal, handled simply.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 sm:mb-10 max-w-lg">
            Factory demolition, machinery scrap and site clearance for businesses and property owners across Kerala.
          </p>

          {/* Button Atoms */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-semibold text-sm sm:text-base transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            </a>

            <a
              href={getWhatsAppUrl('Hello, I would like to enquire about industrial demolition or scrap removal.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 active:bg-white/15 text-white border border-white/25 font-medium text-sm sm:text-base backdrop-blur-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Contact our team on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="inline-flex items-center gap-2 px-3 py-3.5 text-slate-300 hover:text-white text-sm sm:text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded-sm"
              aria-label={`Call direct desk at ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-amber-400" strokeWidth={1.75} aria-hidden="true" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
