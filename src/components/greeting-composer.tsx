"use client";

export default function GreetingComposer() {
  return (
    <section className="relative z-10 flex flex-col gap-6">
      <div
        aria-hidden
        className="h-2 w-full rounded-full bg-gradient-to-r from-blue-400 via-sky-500 to-emerald-400 blur-sm"
      />
      <label className="flex flex-col items-start gap-3 text-left text-sm uppercase tracking-[0.3em] text-slate-400">
        Compose
        <LiveGreeting />
      </label>
    </section>
  );
}

function LiveGreeting() {
  return (
    <div className="flex w-full flex-col gap-4">
      <input
        autoFocus
        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base font-medium text-white shadow-inner shadow-blue-900/30 outline-none transition focus:border-blue-300 focus:bg-blue-500/10 focus:shadow-blue-500/40"
        placeholder="Say hi and watch the response..."
        type="text"
        onChange={(event) => {
          const root = event.currentTarget.closest<HTMLElement>("[data-greeting-root]");
          if (!root) return;
          const preview = root.querySelector<HTMLElement>("[data-greeting-preview]");
          if (!preview) return;
          const value = event.currentTarget.value.trim();
          preview.textContent = value.length > 0 ? value : "Hello, world.";
        }}
      />
      <div
        data-greeting-root
        className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-left shadow-lg"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-300">
          Live Greeting
        </span>
        <p
          data-greeting-preview
          className="text-pretty text-2xl font-semibold text-white transition-all duration-200"
        >
          Hello, world.
        </p>
      </div>
    </div>
  );
}
