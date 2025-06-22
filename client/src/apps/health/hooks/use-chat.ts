import { useState, useCallback } from 'react';
import { ChatMessage } from '@/types/health';
import { sendChatMessage } from '@/lib/openai';

export function useChat(sessionId: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      message: '',
      response: "Hello! I'm Nurse Maria, your AI health assistant. I'm here to help you with health questions, symptom guidance, and clinic recommendations. How can I assist you today?",
      timestamp: new Date(),
      isFromUser: false,
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (message: string) => {
    if (!message.trim() || isLoading) return;

    // Add user message immediately
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message,
      response: '',
      timestamp: new Date(),
      isFromUser: true,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await sendChatMessage(message, sessionId);
      
      // Add AI response
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: '',
        response: response.response,
        timestamp: new Date(response.timestamp),
        isFromUser: false,
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      
      // Add error message
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: '',
        response: "I apologize, but I'm experiencing technical difficulties. Please try again later or contact our health center directly at (036) 621-0153.",
        timestamp: new Date(),
        isFromUser: false,
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [sessionId, isLoading]);

  const clearMessages = useCallback(() => {
    setMessages([messages[0]]); // Keep the welcome message
    setError(null);
  }, [messages]);

  return {
    messages,
    sendMessage,
    clearMessages,
    isLoading,
    error,
  };
}
