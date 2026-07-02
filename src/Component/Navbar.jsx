// Component/Navbar.jsx
import React, { useState } from 'react';

const Navbar = ({ setCurrentSection, currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navItems = [
    { name: 'Services', section: 'services' },
    { name: 'Equipment', section: 'equipment' },
    { name: 'Calculator', section: 'calculator' },
    { name: 'Advantage', section: 'advantage' },
    { name: 'Onboard', section: 'onboard' },
  ];

  const handleNavClick = (section) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:2012527402'; // Updated to (201) 252-7402
  };

  const showHomeButton = currentSection !== 'home';

  const logoSrc = "/value.png";

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex items-center"
          >
            {!logoError ? (
              <img 
                src={logoSrc}
                alt="Wafa Solutions Logo" 
                className="h-8 md:h-10 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-white font-bold text-xl">
                WAF<span className="text-[rgb(200,155,60)]">A</span>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {showHomeButton && (
              <button
                onClick={() => handleNavClick('home')}
                className="text-sm text-[rgb(200,155,60)] font-medium relative pb-1 group"
              >
                Home
                <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-[rgb(200,155,60)] group-hover:w-full transition-all duration-300"></span>
              </button>
            )}
            
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className="text-sm text-gray-300 font-medium relative pb-1 group"
              >
                {item.name}
                <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-[rgb(200,155,60)] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={handleCall}
              className="text-sm text-gray-300 hover:text-[rgb(200,155,60)] font-medium transition-colors duration-200 flex items-center gap-1"
            >
              📞 (201) 252-7402  {/* Updated to new number */}
            </button>
            <button
              onClick={() => handleNavClick('onboard')}
              className="bg-[rgb(200,155,60)] hover:bg-[rgb(180,135,70)] text-gray-900 px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              Hire A Dispatcher
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1 rounded-md text-gray-300 hover:text-[rgb(200,155,60)] focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t border-gray-800">
            {showHomeButton && (
              <button
                onClick={() => handleNavClick('home')}
                className="block w-full text-left py-2 px-4 text-sm text-[rgb(200,155,60)] hover:bg-gray-800 font-medium transition-colors duration-200"
              >
                Home
              </button>
            )}
            
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.section)}
                className="block w-full text-left py-2 px-4 text-sm text-gray-300 hover:text-[rgb(200,155,60)] hover:bg-gray-800 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleCall}
              className="block w-full text-left py-2 px-4 text-sm text-gray-300 hover:text-[rgb(200,155,60)] hover:bg-gray-800 font-medium"
            >
              📞 (201) 252-7402  {/* Already correct here */}
            </button>
            <div className="p-3">
              <button
                onClick={() => handleNavClick('onboard')}
                className="w-full bg-[rgb(200,155,60)] hover:bg-[rgb(180,135,70)] text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Hire A Dispatcher
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;