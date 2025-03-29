
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

export function SubscriptionSection() {
  return (
    <div className="container py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">Premium Betting Tips</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Unlock our highest confidence predictions and maximize your betting success
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free Plan */}
        <Card className="border-2 border-border h-full">
          <CardHeader className="text-center">
            <CardTitle>Free</CardTitle>
            <CardDescription>Basic tips for casual bettors</CardDescription>
            <div className="mt-4 mb-2">
              <span className="text-3xl font-bold">₦0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>3 daily betting tips</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>Basic statistics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>Email notifications</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-5 w-5" />
                <span>Premium predictions</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-5 w-5" />
                <span>VIP expert analysis</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Get Started</Button>
          </CardFooter>
        </Card>
        
        {/* Pro Plan */}
        <Card className="border-2 border-primary shadow-lg h-full">
          <CardHeader className="text-center">
            <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold inline-block mb-2">
              MOST POPULAR
            </div>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For serious bettors</CardDescription>
            <div className="mt-4 mb-2">
              <span className="text-3xl font-bold">₦1,999</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>Everything in Free</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>10+ daily premium tips</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>Advanced statistics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>Early access to predictions</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-5 w-5" />
                <span>VIP expert analysis</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Subscribe Now</Button>
          </CardFooter>
        </Card>
        
        {/* VIP Plan */}
        <Card className="border-2 border-border h-full">
          <CardHeader className="text-center">
            <CardTitle>VIP</CardTitle>
            <CardDescription>For professional bettors</CardDescription>
            <div className="mt-4 mb-2">
              <span className="text-3xl font-bold">₦4,999</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>Unlimited premium tips</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>Expert detailed analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>1-on-1 betting consultation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-sport-green" />
                <span>WhatsApp group access</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Go VIP</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
