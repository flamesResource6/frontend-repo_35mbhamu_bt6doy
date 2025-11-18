import { Building2, ShoppingBag, GraduationCap, Stethoscope } from "lucide-react";

const cases = [
  { icon: Building2, title: "Local Services", desc: "Answer calls, qualify leads, and book jobs for home services, real estate, and legal." },
  { icon: ShoppingBag, title: "E‑commerce", desc: "24/7 concierge for product discovery, cart recovery, and order support." },
  { icon: GraduationCap, title: "Education", desc: "Automated enrollment, campus FAQs, and appointment scheduling." },
  { icon: Stethoscope, title: "Healthcare", desc: "Intake, appointment reminders, and post-visit follow-ups with consent flows." },
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Deploy to any niche</h2>
            <p className="mt-3 text-slate-300">Pick a template, connect the inbox, calendar, and CRM, then go live. Scale from your first client to hundreds with multi-tenant controls.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {cases.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{title}</h3>
                  <p className="text-slate-300 text-sm mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-1 bg-gradient-to-b from-white/10 to-transparent">
            <div className="rounded-xl p-8 bg-slate-900/40">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-white">98%+</div>
                  <div className="text-slate-300 text-sm">Missed call capture</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">15 min</div>
                  <div className="text-slate-300 text-sm">Avg. setup time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">3x</div>
                  <div className="text-slate-300 text-sm">Lead-to-book rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">40%+</div>
                  <div className="text-slate-300 text-sm">Support deflection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
