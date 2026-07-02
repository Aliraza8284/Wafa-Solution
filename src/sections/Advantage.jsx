// sections/Advantage.jsx
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaTruckMoving, 
  FaBoxOpen, 
  FaFileInvoice, 
  FaClock, 
  FaShieldAlt, 
  FaMoneyBillWave,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';

const Advantage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const advantages = [
    {
      title: "DRIVER-FIRST",
      subtitle: "The No-Force Policy",
      description: "You drive your truck — not us. We pitch loads, you say yes or no. No quotas, no guilt trips, no 'you have to take this.' Owner-operators stay owner-operators.",
      icon: FaTruckMoving,
    },
    {
      title: "VERSATILE",
      subtitle: "Every Equipment Type",
      description: "Dry Van, Reefer, Flatbed, Step Deck, Hotshot, Box Truck — one desk, six markets. Switch trailers tomorrow, we handle it.",
      icon: FaBoxOpen,
    },
    {
      title: "HANDS-OFF",
      subtitle: "Paperwork, Handled",
      description: "Rate Confirmations, BOLs, factoring submissions, broker packets — all of it. You just drive and sign on the screen.",
      icon: FaFileInvoice,
    },
    {
      title: "ALWAYS ON",
      subtitle: "24/7/365 Human Support",
      description: "It's 2 AM in Wyoming and your shipper is closed. A real US-based dispatcher answers in three rings. Always.",
      icon: FaClock,
    },
    {
      title: "PROTECTED",
      subtitle: "Vetted Brokers Only",
      description: "We pull credit reports, days-to-pay, and dispute history before we hand you a rate-con. No surprises at week six.",
      icon: FaShieldAlt,
    },
    {
      title: "EARN MORE",
      subtitle: "Aggressive Negotiation",
      description: "Our dispatchers don't accept the first offer. We push for fuel surcharges, detention, layover, and lumpers — every time.",
      icon: FaMoneyBillWave,
    },
  ];

  return (
    <section 
      className="py-20  bg-gray-900 select-none"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section - No Copy */}
        <div 
          className="text-center mb-16"
          onContextMenu={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
        >
          <div className="inline-flex items-center gap-2 bg-[#D4A64A]/10 px-4 py-2 rounded-full mb-6">
            <FaStar className="text-[#D4A64A] text-xs" />
            <span className="text-[#D4A64A] text-xs uppercase tracking-wider font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            THE <span className="text-[#D4A64A]">WAFA</span> ADVANTAGE
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-[#D4A64A] mb-4">
            We answer to the driver. Period.
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            Six things every owner-operator asks for — and the six things most
            dispatch houses still get wrong. Here's how we run the desk.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {advantages.map((adv, index) => {
            const IconComponent = adv.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-[#D4A64A]/30 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                onContextMenu={(e) => e.preventDefault()}
                onCopy={(e) => e.preventDefault()}
              >
                {/* Light from Top - Gradient jo neeche fade out ho jaye */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#D4A64A]/30 via-[#D4A64A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Top Border Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4A64A] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative p-6 md:p-8 text-center">
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-5">
                    <div className="w-20 h-20 rounded-2xl bg-[#D4A64A]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-3xl md:text-4xl text-[#D4A64A]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#D4A64A] font-bold text-lg md:text-xl tracking-wider mb-2">
                    {adv.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-white font-semibold text-base md:text-lg mb-3">
                    {adv.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {adv.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#D4A64A] text-xs inline-flex items-center gap-1">
                      Learn More 
                      <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Section - No Copy */}
        <div 
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 md:p-12 select-none"
          onContextMenu={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Stars Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#D4A64A] text-lg" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-8 font-light italic">
              "I ran with three dispatch services before Wafa. These guys are
              the first to actually listen when I say I want to be home Friday
              night. Two months in, my net is up $1,400 a week."
            </p>

            {/* Divider */}
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4A64A] to-transparent mx-auto mb-6"></div>

            {/* Author Section */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A64A] to-[#BF933E] flex items-center justify-center text-black font-bold text-2xl shadow-lg">
                MV
              </div>
              <div className="text-left">
                <p className="font-bold text-white text-xl">Marcus V.</p>
                <p className="text-sm text-[#D4A64A]">
                  Owner-Operator · Reefer · Tampa, FL
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Advantage;