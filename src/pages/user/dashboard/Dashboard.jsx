import React from "react";
import DashboardCard from "../../../components/userComponents/DashboardCard";
import PaymentTable from "../../../components/userComponents/PaymentTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-5 md:p-8">
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-6 w-full max-w-6xl">
        <DashboardCard 
          title="Policies" 
          value="24" 
          description="Active policies"
          icon={
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          }
          bgColor="bg-white"
          borderColor="border-l-4 border-blue-500"
          hoverEffect="hover:shadow-lg hover:-translate-y-1 transition-all"
        />
        <DashboardCard 
          title="Claims" 
          value="5" 
          description="Pending claims"
          icon={
            <div className="p-3 rounded-full bg-amber-100 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          }
          bgColor="bg-white"
          borderColor="border-l-4 border-amber-500"
          hoverEffect="hover:shadow-lg hover:-translate-y-1 transition-all"
        />
        <DashboardCard 
          title="Payments" 
          value="Kes 1,240" 
          description="This month"
          icon={
            <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          }
          bgColor="bg-white"
          borderColor="border-l-4 border-emerald-500"
          hoverEffect="hover:shadow-lg hover:-translate-y-1 transition-all"
        />
        <DashboardCard 
          title="Notifications" 
          value="3" 
          description="Unread"
          icon={
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
          }
          bgColor="bg-white"
          borderColor="border-l-4 border-red-500"
          hoverEffect="hover:shadow-lg hover:-translate-y-1 transition-all"
        />
      </div>

      {/* Payments Table */}
      <div className="bg-white shadow-sm rounded-lg p-6 w-full max-w-6xl border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Payments</h2>
        <PaymentTable />
      </div>
    </div>
  );
};

export default Dashboard;