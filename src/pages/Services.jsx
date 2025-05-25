import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import your images (replace with actual paths)
import heroImage from "../assets/performance-bond.jpg";
import performanceBondImg from "../assets/performance-bond.jpg";
import paymentGuaranteeImg from "../assets/payment-guarantee.jpg";
import morningInvestorImg from "../assets/morning-investor.jpg";
import medicalCoverImg from "../assets/health.jpg";
import carInsuranceImg from "../assets/car.jpg";
import financialInvestmentsImg from "../assets/payment-guarantee.jpg";

const ServicesPage = () => {
  const services = [
    {
      title: "Performance Bonds",
      description: "Financial assurance for businesses engaged in contracts, protecting against non-fulfillment of obligations.",
      benefits: [
        "Financial security for stakeholders",
        "Increased trust and credibility",
        "Risk mitigation for your business",
        "Compliance with contractual requirements"
      ],
      image: performanceBondImg
    },
    {
      title: "Advance Payment Guarantees",
      description: "Reliable financial instruments safeguarding advance payments in project executions.",
      benefits: [
        "Protection for upfront payments",
        "Improved cash flow management",
        "Enhanced creditworthiness",
        "Fast claims process"
      ],
      image: paymentGuaranteeImg
    },
    {
      title: "Morning Investor",
      description: "Structured investment opportunities combining expert market analysis with diverse options.",
      benefits: [
        "Professional fund management",
        "Diversified portfolio options",
        "Long-term growth focus",
        "Tax-efficient strategies"
      ],
      image: morningInvestorImg
    },
    {
      title: "Comprehensive Medical Cover",
      description: "Health insurance covering both inpatient and outpatient care with extensive provider networks.",
      benefits: [
        "Hospital and clinic coverage",
        "Financial protection from medical costs",
        "Preventive care services",
        "Tailored plan options"
      ],
      image: medicalCoverImg
    },
    {
      title: "Car Insurance",
      description: "Vehicle protection with comprehensive and third-party liability options.",
      benefits: [
        "Theft and accident coverage",
        "Legal compliance protection",
        "Personal injury coverage",
        "Optional add-ons available"
      ],
      image: carInsuranceImg
    },
    {
      title: "Financial Investments",
      description: "Diverse investment vehicles for long-term financial growth and stability.",
      benefits: [
        "Bonds and mutual funds",
        "Investment-linked insurance plans",
        "Public provider fund options",
        "Professional advisory services"
      ],
      image: financialInvestmentsImg
    }
  ];

  const claimsProcess = {
    steps: [
      "Submit claim via online portal, mobile app, or customer service",
      "Provide required documentation",
      "Receive real-time updates on claim status",
      "Get resolution typically within 7-14 days"
    ],
    documents: [
      "Completed claim form",
      "Policy details and proof of insurance",
      "Invoices/receipts for services",
      "Medical reports (for health claims)",
      "Damage estimates (for car claims)"
    ]
  };

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <motion.section 
        className="relative h-96 md:h-[500px] w-full mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Swiss Life HLDG Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Innovative insurance and financial solutions for your security
            </motion.p>
          </div>
        </div>
        <img 
          src={heroImage} 
          alt="Financial security" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="mb-20"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-12 text-center"
          variants={itemVariants}
        >
          Our Insurance & Financial Products
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 md:h-60 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h4 className="font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                <ul className="space-y-2 text-gray-600">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-500 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 border-t border-gray-100">
                <NavLink
                  to="/contact"
                  className="inline-block text-red-500 hover:text-red-600 font-medium py-2 transition-colors duration-300"
                >
                  Learn More →
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className="mb-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 md:p-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Swiss Life HLDG?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Strong Financial Performance</h3>
            <p className="text-gray-600">
              Our formidable investment portfolio guarantees tangible returns, backed by solid financial standing.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Expertise and Experience</h3>
            <p className="text-gray-600">
              Decades in the insurance sector with knowledgeable teams providing expert guidance.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Customer-Centric Approach</h3>
            <p className="text-gray-600">
              Tailored products and services ensuring the highest level of satisfaction.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Claims and Business Focus Section */}
      <motion.section 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="bg-white rounded-xl p-6 shadow-sm"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Efficient Claims Process</h2>
          <p className="text-gray-600 mb-6">
            Most standard claims resolved within 7-14 days with our streamlined process.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Process Steps:</h3>
              <ol className="space-y-4">
                {claimsProcess.steps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Required Documents:</h3>
              <ul className="space-y-2 text-gray-600">
                {claimsProcess.documents.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl p-6 shadow-sm"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Business Focus</h2>
          <p className="text-gray-600 mb-6">
            Leading provider of life insurance and pension solutions with sustainable investment strategies.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Investment Strategy:</h3>
              <p className="text-gray-600">
                Sustainable approaches that align with ESG criteria while achieving attractive returns.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Asset Classes:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong className="text-gray-700">Fixed Income:</strong>
                    <p className="text-gray-600">Bonds and debt instruments providing stable returns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong className="text-gray-700">Equities:</strong>
                    <p className="text-gray-600">Public and private market investments for growth</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong className="text-gray-700">Real Estate:</strong>
                    <p className="text-gray-600">Prime properties generating rental income and appreciation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong className="text-gray-700">Alternative Investments:</strong>
                    <p className="text-gray-600">Diversified options including infrastructure and commodities</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="text-center py-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Future?</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-xl">
          Discover how Swiss Life HLDG can enhance your financial security and peace of mind.
        </p>
        <NavLink
          to="/contact"
          className="inline-block bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Contact Us Today
        </NavLink>
      </motion.section>
    </div>
  );
};

export default ServicesPage;