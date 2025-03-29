
import { CheckCircle, TrendingUp, Trophy, Users } from "lucide-react";

export function StatsSection() {
  return (
    <div className="bg-secondary/50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">70%+</h3>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">15,000+</h3>
            <p className="text-muted-foreground">Happy Users</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">45,000+</h3>
            <p className="text-muted-foreground">Tips Delivered</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="bg-primary/10 p-3 rounded-full">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">$2.5M+</h3>
            <p className="text-muted-foreground">User Winnings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
