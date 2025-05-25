// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

// Main Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import Signup from "./pages/Signup";

// User Portal Layout and Pages
import Layout from "./pages/user/layout";
import Dashboard from "./pages/user/dashboard/Dashboard";
import Policies from "./pages/user/policies/Policies";
import Claims from "./pages/user/Claims";
import Payments from "./pages/user/Payments";
import Profile from "./pages/user/Profile";
import Support from "./pages/user/Support";
import Notifications from "./pages/user/Notifications";
import Add from "./pages/user/add";
import Login from"./pages/user/AuthPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes (without sidebar) */}
        <Route path="/*" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
          </div>
        } />

        {/* User Portal Routes (with sidebar) */}
        <Route path="/user/*" element={<Layout />}>
        <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="policies" element={<Policies />} />
          <Route path="claims" element={<Claims />} />
          <Route path="payments" element={<Payments />} />
          <Route path="profile" element={<Profile />} />
          <Route path="support" element={<Support />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;