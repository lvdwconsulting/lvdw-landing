import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          lvdw consulting
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight">
          Digitale HR-Bundles für KMU
        </h1>
        <p className="mt-4 text-zinc-300">
          Vorlagen, Systeme & Toolkits, die du sofort intern nutzen kannst – oder
          wir setzen es gemeinsam um.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/bundles/hr-startklar"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:opacity-90"
          >
            Bundles ansehen
          </Link>
          <Link
            href="/kontakt"
            className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-50 hover:bg-zinc-900"
          >
            Beratung anfragen
          </Link>
        </div>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <BundleCard
          title="HR Startklar"
          desc="Struktur, Pflichten, Klarheit – das HR-Grundsystem für KMU."
          href="/bundles/hr-startklar"
        />
        <BundleCard
          title="Recruiting ohne HR-Abteilung"
          desc="Prozess, Templates & Scorecards – damit Recruiting funktioniert."
          href="/bundles/recruiting-ohne-hr"
        />
        <BundleCard
          title="Digital HR Toolkit"
          desc="Tools & Workflows – HR digitalisieren ohne Überforderung."
          href="/bundles/digital-hr-toolkit"
        />
        <BundleCard
          title="HR für Nicht-HR"
          desc="HR sicher steuern – verständlich & praxisnah."
          href="/bundles/hr-fuer-nicht-hr"
        />
      </section>

      <footer className="mt-14 border-t border-zinc-900 pt-8 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} lvdw consulting</p>
        <div className="mt-3 flex gap-4">
          <Link className="underline" href="/impressum">
            Impressum
          </Link>
          <Link className="underline" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </footer>
    </main>
  );
}

function BundleCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 hover:bg-zinc-950/70 transition"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-3 text-sm text-zinc-300">{desc}</p>
      <p className="mt-5 text-sm underline text-zinc-200">Mehr erfahren</p>
    </Link>
  );
}
