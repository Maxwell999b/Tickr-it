"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mountain, Mail, Lock, User } from "lucide-react";
import Link from "next/link";

function AuthPageContent() {
  const searchParams = useSearchParams();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const form = searchParams ? searchParams.get("form") : null;
    if (form === "register") {
      setIsLogin(false);
    }
  }, [searchParams]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-2xl font-bold">
            <Mountain className="h-8 w-8 mr-2 text-primary" />
            Tickr<span className="text-primary">✔</span>it
          </Link>
        </div>

        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <div
              className={`transition-all duration-500 ease-in-out ${isLogin ? "translate-x-0" : "-translate-x-full"}`}>
              <LoginForm />
            </div>
            <div
              className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                isLogin ? "translate-x-full" : "translate-x-0"
              }`}>
              <RegisterForm />
            </div>
          </div>
          <div className="p-4 bg-muted">
            <p className="text-center">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button variant="link" onClick={toggleForm} className="ml-1">
                {isLogin ? "Register" : "Login"}
              </Button>
            </p>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          By registering, you agree to our{" "}
          <Link href="/Pages/termsOfService" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/Pages/privacyPolicy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthPageContent />
    </Suspense>
  );
}

function LoginForm() {
  return (
    <form className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4 ">
        <span className="text-pink-600">Login to </span>Tickr<span className="text-primary">✔</span>it
      </h2>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
        </div>
      </div>
      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        Login
      </Button>
      <div className="text-center">
        <Link href="/Pages/forgot_pwd" className="text-sm text-primary hover:underline">
          Forgot your password?
        </Link>
      </div>
    </form>
  );
}

function RegisterForm() {
  return (
    <form className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        <span className="text-pink-600">Create an </span>Account
      </h2>
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input id="name" type="text" placeholder="Enter your full name" className="pl-10" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input id="register-email" type="email" placeholder="Enter your email" className="pl-10" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="register-password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input id="register-password" type="password" placeholder="Create a password" className="pl-10" />
        </div>
      </div>
      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        Register
      </Button>
    </form>
  );
}
