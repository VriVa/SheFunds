import React, { useContext } from 'react';
import { 
  Award, Calendar, CheckCircle, Search, Filter, ArrowRight, 
  Briefcase, Building, Globe, Landmark, Bell
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../context/ThemeContext'; // Import the context

// Sample data with expanded funding types
const sampleGrants = [
  { id: 1, name: "Women in Tech Fund", amount: 25000, deadline: "2025-04-15", type: "Technology", stage: ["Startup", "Growth"], fundingType: "Grant", source: "Corporate" },
  { id: 2, name: "Female Founders Grant", amount: 10000, deadline: "2025-03-25", type: "General", stage: ["Idea", "Startup"], fundingType: "Grant", source: "Government" },
  { id: 3, name: "Healthcare Innovation Award", amount: 50000, deadline: "2025-05-10", type: "Healthcare", stage: ["Growth", "Established"], fundingType: "Competition", source: "Corporate" },
  { id: 4, name: "Creative Minds Funding", amount: 15000, deadline: "2025-04-01", type: "Arts", stage: ["Startup", "Growth"], fundingType: "Grant", source: "Non-profit" },
  { id: 5, name: "Sustainable Business Grant", amount: 30000, deadline: "2025-05-20", type: "Sustainability", stage: ["Growth", "Established"], fundingType: "Grant", source: "Government" },
  { id: 6, name: "Retail Expansion Fund", amount: 20000, deadline: "2025-03-30", type: "Retail", stage: ["Growth"], fundingType: "Loan", source: "Financial Institution" },
  { id: 7, name: "Women Entrepreneurs Seed Fund", amount: 75000, deadline: "2025-06-15", type: "Technology", stage: ["Startup"], fundingType: "Equity Investment", source: "Venture Capital" },
  { id: 8, name: "Fashion Innovation Prize", amount: 40000, deadline: "2025-04-20", type: "Fashion", stage: ["Startup", "Growth"], fundingType: "Competition", source: "Corporate" },
  { id: 9, name: "Social Enterprise Microloan", amount: 5000, deadline: "2025-03-15", type: "Social Enterprise", stage: ["Idea", "Startup"], fundingType: "Loan", source: "Non-profit" },
  { id: 10, name: "E-commerce Accelerator", amount: 60000, deadline: "2025-05-01", type: "E-commerce", stage: ["Startup", "Growth"], fundingType: "Fellowship", source: "Accelerator" },
  { id: 11, name: "Women in Health Fellowship", amount: 35000, deadline: "2025-04-10", type: "Healthcare", stage: ["Startup"], fundingType: "Fellowship", source: "Non-profit" },
  { id: 12, name: "Education Tech Angel Investment", amount: 100000, deadline: "2025-05-15", type: "Education", stage: ["Startup", "Growth"], fundingType: "Equity Investment", source: "Angel Investor" },
];

const industryData = [
  { name: 'Technology', value: 25 },
  { name: 'Healthcare', value: 15 },
  { name: 'Sustainability', value: 10 },
  { name: 'Fashion', value: 12 },
  { name: 'Education', value: 8 },
  { name: 'E-commerce', value: 10 },
  { name: 'Social Enterprise', value: 8 },
  { name: 'Arts', value: 5 },
  { name: 'Retail', value: 5 },
  { name: 'General', value: 2 },
];

const locationOptions = ["United States", "Canada", "United Kingdom", "Europe", "Asia", "Australia", "Africa", "Latin America", "Global"];
const industryOptions = ["Technology", "Healthcare", "Sustainability", "Fashion", "Education", "E-commerce", "Social Enterprise", "Arts", "Retail", "General", "Other"];
const stageOptions = ["Idea", "Startup", "Growth", "Established"];
const fundingTypeOptions = ["Grant", "Loan", "Equity Investment", "Competition", "Fellowship"];
const sourceOptions = ["Government", "Corporate", "Non-profit", "Financial Institution", "Venture Capital", "Angel Investor", "Accelerator"];

const Grants = () => {
  
  const { darkMode } = useContext(ThemeContext);
  
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filters, setFilters] = React.useState({
    type: '', minAmount: '', maxAmount: '', deadline: '', fundingType: '', source: ''
  });
  const [showFilters, setShowFilters] = React.useState(false);
  const [eligibilityForm, setEligibilityForm] = React.useState({
    industry: '', location: '', stage: '', businessType: '', fundingPreference: ''
  });
  const [recommendations, setRecommendations] = React.useState([]);
  
  // Calculate days remaining for deadline
  const calculateDaysRemaining = (deadlineDate) => {
    const today = new Date();
    const deadline = new Date(deadlineDate);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  // Filter grants based on search and filters
  const filteredGrants = sampleGrants.filter(grant => {
    const matchesSearch = grant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filters.type === '' || grant.type === filters.type;
    const matchesMinAmount = filters.minAmount === '' || grant.amount >= Number(filters.minAmount);
    const matchesMaxAmount = filters.maxAmount === '' || grant.amount <= Number(filters.maxAmount);
    const matchesDeadline = filters.deadline === '' || new Date(grant.deadline) <= new Date(filters.deadline);
    const matchesFundingType = filters.fundingType === '' || grant.fundingType === filters.fundingType;
    const matchesSource = filters.source === '' || grant.source === filters.source;
    
    return matchesSearch && matchesType && matchesMinAmount && matchesMaxAmount && 
           matchesDeadline && matchesFundingType && matchesSource;
  });
  
 
  const handleEligibilityCheck = (e) => {
    e.preventDefault();
    
    const recommended = sampleGrants.filter(grant => {
      const matchesIndustry = grant.type === eligibilityForm.industry;
      const matchesStage = grant.stage.includes(eligibilityForm.stage);
      const matchesFundingType = eligibilityForm.fundingPreference === '' || 
                               grant.fundingType === eligibilityForm.fundingPreference;
      
      return matchesIndustry && matchesStage && matchesFundingType;
    });
    
    setRecommendations(recommended);
  };
  
  // Get upcoming deadlines sorted
  const upcomingDeadlines = [...sampleGrants]
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    .slice(0, 3);
  
  
  const themeColors = darkMode ? {
    primary: 'bg-pink-700', secondary: 'bg-black', text: 'text-white',
    accent: 'text-pink-500', accentHover: 'hover:bg-pink-800',
    card: 'bg-gray-900', input: 'bg-gray-800 border-gray-700',
    chartColor: '#d53f8c', chartTextColor: '#ffffff'
  } : {
    primary: 'bg-pink-500', secondary: 'bg-white', text: 'text-gray-800',
    accent: 'text-pink-600', accentHover: 'hover:bg-pink-600',
    card: 'bg-pink-50', input: 'bg-white border-pink-200',
    chartColor: '#ec4899', chartTextColor: '#4a5568'
  };
  
  // Function to get funding type icon
  const getFundingIcon = (fundingType) => {
    switch(fundingType) {
      case 'Grant': return <Award size={16} className={darkMode ? 'text-pink-500' : 'text-pink-600'} />;
      case 'Loan': return <Landmark size={16} className={darkMode ? 'text-pink-500' : 'text-pink-600'} />;
      case 'Equity Investment': return <Building size={16} className={darkMode ? 'text-pink-500' : 'text-pink-600'} />;
      case 'Competition':
      case 'Fellowship': return <Briefcase size={16} className={darkMode ? 'text-pink-500' : 'text-pink-600'} />;
      default: return <Globe size={16} className={darkMode ? 'text-pink-500' : 'text-pink-600'} />;
    }
  };
  
  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>

        {/* Header  */}
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
      
      <div className="max-w-6xl mx-auto mt-16">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className={darkMode ? 'text-white' : 'text-black'}>She</span>
            <span className="text-pink-500 font-light">Funds</span> Grant & Funding
          </h1>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            Connecting women entrepreneurs with the funding they deserve
          </p>
        </header>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`p-6 rounded-lg ${themeColors.card} shadow-md`}>
            <div className="flex items-center mb-4">
              <Award size={24} className={`${themeColors.accent} mr-2`} />
              <h2 className="text-xl font-semibold">Total Grants Available</h2>
            </div>
            <p className={`text-3xl font-bold ${themeColors.accent}`}>{sampleGrants.length}</p>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Total funding: ${sampleGrants.reduce((sum, grant) => sum + grant.amount, 0).toLocaleString()}
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${themeColors.card} shadow-md`}>
            <div className="flex items-center mb-4">
              <Calendar size={24} className={`${themeColors.accent} mr-2`} />
              <h2 className="text-xl font-semibold">Upcoming Deadlines</h2>
            </div>
            <p className={`text-3xl font-bold ${themeColors.accent}`}>{upcomingDeadlines.length}</p>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Next deadline: {upcomingDeadlines[0]?.deadline}
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${themeColors.card} shadow-md`}>
            <div className="flex items-center mb-4">
              <CheckCircle size={24} className={`${themeColors.accent} mr-2`} />
              <h2 className="text-xl font-semibold">Successful Applications</h2>
            </div>
            <p className={`text-3xl font-bold ${themeColors.accent}`}>1,240</p>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Success rate: 68%
            </p>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className={`p-6 rounded-lg ${themeColors.card} shadow-md mb-8`}>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search grants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-pink-200'}`}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center px-4 py-2 ${themeColors.primary} text-white rounded-md ${themeColors.accentHover}`}
            >
              <Filter size={18} className="mr-2" />
              Filters
            </button>
          </div>
          
          {showFilters && (
            <div className={`mt-4 p-4 rounded-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block mb-1 text-sm">Industry</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({...filters, type: e.target.value})}
                    className={`w-full p-2 rounded-md border ${themeColors.input}`}
                  >
                    <option value="">All Industries</option>
                    {industryOptions.map(option => <option key={option} value={option}>{option}</option>)}
                  </select>
                </div>
                
                <div>
                  <label className="block mb-1 text-sm">Funding Type</label>
                  <select
                    value={filters.fundingType}
                    onChange={(e) => setFilters({...filters, fundingType: e.target.value})}
                    className={`w-full p-2 rounded-md border ${themeColors.input}`}
                  >
                    <option value="">All Funding Types</option>
                    {fundingTypeOptions.map(option => <option key={option} value={option}>{option}</option>)}
                  </select>
                </div>
                
                <div>
                  <label className="block mb-1 text-sm">Source</label>
                  <select
                    value={filters.source}
                    onChange={(e) => setFilters({...filters, source: e.target.value})}
                    className={`w-full p-2 rounded-md border ${themeColors.input}`}
                  >
                    <option value="">All Sources</option>
                    {sourceOptions.map(option => <option key={option} value={option}>{option}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Two-column layout for main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - Grants List */}
          <div className="lg:col-span-2">
            <div className={`p-6 rounded-lg ${themeColors.card} shadow-md mb-8`}>
              <h2 className="text-xl font-semibold mb-4">Available Funding Opportunities</h2>
              
              {filteredGrants.length === 0 ? (
                <p className="py-4 text-center">No funding opportunities matching your criteria.</p>
              ) : (
                <div className="space-y-4">
                  {filteredGrants.slice(0, 5).map(grant => {
                    const daysRemaining = calculateDaysRemaining(grant.deadline);
                    const urgencyColor = daysRemaining < 7 ? 'bg-red-500' : 
                                        daysRemaining < 14 ? 'bg-yellow-500' : 'bg-green-500';
                    
                    return (
                      <div 
                        key={grant.id} 
                        className={`p-4 rounded-md ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-lg transition-shadow`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-grow">
                            <div className="flex items-center">
                              {getFundingIcon(grant.fundingType)}
                              <span className={`ml-2 text-sm ${darkMode ? 'text-pink-400' : 'text-pink-500'}`}>{grant.fundingType}</span>
                              <span className="mx-2 text-sm">•</span>
                              <span className="text-sm">{grant.source}</span>
                            </div>
                            <h3 className="font-semibold text-lg mt-1">{grant.name}</h3>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                              ${grant.amount.toLocaleString()} • {grant.type}
                            </p>
                            <p className="text-sm mt-1">
                              For: {grant.stage.join(", ")} stage
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">Deadline: {new Date(grant.deadline).toLocaleDateString()}</p>
                            <div className="mt-2 flex items-center">
                              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-pink-100'} rounded-full h-2 mr-2`}>
                                <div 
                                  className={`${urgencyColor} h-2 rounded-full`} 
                                  style={{ width: `${Math.min(100, (30 - daysRemaining) * 3.33)}%` }}
                                ></div>
                              </div>
                              <span className="text-sm">{daysRemaining} days</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            
            {/* Industry Funding Distribution Chart - Using Recharts */}
            <div className={`p-6 rounded-lg ${themeColors.card} shadow-md mb-8`}>
              <h2 className="text-xl font-semibold mb-4">Funding Distribution by Industry</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={industryData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: themeColors.chartTextColor, fontSize: 12 }}
                      tickLine={{ stroke: themeColors.chartTextColor }}
                    />
                    <YAxis 
                      label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: themeColors.chartTextColor } }} 
                      tick={{ fill: themeColors.chartTextColor }}
                      tickLine={{ stroke: themeColors.chartTextColor }}
                    />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Funding']}
                      labelStyle={{ color: darkMode ? '#fff' : '#000' }}
                      contentStyle={{ backgroundColor: darkMode ? '#333' : '#fff', border: `1px solid ${themeColors.chartColor}` }}
                    />
                    <Bar dataKey="value" fill={themeColors.chartColor} radius={[5, 5, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`p-6 rounded-lg ${themeColors.card} shadow-md mb-8 sticky top-6`}>
              <h2 className="text-xl font-semibold mb-4">Grant Eligibility Checker</h2>
              <form onSubmit={handleEligibilityCheck}>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm">Industry</label>
                    <select
                      value={eligibilityForm.industry}
                      onChange={(e) => setEligibilityForm({...eligibilityForm, industry: e.target.value})}
                      required
                      className={`w-full p-2 rounded-md border ${themeColors.input}`}
                    >
                      <option value="">Select Industry</option>
                      {industryOptions.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-1 text-sm">Location</label>
                    <select
                      value={eligibilityForm.location}
                      onChange={(e) => setEligibilityForm({...eligibilityForm, location: e.target.value})}
                      required
                      className={`w-full p-2 rounded-md border ${themeColors.input}`}
                    >
                      <option value="">Select Location</option>
                      {locationOptions.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-1 text-sm">Business Stage</label>
                    <select
                      value={eligibilityForm.stage}
                      onChange={(e) => setEligibilityForm({...eligibilityForm, stage: e.target.value})}
                      required
                      className={`w-full p-2 rounded-md border ${themeColors.input}`}
                    >
                      <option value="">Select Stage</option>
                      {stageOptions.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full py-2 ${themeColors.primary} text-white rounded-md flex items-center justify-center ${themeColors.accentHover}`}
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </form>
              
              {recommendations.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Recommended Funding</h3>
                  <div className="space-y-3">
                    {recommendations.map(grant => (
                      <div
                        key={grant.id}
                        className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'} text-sm`}
                      >
                        <div className="flex items-center">
                          <span className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-pink-900 text-pink-300' : 'bg-pink-100 text-pink-700'}`}>
                            {grant.fundingType}
                          </span>
                          <span className="ml-2 text-xs">{grant.source}</span>
                        </div>
                        <p className="font-semibold mt-1">{grant.name}</p>
                        <p>${grant.amount.toLocaleString()}</p>
                        <div className="mt-1 flex justify-between items-center">
                          <span className="text-xs">Deadline: {new Date(grant.deadline).toLocaleDateString()}</span>
                          <button className={`text-xs ${themeColors.accent} hover:underline`}>Apply</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Grants;