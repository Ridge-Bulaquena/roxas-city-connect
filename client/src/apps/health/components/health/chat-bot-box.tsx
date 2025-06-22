import { useState, useEffect, useRef } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useChat } from "@/hooks/use-chat";
import { ScrollArea } from "@/components/ui/scroll-area";

const quickActions = [
  "Symptom Check",
  "Find Clinic", 
  "Medication Info",
  "Emergency"
];

export function ChatBotBox() {
  const [input, setInput] = useState("");
  const sessionId = useRef(Math.random().toString(36).substring(7));
  const { messages, sendMessage, isLoading } = useChat(sessionId.current);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    await sendMessage(input.trim());
    setInput("");
  };

  const handleQuickAction = async (action: string) => {
    const messages = {
      "Symptom Check": "I have some symptoms I'd like to discuss. Can you help me understand what they might mean?",
      "Find Clinic": "Can you help me find the nearest health clinic?",
      "Medication Info": "I need information about a medication.",
      "Emergency": "This is an emergency situation. What should I do?"
    };
    
    const message = messages[action as keyof typeof messages];
    if (message) {
      await sendMessage(message);
    }
  };

  return (
    <Card className="h-[600px] flex flex-col">
      {/* Chat Header */}
      <CardHeader className="bg-china-blue text-white rounded-t-lg">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <CardTitle className="text-lg">Nurse Maria</CardTitle>
            <p className="text-blue-100">AI Health Assistant • Online</p>
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
                
                <div className={`rounded-lg p-4 max-w-xs ${
                  message.isFromUser 
                    ? 'bg-china-blue text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="text-sm">
                    {message.isFromUser ? message.message : message.response}
                  </p>
                  <span className={`text-xs mt-2 block ${
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
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-china-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
                disabled={isLoading}
                className="text-xs"
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
              placeholder="Type your health question here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={!input.trim() || isLoading}
              className="bg-china-blue hover:bg-china-blue/90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-2">
            This AI assistant provides general health information only. For emergencies, please call emergency services or visit the nearest hospital.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
