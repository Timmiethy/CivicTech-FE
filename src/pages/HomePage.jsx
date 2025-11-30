// src/pages/HomePage.jsx
import { Link } from '@tanstack/react-router';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Top intro section */}
      <header className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold">
          Flood Report Vietnam
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          A citizen-powered platform to report flooding and safety issues, so
          responders can act faster.
        </p>
      </header>

      {/* Middle engaging UI placeholder */}
      <main className="flex-1 px-4">
        <div className="mt-4 p-4 rounded-xl border border-slate-700 bg-slate-900">
          <p className="text-sm text-slate-300">
            Live overview of reports will appear here (map / list).
          </p>
          <p className="mt-1 text-xs text-slate-500">
            (For now this is just a placeholder for the demo.)
          </p>
        </div>
      </main>

      {/* Bottom report button */}
      <footer className="px-4 pb-6 pt-4">
        <Link
          to="/report"
          className="block w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-center active:scale-95 transition-transform"
        >
          Report now
        </Link>
      </footer>
    </div>
  );
}
