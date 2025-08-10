'use client';
import { useState } from 'react';
import useAuthStore from '../../store/authStore';
import api from '../../services/api';

export default function LoginForm({ onClose }: { onClose?: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const login = useAuthStore(state => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // NOTE: Replace with real API
      const res = await api.post('/api/login', { username, password });
      login({ id: res.data.userId, username });
      onClose?.();
    } catch (err) {
      alert('Login failed (demo)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded shadow p-4">
      <h3 className="text-lg font-semibold mb-3">Sign In</h3>
      <div className="mb-2">
        <label className="block text-sm mb-1">Username</label>
        <input value={username} onChange={e => setUsername(e.target.value)} className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="mb-3">
        <label className="block text-sm mb-1">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="flex justify-end">
        <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">Sign In</button>
      </div>
    </form>
  );
}
