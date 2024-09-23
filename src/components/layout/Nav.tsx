import Link from "next/link";
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
import Icon from "../component/Icon";
import Add_New_Task from "../component/Add_New_Task";
import { useTheme } from "@/hooks/ThemeContext";
import { Mountain } from "lucide-react";
export function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <header className="w-full bg-background shadow">
        <div className="max-w-[2000px] mx-auto flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <span className="text-bold">
              <Mountain className="h-6 w-6 text-primary inline-block" />
              Tickr<span className="text-primary">✔</span>it
            </span>
          </Link>

          {/* Desktop View */}
          <div className="hidden lg:flex items-center gap-4 flex-1 justify-center">
            <div className="relative flex-1 max-w-md">
              <Icon
                iconType="search"
                size={24}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Search tasks..."
                className="pl-10 pr-12 py-2 rounded-md w-full bg-muted text-muted-foreground focus:ring-0 focus:border-primary"
              />
            </div>
            <Add_New_Task />
          </div>

          {/* Mobile View */}
          <div className="lg:hidden flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Icon iconType="menu" size={24} className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex items-center justify-between">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="flex items-center bg-primary rounded-3xl p-2 hover:bg-primary/90">
                          <Avatar className="mr-1 ">
                            <AvatarImage src="/pcoffe.svg" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <span className="font-semibold text-muted">Profile</span>
                          <Icon iconType="chevronDown" size={16} className="ml-2 h-4 w-4" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center">
                        <div className="flex items-center gap-2 p-2">
                          <Link
                            href="/Pages/profileUserInfo/"
                            className="flex items-center gap-2 p-2 bg-accent/50 rounded-3xl hover:bg-accent"
                            prefetch={false}>
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/pcoffe.svg" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-0.5 leading-none">
                              <div className="font-semibold text-violet-400">John Doe</div>
                              <div className="text-sm text-secondary-foreground">john@example.com</div>
                            </div>
                          </Link>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link href="/Pages/dashboard/" className="flex items-center gap-2" prefetch={false}>
                            <Icon iconType="layoutDashboard" size={16} className="h-4 w-4" />
                            <span>Dashboard</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/Pages/settingsUserInfo/" className="flex items-center gap-2" prefetch={false}>
                            <Icon iconType="settings" size={16} className="h-4 w-4" />
                            <span>Settings</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link href="/Pages/Collaboration/" className="flex items-center gap-2" prefetch={false}>
                            <Icon iconType="wallet" size={16} className="h-4 w-4" />
                            <span>Collaboration</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link href="#" className="flex items-center gap-2" prefetch={false}>
                            <Icon iconType="logOut" size={16} className="h-4 w-4" />
                            <span>Sign Out</span>
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="outline" size="icon" onClick={toggleDarkMode}>
                      {isDarkMode ? (
                        <Icon iconType="sun" className="h-6 w-6" />
                      ) : (
                        <Icon iconType="moon" className="h-6 w-6" />
                      )}
                      <span className="sr-only">Toggle dark mode</span>
                    </Button>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link href="/" className="flex items-center gap-2 hover:text-accent" prefetch={false}>
                      <Icon iconType="home" size={20} className="h-5 w-5" />
                      <span>Home</span>
                    </Link>
                    <Link
                      href="/Pages/about_us/"
                      className="flex items-center gap-2 hover:text-accent"
                      prefetch={false}>
                      <Icon iconType="info" size={20} className="h-5 w-5" />
                      <span>About</span>
                    </Link>
                    <Link
                      href="/Pages/contact_us/"
                      className="flex items-center gap-2 hover:text-accent"
                      prefetch={false}>
                      <Icon iconType="mail" size={20} className="h-5 w-5" />
                      <span>Contact</span>
                    </Link>
                  </div>

                  <div className="flex flex-col gap-4 mt-4">
                    <Add_New_Task />
                    <div className="relative flex-1 max-w-md">
                      <Icon
                        iconType="search"
                        size={24}
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                      />
                      <Input
                        type="search"
                        placeholder="Search tasks..."
                        className="pl-10 pr-12 py-2 rounded-md w-full bg-muted text-muted-foreground focus:ring-0 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

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
              <DropdownMenuContent align="end">
                <div className="flex items-center gap-2 p-2 bg-accent/50 rounded-sm hover:bg-accent">
                  <Link href="/Pages/profileUserInfo/" className="flex items-center gap-2" prefetch={false}>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/pcoffe.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 leading-none">
                      <div className="font-semibold text-violet-400">John Doe</div>
                      <div className="text-sm text-muted-foreground">john@example.com</div>
                    </div>
                  </Link>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/Pages/dashboard/" className="flex items-center gap-2" prefetch={false}>
                    <Icon iconType="layoutDashboard" size={16} className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Pages/settingsUserInfo/" className="flex items-center gap-2" prefetch={false}>
                    <Icon iconType="settings" size={16} className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Pages/Collaboration/" className="flex items-center gap-2" prefetch={false}>
                    <Icon iconType="wallet" size={16} className="h-4 w-4" />
                    <span>Collaboration</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <Icon iconType="logOut" size={16} className="h-4 w-4" />
                    <span>Sign Out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Icon iconType="sun" className="h-6 w-6" /> : <Icon iconType="moon" className="h-6 w-6" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
