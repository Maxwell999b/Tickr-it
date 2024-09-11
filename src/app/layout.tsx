"use client";
import { Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import "./globals.css";
import { useState } from "react";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }: React.PropsWithChildren) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("antialiased", fontHeading.variable, fontBody.variable)}>
        <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
