"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, HelpCircle, Info, BadgeInfo } from "lucide-react";
import Link from "next/link";
import { Mountain } from "lucide-react";

export function WelcomeOverlay({ userName, onClose }) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleClose = () => {
    if (dontShowAgain) {
      // Save user preference to not show the welcome overlay again
      localStorage.setItem("hideWelcomeOverlay", "true");
      console.log("User preference saved: hide welcome overlay");
    }
    console.log("Closing overlay...");
    onClose(); // Call the onClose function passed from the parent
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <Card className="w-full max-w-2xl max-h-[70vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Welcome to{" "}
            <Link href="/" className=" font-bold">
              <Mountain className="h-4 w-4 inline-block text-primary" />
              Tickr<span className="text-primary">✔</span>it
            </Link>
            ,<span className="text-pink-600"> {userName}!</span>
          </CardTitle>
          <CardDescription>
            We&apos;re excited to help you boost your productivity. Let&apos;s get started!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-pink-700">Next Steps:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li className="text-rose-800 dark:text-pink-400">
                Create your first task by clicking the &quot;Add Task&quot; button on the dashboard.
              </li>
              <li className="text-rose-800 dark:text-pink-400">
                Explore the different views: List, Board, and Calendar to find what works best for you.
              </li>
              <li className="text-rose-800 dark:text-pink-400">
                Customize your profile and notification settings in the user menu.
              </li>
              <li className="text-rose-800 dark:text-pink-400">
                Invite team members to collaborate on projects and tasks.
              </li>
              <li className="text-rose-800 dark:text-pink-400">
                Check out our FAQ and Help Center for more tips and tricks.
              </li>
            </ol>
          </div>
          <Separator />
          <div>
            <h3 className="text-lg font-semibold mb-2 text-sky-700">Quick Guide:</h3>
            <ul className="space-y-2">
              <li className="flex items-start text-sky-800 dark:text-blue-200">
                <CheckCircle2 className="mr-2 h-5 w-5 fill-sky-400" />
                <span>Use tags to categorize your tasks and projects for easy filtering.</span>
              </li>
              <li className="flex items-start text-sky-800 dark:text-blue-200">
                <CheckCircle2 className="mr-2 h-5 w-5 fill-sky-400" />
                <span>Set due dates and reminders to stay on top of your deadlines.</span>
              </li>
              <li className="flex items-start text-sky-800 dark:text-blue-200">
                <CheckCircle2 className="mr-2 h-5 w-5 fill-sky-400" />
                <span>Utilize the search function to quickly find tasks and projects.</span>
              </li>
              <li className="flex items-start text-sky-800 dark:text-blue-200">
                <CheckCircle2 className="mr-2 h-5 w-5 fill-sky-400" />
                <span>Track your progress with our built-in analytics and reports.</span>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Checkbox id="dontShowAgain" checked={dontShowAgain} onCheckedChange={setDontShowAgain} />
            <Label htmlFor="dontShowAgain">Don&apos;t show this welcome screen again</Label>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex space-x-2">
              <Button variant="secondary" asChild className="text-sm px-2 py-1 flex-1">
                <Link href="/Pages/help_faq" target="_blank">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  FAQ
                </Link>
              </Button>
            </div>
            <Button onClick={handleClose}>Get Started</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
