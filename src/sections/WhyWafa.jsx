// sections/WhyWafa.jsx
import React from 'react';
import { FaCheckCircle, FaTruck, FaHeadset, FaShieldAlt, FaChartLine, FaClock, FaDollarSign, FaUsers } from 'react-icons/fa';

const WhyWafa = ({ setCurrentSection }) => {
  const features = [
    {
      icon: FaTruck,
      title: "Driver-First Philosophy",
      description: "We answer to the driver, not the load board. No-force policy means you choose your lanes, your rates, and your home time.",
      color: "from-blue-500/20"
    },
    {
      icon: FaHeadset,
      title: "24/7 US-Based Support",
      description: "Real human dispatchers available anytime, anywhere. No bots, no offshore call centers. We answer in three rings.",
      color: "from-green-500/20"
    },
    {
      icon: FaShieldAlt,
      title: "100% Vetted Brokers",
      description: "Every load checked for credit, payment history, and reliability before you commit. No surprises at week six.",
      color: "from-purple-500/20"
    },
    {
      icon: FaChartLine,
      title: "Aggressive Rate Negotiation",
      description: "We don't accept the first offer. We push for fuel surcharges, detention, layover, and lumpers — every single time.",
      color: "from-orange-500/20"
    },
    {
      icon: FaClock,
      title: "Paperwork Handled",
      description: "Rate cons, BOLs, factoring submissions, broker packets — we handle it all. You just drive and sign on the screen.",
      color: "from-cyan-500/20"
    },
    {
      icon: FaDollarSign,
      title: "Transparent Pricing",
      description: "Flat dispatch fee with no hidden percentages, no monthly minimums, no long-term contracts. You earn what you deserve.",
      color: "from-red-500/20"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Drivers", icon: FaUsers },
    { number: "48", label: "States Covered", icon: FaTruck },
    { number: "$3.18", label: "Avg RPM Negotiated", icon: FaChartLine },
    { number: "24/7", label: "Human Support", icon: FaHeadset }
  ];

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
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
            <span className="text-[#D4A64A] text-lg">⚡</span>
            <span className="text-[#D4A64A] text-xs uppercase tracking-wider font-semibold">Why Choose Us</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why <span className="text-[#D4A64A]">Wafa Solutions</span>?
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We're not just another dispatch service. We're your partner in success.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800 hover:border-[#D4A64A]/30 transition-all duration-300">
                <Icon className="text-[#D4A64A] text-2xl mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-[#D4A64A]/30 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-[#D4A64A] text-xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#D4A64A]/10 to-transparent rounded-2xl p-8 border border-[#D4A64A]/20 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To empower owner-operators and small fleets by providing premium dispatch services 
                that maximize earnings while respecting driver autonomy. We believe that when carriers 
                succeed, everyone wins.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#D4A64A]/20 flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => setCurrentSection('onboard')}
            className="bg-[#D4A64A] hover:bg-[#BF933E] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Join Our Fleet Today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p className="text-gray-500 text-sm mt-4">No contracts. No hidden fees. No pressure.</p>
        </div>
        
      </div>
    </section>
  );
};

export default WhyWafa;