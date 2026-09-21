import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';

export const FinalCta: React.FC = () => {
  return (
    <section 
      id="contact" 
      aria-labelledby="cta-heading"
      className="relative py-24 sm:py-32 lg:py-36 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background with quiet, authentic industrial image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-demolition.jpg"
          alt="LTS industrial teardown and site clearance"
          loading="lazy"
          decoding="async"
          width="2400"
          height="1350"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-[0.7] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/95 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase font-mono">
          FREE SITE VISIT
        </span>

        {/* Short, strong heading */}
        <h2 
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.18] max-w-2xl mx-auto"
        >
          Have a structure to dismantle or scrap machinery to sell?
        </h2>

        {/* One concise sentence */}
        <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mx-auto">
          We inspect your site at zero charge anywhere in Kerala, calculate your scrap metal offset, and provide a clear written quote within 24 hours.
        </p>

        {/* Action Pair */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-semibold text-sm sm:text-base transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-slate-950" strokeWidth={2.25} aria-hidden="true" />
            <span>Call: {SITE_CONFIG.phoneDisplay}</span>
          </a>

          <a
            href={getWhatsAppUrl('Hello LTS, I would like to request a free site visit for demolition or scrap removal.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium text-sm sm:text-base transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span>WhatsApp Us</span>
            <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <p className="text-xs text-slate-400 pt-1 font-mono">
          Serving industrial and commercial property owners across Kerala • Zero inspection fee
        </p>

      </div>
    </section>
  );
};
