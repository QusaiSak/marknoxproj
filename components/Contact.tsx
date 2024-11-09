"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Component() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (!formRef.current) return;

    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl space-y-8">
        <h1 className="text-3xl font-bold text-center mb-12">Contact Me</h1>

        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="What should I call you?"
                {...form.register("name")}
                name="name"
              />
              {form.formState.errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Input
                placeholder="Where can I reach you?"
                type="email"
                {...form.register("email")}
                name="email"
              />
              {form.formState.errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Textarea
              placeholder="....."
              {...form.register("message")}
              name="message"
              className="min-h-[150px]"
            />
            {form.formState.errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <Button type="submit" disabled={loading} className="px-8">
              {loading ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
        <div  className="border-b-4 w-full h-2"/>
        <p className="text-center text-sm ">
          Or send me a direct email at{" "}
          <a href="mailto:qusaisakerwala@gmail.com" className="underline">
            qusaisakerwala@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
