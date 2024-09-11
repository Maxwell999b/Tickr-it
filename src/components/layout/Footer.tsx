import Link from "next/link";
import Icon from "../component/Icon";
export function Footer() {
  return (
    <div>
      <footer className="bg-muted py-6 w-full">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Icon iconType="mountain" className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <p className="text-sm text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/Pages/termsOfService/" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="/Pages/privacyPolicy/" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/Pages/contact_us/" className="text-sm hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:underline">
              support@acme.com
            </a>
            <a href="#" className="text-sm hover:underline">
              +1-555-555-5555
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              <Icon iconType="facebook" className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              <Icon iconType="twitter" className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              <Icon iconType="instagram" className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}>
              <Icon iconType="mailOpen" className="h-5 w-5 mr-2" />
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
