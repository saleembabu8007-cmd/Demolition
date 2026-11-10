import React from 'react';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';

export const MobileStickyBar: React.FC = () => {
  return (
    <div 
      role="region"
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#07131D]/95 backdrop-blur-md border-t border-white/10 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phoneTel}`}
          className="flex-1 flex items-center justify-center gap-2 min-h-[46px] px-3 rounded-xs bg-[#112A3E] hover:bg-[#1C3A52] active:bg-[#0B1C2A] text-white font-bold text-xs sm:text-sm border border-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]"
          aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
        >
          <Phone className="w-3.5 h-3.5 text-[#FFB800]" strokeWidth={2.25} aria-hidden="true" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp Icon Quick Trigger */}
        <a
          href={getWhatsAppUrl('Hello Azi Engineering Works, I would like to request an on-site inspection for demolition or scrap removal.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center min-w-[46px] min-h-[46px] rounded-xs bg-white/10 hover:bg-white/15 text-[#FFB800] border border-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]"
          aria-label="Message our team on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-[#FFB800]" aria-hidden="true" />
        </a>

        {/* Jump to Quote Form */}
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[46px] px-3 rounded-xs bg-[#FFB800] hover:bg-[#E5A600] active:bg-[#CC9400] text-[#112A3E] font-extrabold text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Jump to quotation form"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
