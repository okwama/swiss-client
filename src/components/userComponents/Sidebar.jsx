import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ onClose }) => {
  const [expandedMenus, setExpandedMenus] = useState({
    navigation: true,
    policies: false,
    claims: false,
  });

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const handleNavClick = () => {
    // Close sidebar on mobile when nav item is clicked
    if (window.innerWidth < 1024) {
      onClose?.();
    }
  };

  return (
    <div className="h-full bg-white shadow-lg w-64 flex flex-col">
      {/* Header with close button for mobile */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <img 
            src="/lg.svg" 
            alt="Logo" 
            className="h-8 w-auto mr-3"
          />
          <h2 className="text-lg font-bold text-gray-800 hidden sm:block">User Portal</h2>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <XMarkIcon className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {/* Dashboard */}
        <NavLink 
          to="/user/dashboard" 
          onClick={handleNavClick}
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive 
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          <span className="text-sm font-medium">Dashboard</span>
        </NavLink>

        {/* Navigation */}
        <div 
          className="flex items-center justify-between p-3 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
          onClick={() => toggleMenu('navigation')}
        >
          <span className="font-medium text-sm">Navigation</span>
          {expandedMenus.navigation ? (
            <ChevronDownIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )}
        </div>
        
        {expandedMenus.navigation && (
          <div className="ml-4 space-y-1">
            <NavLink 
              to="/user/policies" 
              onClick={handleNavClick}
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="text-sm">Policies</span>
            </NavLink>
            
            <NavLink 
              to="/user/claims" 
              onClick={handleNavClick}
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="text-sm">Claims</span>
            </NavLink>
            
            <NavLink 
              to="/user/payments" 
              onClick={handleNavClick}
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="text-sm">Payments & Billing</span>
            </NavLink>
            
            <NavLink 
              to="/user/profile" 
              onClick={handleNavClick}
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="text-sm">Profile</span>
            </NavLink>
          </div>
        )}

        {/* Policies Management */}
        <div 
          className="flex items-center justify-between p-3 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
          onClick={() => toggleMenu('policies')}
        >
          <span className="font-medium text-sm">Policies Management</span>
          {expandedMenus.policies ? (
            <ChevronDownIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )}
        </div>
        
        {expandedMenus.policies && (
          <div className="ml-4 space-y-1">
            <NavLink 
              to="/user/policies" 
              onClick={handleNavClick}
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="text-sm">View All Policies</span>
            </NavLink>
            
            <NavLink 
              to="add" 
              onClick={handleNavClick}
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="text-sm">Buy New Policy</span>
            </NavLink>
          </div>
        )}

        {/* Claim Management */}
        <div 
          className="flex items-center justify-between p-3 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
          onClick={() => toggleMenu('claims')}
        >
          <span className="font-medium text-sm">Claim Management</span>
          {expandedMenus.claims ? (
            <ChevronDownIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )}
        </div>
        
        {expandedMenus.claims && (
          <div className="ml-4 space-y-1">
            <NavLink 
              to="/user/claims" 
              onClick={handleNavClick}
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="text-sm">File a Claim</span>
            </NavLink>
            
            <NavLink 
              to="/user/claim/status" 
              onClick={handleNavClick}
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <span className="text-sm">Claim Status</span>
            </NavLink>
          </div>
        )}

        {/* Notifications */}
        <NavLink 
          to="/user/notifications" 
          onClick={handleNavClick}
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive 
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          <span className="text-sm font-medium">Notifications Center</span>
        </NavLink>
        
        <NavLink 
          to="/contact" 
          onClick={handleNavClick}
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg transition-colors duration-200 ${
              isActive 
                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' 
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          <span className="text-sm font-medium">Support Center</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;