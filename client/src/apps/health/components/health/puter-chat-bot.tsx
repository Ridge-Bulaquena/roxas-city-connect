import { useState, useEffect, useRef } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatMessage {
  id: string;
  text: string;
  isFromUser: boolean;
  timestamp: Date;
}

declare global {
  interface Window {
    puter: any;
  }
}

const quickActions = [
  "Symptom Check",
  "Find Clinic", 
  "Medication Info",
  "Emergency"
];

export function PuterChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hello! I'm Nurse Maria, your advanced medical AI assistant powered by the latest avant-garde medical technology and diagnosis bot. I'm here to help you with health questions, symptom guidance, and clinic recommendations. How can I assist you today?",
      isFromUser: false,
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPuterReady, setIsPuterReady] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Puter is available
    const checkPuter = () => {
      if (window.puter && window.puter.ai) {
        setIsPuterReady(true);
      } else {
        setTimeout(checkPuter, 100);
      }
    };
    checkPuter();
  }, []);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading || !isPuterReady) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: messageText,
      isFromUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Use advanced medical AI technology
      const response = await window.puter.ai.chat(
        `You are Nurse Maria, an advanced medical AI assistant powered by cutting-edge diagnostic technology for Roxas City Connect Health Services. 
         Your sophisticated medical algorithms provide caring, professional health guidance while always recommending users consult healthcare professionals for serious concerns. 
         Keep responses concise but empathetic. You can help with general health questions, symptom guidance, and clinic recommendations in Roxas City using state-of-the-art medical analysis.

         User question: ${messageText}`
      );

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        isFromUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Medical AI error:', error);

      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing technical difficulties. Please try again later or contact our health center directly at (036) 621-0153.",
        isFromUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    await sendMessage(input.trim());
    setInput("");
  };

  const handleQuickAction = async (action: string) => {
    const messages = {
      "Symptom Check": "I have some symptoms I'd like to discuss. Can you help me understand what they might mean?",
      "Find Clinic": "Can you help me find the nearest health clinic in Roxas City?",
      "Medication Info": "I need information about a medication.",
      "Emergency": "This is an emergency situation. What should I do?"
    };

    const message = messages[action as keyof typeof messages];
    if (message) {
      await sendMessage(message);
    }
  };

  return (
    <Card className="h-[600px] flex flex-col shadow-2xl border-blue-100 bg-white/80 backdrop-blur-sm rounded-3xl">
      {/* Chat Header */}
      <CardHeader className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-t-3xl">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-white/25 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-lg">
            <Bot className="w-7 h-7" />
          </div>
          <div>
            <CardTitle className="text-xl font-bold font-main">Nurse Maria</CardTitle>
            <p className="text-blue-100 text-sm font-small">
              {isPuterReady ? "Advanced Medical AI • Online" : "Loading Medical AI..."}
            </p>
          </div>
        </div>
      </CardHeader>

      {/* Chat Messages */}
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-96 p-6" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-start space-x-3 ${
                message.isFromUser ? 'justify-end' : ''
              }`}>
                {!message.isFromUser && (
                  <div className="w-8 h-8 bg-china-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}

                <div className={`rounded-3xl p-4 max-w-xs shadow-lg ${
                  message.isFromUser 
                    ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white slide-in-right' 
                    : 'bg-white/90 backdrop-blur-sm border border-blue-100 text-slate-700 slide-in-left'
                }`}>
                  <p className="text-sm font-main">
                    {message.text}
                  </p>
                  <span className={`text-xs mt-2 block font-small ${
                    message.isFromUser ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>

                {message.isFromUser && (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start space-x-3 slide-in-left">
                <div className="w-8 h-8 bg-china-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-periwinkle/20 border border-china-blue/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin text-china-blue" />
                    <span className="text-sm text-china-blue font-medium">Nurse Maria is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Actions */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 mb-4">
            {quickActions.map((action) => (
              <Button
                key={action}
                variant="outline"
                size="sm"
                onClick={() => handleQuickAction(action)}
                disabled={isLoading || !isPuterReady}
                className="text-xs border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400"
              >
                {action}
              </Button>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-6 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <Input
              type="text"
              placeholder={isPuterReady ? "Type your health question here..." : "Loading medical AI..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading || !isPuterReady}
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={!input.trim() || isLoading || !isPuterReady}
              className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 shadow-lg rounded-full"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-2 font-small">
            This advanced medical AI provides general health information only. For emergencies, please call emergency services or visit the nearest hospital.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}