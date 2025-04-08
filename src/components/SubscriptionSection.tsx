
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

export function SubscriptionSection() {
  return (
    <div className="container py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Premium Betting Tips</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Unlock our highest confidence predictions
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Free Plan */}
        <Card className="border border-border h-full">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-lg">Free</CardTitle>
            <div className="mt-2">
              <span className="text-2xl font-bold">₦0</span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>3 daily betting tips</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Basic statistics</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4" />
                <span>Premium predictions</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-2">
            <Button variant="outline" size="sm" className="w-full">Get Started</Button>
          </CardFooter>
        </Card>
        
        {/* Pro Plan */}
        <Card className="border-2 border-primary shadow-lg h-full">
          <CardHeader className="text-center pb-2">
            <div className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-semibold inline-block mb-1">
              POPULAR
            </div>
            <CardTitle className="text-lg">Pro</CardTitle>
            <div className="mt-2">
              <span className="text-2xl font-bold">₦1,999</span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Everything in Free</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>10+ daily premium tips</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Advanced statistics</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-2">
            <Button size="sm" className="w-full">Subscribe Now</Button>
          </CardFooter>
        </Card>
        
        {/* VIP Plan */}
        <Card className="border border-border h-full">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-lg">VIP</CardTitle>
            <div className="mt-2">
              <span className="text-2xl font-bold">₦4,999</span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Unlimited premium tips</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>WhatsApp group access</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-2">
            <Button variant="outline" size="sm" className="w-full">Go VIP</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
