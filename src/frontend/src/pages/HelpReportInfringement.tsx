import { AlertTriangle, CheckCircle, ShoppingBag } from "lucide-react";
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

const infringementTypes = [
  { value: "copyright", label: "Copyright Infringement" },
  { value: "trademark", label: "Trademark Violation" },
  { value: "counterfeit", label: "Counterfeit / Fake Products" },
  { value: "patent", label: "Patent Infringement" },
  { value: "other", label: "Other IP Violation" },
];

export default function HelpReportInfringement() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    productUrl: "",
    description: "",
    ownershipProof: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <h1 className="text-3xl font-bold mb-2">Report Infringement</h1>
          <p className="text-blue-100 text-sm">
            Report copyright, trademark, or other intellectual property
            violations.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Help", href: "/help/faq" },
            { label: "Report Infringement" },
          ]}
        />

        {/* Policy Note */}
        <section
          className="rounded-lg p-5 mb-8 border border-border flex gap-4"
          style={{ backgroundColor: "#fff8e8" }}
        >
          <AlertTriangle
            size={22}
            className="flex-shrink-0 mt-0.5"
            style={{ color: "#ff6000" }}
          />
          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: "#ff6000" }}>
              Important Notice
            </h3>
            <p className="text-sm text-foreground">
              Shoapzy takes intellectual property rights seriously. False or
              misleading reports may result in account suspension. By submitting
              this form, you confirm that the information provided is accurate
              to the best of your knowledge.
            </p>
          </div>
        </section>

        {submitted ? (
          <div className="bg-card rounded-lg border border-border shadow-card p-8 text-center">
            <CheckCircle
              size={48}
              className="mx-auto mb-4"
              style={{ color: "#2874f0" }}
            />
            <h2 className="text-xl font-bold text-foreground mb-2">
              Report Submitted
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Thank you for your report. Our Trust & Safety team will review it
              within 3–5 business days and take appropriate action. We'll send
              updates to your registered email.
            </p>
            <Link
              to="/"
              className="text-sm font-semibold"
              style={{ color: "#2874f0" }}
            >
              ← Back to Home
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-lg border border-border shadow-card p-6 space-y-5"
          >
            <h2 className="text-lg font-bold text-foreground mb-2">
              Infringement Report Form
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="report-name"
                  className="block text-xs font-semibold text-foreground mb-1"
                >
                  Your Full Name *
                </label>
                <input
                  id="report-name"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Rahul Sharma"
                  className="w-full input-field text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="report-email"
                  className="block text-xs font-semibold text-foreground mb-1"
                >
                  Email Address *
                </label>
                <input
                  id="report-email"
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rahul@example.com"
                  className="w-full input-field text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="report-company"
                className="block text-xs font-semibold text-foreground mb-1"
              >
                Company / Brand Name (if applicable)
              </label>
              <input
                id="report-company"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your brand or company name"
                className="w-full input-field text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="report-type"
                className="block text-xs font-semibold text-foreground mb-1"
              >
                Type of Infringement *
              </label>
              <select
                id="report-type"
                required
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full input-field text-sm"
              >
                <option value="">Select infringement type...</option>
                {infringementTypes.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="report-productUrl"
                className="block text-xs font-semibold text-foreground mb-1"
              >
                Product URL or Listing ID *
              </label>
              <input
                id="report-productUrl"
                required
                name="productUrl"
                value={form.productUrl}
                onChange={handleChange}
                placeholder="https://shoapzy.com/product/... or product ID"
                className="w-full input-field text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="report-description"
                className="block text-xs font-semibold text-foreground mb-1"
              >
                Description of Infringement *
              </label>
              <textarea
                id="report-description"
                required
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe how this product/listing violates your intellectual property rights..."
                className="w-full input-field text-sm resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="report-ownershipProof"
                className="block text-xs font-semibold text-foreground mb-1"
              >
                Proof of Ownership
              </label>
              <textarea
                id="report-ownershipProof"
                name="ownershipProof"
                value={form.ownershipProof}
                onChange={handleChange}
                rows={3}
                placeholder="Describe your ownership evidence (registration number, certificate details, etc.)"
                className="w-full input-field text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full text-sm font-semibold text-white py-3 rounded transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2874f0" }}
            >
              Submit Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
