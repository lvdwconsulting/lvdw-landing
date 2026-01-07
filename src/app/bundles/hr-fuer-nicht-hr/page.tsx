import BundlePage from "@/components/BundlePage";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <BundlePage
      eyebrow="Digitales Bundle"
      title="HR verstehen & anwenden – ohne HR zu sein"
      subtitle="Für Geschäftsführer:innen & Office Manager ohne HR-Hintergrund."
      problemBullets={[
        "Unsicherheit bei HR-Entscheidungen",
        "Angst, etwas falsch zu machen",
        "HR läuft nebenbei",
      ]}
      solutionText="Dieses Bundle macht HR verständlich, greifbar und sicher anwendbar."
      included={[
        "HR-Basics einfach erklärt",
        "Entscheidungshilfen",
        "Gesprächsvorlagen",
        "Do's & Don'ts",
      ]}
      forWho={[
        "Geschäftsführer:innen",
        "Office Manager",
        "Führungskräfte",
      ]}
      notForWho={[
        "HR-Expert:innen",
      ]}
      outcome={[
        "Mehr Sicherheit im HR-Alltag",
        "Bessere Entscheidungen",
        "Weniger Risiken",
      ]}
      ctaPrimary={{ label: "Jetzt kaufen", href: site.checkout.hrFuerNichtHr }}
      ctaSecondary={{ label: "Sparring anfragen", href: site.consultingCtaUrl }}
    />
  );
}
