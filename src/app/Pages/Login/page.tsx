import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function LoginPageForm() {
  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-md space-y-6">
            <div className="space-y-2 text-center m-2 p-2">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-muted-foreground">Enter your email and password to access your account.</p>
            </div>
            <Card className="p-2">
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full">Sign In</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
