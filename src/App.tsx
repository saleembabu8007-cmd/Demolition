import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { HowItWorks } from './components/HowItWorks';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-amber-100 selection:text-amber-900 pb-16 md:pb-0">
      {/* Accessible Skip to Content Link for Keyboard & Screen Reader Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-amber-500 focus:text-slate-950 focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-950"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <Intro />
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
