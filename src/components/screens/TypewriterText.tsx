import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "./ChatMessage";

export function TypewriterText({
  text,
  onTyping,
  onTypingComplete,
}: {
  text: string;
  onTyping?: () => void;
  onTypingComplete?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState(text);

  // Keep a stable ref to avoid restarting the animation
  const onTypingRef = useRef(onTyping);
  const onTypingCompleteRef = useRef(onTypingComplete);
  useEffect(() => {
    onTypingRef.current = onTyping;
    onTypingCompleteRef.current = onTypingComplete;
  }, [onTyping, onTypingComplete]);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const timer = setInterval(() => {
      index += 3; // Chunk characters to optimize render frequency
      setDisplayedText(text.slice(0, index));
      if (onTypingRef.current) {
        onTypingRef.current();
      }
      if (index >= text.length) {
        clearInterval(timer);
        if (onTypingCompleteRef.current) {
          onTypingCompleteRef.current();
        }
      }
    }, 20);
    return () => clearInterval(timer);
  }, [text]);

  return <ChatMessage message={displayedText} />;
}
