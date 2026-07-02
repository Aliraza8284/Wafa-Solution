import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ---------------- ROLLING TEXT ---------------- */

const RollingText = ({ text, className = "" }) => {
  return (
    <span className={`inline-flex flex-nowrap ${className}`}>
      {text.split("").map((char, index) => (
        <span key={index} className="dispatch-char">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

/* ---------------- TRUCK TYPES ---------------- */

const truckTypes = [
  "Power Only",
  "Dry Van",
  "Reefer",
  "Flatbed",
  "Step Deck",
  "Conestoga",
  "Lowboy",
  "Box Truck",
  "Hotshot",
  "Cargo Van",
];

/* ---------------- SLIDESHOW IMAGES (5 TRUCK IMAGES) ---------------- */

const slideshowImages = [
  "/pexels-photo-33081220.avif",
  "/pexels-photo-8865029.avif",
  "/pexels-photo-9703050.avif",
  "/pexels-photo-27508769.avif",
  "/pexels-photo-29399463.avif",
];

/* ---------------- HERO ---------------- */

const Hero = ({ setCurrentSection }) => {
  const [currentTruck, setCurrentTruck] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* ---------------- AOS ---------------- */

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  /* ---------------- TRUCK ROTATION ---------------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTruck((prev) => (prev + 1) % truckTypes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- TYPING EFFECT ---------------- */

  useEffect(() => {
    setIsTyping(true);

    let i = 0;
    const fullText = truckTypes[currentTruck];

    setDisplayText("");

    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentTruck]);

  /* ---------------- IMAGE SLIDESHOW (1 IMAGE AT A TIME) ---------------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 3000); // 3 seconds per image

    return () => clearInterval(interval);
  }, []);

  /* ---------------- BUTTON CLICK ---------------- */

  const handleOnboardClick = () => {
    setCurrentSection("onboard");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen overflow-hidden bg-black select-none"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
    >
      {/* ---------------- IMAGE SLIDESHOW BACKGROUND (1 AT A TIME) ---------------- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Truck ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* ---------------- OVERLAY WITH OPACITY ---------------- */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      {/* ---------------- CONTENT ---------------- */}

      <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl text-left">
          {/* ---------------- TITLE ---------------- */}

          <h1
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
          >
            <RollingText text="Dispatching" />{" "}
            <span className="text-[rgb(200,155,60)]">
              across all 48 states.
            </span>
          </h1>

          {/* ---------------- TYPING ---------------- */}

          <div
            data-aos="fade-left"
            data-aos-delay="250"
            className="mb-6"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[rgb(200,155,60)]">
              {displayText}

              {isTyping && (
                <span className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-[rgb(200,155,60)] ml-1 animate-blink"></span>
              )}
            </h2>
          </div>

          {/* ---------------- PARAGRAPH ---------------- */}

          <p
            data-aos="fade-up"
            data-aos-delay="350"
            className="text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Wafa Solutions is a premium US-based dispatch house for
            owner-operators and small fleets. We negotiate top-paying
            loads, handle every BOL and rate-con, and never force a
            driver onto a lane they don't want. You drive — we run the
            office.
          </p>

          {/* ---------------- BUTTONS ---------------- */}

          <div
            data-aos="zoom-in-up"
            data-aos-delay="450"
            className="flex flex-wrap gap-3 justify-start mb-10"
          >
            {/* BUTTON 1 */}

            <button
              onClick={handleOnboardClick}
              className="
                group relative overflow-hidden

                px-4 sm:px-6 py-2.5 sm:py-3 rounded-full
                flex items-center gap-2

                font-semibold text-sm sm:text-base
                text-[rgb(255,220,140)]

                bg-[#0e0d0d99]

                border border-[rgb(0,0,0)]

                shadow-[-6px_-6px_14px_rgba(255,255,255,0.03),6px_6px_14px_rgba(0,0,0,0.95)]

                transition-all duration-500

                hover:text-white
                hover:scale-[1.03]
              "
            >
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-tr
                  from-[rgb(200,155,60)]
                  via-[rgb(200,155,60)]
                  to-[rgb(200,155,60)]

                  translate-y-full
                  -translate-x-full

                  group-hover:translate-y-0
                  group-hover:translate-x-0

                  transition-transform duration-500 ease-out
                "
              />

              <span className="relative z-10 flex items-center gap-2">
                Join Our Fleet

                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>

            {/* BUTTON 2 */}

            <button
              onClick={handleOnboardClick}
              className="
                group relative overflow-hidden

                px-4 sm:px-6 py-2.5 sm:py-3 rounded-full

                font-semibold text-sm sm:text-base
                text-[rgb(200,155,60)]

                bg-[#0e0d0d99]

                border border-[rgb(0,0,0)]

                shadow-[-6px_-6px_14px_rgba(255,255,255,0.02),6px_6px_14px_rgba(0,0,0,0.95)]

                transition-all duration-500

                hover:text-white
                hover:scale-[1.03]
              "
            >
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-tr
                  from-[rgb(200,155,60)]
                  via-[rgb(200,155,60)]
                  to-[rgb(200,155,60)]

                  translate-y-full
                  -translate-x-full

                  group-hover:translate-y-0
                  group-hover:translate-x-0

                  transition-transform duration-500 ease-out
                "
              />

              <span className="relative z-10">
                Estimate My Weekly Gross
              </span>
            </button>
          </div>

          {/* ---------------- STATS ---------------- */}

          <div
            data-aos="fade-down"
            data-aos-delay="500"
            className="flex flex-wrap gap-3 sm:gap-5 justify-start"
          >
            {/* BOX 1 */}

            <div
              className="stats-box"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="stats-content">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[rgb(200,155,60)]">
                  $3.18
                </h3>

                <p className="text-gray-300 text-[10px] sm:text-xs mt-0.5">
                  Avg. RPM negotiated
                </p>
              </div>
            </div>

            {/* BOX 2 */}

            <div
              className="stats-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="stats-content">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[rgb(200,155,60)]">
                  100%
                </h3>

                <p className="text-gray-300 text-[10px] sm:text-xs mt-0.5">
                  Vetted brokers only
                </p>
              </div>
            </div>

            {/* BOX 3 */}

            <div
              className="stats-box"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="stats-content">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[rgb(200,155,60)]">
                  24/7/365
                </h3>

                <p className="text-gray-300 text-[10px] sm:text-xs mt-0.5">
                  Human dispatch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- STYLES ---------------- */}

      <style>{`
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }

          51%, 100% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .dispatch-char {
          color: #ffffff;
          display: inline-block;
          font-weight: 900;
          text-shadow: 0 0 10px rgba(255,255,255,0.08);
          transition: all 0.3s ease;
        }

        .stats-box {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(
            135deg,
            rgba(200,155,60,0.15),
            rgba(255,255,255,0.04),
            rgba(200,155,60,0.35)
          );
          transition: all 0.4s ease;
        }

        .stats-box::before {
          content: "";
          position: absolute;
          inset: -200%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,215,120,0.35),
            transparent
          );
          animation: borderMove 5s linear infinite;
        }

        .stats-content {
          position: relative;
          z-index: 2;
          background: rgb(40, 39, 38);
          backdrop-filter: blur(12px);
          border-radius: 14px;
          padding: 10px 14px;
        }

        .stats-box:hover {
          transform: translateY(-4px);
          box-shadow:
            0 15px 35px rgba(200,155,60,0.18),
            0 0 20px rgba(255,215,120,0.08);
        }

        @keyframes borderMove {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;