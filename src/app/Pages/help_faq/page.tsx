"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import NotFoundCard from "@/components/errors/NotFoundCard";

const faqs = [
  {
    question: "How do I create a new task?",
    answer:
      "To create a new task, click on the 'Add new task' button at the top of your dashboard. Fill in the task details such as name, due date, and priority, then click 'Save' to add it to your task list.",
  },
  {
    question: "Can I set recurring tasks?",
    answer:
      "Yes, you can set recurring tasks. When creating or editing a task, look for the 'Repeat' option. You can set tasks to repeat daily, weekly, monthly, or on custom schedules.",
  },
  {
    question: "How do I change the priority of a task?",
    answer:
      "To change the priority of a task, open the task details and look for the priority dropdown menu. Select the new priority level (High, Medium, or Low) and save your changes.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Currently, Tickr✔it is available as a web application optimized for mobile browsers. We're working on native mobile apps for iOS and Android, which will be released in the near future.",
  },
  {
    question: "How can I organize my tasks into projects?",
    answer:
      "To organize tasks into projects, first create a project by clicking on 'New Project' in the sidebar. Then, when creating or editing a task, you can assign it to a specific project using the project dropdown menu.",
  },
  {
    question: "Can I collaborate with my team on Tickr✔it?",
    answer:
      "Yes, Tickr✔it supports team collaboration. You can invite team members to your workspace, assign tasks to specific individuals, and share projects. Look for the 'Team' section in your account settings to manage collaborators.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on the 'Forgot password?' link on the login page. Enter your email address, and we'll send you instructions to reset your password. Follow the link in the email to create a new password.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take data security seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and regularly update our systems to protect your information.",
  },
];

export default function HelpFAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">Help & FAQ</h1>

        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 bg-card text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none focus:bg-muted"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span className="font-medium text-sky-800 dark:text-sky-500 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-pink-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-pink-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-muted">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && <NotFoundCard />}

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground font-semibold">Can&apos;t find what you&apos;re looking for?</p>
          <Link
            href="/Pages/contact_us"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
