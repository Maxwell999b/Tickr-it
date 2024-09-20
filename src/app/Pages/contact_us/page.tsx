import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-pink-600">Get in Touch with</span> Tickr<span className="text-primary">✔</span>it
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto ">
          Have a question or want to learn more about Tickr<span className="text-primary">✔</span>it ?{" "}
          <span className="text-pink-600">
            We&apos;re here to help! Reach out to us using the form below or through our contact information.
          </span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-600 dark:text-slate-400">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="w-full h-72 resize-none scroll-smooth focus:scroll-auto"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-muted rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-600 dark:text-slate-400">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold ">Email</h3>
                  <p className="text-muted-foreground">support@tickrit.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-secondary mr-4" />
                <div>
                  <h3 className="font-semibold ">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 555-5555</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-accent mr-4" />
                <div>
                  <h3 className="font-semibold ">Address</h3>
                  <p className="text-muted-foreground">Stadium Productivity Lane</p>
                  <p className="text-muted-foreground">Hurghada City, Egypt</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-pink-600 hover:text-pink-600/60 font-semibold">
                  Facebook
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-600/60 font-semibold">
                  Twitter
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-600/60 font-semibold">
                  instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get <span className="text-pink-600">Started</span>?
          </h2>
          <p className="text-xl mb-8">
            <span className="text-sky-600 dark:text-sky-400">
              {" "}
              Join thousands of professionals who have transformed their workflow with
            </span>{" "}
            Tickr
            <span className="text-primary">✔</span>it.
          </p>
          <Link href="/Pages/auth?form=register">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
