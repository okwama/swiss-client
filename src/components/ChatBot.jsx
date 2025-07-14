import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaUser, FaRobot } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Swiss Life assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Predefined responses for common questions
  const botResponses = {
    'hello': "Hello! Welcome to Swiss Life HLDG. How can I assist you today?",
    'hi': "Hi there! I'm here to help with your insurance and financial needs.",
    'insurance': "We offer various insurance products including Performance Bonds, Morning Investor, Comprehensive Medical Cover, Car Insurance, and Advanced Payment Guarantees. Which one interests you?",
    'policy': "Our policies include Performance Bonds, Morning Investor, Comprehensive Medical Cover, Car Insurance, and Advanced Payment Guarantees. Would you like to know more about any specific policy?",
    'claim': "To file a claim, please visit our client portal or contact our claims department at +254 700 123 456. You can also email us at claims@swisslife.com.",
    'contact': "You can reach us at:\n📞 Phone: +254 700 123 456\n✉️ Email: contact@swisslife.com\n📍 Address: Foros do Carrapatal, 2985-051 Canha, Portugal",
    'payment': "We accept various payment methods including bank transfers, credit cards, and mobile money. You can make payments through our client portal or contact our billing department.",
    'price': "Our pricing varies based on the type of policy and coverage level. Would you like to get a quote for a specific policy?",
    'quote': "I'd be happy to help you get a quote! Please specify which type of insurance you're interested in (Performance Bonds, Medical Cover, Car Insurance, etc.).",
    'help': "I can help you with:\n• Policy information\n• Claims assistance\n• Payment options\n• Contact information\n• Getting quotes\nWhat do you need help with?",
    'thanks': "You're welcome! Is there anything else I can help you with?",
    'thank you': "You're welcome! Feel free to ask if you need any other assistance.",
    'bye': "Thank you for chatting with us! Have a great day and don't hesitate to reach out if you need anything else.",
    'goodbye': "Goodbye! We're here whenever you need us. Take care!"
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Default responses for different categories
    if (lowerMessage.includes('medical') || lowerMessage.includes('health')) {
      return "Our Comprehensive Medical Cover provides extensive health insurance protection. It covers hospitalization, outpatient services, and emergency medical expenses. Would you like to know more details?";
    }
    
    if (lowerMessage.includes('car') || lowerMessage.includes('vehicle') || lowerMessage.includes('auto')) {
      return "Our Car Insurance offers comprehensive coverage for your vehicle including accident damage, theft, and third-party liability. What specific coverage are you looking for?";
    }
    
    if (lowerMessage.includes('bond') || lowerMessage.includes('performance')) {
      return "Performance Bonds provide financial guarantees for construction projects and business contracts. They ensure project completion and protect against default. Would you like a quote?";
    }
    
    if (lowerMessage.includes('investor') || lowerMessage.includes('morning')) {
      return "Morning Investor is our investment-linked insurance product that combines protection with wealth accumulation. It's perfect for long-term financial planning. Shall I explain the benefits?";
    }

    // Generic response for unrecognized queries
    return "I understand you're asking about '" + userMessage + "'. For specific information about our products and services, please contact our team at +254 700 123 456 or email us at contact@swisslife.com. How else can I help you?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot size={16} />
              </div>
              <div>
                <h3 className="font-semibold">Swiss Life Assistant</h3>
                <p className="text-xs text-red-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-100 transition-colors"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs sm:max-w-sm p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-red-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <FaRobot size={12} className="text-red-500 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <FaUser size={12} className="text-white/70 mt-1 flex-shrink-0" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-lg rounded-bl-none border border-gray-200 p-3">
                  <div className="flex items-center space-x-2">
                    <FaRobot size={12} className="text-red-500" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send • Type 'help' for assistance
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot; 