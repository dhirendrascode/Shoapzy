import { ChevronDown, ChevronUp, ShoppingBag } from "lucide-react";
import { useState } from "react";
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

const faqSections = [
  {
    section: "For Buyers",
    faqs: [
      {
        q: "Do I need to create an account to buy on Shoapzy?",
        a: "Yes, a registered account is required to place orders. Registration is free and takes less than 2 minutes. You need a valid email address and mobile number.",
      },
      {
        q: "How do I track my order?",
        a: "Go to 'My Orders' in your account. Each order shows its current status: Placed, Processing, Shipped, Out for Delivery, or Delivered. Tracking details are updated automatically.",
      },
      {
        q: "Can I return a product?",
        a: "Yes! Most products have a 10-day return window. Visit My Orders, select the order, and click 'Request Return'. Our delivery partner will collect the item from your address.",
      },
      {
        q: "How long does delivery take?",
        a: "Standard delivery takes 5–7 business days. Express delivery is available in 100+ cities (2–3 days). Same-day delivery is available in select metros for orders placed before 12 PM.",
      },
      {
        q: "How do I apply a coupon code?",
        a: "At the checkout page, you'll see a 'Apply Coupon' field. Enter your code and click 'Apply'. The discount will be calculated and shown before you confirm payment.",
      },
      {
        q: "Is Cash on Delivery available?",
        a: "Yes, COD is available on eligible orders up to ₹10,000. COD availability depends on your pin code and the product category. You'll see if COD is available at checkout.",
      },
    ],
  },
  {
    section: "For Sellers",
    faqs: [
      {
        q: "How do I register as a seller on Shoapzy?",
        a: "Visit the 'Become a Seller' page and fill in your shop details, GST number, and bank details. Once submitted, our admin reviews your application within 24–48 hours.",
      },
      {
        q: "What commission does Shoapzy charge?",
        a: "Shoapzy charges 10% commission per completed order. You keep 90% of every sale. Commission is deducted before payouts, which happen every 7 days.",
      },
      {
        q: "How do I add products with MRP pricing?",
        a: "In your Seller Dashboard, go to 'Add Product'. Enter the MRP, set a discount percentage, and Shoapzy will automatically calculate and display the selling price to buyers.",
      },
      {
        q: "When will I receive payment for my orders?",
        a: "Payouts are processed every 7 days for all successfully delivered orders. Funds are transferred to your registered bank account via NEFT/IMPS.",
      },
    ],
  },
  {
    section: "Account & Security",
    faqs: [
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login page. Enter your registered email, and you'll receive a reset link within 5 minutes. Check your spam folder if you don't see it.",
      },
      {
        q: "Is my personal data safe with Shoapzy?",
        a: "Yes. We use 256-bit SSL encryption and follow strict data protection practices. We never sell your personal information to third parties. Read our Privacy Policy for full details.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 px-1 text-left transition-colors hover:bg-muted/30"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-sm text-foreground pr-4">{q}</span>
        {open ? (
          <ChevronUp
            size={16}
            style={{ color: "#2874f0" }}
            className="flex-shrink-0"
          />
        ) : (
          <ChevronDown
            size={16}
            className="flex-shrink-0 text-muted-foreground"
          />
        )}
      </button>
      {open && (
        <p className="text-sm text-muted-foreground pb-4 px-1 leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}

export default function HelpFAQ() {
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
          <h1 className="text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-100 text-sm">
            Answers to common questions for buyers and sellers.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Help" },
            { label: "FAQ" },
          ]}
        />

        {faqSections.map(({ section, faqs }) => (
          <section key={section} className="mb-8">
            <h2
              className="text-lg font-bold mb-3 flex items-center gap-2"
              style={{ color: "#2874f0" }}
            >
              <span
                className="w-1 h-5 rounded"
                style={{ backgroundColor: "#2874f0", display: "inline-block" }}
              />
              {section}
            </h2>
            <div className="bg-card rounded-lg border border-border shadow-card px-5">
              {faqs.map(({ q, a }) => (
                <AccordionItem key={q} q={q} a={a} />
              ))}
            </div>
          </section>
        ))}

        {/* Contact CTA */}
        <section
          className="rounded-lg p-6 border border-border text-center"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          <h3 className="font-bold text-lg mb-2" style={{ color: "#2874f0" }}>
            Didn't find your answer?
          </h3>
          <p className="text-sm text-foreground mb-4">
            Our customer support team is available 9 AM – 9 PM, 7 days a week.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:support@shoapzy.com"
              className="text-sm font-semibold text-white px-5 py-2 rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2874f0" }}
            >
              Email Support
            </a>
            <a
              href="tel:1800-123-4567"
              className="text-sm font-semibold px-5 py-2 rounded border transition-colors hover:bg-muted"
              style={{ color: "#2874f0", borderColor: "#2874f0" }}
            >
              Call 1800-123-4567 (Toll Free)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
