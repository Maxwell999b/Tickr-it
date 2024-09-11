import { Card, CardContent } from "@/components/ui/card";

export default function Terms_Of_ServicePage() {
  return (
    <div>
      <section className="bg-muted py-12 md:py-20">
        <div className="container space-y-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Terms of Service</h1>
              <p className="text-muted-foreground">
                Welcome to Acme Inc. By using our products and services, you agree to these terms.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="text-muted-foreground">
                These terms of service (&quot;Terms&quot;) govern your access to and use of the products and services
                provided by Acme Inc. (&quot;Acme&#39;s&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By
                accessing or using our products and services, you agree to be bound by these Terms and our Privacy
                Policy.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">2. Eligibility</h2>
              <p className="text-muted-foreground">
                Our products and services are intended for individuals who are at least 18 years old. By using our
                products and services, you represent and warrant that you are at least 18 years old and have the legal
                capacity to enter into a binding agreement.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
              <p className="text-muted-foreground">
                The content, design, and functionality of our products and services, including but not limited to text,
                graphics, logos, images, and software, are owned by Acme and are protected by copyright, trademark, and
                other intellectual property laws.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">4. Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate your access to our products and services at any time, for
                any reason, including if we reasonably believe that you have violated these Terms. You may also cancel
                your account at any time by contacting us.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall Acme be liable for any indirect, special, incidental, or consequential damages arising
                out of or in connection with your use of our products and services. Our total liability shall not exceed
                $100.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">6. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms and your use of our products and services shall be governed by and construed in accordance
                with the laws of the state of California, without giving effect to any principles of conflicts of law.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">7. Changes to these Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon
                posting the revised Terms. Your continued use of our products and services after any such changes
                constitutes your acceptance of the new Terms.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions or concerns about these Terms, please contact us at support@acme.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
