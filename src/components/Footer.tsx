import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Content Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-sm bg-slate-900 flex items-center justify-center text-amber-400 font-black text-xs tracking-tighter border border-slate-800 shrink-0 mt-0.5">
              LTS
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight">
                {SITE_CONFIG.name}
              </span>
              <p className="text-xs text-slate-400 mt-1 font-normal max-w-md">
                Controlled industrial demolition, plant dismantling, and heavy scrap purchasing across Kerala.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm">
            <a 
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
              aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" strokeWidth={1.75} aria-hidden="true" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a 
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
              <span>WhatsApp Desk</span>
            </a>

            <span className="text-slate-500 font-mono text-xs">
              {SITE_CONFIG.operatingHours}
            </span>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {currentYear} {SITE_CONFIG.shortName}. All rights reserved.
          </div>
          <div className="font-mono text-[11px]">
            Certified public weighbridge slips • Complete rubble carting
          </div>
        </div>

      </div>
    </footer>
  );
};
