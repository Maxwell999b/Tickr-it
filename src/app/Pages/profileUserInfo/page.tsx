"use client";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Icon from "@/components/component/Icon";
import { useTheme } from "@/hooks/ThemeContext";
import { useEmailNotifications } from "@/hooks/useEmailNotifications";
import { useTwoFactorAuth } from "@/hooks/useTwoFactorAuth";
import { useTaskReminders } from "@/hooks/useTaskReminders";

export default function ProfileUserInfo() {
  const { isDarkMode } = useTheme();
  const { receiveAll, toggleEmailNotifications } = useEmailNotifications();
  const { remindersEnabled, toggleTaskReminders } = useTaskReminders();
  const { twoAuthEnabled, toggleTwoFactorAuth } = useTwoFactorAuth();

  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">User Profile</h1>
              <p className="text-muted-foreground">View your account settings and preferences.</p>
            </div>
            <Alert variant="destructive">
              <AlertTitle>Cannot modify settings here</AlertTitle>
              <AlertDescription>
                To change these settings, please visit the{" "}
                <Link
                  href="/Pages/settingsUserInfo/"
                  className="text-muted-foreground underline hover:text-blue-500 hover:dark:text-secondary">
                  Settings Page
                </Link>
                .
              </AlertDescription>
            </Alert>
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">John Doe</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">john@example.com</span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon iconType="check" className="h-4 w-4 text-green-500" />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="profile-picture">Profile Picture</Label>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">johndoe</span>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <div className="flex items-center gap-2">
                      <span>{receiveAll ? "Receive all notifications" : "Receive none"}</span>
                      <Switch checked={receiveAll} className="ml-auto" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reminders">Task Reminders</Label>
                    <div className="flex items-center gap-2">
                      <span>{remindersEnabled ? "Set Reminders for Tasks." : "Reminders Disabled"}</span>
                      <Switch checked={remindersEnabled} className="ml-auto" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="theme">Theme</Label>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{isDarkMode ? "Dark" : "Light"}</span>
                      <Switch checked={isDarkMode} className="ml-auto" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="two-factor-auth">Two-Factor Authentication</Label>
                    <div className="flex items-center gap-2">
                      <span>{twoAuthEnabled ? "Enabled" : "Disabled"}</span>
                      <Switch checked={twoAuthEnabled} className="ml-auto" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="active-sessions">Active Sessions</Label>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">New York, USA</p>
                          <p className="text-sm text-muted-foreground">Logged in 2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">London, UK</p>
                          <p className="text-sm text-muted-foreground">Logged in 1 day ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
