// sections/MCAuthorityHelp.jsx
import React from 'react';
import { FaCheckCircle, FaFileAlt, FaClock, FaPhone, FaEnvelope, FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';

const MCAuthorityHelp = ({ setCurrentSection }) => {
  const steps = [
    { num: "01", title: "Gather Documents", description: "Business registration, proof of insurance, and operating location details" },
    { num: "02", title: "Submit Application", description: "File FMCSA application online through the Unified Registration System (URS)" },
    { num: "03", title: "Process BOC-3", description: "Designate a process agent for each state you'll operate in" },
    { num: "04", title: "Wait for Approval", description: "FMCSA review typically takes 4-6 weeks for new authorities" },
    { num: "05", title: "Get Insurance", description: "Obtain required liability and cargo insurance coverage" },
    { num: "06", title: "Start Operating", description: "Once approved, you're ready to haul freight across all 48 states" }
  ];

  const requirements = [
    { title: "Business Registration", description: "LLC, Corporation, or Sole Proprietorship documentation" },
    { title: "BOC-3 Filing", description: "Process agent designation for legal service of process" },
    { title: "Insurance", description: "$750k liability minimum for general freight" },
    { title: "Drug & Alcohol Program", description: "FMCSA-compliant testing program" },
    { title: "HVUT Form 2290", description: "Heavy vehicle use tax filing" },
    { title: "Unified Carrier Registration", description: "Annual UCR filing based on fleet size" }
  ];

  const commonQuestions = [
    { q: "How long does it take to get MC Authority?", a: "Typically 4-6 weeks for new authorities, 2-3 weeks for reactivations." },
    { q: "How much does it cost?", a: "FMCSA filing fees: $300 MC number, $100 DOT number. Plus BOC-3 ($50-100)." },
    { q: "Can I operate without MC Authority?", a: "No. You need active MC authority for interstate freight hauling." },
    { q: "What's the difference between MC and DOT?", a: "DOT identifies your company; MC authorizes interstate operations." }
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
            <FaFileAlt className="text-[#D4A64A] text-sm" />
            <span className="text-[#D4A64A] text-xs uppercase tracking-wider font-semibold">MC Authority Guide</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            MC & DOT <span className="text-[#D4A64A]">Authority Help</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Everything you need to know about getting your MC authority and DOT number.
          </p>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A64A]">4-6</div>
            <div className="text-gray-400 text-sm">Weeks Processing</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A64A]">$400</div>
            <div className="text-gray-400 text-sm">Avg Filing Cost</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A64A]">48</div>
            <div className="text-gray-400 text-sm">States to Operate</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-2xl font-bold text-[#D4A64A]">$750k</div>
            <div className="text-gray-400 text-sm">Min Insurance</div>
          </div>
        </div>
        
        {/* How to Get MC Authority */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">How to Get Your MC Authority</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="bg-black rounded-xl p-4 border border-gray-800">
                <div className="text-[#D4A64A] font-bold text-2xl mb-2">{step.num}</div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Requirements */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-4">Requirements</h2>
            <ul className="space-y-3">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#D4A64A] text-sm mt-0.5" />
                  <div>
                    <span className="text-white font-medium">{req.title}</span>
                    <p className="text-gray-400 text-sm">{req.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-xl font-bold text-white mb-4">Cost Breakdown</h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">MC Number Filing</span>
                <span className="text-white font-medium">$300</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">DOT Number Filing</span>
                <span className="text-white font-medium">$100</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">BOC-3 Filing</span>
                <span className="text-white font-medium">$50-100</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">Insurance (Annual)</span>
                <span className="text-white font-medium">$5,000-15,000</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-400">UCR Filing (Annual)</span>
                <span className="text-white font-medium">$50-500</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {commonQuestions.map((item, index) => (
              <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Need Help CTA */}
        <div className="bg-gradient-to-r from-[#D4A64A]/10 to-transparent rounded-2xl p-8 border border-[#D4A64A]/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need Help Getting Your Authority?</h2>
          <p className="text-gray-400 mb-6">Our team can guide you through the entire process or handle it for you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setCurrentSection('contact')}
              className="bg-[#D4A64A] hover:bg-[#BF933E] text-black font-semibold px-6 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <FaPhone /> Call 📞 (201) 252-7402 
            </button>
            <button
              onClick={() => setCurrentSection('onboard')}
              className="border border-[#D4A64A] text-[#D4A64A] hover:bg-[#D4A64A] hover:text-black font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Get Started →
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MCAuthorityHelp;