import { useState, useEffect, useRef } from 'react';
import InputBar from '../ui/InputBar';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MoreHorizontal } from 'lucide-react';
import bheemIcon from '../../assets/bheem-icon.jpg';
import qmeeImg from '../../assets/qmee.png';
import { useCallback } from 'react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  isTyping?: boolean;
}

function TypewriterText({ text, onTyping }: { text: string; onTyping?: () => void }) {
  const [displayedText, setDisplayedText] = useState('');

  // Keep a stable ref to avoid restarting the animation
  const onTypingRef = useRef(onTyping);
  useEffect(() => {
    onTypingRef.current = onTyping;
  }, [onTyping]);

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    const timer = setInterval(() => {
      index += 3; // Chunk characters to optimize render frequency
      setDisplayedText(text.slice(0, index));
      if (onTypingRef.current) {
        onTypingRef.current();
      }
      if (index >= text.length) {
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [text]);

  return <>{displayedText}</>;
}

interface ChatScreenProps {
  initialPrompt?: string;
}

export default function ChatScreen({ initialPrompt }: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialSent = useRef(false);

  useEffect(() => {
    if (initialPrompt && !initialSent.current) {
      initialSent.current = true;
      handleSend(initialPrompt);
    }
  }, [initialPrompt]);

  const scrollToBottomSmooth = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBottomInstant = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }, []);

  useEffect(() => {
    scrollToBottomSmooth();
  }, [messages, isGenerating]);

  useEffect(() => {
    const handleClearChat = () => setMessages([]);
    document.addEventListener('clear-chat', handleClearChat);
    return () => document.removeEventListener('clear-chat', handleClearChat);
  }, []);

  const handleSend = (text: string) => {
    if (isGenerating) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: 'a few seconds ago'
    };
    setMessages(prev => [...prev, newMsg]);
    setIsGenerating(true);

    // Mock AI reply simulating 1 second loading
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "QMee is a modern, highly interactive AI agent interface designed to provide seamless conversational experiences. Engineered with pixel-perfect precision, this application features a sleek, high-end responsive layout marked by dynamic typography and bold, glowing pink aesthetics. Behind the scenes, the QMee frontend leverages React and Tailwind CSS v4 to orchestrate fluid typewriter animations, paired with a custom component architecture that ensures buttery-smooth screen transitions. It delivers an exceptionally fluid user experience where sophisticated navigational layouts and intelligently managed scrolling boundaries effortlessly bridge the gap between elegant UI design paradigms and deeply personalized, real-time artificial intelligence exchanges.",
        timestamp: 'a few seconds ago',
        isTyping: true
      }]);
      setIsGenerating(false);
    }, 1000);
  };

  const handleDeleteMessage = (id: string) => {
    setMessages(prev => {
      const index = prev.findIndex(msg => msg.id === id);
      if (index === -1) return prev;
      const targetMsg = prev[index];

      if (targetMsg.sender === 'user') {
        // Find if next message is AI response, delete it too
        if (index + 1 < prev.length && prev[index + 1].sender === 'ai') {
          return prev.filter((_, i) => i !== index && i !== index + 1);
        }
      } else if (targetMsg.sender === 'ai') {
        // Find if previous message is User prompt, delete it too
        if (index - 1 >= 0 && prev[index - 1].sender === 'user') {
          return prev.filter((_, i) => i !== index && i !== index - 1);
        }
      }

      return prev.filter(msg => msg.id !== id);
    });
  };

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto relative overflow-hidden">
      {/* Scrollable messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6 scroll-smooth scrollbar-hide">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              key={msg.id}
              className={`flex w-full ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              {msg.sender === 'user' ? (
                <div className="flex flex-col items-start ml-2 mb-2 relative z-10 mt-2">
                  {/* Top Row: Delete & Timestamp */}
                  <div className="flex items-center space-x-2 mb-3.5 ml-[15px]">
                    <button
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="size-7 rounded-full border border-primary/30 bg-white text-primary flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shrink-0 border
                        shadow-[0_0_6px_1px_rgba(255,42,142,0.25)]
                      "
                    >
                      <X size={18} strokeWidth={2} className=''/>
                    </button>
                    <div className="bg-[#f567b5] text-white px-2 py-1 rounded-md text-[11px] leading-none whitespace-nowrap tracking-wide">
                      {msg.timestamp}
                    </div>
                  </div>

                  {/* Message Bubble & Avatar Container */}
                  <div className="relative pl-5">
                    <div className="bg-white border border-primary/30 text-[#f7105d] shadow-[0_0_6px_1px_rgba(255,42,142,0.25)] rounded-xl rounded-bl-none px-8 py-6 min-w-[200px] text-[15.5px] font-light">
                      {msg.text}
                    </div>

                    {/* Absolute Avatar */}
                    <img
                      src={bheemIcon}
                      alt="User Avatar"
                      loading="lazy"
                      className="absolute -left-1 -bottom-3 size-6 rounded-full border-2 border-primary shadow-[0_0_8px_rgba(255,42,142,0.5)] object-cover bg-white z-20 pointer-events-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-end mb-3 -mt-1 relative z-10 w-full">
                  {/* Message Bubble & Avatar Container */}
                  <div className="relative pr-5 max-w-[85%] ml-auto">
                    <div className="bg-[#f84489] text-white shadow-[0_0_8px_rgba(255,42,142,0.15)] rounded-xl rounded-br-none py-8 px-10 text-[15px] leading-relaxed whitespace-pre-wrap">
                      {/* Optional hover delete */}
                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-white border border-primary/40 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-sm cursor-pointer hover:bg-primary/10"
                      >
                        <X size={12} />
                      </button>
                      {msg.isTyping ? <TypewriterText text={msg.text} onTyping={scrollToBottomInstant} /> : msg.text}
                    </div>

                    {/* Absolute Avatar */}
                    <img
                      src={qmeeImg}
                      alt="AI Avatar"
                      loading="lazy"
                      className="absolute -right-[5px] -bottom-4 size-6 rounded-full border-2 border-[#f5439a] object-contain bg-white z-20 pointer-events-none"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Padding element for smooth auto scroll effect */}
        {isGenerating && <div className='flex items-center justify-end gap-2 -mr-1'>
          <MoreHorizontal strokeWidth={3.2} className='!text-[#fa0276] animate-heartbeat-without-bg !bg-none'/>
          <img
            src={qmeeImg}
            alt="AI Avatar"
            loading="lazy"
            className="size-6 rounded-full border-2 border-[#f5439a] object-contain bg-white z-20 pointer-events-none"
          />
        </div>}

        {/* Invisible target for auto-scrolling */}
        <div ref={messagesEndRef} />
      </div>

      {/* Pinned bottom input bar */}
      <div className="mt-auto px-4 lg:px-0 w-full bg-background shrink-0 z-10 border-t border-transparent">
        <InputBar onSend={handleSend} isGenerating={isGenerating} />
      </div>
    </div>
  );
}
