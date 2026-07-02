// sections/Partners.jsx
import React from 'react';

const Partners = () => {
  const partners = [
    { name: "DAT", url: "https://www.dat.com" },
    { name: "Truckstop", url: "https://www.truckstop.com" },
    { name: "Convoy", url: "https://www.convoy.com" },
    { name: "Sylectus", url: "https://www.sylectus.com" },
    { name: "Progressive", url: "https://www.progressive.com/commercial-auto" },
    { name: "OOIDA", url: "https://www.ooida.com" },
    { name: "TQL", url: "https://www.tql.com" },
    { name: "Landstar", url: "https://www.landstar.com" }
  ];

  // Double the partners array for seamless scrolling
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="py-4 md:py-6   bg-gray-900  border-t border-b border-gray-700 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <div className="animate-marquee whitespace-nowrap py-2">
            {scrollingPartners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_self"
                rel="noopener noreferrer"
                className="inline-block mx-4 md:mx-6 text-gray-400 font-semibold text-sm md:text-base hover:text-[rgb(200,155,60)] transition-all duration-300 hover:scale-105 cursor-pointer relative group"
              >
                {partner.name}
                {/* Underline effect like navbar */}
                <span className="absolute bottom-[-4px] left-0 w-0 h-px bg-[rgb(200,155,60)] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Marquee Animation CSS */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-block;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;