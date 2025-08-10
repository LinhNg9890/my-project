'use client';
import { useState } from 'react';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import useAuthStore from '../../store/authStore';

export default function Header() {
  const [open, setOpen] = useState<'none'|'login'|'register'>('none');
  const user = useAuthStore(state => state.user);

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">Team App</div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="text-sm text-gray-700">Hello, {user.username}</div>
          ) : (
            <>
              <button onClick={() => setOpen(open === 'login' ? 'none' : 'login')} className="px-3 py-1 rounded bg-blue-600 text-white">Login</button>
              <button onClick={() => setOpen(open === 'register' ? 'none' : 'register')} className="px-3 py-1 rounded border">Register</button>
            </>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {open === 'login' && <LoginForm onClose={() => setOpen('none')} />}
        {open === 'register' && <RegisterForm onClose={() => setOpen('none')} />}
      </div>
    </header>
  );
}
