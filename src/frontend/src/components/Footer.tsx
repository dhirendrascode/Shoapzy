import { Facebook, Instagram, Lock, RotateCcw, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const footerColumns = [
  {
    heading: "ABOUT",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Press", to: "/press" },
      { label: "Blog", to: "/blog" },
      { label: "Corporate Information", to: "/corporate" },
    ],
  },
  {
    heading: "HELP",
    links: [
      { label: "Payments", to: "/help/payments" },
      { label: "Shipping", to: "/help/shipping" },
      { label: "Cancellation & Returns", to: "/help/returns" },
      { label: "FAQ", to: "/help/faq" },
      { label: "Report Infringement", to: "/help/report-infringement" },
    ],
  },
  {
    heading: "POLICY",
    links: [
      { label: "Return Policy", to: "/policy/return-policy" },
      { label: "Terms of Use", to: "/policy/terms" },
      { label: "Security", to: "/policy/security" },
      { label: "Privacy Policy", to: "/policy/privacy" },
      { label: "Sitemap", to: "/policy/sitemap" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1D8kyLCA7r/",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dhirendra7572?igsh=MXdpcW4yMWVzYTdwaQ==",
    Icon: Instagram,
  },
];

const trustBadges = [
  { label: "100% Secure Payments", Icon: Lock },
  { label: "Easy Returns", Icon: RotateCcw },
  { label: "Seller Protection", Icon: Shield },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "#212121" }}
      className="text-white mt-auto"
    >
      {/* Trust badges row */}
      <div style={{ borderBottom: "1px solid #383838" }} className="py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {trustBadges.map(({ label, Icon }, i) => (
              <span
                key={label}
                className="flex items-center gap-2 text-xs font-semibold"
                style={{ color: "#9e9e9e" }}
              >
                {i > 0 && (
                  <span
                    className="hidden sm:inline-block w-px h-5 mr-4"
                    style={{ backgroundColor: "#4a4a4a" }}
                  />
                )}
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ backgroundColor: "#2874f0" }}
                >
                  <Icon size={14} className="text-white" />
                </span>
                <span className="uppercase tracking-wide">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Link columns — use React Router Link for internal nav */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3
                className="text-xs font-bold tracking-widest mb-4"
                style={{ color: "#878787" }}
              >
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors duration-150 hover:text-white"
                      style={{ color: "#9e9e9e" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social column — only Facebook and Instagram (real URLs) */}
          <div>
            <h3
              className="text-xs font-bold tracking-widest mb-4"
              style={{ color: "#878787" }}
            >
              SOCIAL
            </h3>
            <ul className="space-y-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: "#9e9e9e" }}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #383838" }} className="py-4">
        <div
          className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ color: "#878787" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-base tracking-tight">
              Shoapzy
            </span>
            <span>© {year} Shoapzy. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
