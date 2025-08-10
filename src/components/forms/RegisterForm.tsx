'use client';
import { useState } from 'react';
import api from '../../services/api';

export default function RegisterForm({ onClose }: { onClose?: () => void }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // NOTE: Replace with real API
      await api.post('/api/register', { username, email, password });
      alert('Registered (demo)');
      onClose?.();
    } catch (err) {
      alert('Register failed (demo)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded shadow p-4">
      <h3 className="text-lg font-semibold mb-3">Create account</h3>
      <div className="mb-2">
        <label className="block text-sm mb-1">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="mb-2">
        <label className="block text-sm mb-1">Username</label>
        <input value={username} onChange={e => setUsername(e.target.value)} className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="mb-3">
        <label className="block text-sm mb-1">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="flex justify-end">
        <button type="submit" disabled={loading} className="px-4 py-2 bg-gray-800 text-white rounded">Create</button>
      </div>
    </form>
  );
}
