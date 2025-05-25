import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCar, FaHome, FaPlane, FaBriefcase, FaHeart, FaShieldVirus, FaPaw } from "react-icons/fa";

const policyData = [
  // Your existing policies...
  {
    id: 4,
    title: "Auto Shield Plus",
    icon: <FaCar className="text-white text-xl" />,
    description: "Comprehensive vehicle protection that goes beyond standard auto insurance, covering everything from collisions to natural disasters and even personal item coverage within your vehicle.",
    features: [
      "Accident forgiveness program",
      "24/7 roadside assistance",
      "New car replacement coverage",
      "Rental car reimbursement"
    ],
    color: "bg-gradient-to-br from-red-500 to-red-600"
  },
  {
    id: 5,
    title: "HomeGuard Protection",
    icon: <FaHome className="text-white text-xl" />,
    description: "Complete home insurance solution covering your property, belongings, and liability with customizable options for every homeowner's needs.",
    features: [
      "All-risk property coverage",
      "Identity theft protection",
      "Equipment breakdown coverage",
      "Green rebuild endorsement"
    ],
    color: "bg-gradient-to-br from-purple-500 to-purple-600"
  },
  {
    id: 6,
    title: "Global Travel Secure",
    icon: <FaPlane className="text-white text-xl" />,
    description: "Worldwide travel protection that keeps you covered from trip cancellation to emergency medical evacuation, no matter where your journey takes you.",
    features: [
      "Cancel for any reason option",
      "Pre-existing condition waiver",
      "Lost luggage reimbursement",
      "Political evacuation coverage"
    ],
    color: "bg-gradient-to-br from-teal-500 to-teal-600"
  },
  {
    id: 7,
    title: "BusinessSure Package",
    icon: <FaBriefcase className="text-white text-xl" />,
    description: "All-in-one business insurance protecting your company from property damage, liability claims, and business interruptions.",
    features: [
      "Business income coverage",
      "Cyber liability protection",
      "Employment practices liability",
      "Professional indemnity"
    ],
    color: "bg-gradient-to-br from-amber-500 to-amber-600"
  },
  {
    id: 8,
    title: "LifeSecure Advantage",
    icon: <FaHeart className="text-white text-xl" />,
    description: "Flexible life insurance with living benefits that can help pay for critical illnesses while you're still alive, plus wealth accumulation options.",
    features: [
      "Accelerated death benefit",
      "Long-term care rider",
      "Policy loan options",
      "Guaranteed insurability"
    ],
    color: "bg-gradient-to-br from-pink-500 to-pink-600"
  },
  {
    id: 9,
    title: "TechShield Cyber",
    icon: <FaShieldVirus className="text-white text-xl" />,
    description: "Specialized cyber insurance protecting individuals and businesses from digital threats, data breaches, and online fraud.",
    features: [
      "Data breach response",
      "Cyber extortion coverage",
      "Digital asset protection",
      "Online reputation management"
    ],
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
  },
  {
    id: 10,
    title: "PetCare Guardian",
    icon: <FaPaw className="text-white text-xl" />,
    description: "Comprehensive health insurance for your furry family members, covering accidents, illnesses, and routine care options.",
    features: [
      "Chronic condition coverage",
      "Prescription food allowance",
      "Behavioral therapy coverage",
      "Lost pet advertising"
    ],
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600"
  }
];

const PolicyCard = ({ policy, isExpanded, toggleExpand }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleGetQuote = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle quote request
      console.log(`Quote requested for ${policy.title}`);
    } catch (error) {
      console.error('Error getting quote:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col h-full border border-gray-100 hover:shadow-xl ${
        isHovered ? 'transform hover:-translate-y-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`${policy.color} p-6 text-white cursor-pointer transition-all duration-200 ${
          isHovered ? 'opacity-95' : ''
        }`}
        onClick={toggleExpand}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-black bg-opacity-20 transform transition-transform duration-200 group-hover:scale-110">
              {policy.icon}
            </div>
            <h3 className="text-xl font-bold">{policy.title}</h3>
          </div>
          <div className="text-white bg-black bg-opacity-20 p-2 rounded-full transform transition-transform duration-200 hover:scale-110">
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>
      </div>
      
      <div 
        className={`bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[800px] opacity-100 p-6' : 'max-h-0 opacity-0 p-0'
        }`}
      >
        <div className={`transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-600 mb-6 leading-relaxed">{policy.description}</p>
          
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full mr-2 bg-gray-400"></span>
              Key Features
            </h4>
            <ul className="space-y-3">
              {policy.features.map((feature, index) => (
                <li key={index} className="flex items-start group">
                  <span 
                    className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3 transform transition-transform duration-200 ${
                      policy.color.replace('bg-gradient-to-br', 'bg')
                    } ${isHovered ? 'scale-125' : ''}`}
                  ></span>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            <button 
              className={`w-full py-3.5 rounded-lg font-semibold text-white ${
                policy.color
              } hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ${
                policy.color.includes('from-') ? 'focus:ring-opacity-30' : ''
              } ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              onClick={handleGetQuote}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Get a Free Quote'
              )}
            </button>
            
            <button 
              className="mt-3 w-full text-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                // Add learn more action
              }}
            >
              Learn more about this policy →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Policies = () => {
  const [expandedPolicy, setExpandedPolicy] = useState(null);

  const togglePolicy = (id) => {
    setExpandedPolicy(prevId => prevId === id ? null : id);
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tailored Protection for Your Needs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive insurance solutions designed to safeguard what matters most in your life and business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policyData.map((policy) => (
            <PolicyCard
              key={policy.id}
              policy={policy}
              isExpanded={expandedPolicy === policy.id}
              toggleExpand={() => togglePolicy(policy.id)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Policies;