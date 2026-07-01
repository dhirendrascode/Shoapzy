import { ShoppingBag } from "lucide-react";
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

function Section({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-card rounded-lg border border-border shadow-card p-6 mb-5">
      <h2 className="text-base font-bold mb-3" style={{ color: "#2874f0" }}>
        {title}
      </h2>
      <div className="text-sm text-foreground space-y-2 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PolicyReturnPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div
        style={{ backgroundColor: "#2874f0" }}
        className="text-white py-10 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag size={28} className="text-orange-300" />
            <span className="font-bold text-xl tracking-tight">Shoapzy</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Return Policy</h1>
          <p className="text-blue-100 text-sm">
            Effective Date: January 1, 2026 · Last Updated: April 1, 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Policy" },
            { label: "Return Policy" },
          ]}
        />

        <Section title="1. Return Eligibility">
          <p>
            Items may be returned within <strong>10 days of delivery</strong>{" "}
            provided they meet the following conditions:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Item is in original condition with all tags attached</li>
            <li>Original packaging is intact and undamaged</li>
            <li>All accessories, manuals, and free gifts are included</li>
            <li>Item has not been used, washed, or altered in any way</li>
            <li>Return request is raised within the return window</li>
          </ul>
        </Section>

        <Section title="2. Return Process">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Visit <strong>My Orders</strong> and select the order
            </li>
            <li>
              Click <strong>Request Return</strong> and choose the item(s)
            </li>
            <li>Select your return reason from the dropdown</li>
            <li>
              Schedule a pickup — our delivery partner will collect within 2–3
              business days
            </li>
            <li>Item will be inspected upon receipt at our warehouse</li>
            <li>
              Refund processed within 5–7 business days after successful
              inspection
            </li>
          </ol>
        </Section>

        <Section title="3. Non-Returnable Items">
          <p>The following categories are not eligible for return:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Perishable goods (food, fresh produce, dairy)</li>
            <li>Personal care and hygiene products once opened</li>
            <li>Digital goods, software licenses, and vouchers</li>
            <li>Customized or personalized products</li>
            <li>Underwear and swimwear</li>
            <li>Hazardous materials and flammable products</li>
            <li>
              Products explicitly marked as 'Non-Returnable' in the listing
            </li>
          </ul>
        </Section>

        <Section title="4. Refund Methods & Timelines">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            {[
              { method: "Credit / Debit Card", time: "5–7 business days" },
              { method: "UPI / Net Banking", time: "3–5 business days" },
              { method: "Cash on Delivery", time: "7–10 business days" },
            ].map(({ method, time }) => (
              <div
                key={method}
                className="p-3 rounded-lg border border-border"
                style={{ backgroundColor: "#f8f9ff" }}
              >
                <p className="text-xs text-muted-foreground">{method}</p>
                <p
                  className="font-bold text-sm mt-1"
                  style={{ color: "#2874f0" }}
                >
                  {time}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="5. Damaged or Defective Items">
          <p>
            If you receive a damaged, defective, or wrong item, please raise a
            return request immediately. Provide photos of the damage when
            submitting your request. Such returns are given priority and
            processed faster.
          </p>
          <p className="mt-2">
            For items damaged during delivery, you may be eligible for an
            immediate replacement or full refund without needing to return the
            item.
          </p>
        </Section>

        <Section title="6. Seller Return Obligations">
          <p>
            All sellers on Shoapzy are required to honor valid return requests.
            Sellers who repeatedly reject valid returns or provide inaccurate
            product descriptions may have their accounts suspended. Shoapzy
            reserves the right to approve returns on behalf of sellers in case
            of disputes.
          </p>
        </Section>

        <Section title="7. Contact for Returns Issues">
          <p>
            If you face any difficulty with your return or refund, contact our
            support team:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> returns@shoapzy.com
          </p>
          <p>
            <strong>Phone:</strong> 1800-123-4567 (Toll Free, 9 AM – 9 PM)
          </p>
        </Section>
      </div>
    </div>
  );
}
