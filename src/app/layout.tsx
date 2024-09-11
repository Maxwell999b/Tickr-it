import { Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import "./globals.css";

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
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("antialiased", fontHeading.variable, fontBody.variable)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
