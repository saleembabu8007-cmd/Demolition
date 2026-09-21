import React from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';

export const Hero: React.FC = () => {
  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative min-h-[540px] sm:min-h-[620px] lg:min-h-[680px] flex items-center bg-slate-950 text-white overflow-hidden"
    >
      {/* 1. Full-Bleed Photographic Canvas - Authentic industrial demolition with hydraulic shear */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-demolition.jpg"
          alt="Industrial factory demolition with hydraulic excavator shearing structural steel"
          fetchPriority="high"
          decoding="async"
          width="2400"
          height="1350"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
        />
        {/* Directional scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-mono">
              LTS INDUSTRIAL SERVICES • KERALA
            </span>
          </div>

          {/* Single H1 on Page */}
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5 max-w-xl"
          >
            Industrial demolition and heavy scrap removal across Kerala.
          </h1>

          {/* Supporting Copy - Simple, direct English */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 sm:mb-10 max-w-lg">
            We dismantle factory sheds, purchase machinery scrap at fair weighbridge rates, and clear the site clean for your next project.
          </p>

          {/* Action Pair - Clear Hierarchy per Rule 6 */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-bold text-sm sm:text-base transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-slate-900/90 hover:bg-slate-850 active:bg-slate-800 text-white border border-slate-750 font-semibold text-sm sm:text-base transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-amber-400" strokeWidth={2} aria-hidden="true" />
              <span>Call: {SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppUrl('Hello LTS, I would like to request a site visit for industrial demolition or scrap removal.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium text-sm sm:text-base transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Contact our team on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
