import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from "react-icons/fa";

export default function SignUp() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/shefundsdashboard");
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarHeight = scrolled ? "64px" : "88px"; 

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-pink-50'} flex flex-col justify-center py-12 sm:px-6 lg:px-8`}>
      {/* Navbar - Fixed at top */}
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 shadow-md ${scrolled ? "py-2" : "py-6"} ${darkMode ? "bg-gray-900" : "bg-white"}`}>
         <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">S</span>
            </div>
  
            {/* Logo */}
            <div>
              <h1 className="text-2xl font-semibold">
                <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>She</span>
                <span className={`${darkMode ? 'text-pink-400' : 'text-pink-500'} font-light`}>Funds</span>
              </h1>
            </div>
          </div>
  
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`font-medium transition-colors ${darkMode ? 'text-gray-200 hover:text-pink-400' : 'text-gray-800 hover:text-pink-500' }`}>
              Features
            </a>
            <a href="#testimonials" className={`font-medium transition-colors ${darkMode ? 'text-gray-200 hover:text-pink-400' : 'text-gray-800 hover:text-pink-500'}`} >
              Testimonials
            </a>
            <a href="#about" className={`font-medium transition-colors ${darkMode ? 'text-gray-200 hover:text-pink-400' : 'text-gray-800 hover:text-pink-500' }`}>
              About Us
            </a>
            <a href="#contact" className={`font-medium transition-colors ${darkMode ? 'text-gray-200 hover:text-pink-400' : 'text-gray-800 hover:text-pink-500' }`}>
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/signup">
              <button 
                className={`px-6 py-2 rounded-full font-medium ${darkMode ? "bg-pink-600 text-white" : "bg-pink-500 text-white"} hover:bg-pink-700 transition-colors`}
              >
                Sign Up
              </button>
            </Link>
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? "bg-gray-800" : "bg-gray-100"} shadow-sm`}
            >
              {darkMode ? <FaSun className="text-yellow-300 text-xl" /> : <FaMoon className="text-gray-600 text-xl" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Main content - Add padding top to create space for the navbar */}
      <div style={{ paddingTop: "50px" }} className="flex flex-col flex-grow justify-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="sm:mx-auto sm:w-full sm:max-w-md text-center"
        >
          {/* Logo */}
          <h1 className="text-4xl font-semibold">
            <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>She</span>
            <span className={`${darkMode ? 'text-pink-400' : 'text-pink-500'} font-light`}>Funds</span>
          </h1>
          
          <h2 className={`mt-4 text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Create your account</h2>
          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Already have an account?{' '}
            <Link to="/signin" className={`font-medium ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-500'}`}>
              Sign in
            </Link>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-8 px-6 shadow-lg rounded-lg sm:px-10`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {['Full Name', 'Email address', 'Password', 'Confirm Password'].map((label, index) => (
                <div key={index}>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{label}</label>
                  <div className="mt-1">
                    <input
                      type={label.includes('Password') ? 'password' : label.includes('Email') ? 'email' : 'text'}
                      required
                      className={`appearance-none block w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-pink-300 text-gray-900 placeholder-gray-400'} rounded-md shadow-sm focus:outline-none ${darkMode ? 'focus:ring-pink-400 focus:border-pink-400' : 'focus:ring-pink-500 focus:border-pink-500'}`}
                    />
                  </div>
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-pink-500 hover:bg-pink-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'focus:ring-pink-400 focus:ring-offset-gray-800' : 'focus:ring-pink-400'}`}
              >
                Create Account
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}