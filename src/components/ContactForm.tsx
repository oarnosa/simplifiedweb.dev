'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import LogoDark from '@/assets/swd-logo-dark.png';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  firstname: z
    .string({ required_error: 'First name is required' })
    .min(2, { message: 'Must be 2 or more characters' }),
  lastname: z
    .string({ required_error: 'Last name is required' })
    .min(2, { message: 'Must be 2 or more characters' }),
  phone: z.string({ required_error: 'Phone number is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  company: z.string().optional(),
  message: z.string({
    required_error: 'Please include a short message on how we can help you',
  }),
});

const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: undefined,
      lastname: undefined,
      phone: undefined,
      email: undefined,
      company: undefined,
      message: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Image
          src={LogoDark}
          alt="Simplified Web.Dev Logo"
          className="w-32 lg:w-40 lg:mb-12"
        />
        <div className="w-full space-y-6 md:space-y-0 md:space-x-4 md:flex">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} className="text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} className="text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full space-y-6 md:space-y-0 md:space-x-4 md:flex">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full md:w-2/3">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} className="text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/3">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} className="text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Company Name (optional)</FormLabel>
              <FormControl>
                <Input {...field} className="text-black" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} className="text-black bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="font-semibold text-white bg-theme-secondary hover:bg-theme-secondary/90 active:bg-theme-secondary/80"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
