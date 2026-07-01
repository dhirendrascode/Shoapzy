import {
  CheckCircle,
  Clock,
  MapPin,
  Package,
  ShoppingBag,
  Truck,
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

const shippingOptions = [
  {
    Icon: Truck,
    title: "Standard Delivery",
    time: "5–7 Business Days",
    cost: "₹40 flat / Free above ₹500",
    desc: "Available across all 29 states and 7 UTs in India. Tracking provided after dispatch.",
  },
  {
    Icon: Clock,
    title: "Express Delivery",
    time: "2–3 Business Days",
    cost: "₹99 flat",
    desc: "Available in 100+ cities. Order before 2 PM for same-day dispatch. Real-time tracking included.",
  },
  {
    Icon: Package,
    title: "Same-Day Delivery",
    time: "Within 24 hours",
    cost: "₹149 flat",
    desc: "Available in select metro cities (Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune). Order before 12 PM.",
  },
];

const trackingSteps = [
  {
    label: "Order Placed",
    desc: "You will receive a confirmation email and SMS immediately.",
  },
  {
    label: "Processing",
    desc: "Seller prepares your order for shipment (1–2 business days).",
  },
  {
    label: "Shipped",
    desc: "Your order is picked up by our delivery partner. Tracking link shared.",
  },
  {
    label: "Out for Delivery",
    desc: "Your order is with the delivery agent and will arrive today.",
  },
  {
    label: "Delivered",
    desc: "Order delivered to your address. Rate your experience!",
  },
];

export default function HelpShipping() {
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
          <h1 className="text-3xl font-bold mb-2">Shipping Information</h1>
          <p className="text-blue-100 text-sm">
            Delivery timelines, tracking, and free shipping details.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Help", href: "/help/faq" },
            { label: "Shipping" },
          ]}
        />

        {/* Free shipping banner */}
        <section
          className="rounded-lg p-4 mb-8 border border-border flex items-center gap-4"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          <Truck
            size={28}
            style={{ color: "#2874f0" }}
            className="flex-shrink-0"
          />
          <div>
            <p className="font-bold text-base" style={{ color: "#2874f0" }}>
              Free Shipping on orders above ₹500!
            </p>
            <p className="text-sm text-foreground">
              Add items worth ₹500 or more to get free standard delivery across
              India.
            </p>
          </div>
        </section>

        {/* Delivery Options */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Delivery Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {shippingOptions.map(({ Icon, title, time, cost, desc }) => (
              <div
                key={title}
                className="bg-card rounded-lg border border-border shadow-card p-5"
              >
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#e8f0fe" }}
                >
                  <Icon size={18} style={{ color: "#2874f0" }} />
                </span>
                <h3 className="font-bold text-foreground mb-1">{title}</h3>
                <p
                  className="text-xs font-semibold mb-1"
                  style={{ color: "#2874f0" }}
                >
                  {time}
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  Cost: {cost}
                </p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Order Tracking */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <MapPin size={20} style={{ color: "#2874f0" }} /> Order Tracking
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Track your order from your{" "}
            <Link
              to="/orders"
              className="font-semibold"
              style={{ color: "#2874f0" }}
            >
              My Orders
            </Link>{" "}
            page. Here's what each status means:
          </p>
          <div className="space-y-3">
            {trackingSteps.map(({ label, desc }, i) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: "#2874f0" }}
                  >
                    {i + 1}
                  </div>
                  {i < trackingSteps.length - 1 && (
                    <div
                      className="w-0.5 h-5 mt-1"
                      style={{ backgroundColor: "#2874f0" }}
                    />
                  )}
                </div>
                <div className="pb-3">
                  <p className="font-semibold text-sm text-foreground">
                    {label}
                  </p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Policies */}
        <section className="bg-card rounded-lg border border-border shadow-card p-6">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Shipping Policies
          </h2>
          <ul className="space-y-3">
            {[
              "Orders are dispatched within 1–2 business days of payment confirmation.",
              "Delivery timelines may be extended during festive seasons (Diwali, Navratri, etc.).",
              "Shoapzy ships to all pin codes in India. Remote areas may have extended timelines.",
              "If your order is delayed beyond the promised date, you may be eligible for a shipping refund.",
              "Multiple items from the same seller may be shipped together or separately.",
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
      </div>
    </div>
  );
}
