import React, { useState, useEffect, useRef } from 'react';
import { X, Send, User, Bot, Sparkles } from 'lucide-react';

const ChatWindow = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello 👋\nI'm Nexora AI Assistant.\nHow can I help you today?",
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestions = [
    "Who are you?",
    "Tell me about Nexora",
    "Our Services",
    "Technologies",
    "Why choose Nexora?",
    "Projects",
    "Contact Information",
    "Business Hours"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      let reply = "That's a great question! I'm a demo AI assistant, so I don't have a real backend connected right now. But Nexora is an industry-leading tech company!";
      
      if (text.includes("Who are you")) reply = "I am the Nexora AI Assistant. I exist to help you navigate our services, answer your questions, and showcase our cutting-edge AI capabilities.";
      else if (text.includes("Nexora") || text.includes("Tell me about")) reply = "Nexora is a premier enterprise technology solutions provider. We specialize in Cloud, AI, Cybersecurity, and Data Analytics.";
      else if (text.includes("Services")) reply = "We offer Cloud Migration, AI & Machine Learning, DevOps Automation, and Zero-Trust Cybersecurity solutions.";
      
      setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: reply }]);
    }, 1500);
  };

  return (
    <div className="w-[calc(100vw-32px)] sm:w-[380px] h-[480px] max-h-[calc(100vh-140px)] sm:max-h-[70vh] flex flex-col bg-white/80 dark:bg-[#0A0F1C]/80 backdrop-blur-2xl border border-white/50 dark:border-slate-800/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_0_40px_-15px_rgba(0,255,255,0.15)] rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
      
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-[2px]">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white text-sm">Nexora AI</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Always online</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div 
        className="flex-1 overflow-y-auto p-5 space-y-4 chat-scrollbar"
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
              msg.sender === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-sm' 
                : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-sm border border-slate-100 dark:border-slate-700'
            }`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-1">
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {messages.length === 1 && !isTyping && (
        <div className="px-4 pb-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1">
            <Sparkles size={12} /> Suggestions
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((sug, i) => (
              <button
                key={i}
                onClick={() => handleSend(sug)}
                className="text-xs px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800/40 transition-colors"
              >
                {sug}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 bg-white/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
            placeholder="Ask me anything..."
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all shadow-inner"
          />
          <button
            onClick={() => handleSend(inputValue)}
            disabled={!inputValue.trim()}
            className="absolute right-1 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white disabled:opacity-50 disabled:bg-slate-400 transition-colors"
          >
            <Send size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
