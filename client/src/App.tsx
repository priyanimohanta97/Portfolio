import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';

export const App: React.FC = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ArchitectureSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
