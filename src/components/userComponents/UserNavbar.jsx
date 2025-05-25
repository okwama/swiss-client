import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-6 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800">Dashboard Overview</h2>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <span className="relative">
            🔔
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </span>
        </button>
        <div className="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/med/men/75.jpg" 
            alt="User" 
            className="h-8 w-8 rounded-full mr-2"
          />
          <span className="text-sm font-medium">Benjamin Okwama</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;