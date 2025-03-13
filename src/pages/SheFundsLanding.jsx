import { useState, useEffect, useContext } from "react";
import { FaMoon, FaSun, FaChartLine, FaBook, FaUsers, FaLightbulb, FaSeedling, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Import the context

export default function SheFundsLanding() {

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Financial Education",
      description: "Expert-led courses on personal finance, investing, and wealth building fundamentals.",
      icon: <FaBook className="text-4xl mb-4" />
    },
    {
      title: "Budgeting Tools",
      description: "Interactive tools to track expenses, set financial goals, and plan for your future.",
      icon: <FaChartLine className="text-4xl mb-4" />
    },
    {
      title: "Community Support",
      description: "Connect with like-minded women and experienced mentors in our supportive community.",
      icon: <FaUsers className="text-4xl mb-4" />
    },
    {
      title: "Investment Guidance",
      description: "Learn market strategies tailored for women's unique financial journeys and goals.",
      icon: <FaLightbulb className="text-4xl mb-4" />
    },
    {
      title: "Funding Opportunities",
      description: "Access grants, loans, and investment opportunities specifically for women entrepreneurs.",
      icon: <FaSeedling className="text-4xl mb-4" />
    },
    {
      title: "Success Stories",
      description: "Be inspired by stories of women who've achieved financial independence and success.",
      icon: <FaStar className="text-4xl mb-4" />
    }
  ];

  const testimonials = [
    {
      quote: "SheFunds transformed my relationship with money. I went from living paycheck to paycheck to building a diversified investment portfolio that's growing my wealth.",
      name: "Sarah Johnson",
      title: "Small Business Owner",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "The community at SheFunds gave me the confidence to negotiate a higher salary and start investing. Now I'm on track for early retirement!",
      name: "Michelle Chen",
      title: "Software Engineer",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "As a single mom, I never thought financial freedom was possible. SheFunds showed me how to budget effectively and start building wealth for my family's future.",
      name: "Tanya Williams",
      title: "Healthcare Professional",
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"} min-h-screen transition-all duration-500`}>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 shadow-md ${scrolled ? "py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm" : "py-6 bg-transparent"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">S</span>
            </div>

            {/* Logo */}
            <div>
              <h1 className="text-2xl font-semibold">
                <span className="font-bold">She</span>
                <span className="text-pink-500 font-light">Funds</span>
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-medium hover:text-pink-500 transition-colors">Features</a>
            <a href="#testimonials" className="font-medium hover:text-pink-500 transition-colors">Testimonials</a>
            <a href="#about" className="font-medium hover:text-pink-500 transition-colors">About Us</a>
            <a href="#contact" className="font-medium hover:text-pink-500 transition-colors">Contact</a>
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

      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-pink-100 to-transparent opacity-60 dark:from-pink-900 dark:opacity-20 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100 to-transparent opacity-60 dark:from-purple-900 dark:opacity-20 rounded-tr-full"></div>
        
        <div className="mt-4 container mx-auto max-w-6xl flex flex-col items-center text-center">
          <div className="md:w-3/4 lg:w-2/3 mb-0">
            <h1 className="text-7xl md:text-5xl lg:text-6xl font-extrabold leading-tight group transition-all">
              <span className={`${darkMode ? "text-pink-300 group-hover:text-pink-400" : "text-pink-600 group-hover:text-pink-800"} transition-all`}>
                Financial Freedom
              </span> 
              <br />
              <span className="group-hover:text-opacity-80 transition-all">For Every Woman</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-lg mx-auto leading-relaxed opacity-90 hover:opacity-100 transition-all">
              Empowering women through financial education, community support, and tailored resources to build wealth and achieve independence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Start Your Journey
                </button>
              </Link>
              <button className={`px-8 py-4 rounded-full border-2 ${darkMode ? "border-pink-600 text-pink-300" : "border-pink-500 text-pink-600"} font-semibold text-lg hover:shadow-lg transition-all`}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className={`text-4xl font-bold ${darkMode ? "text-pink-300" : "text-pink-600"}`}>10k+</p>
              <p className="mt-2 text-sm uppercase tracking-wider">Active Members</p>
            </div>
            <div className="text-center">
              <p className={`text-4xl font-bold ${darkMode ? "text-pink-300" : "text-pink-600"}`}>50+</p>
              <p className="mt-2 text-sm uppercase tracking-wider">Financial Courses</p>
            </div>
            <div className="text-center">
              <p className={`text-4xl font-bold ${darkMode ? "text-pink-300" : "text-pink-600"}`}>$2.5M</p>
              <p className="mt-2 text-sm uppercase tracking-wider">Funding Secured</p>
            </div>
            <div className="text-center">
              <p className={`text-4xl font-bold ${darkMode ? "text-pink-300" : "text-pink-600"}`}>92%</p>
              <p className="mt-2 text-sm uppercase tracking-wider">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-pink-300" : "text-pink-600"}`}>Empowering Features</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">Comprehensive tools and resources designed specifically for women's financial journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl shadow-lg ${darkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-white hover:bg-gray-50"} transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className={`${darkMode ? "text-pink-300" : "text-pink-500"}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? "bg-gradient-to-r from-pink-900 to-purple-900" : "bg-gradient-to-r from-pink-100 to-purple-100"}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Ready to Take Control of Your Financial Future?
          </h2>
          <p className={`max-w-2xl mx-auto text-lg mb-8 ${darkMode ? "text-white opacity-90" : "text-gray-700"}`}>
            Join thousands of women who are building wealth, growing their investments, and achieving financial independence.
          </p>
          <button className={`px-8 py-4 rounded-full ${darkMode ? "bg-white text-pink-700" : "bg-pink-600 text-white"} font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}>
            Join SheFunds Today
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-pink-300" : "text-pink-600"}`}>Success Stories</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">Hear from women who have transformed their financial lives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"} transition-all duration-300 flex flex-col`}
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="italic opacity-90 mb-6">"{testimonial.quote}"</p>
                <div className="mt-auto flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm opacity-75">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className={`p-8 md:p-12 rounded-2xl ${darkMode ? "bg-gray-700" : "bg-white"} shadow-xl`}>
            <div className="text-center mb-8">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? "text-pink-300" : "text-pink-600"}`}>
                Stay Updated with Financial Tips
              </h2>
              <p className="max-w-md mx-auto opacity-80">
                Join our newsletter for weekly financial insights, resources, and opportunities
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className={`flex-grow px-6 py-3 rounded-full ${darkMode ? "bg-gray-800 border border-gray-600" : "bg-gray-100"} focus:outline-none focus:ring-2 focus:ring-pink-500`}
              />
              <Link to="/signup">
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                  Subscribe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <h3 className="text-2xl font-semibold">
                  <span className="font-bold">She</span>
                  <span className="text-pink-500 font-light">Funds</span>
                </h3>
              </div>
              <p className="opacity-80 mb-4">
                Empowering women to achieve financial freedom through education, community, and resources.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">f</span>
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">t</span>
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">in</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Resources</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Financial Courses</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Budgeting Tools</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Investment Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:text-pink-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center opacity-70 text-sm">
            <p>&copy; 2025 SheFunds. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}