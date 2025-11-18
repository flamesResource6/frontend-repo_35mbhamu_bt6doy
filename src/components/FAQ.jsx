const faqs = [
  {
    q: "Can I white-label the platform?",
    a: "Yes, from custom domains and logos to branded emails and client portals, everything can be white-labeled.",
  },
  {
    q: "Which CRMs and calendars do you support?",
    a: "Google Calendar, Calendly, HubSpot, Pipedrive, Salesforce, and more via webhooks and APIs.",
  },
  {
    q: "How does billing work?",
    a: "Choose a plan and pay for usage. Minutes and messages beyond plan limits are billed at transparent overage rates.",
  },
  {
    q: "What about compliance?",
    a: "SOC 2 ready with optional data residency, consent flows, and audit logging for regulated industries.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group open:bg-white/5">
              <summary className="cursor-pointer list-none px-6 py-5 text-white font-medium flex items-center justify-between">
                <span>{q}</span>
                <span className="transition group-open:rotate-180">▾</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
