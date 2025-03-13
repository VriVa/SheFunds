import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from "react-icons/fa";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Hardcoded credentials
    const correctEmail = 'janedoe@gmail.com';
    const correctPassword = '1234';

    if (email === correctEmail && password === correctPassword) {
      alert('Login successful! 🎉');
      setError('');
      navigate('/shefundsdashboard'); // Redirect to Dashboard.jsx
    } else {
      setError('Invalid email or password ❌');
    }
  };

  return (
    <div className="relative min-h-screen bg-pink-50 flex flex-col overflow-hidden">
      {/* Navbar - Fixed at top */}
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 shadow-md ${scrolled ? "py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm" : "py-6 bg-transparent"}`}>
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

      {/* Main content - Add padding-top to create space for the fixed navbar */}
      <div className="flex-1 flex flex-col justify-center pt-24 pb-12 sm:px-6 lg:px-8">
        {/* Background Animation */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-pink-100 to-pink-50'} opacity-50`}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="sm:mx-auto sm:w-full sm:max-w-md text-center relative"
        >
          {/* Logo */}
          <h1 className="text-5xl font-semibold">
            <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>She</span>
            <span className={`${darkMode ? 'text-pink-400' : 'text-pink-500'} font-light`}>Funds</span>
          </h1>
          
          <h2 className={`mt-4 text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sign in to your account</h2>
          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Or{' '}
            <Link to="/signup" className={`font-medium ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-500'}`}>
              create a new account
            </Link>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative"
        >
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-8 px-6 shadow-lg rounded-lg sm:px-10`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email address</label>
                <div className="mt-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`appearance-none block w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-pink-300 text-gray-900 placeholder-gray-400'} rounded-md shadow-sm focus:outline-none ${darkMode ? 'focus:ring-pink-400 focus:border-pink-400' : 'focus:ring-pink-500 focus:border-pink-500'}`}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Password</label>
                <div className="mt-1">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`appearance-none block w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-pink-300 text-gray-900 placeholder-gray-400'} rounded-md shadow-sm focus:outline-none ${darkMode ? 'focus:ring-pink-400 focus:border-pink-400' : 'focus:ring-pink-500 focus:border-pink-500'}`}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-pink-500 hover:bg-pink-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode ? 'focus:ring-pink-400 focus:ring-offset-gray-800' : 'focus:ring-pink-400'}`}
              >
                Sign in
              </motion.button>

              {/* Demo Credentials */}
              <div className={`text-center pt-2 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                <p className="text-sm font-medium">Demo credentials:</p>
                <p className="text-sm">
                  <span className="font-medium">Email:</span> janedoe@gmail.com &nbsp; 
                  <span className="font-medium">Password:</span> 1234
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}