import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-xs">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${SITE_CONFIG.phoneTel}`}
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] px-3 rounded-md bg-slate-100 active:bg-slate-200 text-slate-900 font-medium text-xs border border-slate-300"
          aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
        >
          <Phone className="w-3.5 h-3.5 text-slate-700" strokeWidth={1.75} />
          <span>Call</span>
        </a>

        <a
          href={getWhatsAppUrl('Hello, I would like to request an inspection for demolition / scrap removal.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] px-3 rounded-md bg-emerald-600 active:bg-emerald-700 text-white font-medium text-xs shadow-xs"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] px-3 rounded-md bg-amber-500 active:bg-amber-600 text-slate-950 font-semibold text-xs shadow-xs"
        >
          <span>Free Visit</span>
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
};
