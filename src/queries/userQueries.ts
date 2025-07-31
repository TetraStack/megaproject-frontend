import { api } from "@/api/axios";
import type { loginInputs } from "@/pages/SignIn";
import { useAuthStore } from "@/stores/userstore";
import type { registerUserForm } from "@/types/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from 'sonner'

const checkUsername = async (username: string) => {
    await api.post(`/user/check-username/${username}`)

}

export const useCheckUsername = () => useMutation({
    mutationFn: checkUsername,
})

const registeruser = async (data: registerUserForm) => {
    const res = await api.post("/user/", data)
    return res.data.data
}

export const useRegisterUser = () => {
    const { setUser } = useAuthStore()
    return useMutation({
        mutationFn: registeruser,
        onSuccess: (user) => {
            setUser(user)
        },
        onError: (error) => {
            let message = 'Something went wrong';

            if (axios.isAxiosError(error)) {
                const status = error.response?.status;

                if (status === 429) {
                    message = 'Too many requests. Please try again later.';
                } else {
                    message = error.response?.data?.message || message;
                }
            } else if (error instanceof Error) {
                message = error.message;
            }
            toast.error(message)
        }
    })
}

const loginUser = async (data: loginInputs) => {
    const res = await api.post("/user/login", data)
    return res.data.data.profile
}

export const useLoginUser = () => {
    const { setUser } = useAuthStore()

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (user) => {
            setUser(user)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}

const logoutuser = async () => {
    const res = await api.post("user/logout")
    return res.data.message
}

export const useLogout = () => {
    const { clearUser } = useAuthStore();
    return useMutation({
        mutationFn: logoutuser,
        onSuccess: (message) => {
            clearUser()
            toast.success(message)
        },
        onError: (error) => {

        }
    })
}
