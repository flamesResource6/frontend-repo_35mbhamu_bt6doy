import Spline from '@splinetool/react-spline';
import { Check, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-gradient-to-t from-fuchsia-500/10 via-sky-500/10 to-amber-400/10 blur-3xl pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 mb-5">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>AI Automation Agency Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Launch AI voice and chat agents for clients in minutes
            </h1>
            
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              Prospect, qualify, book, and support customers 24/7 with autonomous AI agents. White-label dashboards, workflows, and analytics built for automation agencies.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 via-sky-500 to-amber-400 text-slate-900 font-semibold shadow-lg shadow-fuchsia-500/10 hover:brightness-110 transition">
                Get started free
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition">
                See features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> White-label client portals</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Voice + chat agents</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Calendars & CRMs</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Usage-based billing</div>
            </div>
          </div>

          <div className="relative h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
