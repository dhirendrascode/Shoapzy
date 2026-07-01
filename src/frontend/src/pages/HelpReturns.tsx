import {
  AlertCircle,
  CheckCircle,
  Clock,
  RotateCcw,
  ShoppingBag,
  XCircle,
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

const cancelSteps = [
  "Go to My Orders page",
  "Select the order you want to cancel",
  "Click 'Cancel Order' and choose a reason",
  "Confirm cancellation — you'll receive a confirmation email",
  "Refund processed within 5–7 business days",
];

const returnSteps = [
  "Go to My Orders page and find the delivered order",
  "Click 'Request Return' and select items to return",
  "Choose return reason (damaged, wrong item, not as described, etc.)",
  "Schedule pickup — our delivery partner will collect the item",
  "Item inspected within 2–3 business days of receipt",
  "Refund processed after successful inspection",
];

const nonReturnable = [
  "Perishable goods (food, grocery items)",
  "Personal care & hygiene products once opened",
  "Digital products and software licenses",
  "Customized / personalized items",
  "Items marked as 'Non-Returnable' in product listing",
  "Underwear and swimwear for hygiene reasons",
];

export default function HelpReturns() {
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
          <h1 className="text-3xl font-bold mb-2">Cancellation & Returns</h1>
          <p className="text-blue-100 text-sm">
            How to cancel orders, request returns, and get refunds.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Help", href: "/help/faq" },
            { label: "Cancellation & Returns" },
          ]}
        />

        {/* Return Window Banner */}
        <section
          className="rounded-lg p-4 mb-8 flex items-center gap-4 border border-border"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          <RotateCcw
            size={28}
            style={{ color: "#2874f0" }}
            className="flex-shrink-0"
          />
          <div>
            <p className="font-bold text-base" style={{ color: "#2874f0" }}>
              10-Day Return Window
            </p>
            <p className="text-sm text-foreground">
              Most items can be returned within 10 days of delivery. Return must
              be in original condition with tags.
            </p>
          </div>
        </section>

        {/* Cancellation */}
        <section className="bg-card rounded-lg border border-border shadow-card p-6 mb-6">
          <h2
            className="text-xl font-bold mb-4 flex items-center gap-2"
            style={{ color: "#2874f0" }}
          >
            <XCircle size={20} /> Order Cancellation
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            You can cancel your order any time before it is shipped. Once
            shipped, cancellation is not possible — you'll need to request a
            return after delivery.
          </p>
          <ol className="space-y-2">
            {cancelSteps.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <span
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5"
                  style={{ backgroundColor: "#2874f0" }}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* Returns */}
        <section className="bg-card rounded-lg border border-border shadow-card p-6 mb-6">
          <h2
            className="text-xl font-bold mb-4 flex items-center gap-2"
            style={{ color: "#2874f0" }}
          >
            <RotateCcw size={20} /> How to Return an Item
          </h2>
          <ol className="space-y-2">
            {returnSteps.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <span
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5"
                  style={{ backgroundColor: "#2874f0" }}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* Refund Timeline */}
        <section className="bg-card rounded-lg border border-border shadow-card p-6 mb-6">
          <h2
            className="text-xl font-bold mb-4 flex items-center gap-2"
            style={{ color: "#2874f0" }}
          >
            <Clock size={20} /> Refund Timeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { method: "Credit / Debit Card", time: "5–7 business days" },
              { method: "UPI / Net Banking", time: "3–5 business days" },
              { method: "Cash on Delivery", time: "7–10 business days (NEFT)" },
            ].map(({ method, time }) => (
              <div
                key={method}
                className="p-4 rounded-lg border border-border"
                style={{ backgroundColor: "#f8f9ff" }}
              >
                <p className="text-xs text-muted-foreground mb-1">{method}</p>
                <p className="font-bold text-sm" style={{ color: "#2874f0" }}>
                  {time}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Non-Returnable */}
        <section className="bg-card rounded-lg border border-border shadow-card p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
            <AlertCircle size={20} style={{ color: "#ff6000" }} />{" "}
            Non-Returnable Items
          </h2>
          <ul className="space-y-2">
            {nonReturnable.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <CheckCircle
                  size={14}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#ff6000" }}
                />
                {item}
              </li>
            ))}
          </ul>
          <div
            className="mt-4 p-3 rounded border"
            style={{ backgroundColor: "#fff8f5", borderColor: "#ff6000" }}
          >
            <p className="text-xs" style={{ color: "#ff6000" }}>
              Items must be returned in original packaging with all tags and
              accessories intact. Used, washed, or damaged items will not be
              accepted for return.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
