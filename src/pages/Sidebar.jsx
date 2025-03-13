import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Book, 
  Award, 
  Users, 
  BookOpen, 
  User, 
  Menu, 
  X,
  Sun,
  Moon
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Use the global dark mode context instead of local state
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  
  // Set activeItem based on current path
  const getActiveItem = () => {
    const path = location.pathname;
    if (path.includes('shefundsdashboard')) return 'dashboard';
    if (path.includes('calculator')) return 'calculator';
    if (path.includes('blog')) return 'blog';
    if (path.includes('grants')) return 'funding';
    if (path.includes('community')) return 'community';
    if (path.includes('financialliteracycourses')) return 'literacy';
    return 'dashboard';
  };
  
  const [activeItem, setActiveItem] = useState(getActiveItem());
  
  // Update active item when location changes
  useEffect(() => {
    setActiveItem(getActiveItem());
  }, [location]);
  
  const sidebarVariants = {
    open: { width: '240px' },
    closed: { width: '72px' }
  };
  
 
  const bgColor = darkMode ? 'bg-gray-800' : 'bg-white/90'; 
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const accentColor = darkMode ? 'text-pink-800' : 'text-pink-500';
  const hoverBg = darkMode ? 'hover:bg-gray-900/50' : 'hover:bg-pink-50/70';
  const activeBg = darkMode ? 'bg-pink-800/30' : 'bg-pink-100/70';
  const borderColor = darkMode ? 'border-gray-800/50' : 'border-pink-200/50';
  const buttonBg = darkMode ? 'bg-pink-800' : 'bg-pink-500';
  
  const navigateTo = (path) => {
    switch(path) {
      case 'dashboard':
        navigate('/shefundsdashboard');
        break;
      case 'calculator':
        navigate('/calculator');
        break;
      case 'blog':
        navigate('/blog');
        break;
      case 'funding':
        navigate('/grants');
        break;
      case 'community':
        navigate('/community');
        break;
      case 'literacy':
        navigate('/financialliteracycourses');
        break;
      default:
        navigate('/shefundsdashboard');
    }
  };
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <User size={20} /> },
    { id: 'calculator', label: 'Investment Calculator', icon: <Calculator size={20} /> },
    { id: 'blog', label: 'Blog', icon: <Book size={20} /> },
    { id: 'funding', label: 'Grants & Funding', icon: <Award size={20} /> },
    { id: 'community', label: 'Community', icon: <Users size={20} /> },
    { id: 'literacy', label: 'Literacy Courses', icon: <BookOpen size={20} /> }
  ];
  
  return (
    <div className="flex">
      {/* Mobile overlay */}
      {!isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-10"
          onClick={() => setIsOpen(true)}
        />
      )}
      
      <motion.div 
        className={`${bgColor} ${textColor} h-screen border-r ${borderColor} flex flex-col relative z-20 backdrop-blur-sm`}
        initial={isOpen ? "open" : "closed"}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Toggle button */}
        <button 
          className={`absolute -right-3 top-6 w-6 h-6 rounded-full ${buttonBg} flex items-center justify-center text-white`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={14} /> : <Menu size={14} />}
        </button>
        
        {/* Logo and brand */}
        <div className={`p-4 border-b ${borderColor} flex items-center gap-3`}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center ">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
          {isOpen && (
            <h3 className="text-2xl font-semibold">
            <span className="font-bold">She</span>
            <span className="text-pink-500 font-light">Funds</span>
          </h3>
          )}
        </div>
        
        {/* Navigation menu */}
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveItem(item.id);
                    navigateTo(item.id);
                  }}
                  className={`w-full text-left flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    activeItem === item.id ? activeBg : ''
                  } ${hoverBg} ${
                    activeItem === item.id ? accentColor : textColor
                  }`}
                >
                  <span className={`${activeItem === item.id ? accentColor : textColor}`}>
                    {item.icon}
                  </span>
                  {isOpen && (
                    <span className="flex-1 truncate">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Dark mode toggle  */}
        <div className={`p-4 border-t ${borderColor}`}>
          <button 
            onClick={toggleDarkMode} 
            className={`w-full flex items-center gap-3 p-2 rounded-lg ${hoverBg}`}
          >
            {darkMode ? 
              <Sun size={20} className={textColor} /> : 
              <Moon size={20} className={textColor} />
            }
            {isOpen && (
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;