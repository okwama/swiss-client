import React from 'react';
import { FaShieldAlt, FaHeartbeat, FaCar, FaHome, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: 'Health Insurance',
    description: 'Comprehensive health coverage that ensures you and your family get the best medical care when you need it most.',
    icon: <FaHeartbeat className="text-3xl text-indigo-600" />,
    image: '/client/health.jpg'
  },
  {
    title: 'Life Insurance',
    description: "Protect your loved ones' financial future with a life insurance plan that gives peace of mind and security.",
    icon: <FaShieldAlt className="text-3xl text-indigo-600" />,
    image: '/client/life.jpg'
  },
  {
    title: 'Vehicle Insurance',
    description: 'Stay safe on the road with our vehicle insurance plans, offering coverage for accidents, theft, and more.',
    icon: <FaCar className="text-3xl text-indigo-600" />,
    image: '/client/car.jpg'
  },
  {
    title: 'Property Insurance',
    description: 'Safeguard your home and investments with our reliable property insurance plans against unexpected risks.',
    icon: <FaHome className="text-3xl text-indigo-600" />,
    image: '/client/property.jpg'
  }
];

const ServiceCards = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      {/* Overview Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">Our Insurance Services</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          At Swiss Life HLDG, we provide comprehensive insurance solutions tailored to protect what matters most to you. 
          Our range of services offers security and peace of mind for every aspect of your life.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          With decades of experience in the insurance industry, we combine expert knowledge with personalized service 
          to deliver coverage that meets your unique needs.
        </p>
      </div>
      
      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div 
            key={service.title} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Image with overlay */}
            <div className="relative h-60">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="absolute inset-0 bg-indigo-900 opacity-30 z-1"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300">
                Learn more <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-2xl font-semibold text-indigo-900 mb-6">Need help choosing the right coverage?</h3>
        <button className="bg-red-500 hover:bg-red-300 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
          Speak with an Advisor
        </button>
      </div>
    </div>
  );
};

export default ServiceCards;