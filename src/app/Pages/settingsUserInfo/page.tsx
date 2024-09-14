"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useTheme } from "@/hooks/ThemeContext";
import { useEmailNotifications } from "@/hooks/useEmailNotifications";
import { useTwoFactorAuth } from "@/hooks/useTwoFactorAuth";
import { useTaskReminders } from "@/hooks/useTaskReminders";
export default function SettingsPageUserInformation() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { receiveAll, toggleEmailNotifications } = useEmailNotifications();
  const { remindersEnabled, toggleTaskReminders } = useTaskReminders();
  const { twoAuthEnabled, toggleTwoFactorAuth } = useTwoFactorAuth();

  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Settings</h1>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" type="text" defaultValue="John Doe" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="profile-picture">Profile Picture</Label>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Button variant="outline">Upload New</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button className="ml-auto">Update Password</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">
                          {receiveAll ? "Receive all notifications" : "Receive none"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {receiveAll
                            ? "Get notified about all activities and updates."
                            : "Turn off all email notifications."}
                        </p>
                      </div>
                      <Switch
                        id="notifications-toggle"
                        checked={receiveAll}
                        onCheckedChange={toggleEmailNotifications}
                        className="ml-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Task Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Reminders</p>
                        <p className="text-sm text-muted-foreground">
                          Set reminders to ensure tasks are completed on time.
                        </p>
                      </div>
                      <Switch
                        id="reminders"
                        checked={remindersEnabled}
                        onCheckedChange={toggleTaskReminders}
                        className="ml-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Theme</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
                        <p className="text-sm text-muted-foreground">
                          {isDarkMode ? "Use a dark color scheme." : "Use a light color scheme."}
                        </p>
                      </div>
                      <Switch
                        id="theme-toggle"
                        checked={isDarkMode}
                        onCheckedChange={toggleDarkMode}
                        className="ml-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{twoAuthEnabled ? "Enabled" : "Disabled"}</p>
                        <p className="text-sm text-muted-foreground">
                          {twoAuthEnabled
                            ? "Two-factor authentication is turned on."
                            : "Two-factor authentication is turned off."}
                        </p>
                      </div>
                      <Switch
                        id="2fa-toggle"
                        checked={twoAuthEnabled}
                        onCheckedChange={toggleTwoFactorAuth}
                        className="ml-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
