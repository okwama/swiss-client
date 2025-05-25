import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
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

  return (
    <div className="fixed h-full bg-white shadow-lg w-64 p-4 overflow-y-auto">
      <div className="flex items-center mb-8 p-2">
        <img 
          src="/lg.svg" 
          alt="Logo" 
          className="h-10 w-100 mr-3"
        />
        {/* <h2 className="text-xl font-bold text-gray-800">User Portal</h2> */}
      </div>
      
      <nav className="space-y-1">
        {/* Dashboard */}
        <NavLink 
          to="/user/dashboard" 
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          Dashboard
        </NavLink>

        {/* Navigation */}
        <div 
          className="flex items-center justify-between p-3 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
          onClick={() => toggleMenu('navigation')}
        >
          <span className="font-medium">Navigation</span>
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
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Policies
            </NavLink>
            
            <NavLink 
              to="/user/claims" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Claims
            </NavLink>
            
            <NavLink 
              to="/user/payments" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Payments & Billing
            </NavLink>
            
            <NavLink 
              to="/user/profile" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Profile
            </NavLink>
            
            
          </div>
        )}

        {/* Policies Management */}
        <div 
          className="flex items-center justify-between p-3 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
          onClick={() => toggleMenu('policies')}
        >
          <span className="font-medium">Policies Management</span>
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
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              View All Policies
            </NavLink>
            
            <NavLink 
              to="add" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Buy New Policy
            </NavLink>
          </div>
        )}

        {/* Claim Management */}
        <div 
          className="flex items-center justify-between p-3 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
          onClick={() => toggleMenu('claims')}
        >
          <span className="font-medium">Claim Management</span>
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
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              File a Claim
            </NavLink>
            
            <NavLink 
              to="/user/claim/status" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Claim Status
            </NavLink>
          </div>
        )}

        {/* Notifications */}
        <NavLink 
          to="/user/notifications" 
          className={({ isActive }) => 
            `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          Notifications Center
        </NavLink>
        <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`
              }
            >
              Support Center
            </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;