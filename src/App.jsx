import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import CaseStudies from './components/CaseStudies';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-neutral-100 selection:bg-purple-500 selection:text-white antialiased overflow-x-hidden">
      {/* Dynamic ambient particles or overlays if needed, else the dark theme looks pristine */}
      
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Workflow Section */}
      <Workflow />

      {/* Performance Case Studies */}
      <CaseStudies />

      {/* Infinite Marquee of tools */}
      <Marquee />

      {/* Contact Section */}
      <Contact />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
