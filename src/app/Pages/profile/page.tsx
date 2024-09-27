"use client";

import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Icon from "@/components/common/Icon";
import { useTheme } from "@/context/ThemeContext";
import { useEmailNotifications } from "@/hooks/useEmailNotifications";
import { useTwoFactorAuth } from "@/hooks/useTwoFactorAuth";
import { useTaskReminders } from "@/hooks/useTaskReminders";

export default function ProfileUserInfo() {
  const { isDarkMode } = useTheme();
  const { receiveAll } = useEmailNotifications();
  const { remindersEnabled } = useTaskReminders();
  const { twoAuthEnabled } = useTwoFactorAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <h1 className="text-2xl font-bold mb-2 text-pink-600">Profile Overview</h1>
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/pcoffe.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold text-header">John Doe</h2>
                  <p className="text-muted-foreground">john@example.com</p>
                  <Link
                    href="/Pages/settings/"
                    className="w-full bg-primary text-primary-foreground rounded-lg hover:bg-primary/30">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/70">
                      Edit Profile
                    </Button>
                  </Link>
                </div>
                <nav className="mt-8">
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#personal-info"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                        <Icon iconType="user" className="h-5 w-5" />
                        <span className="text-sky-600 dark:text-sky-400 hover:text-sky-500">Personal Information</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#account-settings"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                        <Icon iconType="settings" className="h-5 w-5" />
                        <span className="text-sky-600 dark:text-sky-400 hover:text-sky-500">Account Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#security"
                        className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                        <Icon iconType="shield" className="h-5 w-5" />
                        <span className="text-sky-600 dark:text-sky-400 hover:text-sky-500">Security</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </CardContent>
            </Card>
          </aside>

          <main className="lg:w-3/4 space-y-8">
            <Alert variant="destructive">
              <AlertTitle>Cannot modify settings here</AlertTitle>
              <AlertDescription>
                To change these settings, please visit the{" "}
                <Link
                  href="/Pages/settings/"
                  className="text-muted-foreground underline hover:text-primary transition-colors">
                  Settings Page
                </Link>
              </AlertDescription>
            </Alert>

            <Card id="personal-info">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <div
                    className="flex items-center gap-2 bg-muted
                    rounded-md p-2 text-muted-foreground">
                    <span className="font-medium">John Doe</span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <div
                    className="flex items-center gap-2 bg-muted
                    rounded-md p-2 text-muted-foreground">
                    <span className="font-medium">john@example.com</span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon iconType="check" className="h-4 w-4 text-green-500" />
                      <span className="text-sky-600 font-semibold">Verified</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <div
                    className="flex items-center gap-2 bg-muted
                    rounded-md p-2 text-muted-foreground">
                    <span className="font-medium">johndoe</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="account-settings">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email notifications for important updates</p>
                  </div>
                  <Switch id="email-notifications" checked={receiveAll} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="task-reminders">Task Reminders</Label>
                    <p className="text-sm text-muted-foreground">Get reminders for upcoming tasks</p>
                  </div>
                  <Switch id="task-reminders" checked={remindersEnabled} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="theme">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Toggle between light and dark theme</p>
                  </div>
                  <Switch id="theme" checked={isDarkMode} />
                </div>
              </CardContent>
            </Card>

            <Card id="security">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor-auth">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch id="two-factor-auth" checked={twoAuthEnabled} />
                </div>
                <div className="space-y-2">
                  <Label>Active Sessions</Label>
                  <div className="space-y-4">
                    {[
                      { location: "New York, USA", time: "2 hours ago" },
                      { location: "London, UK", time: "1 day ago" },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between bg-muted p-3 rounded-md">
                        <div>
                          <p className="font-medium">{session.location}</p>
                          <p className="text-sm text-muted-foreground">Logged in {session.time}</p>
                        </div>
                        <Button variant="outline" size="sm" className="text-red-500">
                          <Icon iconType="logOut" className="h-4 w-4 mr-2" />
                          Log out
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
