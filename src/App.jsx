import React from 'react';
import Hero from './components/Hero';
import SpikeCarousel from './components/SpikeCarousel';
import FeaturesGrid from './components/FeaturesGrid';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <SpikeCarousel />
      <FeaturesGrid />
      <CTASection />
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Velocity — Track & Field Spikes
      </footer>
    </div>
  );
}

export default App;
