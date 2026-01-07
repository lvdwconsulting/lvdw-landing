import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
        ← Zur Startseite
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">Impressum</h1>

      <div className="prose prose-invert mt-6 max-w-none">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Laura van de Weyer <br />
          Am Frankenkam 15a <br />
          41334 Nettetal <br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 015679715621 <br />
          E-Mail: info@lvdwconsulting.de
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Laura van de Weyer <br />
          Am Frankenkam 15a <br />
          41334 Nettetal
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieterin bin ich gemäß den allgemeinen Gesetzen für eigene
          Inhalte auf diesen Seiten verantwortlich. Ich übernehme jedoch keine
          Gewähr für die Aktualität, Vollständigkeit und Richtigkeit der Inhalte.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Diese Website kann Links zu externen Websites Dritter enthalten, auf
          deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese
          fremden Inhalte auch keine Gewähr übernehmen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet.
        </p>
      </div>
    </main>
  );
}
