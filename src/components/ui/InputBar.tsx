import { Send, X, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

interface InputBarProps {
  onSend?: (text: string) => void;
  autoFocus?: boolean;
  isGenerating?: boolean;
}

export default function InputBar({ onSend, autoFocus, isGenerating }: InputBarProps) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value.trim() && onSend && !isGenerating) {
      onSend(value);
      setValue('');
    }
  };

  return (
    <div className="w-full relative flex items-center bg-[#ffaecb] rounded-[20px] py-1.5 px-0.5 shadow-sm transition-colors">
      {/* Text Input */}
      <input
        type="text"
        placeholder="What's on your mind ?"
        className="flex-1 bg-[#f4f7f9] h-10 rounded-2xl px-6 text-[15px] sm:text-base text-primary placeholder-primary/60 outline-none border-none font-medium"
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isGenerating}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
      />
      
      {/* Action Buttons */}
      <div className="flex items-center space-x-2 ml-2">
        {value.length > 0 && !isGenerating && (
          <button 
            onClick={() => setValue('')}
            className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-light flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        )}

        {isGenerating ? (
          <div className="w-10 h-10 rounded-full bg-white/80 text-primary flex items-center justify-center border-2 border-primary border-t-transparent animate-spin shrink-0">
            <MoreHorizontal size={20} className="animate-pulse" />
          </div>
        ) : (
          <button 
            onClick={handleSend}
            className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-white/90 transition-colors shadow-sm cursor-pointer shrink-0"
          >
            <Send size={18} strokeWidth={2.5} className="mr-0.5 mt-0.5" />
          </button>
        )}
      </div>
    </div>
  );
}
