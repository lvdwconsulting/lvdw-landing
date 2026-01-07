import Link from "next/link";

export default function DankePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Danke!</h1>
      <p className="mt-4 text-zinc-300">
        Deine Anfrage ist angekommen. Ich melde mich so schnell wie möglich bei dir.
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:opacity-90"
        >
          Zur Startseite
        </Link>
        <Link
          href="/bundles/hr-startklar"
          className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-50 hover:bg-zinc-900"
        >
          Bundles ansehen
        </Link>
      </div>
    </main>
  );
}
