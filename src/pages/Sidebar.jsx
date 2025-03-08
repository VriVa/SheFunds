import React, { useState, useEffect } from 'react';
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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  
  // Check system preference for dark mode
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const sidebarVariants = {
    open: { width: '240px' },
    closed: { width: '72px' }
  };
  
  // Using semi-transparent backgrounds so page content is visible behind the sidebar
  const bgColor = darkMode ? 'bg-black/90' : 'bg-white/90'; 
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const accentColor = darkMode ? 'text-pink-800' : 'text-pink-500';
  const hoverBg = darkMode ? 'hover:bg-gray-900/50' : 'hover:bg-pink-50/70';
  const activeBg = darkMode ? 'bg-pink-800/30' : 'bg-pink-100/70';
  const borderColor = darkMode ? 'border-gray-800/50' : 'border-pink-200/50';
  const buttonBg = darkMode ? 'bg-pink-800' : 'bg-pink-500';
  
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
          <div className={`w-10 h-10 rounded-lg ${buttonBg} flex items-center justify-center text-white font-bold`}>
            SF
          </div>
          {isOpen && (
            <span className="font-bold text-xl whitespace-nowrap truncate">SheFunds</span>
          )}
        </div>
        
        {/* Navigation menu */}
        <div className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
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
        
        {/* Dark mode toggle */}
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