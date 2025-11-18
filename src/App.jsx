import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background texture and glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(147,51,234,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(2,132,199,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(251,191,36,0.12),transparent_40%)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <UseCases />
        <Pricing />
        <CTA />
        <FAQ />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Nova Automations. All rights reserved.</p>
          <div className="text-slate-400 text-sm flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App