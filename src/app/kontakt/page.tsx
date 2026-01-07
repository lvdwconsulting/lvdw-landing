import Link from "next/link";

export default function Kontakt() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
        ← Zurück
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">Beratung anfragen</h1>
      <p className="mt-3 text-zinc-300">
        Wenn du merkst, dass du Unterstützung willst, setzen wir HR auch gemeinsam mit dir um.
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
        <p className="text-zinc-300">
          Platzhalter für dein Kontaktformular / Terminlink (z. B. Calendly, Google Calendar, OnePage).
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          Tipp: In Vercel kannst du später auch ein Form-Backend (z. B. Formspark, Tally, etc.) anbinden.
        </p>
      </div>
    </main>
  );
}
