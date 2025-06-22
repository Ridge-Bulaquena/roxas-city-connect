import { useState } from 'react';

export function useAI() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (msg: string) => {
    // Placeholder: Simulate AI response
    const response = { role: 'ai', content: 'This is a mock AI response.' };
    setMessages((prev) => [...prev, { role: 'user', content: msg }, response]);
    return response;
  };

  return { messages, sendMessage };
} 