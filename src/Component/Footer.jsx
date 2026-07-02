// components/Footer.jsx
import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = ({ setCurrentSection }) => {
  const handleNavigation = (e, section) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (setCurrentSection) {
      setCurrentSection(section);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCall = (e) => {
    e.stopPropagation();
    window.location.href = 'tel:2012527402'; // Updated to (201) 252-7402
  };

  const handleEmail = (e) => {
    e.stopPropagation();
    window.location.href = 'mailto:info@wafasolutions.com';
  };

  const openSocial = (url) => {
    window.open(url, '_blank');
  };

  // New function for Ali Gill Facebook link
  const handleAliGillClick = (e) => {
    e.stopPropagation();
    window.open('https://www.facebook.com/share/1DxvHe5jJM/', '_blank');
  };

  return (
    <footer 
      className="bg-gray-900 text-gray-400 py-8 md:py-12 select-none"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          
          {/* Logo Section with Social Media */}
          <div>
            <div 
              onClick={(e) => handleNavigation(e, 'home')}
              className="cursor-pointer group"
            >
              <h3 className="text-white text-xl font-bold mb-4 group-hover:text-[rgb(200,155,60)] transition-colors duration-300">
                WAF<span className="text-[rgb(200,155,60)] group-hover:text-white transition-colors duration-300">A</span>
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Premium US-based dispatch for owner-operators and small fleets. All 48 states. Every equipment type. Human dispatchers, 24/7/365.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="mt-5">
              <h4 className="text-white text-sm font-semibold mb-3">FOLLOW US</h4>
              <div className="flex gap-3">
                <button
                  onClick={() => openSocial('https://instagram.com/wafasolutions')}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[rgb(200,155,60)] hover:text-black transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-sm" />
                </button>
                <button
                  onClick={() => openSocial('https://twitter.com/wafasolutions')}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[rgb(200,155,60)] hover:text-black transition-all duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-sm" />
                </button>
                <button
                  onClick={() => openSocial('https://facebook.com/wafasolutions')}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[rgb(200,155,60)] hover:text-black transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-sm" />
                </button>
                <button
                  onClick={() => openSocial('https://tiktok.com/@wafasolutions')}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[rgb(200,155,60)] hover:text-black transition-all duration-300"
                  aria-label="TikTok"
                >
                  <FaTiktok className="text-sm" />
                </button>
              </div>
            </div>
          </div>
          
          {/* SERVICES Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={(e) => handleNavigation(e, 'onboard')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Carrier Dispatch</li>
              <li onClick={(e) => handleNavigation(e, 'shipper')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Shipper Solutions</li>
              <li onClick={(e) => handleNavigation(e, 'calculator')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Profit Calculator</li>
              <li onClick={(e) => handleNavigation(e, 'mc-help')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">MC Authority Help</li>
            </ul>
          </div>
          
          {/* EQUIPMENT Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">EQUIPMENT</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={(e) => handleNavigation(e, 'equipment')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Dry Van</li>
              <li onClick={(e) => handleNavigation(e, 'equipment')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Reefer</li>
              <li onClick={(e) => handleNavigation(e, 'equipment')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Flatbed</li>
              <li onClick={(e) => handleNavigation(e, 'equipment')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Step Deck</li>
              <li onClick={(e) => handleNavigation(e, 'equipment')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Hotshot</li>
              <li onClick={(e) => handleNavigation(e, 'equipment')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Box Truck</li>
            </ul>
          </div>
          
          {/* COMPANY Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={(e) => handleNavigation(e, 'about')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">About</li>
              <li onClick={(e) => handleNavigation(e, 'why-wafa')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Why Wafa</li>
              <li onClick={(e) => handleNavigation(e, 'contact')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Contact</li>
              <li onClick={(e) => handleNavigation(e, 'careers')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Careers</li>
              <li onClick={(e) => handleNavigation(e, 'privacy')} className="cursor-pointer hover:text-[rgb(200,155,60)] transition-colors duration-300">Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        {/* Contact Info - All Working */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-sm">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4">
            <button onClick={handleCall} className="hover:text-[rgb(200,155,60)] transition-colors duration-300 cursor-pointer flex items-center gap-1">
              📞 (201) 252-7402 
            </button>
            <span className="text-gray-600 hidden md:inline">|</span>
            
            <button onClick={handleEmail} className="hover:text-[rgb(200,155,60)] transition-colors duration-300 cursor-pointer flex items-center gap-1">
              ✉️ info@wafasolutions.com
            </button>
            <span className="text-gray-600 hidden md:inline">|</span>
            
            <span className="text-gray-400 flex items-center gap-1">
              📍 Dispatch HQ · Hoboken, NJ · Brooklyn, NY · Dallas, TX
            </span>
          </div>
          
          <p className="mt-4 text-gray-500">© 2026 Wafa Solutions LLC. All rights reserved.</p>
          
          {/* Developer Credit with Facebook Link */}
          <p className="mt-4 text-gray-500 text-xs">
            Developed by{' '}
            <span 
              onClick={handleAliGillClick}
              className="text-[rgb(200,155,60)] hover:text-white transition-colors duration-300 cursor-pointer hover:underline"
            >
              Ali Gill
            </span>
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;