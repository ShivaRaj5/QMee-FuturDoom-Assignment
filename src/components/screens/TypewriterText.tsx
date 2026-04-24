import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "./ChatMessage";

export function TypewriterText({
  text,
  onTyping,
}: {
  text: string;
  onTyping?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState(text);

  // Keep a stable ref to avoid restarting the animation
  const onTypingRef = useRef(onTyping);
  useEffect(() => {
    onTypingRef.current = onTyping;
  }, [onTyping]);

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
      }
    }, 20);
    return () => clearInterval(timer);
  }, [text]);

  return <>{<ChatMessage message={displayedText} />}</>;
}