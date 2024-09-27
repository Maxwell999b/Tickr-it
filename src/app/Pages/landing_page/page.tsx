"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Icon from "@/components/common/Icon";
import { Navigation } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function LandingPage() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.5 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.5 });

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="before:block before:absolute before:-inset-0 before:-skew-y-2 before:bg-accent relative inline-block">
                      <span className="relative text-muted">Effortless Task</span>
                    </span>
                    <span className="text-pink-600">Management with </span>
                    Tickr
                    <span className="text-primary">✔</span>
                    it.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Tickr✔it is a powerful task management application that helps you stay organized and on top of your
                    to-do list. With features like task prioritization, due date reminders, and recurring tasks,
                    you&apos;ll never miss a beat.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/Pages/auth?form=register"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Get Started
                  </Link>
                  <Link
                    href="/Pages/learn_more"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-accent bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Learn More
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
                <Image
                  src="/lp_building.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-fit sm:w-full lg:order-last lg:aspect-square"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
        <motion.section
          ref={featuresRef}
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100/90 dark:bg-blue-100/10 px-3 py-1 text-sm text-accent">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  <span className="text-blue-500 dark:text-blue-400">Streamline Your Workflow with </span>
                  Tickr
                  <span className="text-primary">✔</span>
                  it.
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tickr✔it offers a suite of powerful features to help you manage your tasks and stay organized.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
                <Image
                  src="/lp_heatmap.svg"
                  width="550"
                  height="310"
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden object-fit sm:w-full lg:order-first"
                />
              </motion.div>
              <div className="flex flex-col justify-center space-y-6">
                <ul className="space-y-6">
                  {[
                    {
                      icon: "clipboard",
                      title: "Task Management",
                      description:
                        "Easily create, organize, and track your personal tasks to stay focused and productive.",
                    },
                    {
                      icon: "focus",
                      title: "Task Prioritization",
                      description: "Prioritize your tasks to ensure you're focusing on the most important items.",
                    },
                    {
                      icon: "timer",
                      title: "Due Date Reminders",
                      description: "Never miss a deadline with customizable due date reminders.",
                    },
                    {
                      icon: "repeat",
                      title: "Recurring Tasks",
                      description:
                        "Set up recurring tasks to streamline your workflow and never forget important tasks.",
                    },
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                      className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Icon
                          iconType={feature.icon as "clipboard" | "focus" | "timer"}
                          className="h-12 w-10 text-primary"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-header">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
        <section id="register" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                <span className="text-pink-600"> Ready</span> to Start?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up for Tickr
                <span className="text-primary">✔</span>it. today and begin transforming the way you manage your tasks.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="/Pages/auth?form=register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Register Now
              </Link>
              <Link
                href="/Pages/auth/"
                className="inline-flex h-10 items-center justify-center rounded-md border border-accent bg-secondary px-8 text-sm font-semibold shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Login
              </Link>
            </div>
          </div>
        </section>
        <section id="TaskManagement" className="w-full py-12 md:py-24 lg:py-2 bg-muted rounded-lg">
          <Image
            src="/engineers.svg"
            alt="About"
            className="mx-auto h-48 w-full overflow-hidden"
            width="550"
            height="100"
          />
        </section>
        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          id="about"
          className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-accent">About Tickr✔it</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  <span className="text-pink-600">Streamline Your Workflow with</span> Tickr
                  <span className="text-primary">✔</span>it.
                </h2>
                <Link
                  href="/Pages/about_us/"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-accent">Our Mission</div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  At Tickr<span className="text-primary">✔</span>it, our mission is to help individuals stay organized
                  and on top of their tasks. We believe that by providing a powerful yet intuitive task management
                  solution, we can help our users achieve their goals and increase their productivity.
                </p>
                <Link
                  href="/Pages/contact_us/"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-accent bg-secondary px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          ref={contactRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                <Navigation className="inline-block fill-sky-400" />
                Get in{" "}
                <span
                  className="text-pink-600 underline decoration-accent decoration-wavy underline-offset-2 decoration-2
">
                  Touch
                </span>
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a question or want to learn more about Tickr<span className="text-primary">✔</span>it? Don&apos;t
                hesitate to reach out!
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Contact Us</Button>
              </form>
              <p className="text-xs text-muted-foreground">We&apos;ll get back to you as soon as possible.</p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
