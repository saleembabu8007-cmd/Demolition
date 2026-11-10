import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1C2A] text-slate-300 border-t border-[#1C3A52] py-12 sm:py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1C3A52]/80">
          
          {/* Brand & Brief Description */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="#" 
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm py-1 -my-1"
              aria-label={`${SITE_CONFIG.name} homepage`}
            >
              <BrandLogo variant="reversed-horizontal" className="h-9 w-auto" />
            </a>

            <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
              Controlled factory demolition, heavy plant dismantling, certified scrap metal purchasing, and complete site clearance across Kerala.
            </p>

            <p className="text-xs text-slate-400">
              Service reach: {SITE_CONFIG.serviceArea}
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-0.5 text-sm">
              <li>
                <a href="#services" className="hover:text-[#FFB800] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFB800] rounded-xs inline-flex items-center min-h-[44px]">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#FFB800] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFB800] rounded-xs inline-flex items-center min-h-[44px]">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-azi" className="hover:text-[#FFB800] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFB800] rounded-xs inline-flex items-center min-h-[44px]">
                  Clearance Standard
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFB800] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFB800] rounded-xs inline-flex items-center min-h-[44px] min-w-[44px]">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFB800] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFB800] rounded-xs inline-flex items-center min-h-[44px]">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <a 
                  href={`tel:${SITE_CONFIG.phoneTel}`}
                  className="inline-flex items-center gap-2 text-white hover:text-[#FFB800] transition-colors font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFB800] rounded-xs py-0.5"
                  aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
                >
                  <Phone className="w-4 h-4 text-[#FFB800]" aria-hidden="true" />
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                </a>
              </div>
              <div>
                <a 
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded-xs py-0.5"
                  aria-label="Contact our team on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" aria-hidden="true" />
                  <span>WhatsApp Communication Desk</span>
                </a>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                Operating schedule: {SITE_CONFIG.operatingHours}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Service Verification */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </div>
          <div>
            Authorized public weighbridge slips issued with every scrap dispatch
          </div>
        </div>

      </div>
    </footer>
  );
};
