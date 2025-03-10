import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ChevronRight, Heart, Share2, MessageCircle, BookOpen } from 'lucide-react';

// Main App Component
const FinancialBlogPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showFeatured, setShowFeatured] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const categories = ['All', 'Success Stories', 'Investments', 'Budgeting', 'Career Growth'];

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "How I Built a 6-Figure Investment Portfolio Starting with $50 per Month",
      excerpt: "My journey from financial anxiety to financial freedom and the strategies that helped me succeed.",
      author: "Sarah Johnson",
      date: "March 2, 2025",
      category: "Success Stories",
      readTime: "8 min read",
      image: "https://img.freepik.com/free-photo/front-view-woman-with-business-charts-clipboard_23-2148435597.jpg?t=st=1741427667~exp=1741431267~hmac=68c2e402a48e7705b3068f109ff665705226f20eddad981102bf220db4d84873&w=1380",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Market Volatility: A Woman's Guide to Steady Investing",
      excerpt: "Learn how to navigate market ups and downs without emotional decision-making.",
      author: "Michelle Wong",
      date: "February 28, 2025",
      category: "Investments",
      readTime: "6 min read",
      image: "https://img.freepik.com/free-photo/flat-lay-paper-arrow-indicating-economy-crisis_23-2148568078.jpg?t=st=1741428509~exp=1741432109~hmac=5acc92dfdfea7a117ea6f2a635a4fff9b6f7f65a65ef2bfaa73833b71dc6a3ae&w=1380",
      featured: false
    },
    {
      id: 3,
      title: "From Debt to Director: My Corporate Success Story",
      excerpt: "How I paid off $87,000 in debt while climbing the corporate ladder in a male-dominated industry.",
      author: "Latisha Brooks",
      date: "February 20, 2025",
      category: "Success Stories",
      readTime: "10 min read",
      image: "https://img.freepik.com/free-vector/financial-stress-economic-downturn_1308-171225.jpg?t=st=1741427815~exp=1741431415~hmac=642490f2fe2749daed5d212ae2e306ada1faa36198de56c61dc6a4688297cb71&w=1380",
      featured: true
    },
    {
      id: 4,
      title: "The 50/30/20 Rule: How This Simple Budget Changed My Financial Life",
      excerpt: "A practical guide to implementing this popular budgeting technique with real-life examples.",
      author: "Emma Chen",
      date: "February 18, 2025",
      category: "Budgeting",
      readTime: "5 min read",
      image: "https://img.freepik.com/free-photo/happy-girl-posing-with-her-piggy-bank_1169-113.jpg?t=st=1741428168~exp=1741431768~hmac=b534e238785e71bcf47e55514b699bd60ca993f2d3034115c96005170a9a05a7&w=1380",
      featured: false
    },
    {
      id: 5,
      title: "Negotiating Your Worth: How I Secured a 40% Pay Raise",
      excerpt: "Practical negotiation tactics that helped me break through the gender pay gap.",
      author: "Jessica Patel",
      date: "February 15, 2025",
      category: "Career Growth",
      readTime: "7 min read",
      image: "https://img.freepik.com/free-photo/lovely-young-woman-checked-shirt-smiling-while-showing-credit-card-with-thumbs-up-white-wall_141793-31320.jpg?t=st=1741428312~exp=1741431912~hmac=05a65b4f26d91d92eb1ba0eda4c238098d583460d66180a8b23d32569f70ec17&w=1380",
      featured: false
    },
    {
      id: 6,
      title: "My Path to Financial Independence as a Single Mother",
      excerpt: "Managing a household, raising children, and building wealth on a single income.",
      author: "Diana Martinez",
      date: "February 10, 2025",
      category: "Success Stories",
      readTime: "9 min read",
      image: "https://img.freepik.com/free-photo/patients-consulting-virtual-doctor-with-laptop_23-2148872995.jpg?t=st=1741427930~exp=1741431530~hmac=14792db5ab1e5688b28d3ea965ec3b1481ae825225e87f74fd85a153997d66eb&w=1380",
      featured: true
    }
  ];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-pink-50 to-white'} transition-colors duration-300`}>
      {/* Dark Mode Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-pink-100 dark:bg-gray-800 hover:bg-pink-200 dark:hover:bg-gray-700 transition-colors duration-300 shadow-md"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-pink-500" />
          ) : (
            <Moon className="h-5 w-5 text-pink-500" />
          )}
        </button>
      </div>

      <main className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white font-serif">
            Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Success</span> Stories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-light max-w-3xl mx-auto">
            Real women, real financial journeys. Get inspired and educated by stories that empower your financial independence.
          </p>
        </motion.div>

        {/* Categories - Refined */}
        <div className="flex justify-center space-x-3 mb-16 overflow-x-auto py-2">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className={`px-5 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-pink-50 dark:hover:bg-gray-700 shadow'
              } transition-all duration-300 font-medium`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Featured Posts - Enhanced */}
        {showFeatured && activeCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white font-serif flex items-center">
                <span className="h-px w-8 bg-pink-500 mr-3"></span> 
                Featured Stories
              </h2>
              <button
                onClick={() => setShowFeatured(false)}
                className="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400 flex items-center"
              >
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white transition-colors duration-300 font-serif">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 font-light">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{post.author}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{post.date} · {post.readTime}</p>
                      </div>
                      <button className="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400">
                        <Heart className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Blog Posts - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white font-serif flex items-center">
            <span className="h-px w-8 bg-pink-500 mr-3"></span>
            {activeCategory === 'All' ? 'Latest Articles' : activeCategory}
          </h2>

          <div className="grid gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300
                ${hoverIndex === index ? 'shadow-xl ring-1 ring-pink-300 dark:ring-pink-500' : ''}
                transform ${hoverIndex === index ? 'scale-102' : 'scale-100'}`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full h-full object-cover transition-transform duration-500
                      ${hoverIndex === index ? 'scale-110' : 'scale-100'}`}
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold mb-3 text-gray-800 dark:text-white transition-colors duration-300 font-serif"
                      whileHover={{ scale: 1.01 }}
                    >
                      {post.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 font-light">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{post.author}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">{post.date} · {post.readTime}</p>
                      </div>
                      <div className="flex space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          className="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                        >
                          <Heart className="h-5 w-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          className="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                        >
                          <Share2 className="h-5 w-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          className="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                        >
                          <MessageCircle className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </div>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={hoverIndex === index ? { opacity: 1 } : { opacity: 0 }}
                      className="mt-4 flex items-center text-pink-500 font-medium"
                    >
                      Read Full Story <ChevronRight className="h-4 w-4 ml-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Subscription - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="py-16 px-10 bg-gradient-to-r from-pink-400 to-purple-600 dark:from-pink-900 dark:to-purple-800 rounded-2xl shadow-xl my-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4 text-white font-serif">Join Our Financial Community</h3>
              <p className="text-white text-opacity-90 text-lg">Get weekly insights, success stories, and expert tips delivered straight to your inbox.</p>
            </div>
            <div className="md:w-1/3 w-full">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-white border-0 dark:bg-gray-800 dark:text-white"
                />
                <button className="bg-white text-pink-600 px-6 py-3 rounded-r-lg font-medium transition-colors duration-300 hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
              <p className="text-white text-opacity-75 text-xs mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Floating "Back to Top" Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ y: -5 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <BookOpen className="h-6 w-6" />
      </motion.button>
    </div>
  );
};

export default FinancialBlogPage;