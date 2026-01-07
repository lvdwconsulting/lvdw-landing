import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
        ← Zur Startseite
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">Datenschutzerklärung</h1>

      <div className="prose prose-invert mt-6 max-w-none">
        <p>
          Verantwortliche: Laura van de Weyer, Am Frankenkam 15a, 41334 Nettetal,
          Deutschland. E-Mail: info@lvdwconsulting.de, Telefon: 015679715621.
        </p>

        <h2>Allgemeine Hinweise</h2>
        <p>
          Diese Website dient der Information über Leistungen und digitale
          Produkte. Personenbezogene Daten werden nur verarbeitet, soweit dies
          zur Bereitstellung der Website und der angebotenen Funktionen notwendig
          ist.
        </p>

        <h2>Server-Logfiles</h2>
        <p>
          Beim Aufruf der Website können durch den Hostinganbieter Daten in
          Server-Logfiles verarbeitet werden (z. B. IP-Adresse, Datum/Uhrzeit,
          angeforderte Seite, User-Agent). Die Verarbeitung erfolgt zur
          technischen Bereitstellung und Sicherheit der Website.
        </p>

        <h2>Kontaktaufnahme</h2>
        <p>
          Wenn du per E-Mail oder über ein Kontaktformular Kontakt aufnimmst,
          werden die von dir übermittelten Daten zur Bearbeitung der Anfrage
          verarbeitet.
        </p>

        <h2>Terminbuchung</h2>
        <p>
          Sofern eine Terminbuchung über externe Dienste eingebunden ist, werden
          die hierfür notwendigen Daten an den jeweiligen Anbieter übertragen.
        </p>

        <h2>Digitale Produkte & Zahlung</h2>
        <p>
          Für den Verkauf digitaler Produkte können Zahlungs- und Checkout-Dienste
          (z. B. Lemon Squeezy) genutzt werden. In diesem Fall werden zur
          Vertragsabwicklung erforderliche Daten an den Dienstleister übertragen.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
          der Verarbeitung sowie Datenübertragbarkeit im Rahmen der gesetzlichen
          Vorgaben. Außerdem hast du ein Beschwerderecht bei einer
          Aufsichtsbehörde.
        </p>

        <h2>Stand</h2>
        <p>Stand: Januar 2026</p>

        <p className="text-sm opacity-80">
          Hinweis: Dies ist eine vereinfachte Vorlage. Für maximale rechtliche
          Sicherheit (insb. Cookies/Tracking, konkrete Tools, Zahlungsanbieter,
          Newsletter) empfiehlt sich eine anwaltlich oder über einen Generator
          erstellte Datenschutzerklärung.
        </p>
      </div>
    </main>
  );
}
