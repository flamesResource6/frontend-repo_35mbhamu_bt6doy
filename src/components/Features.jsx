import { Workflow, Headphones, BarChart3, ShieldCheck, Gauge, PlugZap } from "lucide-react";

const items = [
  { icon: Workflow, title: "Automation Builder", desc: "Drag-and-drop workflows for lead capture, qualification, and follow-ups. Prebuilt templates for popular niches." },
  { icon: Headphones, title: "Voice + Chat Agents", desc: "Natural conversations powered by cutting-edge speech and LLMs. Phone, WhatsApp, SMS, web chat." },
  { icon: BarChart3, title: "Client Analytics", desc: "Call transcripts, conversion funnels, and ROI dashboards your clients will love." },
  { icon: Gauge, title: "Usage Billing", desc: "Bill by minutes, messages, or seats. Stripe integration and plan management included." },
  { icon: PlugZap, title: "CRM & Calendar", desc: "Native integrations with Calendly, Google Calendar, HubSpot, Pipedrive and more." },
  { icon: ShieldCheck, title: "Enterprise Ready", desc: "SSO, roles, audit logs, and regional data residency to serve larger accounts." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0">
        <div className="absolute right-[-200px] top-10 w-[700px] h-[700px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Designed for automation agencies</h2>
          <p className="mt-3 text-slate-300">Everything you need to deliver AI outcomes for clients without the engineering overhead.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:from-white/10 transition">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 mb-4">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
