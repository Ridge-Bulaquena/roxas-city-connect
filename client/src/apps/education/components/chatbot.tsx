import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation, useQuery } from "@tanstack/react-query";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { apiRequest } from "@/lib/queryClient";
import type { ChatMessage } from "@shared/schema";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { data: messages = [], refetch } = useQuery<ChatMessage[]>({
    queryKey: [`/api/chat/${sessionId}`],
    enabled: isOpen,
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (messageText: string) => {
      return apiRequest("POST", "/api/chat", {
        message: messageText,
        sessionId,
      });
    },
    onSuccess: () => {
      refetch();
      setMessage("");
    },
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add welcome message if no messages exist
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = "Hello! I'm EduBot, your education assistant. How can I help you find the right learning opportunities today?";
      sendMessageMutation.mutate(welcomeMessage);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (message.trim() && !sendMessageMutation.isPending) {
      sendMessageMutation.mutate(message.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96"
          >
            <Card className="shadow-2xl border-gray-200">
              {/* Chat Header */}
              <CardHeader className="bg-china-blue text-white p-4 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">EduBot</h4>
                      <p className="text-xs text-blue-100">Your Education Assistant</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-blue-200 hover:bg-white hover:bg-opacity-10"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Chat Messages */}
              <CardContent className="p-0">
                <ScrollArea className="h-64 p-4 custom-scrollbar">
                  <div className="space-y-3">
                    {messages.map((msg, index) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-start space-x-2 ${
                          msg.isBot ? "" : "flex-row-reverse space-x-reverse"
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          msg.isBot ? "bg-china-blue" : "bg-gray-400"
                        }`}>
                          {msg.isBot ? (
                            <Bot className="w-3 h-3 text-white" />
                          ) : (
                            <User className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div className={`rounded-lg p-3 max-w-xs ${
                          msg.isBot 
                            ? "bg-gray-100 text-gray-800" 
                            : "bg-china-blue text-white"
                        }`}>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </motion.div>
                    ))}
                    {sendMessageMutation.isPending && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-6 h-6 bg-china-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div ref={messagesEndRef} />
                </ScrollArea>

                {/* Chat Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 focus-enhanced transition-enhanced"
                      disabled={sendMessageMutation.isPending}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!message.trim() || sendMessageMutation.isPending}
                      className="bg-china-blue hover:bg-blue-800 transition-colors duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Powered by AI • Press Enter to send
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-china-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-china-blue focus:ring-opacity-50"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>
    </div>
  );
}
