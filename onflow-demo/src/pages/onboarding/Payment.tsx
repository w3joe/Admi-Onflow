import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CreditCard, Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  cardName: z.string().min(1, "Cardholder name is required"),
  cardNumber: z.string().min(16, "Card number must be at least 16 digits").max(19, "Invalid card number"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format must be MM/YY"),
  cvv: z.string().min(3, "CVV must be 3 digits").max(4, "CVV must be 3-4 digits"),
  billingAddress: z.string().min(1, "Billing address is required"),
});

const Payment = () => {
  const [plan, setPlan] = useState("pro");
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
      billingAddress: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    navigate("/onboarding/complete");
  };

  return (
    <OnboardingLayout currentStep={5}>
      <div className="w-full max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Choose your plan
        </h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Start with a 14-day free trial. No credit card required.
        </p>

        {/* Plan Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card 
            className={`p-6 cursor-pointer transition-all duration-300 ${
              plan === "free" ? "border-primary shadow-lg" : "hover:border-primary/50"
            }`}
            onClick={() => setPlan("free")}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-4">$0</div>
              <p className="text-muted-foreground mb-6">Perfect for individuals</p>
              <ul className="text-sm space-y-2 text-left">
                <li>✓ Up to 10 pages</li>
                <li>✓ 5 GB storage</li>
                <li>✓ Basic templates</li>
                <li>✓ Personal workspace</li>
              </ul>
            </div>
          </Card>

          <Card 
            className={`p-6 cursor-pointer transition-all duration-300 relative ${
              plan === "pro" ? "border-primary shadow-lg scale-105" : "hover:border-primary/50"
            }`}
            onClick={() => setPlan("pro")}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              POPULAR
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-4">
                $12<span className="text-lg text-muted-foreground">/mo</span>
              </div>
              <p className="text-muted-foreground mb-6">For power users</p>
              <ul className="text-sm space-y-2 text-left">
                <li>✓ Unlimited pages</li>
                <li>✓ 100 GB storage</li>
                <li>✓ Premium templates</li>
                <li>✓ Team collaboration</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
          </Card>

          <Card 
            className={`p-6 cursor-pointer transition-all duration-300 ${
              plan === "enterprise" ? "border-primary shadow-lg" : "hover:border-primary/50"
            }`}
            onClick={() => setPlan("enterprise")}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <p className="text-muted-foreground mb-6">For organizations</p>
              <ul className="text-sm space-y-2 text-left">
                <li>✓ Everything in Pro</li>
                <li>✓ Unlimited storage</li>
                <li>✓ Advanced security</li>
                <li>✓ Custom integrations</li>
                <li>✓ Dedicated support</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Payment Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="p-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Payment details</h2>
              </div>

              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="cardName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cardholder name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card number</FormLabel>
                      <FormControl>
                        <Input placeholder="1234 5678 9012 3456" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="expiry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry date</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input placeholder="123" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="billingAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Billing address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, City, Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-accent/50 rounded-lg p-4 flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">Secure payment</p>
                    <p className="text-muted-foreground">
                      Your payment information is encrypted and secure. We never store your card details.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center mt-8">
              <Button 
                type="submit"
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={!form.formState.isValid}
              >
                Complete setup <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </OnboardingLayout>
  );
};

export default Payment;
