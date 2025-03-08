import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import LakshmiChatbot from './pages/LakshmiChatbot';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SheFundsLanding from './pages/SheFundsLanding';
import SheFundsDashboard from './pages/SheFundsDashboard';
import FinancialLiteracyCoursesPage from './pages/FinancialLiteracyCourses';
import Community from './pages/Community';
import BudgetInvestmentCalculator from './pages/BudgetInvestmentCalculator';
import Grant from './pages/Grants';
import FinancialBlogPage from './pages/FinancialBlogPage';
<<<<<<< HEAD

=======
import Sidebar from './pages/Sidebar';
>>>>>>> 978d46ce0cefccc12ff36cfda2dc0577463f69a6

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Show chatbot & sidebar only if NOT on SignIn, SignUp, or Landing page
  const showChatbot = location.pathname !== "/signin" && location.pathname !== "/signup" && location.pathname !== "/";
  const showSidebar = location.pathname !== "/signin" && location.pathname !== "/signup" && location.pathname !== "/";

  return (
    <>
    
      {showChatbot && <LakshmiChatbot />}
      <Routes>
        <Route path="/" element={<SheFundsLanding />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shefundsdashboard" element={<SheFundsDashboard />} />
        <Route path="/financialliteracycourses" element={<FinancialLiteracyCoursesPage />} />
        <Route path="/grants" element={<Grant />} />
        <Route path="/calculator" element={<BudgetInvestmentCalculator />} />
        <Route path="/blog" element={<FinancialBlogPage />} />
      </Routes>
    </>
  );
}

export default App;
