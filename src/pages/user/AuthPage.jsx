import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For signup only
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle form submission - immediately redirect to dashboard
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/user/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        {/* Logo and Client Portal Header */}
        <div className="flex flex-col items-center space-y-2">
          <img 
            src="/lg.svg" 
            alt="Company Logo" 
            className="h-12 object-contain"
          />
          <h1 className="text-2xl font-bold text-gray-800">Client Portal</h1>
          <h2 className="text-lg font-medium text-gray-600">
            {isSignup ? "Create an Account" : "Sign in to your account"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {isSignup && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {error && <div className="text-sm text-red-500">{error}</div>}

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsSignup(false)}
                  className="font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsSignup(true)}
                  className="font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Sign Up
                </button>
              </>
            )}
          </p>
          <div className="mt-4 text-center">
            <a 
              href="https://swiss-admin.vercel.app//" 
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
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
