import { Card, CardContent } from "@/components/ui/card";

export default function AboutUsPage() {
  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">About Us</h1>
              <p className="text-muted-foreground">Learn more about our company and our mission.</p>
            </div>
            <Card>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <h2 className="text-2xl font-bold">Our Story</h2>
                    <p>
                      Acme Inc. was founded in 2010 with the goal of creating innovative products that make
                      people&apos;s lives easier. Over the years, we&apos;ve grown into a leading technology company
                      with a global presence and a team of talented professionals.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                    <p>
                      Our mission is to empower individuals and businesses with the tools they need to succeed in the
                      digital age. We strive to create products that are not only technologically advanced, but also
                      user-friendly and accessible to all.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h2 className="text-2xl font-bold">Our Values</h2>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Integrity: We are committed to honesty and ethical behavior in all our dealings.</li>
                      <li>Innovation: We constantly seek new ways to improve our products and services.</li>
                      <li>
                        Collaboration: We believe in the power of teamwork and work closely with our customers and
                        partners.
                      </li>
                      <li>
                        Sustainability: We are dedicated to minimizing our environmental impact and promoting
                        sustainable practices.
                      </li>
                    </ul>
                  </div>
                  <div className="grid gap-2">
                    <h2 className="text-2xl font-bold">Our Team</h2>
                    <p>
                      At Acme Inc., we have assembled a talented and diverse team of professionals who are passionate
                      about what they do. From our engineers and designers to our customer support staff, everyone at
                      Acme is committed to delivering the best possible experience to our customers.
                    </p>
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
