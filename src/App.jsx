import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import LakshmiChatbot from './pages/LakshmiChatbot';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SheFundsLanding from './pages/SheFundsLanding';
import Community from './pages/Community';
import BudgetInvestmentCalculator from './pages/BudgetInvestmentCalculator';
import Grant from './pages/Grants';
import FinancialBlogPage from './pages/FinancialBlogPage';


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Show chatbot only if NOT on SignIn or SignUp pages
  const showChatbot = location.pathname !== "/signin" && location.pathname !== "/signup";

  return (
    <>
      {showChatbot && <LakshmiChatbot />}
      <Routes>
        <Route path="/" element={<SheFundsLanding />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/grants" element={<Grant />} />
        <Route path="/calculator" element={<BudgetInvestmentCalculator />} />
        <Route path="/blog" element={<FinancialBlogPage />} />
      </Routes>
    </>
  );
}

export default App;
