import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  problemBullets: string[];
  solutionText: string;
  included: string[];
  forWho: string[];
  notForWho: string[];
  outcome: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

export default function BundlePage(props: Props) {
  const {
    eyebrow,
    title,
    subtitle,
    problemBullets,
    solutionText,
    included,
    forWho,
    notForWho,
    outcome,
    ctaPrimary,
    ctaSecondary,
  } = props;

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
        ← Zur Übersicht
      </Link>

      <header className="mt-6">
        <p className="text-sm uppercase tracking-widest text-zinc-400">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight">{title}</h1>
        <p className="mt-3 text-zinc-300">{subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={ctaPrimary.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:opacity-90"
          >
            {ctaPrimary.label}
          </a>

          <Link
            href={ctaSecondary.href}
            className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-50 hover:bg-zinc-900"
          >
            {ctaSecondary.label}
          </Link>
        </div>
      </header>

      <section className="mt-12 grid gap-4">
        <Card title="Das Problem">
          <List items={problemBullets} />
        </Card>

        <Card title="Die Lösung">
          <p className="text-sm text-zinc-300">{solutionText}</p>
        </Card>

        <Card title="Was du bekommst">
          <List items={included} />
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Für wen">
            <List items={forWho} />
          </Card>
          <Card title="Nicht für wen">
            <List items={notForWho} />
          </Card>
        </div>

        <Card title="Ergebnis">
          <List items={outcome} />
        </Card>

        <Card title="Nächster Schritt (optional)">
          <p className="text-sm text-zinc-300">
            Wenn du merkst, dass du Unterstützung willst: Wir setzen HR auch gemeinsam mit dir um –
            pragmatisch, toolbasiert und passend zu deinem Unternehmen.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={ctaPrimary.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:opacity-90"
            >
              {ctaPrimary.label}
            </a>

            <Link
              href={ctaSecondary.href}
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-50 hover:bg-zinc-900"
            >
              {ctaSecondary.label}
            </Link>
          </div>
        </Card>
      </section>

      <footer className="mt-14 border-t border-zinc-900 pt-8 text-sm text-zinc-500">
        <div className="flex flex-wrap gap-4">
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

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-zinc-300">
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-zinc-500" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}
