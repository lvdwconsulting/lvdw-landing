import BundlePage from "@/components/BundlePage";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <BundlePage
      eyebrow="Digitales Bundle"
      title="HR Startklar"
      subtitle="Das interne HR-Grundsystem für KMU - Struktur, Pflichten, Klarheit."
      problemBullets={[
        "HR läuft nebenbei – ohne klare Zuständigkeiten",
        "Ordner- & Dokumentenchaos",
        "Unsicherheit: Was ist Pflicht, was nicht?",
        "Zeitverlust durch Improvisation",
      ]}
      solutionText="HR Startklar gibt dir eine klare HR-Basis: Struktur, Orientierung und sofort nutzbare Vorlagen."
      included={[
        "HR Bare-Minimum Übersicht",
        "HR-Pflichten & Must-haves",
        "Ordner- & Ablagestruktur",
        "HR-Jahresfahrplan",
        "Rollen & Verantwortlichkeiten",
      ]}
      forWho={[
        "KMU ab ca. 20 Mitarbeitenden",
        "Geschäftsführer:innen",
        "Office Manager",
      ]}
      notForWho={[
        "Konzerne",
        "Unternehmen ohne Umsetzungswillen",
      ]}
      outcome={[
        "Du weißt, was HR-seitig wirklich nötig ist",
        "Du bringst Ordnung & Sicherheit in HR",
        "Du reduzierst Risiken",
      ]}
      ctaPrimary={{ label: "Jetzt kaufen", href: site.checkout.hrStartklar }}
      ctaSecondary={{ label: "Beratung anfragen", href: site.consultingCtaUrl }}
    />
  );
}
