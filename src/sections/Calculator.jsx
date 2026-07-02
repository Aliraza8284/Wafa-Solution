// sections/Calculator.jsx

import React, { useState, useEffect, useRef } from "react";
import { 
  FaChartLine, 
  FaDollarSign, 
  FaCalendarAlt,
  FaArrowRight,
  FaSlidersH,
  FaPercentage
} from "react-icons/fa";

const Calculator = () => {
  const [miles, setMiles] = useState(2500);
  const [ratePerMile, setRatePerMile] = useState(2.95);
  const [equipment, setEquipment] = useState("Dry Van");

  // Count Up States
  const [displayNet, setDisplayNet] = useState(0);
  const [displayMonthly, setDisplayMonthly] = useState(0);
  const [displayAnnual, setDisplayAnnual] = useState(0);

  const animationFrame = useRef(null);

  // Equipment Data
  const equipmentData = {
    "Power Only": { fee: 0.05, rateRange: { min: 1.8, max: 2.8 } },
    "Dry Van": { fee: 0.08, rateRange: { min: 2.0, max: 3.2 } },
    Reefer: { fee: 0.05, rateRange: { min: 2.4, max: 3.6 } },
    Flatbed: { fee: 0.05, rateRange: { min: 2.6, max: 3.8 } },
    "Step Deck": { fee: 0.05, rateRange: { min: 2.7, max: 4.0 } },
    Hotshot: { fee: 0.1, rateRange: { min: 2.2, max: 3.4 } },
    "Box Truck": { fee: 0.1, rateRange: { min: 1.9, max: 3.0 } },
  };

  // Dynamic Rate
  const calculateDynamicRate = (miles, equip) => {
    const data = equipmentData[equip];
    const range = data.rateRange.max - data.rateRange.min;
    const inverseFactor = 1 - (miles - 800) / (4000 - 800);
    const rate = data.rateRange.min + range * inverseFactor;
    return Number(rate.toFixed(2));
  };

  // Update Rate
  useEffect(() => {
    const newRate = calculateDynamicRate(miles, equipment);
    setRatePerMile(newRate);
  }, [miles, equipment]);

  // Calculations
  const gross = miles * ratePerMile;
  const dispatchFee = gross * equipmentData[equipment].fee;
  const net = gross - dispatchFee;
  const monthly = net * 4;
  const annual = net * 52;

  // Count Up Animation
  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();
    const startNet = displayNet;
    const startMonthly = displayMonthly;
    const startAnnual = displayAnnual;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setDisplayNet(Math.floor(startNet + (net - startNet) * ease));
      setDisplayMonthly(Math.floor(startMonthly + (monthly - startMonthly) * ease));
      setDisplayAnnual(Math.floor(startAnnual + (annual - startAnnual) * ease));

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    animationFrame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame.current);
  }, [net, monthly, annual]);

  return (
    <section className="py-12 md:py-20  bg-gray-900 min-h-screen select-none"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 md:gap-2 bg-[#D4A64A]/10 px-2.5 md:px-4 py-1 md:py-2 rounded-full mb-3 md:mb-4">
            <FaChartLine className="text-[#D4A64A] text-[10px] md:text-sm" />
            <span className="text-[#D4A64A] text-[9px] md:text-xs uppercase tracking-wider font-semibold">Revenue Calculator</span>
          </div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
            Run Your <span className="text-[#D4A64A]">Weekly Numbers</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">
            Realistic trucking revenue estimates based on equipment and mileage.
          </p>
        </div>

        {/* Equipment Selection - Hover line below text, no text overlay */}
        <div className="mb-6 md:mb-8 overflow-x-auto pb-3 scrollbar-hide">
          <div className="flex gap-1.5 md:gap-2 justify-start md:justify-center min-w-max">
            {Object.keys(equipmentData).map((eq) => (
              <button
                key={eq}
                onClick={() => setEquipment(eq)}
                className="relative px-2.5 md:px-4 py-1.5 md:py-2 text-xs md:text-sm whitespace-nowrap transition-all duration-300 group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  equipment === eq ? "text-[#D4A64A] font-semibold" : "text-gray-500 group-hover:text-white"
                }`}>
                  {eq}
                </span>
                {/* Underline effect - positioned absolutely below the text, does not cover text */}
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4A64A] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                {/* Active state underline - always visible for selected equipment */}
                {equipment === eq && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4A64A] rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
          
          {/* Left Card - Inputs */}
          <div className="bg-[#141A22] rounded-xl md:rounded-2xl border border-[#252D38] p-3 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-[#D4A64A]/10 flex items-center justify-center">
                <FaSlidersH className="text-[#D4A64A] text-xs md:text-sm" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-white">Adjust Parameters</h3>
                <p className="text-[10px] md:text-xs text-gray-500">Slide to see changes</p>
              </div>
            </div>

            {/* Miles Slider */}
            <div className="mb-5 md:mb-6">
              <div className="flex justify-between items-center mb-2 md:mb-3">
                <label className="text-gray-400 text-[10px] md:text-xs font-medium">Miles Per Week</label>
                <div className="bg-[#1B222D] px-2 md:px-3 py-0.5 md:py-1 rounded-lg">
                  <span className="text-[#D4A64A] font-bold text-sm md:text-lg">{miles.toLocaleString()}</span>
                  <span className="text-gray-500 text-[9px] md:text-xs ml-0.5">mi</span>
                </div>
              </div>
              <input
                type="range"
                min="800"
                max="4000"
                step="50"
                value={miles}
                onChange={(e) => setMiles(parseInt(e.target.value))}
                className="w-full h-1 md:h-1.5 rounded-lg appearance-none cursor-pointer bg-[#2B3440]"
                style={{ accentColor: "#D4A64A" }}
              />
              <div className="flex justify-between text-[8px] md:text-[10px] text-gray-600 mt-1.5">
                <span>800</span>
                <span>2,500</span>
                <span>4,000</span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-5">
              <div className="bg-[#0F141B] rounded-lg md:rounded-xl p-2 md:p-3 border border-[#252D38]">
                <div className="flex items-center gap-1 mb-0.5 md:mb-1">
                  <FaDollarSign className="text-[#D4A64A] text-[8px] md:text-[10px]" />
                  <span className="text-gray-500 text-[7px] md:text-[9px] uppercase">Rate/Mile</span>
                </div>
                <p className="text-sm md:text-xl font-bold text-white">${ratePerMile.toFixed(2)}</p>
              </div>
              <div className="bg-[#0F141B] rounded-lg md:rounded-xl p-2 md:p-3 border border-[#252D38]">
                <div className="flex items-center gap-1 mb-0.5 md:mb-1">
                  <FaPercentage className="text-[#D4A64A] text-[8px] md:text-[10px]" />
                  <span className="text-gray-500 text-[7px] md:text-[9px] uppercase">Fee</span>
                </div>
                <p className="text-sm md:text-xl font-bold text-white">{(equipmentData[equipment].fee * 100).toFixed(0)}%</p>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[#0F141B] rounded-lg md:rounded-xl border border-[#252D38] p-2 md:p-3">
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-500 text-[9px] md:text-xs">Gross Revenue</span>
                <span className="text-white font-semibold text-[9px] md:text-xs">${Math.round(gross).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#252D38]">
                <span className="text-gray-500 text-[9px] md:text-xs">Dispatch Fee</span>
                <span className="text-red-400 font-semibold text-[9px] md:text-xs">-${Math.round(dispatchFee).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-1.5 md:pt-2">
                <span className="text-white font-semibold text-[10px] md:text-sm">Net Weekly</span>
                <span className="text-[#D4A64A] font-bold text-sm md:text-xl">${Math.round(net).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Right Card - Results */}
          <div className="bg-gradient-to-br from-[#D4A64A]/5 via-[#141A22] to-[#0F141B] rounded-xl md:rounded-2xl border border-[#D4A64A]/20 p-3 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl bg-[#D4A64A]/10 flex items-center justify-center">
                <FaDollarSign className="text-[#D4A64A] text-xs md:text-sm" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-white">Your Take-Home</h3>
                <p className="text-[10px] md:text-xs text-gray-500">After fees</p>
              </div>
            </div>

            {/* Weekly Net */}
            <div className="text-center mb-4 md:mb-6">
              <div className="inline-flex items-center gap-1.5 bg-[#D4A64A]/10 px-2 py-0.5 rounded-full mb-2 md:mb-3">
                <span className="text-[#D4A64A] text-[8px] md:text-[10px]">🚛</span>
                <span className="text-[#D4A64A] text-[7px] md:text-[9px] uppercase">Weekly Net</span>
              </div>
              <p className="text-2xl md:text-4xl lg:text-5xl font-black text-[#D4A64A]">
                ${displayNet.toLocaleString()}
              </p>
            </div>

            {/* Monthly & Annual */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-5">
              <div className="bg-[#0F141B] rounded-lg md:rounded-xl p-2 md:p-3 text-center border border-[#252D38] hover:border-[#D4A64A]/30 transition-all">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <FaCalendarAlt className="text-[#D4A64A] text-[7px] md:text-[9px]" />
                  <span className="text-gray-500 text-[7px] md:text-[9px] uppercase">Month</span>
                </div>
                <p className="text-xs md:text-base font-bold text-white">${displayMonthly.toLocaleString()}</p>
              </div>
              <div className="bg-[#0F141B] rounded-lg md:rounded-xl p-2 md:p-3 text-center border border-[#252D38] hover:border-[#D4A64A]/30 transition-all">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <FaCalendarAlt className="text-[#D4A64A] text-[7px] md:text-[9px]" />
                  <span className="text-gray-500 text-[7px] md:text-[9px] uppercase">Year</span>
                </div>
                <p className="text-xs md:text-base font-bold text-white">${displayAnnual.toLocaleString()}</p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => document.getElementById("onboard")?.scrollIntoView({ behavior: "smooth" })}
              className="group w-full bg-[#D4A64A] hover:bg-[#BF933E] text-black font-bold py-1.5 md:py-2.5 rounded-lg md:rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 text-[10px] md:text-sm"
            >
              <span>Lock In Numbers</span>
              <FaArrowRight className="text-[8px] md:text-xs group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[7px] md:text-[9px] text-gray-600 text-center mt-2 md:mt-3">
              Actual rates vary by lanes & market
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Calculator;