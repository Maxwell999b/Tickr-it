"use client";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import Icon from "@/components/component/Icon";
import { useState } from "react";

export default function ProfileUserInfo() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">User Profile</h1>
              <p className="text-muted-foreground">View your account settings and preferences.</p>
            </div>
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
                    <span className="font-medium">Receive all notifications</span>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="theme">Theme</Label>
                    <span className="font-medium">Light</span>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="two-factor-auth">Two-Factor Authentication</Label>
                    <div className="flex items-center gap-2">
                      <Toggle
                        variant={checked ? "outline" : "default"}
                        aria-label="Toggle two-factor authentication"
                        onChange={() => setChecked(!checked)}
                      />{" "}
                      <span>{checked ? "Enabled" : "Disabled"}</span>
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
