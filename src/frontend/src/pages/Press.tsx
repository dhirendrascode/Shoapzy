import { Download, ExternalLink, Newspaper, ShoppingBag } from "lucide-react";
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

const pressReleases = [
  {
    date: "March 15, 2026",
    title: "Shoapzy crosses 1 million orders milestone",
    summary:
      "India's fastest growing multi-vendor marketplace celebrates its one millionth successful order delivery, marking a major milestone in accessible Indian e-commerce.",
  },
  {
    date: "January 8, 2026",
    title: "Shoapzy launches Loyalty Points program for buyers",
    summary:
      "New SuperCoins-style rewards system lets buyers earn points on every purchase, redeemable as discounts on future orders — boosting buyer retention by 45%.",
  },
  {
    date: "November 2, 2025",
    title: "Shoapzy expands to 500+ product categories",
    summary:
      "Platform now supports sellers across 500+ categories including electronics, fashion, home decor, groceries, and traditional Indian handicrafts.",
  },
  {
    date: "August 19, 2025",
    title: "Shoapzy introduces COD payment option",
    summary:
      "Cash on Delivery now available across India, making online shopping accessible to customers without digital payment methods.",
  },
];

const mediaFeatures = [
  {
    outlet: "Economic Times",
    headline:
      "Shoapzy emerges as serious contender in India's e-commerce space",
  },
  {
    outlet: "YourStory",
    headline:
      "How Shoapzy is empowering India's small sellers with 90% revenue share",
  },
  {
    outlet: "Inc42",
    headline:
      "Shoapzy raises the bar for seller-first marketplace models in India",
  },
  {
    outlet: "Mint",
    headline:
      "Digital India: platforms like Shoapzy driving rural seller adoption",
  },
];

export default function Press() {
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
          <h1 className="text-3xl font-bold mb-2">Press & Media</h1>
          <p className="text-blue-100 text-sm">
            Latest news, press releases, and media resources from Shoapzy.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Press" }]}
        />

        {/* Media Contact */}
        <section
          className="rounded-lg p-5 mb-8 border border-border"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          <h2 className="font-bold text-base mb-1" style={{ color: "#2874f0" }}>
            Media Enquiries
          </h2>
          <p className="text-sm text-foreground mb-2">
            For press enquiries, interviews, or editorial requests, contact our
            communications team.
          </p>
          <a
            href="mailto:press@shoapzy.com"
            className="text-sm font-semibold"
            style={{ color: "#2874f0" }}
          >
            press@shoapzy.com
          </a>
        </section>

        {/* Press Releases */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <Newspaper size={20} style={{ color: "#2874f0" }} /> Press Releases
          </h2>
          <div className="space-y-4">
            {pressReleases.map((pr) => (
              <div
                key={pr.title}
                className="bg-card rounded-lg border border-border shadow-card p-5"
              >
                <p className="text-xs text-muted-foreground mb-1">{pr.date}</p>
                <h3 className="font-bold text-foreground mb-2">{pr.title}</h3>
                <p className="text-sm text-muted-foreground">{pr.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* In the News */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <ExternalLink size={20} style={{ color: "#2874f0" }} /> Shoapzy in
            the News
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mediaFeatures.map(({ outlet, headline }) => (
              <div
                key={outlet}
                className="bg-card rounded-lg border border-border shadow-card p-4"
              >
                <span
                  className="inline-block text-xs font-bold text-white px-2 py-1 rounded mb-2"
                  style={{ backgroundColor: "#2874f0" }}
                >
                  {outlet}
                </span>
                <p className="text-sm text-foreground italic">"{headline}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Media Kit */}
        <section className="bg-card rounded-lg p-6 border border-border shadow-card">
          <h2 className="text-xl font-bold mb-3 text-foreground">Media Kit</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Download our official media kit including logos, brand guidelines,
            product screenshots, and founder photos for editorial use.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-semibold text-white px-5 py-2 rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2874f0" }}
            >
              <Download size={15} /> Download Media Kit
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded border border-border transition-colors hover:bg-muted"
              style={{ color: "#2874f0" }}
            >
              Brand Guidelines
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
