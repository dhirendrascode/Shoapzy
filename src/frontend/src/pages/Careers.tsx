import {
  Briefcase,
  ChevronRight,
  Clock,
  MapPin,
  ShoppingBag,
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

const openings = [
  {
    title: "Senior Frontend Engineer",
    team: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
    desc: "Build delightful user experiences for millions of Indian buyers and sellers using React, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Backend Engineer (Motoko)",
    team: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    desc: "Design and implement scalable backend services on the Internet Computer blockchain using Motoko and modern distributed systems patterns.",
  },
  {
    title: "Growth Marketing Manager",
    team: "Marketing",
    location: "Mumbai",
    type: "Full-time",
    desc: "Drive user acquisition and retention through data-driven campaigns, influencer partnerships, and community building across social media.",
  },
  {
    title: "Seller Success Manager",
    team: "Operations",
    location: "Delhi / Remote",
    type: "Full-time",
    desc: "Work directly with sellers to help them grow their businesses on Shoapzy — onboarding, coaching, and resolving escalations.",
  },
  {
    title: "Product Designer (UX/UI)",
    team: "Design",
    location: "Remote",
    type: "Full-time",
    desc: "Craft intuitive, beautiful interfaces that serve India's next billion online shoppers. Own full design flows from research to final specs.",
  },
  {
    title: "Data Analyst",
    team: "Analytics",
    location: "Bangalore",
    type: "Full-time",
    desc: "Turn complex data into actionable insights that drive product decisions, improve seller performance, and boost buyer satisfaction.",
  },
];

const perks = [
  "Competitive salary + equity",
  "Remote-friendly culture",
  "Health insurance for you and family",
  "Annual learning & development budget",
  "Home office setup allowance",
  "Paid parental leave",
  "Employee discount on Shoapzy orders",
  "Annual team retreats",
];

export default function Careers() {
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
          <h1 className="text-3xl font-bold mb-2">Careers at Shoapzy</h1>
          <p className="text-blue-100 text-sm">
            Join us in building India's most trusted marketplace.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        />

        {/* Hero CTA */}
        <section
          className="rounded-lg p-6 mb-8 border border-border"
          style={{ backgroundColor: "#e8f0fe" }}
        >
          <h2 className="text-xl font-bold mb-2" style={{ color: "#2874f0" }}>
            Build something that matters
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            At Shoapzy, every line of code, every design decision, and every
            seller success story is part of a bigger mission — democratizing
            commerce for every Indian. We move fast, think big, and care deeply
            about our sellers and buyers.
          </p>
          <p className="text-muted-foreground text-sm">
            We are a <strong>remote-first</strong> team with offices in
            Bangalore, Mumbai, Delhi, and Hyderabad.
          </p>
        </section>

        {/* Open Roles */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <Briefcase size={20} style={{ color: "#2874f0" }} /> Open Positions
          </h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-card rounded-lg border border-border shadow-card p-5 hover:shadow-elevated transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-base mb-1">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase size={12} /> {job.team}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {job.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{job.desc}</p>
                  </div>
                  <button
                    type="button"
                    className="flex-shrink-0 flex items-center gap-1 text-sm font-semibold text-white px-4 py-2 rounded transition-opacity hover:opacity-90 self-start"
                    style={{ backgroundColor: "#2874f0" }}
                    onClick={() => {
                      window.location.href = `mailto:careers@shoapzy.com?subject=Application: ${job.title}`;
                    }}
                  >
                    Apply <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Perks */}
        <section className="bg-card rounded-lg p-6 border border-border shadow-card mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Life at Shoapzy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {perks.map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                  style={{ backgroundColor: "#2874f0" }}
                >
                  ✓
                </span>
                {perk}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card rounded-lg p-6 border border-border shadow-card text-center">
          <h3 className="font-bold text-lg text-foreground mb-2">
            Don't see your role?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Send us your resume — we are always looking for exceptional talent.
          </p>
          <a
            href="mailto:careers@shoapzy.com"
            className="inline-block text-sm font-semibold text-white px-6 py-2 rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#2874f0" }}
          >
            Send Open Application
          </a>
        </section>
      </div>
    </div>
  );
}
