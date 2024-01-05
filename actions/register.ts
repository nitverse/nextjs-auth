"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from 'bcrypt'
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values : z.infer<typeof RegisterSchema>) => {
    // console.log(values);
    const validatedFields = RegisterSchema.safeParse(values);
    if(!validatedFields.success){
        return {error : "Invalid fields!"};
    }

    const { email , password , name} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password , 10);
    const existingUser = await getUserByEmail(email);

    if(existingUser) {
        return {error : "Email Already In Use"}
    }

    await db.user.create({
        data:{
            name,
            email,
            password: hashedPassword,
        },
    })

    //Todo : Send user verification token email

    return {success : "User Created! "};
}