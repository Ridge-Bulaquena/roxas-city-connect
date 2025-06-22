import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Save, Send, Shield } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  program: z.string().min(1, "Please select a program"),
  motivation: z.string().min(50, "Please provide at least 50 characters about your motivation"),
  terms: z.boolean().refine(val => val === true, "You must agree to the terms and conditions"),
});

type FormData = z.infer<typeof formSchema>;

const STORAGE_KEY = "education_application_form";

export default function ApplicationForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      program: "",
      motivation: "",
      terms: false,
    },
  });

  // Load saved form data on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        form.reset(parsedData);
        setLastSaved(new Date(parsedData.lastSaved));
      } catch (error) {
        console.error("Error loading saved form data:", error);
      }
    }
  }, [form]);

  // Auto-save form data
  useEffect(() => {
    const subscription = form.watch((data) => {
      const formData = { ...data, lastSaved: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      setLastSaved(new Date());
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const { terms, ...applicationData } = data;
      return apiRequest("POST", "/api/program-applications", applicationData);
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your application. We'll review it and get back to you soon.",
      });
      form.reset();
      localStorage.removeItem(STORAGE_KEY);
      setLastSaved(null);
      queryClient.invalidateQueries({ queryKey: ["/api/program-applications"] });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const programs = [
    { value: "digital-literacy", label: "Digital Literacy Program" },
    { value: "adult-learning", label: "Adult Learning Program" },
    { value: "vocational-training", label: "Vocational Training" },
  ];

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader className="gradient-hero text-white">
        <CardTitle className="text-2xl">Program Application</CardTitle>
        <CardDescription className="text-blue-100">
          Fill out the form below to apply for your chosen program. Your progress is automatically saved.
        </CardDescription>
        {lastSaved && (
          <div className="flex items-center text-blue-100 text-sm mt-2">
            <Save className="w-4 h-4 mr-2" />
            <span>Last saved: {lastSaved.toLocaleTimeString()}</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your first name" 
                        {...field} 
                        className="focus-enhanced transition-enhanced"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your last name" 
                        {...field} 
                        className="focus-enhanced transition-enhanced"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com" 
                      {...field} 
                      className="focus-enhanced transition-enhanced"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel"
                      placeholder="+63 XXX XXX XXXX" 
                      {...field} 
                      className="focus-enhanced transition-enhanced"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="program"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Program of Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus-enhanced transition-enhanced">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program.value} value={program.value}>
                          {program.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why are you interested in this program?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your goals and motivation..."
                      className="resize-none h-32 focus-enhanced transition-enhanced"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Minimum 50 characters. Current: {field.value.length}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to the{" "}
                      <a href="#" className="china-blue hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="china-blue hover:underline">
                        Privacy Policy
                      </a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-500">
                <Shield className="w-4 h-4 mr-2" />
                Your information is secure and encrypted
              </div>
              <Button
                type="submit"
                disabled={submitMutation.isPending}
                className="bg-china-blue hover:bg-blue-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                {submitMutation.isPending ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
