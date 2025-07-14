import React from "react";

const DashboardCard = ({ title, value, description, icon, bgColor = "bg-white", borderColor = "", hoverEffect = "" }) => {
  return (
    <div className={`${bgColor} rounded-lg shadow p-4 sm:p-6 transition-all duration-300 ${hoverEffect} ${borderColor}`}>
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-gray-500 truncate">{title}</p>
          <h3 className="text-xl sm:text-2xl font-bold mt-1 text-gray-800 truncate">{value}</h3>
          <p className="text-xs text-gray-400 mt-2 truncate">{description}</p>
        </div>
        <div className="flex-shrink-0 ml-3">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;