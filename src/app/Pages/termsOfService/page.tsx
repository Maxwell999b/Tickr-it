import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mountain, ArrowRight } from "lucide-react";

export default function Terms_Of_ServicePage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using Tickr✔it, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.",
    },
    {
      title: "Description of Service",
      content:
        "Tickr✔it provides a task management platform designed to help individuals and teams organize, track, and complete tasks efficiently. Features may include, but are not limited to, task creation, assignment, prioritization, and progress tracking.",
    },
    {
      title: "User Accounts",
      content:
        "To use certain features of Tickr✔it, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
    },
    {
      title: "User Conduct",
      content:
        "You agree to use Tickr✔it only for lawful purposes and in accordance with these Terms. You agree not to use Tickr✔it in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of Tickr✔it.",
    },
    {
      title: "Intellectual Property",
      content:
        "The content, features, and functionality of Tickr✔it are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, create derivative works of, publicly display, publicly perform, republish, or transmit any of the material on Tickr✔it without our prior written consent.",
    },
    {
      title: "Privacy",
      content:
        "Your use of Tickr✔it is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.",
    },
    {
      title: "Termination",
      content:
        "We reserve the right to terminate or suspend your account and access to Tickr✔it at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users of Tickr✔it, us, or third parties, or for any other reason.",
    },
    {
      title: "Disclaimer of Warranties",
      content:
        "Tickr✔it is provided on an 'as is' and 'as available' basis. We make no representations or warranties of any kind, express or implied, as to the operation of Tickr✔it or the information, content, materials, or products included on Tickr✔it.",
    },
    {
      title: "Limitation of Liability",
      content:
        "In no event shall Tickr✔it, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, Tickr✔it.",
    },
    {
      title: "Changes to Terms",
      content:
        "We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of Tickr✔it following any changes indicates your acceptance of the new Terms of Service.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl text-pink-600 md:text-5xl font-bold text-center mb-8">Terms of Service</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Please read these Terms of Service carefully before using Tickr<span className="text-primary">✔</span>it.{" "}
          <span className="text-pink-600">By using our service, you agree to be bound by these terms.</span>
        </p>
        <div className="flex items-center justify-between mb-8 mt-8">
          <Button className="absolute right-0  mt-4 m-6">
            <Link href="/" className="flex items-center">
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-header">
                <span className="text-primary"> {index + 1}. </span>
                {section.title}
              </h2>
              <p className="text-muted-foreground">{section.content}</p>
            </div>
          ))}
          <div className="mt-12 bg-gray-500/10  rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              privacy policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </div>
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
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:support@tickrit.com" className="text-primary hover:underline">
              support@tickrit.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
