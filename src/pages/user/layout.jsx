// src/pages/user/UserPortalLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/userComponents/Sidebar";
import UserNavbar from "../../components/userComponents/UserNavbar";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-5 md:p-8 ml-0 md:ml-64">
        <UserNavbar />
        <main className="mt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;