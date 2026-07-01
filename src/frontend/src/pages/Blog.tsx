import { Clock, ShoppingBag, Tag, User } from "lucide-react";
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

const articles = [
  {
    tag: "Seller Success",
    title: "How Ramesh from Jaipur tripled his sales on Shoapzy",
    excerpt:
      "When Ramesh started selling his handmade leather goods on Shoapzy, he had just 10 products. Today, he ships 200+ orders every month to customers across India. Here is his story.",
    author: "Shoapzy Team",
    date: "April 5, 2026",
    readTime: "5 min read",
    tagColor: "#2874f0",
  },
  {
    tag: "Shopping Tips",
    title: "10 ways to get the best deals on Shoapzy",
    excerpt:
      "From coupon codes to flash sales, from loyalty points to referral bonuses — here are the insider tricks to save the most money on every Shoapzy order.",
    author: "Priya Sharma",
    date: "March 28, 2026",
    readTime: "4 min read",
    tagColor: "#ff6000",
  },
  {
    tag: "Platform Updates",
    title: "Introducing Address Book: save multiple delivery addresses",
    excerpt:
      "No more re-typing your home, office, and parents' address at checkout. Shoapzy's new Address Book lets you save up to 5 delivery addresses and pick one at checkout in seconds.",
    author: "Shoapzy Team",
    date: "March 15, 2026",
    readTime: "3 min read",
    tagColor: "#2874f0",
  },
  {
    tag: "Seller Guide",
    title: "Complete guide: setting up MRP and discount pricing on Shoapzy",
    excerpt:
      "Pricing your products correctly is the fastest path to more sales. In this guide, we explain how to set MRP, discount percentage, and let Shoapzy calculate the selling price — all automatically.",
    author: "Anjali Singh",
    date: "March 8, 2026",
    readTime: "7 min read",
    tagColor: "#ff6000",
  },
];

const categories = [
  "All",
  "Seller Success",
  "Shopping Tips",
  "Platform Updates",
  "Seller Guide",
  "Trends",
];

export default function Blog() {
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
          <h1 className="text-3xl font-bold mb-2">Shoapzy Blog</h1>
          <p className="text-blue-100 text-sm">
            Tips, stories, and updates from India's marketplace.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat, i) => (
            <button
              type="button"
              key={cat}
              className="text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors"
              style={
                i === 0
                  ? {
                      backgroundColor: "#2874f0",
                      color: "#fff",
                      borderColor: "#2874f0",
                    }
                  : {
                      backgroundColor: "transparent",
                      color: "#555",
                      borderColor: "#ddd",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-card rounded-lg border border-border shadow-card overflow-hidden hover:shadow-elevated transition-shadow cursor-pointer"
            >
              <div
                className="h-2 w-full"
                style={{ backgroundColor: article.tagColor }}
              />
              <div className="p-5">
                <span
                  className="inline-block text-xs font-bold px-2 py-0.5 rounded mb-3"
                  style={{
                    backgroundColor: `${article.tagColor}18`,
                    color: article.tagColor,
                  }}
                >
                  <Tag size={10} className="inline mr-1" />
                  {article.tag}
                </span>
                <h2 className="font-bold text-foreground text-base mb-2 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                  <span className="flex items-center gap-1">
                    <User size={11} /> {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {article.readTime}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {article.date}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <section
          className="rounded-lg p-6 border border-border text-center"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          <h3 className="font-bold text-lg mb-2" style={{ color: "#2874f0" }}>
            Stay Updated
          </h3>
          <p className="text-sm text-foreground mb-4">
            Get the latest seller tips, platform updates, and shopping deals
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 input-field text-sm"
            />
            <button
              type="button"
              className="text-sm font-semibold text-white px-5 py-2 rounded transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: "#2874f0" }}
            >
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
