"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Enter a valid email"),
  whatsapp: z.string().min(6, "Enter a valid number"),
  city: z.string().min(1, "Required"),
  state: z.string().min(1, "Required"),
  country: z.string().min(1, "Select a country"),
  age: z.string().min(1, "Required"),
  gender: z.enum(["female", "male"], { required_error: "Select gender" }),
  profession: z.enum(["employed", "unemployed", "student", "other"], {
    required_error: "Select your profession",
  }),
  hearAbout: z.enum(["twitter", "whatsapp", "website", "friend", "other"], {
    required_error: "Select an option",
  }),
  experience: z.enum(["beginner", "intermediate", "expert"], {
    required_error: "Select your level",
  }),
  consent: z.boolean().optional(),
  notes: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function ApplyNowPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      whatsapp: "",
      city: "",
      state: "",
      country: "",
      age: "",
      gender: undefined,
      profession: undefined,
      hearAbout: undefined,
      experience: undefined,
      consent: false,
      notes: "",
    },
  })

  function onSubmit(values: FormValues) {
    // TODO: Wire up to backend or email service
    console.log("Application submitted", values)
  }

  return (
    <div className="w-full py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-[12px] border border-gray-200 bg-white px-8 py-4 shadow-[inset_0_0_3px_1px_rgba(0,0,0,0.5)]">
          <div className="mb-6 text-center">
            <h1 className="text-xl font-bold sm:text-2xl">Fill The Form Below To Submit</h1>
            <p className="mt-1 text-base font-semibold">Your Application</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter first name" {...field} />
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
                        <Input placeholder="Enter last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Add country code. Eg: +256" {...field} />
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
                        <Input type="email" placeholder="Enter email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Eg: Kampala" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State/Region</FormLabel>
                      <FormControl>
                        <Input placeholder="Eg: Central Region" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Row 4 - Country full width */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="uganda">Uganda</SelectItem>
                        <SelectItem value="kenya">Kenya</SelectItem>
                        <SelectItem value="tanzania">Tanzania</SelectItem>
                        <SelectItem value="rwanda">Rwanda</SelectItem>
                        <SelectItem value="south-sudan">South Sudan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Row 5 - Age left, Gender right */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input placeholder="Eg: 22" inputMode="numeric" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex items-center gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="gender-female" />
                            <label htmlFor="gender-female" className="text-sm">Female</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="gender-male" />
                            <label htmlFor="gender-male" className="text-sm">Male</label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Profession */}
              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select your profession</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                      >
                        {[
                          { id: "employed", label: "Employed" },
                          { id: "unemployed", label: "Unemployed" },
                          { id: "student", label: "Student" },
                          { id: "other", label: "Other" },
                        ].map((opt) => (
                          <div key={opt.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt.id} id={`prof-${opt.id}`} />
                            <label htmlFor={`prof-${opt.id}`} className="text-sm">{opt.label}</label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Hear about us */}
              <FormField
                control={form.control}
                name="hearAbout"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How did you hear about us?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                      >
                        {[
                          { id: "twitter", label: "X / Twitter" },
                          { id: "whatsapp", label: "WhatsApp" },
                          { id: "website", label: "Website" },
                          { id: "friend", label: "Mentor/Family/Friend" },
                          { id: "other", label: "Other" },
                        ].map((opt) => (
                          <div key={opt.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt.id} id={`hear-${opt.id}`} />
                            <label htmlFor={`hear-${opt.id}`} className="text-sm">{opt.label}</label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Experience */}
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How would you rate your Bitcoin knowledge?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col gap-3 sm:flex-row sm:items-center"
                      >
                        {[
                          { id: "beginner", label: "Beginner" },
                          { id: "intermediate", label: "Intermediate" },
                          { id: "expert", label: "Expert" },
                        ].map((opt) => (
                          <div key={opt.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={opt.id} id={`exp-${opt.id}`} />
                            <label htmlFor={`exp-${opt.id}`} className="text-sm">{opt.label}</label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Notes */}
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Share your X handle, Telegram, website, or why you want to be part of the educational program
                    </FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="Type here..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-2">
                <Button type="submit" className="w-32">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}


