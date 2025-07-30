import { api } from "@/api/axios";
import { useUserStore } from "@/stores/userstore";
import type { registerUserForm } from "@/types/user";
import { useMutation } from "@tanstack/react-query";

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
    const { setUser } = useUserStore()
    return useMutation({
        mutationFn: registeruser,
        onSuccess: (user) => {
            setUser(user)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}