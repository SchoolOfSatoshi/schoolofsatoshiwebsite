'use client'

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import BitcoinAnimation from "@/components/BitcoinAnimation";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real application, you would send this data to your server
    alert("Message sent successfully! We'll get back to you soon.");
    form.reset();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-16 bg-gradient-to-b from-amber-50 to-white dark:from-background dark:to-secondary/20 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <BitcoinAnimation size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Have questions about Bitcoin education? Want to learn more about our courses?
              We'd love to hear from you!
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-[5%] opacity-20 animate-float pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#f7931a">
            <circle cx="12" cy="12" r="12" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-[10%] opacity-20 animate-spin-slow pointer-events-none">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="#f7931a">
            <circle cx="12" cy="12" r="12" />
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 md:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

            {/* Contact Form */}
            <Card className="glass-card border-none shadow-xl transition-all hover:shadow-2xl">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" className="bg-white/50 dark:bg-black/20 text-foreground" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" className="bg-white/50 dark:bg-black/20 text-foreground" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What is this regarding?" className="bg-white/50 dark:bg-black/20 text-foreground" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please tell us how we can help you..."
                              className="min-h-32 bg-white/50 dark:bg-black/20 text-foreground"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-6 text-lg shadow-lg shadow-orange-500/20">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 lg:pl-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
                <p className="text-muted-foreground">
                  We're here to help you navigate the world of Bitcoin education. Reach out to us using any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                {/* Contact Cards */}
                <Card className="glass-card border-none hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Email Us</h3>
                      <p className="text-muted-foreground mb-1 text-sm">For general inquiries:</p>
                      <a href="mailto:info@schoolofsatoshi.org" className="text-primary hover:underline font-medium">
                        schoolofsatoshi016@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-none hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Call Us</h3>
                      <p className="text-muted-foreground mb-1 text-sm">Monday to Friday, 9am - 5pm:</p>
                      <a href="tel:+256701234567" className="text-primary hover:underline font-medium">
                        +256 701 234 567
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-6">
                <h3 className="font-bold mb-4 text-foreground">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z", label: "Twitter" },
                    { icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", label: "LinkedIn" },
                    { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z", label: "Instagram" },
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href="#"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-16 bg-secondary/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to some of our most commonly asked questions. If you can't find what you're looking for, please contact us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "How can I enroll in a course?",
                a: "You can enroll in any of our courses directly through our website via the programs page."
              },
              {
                q: "Do you offer any free resources?",
                a: "Yes! We provide various free resources including blog articles, introductory videos, and community events."
              }
            ].map((faq, i) => (
              <Card key={i} className="glass-card border-none hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;