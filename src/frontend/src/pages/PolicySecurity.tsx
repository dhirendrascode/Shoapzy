import {
  CheckCircle,
  Eye,
  Lock,
  Server,
  Shield,
  ShoppingBag,
} from "lucide-react";
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

const securityFeatures = [
  {
    Icon: Lock,
    title: "256-bit SSL Encryption",
    desc: "Every page on Shoapzy is served over HTTPS with TLS 1.3 encryption. Your connection is always secure.",
  },
  {
    Icon: Shield,
    title: "PCI-DSS Compliance",
    desc: "Our payment processing meets the highest global standard (PCI-DSS Level 1). Card details are never stored on our servers.",
  },
  {
    Icon: Eye,
    title: "Fraud Detection",
    desc: "Real-time AI-powered fraud monitoring flags suspicious transactions. Unusual login attempts trigger automatic alerts.",
  },
  {
    Icon: Server,
    title: "Data Security",
    desc: "User data is stored on secure distributed infrastructure with automatic backups, encryption at rest, and strict access controls.",
  },
];

export default function PolicySecurity() {
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
          <h1 className="text-3xl font-bold mb-2">Security</h1>
          <p className="text-blue-100 text-sm">
            How we protect your data, payments, and privacy on Shoapzy.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Policy" },
            { label: "Security" },
          ]}
        />

        {/* Trust Banner */}
        <section
          className="rounded-lg p-5 mb-8 flex items-center gap-4 border border-border"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          <Shield
            size={32}
            style={{ color: "#2874f0" }}
            className="flex-shrink-0"
          />
          <div>
            <p className="font-bold text-base" style={{ color: "#2874f0" }}>
              Your security is our top priority
            </p>
            <p className="text-sm text-foreground">
              Shoapzy uses bank-grade security to protect every transaction and
              user data.
            </p>
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Security Infrastructure
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityFeatures.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card rounded-lg border border-border shadow-card p-5 flex gap-4"
              >
                <span
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "#e8f0fe" }}
                >
                  <Icon size={18} style={{ color: "#2874f0" }} />
                </span>
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-1">
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Secure Payments */}
        <section className="bg-card rounded-lg border border-border shadow-card p-6 mb-6">
          <h2 className="text-base font-bold mb-3" style={{ color: "#2874f0" }}>
            Secure Payment Practices
          </h2>
          <ul className="space-y-2">
            {[
              "All payments processed through certified, encrypted payment gateways",
              "Credit/Debit card numbers are never stored on Shoapzy servers",
              "3D Secure (OTP) authentication required for card payments",
              "UPI transactions are validated through NPCI's secure infrastructure",
              "All COD amounts are tracked and verified through our logistics partners",
              "Stripe integration provides additional fraud detection for international cards",
            ].map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <CheckCircle
                  size={14}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#2874f0" }}
                />
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Account Security Tips */}
        <section className="bg-card rounded-lg border border-border shadow-card p-6 mb-6">
          <h2 className="text-base font-bold mb-3" style={{ color: "#2874f0" }}>
            Protect Your Account
          </h2>
          <ul className="space-y-2">
            {[
              "Use a strong, unique password for your Shoapzy account",
              "Never share your login credentials with anyone",
              "Shoapzy will never ask for your password via email or phone",
              "Log out of your account on shared or public devices",
              "Review your order history regularly for unauthorized activity",
              "Report suspicious activity immediately to security@shoapzy.com",
            ].map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <CheckCircle
                  size={14}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#2874f0" }}
                />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Vulnerability Reporting */}
        <section className="bg-card rounded-lg border border-border shadow-card p-6">
          <h2 className="text-base font-bold mb-3" style={{ color: "#2874f0" }}>
            Report a Security Vulnerability
          </h2>
          <p className="text-sm text-muted-foreground mb-3">
            If you discover a security vulnerability on Shoapzy, please
            responsibly disclose it to our security team. We take all reports
            seriously and respond within 48 hours.
          </p>
          <p className="text-sm text-foreground">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:security@shoapzy.com"
              className="font-semibold"
              style={{ color: "#2874f0" }}
            >
              security@shoapzy.com
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Please do not disclose security issues publicly until we have had a
            chance to address them.
          </p>
        </section>
      </div>
    </div>
  );
}
