"use client";

import { FC } from 'react'
import CardWrapper from './CardWrapper'
import { useForm } from 'react-hook-form'
import * as z from 'zod';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form';
import { Input } from '../input';
import { Button } from '../button';
import FormError from '../FormError';
import FormSuccess from '@/components/FormSuccess';

interface LoginFormProps {
  
}

type loginSchemaType = z.infer<typeof LoginSchema>;

const LoginForm: FC<LoginFormProps> = ({}) => {

  const form = useForm<loginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues:{
      email : "",
      password: "",
    }
  });

  const onSubmit = (values : z.infer<typeof LoginSchema>) => {
      console.log(values);
      
  }
  return (

    <CardWrapper headerLabel='Welcome Back!' backButtonHref='/auth/register' backButtonLabel="Don't Have an Account?" showSocial>
      <Form {...form}>
        <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6'>
            <div className='space-y-4'>
                <FormField control={form.control} name='email' render={({ field }) => (
                  <FormItem>
                    <FormLabel> Email </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='test@localhost.com' type='email'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name='password' render={({ field }) => (
                  <FormItem>
                    <FormLabel> Password </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='********' type='password'/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
            </div>
            <FormSuccess message=''/>
            <FormError message=''/> 
            <Button type='submit' className='w-full bg-violet-800 hover:bg-violet-950'>
                  Login
            </Button>
        </form>
      </Form>
    </CardWrapper>
)
}

export default LoginForm