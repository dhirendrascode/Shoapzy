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

export default function PolicyPrivacy() {
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
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
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
            { label: "Privacy Policy" },
          ]}
        />

        <div
          className="rounded-lg p-4 mb-6 border border-border text-sm"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          At Shoapzy, your privacy is important to us. This policy explains what
          data we collect, how we use it, and your rights over your information.
        </div>

        <Section title="1. Information We Collect">
          <p>
            <strong>Account Information:</strong> Name, email address, phone
            number, and login credentials when you register.
          </p>
          <p>
            <strong>Transaction Information:</strong> Order history, delivery
            addresses, payment method type (not full card numbers), and order
            amounts.
          </p>
          <p>
            <strong>Device & Usage Data:</strong> IP address, browser type,
            pages visited, time spent, referring URLs, and device identifiers.
          </p>
          <p>
            <strong>Communications:</strong> Customer support interactions,
            reviews, ratings, and seller-buyer messages.
          </p>
          <p>
            <strong>Seller Information:</strong> Business name, GST number, bank
            account details (for payouts), and product listings.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-1">
            <li>Processing and fulfilling your orders</li>
            <li>
              Sending order confirmations, tracking updates, and delivery
              notifications
            </li>
            <li>
              Personalizing product recommendations based on your browsing
              history
            </li>
            <li>Processing seller payouts and commission calculations</li>
            <li>Preventing fraud and maintaining platform security</li>
            <li>Improving our platform through anonymized usage analysis</li>
            <li>Complying with legal obligations under Indian law</li>
            <li>
              Sending promotional offers (with your consent, opt-out available)
            </li>
          </ul>
        </Section>

        <Section title="3. Information Sharing">
          <p>
            Shoapzy does not sell your personal information. We share
            information with:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <strong>Sellers:</strong> Only the delivery address and order
              details needed to fulfill your order
            </li>
            <li>
              <strong>Delivery Partners:</strong> Name, phone, and address for
              order delivery
            </li>
            <li>
              <strong>Payment Processors:</strong> Transaction data for payment
              processing (Stripe, UPI providers)
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by Indian law or
              court order
            </li>
          </ul>
        </Section>

        <Section title="4. Cookies & Tracking">
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Keep you logged in (session cookies)</li>
            <li>Remember your cart and wishlist items</li>
            <li>Analyze site performance (analytics cookies)</li>
            <li>Show relevant product advertisements (marketing cookies)</li>
          </ul>
          <p className="mt-2">
            You can control cookies through your browser settings. Disabling
            cookies may affect some platform features.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain your personal data for as long as your account is active
            or as needed to provide services. Order history is retained for 7
            years for tax and legal compliance. You may request deletion of your
            account data, subject to legal retention requirements.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Access:</strong> Request a copy of your personal data
            </li>
            <li>
              <strong>Correction:</strong> Update inaccurate information in your
              account settings
            </li>
            <li>
              <strong>Deletion:</strong> Request deletion of your account and
              associated data
            </li>
            <li>
              <strong>Opt-out:</strong> Unsubscribe from marketing emails at any
              time
            </li>
            <li>
              <strong>Portability:</strong> Request your data in a
              machine-readable format
            </li>
          </ul>
          <p className="mt-2">
            To exercise your rights, contact: privacy@shoapzy.com
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>
            Shoapzy is not intended for users under 18 years of age. We do not
            knowingly collect personal information from minors. If you believe a
            minor has provided us with personal information, please contact us
            immediately.
          </p>
        </Section>

        <Section title="8. Contact Us">
          <p>
            <strong>Data Protection Officer:</strong> privacy@shoapzy.com
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
