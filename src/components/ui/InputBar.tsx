import { X, MoreHorizontal, SendHorizonal } from 'lucide-react';
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
    <div className="w-full relative flex items-center bg-[#fa9dad] rounded-[20px] py-1.5 px-0.5 shadow-sm transition-colors">
      {/* Text Input */}
      <input
        type="text"
        placeholder={isGenerating?"Just wait & watch !":"What's on your mind ?"}
        className="flex-1 bg-[#f4f7f9] h-10 rounded-2xl px-6 text-[13.5px] sm:text-base text-[#fc0d71] placeholder:text-[#fc0d71] placeholder:opacity-100 outline-none border-none"
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
            className="hover:text-[#ed4895f2] size-9 rounded-full bg-primary text-white hover:bg-primary-light flex items-center justify-center transition-colors cursor-pointer shrink-0 hover:bg-white"
          >
            <X size={20} />
          </button>
        )}

        {isGenerating ? (
          <div className="size-9 rounded-full bg-white/80 text-primary flex items-center justify-center shrink-0 animate-heartbeat mr-[2px]">
            <MoreHorizontal className='size-5.6 !text-[#fa0276]' />
          </div>
        ) : (
          <button
            onClick={handleSend}
            className={`size-9 rounded-full ${value.trim() ? 'bg-white cursor-pointer hover:bg-[#de1b89]' : 'bg-[#f6cdd4]'} text-primary flex items-center justify-center  `}
          >
            <SendHorizonal className="size-5.6 text-[#ed4895f2]" strokeWidth={1.6} />
          </button>
        )}
      </div>
    </div>
  );
}
