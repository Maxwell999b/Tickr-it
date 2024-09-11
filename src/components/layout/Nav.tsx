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

export function Navbar() {
  return (
    <div>
      <header className="w-full bg-background shadow">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Icon iconType="mountain" size={24} className="h-6 w-6" />
            <span className="text-blue-500 font-serif font-bold ">
              Tickr
              <span className="text-green-900 font-mono font-semibold ">✔</span>
              <span className="text-pink-300 font-sans font-extrabold line-through decoration-slate-900/40 decoration-2">
                it.
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 leading-none">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">john@example.com</div>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <Icon iconType="layoutDashboard" size={16} className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <Icon iconType="settings" size={16} className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <Icon iconType="wallet" size={16} className="h-4 w-4" />
                  <span>Earnings</span>
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Icon iconType="menu" size={24} className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 p-4">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <Icon iconType="home" size={20} className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <Icon iconType="info" size={20} className="h-5 w-5" />
                  <span>About</span>
                </Link>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <Icon iconType="mail" size={20} className="h-5 w-5" />
                  <span>Contact</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
