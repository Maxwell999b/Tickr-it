import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/component/Icon";
import { MainYourTask } from "@/components/component/data/MainYourTask";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex justify-center text-pink-600">Task Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card text-card-foreground hover:bg-primary/10 transition-colors">
            <CardHeader className="flex items-center justify-between">
              <div className="text-lg font-bold text-sky-600 dark:text-sky-400">Total Tasks</div>
              <Icon iconType="list" className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-center text-red-600 dark:text-red-400">42</div>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground hover:bg-green-600/10 transition-colors">
            <CardHeader className="flex items-center justify-between">
              <div className="text-lg font-bold text-sky-600 dark:text-sky-400">Completed Tasks</div>
              <Icon iconType="circleCheck" className="h-6 w-6 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-center text-green-600 dark:text-green-400">25</div>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground hover:bg-yellow-600/10 transition-colors">
            <CardHeader className="flex items-center justify-between">
              <div className="text-lg font-bold text-sky-600 dark:text-sky-400">Pending Tasks</div>
              <Icon iconType="clock" className="h-6 w-6 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-center text-yellow-600 dark:text-yellow-400">17</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card text-card-foreground hover:bg-pink-600/20 transition-colors">
            <CardHeader>
              <h2 className="text-2xl font-bold text-sky-600 dark:text-sky-400">Upcoming Deadlines</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span className="text-muted-foreground">Complete project proposal</span>
                  <span className="text-yellow-500">2 days left</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-muted-foreground">Submit quarterly report</span>
                  <span className="text-red-500">Due tomorrow</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-muted-foreground">Team meeting preparation</span>
                  <span className="text-green-500">5 days left</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground hover:bg-sky-600/20 transition-colors">
            <CardHeader>
              <h2 className="text-2xl font-bold text-sky-600 dark:text-sky-400">Productivity Stats</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">Tasks Completed This Week</span>
                    <span className="text-header">15/20</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-muted-foreground">On-time Completion Rate</span>
                    <span className="text-header">90%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <MainYourTask />
      </div>
    </div>
  );
}
