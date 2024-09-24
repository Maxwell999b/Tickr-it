"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-background text-foreground"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      <div className="container mx-auto px-4 py-16">
        <motion.h1 className="text-4xl md:text-5xl font-bold text-center mb-8" variants={itemVariants}>
          <span className="text-pink-600">Get in Touch with</span> Tickr<span className="text-primary">✔</span>it
        </motion.h1>
        <motion.p className="text-xl text-center mb-16 max-w-3xl mx-auto" variants={itemVariants}>
          Have a question or want to learn more about Tickr<span className="text-primary">✔</span>it ?{" "}
          <span className="text-pink-600">
            We&apos;re here to help! Reach out to us using the form below or through our contact information.
          </span>
        </motion.p>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" variants={containerVariants}>
          <motion.div className="bg-card rounded-lg shadow-lg p-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6 text-slate-600 dark:text-slate-400">Send Us a Message</h2>
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Your Name" className="w-full" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="w-full h-72 resize-none scroll-smooth focus:scroll-auto"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div className="bg-muted rounded-lg shadow-lg p-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6 text-slate-600 dark:text-slate-400">Contact Information</h2>
            <div className="space-y-6">
              <motion.div className="flex items-center" variants={itemVariants}>
                <Mail className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold ">Email</h3>
                  <p className="text-muted-foreground">support@tickrit.com</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center" variants={itemVariants}>
                <Phone className="w-6 h-6 text-secondary mr-4" />
                <div>
                  <h3 className="font-semibold ">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 555-5555</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center" variants={itemVariants}>
                <MapPin className="w-6 h-6 text-accent mr-4" />
                <div>
                  <h3 className="font-semibold ">Address</h3>
                  <p className="text-muted-foreground">Stadium Productivity Lane</p>
                  <p className="text-muted-foreground">Hurghada City, Egypt</p>
                </div>
              </motion.div>
            </div>

            <motion.div className="mt-12" variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-pink-600 hover:text-pink-600/60 font-semibold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  Facebook
                </motion.a>
                <motion.a
                  href="#"
                  className="text-pink-600 hover:text-pink-600/60 font-semibold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  Twitter
                </motion.a>
                <motion.a
                  href="#"
                  className="text-pink-600 hover:text-pink-600/60 font-semibold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  Instagram
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="text-center" variants={containerVariants}>
          <motion.h2 className="text-3xl font-bold mb-4" variants={itemVariants}>
            Ready to Get <span className="text-pink-600">Started</span>?
          </motion.h2>
          <motion.p className="text-xl mb-8" variants={itemVariants}>
            <span className="text-sky-600 dark:text-sky-400">
              Join thousands of professionals who have transformed their workflow with
            </span>{" "}
            Tickr
            <span className="text-primary">✔</span>it.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/Pages/auth?form=register">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
                Sign Up Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
