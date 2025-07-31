import { z } from "zod";

export const userSchema = z.object({
    email: z.string().email(),
    fullName: z.string(),
    password: z.string().min(6, { message: "password should be atleast 6 characters." }).max(16, { message: "Password can't be more than 16 characters" }),
    username: z.string().max(20, { message: "username is too long" }),
    repassword: z.string(),
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, { message: "password should be atleast 6 characters." }).max(16, { message: "Password can't be more than 16 characters" }),
})

export interface registerUserForm {
    fullName: string,
    username: string,
    email: string,
    password: string
}