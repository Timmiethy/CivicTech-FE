// src/pages/PreviewPage.jsx
const PreviewPage = () => {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col">
        <header className="px-4 py-3 border-b border-slate-800">
          <h1 className="text-lg font-semibold">Preview & details</h1>
          <p className="text-xs text-slate-400 mt-1">
            Check your photo and fill in some information before sending.
          </p>
        </header>
  
        {/* Photo preview */}
        <main className="flex-1 px-4 py-4 space-y-4 overflow-y-auto">
          <div className="w-full max-w-sm mx-auto aspect-[3/4] bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center text-sm text-slate-400">
            Photo preview placeholder
          </div>
  
          {/* Form */}
          <form className="space-y-3 pb-10">
            <div>
              <label className="block text-xs mb-1 text-slate-300">
                Name (optional)
              </label>
              <input
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                placeholder="Nguyễn Văn A"
              />
            </div>
  
            <div>
              <label className="block text-xs mb-1 text-slate-300">
                Phone number (for rescue team)
              </label>
              <input
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                type="tel"
                placeholder="09xx xxx xxx"
              />
            </div>
  
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs mb-1 text-slate-300">
                  City / Province (optional)
                </label>
                <select className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm">
                  <option value="">Select city</option>
                  {/* Later: real options */}
                </select>
              </div>
              <div>
                <label className="block text-xs mb-1 text-slate-300">
                  Ward / Commune (optional)
                </label>
                <select className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm">
                  <option value="">Select ward</option>
                </select>
              </div>
            </div>
  
            <div>
              <label className="block text-xs mb-1 text-slate-300">
                Description
              </label>
              <textarea
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm min-h-[100px] outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Example: Flood reaches 1m, 3 people stuck on 2nd floor, no electricity..."
              />
            </div>
  
            <div className="flex items-center gap-2 mt-2">
              <input id="emergency" type="checkbox" className="w-4 h-4" />
              <label htmlFor="emergency" className="text-xs text-rose-400">
                This is an emergency (need urgent rescue)
              </label>
            </div>
          </form>
        </main>
  
        <footer className="px-4 pb-6 pt-3 border-t border-slate-800">
          <button className="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold active:scale-95 transition-transform">
            Submit report
          </button>
        </footer>
      </div>
    );
  }
  
export default PreviewPage