// src/pages/CompletePage.jsx
import { Link } from '@tanstack/react-router';

export default function CompletePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-sm space-y-3">
        <h1 className="text-2xl font-bold">Thank you</h1>
        <p className="text-sm text-slate-300">
          Your report has been received. In emergency cases, please also call
          local authorities if possible.
        </p>

        {/* Later we show the report code here */}

        <Link
          to="/"
          className="mt-4 inline-block px-4 py-2 rounded-xl bg-slate-800 text-slate-100 active:scale-95 transition-transform"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
