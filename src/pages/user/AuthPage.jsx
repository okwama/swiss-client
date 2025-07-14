import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For signup only

  const navigate = useNavigate();

  // Handle form submission - immediately redirect to dashboard
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/user/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-6 bg-white rounded-lg shadow-lg p-6 sm:p-8">
        {/* Logo and Client Portal Header */}
        <div className="flex flex-col items-center space-y-3">
          <img 
            src="/lg.svg" 
            alt="Company Logo" 
            className="h-10 sm:h-12 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Client Portal</h1>
          <h2 className="text-base sm:text-lg font-medium text-gray-600 text-center">
            {isSignup ? "Create an Account" : "Sign in to your account"}
          </h2>
        </div>
        
        <form className="mt-6 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          {isSignup && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Enter your full name"
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Enter your password"
            />
          </div>
          
          {/* error && (
            <div className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
              {error}
            </div>
          ) */}

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
        
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsSignup(false)}
                  className="font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsSignup(true)}
                  className="font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Sign Up
                </button>
              </>
            )}
          </p>
          
          <div className="pt-4 border-t border-gray-200">
            <a 
              href="https://swiss-admin.vercel.app//" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
