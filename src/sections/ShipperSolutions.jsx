// sections/ShipperSolutions.jsx
import React from 'react';
import { FaBox, FaTruck, FaChartLine, FaShieldAlt, FaClock, FaUsers, FaCheckCircle, FaPhone } from 'react-icons/fa';

const ShipperSolutions = ({ setCurrentSection }) => {
  const benefits = [
    { icon: FaTruck, title: "Reliable Capacity", description: "Access to vetted carriers with consistent availability across all 48 states" },
    { icon: FaChartLine, title: "Competitive Rates", description: "Market-competitive pricing with transparent fee structure" },
    { icon: FaShieldAlt, title: "Vetted Carriers", description: "All carriers screened for insurance, authority, and performance history" },
    { icon: FaClock, title: "24/7 Support", description: "Round-the-clock dispatch support for urgent shipments" },
    { icon: FaUsers, title: "Dedicated Account Manager", description: "Single point of contact for all your shipping needs" },
    { icon: FaBox, title: "Real-Time Tracking", description: "ELD-backed visibility for every load in transit" }
  ];

  const process = [
    { step: "01", title: "Submit Load", description: "Provide load details: origin, destination, weight, equipment type" },
    { step: "02", title: "Rate Negotiation", description: "We find the best carrier at competitive rates" },
    { step: "03", title: "Carrier Assignment", description: "Vetted carrier assigned with confirmed pickup" },
    { step: "04", title: "Live Tracking", description: "Real-time visibility from pickup to delivery" },
    { step: "05", title: "Proof of Delivery", description: "Digital documentation and POD confirmation" },
    { step: "06", title: "Fast Payment", description: "Quick pay options for carriers, billing for shippers" }
  ];

  return (
    <section className="py-20  bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => setCurrentSection('home')}
          className="text-[#D4A64A] hover:text-white mb-8 inline-flex items-center gap-2 transition-colors"
        >
          ← Back to Home
        </button>
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4A64A]/10 px-4 py-2 rounded-full mb-4">
            <FaBox className="text-[#D4A64A] text-sm" />
            <span className="text-[#D4A64A] text-xs uppercase tracking-wider font-semibold">For Shippers</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Shipper <span className="text-[#D4A64A]">Solutions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Reliable freight solutions with real-time tracking and dedicated support.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A64A]">500+</div>
            <div className="text-gray-400 text-sm">Active Carriers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A64A]">48</div>
            <div className="text-gray-400 text-sm">States Covered</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A64A]">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A64A]">100%</div>
            <div className="text-gray-400 text-sm">Vetted Carriers</div>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Wafa for Your Freight?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-black rounded-xl p-5 border border-gray-800 hover:border-[#D4A64A]/30 transition-all">
                  <Icon className="text-[#D4A64A] text-2xl mb-3" />
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* How It Works */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {process.map((item, index) => (
              <div key={index} className="relative bg-black rounded-xl p-4 border border-gray-800">
                <div className="text-[#D4A64A] font-bold text-xl mb-2">{item.step}</div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 text-[#D4A64A]">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Equipment We Handle */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Equipment We Handle</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Dry Van', 'Reefer', 'Flatbed', 'Step Deck', 'Hotshot', 'Box Truck', 'Power Only', 'Lowboy', 'Cargo Van'].map((eq) => (
              <span key={eq} className="bg-black px-4 py-2 rounded-full text-gray-300 text-sm border border-gray-700">
                {eq}
              </span>
            ))}
          </div>
        </div>
        
        {/* Industries We Serve */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Retail', 'Food & Beverage', 'Construction', 'Manufacturing', 'Pharmaceuticals', 'E-commerce', 'Automotive', 'Agriculture'].map((industry) => (
              <div key={industry} className="text-center">
                <FaCheckCircle className="text-[#D4A64A] text-sm mx-auto mb-2" />
                <span className="text-gray-300 text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-[#D4A64A]/10 to-transparent rounded-2xl p-8 border border-[#D4A64A]/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Ship?</h2>
          <p className="text-gray-400 mb-6">Get competitive rates and reliable carriers for your freight.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setCurrentSection('contact')}
              className="bg-[#D4A64A] hover:bg-[#BF933E] text-black font-semibold px-6 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <FaPhone /> Contact Sales
            </button>
            <button
              onClick={() => setCurrentSection('onboard')}
              className="border border-[#D4A64A] text-[#D4A64A] hover:bg-[#D4A64A] hover:text-black font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Get a Quote →
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ShipperSolutions;