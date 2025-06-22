import React, { useState } from 'react';

export function ScholarshipStep({ onSend, messages }) {
  const [input, setInput] = useState('');
  return (
    <div className="bg-white rounded-xl shadow p-6 border border-[#CCCCFF]">
      <div className="mb-4 h-40 overflow-y-auto bg-[#F4F4F5] rounded p-2">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'ai' ? 'text-[#3299CC]' : 'text-gray-700'}>
            <b>{m.role === 'ai' ? 'EduBot' : 'You'}:</b> {m.content}
          </div>
        ))}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSend(input);
          setInput('');
        }}
        className="flex gap-2"
      >
        <input
          className="flex-1 border rounded px-3 py-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question..."
        />
        <button type="submit" className="bg-[#3299CC] text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
} 