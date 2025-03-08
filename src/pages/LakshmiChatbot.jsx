import React, { useState, useRef, useEffect } from 'react';

// SVG Icon Components
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const RobotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"></rect>
    <circle cx="12" cy="5" r="2"></circle>
    <path d="M12 7v4"></path>
    <line x1="8" y1="16" x2="8" y2="16"></line>
    <line x1="16" y1="16" x2="16" y2="16"></line>
  </svg>
);

const QuestionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const MinimizeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MaximizeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);

const RestoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);

const LakshmiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowState, setWindowState] = useState('normal'); // 'minimized', 'normal', or 'maximized'
  const [language, setLanguage] = useState('english'); // 'english' or 'hindi'
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // Multilingual content
  const content = {
    english: {
      welcome: "Hello! I'm Lakshmi, your personal financial assistant. How can I help you today?",
      placeholder: "Type your financial question...",
      suggestedTitle: "Suggested Questions",
      poweredBy: "Powered by SheFunds Financial AI",
      minimized: "Lakshmi is waiting...",
      faqs: [
        "How do I create a budget?",
        "What investment options are best for beginners?",
        "How can I improve my credit score?",
        "What's the difference between a Roth IRA and Traditional IRA?"
      ],
      responses: {
        budget: "Creating a budget is your first step toward financial freedom. I recommend the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment. Would you like me to help you set up a personalized budget plan?",
        invest: "For beginner investors, I recommend starting with index funds or ETFs which provide diversification. SheFunds offers a 'First Steps to Investing' course that can guide you through the basics. Would you like me to share more resources?",
        loan: "When managing debt, focus on high-interest loans first. Creating a debt snowball or avalanche plan can help you make progress. Would you like me to explain these strategies?",
        save: "Building an emergency fund covering 3-6 months of expenses is essential. I suggest automating transfers to a high-yield savings account. Would you like tips on finding the best savings rates?",
        credit: "To improve your credit score, pay bills on time, reduce credit utilization below 30%, and check your credit report regularly for errors. Would you like me to help you create a credit improvement plan?",
        default: "Thank you for your question. I'd be happy to help you with that. Our financial experts at SheFunds have created resources specifically addressing this. Would you like me to connect you with more personalized guidance?"
      }
    },
    hindi: {
      welcome: "नमस्ते! मैं लक्ष्मी हूँ, आपकी निजी वित्तीय सहायक। आज मैं आपकी कैसे मदद कर सकती हूँ?",
      placeholder: "अपना वित्तीय प्रश्न लिखें...",
      suggestedTitle: "सुझाए गए प्रश्न",
      poweredBy: "SheFunds वित्तीय AI द्वारा संचालित",
      minimized: "लक्ष्मी प्रतीक्षा कर रही है...",
      faqs: [
        "बजट कैसे बनाएं?",
        "शुरुआती लोगों के लिए कौन से निवेश विकल्प सबसे अच्छे हैं?",
        "मैं अपना क्रेडिट स्कोर कैसे सुधार सकती हूँ?",
        "रोथ आईआरए और पारंपरिक आईआरए में क्या अंतर है?"
      ],
      responses: {
        budget: "बजट बनाना आपकी वित्तीय स्वतंत्रता की पहली कदम है। मैं 50/30/20 नियम की सिफारिश करती हूँ: 50% जरूरतों के लिए, 30% इच्छाओं के लिए, और 20% बचत और ऋण चुकाने के लिए। क्या आप चाहते हैं कि मैं आपके लिए एक व्यक्तिगत बजट योजना बनाने में मदद करूँ?",
        invest: "शुरुआती निवेशकों के लिए, मैं इंडेक्स फंड्स या ईटीएफ से शुरुआत करने की सलाह देती हूँ जो विविधता प्रदान करते हैं। SheFunds 'निवेश के पहले कदम' कोर्स प्रदान करता है जो आपको बुनियादी बातों के बारे में मार्गदर्शन कर सकता है। क्या आप चाहेंगे कि मैं अधिक संसाधन साझा करूँ?",
        loan: "ऋण का प्रबंधन करते समय, सबसे पहले उच्च ब्याज वाले ऋणों पर ध्यान दें। एक ऋण स्नोबॉल या एवलांच योजना बनाने से आपको प्रगति करने में मदद मिल सकती है। क्या आप चाहेंगे कि मैं इन रणनीतियों के बारे में बताऊँ?",
        save: "3-6 महीने के खर्चों को कवर करने वाला एक आपातकालीन फंड बनाना आवश्यक है। मैं उच्च-उपज बचत खाते में स्वचालित ट्रांसफर की सलाह देती हूँ। क्या आप सर्वोत्तम बचत दरों को खोजने के लिए टिप्स चाहेंगे?",
        credit: "अपने क्रेडिट स्कोर को सुधारने के लिए, समय पर बिल का भुगतान करें, क्रेडिट उपयोग को 30% से कम रखें, और त्रुटियों के लिए नियमित रूप से अपनी क्रेडिट रिपोर्ट जांचें। क्या आप चाहेंगे कि मैं आपके लिए एक क्रेडिट सुधार योजना बनाने में मदद करूँ?",
        default: "आपके प्रश्न के लिए धन्यवाद। मैं आपकी मदद करने में खुशी होगी। SheFunds के वित्तीय विशेषज्ञों ने इस विषय पर विशेष रूप से संसाधन तैयार किए हैं। क्या आप चाहेंगे कि मैं आपको अधिक व्यक्तिगत मार्गदर्शन से जोड़ूं?"
      }
    }
  };

  // Initialize messages with welcome message
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: content[language].welcome,
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  }, [language]);

  // Auto responses based on keywords
  const getResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    const responses = content[language].responses;
    
    if (lowerQuery.includes('budget') || lowerQuery.includes('spending') || 
        lowerQuery.includes('बजट') || lowerQuery.includes('खर्च')) {
      return responses.budget;
    }
    
    if (lowerQuery.includes('invest') || lowerQuery.includes('stock') || 
        lowerQuery.includes('mutual fund') || lowerQuery.includes('निवेश') || 
        lowerQuery.includes('शेयर') || lowerQuery.includes('म्यूचुअल फंड')) {
      return responses.invest;
    }
    
    if (lowerQuery.includes('loan') || lowerQuery.includes('debt') || 
        lowerQuery.includes('ऋण') || lowerQuery.includes('कर्ज')) {
      return responses.loan;
    }
    
    if (lowerQuery.includes('save') || lowerQuery.includes('emergency fund') || 
        lowerQuery.includes('बचत') || lowerQuery.includes('आपातकालीन निधि')) {
      return responses.save;
    }
    
    if (lowerQuery.includes('credit') || lowerQuery.includes('credit score') || 
        lowerQuery.includes('क्रेडिट') || lowerQuery.includes('क्रेडिट स्कोर')) {
      return responses.credit;
    }
    
    return responses.default;
  };

  // Handle sending a new message
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    
    // If minimized, restore to normal when user sends a message
    if (windowState === 'minimized') {
      setWindowState('normal');
    }
    
    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      
      // Show suggestions again after bot responds
      setShowSuggestions(true);
    }, 1000);
  };

  // Handle key press (Enter)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Select FAQ
  const handleFaqSelect = (faq) => {
    setInputText(faq);
    // Hide suggestions after selecting one
    setShowSuggestions(false);
    
    // If minimized, restore to normal when user selects a FAQ
    if (windowState === 'minimized') {
      setWindowState('normal');
    }
    
    // Focus on input after selecting FAQ
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'hindi' : 'english');
  };

  // Minimize the chat
  const handleMinimize = () => {
    setWindowState('minimized');
  };

  // Maximize the chat
  const handleMaximize = () => {
    setWindowState('maximized');
  };

  // Restore to normal size
  const handleRestore = () => {
    setWindowState('normal');
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current && windowState !== 'minimized') {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, windowState]);

  // Focus input when chat opens or expands
  useEffect(() => {
    if (isOpen && windowState !== 'minimized' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, windowState]);

  // Get class names based on window state
  const getWindowClassNames = () => {
    const baseClasses = "bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-gray-200 transition-all duration-300";
    
    switch (windowState) {
      case 'minimized':
        return `${baseClasses} w-80 md:w-96 h-16`;
      case 'maximized':
        return `${baseClasses} fixed inset-4 md:inset-16 z-50`;
      case 'normal':
      default:
        return `${baseClasses} w-80 md:w-96 h-96`;
    }
  };

  return (
    <div className={`fixed ${windowState === 'maximized' ? 'inset-0 bg-black/50 z-40' : 'bottom-6 right-6 z-50'}`}>
      {/* Collapsed chat button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 z-50"
        >
          <RobotIcon />
        </button>
      )}
      
      {/* Open chat window */}
      {isOpen && (
        <div className={getWindowClassNames()}>
          {/* Chat header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                <span className="text-white font-bold">ल</span>
              </div>
              <h3 className="text-lg font-semibold">Lakshmi</h3>
            </div>
            <div className="flex items-center">
              {/* Language toggle - only show when not minimized */}
              {windowState !== 'minimized' && (
                <button 
                  onClick={toggleLanguage}
                  className="text-white/80 hover:text-white mr-4 text-sm px-2 py-1 bg-white/10 rounded"
                >
                  {language === 'english' ? 'हिंदी' : 'English'}
                </button>
              )}
              
              {/* Window control buttons */}
              {windowState === 'minimized' ? (
                // Restore button when minimized
                <button 
                  onClick={handleRestore}
                  className="text-white/80 hover:text-white mr-4"
                  aria-label="Restore chat"
                >
                  <RestoreIcon />
                </button>
              ) : windowState === 'maximized' ? (
                // Restore button when maximized
                <button 
                  onClick={handleRestore}
                  className="text-white/80 hover:text-white mr-4"
                  aria-label="Restore chat"
                >
                  <RestoreIcon />
                </button>
              ) : (
                // Minimize and maximize buttons when in normal state
                <>
                  <button 
                    onClick={handleMinimize}
                    className="text-white/80 hover:text-white mr-4"
                    aria-label="Minimize chat"
                  >
                    <MinimizeIcon />
                  </button>
                  <button 
                    onClick={handleMaximize}
                    className="text-white/80 hover:text-white mr-4"
                    aria-label="Maximize chat"
                  >
                    <MaximizeIcon />
                  </button>
                </>
              )}
              
              {/* Close button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </div>
          </div>
          
          {/* Show minimized status message or full chat interface */}
          {windowState === 'minimized' ? (
            <div className="flex-1 flex items-center justify-between px-4 text-sm text-gray-500">
              <span>{content[language].minimized}</span>
              <span className="text-xs">
                {messages.length > 1 ? `${messages.length - 1} message${messages.length > 2 ? 's' : ''}` : ''}
              </span>
            </div>
          ) : (
            <>
              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {messages.map(message => (
                  <div 
                    key={message.id} 
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-3/4 rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-pink-500 text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 shadow-md rounded-tl-none'
                    }`}>
                      {message.sender === 'bot' && (
                        <div className="flex items-center mb-1">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mr-1">
                            <span className="text-white text-xs font-bold">ल</span>
                          </div>
                          <span className="text-xs font-semibold text-gray-600">Lakshmi</span>
                        </div>
                      )}
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block text-right">
                        {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Suggested questions - only shown when showSuggestions is true */}
              {showSuggestions && (
                <div className="p-2 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center mb-2">
                    <QuestionIcon className="text-gray-500 mr-2" />
                    <span className="text-xs text-gray-500">{content[language].suggestedTitle}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {content[language].faqs.map((faq, index) => (
                      <button
                        key={index}
                        onClick={() => handleFaqSelect(faq)}
                        className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        {faq}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Input area */}
              <div className="p-3 border-t border-gray-200 bg-white">
                <div className="flex rounded-full border border-gray-300 overflow-hidden bg-gray-50 focus-within:ring-2 focus-within:ring-pink-500 focus-within:border-transparent">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={content[language].placeholder}
                    className="flex-1 py-2 px-4 bg-transparent outline-none text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={inputText.trim() === ''}
                    className={`px-3 flex items-center justify-center ${
                      inputText.trim() === '' 
                        ? 'text-gray-400' 
                        : 'text-pink-500 hover:text-pink-600'
                    }`}
                  >
                    <SendIcon />
                  </button>
                </div>
                <div className="text-center mt-2">
                  <span className="text-xs text-gray-500">
                    {content[language].poweredBy}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LakshmiChatbot;
