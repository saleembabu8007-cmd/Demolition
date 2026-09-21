import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-xs">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${SITE_CONFIG.phoneTel}`}
          className="flex-1 flex items-center justify-center gap-2 min-h-[46px] px-3 rounded-md bg-amber-500 active:bg-amber-600 text-slate-950 font-bold text-sm shadow-xs"
          aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
        >
          <Phone className="w-4 h-4 text-slate-950" strokeWidth={2.25} />
          <span>Call Us</span>
        </a>

        <a
          href={getWhatsAppUrl('Hello LTS, I would like to request a site visit for demolition or scrap removal.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 min-h-[46px] px-3 rounded-md bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-sm shadow-xs"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
};
