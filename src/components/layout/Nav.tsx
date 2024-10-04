"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useTheme } from "@/context/ThemeContext";
import {
  Mountain,
  Home,
  LayoutDashboard,
  Users,
  ShieldHalf,
  DollarSign,
  HelpCircle,
  CircleGauge,
  Info,
  Mail,
  User,
  Settings,
  LogOut,
  Search,
  Plus,
  Menu,
  Sun,
  Moon,
} from "lucide-react";
import Add_New_Task from "../tasks/Add_New_Task";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/Pages/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/Pages/Collaboration", icon: Users, label: "Collaboration" },
  { href: "/Pages/Collaboration/Teams", icon: ShieldHalf, label: "Teams" },
  { href: "/Pages/admin_dashboard", icon: CircleGauge, label: "Admin Dashboard" },
  { href: "/Pages/earnings", icon: DollarSign, label: "Earnings" },
  { href: "/Pages/help_faq", icon: HelpCircle, label: "Help & FAQ" },
  { href: "/Pages/about_us", icon: Info, label: "About Us" },
  { href: "/Pages/contact_us", icon: Mail, label: "Contact Us" },
];

export function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="w-full bg-background shadow">
      <div className="max-w-[2000px] mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">
            Tickr<span className="text-primary">✔</span>it
          </span>
        </Link>

        {/* Desktop View */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tasks..."
              className="pl-10 pr-12 py-2 rounded-md w-full bg-muted text-muted-foreground focus:ring-0 focus:border-primary"
            />
          </div>
          <Add_New_Task />
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col gap-2 py-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2" prefetch={false} onClick={() => setIsOpen(false)}>
                    <Mountain className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">
                      Tickr<span className="text-primary">✔</span>it
                    </span>
                  </Link>
                  <Button variant="outline" size="icon" onClick={toggleDarkMode}>
                    {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    <span className="sr-only">Toggle dark mode</span>
                  </Button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "bg-secondary text-primary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                      prefetch={false}
                      onClick={() => setIsOpen(false)}>
                      <item.icon className="h-5 w-5 stroke-primary" />
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input type="search" placeholder="Search tasks..." className="pl-10 pr-4 py-2 w-full" />
                  </div>
                    <Add_New_Task/>
                </div>

                <div className="mt-auto">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/pcoffe.svg" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="text-sm font-medium text-header">John Doe</p>
                          <p className="text-xs text-muted-foreground">john@example.com</p>
                        </div>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[300px]">
                      <DropdownMenuItem>
                        <Link
                          href="/Pages/profile"
                          className="flex items-center gap-2 w-full"
                          prefetch={false}
                          onClick={() => setIsOpen(false)}>
                          <User className="h-4 w-4 text-primary" />
                          <span>Profile</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/Pages/settings"
                          className="flex items-center gap-2 w-full"
                          prefetch={false}
                          onClick={() => setIsOpen(false)}>
                          <Settings className="h-4 w-4 text-primary" />
                          <span>Settings</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2 w-full text-destructive"
                          prefetch={false}
                          onClick={() => setIsOpen(false)}>
                          <LogOut className="h-4 w-4" />
                          <span>Sign Out</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Search, Add Task, and User Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/pcoffe.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <div className="flex items-center gap-2 p-2">
                <Link
                  href="/Pages/profile/"
                  className="flex items-center gap-2 w-full hover:bg-accent/50 rounded-md"
                  prefetch={false}>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/pcoffe.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-header">John Doe</p>
                    <p className="text-xs text-muted-foreground">john@example.com</p>
                  </div>
                </Link>
              </div>
              <DropdownMenuSeparator />
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href}>
                  <Link href={item.href} className="flex items-center gap-2 w-full" prefetch={false}>
                    <item.icon className="h-4 w-4 text-primary" />
                    <span>{item.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/Pages/profile" className="flex items-center gap-2 w-full" prefetch={false}>
                  <User className="h-4 w-4 text-primary" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/Pages/settings" className="flex items-center gap-2 w-full" prefetch={false}>
                  <Settings className="h-4 w-4 text-primary" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2 w-full text-destructive" prefetch={false}>
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
