import React, { useState } from 'react';
import { Phone, Factory, ArrowRight, Menu, X, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../siteConfig';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo Left - Bold Industrial Architectural Monogram */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm p-1 -m-1"
            aria-label="LTS Demolition & Scrap Services"
          >
            <div className="w-9 h-9 rounded-sm bg-slate-950 flex items-center justify-center text-amber-400 font-black text-sm tracking-tighter border border-slate-800 transition-colors group-hover:border-amber-400/50 shrink-0">
              LTS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-950 text-base tracking-tight leading-tight">
                {SITE_CONFIG.shortName}
              </span>
              <span className="text-[11px] text-slate-500 font-medium leading-none mt-0.5">
                Industrial Demolition & Heavy Scrap
              </span>
            </div>
          </a>

          {/* Minimal Editorial Navigation Center */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            <a 
              href="#about" 
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm px-1 py-0.5"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm px-1 py-0.5"
            >
              Services
            </a>
            <a 
              href="#approach" 
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm px-1 py-0.5"
            >
              Approach
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm px-1 py-0.5"
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm px-1 py-0.5"
            >
              FAQ
            </a>
          </nav>

          {/* Primary Action Right - Crisp Architectural Geometry */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="hidden md:inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors"
              aria-label={`Call ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" strokeWidth={1.75} aria-hidden="true" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-md bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-semibold text-xs sm:text-sm transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-md text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.75} /> : <Menu className="w-5 h-5" strokeWidth={1.75} />}
            </button>
          </div>

        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 bg-white space-y-3">
            <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-800">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100"
              >
                About
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100"
              >
                Services
              </a>
              <a 
                href="#approach" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100"
              >
                Approach
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100"
              >
                How It Works
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100"
              >
                FAQ
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-300 font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-slate-100 text-slate-900 font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-slate-700" />
                <span>Call: {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
