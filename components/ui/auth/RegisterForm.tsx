"use client";

import { FC, useState, useTransition } from "react";
import CardWrapper from "./CardWrapper";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { Button } from "../button";
import FormError from "../FormError";
import FormSuccess from "@/components/FormSuccess";
import { register } from "@/actions/register";

interface RegisterFormProps {}

type RegisterSchemaType = z.infer<typeof RegisterSchema>;

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  
  const [error , setError] = useState<string | undefined>('');
  const [success , setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data)=> {
        setError(data.error);
        setSuccess(data.success);
      })
    });
  };

  return (
    <CardWrapper
      headerLabel="Create An Account!"
      backButtonHref="/auth/login"
      backButtonLabel="Already Have an Account?"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Name </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nitant Makwana"
                      type="name"
                      disabled ={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Email </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="test@localhost.com"
                      type="email"
                      disabled ={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Password </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="********" type="password" disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message = {error} />
          <FormSuccess message = {success}/>
          <Button
            type="submit"
            className="w-full bg-violet-800 hover:bg-violet-950"
          >
            Create Account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
