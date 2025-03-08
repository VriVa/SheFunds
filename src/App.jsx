import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import LakshmiChatbot from './pages/LakshmiChatbot';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SheFundsLanding from './pages/SheFundsLanding';

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
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
