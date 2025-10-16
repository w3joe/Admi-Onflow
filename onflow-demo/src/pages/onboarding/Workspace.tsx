import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address1: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  zip: z.string().min(1, "ZIP/Postal code is required"),
  country: z.string().min(1, "Country is required"),
  company: z.string().min(1, "Company name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  department: z.string().min(1, "Department is required"),
  bio: z.string().min(1, "Professional bio is required"),
  timezone: z.string().min(1, "Timezone is required"),
  language: z.string().min(1, "Preferred language is required"),
  middleName: z.string().optional(),
  preferredName: z.string().optional(),
  altPhone: z.string().optional(),
  emergencyContact: z.string().optional(),
  address2: z.string().optional(),
  employeeId: z.string().optional(),
  manager: z.string().optional(),
  teamSize: z.string().optional(),
  startDate: z.string().optional(),
  location: z.string().optional(),
  linkedin: z.string().optional(),
  website: z.string().optional(),
  skills: z.string().optional(),
  interests: z.string().optional(),
  referral: z.string().optional(),
  comments: z.string().optional(),
});

const Workspace = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      preferredName: "",
      email: "",
      phone: "",
      altPhone: "",
      emergencyContact: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      company: "",
      jobTitle: "",
      department: "",
      employeeId: "",
      manager: "",
      teamSize: "",
      startDate: "",
      location: "",
      linkedin: "",
      website: "",
      bio: "",
      skills: "",
      interests: "",
      timezone: "",
      language: "",
      referral: "",
      comments: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    navigate("/onboarding/team");
  };

  return (
    <OnboardingLayout currentStep={2}>
      <div className="max-w-4xl mx-auto animate-fade-in w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
            <Briefcase className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Complete Your Profile
          </h1>
          <p className="text-lg text-muted-foreground">
            Please fill out all the required information below
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Middle Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your middle name" {...field} />
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
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Name</FormLabel>
                      <FormControl>
                        <Input placeholder="How should we call you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Contact Details */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@company.com" {...field} />
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
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="altPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alternative Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="emergencyContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emergency Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="Emergency contact number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Address Information */}
                <FormField
                  control={form.control}
                  name="address1"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Address Line 1 *</FormLabel>
                      <FormControl>
                        <Input placeholder="Street address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address2"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Address Line 2</FormLabel>
                      <FormControl>
                        <Input placeholder="Apartment, suite, unit, building, floor, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input placeholder="City" {...field} />
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
                      <FormLabel>State / Province *</FormLabel>
                      <FormControl>
                        <Input placeholder="State or Province" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ZIP / Postal Code *</FormLabel>
                      <FormControl>
                        <Input placeholder="ZIP or Postal Code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <FormControl>
                        <Input placeholder="Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Professional Information */}
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your job title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your department" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="employeeId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Employee ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Employee identification number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="manager"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Manager Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your manager's name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="teamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Size</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Number of team members" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Office Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Office location or remote" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>LinkedIn Profile URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Personal Website</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourwebsite.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Professional Bio *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about yourself, your experience, and what you hope to achieve..." 
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Key Skills (comma separated)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Project Management, Team Leadership, Communication..." 
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Professional Interests</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="What are your professional interests and goals?" 
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Additional Information */}
                <FormField
                  control={form.control}
                  name="timezone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Timezone *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., UTC-5, EST" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Language *</FormLabel>
                      <FormControl>
                        <Input placeholder="English, Spanish, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referral"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>How did you hear about us?</FormLabel>
                      <FormControl>
                        <Input placeholder="Referral source" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Additional Comments or Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any additional information you'd like to share..." 
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                type="submit"
                size="lg" 
                className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={!form.formState.isValid}
              >
                Continue <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </OnboardingLayout>
  );
};

export default Workspace;
