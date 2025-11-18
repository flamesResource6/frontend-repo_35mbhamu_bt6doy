export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-sky-500/20 to-amber-400/20 pointer-events-none" />
          <div className="relative p-10 bg-slate-900/50">
            <h3 className="text-white text-2xl sm:text-3xl font-bold">Build your automation agency with AI agents</h3>
            <p className="text-slate-200 mt-2">Get the tools to launch, manage, and scale client automations under your brand.</p>

            <form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3">
              <input type="email" required placeholder="Work email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60" />
              <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 via-sky-500 to-amber-400 text-slate-900 font-semibold shadow-lg shadow-fuchsia-500/10 hover:brightness-110 transition">
                Get a demo
              </button>
            </form>

            <div className="mt-3 text-xs text-slate-300">No credit card required</div>
          </div>
        </div>
      </div>
    </section>
  );
}
