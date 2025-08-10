import {create} from 'zustand';

type User = { id: number; username: string } | null;

interface AuthState {
  user: User;
  login: (user: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthStore;
