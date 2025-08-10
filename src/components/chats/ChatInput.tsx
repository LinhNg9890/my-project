'use client';
import { useState } from 'react';

export default function ChatInput() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
      <input
        type="text"
        className="w-full p-2 rounded bg-white-300 border border-gray-700 text-black"
        placeholder="Send a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
}
