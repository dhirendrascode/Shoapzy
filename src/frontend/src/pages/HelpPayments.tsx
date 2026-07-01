import {
  Banknote,
  CreditCard,
  Lock,
  Shield,
  ShoppingBag,
  Smartphone,
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

const paymentMethods = [
  {
    Icon: CreditCard,
    title: "Credit & Debit Cards",
    desc: "Visa, Mastercard, RuPay, and American Express cards are accepted. 3D Secure authentication protects every transaction.",
  },
  {
    Icon: Smartphone,
    title: "UPI Payments",
    desc: "Pay instantly using any UPI app — PhonePe, Google Pay, Paytm, BHIM, and others. No transaction fees.",
  },
  {
    Icon: Banknote,
    title: "Net Banking",
    desc: "Direct bank transfer from 50+ Indian banks including SBI, HDFC, ICICI, Axis, Kotak, and all major banks.",
  },
  {
    Icon: Banknote,
    title: "Cash on Delivery (COD)",
    desc: "Pay in cash when your order arrives. Available on eligible orders up to ₹10,000. No advance payment needed.",
  },
  {
    Icon: CreditCard,
    title: "Stripe (International Cards)",
    desc: "Secure international card payments via Stripe. Supports all major global cards with real-time fraud detection.",
  },
  {
    Icon: Shield,
    title: "Wallet Payments",
    desc: "Shoapzy Loyalty Points can be redeemed as wallet credit at checkout. Earn points on every purchase.",
  },
];

const faqs = [
  {
    q: "Is my payment information secure?",
    a: "Yes. Shoapzy uses 256-bit SSL encryption for all transactions. We do not store card numbers on our servers. All payments are processed through PCI-DSS certified payment gateways.",
  },
  {
    q: "Why was my payment declined?",
    a: "Payments can be declined due to incorrect card details, insufficient funds, bank security checks, or network issues. Try again or contact your bank. You can also use a different payment method.",
  },
  {
    q: "How long does a refund take?",
    a: "Refunds are processed within 5–7 business days after approval. Credit/debit card refunds take 3–5 business days additional. COD refunds are processed via NEFT within 7–10 business days.",
  },
  {
    q: "Can I pay in EMI?",
    a: "EMI options are available on select bank credit cards for orders above ₹3,000. EMI availability is shown at checkout based on your payment method.",
  },
];

export default function HelpPayments() {
  return (
    <div className="min-h-screen bg-background">
      <div
        style={{ backgroundColor: "#2874f0" }}
        className="text-white py-10 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag size={28} className="text-orange-300" />
            <span className="font-bold text-xl tracking-tight">Shoapzy</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Payments Help</h1>
          <p className="text-blue-100 text-sm">
            Payment methods, security, and refund information.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Help", href: "/help/faq" },
            { label: "Payments" },
          ]}
        />

        {/* Accepted Methods */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Accepted Payment Methods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentMethods.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card rounded-lg border border-border shadow-card p-5"
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#e8f0fe" }}
                >
                  <Icon size={18} style={{ color: "#2874f0" }} />
                </span>
                <h3 className="font-bold text-foreground text-sm mb-1">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Info */}
        <section
          className="rounded-lg p-6 mb-8 border border-border"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Lock size={22} style={{ color: "#2874f0" }} />
            <h2 className="text-lg font-bold" style={{ color: "#2874f0" }}>
              Payment Security
            </h2>
          </div>
          <ul className="space-y-2 text-sm text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span> 256-bit
              SSL encryption on all payment pages
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span> PCI-DSS
              Level 1 compliant payment processing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span> 3D
              Secure authentication for card payments
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span>{" "}
              Real-time fraud monitoring and detection
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">✓</span> We
              never store full card numbers on our servers
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="bg-card rounded-lg border border-border shadow-card p-5"
              >
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {q}
                </h3>
                <p className="text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Still have questions?
          </p>
          <Link
            to="/help/faq"
            className="text-sm font-semibold"
            style={{ color: "#2874f0" }}
          >
            Visit our FAQ page →
          </Link>
        </div>
      </div>
    </div>
  );
}
