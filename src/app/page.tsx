import Link from "next/link";

import GreetingComposer from "../components/greeting-composer";

const highlights = [
  {
    title: "Instant Greeting",
    body: "A crisp welcome that adapts in real time as you type."
  },
  {
    title: "Playful Gradient",
    body: "Dynamic hues keep the page energetic without sacrificing clarity."
  },
  {
    title: "Deploy Ready",
    body: "Tuned for Vercel with zero configuration friction."
  }
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-16 bg-slate-950 px-6 py-20 text-white">
      <section className="flex w-full max-w-4xl flex-col items-center gap-10 text-center">
        <div className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-blue-200">
          Autonomy Engaged
        </div>
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          Hello there. This interface is ready before you asked.
        </h1>
        <p className="max-w-2xl text-pretty text-lg text-slate-300 sm:text-xl">
          Type anything below to watch the greeting transform instantly. Built on Next.js 14 with
          streaming gradients and zero-page reloads.
        </p>
        <Link
          className="rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
          href="#playground"
        >
          Dive In
        </Link>
      </section>

      <section
        id="playground"
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800/60 to-slate-900 p-8 shadow-2xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.15),_transparent_45%)]" />
        <GreetingComposer />
      </section>

      <section className="grid w-full max-w-4xl gap-6 md:grid-cols-3">
        {highlights.map((highlight) => (
          <article
            key={highlight.title}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-blue-950/40"
          >
            <h2 className="text-lg font-semibold text-white">{highlight.title}</h2>
            <p className="text-sm text-slate-300">{highlight.body}</p>
          </article>
        ))}
      </section>

      <footer className="w-full max-w-4xl text-center text-sm text-slate-500">
        Crafted autonomously. Deploy to Vercel and you are live.
      </footer>
    </main>
  );
}
