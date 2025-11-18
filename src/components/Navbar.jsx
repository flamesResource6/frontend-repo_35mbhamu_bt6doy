import { Menu, X, Bot, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500/40 via-sky-500/40 to-amber-400/40 blur-md" />
                <div className="relative rounded-xl bg-slate-900/80 border border-white/10 p-2">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="font-semibold text-white text-lg">Nova Automations</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#usecases" className="text-slate-300 hover:text-white transition">Use cases</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="px-4 py-2 text-slate-200 hover:text-white transition">Sign in</a>
              <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 via-sky-500 to-amber-400 text-slate-900 font-semibold shadow-lg shadow-fuchsia-500/10 hover:brightness-110 transition">
                <Sparkles className="w-4 h-4" /> Start free
              </a>
            </div>

            <button className="md:hidden text-slate-200" onClick={() => setOpen(v => !v)}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-4 space-y-3">
              <a href="#features" className="block text-slate-200">Features</a>
              <a href="#usecases" className="block text-slate-200">Use cases</a>
              <a href="#pricing" className="block text-slate-200">Pricing</a>
              <a href="#faq" className="block text-slate-200">FAQ</a>
              <a href="#cta" className="block mt-2 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 via-sky-500 to-amber-400 text-slate-900 font-semibold">Start free</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
