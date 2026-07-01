import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-xs text-muted-foreground mb-6 flex items-center gap-1 flex-wrap">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1">
          {i > 0 && <span>/</span>}
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "#2874f0" }} className="font-medium">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

function Section({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-card rounded-lg border border-border shadow-card p-6 mb-5">
      <h2 className="text-base font-bold mb-3" style={{ color: "#2874f0" }}>
        {title}
      </h2>
      <div className="text-sm text-foreground space-y-2 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PolicyTerms() {
  return (
    <div className="min-h-screen bg-background">
      <div
        style={{ backgroundColor: "#2874f0" }}
        className="text-white py-10 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag size={28} className="text-orange-300" />
            <span className="font-bold text-xl tracking-tight">Shoapzy</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
          <p className="text-blue-100 text-sm">
            Effective Date: January 1, 2026 · Last Updated: April 1, 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Policy" },
            { label: "Terms of Use" },
          ]}
        />

        <div
          className="rounded-lg p-4 mb-6 border border-border text-sm"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          Please read these Terms of Use carefully before using the Shoapzy
          platform. By accessing or using our services, you agree to be bound by
          these terms.
        </div>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using Shoapzy's website, mobile application, or any
            services (collectively, the "Platform"), you agree to these Terms of
            Use and our Privacy Policy. If you do not agree, you must not use
            the Platform.
          </p>
          <p>
            These terms apply to all users including buyers, sellers, and
            visitors.
          </p>
        </Section>

        <Section title="2. User Registration">
          <p>
            You must be at least 18 years of age to create an account. You agree
            to provide accurate, current, and complete registration information.
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>
          <p>
            You must notify us immediately at security@shoapzy.com if you
            suspect unauthorized access to your account.
          </p>
        </Section>

        <Section title="3. Buyer Obligations">
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide accurate delivery address and contact information</li>
            <li>Make timely payment for orders placed</li>
            <li>Not misuse the return and refund system</li>
            <li>Not submit fraudulent reviews or ratings</li>
            <li>
              Comply with all applicable Indian laws when purchasing products
            </li>
          </ul>
        </Section>

        <Section title="4. Seller Obligations">
          <ul className="list-disc pl-5 space-y-1">
            <li>Sellers must obtain admin approval before listing products</li>
            <li>
              All product descriptions, images, and prices must be accurate
            </li>
            <li>
              Sellers must not list counterfeit, illegal, or prohibited products
            </li>
            <li>Sellers must fulfill orders within agreed timelines</li>
            <li>
              Sellers must maintain adequate stock levels for listed products
            </li>
            <li>
              Sellers agree to the 10% commission structure per completed order
            </li>
            <li>
              Sellers must comply with all applicable tax obligations (GST, TDS,
              etc.)
            </li>
          </ul>
        </Section>

        <Section title="5. Prohibited Activities">
          <p>The following activities are strictly prohibited on Shoapzy:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              Listing or selling illegal, counterfeit, or hazardous products
            </li>
            <li>Creating fake accounts or impersonating other users</li>
            <li>Manipulating product reviews or ratings</li>
            <li>Using automated bots or scrapers without permission</li>
            <li>Attempting to circumvent security measures</li>
            <li>Engaging in price manipulation or collusion</li>
            <li>Conducting transactions outside the Shoapzy platform</li>
          </ul>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content on the Shoapzy platform including logos, designs, text,
            and software is owned by Shoapzy Commerce Private Limited or its
            licensors. You may not copy, reproduce, or distribute any content
            without explicit written permission.
          </p>
          <p>
            By uploading product content, sellers grant Shoapzy a non-exclusive
            license to use, display, and promote such content on the platform.
          </p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            Shoapzy acts as an intermediary marketplace. We are not the seller
            of record for products listed by third-party sellers. We are not
            liable for product quality, authenticity, or fitness for purpose of
            seller-listed items.
          </p>
          <p>
            Our liability in any circumstance shall not exceed the order value
            of the specific transaction in dispute.
          </p>
        </Section>

        <Section title="8. Governing Law">
          <p>
            These Terms of Use shall be governed by the laws of India. Any
            disputes shall be subject to the exclusive jurisdiction of courts in
            Mumbai, Maharashtra, India.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            <strong>Email:</strong> legal@shoapzy.com
          </p>
          <p>
            <strong>Address:</strong> Shoapzy Commerce Private Limited, WeWork
            Galaxy, 43 Residency Road, Bengaluru, Karnataka – 560025
          </p>
        </Section>
      </div>
    </div>
  );
}
