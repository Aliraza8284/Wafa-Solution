import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Hero from './sections/Hero';
import Advantage from './sections/Advantage';
import Equipment from './sections/Equipment';
import Calculator from './sections/Calculator';
import OnboardingForm from './sections/OnboardingForm';
import Partners from './sections/Partners';
import PrivacyPolicy from './sections/PrivacyPolicy';
import WhyWafa from './sections/WhyWafa';
import Contact from './sections/Contact';
import Careers from './sections/Careers';
import About from './sections/About';
import MCAuthorityHelp from './sections/MCAuthorityHelp';
import ShipperSolutions from './sections/ShipperSolutions';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  // Disable keyboard shortcuts for copy/paste/save
  useEffect(() => {
    const disableKeys = (e) => {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || 
          e.key === 'v' || e.key === 'V' || 
          e.key === 'x' || e.key === 'X' || 
          e.key === 's' || e.key === 'S' || 
          e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
    };
    
    window.addEventListener('keydown', disableKeys);
    return () => window.removeEventListener('keydown', disableKeys);
  }, []);

  const renderSection = () => {
    switch(currentSection) {
      case 'home':
        return (
          <>
            <Hero setCurrentSection={setCurrentSection} />
            <Equipment />
            <Advantage />
            <Calculator />
            <Partners />
            <OnboardingForm/>
          </>
        );
      case 'services':
        return <Advantage />;
      case 'advantage':
        return <Advantage />;
      case 'equipment':
        return <Equipment />;
      case 'calculator':
        return <Calculator />;
      case 'onboard':
        return <OnboardingForm />;
      case 'privacy':
        return <PrivacyPolicy setCurrentSection={setCurrentSection} />;
      case 'why-wafa':
        return <WhyWafa setCurrentSection={setCurrentSection} />;
      case 'contact':
        return <Contact setCurrentSection={setCurrentSection} />;
      case 'careers':
        return <Careers setCurrentSection={setCurrentSection} />;
      case 'about':
        return <About setCurrentSection={setCurrentSection} />;
      case 'mc-help':
        return <MCAuthorityHelp setCurrentSection={setCurrentSection} />;
      case 'shipper':
        return <ShipperSolutions setCurrentSection={setCurrentSection} />;
      default:
        return (
          <>
            <Hero setCurrentSection={setCurrentSection} />
            <Advantage />
            <Equipment />
            <Calculator />
            <Partners />
          </>
        );
    }
  };

  const handleSetSection = (section) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen bg-gray-900"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onPaste={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <Navbar setCurrentSection={handleSetSection} currentSection={currentSection} />
      <main>
        {renderSection()}
      </main>
      <Footer setCurrentSection={handleSetSection} />
    </div>
  );
}

export default App;