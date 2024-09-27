import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mountain, ArrowRight, Shield, Eye, Database, Bell, Share2, Lock } from "lucide-react";

export default function Privacy_PolicyPage() {
  const sections = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our services.",
    },
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends and usage, and to carry out any other purpose for which the information was collected.",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "How We Store Your Information",
      content:
        "We use industry-standard security measures to protect your information. Your data is stored on secure servers and we use encryption to protect sensitive information transmitted online. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.",
    },
    {
      icon: <Share2 className="h-6 w-6 text-primary" />,
      title: "Information Sharing and Disclosure",
      content:
        "We do not share, sell, rent, or trade your personal information with third parties for their commercial purposes. We may share information as required by law, to protect rights and safety, or with your consent.",
    },
    {
      icon: <Bell className="h-6 w-6 text-primary" />,
      title: "Your Choices",
      content:
        "You can access and update certain information about you from within your Tickr✔it account. You can also opt-out of receiving promotional communications from us by following the instructions in those messages.",
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Data Retention",
      content:
        "We retain your information for as long as your account is active or as needed to provide you services. We will also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl text-pink-600 md:text-5xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          At Tickr<span className="text-primary">✔</span>it,{" "}
          <span className="text-pink-600">we take your privacy seriously.</span> This policy describes how we collect,
          use, and handle your personal information.
        </p>
        <div className="flex items-center justify-between mb-8 mt-8">
          <Button className="absolute right-0  mt-4 m-6">
            <Link href="/" className="flex items-center">
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-2xl font-semibold ml-2 text-header">{section.title}</h2>
              </div>
              <p className="text-muted-foreground">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-500/10 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </div>

        <div className="flex items-center justify-center mb-2 mt-2">
          <Link href="/" className="flex items-center text-2xl font-bold">
            <Mountain className="h-8 w-8 mr-2 text-primary" />
            Tickr<span className="text-primary">✔</span>it
          </Link>
        </div>
        <div className="mt-4 text-center">
          <p className="mb-4">
            Last updated: <span className="text-zinc-600 font-medium"> 19 Sep 2024</span>
          </p>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:support@tickrit.com" className="text-primary hover:underline">
              support@tickrit.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
