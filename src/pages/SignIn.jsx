import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SignIn() {
  return (
    <div className="relative min-h-screen bg-pink-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-100 opacity-50"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md text-center relative"
      >
        <h1 className="text-4xl font-extrabold text-pink-600">SheFunds</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-sm text-gray-600">
          Or{' '}
          <Link to="/signup" className="font-medium text-pink-600 hover:text-pink-500">
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
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
          <form className="space-y-6">
            {['Email address', 'Password'].map((label, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700">{label}</label>
                <div className="mt-1">
                  <input
                    type={label.includes('Password') ? 'password' : 'email'}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-pink-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
            >
              Sign in
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
