// sections/Careers.jsx
import React from 'react';

const Careers = ({ setCurrentSection }) => {
  return (
    <section className="py-20  bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => setCurrentSection('home')}
          className="text-[#D4A64A] hover:text-white mb-8 inline-flex items-center gap-2 transition-colors"
        >
          ← Back to Home
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Team</h1>
        
        <div className="space-y-6">
          <p className="text-gray-400">We're always looking for talented dispatchers and logistics professionals to join our growing team.</p>
          
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-[#D4A64A] mb-2">Dispatch Specialist</h2>
            <p className="text-gray-400 mb-3">Full-time · Remote · US-Based</p>
            <p className="text-gray-400 mb-4">Looking for experienced dispatchers with knowledge of DAT, Truckstop, and broker relationships.</p>
            <button 
              onClick={() => window.location.href = 'mailto:careers@wafasolutions.com'}
              className="text-[#D4A64A] hover:text-white transition-colors"
            >
              Apply Now →
            </button>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-[#D4A64A] mb-2">Carrier Sales Representative</h2>
            <p className="text-gray-400 mb-3">Full-time · Remote · US-Based</p>
            <p className="text-gray-400 mb-4">Seeking driven sales professionals to expand our carrier network.</p>
            <button 
              onClick={() => window.location.href = 'mailto:careers@wafasolutions.com'}
              className="text-[#D4A64A] hover:text-white transition-colors"
            >
              Apply Now →
            </button>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold text-[#D4A64A] mb-2">Operations Manager</h2>
            <p className="text-gray-400 mb-3">Full-time · Dallas, TX</p>
            <p className="text-gray-400 mb-4">Experienced logistics manager to oversee daily dispatch operations.</p>
            <button 
              onClick={() => window.location.href = 'mailto:careers@wafasolutions.com'}
              className="text-[#D4A64A] hover:text-white transition-colors"
            >
              Apply Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;