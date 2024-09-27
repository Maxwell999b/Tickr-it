"use client";

import { Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

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

function Layout({ children }: React.PropsWithChildren) {
  const { isDarkMode } = useTheme();

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body className={cn("antialiased min-w-[320px]", fontHeading.variable, fontBody.variable)}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow w-full max-w-[2000px] min-h-screen mx-auto px-4 md:px-6 py-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}
