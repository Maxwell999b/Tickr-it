import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/component/Icon";
export default function ContactUsPage() {
  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground">Get in touch with us for any inquiries or feedback.</p>
            </div>
            <Card>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <h2 className="text-2xl font-bold">Send us a message</h2>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </div>
                  <div className="grid gap-2">
                    <h2 className="text-2xl font-bold">Our Contact Info</h2>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <Icon iconType="mapPin" className="h-5 w-5 text-muted-foreground" />
                        <p>123 Main St, Anytown USA</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon iconType="phone" className="h-5 w-5 text-muted-foreground" />
                        <p>+1 (555) 555-5555</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon iconType="mail" className="h-5 w-5 text-muted-foreground" />
                        <p>info@acmeinc.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
