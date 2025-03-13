import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  DollarSign,
  Award,
  TrendingUp,
  Coffee,
  Briefcase,
  PiggyBank
} from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const SheFundsDashboard = () => {
 
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>
      {/* Header - Changed to black */}
        <header className={`fixed top-0 right-0 left-16 h-16 flex items-center justify-between px-6 ${darkMode ? 'bg-gray-800' : 'bg-pink-100'}`}>
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

      
      {/* Main content area */}
      <main className={`flex-1 overflow-y-auto p-6 mt-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
        <div className="space-y-6">
          {/* Welcome Section */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
            <div className="md:flex md:justify-between">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold dark:text-white">Welcome back, Jane!</h2>
                <p className={`mt-2 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
                  You're making great progress on your financial journey. Continue your course or check today's financial tips.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/financialliteracycourses"
                    className={`px-4 py-2 ${darkMode ? 'bg-pink-500 hover:bg-pink-400' : 'bg-pink-500 hover:bg-pink-600'} text-white rounded-md transition`}
                  >
                    Continue Learning
                  </Link>
                  <button className={`px-4 py-2 rounded-md border ${darkMode ? 'border-pink-400 text-pink-200 hover:bg-pink-950' : 'border-pink-500 text-pink-500 hover:bg-pink-50'} transition`}>
                    View Financial Tips
                  </button>
                </div>
              </div>
              <div className="hidden md:flex md:w-1/3 justify-center items-center">
                <div className={`w-28 h-28 rounded-full ${darkMode ? 'bg-pink-900' : 'bg-gray-300'} flex items-center justify-center`}>
                  <TrendingUp size={60} className={`${darkMode ? 'text-pink-300' : 'text-pink-500'}`} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress & Stats Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`md:col-span-2 p-6 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} shadow`}>
              <h3 className="text-xl font-bold mb-4">Your Learning Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Budgeting Basics</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 dark:bg-gray-700 rounded-full h-2.5">
                    <div className={`${darkMode ? 'bg-pink-400' : 'bg-pink-500'} h-2.5 rounded-full`} style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Investment Fundamentals</span>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                  <div className="w-full bg-gray-700 dark:bg-gray-700 rounded-full h-2.5">
                    <div className={`${darkMode ? 'bg-pink-400' : 'bg-pink-500'} h-2.5 rounded-full`} style={{ width: '40%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Entrepreneurship Funding</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="w-full bg-gray-700 dark:bg-gray-700 rounded-full h-2.5">
                    <div className={`${darkMode ? 'bg-pink-400' : 'bg-pink-500'} h-2.5 rounded-full`} style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
              
              <Link
                to="/financialliteracycourses"
                className={`w-full mt-6 py-2 ${darkMode ? 'text-pink-300 hover:text-pink-200' : 'text-pink-500 hover:text-pink-600'} text-center block`}
              >
                View All Courses
              </Link>
            </div>
            
            <div className="space-y-6">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} shadow`}>
                <div className="flex items-center">
                  <div className={`p-2 rounded-md ${darkMode ? 'bg-pink-800 text-pink-300' : 'bg-pink-100 text-pink-500'}`}>
                    <Award size={20} />
                  </div>
                  <div className="ml-3">
                    <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Achievements</div>
                    <div className="text-lg font-bold">12 Badges</div>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} shadow`}>
                <div className="flex items-center">
                  <div className={`p-2 rounded-md ${darkMode ? 'bg-pink-800 text-pink-300' : 'bg-pink-100 text-pink-500'}`}>
                    <PiggyBank size={20} />
                  </div>
                  <div className="ml-3">
                    <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Savings Goal</div>
                    <div className="text-lg font-bold">$3,450 / $5,000</div>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} shadow`}>
                <div className="flex items-center">
                  <div className={`p-2 rounded-md ${darkMode ? 'bg-pink-800 text-pink-300' : 'bg-pink-100 text-pink-500'}`}>
                    <Coffee size={20} />
                  </div>
                  <div className="ml-3">
                    <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Community Events</div>
                    <div className="text-lg font-bold">3 This Week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Financial Tools Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Financial Tools</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Budget Calculator", 
                  description: "Track your expenses and set monthly savings goals",
                  icon: <DollarSign size={24} />,
                  badge: "Popular",
                  path: "/calculator"
                },
                { 
                  title: "Investment Simulator", 
                  description: "Test investment strategies without real money risk",
                  icon: <TrendingUp size={24} />,
                  path: "/calculator"
                },
                { 
                  title: "Loan Calculator", 
                  description: "Compare loan options and understand interest rates",
                  icon: <Briefcase size={24} />,
                  path: "/calculator"
                },
                { 
                  title: "Funding Database", 
                  description: "Explore grants and opportunities for women entrepreneurs",
                  icon: <Award size={24} />,
                  badge: "New",
                  path: "/grants"
                }
              ].map((tool, index) => (
                <Link
                  key={index}
                  to={tool.path}
                  className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} shadow flex flex-col`}
                >
                  <div className={`p-4 flex justify-center ${darkMode ? 'bg-pink-900' : 'bg-pink-100'}`}>
                    <div className={`p-3 rounded-md ${darkMode ? 'bg-pink-800 text-pink-300' : 'bg-pink-50 text-pink-500'}`}>
                      {tool.icon}
                    </div>
                  </div>
                  
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{tool.title}</h4>
                      {tool.badge && (
                        <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-pink-800 text-pink-200' : 'bg-pink-100 text-pink-600'}`}>
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    
                    <p className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-500'} mb-4`}>
                      {tool.description}
                    </p>
                    
                    <button className={`mt-auto w-full py-2 rounded-md ${darkMode ? 'bg-pink-700 text-white hover:bg-pink-600' : 'bg-pink-100 text-pink-600 hover:bg-pink-200'} transition`}>
                      Open Tool
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Community Activity Section */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} shadow`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Community Activity</h3>
              <Link to="/community" className={`${darkMode ? 'text-pink-300 hover:text-pink-200' : 'text-pink-500 hover:text-pink-600'}`}>
                View All
              </Link>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  user: "Maria S.",
                  activity: "posted in Financial Independence forum",
                  time: "20 min ago",
                  avatar: "MS"
                },
                {
                  user: "Sarah L.",
                  activity: "shared a new investment strategy",
                  time: "1 hour ago",
                  avatar: "SL"
                },
                {
                  user: "Anna W.",
                  activity: "is hosting a virtual workshop on entrepreneurship",
                  time: "2 hours ago",
                  avatar: "AW"
                }
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-medium">
                      {activity.avatar}
                    </div>
                    <div className="ml-3">
                      <div className="text-sm">
                        <span className="font-bold">{activity.user}</span> {activity.activity}
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        {activity.time}
                      </div>
                    </div>
                  </div>
                  <button className={`text-sm ${darkMode ? 'text-pink-300 hover:text-pink-200' : 'text-pink-500 hover:text-pink-600'}`}>
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <footer className={`py-4 px-6 text-center text-sm ${darkMode ? 'bg-gray-800 text-white border border-pink-900' : 'bg-pink-50 text-gray-600'} rounded-lg`}>
            © 2025 SheFunds - Empowering Women Through Financial Literacy
          </footer>
        </div>
      </main>
    </div>
  );
};

export default SheFundsDashboard;