// sections/Features.jsx
import React from 'react';

const Features = () => {
  const advantages = [
    {
      title: "Driver-First",
      subtitle: "The No-Force Policy",
      description: "You drive your truck — not us. We pitch loads, you say yes or no. No quotas, no guilt trips.",
      icon: "🚛"
    },
    {
      title: "Versatile",
      subtitle: "Every Equipment Type",
      description: "Dry Van, Reefer, Flatbed, Step Deck, Hotshot, Box Truck — one desk, ten markets.",
      icon: "📦"
    },
    {
      title: "Hands-Off",
      subtitle: "Paperwork, Handled",
      description: "Rate Confirmations, BOLs, factoring submissions, broker packets — all of it. You just drive and sign.",
      icon: "📋"
    }
  ];

  const carrierServices = [
    "Top-Rate Negotiation",
    "Full Paperwork Handling",
    "24/7/365 Human Dispatch",
    "No-Force Policy",
    "Broker Vetting",
    "Home-Time Routing"
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* THE WAFA ADVANTAGE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">THE WAFA ADVANTAGE</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We answer to the driver. Six things every owner-operator asks for — and the six things most dispatch houses still get wrong.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {advantages.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-[rgb(200,155,60)] font-semibold mb-3">{feature.subtitle}</p>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Two sides of the freight floor */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Two sides of the freight floor.</h2>
          <p className="text-center text-gray-400 mb-12">Carriers earn more. Shippers move freight faster. Same dispatch desk, same human standard.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[rgb(200,155,60)] mb-4">Carrier Services</h3>
              <p className="text-gray-400 mb-6">Built for owner-operators & small fleets. We are an extension of your truck — finding loads, fighting for rates, and handling every piece of paper so you keep rolling.</p>
              <ul className="space-y-3">
                {carrierServices.map((service, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-green-500 mr-3">✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[rgb(200,155,60)] mb-4">Shipper Solutions</h3>
              <p className="text-gray-400 mb-6">Reliable carriers, transparent tracking, and consistent capacity when you need it most.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300"><span className="text-green-500 mr-3">✓</span>Real-time load tracking</li>
                <li className="flex items-center text-gray-300"><span className="text-green-500 mr-3">✓</span>Vetted carrier network</li>
                <li className="flex items-center text-gray-300"><span className="text-green-500 mr-3">✓</span>Competitive rates</li>
                <li className="flex items-center text-gray-300"><span className="text-green-500 mr-3">✓</span>Dedicated account manager</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ON THE ROAD Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">ON THE ROAD</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Real trucks. Real lanes. Snapshots from the fleet we dispatch every day — pulling everything from cold chain to oversized steel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-3">🛻</div>
              <h3 className="text-xl font-bold text-white">Heavy Haul Ready</h3>
              <p className="text-gray-400 text-sm mt-2">Flatbed & step deck specialists. Steel, machinery, oversized — permits & tarps handled.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-xl font-bold text-white">Live Tracking</h3>
              <p className="text-gray-400 text-sm mt-2">All 48 states. From Seattle docks to Miami warehouses — our network covers every lane that pays.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-3">🕐</div>
              <h3 className="text-xl font-bold text-white">24/7 Support</h3>
              <p className="text-gray-400 text-sm mt-2">Round-the-clock dispatch support. Never miss a load opportunity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;