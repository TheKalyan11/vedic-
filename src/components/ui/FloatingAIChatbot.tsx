'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Send, X, Bot, RotateCcw, ChevronRight } from 'lucide-react';
import styles from './FloatingAIChatbot.module.css';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  cards?: Array<{
    title: string;
    location: string;
    price: string;
    image: string;
    href: string;
  }>;
  quickReplies?: string[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: 'Namaste! 🙏 I am Vedic AI, your personal royal wedding & venue assistant. How can I help you plan your dream celebration today?',
    timestamp: 'Just now',
    quickReplies: [
      '🏰 Palace Venues in Udaipur',
      '💰 Banquets in Hyderabad',
      '📸 Top Wedding Photographers',
      '🪔 Mandap & Decor Packages'
    ]
  }
];

const KNOWLEDGE_BASE: Record<string, { reply: string; cards?: Message['cards']; quickReplies?: string[] }> = {
  udaipur: {
    reply: 'Udaipur is world-famous for fairy-tale lake & heritage palace weddings! Here are top curated royal venues:',
    cards: [
      {
        title: 'Taj Lake Palace',
        location: 'Lake Pichola, Udaipur',
        price: '₹25,00,000 / day',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80',
        href: '/venues?search=udaipur'
      },
      {
        title: 'The Leela Palace',
        location: 'Udaipur, Rajasthan',
        price: '₹22,00,000 / day',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=80',
        href: '/venues?search=udaipur'
      }
    ],
    quickReplies: ['Check Availability', 'Request Callback', 'Decor Options']
  },
  hyderabad: {
    reply: 'Hyderabad offers breathtaking royal palaces and premium contemporary banquet spaces. Here are our highest-rated selections:',
    cards: [
      {
        title: 'Taj Falaknuma Palace',
        location: 'Engine Bowli, Hyderabad',
        price: '₹18,00,000 / day',
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&auto=format&fit=crop&q=80',
        href: '/venues?search=hyderabad'
      },
      {
        title: 'Novotel HICC Convention',
        location: 'Hitec City, Hyderabad',
        price: '₹4,50,000 / day',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80',
        href: '/venues?search=hyderabad'
      }
    ],
    quickReplies: ['Book a Free Tour', 'View Capacity Details', 'Catering Packages']
  },
  photographer: {
    reply: 'Our verified wedding photographers capture timeless cinematic candids and traditional rituals:',
    cards: [
      {
        title: 'Stories by Joseph Radhik',
        location: 'Pan-India / Destination',
        price: 'From ₹3,50,000',
        image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&auto=format&fit=crop&q=80',
        href: '/vendors?category=photographers'
      }
    ],
    quickReplies: ['Explore All Photographers', 'Makeup Artists', 'Pre-Wedding Shoots']
  },
  decor: {
    reply: 'Vedic Venues offers end-to-end bespoke sacred mandap decor, royal chandeliers, marigold themes, and eco-friendly floral designs.',
    quickReplies: ['Book a Consultation', 'View Decor Catalog', 'Budget Calculator']
  },
  default: {
    reply: "I'd love to assist you with that! You can explore our verified venues, connect with top-rated wedding vendors, or speak directly to a wedding planner.",
    quickReplies: ['Browse All Venues', 'Book 15-min Call', 'Register as Vendor']
  }
};

export const FloatingAIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const lower = query.toLowerCase();
      let match = KNOWLEDGE_BASE.default;

      if (lower.includes('udaipur') || lower.includes('palace') || lower.includes('rajasthan')) {
        match = KNOWLEDGE_BASE.udaipur;
      } else if (lower.includes('hyderabad') || lower.includes('banquet') || lower.includes('falaknuma')) {
        match = KNOWLEDGE_BASE.hyderabad;
      } else if (lower.includes('photo') || lower.includes('camera') || lower.includes('video')) {
        match = KNOWLEDGE_BASE.photographer;
      } else if (lower.includes('decor') || lower.includes('mandap') || lower.includes('flower')) {
        match = KNOWLEDGE_BASE.decor;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: match.reply,
        timestamp: 'Just now',
        cards: match.cards,
        quickReplies: match.quickReplies
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 900);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <div className={styles.chatbotContainer}>
      {/* Floating Trigger Button (Right Side) */}
      {!isOpen && (
        <button
          type="button"
          className={styles.floatingTrigger}
          onClick={() => setIsOpen(true)}
          aria-label="Open Vedic AI Assistant"
        >
          <img 
            src="/ai-bot-icon.png" 
            alt="AI Assistant" 
            className={styles.triggerBotIcon} 
          />
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className={styles.chatWindow}>
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.botAvatar}>
                <img 
                  src="/ai-bot-icon.png" 
                  alt="Vedic AI" 
                  className={styles.botAvatarImg} 
                />
                <span className={styles.onlineDot} />
              </div>
              <div className={styles.headerInfo}>
                <h3 className={styles.headerTitle}>
                  Vedic AI <span className={styles.aiBadge}>Genie</span>
                </h3>
                <p className={styles.headerSubtitle}>24/7 Royal Wedding Planner</p>
              </div>
            </div>
            <div className={styles.headerActions}>
              <button
                type="button"
                className={styles.headerBtn}
                onClick={handleResetChat}
                title="Reset conversation"
                aria-label="Reset chat"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                className={styles.headerBtn}
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className={styles.messagesArea}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.messageRow} ${
                  msg.sender === 'user' ? styles.userRow : styles.botRow
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className={styles.msgAvatar}>
                    <img 
                      src="/ai-bot-icon.png" 
                      alt="AI" 
                      className={styles.msgAvatarImg} 
                    />
                  </div>
                )}

                <div className={styles.msgBubbleWrapper}>
                  <div
                    className={`${styles.msgBubble} ${
                      msg.sender === 'user' ? styles.userBubble : styles.botBubble
                    }`}
                  >
                    <p className={styles.msgText}>{msg.text}</p>
                  </div>

                  {/* Recommendation Cards */}
                  {msg.cards && msg.cards.length > 0 && (
                    <div className={styles.cardsContainer}>
                      {msg.cards.map((card, idx) => (
                        <Link
                          key={idx}
                          href={card.href}
                          className={styles.recommendCard}
                          onClick={() => setIsOpen(false)}
                        >
                          <img
                            src={card.image}
                            alt={card.title}
                            className={styles.cardImg}
                          />
                          <div className={styles.cardBody}>
                            <h4 className={styles.cardTitle}>{card.title}</h4>
                            <p className={styles.cardLocation}>{card.location}</p>
                            <div className={styles.cardFooter}>
                              <span className={styles.cardPrice}>{card.price}</span>
                              <span className={styles.cardAction}>
                                View <ChevronRight size={13} />
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Quick Replies */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className={styles.quickRepliesList}>
                      {msg.quickReplies.map((reply, rIdx) => (
                        <button
                          key={rIdx}
                          type="button"
                          className={styles.quickReplyBtn}
                          onClick={() => handleSend(reply)}
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className={styles.msgTimestamp}>{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.messageRow} ${styles.botRow}`}>
                <div className={styles.msgAvatar}>
                  <Sparkles size={14} />
                </div>
                <div className={styles.typingIndicator}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className={styles.chatFooter}
          >
            <input
              type="text"
              placeholder="Ask about venues, dates, budgets..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className={styles.chatInput}
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className={styles.sendButton}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
