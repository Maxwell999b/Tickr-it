import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, ListTodo, Zap, Users, BarChart, ShieldQuestion } from "lucide-react";
import Link from "next/link";
export default function LearnMore() {
  const features = [
    {
      icon: <ListTodo className="w-8 h-8 text-primary" />,
      title: "Task Management",
      description: "Easily create, assign, and track tasks to keep your team on the same page.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Task Prioritization",
      description: "Prioritize your tasks to ensure you're focusing on the most important items.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Due Date Reminders",
      description: "Never miss a deadline with customizable due date reminders.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Recurring Tasks",
      description: "Set up recurring tasks to streamline your workflow and ensure nothing falls through the cracks.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Collaboration",
      description: "Collaborate seamlessly with your team, assign tasks, and track progress together.",
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Progress Tracking",
      description: "Visualize your productivity with intuitive charts and progress indicators.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-pink-600">Discover the Power of </span>Tickr
          <span className="text-primary">✔</span>it
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Tickr<span className="text-primary">✔</span>it is more than just a task manager.{" "}
          <span className="text-pink-600">It&apos;s your personal productivity companion</span>,{" "}
          <span className="text-sky-600 font-semibold">designed to help you achieve more with less stress</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-2 text-header">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost <span className="text-pink-600">Your Productivity</span>?
          </h2>
          <p className="text-xl mb-8">
            <span className="text-sky-600 dark:text-sky-400">
              {" "}
              Join thousands of professionals who have transformed their workflow with
            </span>{" "}
            Tickr
            <span className="text-primary">✔</span>it.
          </p>
          <Link href="/Pages/auth/">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
              Get Started Now
            </Button>
          </Link>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-pink-500">Still have questions</span>{" "}
            <ShieldQuestion className="inline-block fill-sky-400" />
          </h3>
          <p className="mb-6 ">
            <span className="text-muted-foreground"> Our support team is here to help you make the most of</span> Tickr
            <span className="text-primary">✔</span>it.
          </p>
          <Link href="/Pages/contact_us/">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition duration-300">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
