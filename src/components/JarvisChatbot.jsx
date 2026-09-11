import React, { useState, useEffect, useRef } from 'react';
import { CONFIG } from '../config';
import { Bot, Send, X, Sparkles, Terminal, Activity, ArrowRight } from 'lucide-react';

export default function JarvisChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'jarvis',
      text: "Greetings! I am J.A.R.V.I.S, Abdul's AI Assistant. Ask me anything about his multi-agent systems, full-stack projects, or freelance availability.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQueries = [
    'Who is Abdul Rahoof?',
    'What is his flagship AI project?',
    'What are his core skills?',
    'Is Abdul open for hire / freelance?',
    'Show me his CRM project',
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const generateReply = (queryText) => {
    const q = queryText.toLowerCase();

    if (q.includes('who') || q.includes('abdul') || q.includes('rahoof')) {
      return "Abdul Rahoof is an AI Engineer and Full-Stack Developer currently pursuing his BCA in Tamil Nadu, India. He builds production-grade multi-agent LLM systems with LangGraph, Bedrock Guardrails, and cloud-native backends on AWS.";
    }
    if (q.includes('flagship') || q.includes('upcoming') || q.includes('research') || q.includes('wip') || q.includes('agent')) {
      return "His flagship project is the 'Multi-Agent AI Research Platform' — an autonomous 4-agent LangGraph workflow (Search → Summarize → Write → Verify) equipped with AWS Bedrock Guardrails, a 3-tier memory system (Redis STM + pgvector LTM), and PyRIT red-teaming.";
    }
    if (q.includes('crm') || q.includes('clientos') || q.includes('top project')) {
      return "His featured full-stack application is 'ClientOS — Enterprise CRM', built with React, Supabase, and Tailwind CSS. It supports granular Admin/Staff roles, real-time debt calculation, and one-click CSV export.";
    }
    if (q.includes('jarvis') || q.includes('voice') || q.includes('offline')) {
      return "He built a self-hosted offline J.A.R.V.I.S running Gemma 4 (4B parameters) with Faster-Whisper for STT and Piper TTS for zero-cloud latency under 800ms!";
    }
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language')) {
      return "Abdul's core stack spans: LangGraph, LangSmith, AWS Bedrock, Python, React.js, Tailwind CSS, Node.js, PostgreSQL/Supabase, Docker, Terraform, and GitHub Actions CI/CD.";
    }
    if (q.includes('hire') || q.includes('freelance') || q.includes('work') || q.includes('contact') || q.includes('available')) {
      return "Yes! Abdul is actively looking for AI Engineering and Full-Stack development roles, internships, and freelance projects. You can email him directly at rahoof.codes@gmail.com or use the contact form.";
    }
    if (q.includes('resume') || q.includes('cv')) {
      return "You can download Abdul's updated resume using the 'Resume' button in the Hero or About section of this page!";
    }
    if (q.includes('education') || q.includes('college') || q.includes('bca') || q.includes('study')) {
      return "Abdul is pursuing a Bachelor of Computer Applications (BCA) at Government Arts and Science College in Oddanchathram, Tamil Nadu, India.";
    }

    return "I am configured to answer questions regarding Abdul's AI agent research, full-stack projects, tech stack, and career availability. Try selecting one of the suggested prompts below!";
  };

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;

    const userMessage = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateReply(textToSend);
      setMessages((prev) => [...prev, { sender: 'jarvis', text: reply }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="jarvis-assistant-container">
      {/* Floating HUD Button */}
      <button
        className={`jarvis-floating-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle J.A.R.V.I.S Assistant"
      >
        <div className="trigger-pulse-ring" />
        {isOpen ? <X size={22} /> : <Bot size={24} />}
        {!isOpen && <span className="trigger-tooltip">Chat with J.A.R.V.I.S</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="jarvis-chat-hud" role="dialog" aria-label="J.A.R.V.I.S Chat">
          {/* Header */}
          <div className="chat-hud-header">
            <div className="chat-hud-title-block">
              <div className="assistant-avatar-badge">
                <Bot size={18} className="text-cyan" />
                <span className="avatar-status-dot" />
              </div>
              <div>
                <h5>J.A.R.V.I.S AI</h5>
                <div className="hud-telemetry-status">
                  <span className="status-live-dot" />
                  <span>ONLINE · BEDROCK GUARDED</span>
                </div>
              </div>
            </div>

            {/* Audio Wave Visualizer Effect */}
            <div className="sound-wave-bars">
              <span className="wave-bar bar-1" />
              <span className="wave-bar bar-2" />
              <span className="wave-bar bar-3" />
              <span className="wave-bar bar-4" />
            </div>

            <button
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Assistant"
            >
              <X size={18} />
            </button>
          </div>

          {/* Telemetry Memory Bar */}
          <div className="chat-memory-bar">
            <span>STM: Redis Active</span>
            <span className="divider">|</span>
            <span>LTM: pgvector Ready</span>
            <span className="divider">|</span>
            <span>Model: Gemma 4 / Bedrock</span>
          </div>

          {/* Messages Area */}
          <div className="chat-messages-scroll">
            {messages.map((m, idx) => (
              <div key={idx} className={`chat-bubble-row ${m.sender}`}>
                {m.sender === 'jarvis' && (
                  <div className="bubble-avatar">
                    <Bot size={14} />
                  </div>
                )}
                <div className="chat-bubble-text">{m.text}</div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble-row jarvis">
                <div className="bubble-avatar">
                  <Bot size={14} />
                </div>
                <div className="chat-bubble-text typing-indicator">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts */}
          <div className="chat-prompt-chips">
            {suggestedQueries.map((q, i) => (
              <button
                key={i}
                className="prompt-chip-btn"
                onClick={() => handleSend(q)}
                disabled={isTyping}
              >
                <span>{q}</span>
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            className="chat-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
          >
            <input
              type="text"
              className="chat-text-input"
              placeholder="Ask J.A.R.V.I.S anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
            />
            <button
              type="submit"
              className="chat-submit-btn"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

