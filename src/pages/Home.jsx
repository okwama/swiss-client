// src/pages/Home.js
import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceCards from "../components/ServiceCards";
import ChatBot from "../components/ChatBot";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceCards />
      <ChatBot />
    </div>
  );
};

export default Home;
