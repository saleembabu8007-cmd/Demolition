import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { HowItWorks } from './components/HowItWorks';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#112A3E] flex flex-col antialiased selection:bg-[#FFB800]/30 selection:text-[#112A3E] pb-18 md:pb-0">
      {/* Accessible Skip to Content Link for Keyboard & Screen Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#FFB800] focus:text-[#112A3E] focus:font-bold focus:rounded-sm focus:shadow-md focus:outline-none focus:ring-2 focus:ring-[#112A3E]"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Approach />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
