// src/pages/ReportPage.jsx
export default function ReportPage() {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <header className="px-4 py-3 flex items-center justify-between">
          <p className="text-sm text-slate-300">Create a report</p>
          {/* Later maybe add a small "X" back button */}
        </header>
  
        {/* Camera-like area */}
        <main className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm aspect-[3/4] bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700">
            <p className="text-slate-400 text-sm text-center px-4">
              Camera view placeholder. Here we&apos;ll capture a photo or let
              you upload one.
            </p>
          </div>
        </main>
  
        <footer className="px-4 pb-6 pt-4 space-y-2">
          <button className="w-full py-3 rounded-xl bg-slate-200 text-black font-semibold active:scale-95 transition-transform">
            Take photo
          </button>
          <button className="w-full py-3 rounded-xl bg-slate-800 text-slate-100 text-sm active:scale-95 transition-transform">
            Upload from gallery
          </button>
        </footer>
      </div>
    );
  }
  