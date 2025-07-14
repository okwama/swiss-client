import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Mobile menu button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          <Bars3Icon className="h-6 w-6 text-gray-600" />
        </button>
        
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Dashboard Overview
        </h2>
      </div>
      
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <span className="relative">
            <span className="text-lg">🔔</span>
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
          </span>
        </button>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src="https://randomuser.me/api/portraits/med/men/75.jpg" 
            alt="User" 
            className="h-8 w-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700 hidden sm:block">
            Benjamin Okwama
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;