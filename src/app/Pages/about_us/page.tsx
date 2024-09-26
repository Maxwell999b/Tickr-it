"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle, Code, Zap, Target, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="container mx-auto px-4 py-16">
        <motion.h1 className="text-4xl md:text-5xl font-bold text-center mb-8" {...fadeInUp}>
          <span className="text-pink-600"> About</span> Tickr<span className="text-primary">✔</span>it
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-16 max-w-3xl mx-auto text-sky-600 dark:text-sky-400"
          {...fadeInUp}
          transition={{ delay: 0.2 }}>
          We&apos;re on a mission to revolutionize task management and{" "}
          <span className="text-pink-600">boost productivity</span> for individuals worldwide.
        </motion.p>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Our Story</h2>
          <motion.div
            className="bg-muted rounded-lg shadow-lg p-8 md:p-12 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <p className="text-lg mb-6 leading-relaxed">
              <span className="text-pink-500 font-semibold">Tickr✔it</span> was born out of a simple idea: task
              management should be effortless and intuitive. As developers frustrated with overly complex productivity
              tools, we set out to create a solution that would simplify workflow management without sacrificing
              functionality.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Since launching in 2020, we&apos;ve grown <span className="text-pink-500 font-semibold">Tickr✔it</span>{" "}
              from a small side project to a platform serving thousands of users across the globe. Our commitment to
              user-centric design and continuous innovation has made{" "}
              <span className="text-pink-500 font-semibold">Tickr✔it</span> a rising star in the productivity space.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we&apos;re proud to help individuals streamline their workflows, meet deadlines, and achieve their
              goals. As we continue to develop and improve <span className="text-pink-500 font-semibold">Tickr✔it</span>
              , our mission remains the same: to make task management simple, effective, and accessible for everyone.
            </p>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="w-16 h-1 bg-pink-500 rounded" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-muted rounded-lg p-6 flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}>
                <div className="mr-4 mt-1">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-header">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}>
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Meet the Developer</h2>
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 text-card-foreground">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
              <Image src="/maxwell99b.svg" alt="Developer" width={200} height={200} className="rounded-full bg-muted" />
            </motion.div>
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
                Hi, I&apos;m Abdulrahman, the solo developer behind Tickr✔it. With over a decade of experience in web
                development, I&apos;m passionate about creating tools that make people&apos;s lives easier and more
                productive.
              </p>
              <h4 className="text-xl font-semibold mb-2">My Skills:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}>
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}>
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
        </motion.div>
      </div>
    </motion.div>
  );
}
