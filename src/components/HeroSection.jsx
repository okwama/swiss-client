import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-indigo-950 h-screen flex flex-col md:flex-row mt-5">
      {/* TEXT CONTAINER */}
      <div 
        className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 p-6 md:p-12 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bg.jpg')" }} 
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-100 bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-bggreen text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Swiss Life HLDG - Your Trusted Partner in Insurance and Financial Solutions
          </h1>
          <p className="text-bggreen text-base md:text-lg xl:text-xl mt-4">
            Secure your future with customized insurance plans that fit your needs.
          </p>
          <button className="mt-6 bg-red-500 text-white font-semibold rounded-md py-3 px-6 hover:bg-green-500 transition duration-300">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
