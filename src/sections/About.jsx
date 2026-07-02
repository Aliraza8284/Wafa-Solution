// sections/About.jsx
import React from 'react';
import { FaGlobe, FaTruck, FaUsers, FaAward, FaHandshake, FaBuilding } from 'react-icons/fa';

const About = ({ setCurrentSection }) => {
  const milestones = [
    { year: "2020", title: "Company Founded", description: "Wafa Solutions was established in Hoboken, NJ", icon: FaBuilding },
    { year: "2021", title: "Expansion", description: "Opened offices in Brooklyn, NY", icon: FaGlobe },
    { year: "2022", title: "Dallas Hub", description: "Expanded operations to Dallas, TX", icon: FaTruck },
    { year: "2023", title: "500+ Drivers", description: "Reached 500+ active drivers milestone", icon: FaUsers },
    { year: "2024", title: "Industry Recognition", description: "Recognized for driver-first approach", icon: FaAward },
    { year: "2025", title: "Continued Growth", description: "Serving all 48 states", icon: FaHandshake }
  ];

  const values = [
    { title: "Driver-First", description: "Every decision starts with what's best for our drivers" },
    { title: "Transparency", description: "No hidden fees, no surprises, honest communication" },
    { title: "Excellence", description: "We strive for the best rates and service quality" },
    { title: "Integrity", description: "We do what we say and say what we do" },
    { title: "Innovation", description: "Always improving our systems and processes" },
    { title: "Partnership", description: "We succeed when our drivers succeed" }
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
            <span className="text-[#D4A64A] text-lg">🏢</span>
            <span className="text-[#D4A64A] text-xs uppercase tracking-wider font-semibold">Our Story</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-[#D4A64A]">Wafa Solutions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Premium US-based dispatch house built by drivers, for drivers.
          </p>
        </div>
        
        {/* Company Overview */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Wafa Solutions is a premium US-based dispatch house founded by experienced logistics 
                professionals who understand the challenges owner-operators face daily. We started 
                with a simple mission: <span className="text-[#D4A64A]">put drivers first</span>.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With dispatch hubs in Hoboken, Brooklyn, and Dallas, we serve truckers across all 48 states 
                with every equipment type. Our team of US-based dispatchers works around the clock to find 
                you the best paying loads while you focus on what matters - driving safely.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-[#D4A64A]/10 flex items-center justify-center">
                <FaTruck className="text-[#D4A64A] text-5xl" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-3xl font-bold text-[#D4A64A]">3+</div>
            <div className="text-gray-400 text-sm">Years of Experience</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-3xl font-bold text-[#D4A64A]">500+</div>
            <div className="text-gray-400 text-sm">Active Drivers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-3xl font-bold text-[#D4A64A]">48</div>
            <div className="text-gray-400 text-sm">States Covered</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 text-center border border-gray-800">
            <div className="text-3xl font-bold text-[#D4A64A]">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-4 border border-gray-800 text-center">
                <div className="w-10 h-10 rounded-full bg-[#D4A64A]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#D4A64A] text-sm">✓</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                <p className="text-gray-400 text-xs">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Timeline / Milestones */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:px-8">
                    <div className={`bg-gray-900 rounded-xl p-5 border border-gray-800 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                        <Icon className="text-[#D4A64A] text-lg" />
                        <span className="text-[#D4A64A] font-bold">{milestone.year}</span>
                      </div>
                      <h3 className="text-white font-semibold mb-1">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#D4A64A] flex items-center justify-center z-10">
                    <span className="text-black text-xs font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Leadership Message */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 border border-gray-800">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-3">Our Commitment to You</h2>
              <p className="text-gray-400 leading-relaxed">
                "At Wafa Solutions, we believe that every driver deserves respect, fair pay, and 
                the freedom to choose their path. We're not just building a dispatch company; 
                we're building a community where owner-operators thrive. Your success is our success."
              </p>
              <div className="mt-4">
                <p className="text-[#D4A64A] font-semibold">— Wafa Solutions Team</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;