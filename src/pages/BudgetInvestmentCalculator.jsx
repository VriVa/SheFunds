import React, { useState, useEffect } from 'react';
import { ArrowRight, DollarSign, PieChart, TrendingUp, Save, PiggyBank, BarChart3, RefreshCw } from 'lucide-react';

const BudgetInvestmentCalculator = () => {
 // State management for active tab
 const [activeTab, setActiveTab] = useState('budget');

 // Budget calculator state
 const [income, setIncome] = useState(5000);
 const [expenses, setExpenses] = useState([
 { id: 1, category: 'Housing', amount: 1500 },
 { id: 2, category: 'Transportation', amount: 400 },
 { id: 3, category: 'Food', amount: 600 },
 { id: 4, category: 'Utilities', amount: 300 },
 { id: 5, category: 'Entertainment', amount: 200 },
 ]);
 const [newCategory, setNewCategory] = useState('');
 const [newAmount, setNewAmount] = useState('');

 // Savings calculator state
 const [savingsGoal, setSavingsGoal] = useState(10000);
 const [monthlySavings, setMonthlySavings] = useState(500);
 const [currentSavings, setCurrentSavings] = useState(2000);
 const [interestRate, setInterestRate] = useState(2);

 // Investment calculator state
 const [initialInvestment, setInitialInvestment] = useState(5000);
 const [monthlyContribution, setMonthlyContribution] = useState(200);
 const [investmentYears, setInvestmentYears] = useState(10);
 const [expectedReturn, setExpectedReturn] = useState(7);

 // Animation states
 const [isLoaded, setIsLoaded] = useState(false);
 const [animate, setAnimate] = useState(false);

 // Calculations
 const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
 const remainingBudget = income - totalExpenses;

 const monthsToGoal = () => {
 if (monthlySavings <= 0) return Infinity;

 let months = 0;
 let accumulated = currentSavings;
 const monthlyRate = interestRate / 100 / 12;

 while (accumulated < savingsGoal) {
 accumulated = accumulated * (1 + monthlyRate) + monthlySavings;
 months++;
 if (months > 600) return Infinity; // Safety cap
 }

 return months;
 };

 const calculateInvestmentResult = () => {
 const monthlyRate = expectedReturn / 100 / 12;
 const totalMonths = investmentYears * 12;
 let futureValue = initialInvestment;

 for (let i = 0; i < totalMonths; i++) {
 futureValue = futureValue * (1 + monthlyRate) + monthlyContribution;
 }

 return Math.round(futureValue);
 };

 // Add new expense
 const addExpense = () => {
 if (newCategory && newAmount && !isNaN(parseFloat(newAmount))) {
 setExpenses([
 ...expenses,
 {
 id: expenses.length + 1,
 category: newCategory,
 amount: parseFloat(newAmount)
 }
 ]);
 setNewCategory('');
 setNewAmount('');
 triggerAnimation();
 }
 };

 // Remove expense
 const removeExpense = (id) => {
 setExpenses(expenses.filter(expense => expense.id !== id));
 triggerAnimation();
 };

 // Animation trigger
 const triggerAnimation = () => {
 setAnimate(true);
 setTimeout(() => setAnimate(false), 700);
 };

 // Fake loading animation on mount
 useEffect(() => {
 setTimeout(() => setIsLoaded(true), 500);
 }, []);

 // Budget distribution for pie chart visualization (simplified)
 const getBudgetDistribution = () => {
 // Calculate percentage and color for each expense
 return expenses.map((expense, index) => {
 const percentage = Math.round((expense.amount / totalExpenses) * 100);
 // Generate gradient colors in pink palette
 return {
 ...expense,
 percentage,
 color: `bg-pink-${Math.max(200, 300 + index * 100)}`
 };
 });
 };

 const budgetDistribution = getBudgetDistribution();

 return (
 <div className={`min-h-screen bg-white text-gray-800 p-4 transition-all duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
 <div className="max-w-6xl mx-auto">
 {/* Header */}
 <div className="text-center mb-10 transform transition-all duration-700 ease-in-out">
 <h1 className=" mt-8 text-4xl font-bold text-pink-600 mb-2">Budgeting & Investment Calculators</h1>
 <p className="text-gray-600">Plan your financial future with our easy-to-use tools</p>
 </div>

 {/* Tab Navigation */}
 <div className="flex justify-center mb-8">
 <div className="bg-white rounded-full shadow-md p-1 flex">
 <button
 onClick={() => { setActiveTab('budget'); triggerAnimation(); }}
 className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${activeTab === 'budget' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-600 hover:bg-pink-100'}`}
 >
 <PieChart className="w-4 h-4 mr-2" />
 Budget
 </button>
 <button
 onClick={() => { setActiveTab('savings'); triggerAnimation(); }}
 className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${activeTab === 'savings' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-600 hover:bg-pink-100'}`}
 >
 <PiggyBank className="w-4 h-4 mr-2" />
 Savings
 </button>
 <button
 onClick={() => { setActiveTab('investment'); triggerAnimation(); }}
 className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${activeTab === 'investment' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-600 hover:bg-pink-100'}`}
 >
 <TrendingUp className="w-4 h-4 mr-2" />
 Investment
 </button>
 </div>
 </div>

 {/* Main Content */}
 <div className={`transform transition-all duration-500 ease-in-out ${animate ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}>
 {/* Budget Calculator */}
 {activeTab === 'budget' && (
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {/* Input Section */}
 <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all hover:shadow-xl">
 <h2 className="text-2xl font-semibold text-pink-600 mb-4 flex items-center">
 <DollarSign className="mr-2" /> Budget Calculator
 </h2>

 <div className="mb-6">
 <label className="block text-gray-600 mb-2">Monthly Income</label>
 <div className="relative">
 <span className="absolute left-3 top-3 text-gray-400">$</span>
 <input
 type="number"
 value={income}
 onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
 className="w-full pl-8 pr-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
 />
 </div>
 </div>

 <div className="mb-6">
 <div className="flex justify-between items-center mb-2">
 <label className="text-gray-600">Expenses</label>
 <span className="text-sm text-pink-600 font-medium">Total: ${totalExpenses}</span>
 </div>

 <div className="max-h-64 overflow-y-auto mb-4 pr-2 styled-scrollbar">
 {expenses.map((expense) => (
 <div key={expense.id} className="flex justify-between items-center mb-2 p-2 bg-pink-50 rounded-lg group hover:bg-pink-100 transition-all">
 <span>{expense.category}</span>
 <div className="flex items-center">
 <span className="mr-2">${expense.amount}</span>
 <button
 onClick={() => removeExpense(expense.id)}
 className="opacity-0 group-hover:opacity-100 text-pink-600 transition-opacity"
 >
 ✕
 </button>
 </div>
 </div>
 ))}
 </div>

 <div className="grid grid-cols-5 gap-2">
 <input
 type="text"
 placeholder="Category"
 value={newCategory}
 onChange={(e) => setNewCategory(e.target.value)}
 className="col-span-2 px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
 />
 <div className="relative col-span-2">
 <span className="absolute left-3 top-2 text-gray-400">$</span>
 <input
 type="number"
 placeholder="Amount"
 value={newAmount}
 onChange={(e) => setNewAmount(e.target.value)}
 className="w-full pl-8 pr-2 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
 />
 </div>
 <button
 onClick={addExpense}
 className="bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center"
 >
 Add
 </button>
 </div>
 </div>
 </div>

 {/* Results/Visualization Section */}
 <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all hover:shadow-xl">
 <h2 className="text-2xl font-semibold text-pink-600 mb-4 flex items-center">
 <BarChart3 className="mr-2" /> Budget Analysis
 </h2>

 <div className="mb-6">
 <div className="bg-pink-50 p-4 rounded-xl">
 <div className="flex justify-between mb-2">
 <span className="text-gray-600">Income:</span>
 <span className="font-medium">${income}</span>
 </div>
 <div className="flex justify-between mb-2">
 <span className="text-gray-600">Expenses:</span>
 <span className="font-medium">${totalExpenses}</span>
 </div>
 <div className="h-px bg-pink-200 my-2"></div>
 <div className="flex justify-between font-medium">
 <span className={remainingBudget >= 0 ? "text-green-600" : "text-red-600"}>Remaining:</span>
 <span className={remainingBudget >= 0 ? "text-green-600" : "text-red-600"}>
 ${remainingBudget}
 </span>
 </div>
 </div>
 </div>

 {/* Simplified Pie Chart Visualization */}
 <div className="mb-6">
 <h3 className="text-lg font-medium text-gray-700 mb-3">Expense Distribution</h3>

 {/* Budget Distribution Bars */}
 <div className="space-y-3">
 {budgetDistribution.map((item) => (
 <div key={item.id} className="space-y-1">
 <div className="flex justify-between text-sm">
 <span>{item.category}</span>
 <span>{item.percentage}%</span>
 </div>
 <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
 <div
 className={`h-full ${item.color} transition-all duration-500`}
 style={{ width: `${item.percentage}%` }}
 ></div>
 </div>
 </div>
 ))}
 </div>
 </div>

 <div className="bg-pink-50 p-4 rounded-xl">
 <h3 className="text-lg font-medium text-gray-700 mb-2">Budget Health</h3>
 <p className="text-gray-600">
 {remainingBudget > income * 0.2
 ? "Excellent! You're saving more than 20% of your income."
 : remainingBudget > 0
 ? "Good! You're staying within your budget."
 : "Warning! You're spending more than you earn."}
 </p>
 </div>
 </div>
 </div>
 )}

 {/* Savings Calculator */}
 {activeTab === 'savings' && (
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {/* Input Section */}
 <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all hover:shadow-xl">
 <h2 className="text-2xl font-semibold text-pink-600 mb-4 flex items-center">
 <Save className="mr-2" /> Savings Goal Calculator
 </h2>

 <div className="space-y-4">
 <div>
 <label className="block text-gray-600 mb-2">Savings Goal</label>
 <div className="relative">
 <span className="absolute left-3 top-3 text-gray-400">$</span>
 <input
 type="number"
 value={savingsGoal}
 onChange={(e) => setSavingsGoal(parseFloat(e.target.value) || 0)}
 className="w-full pl-8 pr-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
 />
 </div>
 </div>

 <div>
 <label className="block text-gray-600 mb-2">Current Savings</label>
 <div className="relative">
 <span className="absolute left-3 top-3 text-gray-400">$</span>
 <input
 type="number"
 value={currentSavings}
 onChange={(e) => setCurrentSavings(parseFloat(e.target.value) || 0)}
 className="w-full pl-8 pr-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
 />
 </div>
 </div>

 <div>
 <label className="block text-gray-600 mb-2">Monthly Contribution</label>
 <div className="relative">
 <span className="absolute left-3 top-3 text-gray-400">$</span>
 <input
 type="number"
 value={monthlySavings}
 onChange={(e) => setMonthlySavings(parseFloat(e.target.value) || 0)}
 className="w-full pl-8 pr-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
 />
 </div>
 </div>

 <div>
 <label className="block text-gray-600 mb-2">Annual Interest Rate (%)</label>
 <div className="relative">
 <input
 type="number"
 value={interestRate}
 onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
 className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
 />
 <span className="absolute right-3 top-3 text-gray-400">%</span>
 </div>
 </div>
 </div>
 </div>

 {/* Results Section */}
 <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all hover:shadow-xl">
 <h2 className="text-2xl font-semibold text-pink-600 mb-4 flex items-center">
 <TrendingUp className="mr-2" /> Savings Projection
 </h2>

 <div className="space-y-6">
 <div className="bg-pink-50 p-4 rounded-xl">
 <h3 className="text-lg font-medium text-gray-700 mb-3">Time to Reach Goal</h3>

 {monthsToGoal() === Infinity ? (
 <div className="text-center p-4">
 <p className="text-pink-600 font-medium mb-2">
 Increase your monthly savings to reach your goal
 </p>
 </div>
 ) : (
 <div className="text-center">
 <div className="text-5xl font-bold text-pink-600 mb-2">
 {Math.floor(monthsToGoal() / 12)} <span className="text-xl">years</span> {Math.floor(monthsToGoal() % 12)} <span className="text-xl">months</span>
 </div>
 <p className="text-gray-600">until you reach your goal</p>
 </div>
 )}
 </div>

 {/* Progress Visualization */}
 <div>
 <div className="flex justify-between text-sm mb-1">
 <span>Current progress</span>
 <span>{Math.min(100, Math.round((currentSavings / savingsGoal) * 100))}%</span>
 </div>
 <div className="w-full bg-gray-100 rounded-full h-6 overflow-hidden">
 <div
 className="h-full bg-pink-400 transition-all duration-1000"
 style={{ width: `${Math.min(100, Math.round((currentSavings / savingsGoal) * 100))}%` }}
 ></div>
 </div>
 </div>

 <div className="bg-pink-50 p-4 rounded-xl">
 <h3 className="text-lg font-medium text-gray-700 mb-3">Savings Tips</h3>
 <ul className="text-gray-600 space-y-2">
 <li className="flex items-start">
 <ArrowRight className="h-4 w-4 mr-2 text-pink-500 mt-1 flex-shrink-0" />
 <span>Increasing your monthly savings by just $100 can significantly reduce your timeline.</span>
 </li>
 <li className="flex items-start">
 <ArrowRight className="h-4 w-4 mr-2 text-pink-500 mt-1 flex-shrink-0" />
 <span>Consider a high-yield savings account to boost your interest rate.</span>
 </li>
 <li className="flex items-start">
 <ArrowRight className="h-4 w-4 mr-2 text-pink-500 mt-1 flex-shrink-0" />
 <span>Set up automatic transfers to make saving effortless.</span>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 )}

 {/* Investment Calculator */}
 {activeTab === 'investment' && (
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {/* Input Section */}
 <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all hover:shadow-xl">
 <h2 className="text-2xl font-semibold text-pink-600 mb-4 flex items-center">
 <TrendingUp className="mr-2" /> Investment Calculator
 </h2>

 <div className="space-y-4">
 <div>
 <label className="block text-gray-600 mb-2">Initial Investment</label>
 <div className="relative">
 <span className="absolute left-3 top-3 text-gray-400">$</span>
 <input
 type="number"
 value={initialInvestment}
 onChange={(e) => setInitialInvestment(parseFloat(e.target.value) || 0)}
 className="w-full pl-8 pr-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
 />
 </div>
 </div>

 <div>
 <label className="block text-gray-600 mb-2">Monthly Contribution</label>
 <div className="relative">
 <span className="absolute left-3 top-3 text-gray-400">$</span>
 <input
 type="number"
 value={monthlyContribution}
 onChange={(e) => setMonthlyContribution(parseFloat(e.target.value) || 0)}
 className="w-full pl-8 pr-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
 />
 </div>
 </div>

 <div>
 <label className="block text-gray-600 mb-2">Time Period (years)</label>
 <input
 type="range"
 min="1"
 max="40"
 value={investmentYears}
 onChange={(e) => setInvestmentYears(parseInt(e.target.value))}
 className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
 />
 <div className="text-center text-gray-700 mt-1">{investmentYears} years</div>
 </div>

 <div>
 <label className="block text-gray-600 mb-2">Expected Annual Return (%)</label>
 <div className="relative">
 <input
 type="number"
 value={expectedReturn}
 onChange={(e) => setExpectedReturn(parseFloat(e.target.value) || 0)}
 className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
 />
 <span className="absolute right-3 top-3 text-gray-400">%</span>
 </div>
 </div>
 </div>
 </div>

 {/* Results Section */}
 <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all hover:shadow-xl">
 <h2 className="text-2xl font-semibold text-pink-600 mb-4 flex items-center">
 <PieChart className="mr-2" /> Investment Projection
 </h2>

 <div className="space-y-6">
 <div className="bg-pink-50 p-6 rounded-xl text-center">
 <h3 className="text-lg font-medium text-gray-700 mb-3">Estimated Future Value</h3>
 <div className="text-5xl font-bold text-pink-600 mb-2">
 ${calculateInvestmentResult().toLocaleString()}
 </div>
 <p className="text-gray-600">after {investmentYears} years</p>

 <div className="mt-4 pt-4 border-t border-pink-200">
 <div className="grid grid-cols-2 gap-4">
 <div>
 <p className="text-gray-500 text-sm">Initial investment</p>
 <p className="font-medium">${initialInvestment.toLocaleString()}</p>
 </div>
 <div>
 <p className="text-gray-500 text-sm">Total contributions</p>
 <p className="font-medium">${(monthlyContribution * 12 * investmentYears).toLocaleString()}</p>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-pink-50 p-4 rounded-xl">
 <h3 className="text-lg font-medium text-gray-700 mb-3">Investment Tips</h3>
 <ul className="text-gray-600 space-y-2">
 <li className="flex items-start">
 <ArrowRight className="h-4 w-4 mr-2 text-pink-500 mt-1 flex-shrink-0" />
 <span>Starting early dramatically increases your returns due to compound interest.</span>
 </li>
 <li className="flex items-start">
 <ArrowRight className="h-4 w-4 mr-2 text-pink-500 mt-1 flex-shrink-0" />
 <span>Regular contributions often matter more than the initial investment.</span>
 </li>
 <li className="flex items-start">
 <ArrowRight className="h-4 w-4 mr-2 text-pink-500 mt-1 flex-shrink-0" />
 <span>Diversification can help manage risk while maintaining returns.</span>
 </li>
 </ul>
 </div>

 <button
 onClick={triggerAnimation}
 className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center font-medium"
 >
 <RefreshCw className="w-4 h-4 mr-2" />
 Recalculate
 </button>
 </div>
 </div>
 </div>
 )}
 </div>
 </div>

 {/* Footer */}
 <div className="mt-12 text-center text-gray-500 text-sm">
 <p>This calculator is for educational purposes only. Consult with a financial advisor for personalized advice.</p>
 </div>

 {/* Add custom CSS for styled scrollbar */}
 <style jsx>{`
 .styled-scrollbar::-webkit-scrollbar {
 width: 6px;
 }
 .styled-scrollbar::-webkit-scrollbar-track {
 background: #f5f5f5;
 border-radius: 10px;
 }
 .styled-scrollbar::-webkit-scrollbar-thumb {
 background: #fbcfe8;
 border-radius: 10px;
 }
 .styled-scrollbar::-webkit-scrollbar-thumb:hover {
 background: #f9a8d4;
 }
 `}</style>
 </div>
 );
};

export default BudgetInvestmentCalculator;