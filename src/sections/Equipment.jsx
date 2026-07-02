import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Equipment = () => {
  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getCountryMiles = () => {
    return randomBetween(2000, 3500);
  };

  const [flippedCard, setFlippedCard] = useState(null);
  const [cardsData, setCardsData] = useState([
    {
      id: 1,
      name: "Power Only",
      description: "We have best loadout and tow away options for your power only. We make sure you earn a handsome gross!",
      image: "/pexels-photo-8865029.avif",
      stats: {
        primary: "$2.50",
        primaryLabel: "AVG RPM",
        value: "2,500",
        valueLabel: "WEEKLY MILES",
        extra: "All 48",
        extraLabel: "STATES",
      },
    },
    {
      id: 2,
      name: "Dry Van",
      description: "The bread-and-butter of OTR. Consistent freight, top brokers, dependable rates.",
      image: "/pexels-photo-33081220.avif",
      stats: {
        primary: "$2.45",
        primaryLabel: "AVG RPM",
        value: "2,800",
        valueLabel: "WEEKLY MILES",
        extra: "48 states",
        extraLabel: "COVERAGE"
      }
    },
    {
      id: 3,
      name: "Reefer",
      description: "Temperature-controlled produce, pharma & frozen — premium pay year-round.",
      image: "/pexels-photo-27508769.avif",
      stats: {
        primary: "$2.95",
        primaryLabel: "AVG RPM",
        value: "2,650",
        valueLabel: "WEEKLY MILES",
        extra: "94%",
        extraLabel: "DETENTION"
      }
    },
    {
      id: 4,
      name: "Flatbed",
      description: "Steel, lumber, machinery & oversized. Strong rates, seasoned brokers.",
      image: "/pexels-photo-29399463.avif",
      stats: {
        primary: "$3.10",
        primaryLabel: "AVG RPM",
        value: "2,500",
        valueLabel: "WEEKLY MILES",
        extra: "$50-$200",
        extraLabel: "TARP PAY"
      }
    },
    {
      id: 5,
      name: "Step Deck",
      description: "Tall freight, equipment, & specialized loads. Higher-paying flatbed cousin.",
      image: "/pexels-photo-8865029.avif",
      stats: {
        primary: "$3.25",
        primaryLabel: "AVG RPM",
        value: "2,400",
        valueLabel: "WEEKLY MILES",
        extra: "Handled",
        extraLabel: "PERMITS"
      }
    },
    {
      id: 6,
      name: "Hotshot",
      description: "1-ton & 3/4-ton expedited freight. Fast turns, premium urgent rates.",
      image: "/pexels-photo-27508769.avif",
      stats: {
        primary: "$2.80",
        primaryLabel: "AVG RPM",
        value: "2,200",
        valueLabel: "WEEKLY MILES",
        extra: "36 hrs",
        extraLabel: "AVG TURN"
      }
    },
    {
      id: 7,
      name: "Box Truck",
      description: "Local, regional & expedited. We keep your 26-footer earning daily.",
      image: "/pexels-photo-9703050.avif",
      stats: {
        primary: "$650",
        primaryLabel: "AVG DAILY",
        value: "20+",
        valueLabel: "STOPS/WEEK",
        extra: "Optimized",
        extraLabel: "ROUTING"
      }
    },
    {
      id: 8,
      name: "Constoga",
      description: "Local, regional & expedited. We keep your 26-footer earning daily.",
      image: "/pexels-photo-29399464.jpg",
      stats: {
        primary: "$750",
        primaryLabel: "AVG DAILY",
        value: "20+",
        valueLabel: "STOPS/WEEK",
        extra: "Optimized",
        extraLabel: "ROUTING"
      }
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const updateData = () => {
      setCardsData((prevCards) =>
        prevCards.map((card) => {
          const newMiles = getCountryMiles();
          let newRate = card.stats.primary;

          if (card.name === "Power Only") newRate = `$${(2.2 + Math.random() * 0.8).toFixed(2)}`;
          else if (card.name === "Dry Van") newRate = `$${(2.2 + Math.random() * 0.8).toFixed(2)}`;
          else if (card.name === "Reefer") newRate = `$${(2.7 + Math.random() * 0.5).toFixed(2)}`;
          else if (card.name === "Flatbed") newRate = `$${(2.8 + Math.random() * 0.6).toFixed(2)}`;
          else if (card.name === "Step Deck") newRate = `$${(2.9 + Math.random() * 0.7).toFixed(2)}`;
          else if (card.name === "Hotshot") newRate = `$${(2.5 + Math.random() * 0.6).toFixed(2)}`;
          else if (card.name === "Box Truck") newRate = `$${randomBetween(550, 750)}`;

          return {
            ...card,
            stats: {
              ...card.stats,
              primary: newRate,
              value: newMiles.toLocaleString(),
            },
          };
        })
      );
    };

    updateData();
    const interval = setInterval(updateData, 86400000);
    return () => clearInterval(interval);
  }, []);

  const toggleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section
      className="py-16 bg-gray-900 min-h-screen select-none w-full overflow-x-hidden"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
            EVERY <span className="text-[rgb(200,155,60)]">WHEEL</span>, EVERY LANE
          </h2>
          <p className="text-[rgb(200,155,60)] font-semibold text-lg md:text-xl lg:text-2xl">
            Six equipment types. One dispatch desk.
          </p>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto mt-2 px-4">
            Whether you pull a reefer through Texas or run a hotshot in the Bakken,
            our dispatchers know your market, your fuel cost, and your home-time goals.
          </p>
        </div>

        {/* 4 Cards per Row Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className="relative aspect-[3/4] cursor-pointer group w-full"
              onClick={() => toggleFlip(card.id)}
              data-aos={index % 4 === 0 ? "fade-right" : index % 4 === 1 ? "fade-up" : index % 4 === 2 ? "fade-down" : "fade-left"}
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <div className={`relative w-full h-full transition-all duration-700 transform-style-3d ${flippedCard === card.id ? 'rotate-y-180' : ''}`}>

                {/* FRONT SIDE - Only Image and Name */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden backface-hidden bg-gray-800 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'center',
                      objectPosition: 'cover',
                      borderRadius: '10px'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{card.name}</h3>
                    <p className="text-[rgb(200,155,60)] text-[10px] md:text-xs mt-1">Click to see details</p>
                  </div>
                </div>
                
                {/* BACK SIDE - Complete Details */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden backface-hidden rotate-y-180 bg-gradient-to-br from-gray-800 to-gray-900 border border-[rgb(200,155,60)]/30 p-3 md:p-4">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-[rgb(200,155,60)] mb-2">{card.name}</h3>
                      <p className="text-gray-300 text-[10px] md:text-xs leading-relaxed mb-3">
                        {card.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-[8px] md:text-[10px]">{card.stats.primaryLabel}</span>
                          <span className="text-[rgb(200,155,60)] font-bold text-xs md:text-sm">{card.stats.primary}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-[8px] md:text-[10px]">{card.stats.valueLabel}</span>
                          <span className="text-white font-bold text-xs md:text-sm">{card.stats.value}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-[8px] md:text-[10px]">{card.stats.extraLabel}</span>
                          <span className="text-white font-bold text-[9px] md:text-xs text-right">{card.stats.extra}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-500 text-[8px] md:text-[10px] text-center mt-3 pt-2 border-t border-gray-700">
                      Click to flip back
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 3D Flip CSS */}
      <style>{`
        .transform-style-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Equipment;