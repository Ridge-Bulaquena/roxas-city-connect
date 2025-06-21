
import { useState, useEffect } from 'react';

interface PersonalizationState {
  userType: 'resident' | 'official' | 'visitor';
  lastPageVisited: string;
  location: string;
  hasVoted: boolean;
  openComplaints: string[];
  language: 'en' | 'fil';
  notifications: string[];
}

export const usePersonalization = () => {
  const [state, setState] = useState<PersonalizationState>(() => {
    const stored = localStorage.getItem('roxas-user-preferences');
    return stored ? JSON.parse(stored) : {
      userType: 'visitor',
      lastPageVisited: '/',
      location: '',
      hasVoted: false,
      openComplaints: [],
      language: 'en',
      notifications: []
    };
  });

  useEffect(() => {
    localStorage.setItem('roxas-user-preferences', JSON.stringify(state));
  }, [state]);

  const setUserType = (type: 'resident' | 'official' | 'visitor') => {
    setState(prev => ({ ...prev, userType: type }));
  };

  const toggleVote = () => {
    setState(prev => ({ ...prev, hasVoted: !prev.hasVoted }));
  };

  const addComplaint = (id: string) => {
    setState(prev => ({ 
      ...prev, 
      openComplaints: [...prev.openComplaints, id] 
    }));
  };

  return {
    ...state,
    setUserType,
    toggleVote,
    addComplaint,
    setState
  };
};
