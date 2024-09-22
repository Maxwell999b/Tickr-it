import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle, Code, Zap, Target, Github } from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Simplicity",
      description: "We believe in making task management straightforward and intuitive.",
    },
    {
      icon: <Code className="w-8 h-8 text-secondary" />,
      title: "Quality Code",
      description: "We're committed to writing clean, efficient, and maintainable code.",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Innovation",
      description: "We constantly evolve our platform to meet the changing needs of users.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "User-Focused",
      description: "We put our users at the center of everything we do.",
    },
  ];

  const skills = [
    "Full-stack Development",
    "UI/UX Design",
    "Database Management",
    "API Integration",
    "Performance Optimization",
    "Responsive Design",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-pink-600"> About</span> Tickr<span className="text-primary">✔</span>it
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-sky-600 dark:text-sky-400">
          We're on a mission to revolutionize task management and{" "}
          <span className="text-pink-600">boost productivity</span> for individuals worldwide.
        </p>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Our Story</h2>
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 text-card-foreground">
            <p className="text-lg mb-6">
              Tickr✔it was born out of a simple idea: task management should be effortless and intuitive. As developers
              frustrated with overly complex productivity tools, we set out to create a solution that would simplify
              workflow management without sacrificing functionality.
            </p>
            <p className="text-lg mb-6">
              Since launching in 2020, we've grown Tickr✔it from a small side project to a platform serving thousands of
              users across the globe. Our commitment to user-centric design and continuous innovation has made Tickr✔it
              a rising star in the productivity space.
            </p>
            <p className="text-lg">
              Today, we're proud to help individuals streamline their workflows, meet deadlines, and achieve their
              goals. As we continue to develop and improve Tickr✔it, our mission remains the same: to make task
              management simple, effective, and accessible for everyone.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-muted rounded-lg p-6 flex items-start">
                <div className="mr-4 mt-1">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-header">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Meet the Developer</h2>
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 text-card-foreground">
            <Image src="/maxwell99b.svg" alt="Developer" width={200} height={200} className="rounded-full bg-muted" />
            <div>
              <Link
                href="https://github.com/Maxwell999b"
                target="_blank"
                className="hover:text-primary transition-colors">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  Abdulrahman Ahmed <Github className="inline-block stroke-pink-500" />
                </h3>
              </Link>
              <p className="text-lg mb-6 text-muted-foreground">
                Hi, I'm Abdulrahman, the solo developer behind Tickr✔it. With over a decade of experience in web
                development, I'm passionate about creating tools that make people's lives easier and more productive.
              </p>
              <h4 className="text-xl font-semibold mb-2">My Skills:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-pink-600">Join Our Journey</h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Be part of the Tickr✔it community and transform the way you manage tasks.
          </p>
          <Link href="/Pages/auth?form=register">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
