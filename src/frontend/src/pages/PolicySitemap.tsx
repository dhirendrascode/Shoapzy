import { ExternalLink, ShoppingBag } from "lucide-react";
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

const sitemapSections = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "Cart", href: "/cart" },
      { label: "My Orders", href: "/orders" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Compare Products", href: "/compare" },
      { label: "Saved Addresses", href: "/saved-addresses" },
      { label: "Referral Program", href: "/referral" },
      { label: "Login / Register", href: "/login" },
    ],
  },
  {
    title: "Seller",
    links: [
      { label: "Become a Seller", href: "/seller/register" },
      { label: "Seller Dashboard", href: "/seller/dashboard" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Blog", href: "/blog" },
      { label: "Corporate Information", href: "/corporate" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQ", href: "/help/faq" },
      { label: "Payments", href: "/help/payments" },
      { label: "Shipping", href: "/help/shipping" },
      { label: "Cancellation & Returns", href: "/help/returns" },
      { label: "Report Infringement", href: "/help/report-infringement" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Return Policy", href: "/policy/return-policy" },
      { label: "Terms of Use", href: "/policy/terms" },
      { label: "Security", href: "/policy/security" },
      { label: "Privacy Policy", href: "/policy/privacy" },
      { label: "Sitemap", href: "/policy/sitemap" },
    ],
  },
];

export default function PolicySitemap() {
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
          <h1 className="text-3xl font-bold mb-2">Sitemap</h1>
          <p className="text-blue-100 text-sm">
            A complete list of all pages on Shoapzy.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Policy" },
            { label: "Sitemap" },
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sitemapSections.map(({ title, links }) => (
            <div
              key={title}
              className="bg-card rounded-lg border border-border shadow-card p-5"
            >
              <h2
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "#2874f0" }}
              >
                {title}
              </h2>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group"
                    >
                      <ExternalLink
                        size={12}
                        className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
