import React from 'react';
import { FaShieldAlt, FaChartLine, FaHandshake, FaMedal, FaUserShield, FaGlobeEurope, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
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
              Swiss Life HLDG
            </motion.h1>
            <motion.p 
              className="text-xl text-red-100 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Security, Trust, and Assurance for Your Future
            </motion.p>
            <motion.p 
              className="text-lg text-red-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              A leading provider of insurance and financial solutions based in Zurich, Switzerland
            </motion.p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img 
              src="/about.jpg" 
              alt="Swiss Life HLDG Headquarters" 
              className="rounded-lg shadow-xl w-full max-w-lg object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>
        </div>
      </motion.section>

      {/* Company Overview */}
      <section className="py-16 px-6 md:px-16 lg:px-32">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in Zurich, Swiss Life HLDG has grown to become a trusted name in insurance and financial services, 
              serving clients across Switzerland with integrity and excellence.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Who We Are</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Swiss Life HLDG is a leading insurance company specializing in providing comprehensive insurance products 
                and financial investment solutions. With decades of experience in the insurance sector, we combine tradition 
                with innovation to serve our clients' evolving needs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of experienced professionals is committed to guiding you through your insurance and investment 
                journey, ensuring you make informed decisions that align with your financial goals.
              </p>
              
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Core Values</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaShieldAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Integrity:</strong> We build relationships based on trust and transparency</span>
                  </li>
                  <li className="flex items-start">
                    <FaUserShield className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Client Focus:</strong> Your needs are at the center of everything we do</span>
                  </li>
                  <li className="flex items-start">
                    <FaChartLine className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Excellence:</strong> We strive for the highest standards in service and solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/2">
              <img 
                src="/about-office.jpg" 
                alt="Swiss Life HLDG Team" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-200 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <FaGlobeEurope className="text-red-500 text-xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Presence</h4>
                  <p className="text-gray-600">
                    Headquartered in Zurich with a growing network of offices across Switzerland, serving clients nationwide.
                  </p>
                </motion.div>
                <motion.div 
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-200 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <FaHandshake className="text-red-500 text-xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Approach</h4>
                  <p className="text-gray-600">
                    Personalized service combined with expert knowledge to deliver tailored financial solutions.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-16 lg:px-32 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Swiss Life HLDG</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 transition duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaMedal className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
              <p className="text-red-100">
                Decades of experience in the insurance sector with a strong reputation for reliability and stability.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 transition duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaUserShield className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client-Centric Approach</h3>
              <p className="text-red-100">
                We prioritize your needs above all, tailoring our services to ensure your complete satisfaction.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 transition duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Strength</h3>
              <p className="text-red-100">
                Strong financial performance that guarantees security and tangible returns for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership/Team Section */}
      <section className="py-16 px-6 md:px-16 lg:px-32">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by experienced professionals committed to your financial security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-200 transition-colors duration-300 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <img src="/team1.jpg" alt="CEO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Brian Otieno</h3>
              <p className="text-red-600 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600">
                With over 25 years in the insurance industry, Hans leads our company with vision and integrity.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-200 transition-colors duration-300 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <img src="/team2.jpg" alt="CFO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Brian Otieno</h3>
              <p className="text-red-600 font-medium mb-3">Chief Financial Officer</p>
              <p className="text-gray-600">
                Financial strategist ensuring the stability and growth of our company's investments.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-200 transition-colors duration-300 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <img src="/team3.jpg" alt="COO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Brian Otieno</h3>
              <p className="text-red-600 font-medium mb-3">Chief Operations Officer</p>
              <p className="text-gray-600">
                Oversees our daily operations with a focus on efficiency and client satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get to Know Us Better</h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-8">
            Discover how our expertise can benefit you and your financial future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-white hover:bg-gray-100 text-red-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Meet Our Team
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

export default About;