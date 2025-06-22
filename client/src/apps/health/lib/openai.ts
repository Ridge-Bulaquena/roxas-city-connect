// Client-side OpenAI integration utility
export async function sendChatMessage(message: string, sessionId: string) {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, sessionId }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Chat error:', error);
    throw error;
  }
}

export async function getChatHistory(sessionId: string) {
  try {
    const response = await fetch(`/api/chat/history/${sessionId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch chat history');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Chat history error:', error);
    throw error;
  }
}
