import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    tagline: "For solo consultants and small pilots",
    features: [
      "1 client workspace",
      "Up to 1,000 messages",
      "1 voice number",
      "Calendars & CRM integrations",
      "Basic analytics",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Agency",
    price: "$199",
    tagline: "For growing automation agencies",
    features: [
      "Unlimited client workspaces",
      "10,000 messages + 2,000 voice mins",
      "Custom templates & workflows",
      "White-label portals",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Start trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tagline: "For high-volume and compliance needs",
    features: [
      "SLA & SOC 2",
      "SSO & RBAC",
      "Data residency",
      "Custom integrations",
      "Dedicated success manager",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, usage-based pricing</h2>
          <p className="mt-3 text-slate-300">Start free. Upgrade when you scale.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl border border-white/10 p-6 bg-white/5 ${plan.highlight ? 'ring-2 ring-amber-400/60' : ''}`}>
              {plan.highlight && (
                <div className="absolute -top-3 right-6 text-xs px-2 py-1 rounded-full bg-amber-400 text-slate-900 font-semibold">Most popular</div>
              )}
              <div className="text-white font-semibold text-lg">{plan.name}</div>
              <div className="mt-1 text-4xl font-bold text-white">{plan.price}</div>
              <div className="text-slate-300 text-sm">{plan.tagline}</div>

              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> {f}</li>
                ))}
              </ul>

              <a href="#cta" className={`mt-6 inline-flex w-full justify-center px-4 py-2 rounded-lg font-semibold transition ${plan.highlight ? 'bg-gradient-to-r from-fuchsia-500 via-sky-500 to-amber-400 text-slate-900' : 'border border-white/10 text-white hover:bg-white/5'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
