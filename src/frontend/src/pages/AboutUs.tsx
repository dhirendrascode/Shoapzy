import {
  Award,
  Globe,
  Heart,
  ShoppingBag,
  TrendingUp,
  Users,
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

const milestones = [
  {
    year: "Jan 2026",
    title: "Shoapzy Founded",
    desc: "Started with a vision to empower Indian sellers and buyers. Platform launched with 100+ sellers across 10 categories.",
  },
  {
    year: "Mar 2026",
    title: "10,000 Sellers",
    desc: "Reached 10,000 registered sellers milestone. Categories expanded to 50+.",
  },
  {
    year: "Jun 2026",
    title: "1 Million Orders",
    desc: "Crossed 1 million orders placed on the platform. COD and Stripe payments live.",
  },
  {
    year: "Dec 2026",
    title: "Going Global",
    desc: "Expanding reach with new features: loyalty points, product comparison, referral system, and advanced seller tools.",
  },
];

const values = [
  {
    Icon: Users,
    title: "Seller First",
    desc: "We empower every seller — from village artisans to urban entrepreneurs.",
  },
  {
    Icon: Heart,
    title: "Customer Love",
    desc: "Every decision starts and ends with the customer's experience.",
  },
  {
    Icon: TrendingUp,
    title: "Grow Together",
    desc: "Our success is measured by how much our partners grow with us.",
  },
  {
    Icon: Globe,
    title: "Made in India",
    desc: "Proudly Indian — celebrating local craftsmanship and innovation.",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div
        style={{ backgroundColor: "#2874f0" }}
        className="text-white py-10 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag size={28} className="text-orange-300" />
            <span className="font-bold text-xl tracking-tight">Shoapzy</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">About Us</h1>
          <p className="text-blue-100 text-sm">
            India ka apna marketplace — for every seller, for every buyer.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />

        {/* Mission */}
        <section className="bg-card rounded-lg p-6 shadow-card mb-6 border border-border">
          <h2
            className="text-xl font-bold text-foreground mb-3"
            style={{ color: "#2874f0" }}
          >
            Our Mission
          </h2>
          <p className="text-foreground leading-relaxed mb-3">
            Shoapzy was founded with one simple belief:{" "}
            <strong>every Indian seller deserves a world-class platform</strong>{" "}
            to reach millions of buyers. We are India's fastest-growing
            multi-vendor marketplace, built for the next billion users.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From handmade crafts to electronics, fashion to groceries — Shoapzy
            is home to all categories, serving buyers from Kanyakumari to
            Kashmir.
          </p>
        </section>

        {/* Vision */}
        <section className="bg-card rounded-lg p-6 shadow-card mb-6 border border-border">
          <h2 className="text-xl font-bold mb-3" style={{ color: "#2874f0" }}>
            Our Vision
          </h2>
          <p className="text-foreground leading-relaxed">
            To become India's most trusted e-commerce platform — where{" "}
            <strong>sellers thrive</strong> with transparent commissions,{" "}
            <strong>buyers shop with confidence</strong> backed by secure
            payments and easy returns, and <strong>communities grow</strong>{" "}
            through fair commerce.
          </p>
        </section>

        {/* Founding Story */}
        <section className="bg-card rounded-lg p-6 shadow-card mb-6 border border-border">
          <h2 className="text-xl font-bold mb-3" style={{ color: "#2874f0" }}>
            Our Story
          </h2>
          <p className="text-foreground leading-relaxed mb-3">
            Shoapzy started in a small office with a big idea: to give local
            Indian sellers the same digital power as large enterprises. Our
            founders noticed that millions of talented artisans, craftspeople,
            and small business owners lacked access to a reliable online
            marketplace.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, Shoapzy connects thousands of sellers to millions of buyers —
            with transparent pricing, fair commissions, and dedicated seller
            support. We are not just a marketplace; we are a movement.
          </p>
        </section>

        {/* Values */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card rounded-lg p-5 border border-border shadow-card flex gap-4 items-start"
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#e8f0fe" }}
                >
                  <Icon size={18} style={{ color: "#2874f0" }} />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {milestones.map(({ year, title, desc }) => (
              <div
                key={year}
                className="bg-card rounded-lg p-5 border border-border shadow-card text-center"
              >
                <div
                  className="text-lg font-extrabold mb-1"
                  style={{ color: "#2874f0" }}
                >
                  {year}
                </div>
                <div className="font-semibold text-foreground mb-2">
                  {title}
                </div>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seller Empowerment */}
        <section
          className="rounded-lg p-6 mb-6"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Award size={24} style={{ color: "#2874f0" }} />
            <h2 className="text-lg font-bold" style={{ color: "#2874f0" }}>
              Empowering Sellers
            </h2>
          </div>
          <p className="text-foreground leading-relaxed mb-4">
            At Shoapzy, sellers keep <strong>90% of every sale</strong>. We
            charge only 10% platform commission — far below the industry
            average. Our seller dashboard provides real-time analytics, easy
            product uploads with MRP and discount pricing, and direct buyer
            communication tools.
          </p>
          <Link
            to="/seller/register"
            className="inline-block text-sm font-semibold text-white px-5 py-2 rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#2874f0" }}
          >
            Become a Seller →
          </Link>
        </section>
      </div>
    </div>
  );
}
