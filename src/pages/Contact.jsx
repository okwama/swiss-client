import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
const Contact = () => {
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

      {/* Contact Information */}
      <section className="py-16 px-6 md:px-16 lg:px-32">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out through any of these channels for personalized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-200 transition-colors duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-red-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <FaPhoneAlt className="text-red-500 text-xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Phone Support</h4>
              <p className="text-gray-600 text-center">254 712345678</p>
              <p className="text-gray-500 text-sm text-center mt-2">Mon-Fri, 8:00-18:00</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-200 transition-colors duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-red-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <FaEnvelope className="text-red-500 text-xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Email Us</h4>
              <p className="text-gray-600 text-center">contact@swisslife.com</p>
              <p className="text-gray-500 text-sm text-center mt-2">Response within 24 hours</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-200 transition-colors duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-red-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">Headquarters</h4>
              <p className="text-gray-600 text-center">Kilimani</p>
              <p className="text-gray-600 text-center">Nairobi, Kenya</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 md:px-16 lg:px-32 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Fill out the form and our team will respond promptly.
            </p>
          </div>

          <form className="space-y-6 bg-white p-8 md:p-10 rounded-xl border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500" 
                  placeholder="Your full name" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500" 
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500" 
                placeholder="What's your question about?" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500" 
                placeholder="Your detailed message..." 
                required 
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </form>
        </div>
      </section>

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

export default Contact;