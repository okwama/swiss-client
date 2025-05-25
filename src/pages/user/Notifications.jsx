import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
const Notifications = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <motion.section 
        className="relative py-24 px-6 md:px-16 lg:px-32 bg-red-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Contact Swiss Life HLDG
            </motion.h1>
            <motion.p 
              className="text-xl text-red-100 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Our team is ready to assist you with all your insurance and financial needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <NavLink
                to="/services"
                className="inline-flex items-center text-white hover:text-gray-100 font-medium py-2 transition-colors duration-300"
              >
                View our services <FaArrowRight className="ml-2" />
              </NavLink>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img 
              src="/about.jpg" 
              alt="Contact Swiss Life HLDG" 
              className="rounded-lg shadow-xl w-full max-w-lg object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>
        </div>
      </motion.section>

    


      {/* CTA Section */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Can We Help You Today?</h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-8">
            Whether you need insurance advice or financial consultation, our experts are here for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-white hover:bg-gray-100 text-red-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Our Offices
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;