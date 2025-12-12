import { compare } from "bcryptjs"

export async function HashPassword (password){
    const hashedPassword = await hash(password, 12)
    return hashedPassword
}

export async function VerifyPassword (password, hashed){
    return await compare(password, hashed)
}

export function separator(price) {
  price.toLocaleString("fa-IR") + " تومان";
}