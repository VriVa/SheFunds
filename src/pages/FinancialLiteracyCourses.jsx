import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext'; // Adjust the import path as needed
import { Bell } from 'lucide-react';

const FinancialLiteracyCoursesPage = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);
  const { darkMode } = useContext(ThemeContext);
  
  const courses = [
    {
      id: 1,
      title: "Budgeting Basics",
      description: "Master the fundamentals of personal budgeting and take control of your financial future.",
      image: "https://img.freepik.com/free-photo/high-angle-budget-wooden-blocks_23-2148543187.jpg?t=st=1741430462~exp=1741434062~hmac=143166cadb4bea1c9253e89bffd4f1e9561dee34bfd65383ba98f14fdd298ac1&w=1380",
      badge: "Budget Master",
      progress: 0,
      modules: [
        { id: 101, title: "Understanding Income & Expenses", duration: "45 min", completed: false },
        { id: 102, title: "Creating Your First Budget", duration: "60 min", completed: false },
        { id: 103, title: "Tracking Systems That Work", duration: "45 min", completed: false },
        { id: 104, title: "Budget Troubleshooting", duration: "50 min", completed: false }
      ]
    },
    {
      id: 2,
      title: "Saving Strategies",
      description: "Learn effective techniques to build your savings and create financial security.",
      image: "https://img.freepik.com/free-photo/hand-putting-coin-piggy-bank-growth-chart_23-2148780586.jpg?t=st=1741430532~exp=1741434132~hmac=4b2a380119699f39b181898f5eb013caedfa5d4212e106cf895ff881008d334a&w=1380",
      badge: "Savings Guru",
      progress: 0,
      modules: [
        { id: 201, title: "Setting Achievable Savings Goals", duration: "40 min", completed: false },
        { id: 202, title: "Emergency Funds & Why They Matter", duration: "55 min", completed: false },
        { id: 203, title: "Automating Your Savings", duration: "35 min", completed: false }
      ]
    },
    {
      id: 3,
      title: "Investing for Your Future",
      description: "Discover how to grow your wealth through smart, long-term investment strategies.",
      image: "https://img.freepik.com/free-vector/woman-examining-banknote-man-counting-coins-illustration_1262-18985.jpg?t=st=1741430588~exp=1741434188~hmac=99c6bd30fe8e2ef06d7e50f536e8f6ff701c9c154bf53700c97bd9343b74b96f&w=1380",
      badge: "Investment Pro",
      progress: 0,
      modules: [
        { id: 301, title: "Investment Fundamentals", duration: "60 min", completed: false },
        { id: 302, title: "Understanding Risk & Return", duration: "50 min", completed: false },
        { id: 303, title: "Building Your Investment Portfolio", duration: "70 min", completed: false },
        { id: 304, title: "Retirement Planning Essentials", duration: "65 min", completed: false },
        { id: 305, title: "Socially Responsible Investing", duration: "45 min", completed: false }
      ]
    },
    {
      id: 4,
      title: "Debt Management",
      description: "Take control of your debt with proven strategies to reduce and eliminate what you owe.",
      image: "https://img.freepik.com/free-photo/debt-obligation-banking-finance-loan-money-concept_53876-127434.jpg?t=st=1741430631~exp=1741434231~hmac=fdc18a071c5b46f94b72aeae83ce5c1159bda9243597aab26ac69b0bbe93abb8&w=1380",
      badge: "Debt-Free Champion",
      progress: 0,
      modules: [
        { id: 401, title: "Understanding Different Types of Debt", duration: "45 min", completed: false },
        { id: 402, title: "Creating a Debt Payoff Plan", duration: "60 min", completed: false },
        { id: 403, title: "Negotiating with Creditors", duration: "50 min", completed: false },
        { id: 404, title: "Maintaining a Debt-Free Lifestyle", duration: "55 min", completed: false }
      ]
    }
  ];

  const selectedCourse = courses.find(course => course.id === selectedCourseId);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const markModuleComplete = (moduleId) => {
    // In a real app, this would call an API to update progress
    console.log(`Module ${moduleId} marked as complete`);
  };

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pink-50 to-white'}`}>

     {/* Header - Changed to black */}
     <header className={`fixed top-0 right-0 left-16 h-16 z-10 flex items-center justify-between px-6 ${darkMode ? 'bg-gray-800' : 'bg-pink-100'}`}>
              <div className="flex items-center">
                <h1 className="text-lg font-semibold">
                  <span className={`${darkMode ? 'text-white' : 'text-gray-900'} font-bold ml-10`}>She</span>
                  <span className={`${darkMode ? 'text-pink-300' : 'text-pink-500'} font-light`}>Funds</span>
                </h1>
              </div>
          
              <div className="flex items-center space-x-4">
                <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700 border-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 border-gray-300 text-gray-800'} border`}>
                  <Bell size={20} />
                </button>
          
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${darkMode ? 'bg-pink-500 text-white' : 'bg-pink-400 text-white'}`}>
                    JD
                  </div>
                  <div className="ml-2 hidden md:block">
                    <div className={`${darkMode ? 'text-white' : 'text-gray-900'} text-sm font-semibold`}>Jane Doe</div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-xs`}>Financial Explorer</div>
                  </div>
                </div>
              </div>
            </header>
      

      {/* Page Header */}
      <div className={`${darkMode ? 'bg-gradient-to-r from-gray-700 to-pink-800' : 'bg-gradient-to-r from-pink-600 to-pink-500'} py-8 px-4 sm:px-6 lg:px-8 mt-16`}>
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-2"
          >
            Financial Literacy Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${darkMode ? 'text-pink-200' : 'text-pink-100'} text-lg max-w-3xl`}
          >
            Step-by-step lessons on budgeting, saving, investing, and managing debt. 
            Complete all courses to earn your certification.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedCourseId ? (
          /* Courses Grid View */
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={fadeIn}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`${darkMode ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-md'} rounded-lg overflow-hidden`}
                >
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-48 object-cover" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900 to-transparent p-4">
                      <h2 className="text-2xl font-bold text-white">{course.title}</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className={`${darkMode ? 'text-pink-300' : 'text-pink-700'} mb-4`}>{course.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className={`${darkMode ? 'bg-pink-900 text-pink-200' : 'bg-pink-100 text-pink-800'} px-3 py-1 rounded-full text-sm font-medium`}>
                        Badge: {course.badge}
                      </div>
                      <div className={`text-sm ${darkMode ? 'text-pink-300' : 'text-pink-600'}`}>
                        {course.modules.length} Modules
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className={`w-full ${darkMode ? 'bg-pink-900' : 'bg-pink-100'} rounded-full h-2`}>
                        <div 
                          className="bg-pink-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className={`text-xs text-right mt-1 ${darkMode ? 'text-pink-300' : 'text-pink-600'}`}>
                        {course.progress}% Complete
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCourseId(course.id)}
                      className="w-full py-3 bg-pink-600 text-white text-center rounded-md hover:bg-pink-700 transition-colors duration-200 font-medium"
                    >
                      {course.progress > 0 ? "Continue Course" : "Start Course"}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Certification Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`mt-12 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-pink-900' : 'bg-gradient-to-r from-pink-100 to-white border-pink-200'} p-6 rounded-lg shadow-md border`}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mr-6 mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-pink-300' : 'text-pink-800'} mb-2`}>Financial Literacy Certification</h3>
                  <p className={`${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>Complete all four courses to earn your Financial Literacy Certification. Track your progress and earn badges along the way.</p>
                </div>
                <div className="mt-4 md:mt-0 ml-0 md:ml-6">
                  <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors duration-200">
                    View Certification
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Single Course Detail View */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={() => setSelectedCourseId(null)}
              className={`flex items-center ${darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-700 hover:text-pink-900'} mb-6`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Courses
            </button>

            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
              <div className="relative">
                <img 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title} 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900 to-transparent p-6">
                  <div className={`inline-block ${darkMode ? 'bg-pink-800 text-pink-200' : 'bg-pink-200 text-pink-800'} px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                    Badge: {selectedCourse.badge}
                  </div>
                  <h1 className="text-3xl font-bold text-white">{selectedCourse.title}</h1>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className={`${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>{selectedCourse.modules.length} Modules</div>
                  <div className="flex items-center">
                    <div className={`w-48 ${darkMode ? 'bg-pink-900' : 'bg-pink-100'} rounded-full h-2 mr-2`}>
                      <div 
                        className="bg-pink-600 h-2 rounded-full" 
                        style={{ width: `${selectedCourse.progress}%` }}
                      ></div>
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                      {selectedCourse.progress}% Complete
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className={`text-xl font-bold ${darkMode ? 'text-pink-300' : 'text-pink-800'} mb-2`}>About This Course</h2>
                  <p className={`${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>{selectedCourse.description}</p>
                </div>

                <div>
                  <h2 className={`text-xl font-bold ${darkMode ? 'text-pink-300' : 'text-pink-800'} mb-4`}>Course Modules</h2>
                  <div className="space-y-4">
                    {selectedCourse.modules.map((module, index) => (
                      <motion.div 
                        key={module.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`border ${darkMode ? 'border-gray-700' : 'border-pink-200'} rounded-lg overflow-hidden`}
                      >
                        <div 
                          className={`p-4 ${expandedModule === module.id 
                            ? (darkMode ? 'bg-gray-700' : 'bg-pink-50') 
                            : (darkMode ? 'bg-gray-800' : 'bg-white')}`}
                          onClick={() => toggleModule(module.id)}
                        >
                          <div className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                module.completed 
                                  ? (darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-600') 
                                  : (darkMode ? 'bg-pink-900 text-pink-300' : 'bg-pink-100 text-pink-600')
                              }`}>
                                {module.completed ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                ) : (
                                  <span>{index + 1}</span>
                                )}
                              </div>
                              <div>
                                <h3 className={`font-medium ${darkMode ? 'text-pink-300' : 'text-pink-800'}`}>{module.title}</h3>
                                <p className={`text-sm ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>{module.duration}</p>
                              </div>
                            </div>
                            <div>
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-5 w-5 ${darkMode ? 'text-pink-400' : 'text-pink-600'} transition-transform duration-200 ${expandedModule === module.id ? 'transform rotate-180' : ''}`} 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                              >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {expandedModule === module.id && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className={`px-4 pb-4 border-t ${darkMode ? 'border-gray-700' : 'border-pink-100'}`}
                          >
                            <div className="pt-4">
                              <h4 className={`font-medium ${darkMode ? 'text-pink-300' : 'text-pink-800'} mb-2`}>Module Overview</h4>
                              <p className={`${darkMode ? 'text-pink-400' : 'text-pink-700'} mb-4`}>
                                This module covers essential concepts about {module.title.toLowerCase()} to help you build a strong foundation for your financial journey.
                              </p>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                <motion.button
                                  whileHover={{ scale: 1.03 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors duration-200"
                                >
                                  {module.completed ? "Review Lesson" : "Start Lesson"}
                                </motion.button>
                                {!module.completed && (
                                  <button 
                                    onClick={() => markModuleComplete(module.id)}
                                    className={`px-4 py-2 border border-pink-600 ${darkMode ? 'text-pink-400 hover:bg-gray-700' : 'text-pink-600 hover:bg-pink-50'} rounded-md transition-colors duration-200`}
                                  >
                                    Mark as Complete
                                  </button>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Courses */}
            <div className="mt-12">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-pink-300' : 'text-pink-800'} mb-6`}>Related Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.filter(course => course.id !== selectedCourseId).slice(0, 3).map((course) => (
                  <motion.div
                    key={course.id}
                    whileHover={{ y: -5 }}
                    className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-md cursor-pointer`}
                    onClick={() => setSelectedCourseId(course.id)}
                  >
                    <h3 className={`font-semibold ${darkMode ? 'text-pink-300' : 'text-pink-800'} mb-2`}>{course.title}</h3>
                    <p className={`text-sm ${darkMode ? 'text-pink-400' : 'text-pink-700'} mb-2`}>{course.modules.length} Modules</p>
                    <div className={`w-full ${darkMode ? 'bg-pink-900' : 'bg-pink-100'} rounded-full h-1.5`}>
                      <div 
                        className="bg-pink-600 h-1.5 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Badge Achievement Section */}
      {!selectedCourseId && (
        <section className={`${darkMode ? 'bg-gray-800' : 'bg-pink-50'} py-12 px-4 sm:px-6 lg:px-8 mt-12`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
              className="text-center mb-10"
            >
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-pink-300' : 'text-pink-800'} mb-2`}>Earn Your Financial Badges</h2>
              <p className={`${darkMode ? 'text-pink-400' : 'text-pink-700'} max-w-3xl mx-auto`}>
                Complete each course to earn a badge and showcase your financial skills. Collect all badges to receive your Financial Literacy Certification.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeIn}
                  className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg p-6 text-center shadow-md flex flex-col items-center`}
                >
                  <div className={`w-20 h-20 rounded-full mb-4 flex items-center justify-center ${
                    course.progress === 100 
                      ? 'bg-pink-600' 
                      : (darkMode ? 'bg-pink-900' : 'bg-pink-100')
                  }`}>
                    {course.progress === 100 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                  </div>
                  <h3 className={`text-lg font-medium ${darkMode ? 'text-pink-300' : 'text-pink-800'} mb-1`}>{course.badge}</h3>
                  <p className={`text-sm ${darkMode ? 'text-pink-400' : 'text-pink-600'} mb-3`}>{course.title}</p>
                  {course.progress === 100 ? (
                    <span className={`inline-block px-3 py-1 ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'} rounded-full text-xs`}>Completed</span>
                  ) : (
                    <span className={`inline-block px-3 py-1 ${darkMode ? 'bg-pink-900 text-pink-300' : 'bg-pink-100 text-pink-800'} rounded-full text-xs`}>In Progress</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FinancialLiteracyCoursesPage;