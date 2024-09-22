import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Icon from "../../../components/component/Icon";
import { Navigation } from "lucide-react";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="text-pink-600">Effortless Task Management with </span>
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
              <Image
                src="/lp_building.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-fit sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
              <Image
                src="/lp_heatmap.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden object-fit sm:w-full lg:order-first"
              />
              <div className="flex flex-col justify-center space-y-6">
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon iconType="clipboard" className="h-12 w-10 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-header">Task Management</h3>
                      <p className="text-muted-foreground">
                        Easily create, organize, and track your personal tasks to stay focused and productive.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon iconType="focus" className="h-12 w-10 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-header">Task Prioritization</h3>
                      <p className="text-muted-foreground">
                        Prioritize your tasks to ensure you&apos;re focusing on the most important items.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon iconType="timer" className="h-12 w-10 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-header">Due Date Reminders</h3>
                      <p className="text-muted-foreground">
                        Never miss a deadline with customizable due date reminders.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon iconType="repeat" className="h-12 w-10 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-header">Recurring Tasks</h3>
                      <p className="text-muted-foreground">
                        Set up recurring tasks to streamline your workflow and never forget important tasks.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-accent">About Tickr✔it</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  <span className="text-pink-600">Streamline</span> Your{" "}
                  <span className="text-pink-600"> Workflow with</span> Tickr
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
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                <Navigation className="inline-block fill-sky-400" />
                Get in <span className="text-pink-600">Touch</span>
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
        </section>
      </main>
    </div>
  );
}
