import {
  Building2,
  FileText,
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

const companyDetails = [
  { label: "Company Name", value: "Shoapzy Commerce Private Limited" },
  { label: "CIN", value: "" },
  {
    label: "Registered Office",
    value: "",
  },
  {
    label: "Corporate Office",
    value: "",
  },
  { label: "Year of Incorporation", value: "2026" },
  { label: "GST Number", value: "" },
  { label: "PAN Number", value: "" },
];

const boardMembers = [
  {
    name: "Dhirendra Kumar",
    role: "Founder & CEO",
    desc: "Serial entrepreneur with 10+ years in e-commerce and technology.",
  },
  {
    name: "Durgvijay Singh",
    role: "Co-founder & COO",
    desc: "Ex-Flipkart operations leader, expert in last-mile delivery and seller onboarding.",
  },
  {
    name: "Durgesh",
    role: "CTO",
    desc: "Former tech lead at Meesho, architect of distributed commerce platforms.",
  },
];

const policies = [
  { title: "Return Policy", href: "/policy/return-policy" },
  { title: "Privacy Policy", href: "/policy/privacy" },
  { title: "Terms of Use", href: "/policy/terms" },
  { title: "Security", href: "/policy/security" },
];

export default function Corporate() {
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
          <h1 className="text-3xl font-bold mb-2">Corporate Information</h1>
          <p className="text-blue-100 text-sm">
            Legal entity details, governance, and investor information.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Corporate Information" },
          ]}
        />

        {/* Company Details */}
        <section className="bg-card rounded-lg border border-border shadow-card p-6 mb-6">
          <h2
            className="text-xl font-bold mb-4 flex items-center gap-2"
            style={{ color: "#2874f0" }}
          >
            <Building2 size={20} /> Company Details
          </h2>
          <div className="divide-y divide-border">
            {companyDetails.map(({ label, value }) => (
              <div key={label} className="flex flex-col sm:flex-row py-3 gap-1">
                <span className="text-sm text-muted-foreground font-medium w-48 flex-shrink-0">
                  {label}
                </span>
                <span className="text-sm text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Board of Directors */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
            <Users size={20} style={{ color: "#2874f0" }} /> Board of Directors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-lg border border-border shadow-card p-5 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: "#2874f0" }}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-bold text-foreground text-sm">
                  {member.name}
                </h3>
                <p
                  className="text-xs font-semibold mb-2"
                  style={{ color: "#2874f0" }}
                >
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investor Relations */}
        <section
          className="rounded-lg p-6 mb-6 border border-border"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          <h2
            className="text-xl font-bold mb-3 flex items-center gap-2"
            style={{ color: "#2874f0" }}
          >
            <TrendingUp size={20} /> Investor Relations
          </h2>
          <p className="text-sm text-foreground mb-3">
            Shoapzy is a privately held company. For investor enquiries,
            partnership proposals, or financial information requests, please
            contact our investor relations team.
          </p>
          <a
            href="mailto:ir@shoapzy.com"
            className="text-sm font-semibold"
            style={{ color: "#2874f0" }}
          >
            ir@shoapzy.com
          </a>
        </section>

        {/* Governance */}
        <section className="bg-card rounded-lg border border-border shadow-card p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
            <FileText size={20} style={{ color: "#2874f0" }} /> Governance &
            Policies
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Shoapzy is committed to transparent governance and regulatory
            compliance under Indian law.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {policies.map(({ title, href }) => (
              <Link
                key={title}
                to={href}
                className="text-sm font-semibold text-center py-2 px-3 rounded border transition-colors hover:bg-muted"
                style={{ color: "#2874f0", borderColor: "#2874f0" }}
              >
                {title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
