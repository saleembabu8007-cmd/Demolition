import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';
import { BrandLogo } from './BrandLogo';
import { Button } from './ui';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Accessibility: Close mobile menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Accessibility: Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#07131D]/95 backdrop-blur-md border-b border-white/10 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo Left - Official Azi Engineering Works Reversed Horizontal Vector Logo */}
          <a 
            href="#" 
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07131D] rounded-sm py-1 -my-1"
            aria-label={`${SITE_CONFIG.name} homepage`}
          >
            <BrandLogo variant="reversed-horizontal" priority={true} className="h-8.5 sm:h-9.5 md:h-10 w-auto" />
          </a>

          {/* Minimal Editorial Navigation Center: Services, How It Works, Clearance Standard, FAQs, Contact */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            <a 
              href="#services" 
              className="h-11 inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm px-3"
            >
              Services
            </a>
            <a 
              href="#how-it-works" 
              className="h-11 inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm px-3"
            >
              How It Works
            </a>
            <a 
              href="#why-azi" 
              className="h-11 inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm px-3"
            >
              Clearance Standard
            </a>
            <a 
              href="#faq" 
              className="h-11 inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm px-3"
            >
              FAQs
            </a>
            <a 
              href="#contact" 
              className="h-11 inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm px-3"
            >
              Contact
            </a>
          </nav>

          {/* Actions Right: Direct Phone + Primary CTA "Request a Quote" */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="hidden xl:inline-flex items-center gap-2 text-xs xl:text-sm font-bold text-slate-200 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] rounded-sm px-2 py-1"
              aria-label={`Call direct: ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#FFB800]" strokeWidth={2.5} aria-hidden="true" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <div className="hidden sm:block">
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5 text-[#112A3E]" strokeWidth={2.25} aria-hidden="true" />}
                className="shadow-xs font-bold text-xs sm:text-sm tracking-tight"
              >
                Request a Quote
              </Button>
            </div>

            {/* Mobile menu toggle with WCAG 44x44px Touch Target */}
            <button
              type="button"
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800] transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" strokeWidth={2} /> : <Menu className="w-6 h-6" strokeWidth={2} />}
            </button>
          </div>

        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-panel"
            className="md:hidden py-4 border-t border-white/10 bg-[#07131D] space-y-3"
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <nav className="flex flex-col space-y-1">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-xs transition-colors"
              >
                Services
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-xs transition-colors"
              >
                How It Works
              </a>
              <a 
                href="#why-azi" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-xs transition-colors"
              >
                Clearance Standard
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-xs transition-colors"
              >
                FAQs
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-xs transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowRight className="w-4 h-4 text-[#112A3E]" strokeWidth={2.25} aria-hidden="true" />}
              >
                Request a Quote
              </Button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${SITE_CONFIG.phoneTel}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold text-white bg-white/10 hover:bg-white/15 rounded-xs border border-white/15 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFB800]" aria-hidden="true" />
                  <span>Call Us</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 text-xs font-bold text-white bg-white/10 hover:bg-white/15 rounded-xs border border-white/15 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#FFB800]" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
