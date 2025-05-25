import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16 lg:px-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* COMPANY NAME & COPYRIGHT */}
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold">Swiss Insurance</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Swiss Insurance. All Rights Reserved.</p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
          <Link href="/about"><span className="hover:text-green-400 transition duration-300 cursor-pointer">About Us</span></Link>
          <Link href="/contact"><span className="hover:text-green-400 transition duration-300 cursor-pointer">Contact</span></Link>
          <Link href="/services"><span className="hover:text-green-400 transition duration-300 cursor-pointer">Services</span></Link>
          <Link href="/terms"><span className="hover:text-green-400 transition duration-300 cursor-pointer">Terms & Conditions</span></Link>
          <Link href="/admin-auth/login"><span className="hover:text-green-400 transition duration-300 cursor-pointer">Staff Portal</span></Link>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <FaFacebookF size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <FaTwitter size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FaLinkedinIn size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
            <FaInstagram size={18} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
