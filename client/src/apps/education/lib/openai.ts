// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
export interface ScholarshipMatch {
  name: string;
  description: string;
  eligibility: string;
  deadline: string;
  amount: string;
}

export interface ScholarshipResult {
  scholarships: ScholarshipMatch[];
  nextSteps: string;
}

export async function getScholarshipMatches(data: {
  educationLevel: string;
  incomeRange: string;
  fieldOfInterest: string;
  additionalInfo?: string;
}): Promise<ScholarshipResult> {
  try {
    const response = await fetch('/api/scholarship-match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch scholarship matches');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching scholarship matches:', error);
    throw error;
  }
}

export async function sendChatMessage(message: string, sessionId: string): Promise<{ message: string }> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, sessionId }),
    });

    if (!response.ok) {
      throw new Error('Failed to send chat message');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
}
