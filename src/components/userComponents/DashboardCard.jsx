import React from "react";

const DashboardCard = ({ title, value, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-800">{value}</h3>
          <p className="text-xs text-gray-400 mt-2">{description}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </div>
  );
};

export default DashboardCard;