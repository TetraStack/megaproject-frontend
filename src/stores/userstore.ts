import { api } from '@/api/axios';
import { create } from 'zustand'

interface User {
    _id: string
    username: string,
    email: string,
    fullName: string,
    avatar: {
        url: string
    },
    isEmailVerified: boolean

}

interface UserState {
    user: User | null;
    loading: boolean;
    setUser: (user: User) => void
    checkUser: () => Promise<void>
    clearUser: () => void
}

export const useAuthStore = create<UserState>((set) => ({
    user: null,
    loading: true,
    setUser: (user) => set({ user }),
    checkUser: async () => {
        try {
            const res = await api.get("/user/");
            set({ user: res.data.data.profile });
        } catch (error) {
            console.log(error)
            set({ user: null });
        } finally {
            set({ loading: false });
        }
    },
    clearUser: () => set({ user: null })
}))

