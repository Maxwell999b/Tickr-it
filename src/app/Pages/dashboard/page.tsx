"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Icon from "@/components/common/Icon";
import { MainYourTask } from "@/components/tasks/MainYourTask";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  const stats = [
    { name: "Tasks Completed This Week", value: 15, total: 20, color: "bg-primary" },
    { name: "On-time Completion Rate", value: 90, total: 100, color: "bg-green-500" },
    { name: "Task Efficiency Score", value: 85, total: 100, color: "bg-blue-500" },
    { name: "Team Collaboration Index", value: 75, total: 100, color: "bg-purple-500" },
  ];
  const deadlines = [
    { task: "Complete project proposal", daysLeft: 2, status: "warning" },
    { task: "Team meeting preparation", daysLeft: 4, status: "info" },
    { task: "Prepare presentation", daysLeft: 5, status: "info" },
    { task: "Submit quarterly report", daysLeft: 1, status: "danger" },
    { task: "Update LinkedIn profile", daysLeft: 1, status: "danger" },
    { task: "Team meeting preparation", daysLeft: 14, status: "success" },
    { task: "Update LinkedIn profile", daysLeft: 30, status: "success" },
  ];
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
                {deadlines.map((deadline, index) => (
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b last:border-b-0">
                    <span className="text-muted-foreground mb-1 sm:mb-0">{deadline.task}</span>
                    <span className={`text-sm font-medium ${getStatusColor(deadline.status)}`}>
                      {deadline.daysLeft === 1 ? "Due tomorrow" : `${deadline.daysLeft} days left`}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground hover:bg-sky-600/20 transition-colors">
            <CardHeader>
              <h2 className="text-2xl font-bold text-sky-600 dark:text-sky-400">Productivity Stats</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">{stat.name}</span>
                      <span className="text-header">
                        {stat.value}/{stat.total}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <motion.div
                        className={`${stat.color} h-2.5 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: animate ? `${(stat.value / stat.total) * 100}%` : 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <MainYourTask />
      </div>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "danger":
      return "text-red-500";
    case "warning":
      return "text-yellow-500";
    case "success":
      return "text-green-500";
    default:
      return "text-sky-500";
  }
}
