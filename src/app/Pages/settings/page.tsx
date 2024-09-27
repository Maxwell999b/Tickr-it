"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserRoundPen, BellRing, ShieldCheck, Bolt, UserRound } from "lucide-react";
import Icon from "@/components/common/Icon";
import { useTheme } from "@/context/ThemeContext";
import { useEmailNotifications } from "@/hooks/useEmailNotifications";
import { useTwoFactorAuth } from "@/hooks/useTwoFactorAuth";
import { useTaskReminders } from "@/hooks/useTaskReminders";
import { motion, AnimatePresence } from "framer-motion";
import ImageCropDialog from "@/components/common/ImageCropDialog";

const tabsWithIcons = [
  { name: "account", icon: UserRoundPen },
  { name: "notifications", icon: BellRing },
  { name: "security", icon: ShieldCheck },
  { name: "preferences", icon: Bolt },
];

export default function SettingsPageUserInformation() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { receiveAll, toggleEmailNotifications } = useEmailNotifications();
  const { remindersEnabled, toggleTaskReminders } = useTaskReminders();
  const { twoAuthEnabled, toggleTwoFactorAuth } = useTwoFactorAuth();

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [language, setLanguage] = useState("english");
  const [avatarUrl, setAvatarUrl] = useState("/pcoffe.svg");
  const [showAlert, setShowAlert] = useState(false);
  const [activeTab, setActiveTab] = useState("account");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showCropDialog, setShowCropDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setShowCropDialog(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (croppedImageUrl: string) => {
    setAvatarUrl(croppedImageUrl);
    setShowCropDialog(false);
  };

  const handleSaveChanges = () => {
    setShowAlert(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveTab(hash);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <h1 className="text-2xl font-bold mb-2 text-pink-600">Profile Settings</h1>
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={avatarUrl} className="object-cover" />
                    <AvatarFallback>
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold text-header">{name}</h2>
                  <p className="text-muted-foreground">{email}</p>
                </div>
                <nav className="mt-8">
                  <ul className="space-y-2 text-header">
                    {tabsWithIcons.map(({ name, icon: IconComponent }) => (
                      <li key={name}>
                        <Button
                          variant={activeTab === name ? "default" : "ghost"}
                          className="w-full justify-start font-bold"
                          onClick={() => handleTabChange(name)}>
                          <IconComponent className="mr-2 h-4 w-4 stroke-ndigo-600 dark:stroke-sky-400" />
                          {name.charAt(0).toUpperCase() + name.slice(1)}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </CardContent>
            </Card>
          </aside>
          <main className="lg:w-3/4">
            <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="account" className="text-sky-600 dark:text-sky-400">
                  <UserRound className="h-5 w-5 stroke-primary" />
                  Account
                </TabsTrigger>
                <TabsTrigger value="notifications" className="text-sky-600 dark:text-sky-400">
                  <BellRing className="h-5 w-5 stroke-primary" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="security" className="text-sky-600 dark:text-sky-400">
                  <ShieldCheck className="h-5 w-5 stroke-primary" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="preferences" className="text-sky-600 dark:text-sky-400">
                  <Bolt className="h-5 w-5 stroke-primary" />
                  Preferences
                </TabsTrigger>
              </TabsList>

              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Account Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={avatarUrl} className="object-cover" />
                        <AvatarFallback>
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <Button variant="secondary" onClick={() => fileInputRef.current?.click()}>
                        Change Avatar
                      </Button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleAvatarChange}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="text-muted-foreground focus:text-foreground"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="text-muted-foreground focus:text-foreground"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="language">Language</Label>
                        <Select value={language} onValueChange={setLanguage}>
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Select a language" />
                          </SelectTrigger>
                          <SelectContent className="text-muted-foreground">
                            <SelectItem value="english" className="data-[state=checked]:text-pink-700">
                              English
                            </SelectItem>
                            <SelectItem value="spanish" className="data-[state=checked]:text-pink-700">
                              Spanish
                            </SelectItem>
                            <SelectItem value="french" className="data-[state=checked]:text-pink-700">
                              French
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button className="w-full" onClick={handleSaveChanges}>
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Notification Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive email notifications for important updates
                        </p>
                      </div>
                      <Switch
                        id="email-notifications"
                        checked={receiveAll}
                        onCheckedChange={toggleEmailNotifications}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="task-reminders">Task Reminders</Label>
                        <p className="text-sm text-muted-foreground">Get reminders for upcoming tasks</p>
                      </div>
                      <Switch id="task-reminders" checked={remindersEnabled} onCheckedChange={toggleTaskReminders} />
                    </div>
                    <div className="space-y-2">
                      <Label>Notification Frequency</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent className="text-muted-foreground">
                          <SelectItem value="realtime" className="data-[state=checked]:text-pink-700">
                            Real-time
                          </SelectItem>
                          <SelectItem value="daily" className="data-[state=checked]:text-pink-700">
                            Daily Digest
                          </SelectItem>
                          <SelectItem value="weekly" className="data-[state=checked]:text-pink-700">
                            Weekly Summary
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full" onClick={handleSaveChanges}>
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">Change Password</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input
                          id="current-password"
                          type="password"
                          className="text-muted-foreground focus:text-foreground"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          className="text-muted-foreground focus:text-foreground"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          className="text-muted-foreground focus:text-foreground"
                        />
                      </div>
                      <Button className="w-full" onClick={handleSaveChanges}>
                        Update Password
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">Two-Factor Authentication</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch checked={twoAuthEnabled} onCheckedChange={toggleTwoFactorAuth} />
                      </div>
                      {twoAuthEnabled && (
                        <Button variant="outline" className="w-full">
                          <Icon iconType="qrCode" className="mr-2 h-4 w-4" />
                          Set up 2FA
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">User Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="theme-toggle">Dark Mode</Label>
                        <p className="text-sm text-muted-foreground">Toggle between light and dark theme</p>
                      </div>
                      <Switch id="theme-toggle" checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                    </div>
                    <div className="space-y-2">
                      <Label>Time Zone</Label>
                      <Select defaultValue="utc">
                        <SelectTrigger>
                          <SelectValue placeholder="Select time zone" />
                        </SelectTrigger>
                        <SelectContent className="text-muted-foreground">
                          <SelectItem value="utc" className="data-[state=checked]:text-pink-700">
                            UTC
                          </SelectItem>
                          <SelectItem value="est" className="data-[state=checked]:text-pink-700">
                            Eastern Time
                          </SelectItem>
                          <SelectItem value="pst" className="data-[state=checked]:text-pink-700">
                            Pacific Time
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Date Format</Label>
                      <Select defaultValue="mdy">
                        <SelectTrigger>
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent className="text-muted-foreground">
                          <SelectItem value="mdy" className="data-[state=checked]:text-pink-700">
                            MM/DD/YYYY
                          </SelectItem>
                          <SelectItem value="dmy" className="data-[state=checked]:text-pink-700">
                            DD/MM/YYYY
                          </SelectItem>
                          <SelectItem value="ymd" className="data-[state=checked]:text-pink-700">
                            YYYY-MM-DD
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full" onClick={handleSaveChanges}>
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>

      {/* Alert Overlay */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center">
            <div className="bg-green-500 text-white px-6 py-3 rounded-b-lg shadow-lg">Changes saved successfully!</div>
          </motion.div>
        )}
      </AnimatePresence>

      {showCropDialog && selectedImage && (
        <ImageCropDialog
          imageUrl={selectedImage}
          onCropComplete={handleCropComplete}
          onClose={() => setShowCropDialog(false)}
        />
      )}

      <audio ref={audioRef} src="/alert-sound.mp3" />
    </div>
  );
}
