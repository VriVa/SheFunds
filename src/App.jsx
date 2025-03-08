import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import LakshmiChatbot from './pages/LakshmiChatbot';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SheFundsLanding from './pages/SheFundsLanding';
<<<<<<< HEAD
import SheFundsDashboard from './pages/SheFundsDashboard';
import FinancialLiteracyCoursesPage from './pages/FinancialLiteracyCourses';
=======
import Community from './pages/Community';
import BudgetInvestmentCalculator from './pages/BudgetInvestmentCalculator';
import Grant from './pages/Grants';
import FinancialBlogPage from './pages/FinancialBlogPage';

>>>>>>> 18d1640c9e087bd110ce907ce59472a26391f012

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
<<<<<<< HEAD
        <Route path="/shefundsdashboard" element={<SheFundsDashboard />} />
        <Route path="/financialliteracycourses" element={<FinancialLiteracyCoursesPage />} />
=======
        <Route path="/grants" element={<Grant />} />
        <Route path="/calculator" element={<BudgetInvestmentCalculator />} />
        <Route path="/blog" element={<FinancialBlogPage />} />
>>>>>>> 18d1640c9e087bd110ce907ce59472a26391f012
      </Routes>
    </>
  );
}

export default App;
